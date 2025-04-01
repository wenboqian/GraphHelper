const text = `
    HloModule Scribable.222, input_output_alias={ {1}: (4, {}, must-alias), {2}: (5, {}, must-alias) }

%reduce.100.MaxFunc.105 (p0.102: f32[], p1.103: f32[]) -> f32[] {
  %p0.102 = f32[] parameter(0)
  %p1.103 = f32[] parameter(1)
  ROOT %maximum.104 = f32[] maximum(f32[] %p0.102, f32[] %p1.103)
}

%reduce.106.MaxFunc.111 (p0.108: f32[], p1.109: f32[]) -> f32[] {
  %p0.108 = f32[] parameter(0)
  %p1.109 = f32[] parameter(1)
  ROOT %maximum.110 = f32[] maximum(f32[] %p0.108, f32[] %p1.109)
}

%reduce.117.AddFunc.122 (p0.119: f32[], p1.120: f32[]) -> f32[] {
  %p0.119 = f32[] parameter(0)
  %p1.120 = f32[] parameter(1)
  ROOT %add.121 = f32[] add(f32[] %p0.119, f32[] %p1.120)
}

%reduce.127.AddFunc.132 (p0.129: f32[], p1.130: f32[]) -> f32[] {
  %p0.129 = f32[] parameter(0)
  %p1.130 = f32[] parameter(1)
  ROOT %add.131 = f32[] add(f32[] %p0.129, f32[] %p1.130)
}

%scatter.142.AssignFunc.146 (p0.144: f32[], p1.145: f32[]) -> f32[] {
  %p0.144 = f32[] parameter(0)
  ROOT %p1.145 = f32[] parameter(1)
}

%scatter.147.AssignFunc.151 (p0.149: f32[], p1.150: f32[]) -> f32[] {
  %p0.149 = f32[] parameter(0)
  ROOT %p1.150 = f32[] parameter(1)
}

%all-reduce.157.Reducer.162 (p0.159: f32[], p1.160: f32[]) -> f32[] {
  %p0.159 = f32[] parameter(0)
  %p1.160 = f32[] parameter(1)
  ROOT %add.161 = f32[] add(f32[] %p0.159, f32[] %p1.160)
}

%all-reduce.193.Reducer.198 (p0.195: f32[], p1.196: f32[]) -> f32[] {
  %p0.195 = f32[] parameter(0)
  %p1.196 = f32[] parameter(1)
  ROOT %add.197 = f32[] add(f32[] %p0.195, f32[] %p1.196)
}

ENTRY %Scribable.222 (p0.1: f32[6144,1,4], p1.2: f32[1,96,96], p2.3: s32[1], p3.4: s32[4], p4.5: f32[128,4,32,96], p5.6: f32[128,4,32,96], p6.7: f32[6144], p7.8: f32[6144], p8.9: f32[6144,3072], p9.10: f32[3072], p10.11: f32[6144,3072], p11.12: f32[3072], p12.13: f32[6144,3072], p13.14: f32[3072], p14.15: f32[3072,6144], p15.16: f32[6144], p16.17: f32[6144], p17.18: f32[6144], p18.19: f32[6144,12288], p19.20: f32[12288], p20.21: f32[12288,6144], p21.22: f32[6144], p22.23: f32[6144], p23.24: f32[6144], p24.25: f32[6144,25216]) -> (f32[25216,1,4], f32[128,4,32,96], f32[128,4,32,96]) {
  %p24.25 = f32[6144,25216]{1,0} parameter(24)
  %custom-call.203 = f32[6144,25216]{1,0} custom-call(f32[6144,25216]{1,0} %p24.25), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %p0.1 = f32[6144,1,4]{2,1,0} parameter(0)
  %transpose.51 = f32[4,1,6144]{2,1,0} transpose(f32[6144,1,4]{2,1,0} %p0.1), dimensions={2,1,0}
  %reshape.170 = f32[4,6144]{1,0} reshape(f32[4,1,6144]{2,1,0} %transpose.51)
  %convert.171 = f32[4,6144]{1,0} convert(f32[4,6144]{1,0} %reshape.170)
  %constant.172 = f32[] constant(1)
  %broadcast.173 = f32[4]{0} broadcast(f32[] %constant.172), dimensions={}
  %constant.174 = f32[] constant(0)
  %broadcast.175 = f32[4]{0} broadcast(f32[] %constant.174), dimensions={}
  %batch-norm-training.176 = (f32[4,6144]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[4,6144]{1,0} %convert.171, f32[4]{0} %broadcast.173, f32[4]{0} %broadcast.175), epsilon=1e-05, feature_index=0
  %get-tuple-element.177 = f32[4,6144]{1,0} get-tuple-element((f32[4,6144]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.176), index=0
  %p16.17 = f32[6144]{0} parameter(16)
  %custom-call.164 = f32[6144]{0} custom-call(f32[6144]{0} %p16.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.178 = f32[4,6144]{1,0} broadcast(f32[6144]{0} %custom-call.164), dimensions={1}
  %multiply.179 = f32[4,6144]{1,0} multiply(f32[4,6144]{1,0} %get-tuple-element.177, f32[4,6144]{1,0} %broadcast.178)
  %p17.18 = f32[6144]{0} parameter(17)
  %custom-call.165 = f32[6144]{0} custom-call(f32[6144]{0} %p17.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.180 = f32[4,6144]{1,0} broadcast(f32[6144]{0} %custom-call.165), dimensions={1}
  %add.181 = f32[4,6144]{1,0} add(f32[4,6144]{1,0} %multiply.179, f32[4,6144]{1,0} %broadcast.180)
  %convert.182 = f32[4,6144]{1,0} convert(f32[4,6144]{1,0} %add.181)
  %reshape.183 = f32[4,1,6144]{2,1,0} reshape(f32[4,6144]{1,0} %convert.182)
  %reshape.184 = f32[4,6144]{1,0} reshape(f32[4,1,6144]{2,1,0} %reshape.183)
  %p18.19 = f32[6144,12288]{1,0} parameter(18)
  %custom-call.166 = f32[6144,12288]{1,0} custom-call(f32[6144,12288]{1,0} %p18.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.185 = f32[4,12288]{1,0} dot(f32[4,6144]{1,0} %reshape.184, f32[6144,12288]{1,0} %custom-call.166), lhs_contracting_dims={1}, rhs_contracting_dims={0}
  %p19.20 = f32[12288]{0} parameter(19)
  %custom-call.167 = f32[12288]{0} custom-call(f32[12288]{0} %p19.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.186 = f32[4,12288]{1,0} broadcast(f32[12288]{0} %custom-call.167), dimensions={1}
  %add.187 = f32[4,12288]{1,0} add(f32[4,12288]{1,0} %dot.185, f32[4,12288]{1,0} %broadcast.186)
  %custom-call.188 = f32[4,12288]{1,0} custom-call(f32[4,12288]{1,0} %add.187), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED
  %p20.21 = f32[12288,6144]{1,0} parameter(20)
  %custom-call.168 = f32[12288,6144]{1,0} custom-call(f32[12288,6144]{1,0} %p20.21), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.189 = f32[4,6144]{1,0} dot(f32[4,12288]{1,0} %custom-call.188, f32[12288,6144]{1,0} %custom-call.168), lhs_contracting_dims={1}, rhs_contracting_dims={0}
  %p21.22 = f32[6144]{0} parameter(21)
  %custom-call.169 = f32[6144]{0} custom-call(f32[6144]{0} %p21.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.190 = f32[4,6144]{1,0} broadcast(f32[6144]{0} %custom-call.169), dimensions={1}
  %add.191 = f32[4,6144]{1,0} add(f32[4,6144]{1,0} %dot.189, f32[4,6144]{1,0} %broadcast.190)
  %reshape.192 = f32[4,1,6144]{2,1,0} reshape(f32[4,6144]{1,0} %add.191)
  %all-reduce.193 = f32[4,1,6144]{2,1,0} all-reduce(f32[4,1,6144]{2,1,0} %reshape.192), replica_groups={{0,1}}, to_apply=%all-reduce.193.Reducer.198
  %iota.26 = s32[128]{0} iota(), iota_dimension=0
  %broadcast.27 = s32[1,128]{1,0} broadcast(s32[128]{0} %iota.26), dimensions={1}
  %p2.3 = s32[1]{0} parameter(2)
  %broadcast.28 = s32[1,128]{1,0} broadcast(s32[1]{0} %p2.3), dimensions={0}
  %compare.29 = pred[1,128]{1,0} compare(s32[1,128]{1,0} %broadcast.27, s32[1,128]{1,0} %broadcast.28), direction=LT
  %broadcast.33 = pred[4,1,128]{2,1,0} broadcast(pred[1,128]{1,0} %compare.29), dimensions={1,2}
  %broadcast.30 = s32[4,128]{1,0} broadcast(s32[128]{0} %iota.26), dimensions={1}
  %p3.4 = s32[4]{0} parameter(3)
  %broadcast.31 = s32[4,128]{1,0} broadcast(s32[4]{0} %p3.4), dimensions={0}
  %compare.32 = pred[4,128]{1,0} compare(s32[4,128]{1,0} %broadcast.30, s32[4,128]{1,0} %broadcast.31), direction=GE
  %broadcast.34 = pred[4,1,128]{2,1,0} broadcast(pred[4,128]{1,0} %compare.32), dimensions={0,2}
  %and.35 = pred[4,1,128]{2,1,0} and(pred[4,1,128]{2,1,0} %broadcast.33, pred[4,1,128]{2,1,0} %broadcast.34)
  %broadcast.92 = pred[4,32,1,128]{3,2,1,0} broadcast(pred[4,1,128]{2,1,0} %and.35), dimensions={0,2,3}
  %reshape.52 = f32[4,6144]{1,0} reshape(f32[4,1,6144]{2,1,0} %transpose.51)
  %convert.53 = f32[4,6144]{1,0} convert(f32[4,6144]{1,0} %reshape.52)
  %constant.54 = f32[] constant(1)
  %broadcast.55 = f32[4]{0} broadcast(f32[] %constant.54), dimensions={}
  %constant.56 = f32[] constant(0)
  %broadcast.57 = f32[4]{0} broadcast(f32[] %constant.56), dimensions={}
  %batch-norm-training.58 = (f32[4,6144]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[4,6144]{1,0} %convert.53, f32[4]{0} %broadcast.55, f32[4]{0} %broadcast.57), epsilon=1e-05, feature_index=0
  %get-tuple-element.59 = f32[4,6144]{1,0} get-tuple-element((f32[4,6144]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.58), index=0
  %p6.7 = f32[6144]{0} parameter(6)
  %custom-call.39 = f32[6144]{0} custom-call(f32[6144]{0} %p6.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.60 = f32[4,6144]{1,0} broadcast(f32[6144]{0} %custom-call.39), dimensions={1}
  %multiply.61 = f32[4,6144]{1,0} multiply(f32[4,6144]{1,0} %get-tuple-element.59, f32[4,6144]{1,0} %broadcast.60)
  %p7.8 = f32[6144]{0} parameter(7)
  %custom-call.40 = f32[6144]{0} custom-call(f32[6144]{0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.62 = f32[4,6144]{1,0} broadcast(f32[6144]{0} %custom-call.40), dimensions={1}
  %add.63 = f32[4,6144]{1,0} add(f32[4,6144]{1,0} %multiply.61, f32[4,6144]{1,0} %broadcast.62)
  %convert.64 = f32[4,6144]{1,0} convert(f32[4,6144]{1,0} %add.63)
  %reshape.65 = f32[4,1,6144]{2,1,0} reshape(f32[4,6144]{1,0} %convert.64)
  %transpose.66 = f32[6144,1,4]{2,1,0} transpose(f32[4,1,6144]{2,1,0} %reshape.65), dimensions={2,1,0}
  %reshape.67 = f32[6144,4]{1,0} reshape(f32[6144,1,4]{2,1,0} %transpose.66)
  %p8.9 = f32[6144,3072]{1,0} parameter(8)
  %custom-call.41 = f32[6144,3072]{1,0} custom-call(f32[6144,3072]{1,0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.68 = f32[4,3072]{1,0} dot(f32[6144,4]{1,0} %reshape.67, f32[6144,3072]{1,0} %custom-call.41), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p9.10 = f32[3072]{0} parameter(9)
  %custom-call.42 = f32[3072]{0} custom-call(f32[3072]{0} %p9.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.69 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %custom-call.42), dimensions={1}
  %add.70 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.68, f32[4,3072]{1,0} %broadcast.69)
  %reshape.77 = f32[1,4,32,96]{3,2,1,0} reshape(f32[4,3072]{1,0} %add.70)
  %reshape.80 = f32[1,128,96]{2,1,0} reshape(f32[1,4,32,96]{3,2,1,0} %reshape.77)
  %p1.2 = f32[1,96,96]{2,1,0} parameter(1)
  %dot.81 = f32[1,128,96]{2,1,0} dot(f32[1,128,96]{2,1,0} %reshape.80, f32[1,96,96]{2,1,0} %p1.2), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}
  %reshape.82 = f32[1,4,32,96]{3,2,1,0} reshape(f32[1,128,96]{2,1,0} %dot.81)
  %constant.86 = f32[] constant(9.79795933)
  %broadcast.87 = f32[1,4,32,96]{3,2,1,0} broadcast(f32[] %constant.86), dimensions={}
  %divide.88 = f32[1,4,32,96]{3,2,1,0} divide(f32[1,4,32,96]{3,2,1,0} %reshape.82, f32[1,4,32,96]{3,2,1,0} %broadcast.87)
  %p4.5 = f32[128,4,32,96]{3,2,1,0} parameter(4)
  %custom-call.49 = f32[128,4,32,96]{3,2,1,0} custom-call(f32[128,4,32,96]{3,2,1,0} %p4.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.89 = f32[4,32,1,128]{3,2,1,0} dot(f32[1,4,32,96]{3,2,1,0} %divide.88, f32[128,4,32,96]{3,2,1,0} %custom-call.49), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.90 = f32[] constant(-30000)
  %broadcast.91 = f32[4,32,1,128]{3,2,1,0} broadcast(f32[] %constant.90), dimensions={}
  %select.93 = f32[4,32,1,128]{3,2,1,0} select(pred[4,32,1,128]{3,2,1,0} %broadcast.92, f32[4,32,1,128]{3,2,1,0} %dot.89, f32[4,32,1,128]{3,2,1,0} %broadcast.91)
  %constant.99 = f32[] constant(-inf)
  %reduce.100 = f32[4,32,1]{2,1,0} reduce(f32[4,32,1,128]{3,2,1,0} %select.93, f32[] %constant.99), dimensions={3}, to_apply=%reduce.100.MaxFunc.105
  %broadcast.37 = s32[4,1]{1,0} broadcast(s32[1]{0} %p2.3), dimensions={1}
  %broadcast.36 = s32[4,1]{1,0} broadcast(s32[4]{0} %p3.4), dimensions={0}
  %compare.38 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.37, s32[4,1]{1,0} %broadcast.36), direction=GE
  %broadcast.97 = pred[4,32,1,1]{3,2,1,0} broadcast(pred[4,1]{1,0} %compare.38), dimensions={0,3}
  %p10.11 = f32[6144,3072]{1,0} parameter(10)
  %custom-call.43 = f32[6144,3072]{1,0} custom-call(f32[6144,3072]{1,0} %p10.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.71 = f32[4,3072]{1,0} dot(f32[6144,4]{1,0} %reshape.67, f32[6144,3072]{1,0} %custom-call.43), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p11.12 = f32[3072]{0} parameter(11)
  %custom-call.44 = f32[3072]{0} custom-call(f32[3072]{0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.72 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %custom-call.44), dimensions={1}
  %add.73 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.71, f32[4,3072]{1,0} %broadcast.72)
  %reshape.78 = f32[1,4,32,96]{3,2,1,0} reshape(f32[4,3072]{1,0} %add.73)
  %reshape.83 = f32[1,128,96]{2,1,0} reshape(f32[1,4,32,96]{3,2,1,0} %reshape.78)
  %dot.84 = f32[1,128,96]{2,1,0} dot(f32[1,128,96]{2,1,0} %reshape.83, f32[1,96,96]{2,1,0} %p1.2), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}
  %reshape.85 = f32[1,4,32,96]{3,2,1,0} reshape(f32[1,128,96]{2,1,0} %dot.84)
  %dot.94 = f32[4,32,1,1]{3,2,1,0} dot(f32[1,4,32,96]{3,2,1,0} %divide.88, f32[1,4,32,96]{3,2,1,0} %reshape.85), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.95 = f32[] constant(-30000)
  %broadcast.96 = f32[4,32,1,1]{3,2,1,0} broadcast(f32[] %constant.95), dimensions={}
  %select.98 = f32[4,32,1,1]{3,2,1,0} select(pred[4,32,1,1]{3,2,1,0} %broadcast.97, f32[4,32,1,1]{3,2,1,0} %dot.94, f32[4,32,1,1]{3,2,1,0} %broadcast.96)
  %reduce.106 = f32[4,32,1]{2,1,0} reduce(f32[4,32,1,1]{3,2,1,0} %select.98, f32[] %constant.99), dimensions={3}, to_apply=%reduce.106.MaxFunc.111
  %maximum.112 = f32[4,32,1]{2,1,0} maximum(f32[4,32,1]{2,1,0} %reduce.100, f32[4,32,1]{2,1,0} %reduce.106)
  %broadcast.113 = f32[4,32,1,128]{3,2,1,0} broadcast(f32[4,32,1]{2,1,0} %maximum.112), dimensions={0,1,2}
  %subtract.114 = f32[4,32,1,128]{3,2,1,0} subtract(f32[4,32,1,128]{3,2,1,0} %select.93, f32[4,32,1,128]{3,2,1,0} %broadcast.113)
  %exponential.115 = f32[4,32,1,128]{3,2,1,0} exponential(f32[4,32,1,128]{3,2,1,0} %subtract.114)
  %convert.123 = f32[4,32,1,128]{3,2,1,0} convert(f32[4,32,1,128]{3,2,1,0} %exponential.115)
  %p5.6 = f32[128,4,32,96]{3,2,1,0} parameter(5)
  %custom-call.50 = f32[128,4,32,96]{3,2,1,0} custom-call(f32[128,4,32,96]{3,2,1,0} %p5.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.136 = f32[4,32,1,96]{3,2,1,0} dot(f32[4,32,1,128]{3,2,1,0} %convert.123, f32[128,4,32,96]{3,2,1,0} %custom-call.50), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %broadcast.124 = f32[4,32,1,1]{3,2,1,0} broadcast(f32[4,32,1]{2,1,0} %maximum.112), dimensions={0,1,2}
  %subtract.125 = f32[4,32,1,1]{3,2,1,0} subtract(f32[4,32,1,1]{3,2,1,0} %select.98, f32[4,32,1,1]{3,2,1,0} %broadcast.124)
  %exponential.126 = f32[4,32,1,1]{3,2,1,0} exponential(f32[4,32,1,1]{3,2,1,0} %subtract.125)
  %convert.134 = f32[4,32,1,1]{3,2,1,0} convert(f32[4,32,1,1]{3,2,1,0} %exponential.126)
  %p12.13 = f32[6144,3072]{1,0} parameter(12)
  %custom-call.45 = f32[6144,3072]{1,0} custom-call(f32[6144,3072]{1,0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.74 = f32[4,3072]{1,0} dot(f32[6144,4]{1,0} %reshape.67, f32[6144,3072]{1,0} %custom-call.45), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p13.14 = f32[3072]{0} parameter(13)
  %custom-call.46 = f32[3072]{0} custom-call(f32[3072]{0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.75 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %custom-call.46), dimensions={1}
  %add.76 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.74, f32[4,3072]{1,0} %broadcast.75)
  %reshape.79 = f32[1,4,32,96]{3,2,1,0} reshape(f32[4,3072]{1,0} %add.76)
  %dot.137 = f32[4,32,1,96]{3,2,1,0} dot(f32[4,32,1,1]{3,2,1,0} %convert.134, f32[1,4,32,96]{3,2,1,0} %reshape.79), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.138 = f32[4,32,1,96]{3,2,1,0} add(f32[4,32,1,96]{3,2,1,0} %dot.136, f32[4,32,1,96]{3,2,1,0} %dot.137)
  %constant.116 = f32[] constant(0)
  %reduce.117 = f32[4,32,1]{2,1,0} reduce(f32[4,32,1,128]{3,2,1,0} %exponential.115, f32[] %constant.116), dimensions={3}, to_apply=%reduce.117.AddFunc.122
  %reduce.127 = f32[4,32,1]{2,1,0} reduce(f32[4,32,1,1]{3,2,1,0} %exponential.126, f32[] %constant.116), dimensions={3}, to_apply=%reduce.127.AddFunc.132
  %add.133 = f32[4,32,1]{2,1,0} add(f32[4,32,1]{2,1,0} %reduce.117, f32[4,32,1]{2,1,0} %reduce.127)
  %convert.135 = f32[4,32,1]{2,1,0} convert(f32[4,32,1]{2,1,0} %add.133)
  %broadcast.139 = f32[4,32,1,96]{3,2,1,0} broadcast(f32[4,32,1]{2,1,0} %convert.135), dimensions={0,1,2}
  %divide.140 = f32[4,32,1,96]{3,2,1,0} divide(f32[4,32,1,96]{3,2,1,0} %add.138, f32[4,32,1,96]{3,2,1,0} %broadcast.139)
  %transpose.141 = f32[4,1,32,96]{3,2,1,0} transpose(f32[4,32,1,96]{3,2,1,0} %divide.140), dimensions={0,2,1,3}
  %reshape.152 = f32[4,3072]{1,0} reshape(f32[4,1,32,96]{3,2,1,0} %transpose.141)
  %p14.15 = f32[3072,6144]{1,0} parameter(14)
  %custom-call.47 = f32[3072,6144]{1,0} custom-call(f32[3072,6144]{1,0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.153 = f32[4,6144]{1,0} dot(f32[4,3072]{1,0} %reshape.152, f32[3072,6144]{1,0} %custom-call.47), lhs_contracting_dims={1}, rhs_contracting_dims={0}
  %p15.16 = f32[6144]{0} parameter(15)
  %custom-call.48 = f32[6144]{0} custom-call(f32[6144]{0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.154 = f32[4,6144]{1,0} broadcast(f32[6144]{0} %custom-call.48), dimensions={1}
  %add.155 = f32[4,6144]{1,0} add(f32[4,6144]{1,0} %dot.153, f32[4,6144]{1,0} %broadcast.154)
  %reshape.156 = f32[4,1,6144]{2,1,0} reshape(f32[4,6144]{1,0} %add.155)
  %all-reduce.157 = f32[4,1,6144]{2,1,0} all-reduce(f32[4,1,6144]{2,1,0} %reshape.156), replica_groups={{0,1}}, to_apply=%all-reduce.157.Reducer.162
  %add.163 = f32[4,1,6144]{2,1,0} add(f32[4,1,6144]{2,1,0} %all-reduce.157, f32[4,1,6144]{2,1,0} %transpose.51)
  %add.199 = f32[4,1,6144]{2,1,0} add(f32[4,1,6144]{2,1,0} %all-reduce.193, f32[4,1,6144]{2,1,0} %add.163)
  %transpose.200 = f32[6144,1,4]{2,1,0} transpose(f32[4,1,6144]{2,1,0} %add.199), dimensions={2,1,0}
  %reshape.204 = f32[6144,4]{1,0} reshape(f32[6144,1,4]{2,1,0} %transpose.200)
  %convert.205 = f32[6144,4]{1,0} convert(f32[6144,4]{1,0} %reshape.204)
  %constant.206 = f32[] constant(1)
  %broadcast.207 = f32[4]{0} broadcast(f32[] %constant.206), dimensions={}
  %constant.208 = f32[] constant(0)
  %broadcast.209 = f32[4]{0} broadcast(f32[] %constant.208), dimensions={}
  %batch-norm-training.210 = (f32[6144,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[6144,4]{1,0} %convert.205, f32[4]{0} %broadcast.207, f32[4]{0} %broadcast.209), epsilon=1e-05, feature_index=1
  %get-tuple-element.211 = f32[6144,4]{1,0} get-tuple-element((f32[6144,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.210), index=0
  %p22.23 = f32[6144]{0} parameter(22)
  %custom-call.201 = f32[6144]{0} custom-call(f32[6144]{0} %p22.23), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.212 = f32[6144,4]{1,0} broadcast(f32[6144]{0} %custom-call.201), dimensions={0}
  %multiply.213 = f32[6144,4]{1,0} multiply(f32[6144,4]{1,0} %get-tuple-element.211, f32[6144,4]{1,0} %broadcast.212)
  %p23.24 = f32[6144]{0} parameter(23)
  %custom-call.202 = f32[6144]{0} custom-call(f32[6144]{0} %p23.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.214 = f32[6144,4]{1,0} broadcast(f32[6144]{0} %custom-call.202), dimensions={0}
  %add.215 = f32[6144,4]{1,0} add(f32[6144,4]{1,0} %multiply.213, f32[6144,4]{1,0} %broadcast.214)
  %convert.216 = f32[6144,4]{1,0} convert(f32[6144,4]{1,0} %add.215)
  %reshape.217 = f32[6144,1,4]{2,1,0} reshape(f32[6144,4]{1,0} %convert.216)
  %reshape.218 = f32[6144,4]{1,0} reshape(f32[6144,1,4]{2,1,0} %reshape.217)
  %dot.219 = f32[25216,4]{1,0} dot(f32[6144,25216]{1,0} %custom-call.203, f32[6144,4]{1,0} %reshape.218), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.220 = f32[25216,1,4]{2,1,0} reshape(f32[25216,4]{1,0} %dot.219)
  %scatter.142 = f32[128,4,32,96]{3,2,1,0} scatter(f32[128,4,32,96]{3,2,1,0} %custom-call.49, s32[1]{0} %p2.3, f32[1,4,32,96]{3,2,1,0} %reshape.85), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.142.AssignFunc.146
  %scatter.147 = f32[128,4,32,96]{3,2,1,0} scatter(f32[128,4,32,96]{3,2,1,0} %custom-call.50, s32[1]{0} %p2.3, f32[1,4,32,96]{3,2,1,0} %reshape.79), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.147.AssignFunc.151
  ROOT %tuple.221 = (f32[25216,1,4]{2,1,0}, f32[128,4,32,96]{3,2,1,0}, f32[128,4,32,96]{3,2,1,0}) tuple(f32[25216,1,4]{2,1,0} %reshape.220, f32[128,4,32,96]{3,2,1,0} %scatter.142, f32[128,4,32,96]{3,2,1,0} %scatter.147)
}
`

export default text;
