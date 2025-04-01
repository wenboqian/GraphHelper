const text = `
HloModule FullyUnrolled.212, input_output_alias={ {1}: (5, {}, must-alias), {46}: (6, {}, must-alias) }

%reduce.107.MaxFunc.112 (p0.109: f32[], p1.110: f32[]) -> f32[] {
  %p0.109 = f32[] parameter(0)
  %p1.110 = f32[] parameter(1)
  ROOT %maximum.111 = f32[] maximum(f32[] %p0.109, f32[] %p1.110)
}

%reduce.113.MaxFunc.118 (p0.115: f32[], p1.116: f32[]) -> f32[] {
  %p0.115 = f32[] parameter(0)
  %p1.116 = f32[] parameter(1)
  ROOT %maximum.117 = f32[] maximum(f32[] %p0.115, f32[] %p1.116)
}

%reduce.124.AddFunc.129 (p0.126: f32[], p1.127: f32[]) -> f32[] {
  %p0.126 = f32[] parameter(0)
  %p1.127 = f32[] parameter(1)
  ROOT %add.128 = f32[] add(f32[] %p0.126, f32[] %p1.127)
}

%reduce.134.AddFunc.139 (p0.136: f32[], p1.137: f32[]) -> f32[] {
  %p0.136 = f32[] parameter(0)
  %p1.137 = f32[] parameter(1)
  ROOT %add.138 = f32[] add(f32[] %p0.136, f32[] %p1.137)
}

%scatter.149.AssignFunc.153 (p0.151: f32[], p1.152: f32[]) -> f32[] {
  %p0.151 = f32[] parameter(0)
  ROOT %p1.152 = f32[] parameter(1)
}

%scatter.154.AssignFunc.158 (p0.156: f32[], p1.157: f32[]) -> f32[] {
  %p0.156 = f32[] parameter(0)
  ROOT %p1.157 = f32[] parameter(1)
}

ENTRY %FullyUnrolled.212 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: f32[128,4,12,64], p6.7: f32[128,4,12,64], p7.8: f32[768], p8.9: f32[768], p9.10: f32[768,768], p10.11: f32[768], p11.12: f32[768,768], p12.13: f32[768], p13.14: f32[768,768], p14.15: f32[768], p15.16: f32[768,768], p16.17: f32[768], p17.18: f32[768], p18.19: f32[768], p19.20: f32[768,3072], p20.21: f32[3072], p21.22: f32[768,3072], p22.23: f32[768], p23.24: f32[768], p24.25: f32[768], p25.26: f32[768,50257]) -> (f32[50257,1,4], f32[128,4,12,64], f32[128,4,12,64], f32[768,4], f32[4,768], /*index=5*/f32[4,768], f32[4,768], f32[1,4,12,64], f32[1,4,12,64], f32[1,4,12,64], /*index=10*/f32[], f32[1,4,12,64], f32[1,4,12,64], f32[4,12,1,1], f32[], /*index=15*/f32[4,12,1,1], pred[4,12,1,128], f32[4,12,1,1], pred[4,12,1,1], f32[4,12,1,128], /*index=20*/f32[4,12,1,1], f32[], f32[4,12,1], f32[4,12,1], f32[4,12,1], /*index=25*/f32[4,12,1,128], f32[4,12,1,128], f32[4,12,1,128], f32[], f32[4,12,1], /*index=30*/f32[4,12,1,128], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1], /*index=35*/f32[4,12,1], f32[4,12,1,1], f32[4,12,1], f32[128,4,12,64], f32[1,4,12,64], /*index=40*/f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], /*index=45*/f32[1,4,12,64], f32[128,4,12,64], f32[4,768], f32[4,768], f32[768,1,4], /*index=50*/f32[768,1,4], f32[768,1,4]) {
  %p3.4 = s32[1]{0} parameter(3)
  %p4.5 = s32[1]{0} parameter(4)
  %p25.26 = f32[768,50257]{1,0} parameter(25)
  %custom-call.29 = f32[768,50257]{1,0} custom-call(f32[768,50257]{1,0} %p25.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %iota.30 = s32[128]{0} iota(), iota_dimension=0
  %broadcast.31 = s32[1,128]{1,0} broadcast(s32[128]{0} %iota.30), dimensions={1}
  %p1.2 = s32[1]{0} parameter(1)
  %broadcast.32 = s32[1,128]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={0}
  %compare.33 = pred[1,128]{1,0} compare(s32[1,128]{1,0} %broadcast.31, s32[1,128]{1,0} %broadcast.32), direction=LT
  %broadcast.37 = pred[4,1,128]{2,1,0} broadcast(pred[1,128]{1,0} %compare.33), dimensions={1,2}
  %broadcast.34 = s32[4,128]{1,0} broadcast(s32[128]{0} %iota.30), dimensions={1}
  %p2.3 = s32[4]{0} parameter(2)
  %broadcast.35 = s32[4,128]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.36 = pred[4,128]{1,0} compare(s32[4,128]{1,0} %broadcast.34, s32[4,128]{1,0} %broadcast.35), direction=GE
  %broadcast.38 = pred[4,1,128]{2,1,0} broadcast(pred[4,128]{1,0} %compare.36), dimensions={0,2}
  %and.39 = pred[4,1,128]{2,1,0} and(pred[4,1,128]{2,1,0} %broadcast.37, pred[4,1,128]{2,1,0} %broadcast.38)
  %reshape.97 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.39)
  %broadcast.98 = pred[4,12,1,128]{3,2,1,0} broadcast(pred[4,128]{1,0} %reshape.97), dimensions={0,3}
  %p0.1 = f32[768,1,4]{2,1,0} parameter(0)
  %reshape.61 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %p0.1)
  %convert.62 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.61)
  %constant.63 = f32[] constant(1)
  %broadcast.64 = f32[4]{0} broadcast(f32[] %constant.63), dimensions={}
  %constant.65 = f32[] constant(0)
  %broadcast.66 = f32[4]{0} broadcast(f32[] %constant.65), dimensions={}
  %batch-norm-training.67 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.62, f32[4]{0} %broadcast.64, f32[4]{0} %broadcast.66), epsilon=1e-05, feature_index=1
  %get-tuple-element.68 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.67), index=0
  %p7.8 = f32[768]{0} parameter(7)
  %custom-call.45 = f32[768]{0} custom-call(f32[768]{0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.69 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.45), dimensions={0}
  %multiply.70 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.68, f32[768,4]{1,0} %broadcast.69)
  %p8.9 = f32[768]{0} parameter(8)
  %custom-call.46 = f32[768]{0} custom-call(f32[768]{0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.71 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.46), dimensions={0}
  %add.72 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.70, f32[768,4]{1,0} %broadcast.71)
  %convert.73 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.72)
  %reshape.74 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.73)
  %reshape.75 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.74)
  %p9.10 = f32[768,768]{1,0} parameter(9)
  %custom-call.47 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p9.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.76 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.75, f32[768,768]{1,0} %custom-call.47), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p10.11 = f32[768]{0} parameter(10)
  %custom-call.48 = f32[768]{0} custom-call(f32[768]{0} %p10.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.77 = f32[768]{0} reshape(f32[768]{0} %custom-call.48)
  %broadcast.78 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.77), dimensions={1}
  %add.79 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.76, f32[4,768]{1,0} %broadcast.78)
  %reshape.88 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.79)
  %constant.91 = f32[] constant(8)
  %broadcast.92 = f32[1,4,12,64]{3,2,1,0} broadcast(f32[] %constant.91), dimensions={}
  %divide.93 = f32[1,4,12,64]{3,2,1,0} divide(f32[1,4,12,64]{3,2,1,0} %reshape.88, f32[1,4,12,64]{3,2,1,0} %broadcast.92)
  %p5.6 = f32[128,4,12,64]{3,2,1,0} parameter(5)
  %custom-call.43 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p5.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.94 = f32[4,12,1,128]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.93, f32[128,4,12,64]{3,2,1,0} %custom-call.43), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.95 = f32[] constant(-30000)
  %broadcast.96 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[] %constant.95), dimensions={}
  %select.99 = f32[4,12,1,128]{3,2,1,0} select(pred[4,12,1,128]{3,2,1,0} %broadcast.98, f32[4,12,1,128]{3,2,1,0} %dot.94, f32[4,12,1,128]{3,2,1,0} %broadcast.96)
  %constant.106 = f32[] constant(-inf)
  %reduce.107 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %select.99, f32[] %constant.106), dimensions={3}, to_apply=%reduce.107.MaxFunc.112
  %broadcast.41 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.40 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.42 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.41, s32[4,1]{1,0} %broadcast.40), direction=GE
  %reshape.103 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.42)
  %broadcast.104 = pred[4,12,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.103), dimensions={0}
  %p11.12 = f32[768,768]{1,0} parameter(11)
  %custom-call.49 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.80 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.75, f32[768,768]{1,0} %custom-call.49), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p12.13 = f32[768]{0} parameter(12)
  %custom-call.50 = f32[768]{0} custom-call(f32[768]{0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.81 = f32[768]{0} reshape(f32[768]{0} %custom-call.50)
  %broadcast.82 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.81), dimensions={1}
  %add.83 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.80, f32[4,768]{1,0} %broadcast.82)
  %reshape.89 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.83)
  %dot.100 = f32[4,12,1,1]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.93, f32[1,4,12,64]{3,2,1,0} %reshape.89), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.101 = f32[] constant(-30000)
  %broadcast.102 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[] %constant.101), dimensions={}
  %select.105 = f32[4,12,1,1]{3,2,1,0} select(pred[4,12,1,1]{3,2,1,0} %broadcast.104, f32[4,12,1,1]{3,2,1,0} %dot.100, f32[4,12,1,1]{3,2,1,0} %broadcast.102)
  %reduce.113 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %select.105, f32[] %constant.106), dimensions={3}, to_apply=%reduce.113.MaxFunc.118
  %maximum.119 = f32[4,12,1]{2,1,0} maximum(f32[4,12,1]{2,1,0} %reduce.107, f32[4,12,1]{2,1,0} %reduce.113)
  %broadcast.120 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.119), dimensions={0,1,2}
  %subtract.121 = f32[4,12,1,128]{3,2,1,0} subtract(f32[4,12,1,128]{3,2,1,0} %select.99, f32[4,12,1,128]{3,2,1,0} %broadcast.120)
  %exponential.122 = f32[4,12,1,128]{3,2,1,0} exponential(f32[4,12,1,128]{3,2,1,0} %subtract.121)
  %convert.130 = f32[4,12,1,128]{3,2,1,0} convert(f32[4,12,1,128]{3,2,1,0} %exponential.122)
  %p6.7 = f32[128,4,12,64]{3,2,1,0} parameter(6)
  %custom-call.44 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p6.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.143 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,128]{3,2,1,0} %convert.130, f32[128,4,12,64]{3,2,1,0} %custom-call.44), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %broadcast.131 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.119), dimensions={0,1,2}
  %subtract.132 = f32[4,12,1,1]{3,2,1,0} subtract(f32[4,12,1,1]{3,2,1,0} %select.105, f32[4,12,1,1]{3,2,1,0} %broadcast.131)
  %exponential.133 = f32[4,12,1,1]{3,2,1,0} exponential(f32[4,12,1,1]{3,2,1,0} %subtract.132)
  %convert.141 = f32[4,12,1,1]{3,2,1,0} convert(f32[4,12,1,1]{3,2,1,0} %exponential.133)
  %p13.14 = f32[768,768]{1,0} parameter(13)
  %custom-call.51 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.84 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.75, f32[768,768]{1,0} %custom-call.51), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p14.15 = f32[768]{0} parameter(14)
  %custom-call.52 = f32[768]{0} custom-call(f32[768]{0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.85 = f32[768]{0} reshape(f32[768]{0} %custom-call.52)
  %broadcast.86 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.85), dimensions={1}
  %add.87 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.84, f32[4,768]{1,0} %broadcast.86)
  %reshape.90 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.87)
  %dot.144 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,1]{3,2,1,0} %convert.141, f32[1,4,12,64]{3,2,1,0} %reshape.90), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.145 = f32[4,12,1,64]{3,2,1,0} add(f32[4,12,1,64]{3,2,1,0} %dot.143, f32[4,12,1,64]{3,2,1,0} %dot.144)
  %constant.123 = f32[] constant(0)
  %reduce.124 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %exponential.122, f32[] %constant.123), dimensions={3}, to_apply=%reduce.124.AddFunc.129
  %reduce.134 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %exponential.133, f32[] %constant.123), dimensions={3}, to_apply=%reduce.134.AddFunc.139
  %add.140 = f32[4,12,1]{2,1,0} add(f32[4,12,1]{2,1,0} %reduce.124, f32[4,12,1]{2,1,0} %reduce.134)
  %convert.142 = f32[4,12,1]{2,1,0} convert(f32[4,12,1]{2,1,0} %add.140)
  %broadcast.146 = f32[4,12,1,64]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %convert.142), dimensions={0,1,2}
  %divide.147 = f32[4,12,1,64]{3,2,1,0} divide(f32[4,12,1,64]{3,2,1,0} %add.145, f32[4,12,1,64]{3,2,1,0} %broadcast.146)
  %transpose.148 = f32[1,4,12,64]{3,2,1,0} transpose(f32[4,12,1,64]{3,2,1,0} %divide.147), dimensions={2,0,1,3}
  %reshape.159 = f32[4,768]{1,0} reshape(f32[1,4,12,64]{3,2,1,0} %transpose.148)
  %p15.16 = f32[768,768]{1,0} parameter(15)
  %custom-call.53 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.160 = f32[4,768]{1,0} dot(f32[4,768]{1,0} %reshape.159, f32[768,768]{1,0} %custom-call.53), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p16.17 = f32[768]{0} parameter(16)
  %custom-call.54 = f32[768]{0} custom-call(f32[768]{0} %p16.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.161 = f32[768]{0} reshape(f32[768]{0} %custom-call.54)
  %broadcast.162 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.161), dimensions={1}
  %add.163 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.160, f32[4,768]{1,0} %broadcast.162)
  %transpose.164 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.163), dimensions={1,0}
  %reshape.165 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.164)
  %add.166 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.165, f32[768,1,4]{2,1,0} %p0.1)
  %reshape.167 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.166)
  %convert.168 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.167)
  %constant.169 = f32[] constant(1)
  %broadcast.170 = f32[4]{0} broadcast(f32[] %constant.169), dimensions={}
  %constant.171 = f32[] constant(0)
  %broadcast.172 = f32[4]{0} broadcast(f32[] %constant.171), dimensions={}
  %batch-norm-training.173 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.168, f32[4]{0} %broadcast.170, f32[4]{0} %broadcast.172), epsilon=1e-05, feature_index=1
  %get-tuple-element.174 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.173), index=0
  %p17.18 = f32[768]{0} parameter(17)
  %custom-call.55 = f32[768]{0} custom-call(f32[768]{0} %p17.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.175 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.55), dimensions={0}
  %multiply.176 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.174, f32[768,4]{1,0} %broadcast.175)
  %p18.19 = f32[768]{0} parameter(18)
  %custom-call.56 = f32[768]{0} custom-call(f32[768]{0} %p18.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.177 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.56), dimensions={0}
  %add.178 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.176, f32[768,4]{1,0} %broadcast.177)
  %convert.179 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.178)
  %reshape.180 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.179)
  %reshape.181 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.180)
  %p19.20 = f32[768,3072]{1,0} parameter(19)
  %custom-call.57 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p19.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.182 = f32[4,3072]{1,0} dot(f32[768,4]{1,0} %reshape.181, f32[768,3072]{1,0} %custom-call.57), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p20.21 = f32[3072]{0} parameter(20)
  %custom-call.58 = f32[3072]{0} custom-call(f32[3072]{0} %p20.21), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.183 = f32[3072]{0} reshape(f32[3072]{0} %custom-call.58)
  %broadcast.184 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %reshape.183), dimensions={1}
  %add.185 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.182, f32[4,3072]{1,0} %broadcast.184)
  %custom-call.186 = f32[4,3072]{1,0} custom-call(f32[4,3072]{1,0} %add.185), custom_call_target="AwsNeuronGeluApprxTanh", api_version=API_VERSION_UNSPECIFIED
  %p21.22 = f32[768,3072]{1,0} parameter(21)
  %custom-call.59 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p21.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.187 = f32[4,768]{1,0} dot(f32[4,3072]{1,0} %custom-call.186, f32[768,3072]{1,0} %custom-call.59), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p22.23 = f32[768]{0} parameter(22)
  %custom-call.60 = f32[768]{0} custom-call(f32[768]{0} %p22.23), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.188 = f32[768]{0} reshape(f32[768]{0} %custom-call.60)
  %broadcast.189 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.188), dimensions={1}
  %add.190 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.187, f32[4,768]{1,0} %broadcast.189)
  %transpose.191 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.190), dimensions={1,0}
  %reshape.192 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.191)
  %add.193 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.192, f32[768,1,4]{2,1,0} %add.166)
  %reshape.194 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.193)
  %convert.195 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.194)
  %constant.196 = f32[] constant(1)
  %broadcast.197 = f32[4]{0} broadcast(f32[] %constant.196), dimensions={}
  %constant.198 = f32[] constant(0)
  %broadcast.199 = f32[4]{0} broadcast(f32[] %constant.198), dimensions={}
  %batch-norm-training.200 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.195, f32[4]{0} %broadcast.197, f32[4]{0} %broadcast.199), epsilon=1e-05, feature_index=1
  %get-tuple-element.201 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.200), index=0
  %p23.24 = f32[768]{0} parameter(23)
  %custom-call.27 = f32[768]{0} custom-call(f32[768]{0} %p23.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.202 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.27), dimensions={0}
  %multiply.203 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.201, f32[768,4]{1,0} %broadcast.202)
  %p24.25 = f32[768]{0} parameter(24)
  %custom-call.28 = f32[768]{0} custom-call(f32[768]{0} %p24.25), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.204 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.28), dimensions={0}
  %add.205 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.203, f32[768,4]{1,0} %broadcast.204)
  %convert.206 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.205)
  %reshape.207 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.206)
  %reshape.208 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.207)
  %dot.209 = f32[50257,4]{1,0} dot(f32[768,50257]{1,0} %custom-call.29, f32[768,4]{1,0} %reshape.208), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.210 = f32[50257,1,4]{2,1,0} reshape(f32[50257,4]{1,0} %dot.209)
  %scatter.149 = f32[128,4,12,64]{3,2,1,0} scatter(f32[128,4,12,64]{3,2,1,0} %custom-call.43, s32[1]{0} %p1.2, f32[1,4,12,64]{3,2,1,0} %reshape.89), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.149.AssignFunc.153
  %scatter.154 = f32[128,4,12,64]{3,2,1,0} scatter(f32[128,4,12,64]{3,2,1,0} %custom-call.44, s32[1]{0} %p1.2, f32[1,4,12,64]{3,2,1,0} %reshape.90), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.154.AssignFunc.158
  ROOT %tuple.211 = (f32[50257,1,4]{2,1,0}, f32[128,4,12,64]{3,2,1,0}, f32[128,4,12,64]{3,2,1,0}, f32[768,4]{1,0}, f32[4,768]{1,0}, /*index=5*/f32[4,768]{1,0}, f32[4,768]{1,0}, f32[1,4,12,64]{3,2,1,0}, f32[1,4,12,64]{3,2,1,0}, f32[1,4,12,64]{3,2,1,0}, /*index=10*/f32[], f32[1,4,12,64]{3,2,1,0}, f32[1,4,12,64]{3,2,1,0}, f32[4,12,1,1]{3,2,1,0}, f32[], /*index=15*/f32[4,12,1,1]{3,2,1,0}, pred[4,12,1,128]{3,2,1,0}, f32[4,12,1,1]{3,2,1,0}, pred[4,12,1,1]{3,2,1,0}, f32[4,12,1,128]{3,2,1,0}, /*index=20*/f32[4,12,1,1]{3,2,1,0}, f32[], f32[4,12,1]{2,1,0}, f32[4,12,1]{2,1,0}, f32[4,12,1]{2,1,0}, /*index=25*/f32[4,12,1,128]{3,2,1,0}, f32[4,12,1,128]{3,2,1,0}, f32[4,12,1,128]{3,2,1,0}, f32[], f32[4,12,1]{2,1,0}, /*index=30*/f32[4,12,1,128]{3,2,1,0}, f32[4,12,1,1]{3,2,1,0}, f32[4,12,1,1]{3,2,1,0}, f32[4,12,1,1]{3,2,1,0}, f32[4,12,1]{2,1,0}, /*index=35*/f32[4,12,1]{2,1,0}, f32[4,12,1,1]{3,2,1,0}, f32[4,12,1]{2,1,0}, f32[128,4,12,64]{3,2,1,0}, f32[1,4,12,64]{3,2,1,0}, /*index=40*/f32[4,12,1,64]{3,2,1,0}, f32[4,12,1,64]{3,2,1,0}, f32[4,12,1,64]{3,2,1,0}, f32[4,12,1,64]{3,2,1,0}, f32[4,12,1,64]{3,2,1,0}, /*index=45*/f32[1,4,12,64]{3,2,1,0}, f32[128,4,12,64]{3,2,1,0}, f32[4,768]{1,0}, f32[4,768]{1,0}, f32[768,1,4]{2,1,0}, /*index=50*/f32[768,1,4]{2,1,0}, f32[768,1,4]{2,1,0}) tuple(f32[50257,1,4]{2,1,0} %reshape.210, f32[128,4,12,64]{3,2,1,0} %scatter.149, f32[128,4,12,64]{3,2,1,0} %scatter.154, f32[768,4]{1,0} %reshape.75, f32[4,768]{1,0} %add.79, /*index=5*/f32[4,768]{1,0} %add.83, f32[4,768]{1,0} %add.87, f32[1,4,12,64]{3,2,1,0} %reshape.89, f32[1,4,12,64]{3,2,1,0} %reshape.90, f32[1,4,12,64]{3,2,1,0} %reshape.88, /*index=10*/f32[] %constant.91, f32[1,4,12,64]{3,2,1,0} %broadcast.92, f32[1,4,12,64]{3,2,1,0} %reshape.89, f32[4,12,1,1]{3,2,1,0} %dot.100, f32[] %constant.101, /*index=15*/f32[4,12,1,1]{3,2,1,0} %broadcast.102, pred[4,12,1,128]{3,2,1,0} %broadcast.98, f32[4,12,1,1]{3,2,1,0} %select.105, pred[4,12,1,1]{3,2,1,0} %broadcast.104, f32[4,12,1,128]{3,2,1,0} %select.99, /*index=20*/f32[4,12,1,1]{3,2,1,0} %select.105, f32[] %constant.106, f32[4,12,1]{2,1,0} %reduce.107, f32[4,12,1]{2,1,0} %reduce.113, f32[4,12,1]{2,1,0} %maximum.119, /*index=25*/f32[4,12,1,128]{3,2,1,0} %broadcast.120, f32[4,12,1,128]{3,2,1,0} %subtract.121, f32[4,12,1,128]{3,2,1,0} %exponential.122, f32[] %constant.123, f32[4,12,1]{2,1,0} %reduce.124, /*index=30*/f32[4,12,1,128]{3,2,1,0} %convert.130, f32[4,12,1,1]{3,2,1,0} %broadcast.131, f32[4,12,1,1]{3,2,1,0} %subtract.132, f32[4,12,1,1]{3,2,1,0} %exponential.133, f32[4,12,1]{2,1,0} %reduce.134, /*index=35*/f32[4,12,1]{2,1,0} %add.140, f32[4,12,1,1]{3,2,1,0} %convert.141, f32[4,12,1]{2,1,0} %convert.142, f32[128,4,12,64]{3,2,1,0} %custom-call.44, f32[1,4,12,64]{3,2,1,0} %reshape.90, /*index=40*/f32[4,12,1,64]{3,2,1,0} %dot.143, f32[4,12,1,64]{3,2,1,0} %dot.144, f32[4,12,1,64]{3,2,1,0} %add.145, f32[4,12,1,64]{3,2,1,0} %broadcast.146, f32[4,12,1,64]{3,2,1,0} %divide.147, /*index=45*/f32[1,4,12,64]{3,2,1,0} %transpose.148, f32[128,4,12,64]{3,2,1,0} %scatter.154, f32[4,768]{1,0} %reshape.159, f32[4,768]{1,0} %add.163, f32[768,1,4]{2,1,0} %reshape.165, /*index=50*/f32[768,1,4]{2,1,0} %reshape.165, f32[768,1,4]{2,1,0} %reshape.165)
}
`

export default text;
