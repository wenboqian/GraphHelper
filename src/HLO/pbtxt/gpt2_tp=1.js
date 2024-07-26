const text = `
HloModule FullyUnrolled.205, input_output_alias={ {1}: (5, {}, must-alias), {2}: (6, {}, must-alias) }

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

ENTRY %FullyUnrolled.205 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[], p4.5: s32[], p5.19: f32[128,4,12,64], p6.20: f32[128,4,12,64], p7.21: f32[768], p8.22: f32[768], p9.23: f32[768,768], p10.24: f32[768], p11.25: f32[768,768], p12.26: f32[768], p13.27: f32[768,768], p14.28: f32[768], p15.29: f32[768,768], p16.30: f32[768], p17.31: f32[768], p18.32: f32[768], p19.33: f32[768,3072], p20.34: f32[3072], p21.35: f32[768,3072], p22.36: f32[768], p23.38: f32[768], p24.39: f32[768], p25.40: f32[768,50257]) -> (f32[50257,1,4], f32[128,4,12,64], f32[128,4,12,64]) {
  %p3.4 = s32[] parameter(3)
  %p4.5 = s32[] parameter(4)
  %p25.40 = f32[768,50257]{1,0} parameter(25)
  %custom-call.186 = f32[768,50257]{1,0} custom-call(f32[768,50257]{1,0} %p25.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %iota.6 = s32[128]{0} iota(), iota_dimension=0
  %broadcast.7 = s32[1,128]{1,0} broadcast(s32[128]{0} %iota.6), dimensions={1}
  %p1.2 = s32[1]{0} parameter(1)
  %broadcast.8 = s32[1,128]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={0}
  %compare.9 = pred[1,128]{1,0} compare(s32[1,128]{1,0} %broadcast.7, s32[1,128]{1,0} %broadcast.8), direction=LT
  %broadcast.13 = pred[4,1,128]{2,1,0} broadcast(pred[1,128]{1,0} %compare.9), dimensions={1,2}
  %broadcast.10 = s32[4,128]{1,0} broadcast(s32[128]{0} %iota.6), dimensions={1}
  %p2.3 = s32[4]{0} parameter(2)
  %broadcast.11 = s32[4,128]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.12 = pred[4,128]{1,0} compare(s32[4,128]{1,0} %broadcast.10, s32[4,128]{1,0} %broadcast.11), direction=GE
  %broadcast.14 = pred[4,1,128]{2,1,0} broadcast(pred[4,128]{1,0} %compare.12), dimensions={0,2}
  %and.15 = pred[4,1,128]{2,1,0} and(pred[4,1,128]{2,1,0} %broadcast.13, pred[4,1,128]{2,1,0} %broadcast.14)
  %broadcast.92 = pred[4,12,1,128]{3,2,1,0} broadcast(pred[4,1,128]{2,1,0} %and.15), dimensions={0,2,3}
  %p0.1 = f32[768,1,4]{2,1,0} parameter(0)
  %custom-call.37 = f32[768,1,4]{2,1,0} custom-call(f32[768,1,4]{2,1,0} %p0.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.59 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %custom-call.37)
  %convert.60 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.59)
  %constant.61 = f32[] constant(1)
  %broadcast.62 = f32[4]{0} broadcast(f32[] %constant.61), dimensions={}
  %constant.63 = f32[] constant(0)
  %broadcast.64 = f32[4]{0} broadcast(f32[] %constant.63), dimensions={}
  %batch-norm-training.65 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.60, f32[4]{0} %broadcast.62, f32[4]{0} %broadcast.64), epsilon=1e-05, feature_index=1
  %get-tuple-element.66 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.65), index=0
  %p7.21 = f32[768]{0} parameter(7)
  %custom-call.43 = f32[768]{0} custom-call(f32[768]{0} %p7.21), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.67 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.43), dimensions={0}
  %multiply.68 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.66, f32[768,4]{1,0} %broadcast.67)
  %p8.22 = f32[768]{0} parameter(8)
  %custom-call.44 = f32[768]{0} custom-call(f32[768]{0} %p8.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.69 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.44), dimensions={0}
  %add.70 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.68, f32[768,4]{1,0} %broadcast.69)
  %convert.71 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.70)
  %reshape.72 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.71)
  %reshape.73 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.72)
  %p9.23 = f32[768,768]{1,0} parameter(9)
  %custom-call.45 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p9.23), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.74 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.73, f32[768,768]{1,0} %custom-call.45), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p10.24 = f32[768]{0} parameter(10)
  %custom-call.46 = f32[768]{0} custom-call(f32[768]{0} %p10.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.75 = f32[4,768]{1,0} broadcast(f32[768]{0} %custom-call.46), dimensions={1}
  %add.76 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.74, f32[4,768]{1,0} %broadcast.75)
  %reshape.83 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.76)
  %constant.86 = f32[] constant(8)
  %broadcast.87 = f32[1,4,12,64]{3,2,1,0} broadcast(f32[] %constant.86), dimensions={}
  %divide.88 = f32[1,4,12,64]{3,2,1,0} divide(f32[1,4,12,64]{3,2,1,0} %reshape.83, f32[1,4,12,64]{3,2,1,0} %broadcast.87)
  %p5.19 = f32[128,4,12,64]{3,2,1,0} parameter(5)
  %custom-call.41 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p5.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.89 = f32[4,12,1,128]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.88, f32[128,4,12,64]{3,2,1,0} %custom-call.41), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.90 = f32[] constant(-30000)
  %broadcast.91 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[] %constant.90), dimensions={}
  %select.93 = f32[4,12,1,128]{3,2,1,0} select(pred[4,12,1,128]{3,2,1,0} %broadcast.92, f32[4,12,1,128]{3,2,1,0} %dot.89, f32[4,12,1,128]{3,2,1,0} %broadcast.91)
  %constant.99 = f32[] constant(-inf)
  %reduce.100 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %select.93, f32[] %constant.99), dimensions={3}, to_apply=%reduce.100.MaxFunc.105
  %broadcast.17 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.16 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.18 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.17, s32[4,1]{1,0} %broadcast.16), direction=GE
  %broadcast.97 = pred[4,12,1,1]{3,2,1,0} broadcast(pred[4,1]{1,0} %compare.18), dimensions={0,2}
  %p11.25 = f32[768,768]{1,0} parameter(11)
  %custom-call.47 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p11.25), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.77 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.73, f32[768,768]{1,0} %custom-call.47), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p12.26 = f32[768]{0} parameter(12)
  %custom-call.48 = f32[768]{0} custom-call(f32[768]{0} %p12.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.78 = f32[4,768]{1,0} broadcast(f32[768]{0} %custom-call.48), dimensions={1}
  %add.79 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.77, f32[4,768]{1,0} %broadcast.78)
  %reshape.84 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.79)
  %dot.94 = f32[4,12,1,1]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.88, f32[1,4,12,64]{3,2,1,0} %reshape.84), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.95 = f32[] constant(-30000)
  %broadcast.96 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[] %constant.95), dimensions={}
  %select.98 = f32[4,12,1,1]{3,2,1,0} select(pred[4,12,1,1]{3,2,1,0} %broadcast.97, f32[4,12,1,1]{3,2,1,0} %dot.94, f32[4,12,1,1]{3,2,1,0} %broadcast.96)
  %reduce.106 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %select.98, f32[] %constant.99), dimensions={3}, to_apply=%reduce.106.MaxFunc.111
  %maximum.112 = f32[4,12,1]{2,1,0} maximum(f32[4,12,1]{2,1,0} %reduce.100, f32[4,12,1]{2,1,0} %reduce.106)
  %broadcast.113 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.112), dimensions={0,1,2}
  %subtract.114 = f32[4,12,1,128]{3,2,1,0} subtract(f32[4,12,1,128]{3,2,1,0} %select.93, f32[4,12,1,128]{3,2,1,0} %broadcast.113)
  %exponential.115 = f32[4,12,1,128]{3,2,1,0} exponential(f32[4,12,1,128]{3,2,1,0} %subtract.114)
  %convert.123 = f32[4,12,1,128]{3,2,1,0} convert(f32[4,12,1,128]{3,2,1,0} %exponential.115)
  %p6.20 = f32[128,4,12,64]{3,2,1,0} parameter(6)
  %custom-call.42 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p6.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.136 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,128]{3,2,1,0} %convert.123, f32[128,4,12,64]{3,2,1,0} %custom-call.42), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %broadcast.124 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.112), dimensions={0,1,2}
  %subtract.125 = f32[4,12,1,1]{3,2,1,0} subtract(f32[4,12,1,1]{3,2,1,0} %select.98, f32[4,12,1,1]{3,2,1,0} %broadcast.124)
  %exponential.126 = f32[4,12,1,1]{3,2,1,0} exponential(f32[4,12,1,1]{3,2,1,0} %subtract.125)
  %convert.134 = f32[4,12,1,1]{3,2,1,0} convert(f32[4,12,1,1]{3,2,1,0} %exponential.126)
  %p13.27 = f32[768,768]{1,0} parameter(13)
  %custom-call.49 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p13.27), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.80 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.73, f32[768,768]{1,0} %custom-call.49), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p14.28 = f32[768]{0} parameter(14)
  %custom-call.50 = f32[768]{0} custom-call(f32[768]{0} %p14.28), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.81 = f32[4,768]{1,0} broadcast(f32[768]{0} %custom-call.50), dimensions={1}
  %add.82 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.80, f32[4,768]{1,0} %broadcast.81)
  %reshape.85 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.82)
  %dot.137 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,1]{3,2,1,0} %convert.134, f32[1,4,12,64]{3,2,1,0} %reshape.85), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.138 = f32[4,12,1,64]{3,2,1,0} add(f32[4,12,1,64]{3,2,1,0} %dot.136, f32[4,12,1,64]{3,2,1,0} %dot.137)
  %constant.116 = f32[] constant(0)
  %reduce.117 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %exponential.115, f32[] %constant.116), dimensions={3}, to_apply=%reduce.117.AddFunc.122
  %reduce.127 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %exponential.126, f32[] %constant.116), dimensions={3}, to_apply=%reduce.127.AddFunc.132
  %add.133 = f32[4,12,1]{2,1,0} add(f32[4,12,1]{2,1,0} %reduce.117, f32[4,12,1]{2,1,0} %reduce.127)
  %convert.135 = f32[4,12,1]{2,1,0} convert(f32[4,12,1]{2,1,0} %add.133)
  %broadcast.139 = f32[4,12,1,64]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %convert.135), dimensions={0,1,2}
  %divide.140 = f32[4,12,1,64]{3,2,1,0} divide(f32[4,12,1,64]{3,2,1,0} %add.138, f32[4,12,1,64]{3,2,1,0} %broadcast.139)
  %transpose.141 = f32[1,4,12,64]{3,2,1,0} transpose(f32[4,12,1,64]{3,2,1,0} %divide.140), dimensions={2,0,1,3}
  %reshape.152 = f32[4,768]{1,0} reshape(f32[1,4,12,64]{3,2,1,0} %transpose.141)
  %p15.29 = f32[768,768]{1,0} parameter(15)
  %custom-call.51 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p15.29), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.153 = f32[4,768]{1,0} dot(f32[4,768]{1,0} %reshape.152, f32[768,768]{1,0} %custom-call.51), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p16.30 = f32[768]{0} parameter(16)
  %custom-call.52 = f32[768]{0} custom-call(f32[768]{0} %p16.30), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.154 = f32[4,768]{1,0} broadcast(f32[768]{0} %custom-call.52), dimensions={1}
  %add.155 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.153, f32[4,768]{1,0} %broadcast.154)
  %transpose.156 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.155), dimensions={1,0}
  %reshape.157 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.156)
  %add.158 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.157, f32[768,1,4]{2,1,0} %custom-call.37)
  %reshape.159 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.158)
  %convert.160 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.159)
  %constant.161 = f32[] constant(1)
  %broadcast.162 = f32[4]{0} broadcast(f32[] %constant.161), dimensions={}
  %constant.163 = f32[] constant(0)
  %broadcast.164 = f32[4]{0} broadcast(f32[] %constant.163), dimensions={}
  %batch-norm-training.165 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.160, f32[4]{0} %broadcast.162, f32[4]{0} %broadcast.164), epsilon=1e-05, feature_index=1
  %get-tuple-element.166 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.165), index=0
  %p17.31 = f32[768]{0} parameter(17)
  %custom-call.53 = f32[768]{0} custom-call(f32[768]{0} %p17.31), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.167 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.53), dimensions={0}
  %multiply.168 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.166, f32[768,4]{1,0} %broadcast.167)
  %p18.32 = f32[768]{0} parameter(18)
  %custom-call.54 = f32[768]{0} custom-call(f32[768]{0} %p18.32), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.169 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.54), dimensions={0}
  %add.170 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.168, f32[768,4]{1,0} %broadcast.169)
  %convert.171 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.170)
  %reshape.172 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.171)
  %reshape.173 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.172)
  %p19.33 = f32[768,3072]{1,0} parameter(19)
  %custom-call.55 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p19.33), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.174 = f32[4,3072]{1,0} dot(f32[768,4]{1,0} %reshape.173, f32[768,3072]{1,0} %custom-call.55), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p20.34 = f32[3072]{0} parameter(20)
  %custom-call.56 = f32[3072]{0} custom-call(f32[3072]{0} %p20.34), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.175 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %custom-call.56), dimensions={1}
  %add.176 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.174, f32[4,3072]{1,0} %broadcast.175)
  %custom-call.177 = f32[4,3072]{1,0} custom-call(f32[4,3072]{1,0} %add.176), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED
  %p21.35 = f32[768,3072]{1,0} parameter(21)
  %custom-call.57 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p21.35), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.178 = f32[4,768]{1,0} dot(f32[4,3072]{1,0} %custom-call.177, f32[768,3072]{1,0} %custom-call.57), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p22.36 = f32[768]{0} parameter(22)
  %custom-call.58 = f32[768]{0} custom-call(f32[768]{0} %p22.36), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.179 = f32[4,768]{1,0} broadcast(f32[768]{0} %custom-call.58), dimensions={1}
  %add.180 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.178, f32[4,768]{1,0} %broadcast.179)
  %transpose.181 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.180), dimensions={1,0}
  %reshape.182 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.181)
  %add.183 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.182, f32[768,1,4]{2,1,0} %add.158)
  %reshape.187 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.183)
  %convert.188 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.187)
  %constant.189 = f32[] constant(1)
  %broadcast.190 = f32[4]{0} broadcast(f32[] %constant.189), dimensions={}
  %constant.191 = f32[] constant(0)
  %broadcast.192 = f32[4]{0} broadcast(f32[] %constant.191), dimensions={}
  %batch-norm-training.193 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.188, f32[4]{0} %broadcast.190, f32[4]{0} %broadcast.192), epsilon=1e-05, feature_index=1
  %get-tuple-element.194 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.193), index=0
  %p23.38 = f32[768]{0} parameter(23)
  %custom-call.184 = f32[768]{0} custom-call(f32[768]{0} %p23.38), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.195 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.184), dimensions={0}
  %multiply.196 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.194, f32[768,4]{1,0} %broadcast.195)
  %p24.39 = f32[768]{0} parameter(24)
  %custom-call.185 = f32[768]{0} custom-call(f32[768]{0} %p24.39), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.197 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.185), dimensions={0}
  %add.198 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.196, f32[768,4]{1,0} %broadcast.197)
  %convert.199 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.198)
  %reshape.200 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.199)
  %reshape.201 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.200)
  %dot.202 = f32[50257,4]{1,0} dot(f32[768,50257]{1,0} %custom-call.186, f32[768,4]{1,0} %reshape.201), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.203 = f32[50257,1,4]{2,1,0} reshape(f32[50257,4]{1,0} %dot.202)
  %scatter.142 = f32[128,4,12,64]{3,2,1,0} scatter(f32[128,4,12,64]{3,2,1,0} %custom-call.41, s32[1]{0} %p1.2, f32[1,4,12,64]{3,2,1,0} %reshape.84), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.142.AssignFunc.146
  %scatter.147 = f32[128,4,12,64]{3,2,1,0} scatter(f32[128,4,12,64]{3,2,1,0} %custom-call.42, s32[1]{0} %p1.2, f32[1,4,12,64]{3,2,1,0} %reshape.85), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.147.AssignFunc.151
  ROOT %tuple.204 = (f32[50257,1,4]{2,1,0}, f32[128,4,12,64]{3,2,1,0}, f32[128,4,12,64]{3,2,1,0}) tuple(f32[50257,1,4]{2,1,0} %reshape.203, f32[128,4,12,64]{3,2,1,0} %scatter.142, f32[128,4,12,64]{3,2,1,0} %scatter.147)
}

`

export default text;
