const text = `
HloModule FullyUnrolled.217, input_output_alias={ {1}: (7, {}, must-alias), {2}: (8, {}, must-alias) }

%reduce.109.Reducer.114 (p0.111: f32[], p1.112: f32[]) -> f32[] {
  %p0.111 = f32[] parameter(0)
  %p1.112 = f32[] parameter(1)
  ROOT %maximum.113 = f32[] maximum(f32[] %p0.111, f32[] %p1.112)
}

%reduce.116.Reducer.121 (p0.118: f32[], p1.119: f32[]) -> f32[] {
  %p0.118 = f32[] parameter(0)
  %p1.119 = f32[] parameter(1)
  ROOT %maximum.120 = f32[] maximum(f32[] %p0.118, f32[] %p1.119)
}

%reduce.128.Reducer.133 (p0.130: f32[], p1.131: f32[]) -> f32[] {
  %p0.130 = f32[] parameter(0)
  %p1.131 = f32[] parameter(1)
  ROOT %add.132 = f32[] add(f32[] %p0.130, f32[] %p1.131)
}

%reduce.139.Reducer.144 (p0.141: f32[], p1.142: f32[]) -> f32[] {
  %p0.141 = f32[] parameter(0)
  %p1.142 = f32[] parameter(1)
  ROOT %add.143 = f32[] add(f32[] %p0.141, f32[] %p1.142)
}

%scatter.154.AssignFunc.158 (p0.156: f32[], p1.157: f32[]) -> f32[] {
  %p0.156 = f32[] parameter(0)
  ROOT %p1.157 = f32[] parameter(1)
}

%scatter.159.AssignFunc.163 (p0.161: f32[], p1.162: f32[]) -> f32[] {
  %p0.161 = f32[] parameter(0)
  ROOT %p1.162 = f32[] parameter(1)
}

ENTRY %FullyUnrolled.217 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: s32[1], p6.7: s32[1], p7.8: f32[128,4,12,64], p8.9: f32[128,4,12,64], p9.10: f32[768], p10.11: f32[768], p11.12: f32[768,768], p12.13: f32[768], p13.14: f32[768,768], p14.15: f32[768], p15.16: f32[768,768], p16.17: f32[768], p17.18: f32[768,768], p18.19: f32[768], p19.20: f32[768], p20.21: f32[768], p21.22: f32[768,3072], p22.23: f32[3072], p23.24: f32[768,3072], p24.25: f32[768], p25.26: f32[768], p26.27: f32[768], p27.28: f32[768,50257]) -> (f32[50257,1,4], f32[128,4,12,64], f32[128,4,12,64]) {
  %p3.4 = s32[1]{0} parameter(3)
  %p4.5 = s32[1]{0} parameter(4)
  %p5.6 = s32[1]{0} parameter(5)
  %p6.7 = s32[1]{0} parameter(6)
  %p27.28 = f32[768,50257]{1,0} parameter(27)
  %custom-call.31 = f32[768,50257]{1,0} custom-call(f32[768,50257]{1,0} %p27.28), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %iota.32 = s32[128]{0} iota(), iota_dimension=0
  %broadcast.33 = s32[1,128]{1,0} broadcast(s32[128]{0} %iota.32), dimensions={1}
  %p1.2 = s32[1]{0} parameter(1)
  %broadcast.34 = s32[1,128]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={0}
  %compare.35 = pred[1,128]{1,0} compare(s32[1,128]{1,0} %broadcast.33, s32[1,128]{1,0} %broadcast.34), direction=LT
  %broadcast.39 = pred[4,1,128]{2,1,0} broadcast(pred[1,128]{1,0} %compare.35), dimensions={1,2}
  %broadcast.36 = s32[4,128]{1,0} broadcast(s32[128]{0} %iota.32), dimensions={1}
  %p2.3 = s32[4]{0} parameter(2)
  %broadcast.37 = s32[4,128]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.38 = pred[4,128]{1,0} compare(s32[4,128]{1,0} %broadcast.36, s32[4,128]{1,0} %broadcast.37), direction=GE
  %broadcast.40 = pred[4,1,128]{2,1,0} broadcast(pred[4,128]{1,0} %compare.38), dimensions={0,2}
  %and.41 = pred[4,1,128]{2,1,0} and(pred[4,1,128]{2,1,0} %broadcast.39, pred[4,1,128]{2,1,0} %broadcast.40)
  %reshape.99 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.41)
  %broadcast.100 = pred[4,12,1,128]{3,2,1,0} broadcast(pred[4,128]{1,0} %reshape.99), dimensions={0,3}
  %p0.1 = f32[768,1,4]{2,1,0} parameter(0)
  %reshape.63 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %p0.1)
  %constant.64 = f32[] constant(1)
  %broadcast.65 = f32[4]{0} broadcast(f32[] %constant.64), dimensions={}
  %constant.66 = f32[] constant(0)
  %broadcast.67 = f32[4]{0} broadcast(f32[] %constant.66), dimensions={}
  %batch-norm-training.68 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %reshape.63, f32[4]{0} %broadcast.65, f32[4]{0} %broadcast.67), epsilon=1e-05, feature_index=1
  %get-tuple-element.69 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.68), index=0
  %p9.10 = f32[768]{0} parameter(9)
  %custom-call.47 = f32[768]{0} custom-call(f32[768]{0} %p9.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.70 = f32[768]{0} reshape(f32[768]{0} %custom-call.47)
  %broadcast.71 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.70), dimensions={0}
  %multiply.72 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.69, f32[768,4]{1,0} %broadcast.71)
  %p10.11 = f32[768]{0} parameter(10)
  %custom-call.48 = f32[768]{0} custom-call(f32[768]{0} %p10.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.73 = f32[768]{0} reshape(f32[768]{0} %custom-call.48)
  %broadcast.74 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.73), dimensions={0}
  %add.75 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.72, f32[768,4]{1,0} %broadcast.74)
  %reshape.76 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %add.75)
  %reshape.77 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.76)
  %p11.12 = f32[768,768]{1,0} parameter(11)
  %custom-call.49 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.78 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.77, f32[768,768]{1,0} %custom-call.49), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p12.13 = f32[768]{0} parameter(12)
  %custom-call.50 = f32[768]{0} custom-call(f32[768]{0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.79 = f32[768]{0} reshape(f32[768]{0} %custom-call.50)
  %broadcast.80 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.79), dimensions={1}
  %add.81 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.78, f32[4,768]{1,0} %broadcast.80)
  %reshape.90 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.81)
  %constant.93 = f32[] constant(8)
  %broadcast.94 = f32[1,4,12,64]{3,2,1,0} broadcast(f32[] %constant.93), dimensions={}
  %divide.95 = f32[1,4,12,64]{3,2,1,0} divide(f32[1,4,12,64]{3,2,1,0} %reshape.90, f32[1,4,12,64]{3,2,1,0} %broadcast.94)
  %p7.8 = f32[128,4,12,64]{3,2,1,0} parameter(7)
  %custom-call.45 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.96 = f32[4,12,1,128]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.95, f32[128,4,12,64]{3,2,1,0} %custom-call.45), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.97 = f32[] constant(-30000)
  %broadcast.98 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[] %constant.97), dimensions={}
  %select.101 = f32[4,12,1,128]{3,2,1,0} select(pred[4,12,1,128]{3,2,1,0} %broadcast.100, f32[4,12,1,128]{3,2,1,0} %dot.96, f32[4,12,1,128]{3,2,1,0} %broadcast.98)
  %constant.108 = f32[] constant(-inf)
  %reduce.109 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %select.101, f32[] %constant.108), dimensions={3}, to_apply=%reduce.109.Reducer.114
  %broadcast.43 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.42 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.44 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.43, s32[4,1]{1,0} %broadcast.42), direction=GE
  %reshape.105 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.44)
  %broadcast.106 = pred[4,12,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.105), dimensions={0}
  %p13.14 = f32[768,768]{1,0} parameter(13)
  %custom-call.51 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.82 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.77, f32[768,768]{1,0} %custom-call.51), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p14.15 = f32[768]{0} parameter(14)
  %custom-call.52 = f32[768]{0} custom-call(f32[768]{0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.83 = f32[768]{0} reshape(f32[768]{0} %custom-call.52)
  %broadcast.84 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.83), dimensions={1}
  %add.85 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.82, f32[4,768]{1,0} %broadcast.84)
  %reshape.91 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.85)
  %dot.102 = f32[4,12,1,1]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.95, f32[1,4,12,64]{3,2,1,0} %reshape.91), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.103 = f32[] constant(-30000)
  %broadcast.104 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[] %constant.103), dimensions={}
  %select.107 = f32[4,12,1,1]{3,2,1,0} select(pred[4,12,1,1]{3,2,1,0} %broadcast.106, f32[4,12,1,1]{3,2,1,0} %dot.102, f32[4,12,1,1]{3,2,1,0} %broadcast.104)
  %constant.115 = f32[] constant(-inf)
  %reduce.116 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %select.107, f32[] %constant.115), dimensions={3}, to_apply=%reduce.116.Reducer.121
  %maximum.122 = f32[4,12,1]{2,1,0} maximum(f32[4,12,1]{2,1,0} %reduce.109, f32[4,12,1]{2,1,0} %reduce.116)
  %reshape.123 = f32[4,12]{1,0} reshape(f32[4,12,1]{2,1,0} %maximum.122)
  %broadcast.124 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[4,12]{1,0} %reshape.123), dimensions={0,1}
  %subtract.125 = f32[4,12,1,128]{3,2,1,0} subtract(f32[4,12,1,128]{3,2,1,0} %select.101, f32[4,12,1,128]{3,2,1,0} %broadcast.124)
  %exponential.126 = f32[4,12,1,128]{3,2,1,0} exponential(f32[4,12,1,128]{3,2,1,0} %subtract.125)
  %p8.9 = f32[128,4,12,64]{3,2,1,0} parameter(8)
  %custom-call.46 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.147 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,128]{3,2,1,0} %exponential.126, f32[128,4,12,64]{3,2,1,0} %custom-call.46), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %reshape.134 = f32[4,12]{1,0} reshape(f32[4,12,1]{2,1,0} %maximum.122)
  %broadcast.135 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[4,12]{1,0} %reshape.134), dimensions={0,1}
  %subtract.136 = f32[4,12,1,1]{3,2,1,0} subtract(f32[4,12,1,1]{3,2,1,0} %select.107, f32[4,12,1,1]{3,2,1,0} %broadcast.135)
  %exponential.137 = f32[4,12,1,1]{3,2,1,0} exponential(f32[4,12,1,1]{3,2,1,0} %subtract.136)
  %p15.16 = f32[768,768]{1,0} parameter(15)
  %custom-call.53 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.86 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.77, f32[768,768]{1,0} %custom-call.53), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p16.17 = f32[768]{0} parameter(16)
  %custom-call.54 = f32[768]{0} custom-call(f32[768]{0} %p16.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.87 = f32[768]{0} reshape(f32[768]{0} %custom-call.54)
  %broadcast.88 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.87), dimensions={1}
  %add.89 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.86, f32[4,768]{1,0} %broadcast.88)
  %reshape.92 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.89)
  %dot.148 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,1]{3,2,1,0} %exponential.137, f32[1,4,12,64]{3,2,1,0} %reshape.92), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.149 = f32[4,12,1,64]{3,2,1,0} add(f32[4,12,1,64]{3,2,1,0} %dot.147, f32[4,12,1,64]{3,2,1,0} %dot.148)
  %constant.127 = f32[] constant(0)
  %reduce.128 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %exponential.126, f32[] %constant.127), dimensions={3}, to_apply=%reduce.128.Reducer.133
  %constant.138 = f32[] constant(0)
  %reduce.139 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %exponential.137, f32[] %constant.138), dimensions={3}, to_apply=%reduce.139.Reducer.144
  %add.145 = f32[4,12,1]{2,1,0} add(f32[4,12,1]{2,1,0} %reduce.128, f32[4,12,1]{2,1,0} %reduce.139)
  %convert.146 = f32[4,12,1]{2,1,0} convert(f32[4,12,1]{2,1,0} %add.145)
  %reshape.150 = f32[4,12]{1,0} reshape(f32[4,12,1]{2,1,0} %convert.146)
  %broadcast.151 = f32[4,12,1,64]{3,2,1,0} broadcast(f32[4,12]{1,0} %reshape.150), dimensions={0,1}
  %divide.152 = f32[4,12,1,64]{3,2,1,0} divide(f32[4,12,1,64]{3,2,1,0} %add.149, f32[4,12,1,64]{3,2,1,0} %broadcast.151)
  %transpose.153 = f32[1,4,12,64]{3,2,1,0} transpose(f32[4,12,1,64]{3,2,1,0} %divide.152), dimensions={2,0,1,3}
  %reshape.164 = f32[4,768]{1,0} reshape(f32[1,4,12,64]{3,2,1,0} %transpose.153)
  %p17.18 = f32[768,768]{1,0} parameter(17)
  %custom-call.55 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p17.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.165 = f32[4,768]{1,0} dot(f32[4,768]{1,0} %reshape.164, f32[768,768]{1,0} %custom-call.55), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p18.19 = f32[768]{0} parameter(18)
  %custom-call.56 = f32[768]{0} custom-call(f32[768]{0} %p18.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.166 = f32[768]{0} reshape(f32[768]{0} %custom-call.56)
  %broadcast.167 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.166), dimensions={1}
  %add.168 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.165, f32[4,768]{1,0} %broadcast.167)
  %transpose.169 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.168), dimensions={1,0}
  %reshape.170 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.169)
  %add.171 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.170, f32[768,1,4]{2,1,0} %p0.1)
  %reshape.172 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.171)
  %constant.173 = f32[] constant(1)
  %broadcast.174 = f32[4]{0} broadcast(f32[] %constant.173), dimensions={}
  %constant.175 = f32[] constant(0)
  %broadcast.176 = f32[4]{0} broadcast(f32[] %constant.175), dimensions={}
  %batch-norm-training.177 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %reshape.172, f32[4]{0} %broadcast.174, f32[4]{0} %broadcast.176), epsilon=1e-05, feature_index=1
  %get-tuple-element.178 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.177), index=0
  %p19.20 = f32[768]{0} parameter(19)
  %custom-call.57 = f32[768]{0} custom-call(f32[768]{0} %p19.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.179 = f32[768]{0} reshape(f32[768]{0} %custom-call.57)
  %broadcast.180 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.179), dimensions={0}
  %multiply.181 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.178, f32[768,4]{1,0} %broadcast.180)
  %p20.21 = f32[768]{0} parameter(20)
  %custom-call.58 = f32[768]{0} custom-call(f32[768]{0} %p20.21), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.182 = f32[768]{0} reshape(f32[768]{0} %custom-call.58)
  %broadcast.183 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.182), dimensions={0}
  %add.184 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.181, f32[768,4]{1,0} %broadcast.183)
  %reshape.185 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %add.184)
  %reshape.186 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.185)
  %p21.22 = f32[768,3072]{1,0} parameter(21)
  %custom-call.59 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p21.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.187 = f32[4,3072]{1,0} dot(f32[768,4]{1,0} %reshape.186, f32[768,3072]{1,0} %custom-call.59), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p22.23 = f32[3072]{0} parameter(22)
  %custom-call.60 = f32[3072]{0} custom-call(f32[3072]{0} %p22.23), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.188 = f32[3072]{0} reshape(f32[3072]{0} %custom-call.60)
  %broadcast.189 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %reshape.188), dimensions={1}
  %add.190 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.187, f32[4,3072]{1,0} %broadcast.189)
  %custom-call.191 = f32[4,3072]{1,0} custom-call(f32[4,3072]{1,0} %add.190), custom_call_target="AwsNeuronGeluApprxTanh", api_version=API_VERSION_UNSPECIFIED
  %p23.24 = f32[768,3072]{1,0} parameter(23)
  %custom-call.61 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p23.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.192 = f32[4,768]{1,0} dot(f32[4,3072]{1,0} %custom-call.191, f32[768,3072]{1,0} %custom-call.61), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p24.25 = f32[768]{0} parameter(24)
  %custom-call.62 = f32[768]{0} custom-call(f32[768]{0} %p24.25), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.193 = f32[768]{0} reshape(f32[768]{0} %custom-call.62)
  %broadcast.194 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.193), dimensions={1}
  %add.195 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.192, f32[4,768]{1,0} %broadcast.194)
  %transpose.196 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.195), dimensions={1,0}
  %reshape.197 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.196)
  %add.198 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.197, f32[768,1,4]{2,1,0} %add.171)
  %reshape.199 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.198)
  %constant.200 = f32[] constant(1)
  %broadcast.201 = f32[4]{0} broadcast(f32[] %constant.200), dimensions={}
  %constant.202 = f32[] constant(0)
  %broadcast.203 = f32[4]{0} broadcast(f32[] %constant.202), dimensions={}
  %batch-norm-training.204 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %reshape.199, f32[4]{0} %broadcast.201, f32[4]{0} %broadcast.203), epsilon=1e-05, feature_index=1
  %get-tuple-element.205 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.204), index=0
  %p25.26 = f32[768]{0} parameter(25)
  %custom-call.29 = f32[768]{0} custom-call(f32[768]{0} %p25.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.206 = f32[768]{0} reshape(f32[768]{0} %custom-call.29)
  %broadcast.207 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.206), dimensions={0}
  %multiply.208 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.205, f32[768,4]{1,0} %broadcast.207)
  %p26.27 = f32[768]{0} parameter(26)
  %custom-call.30 = f32[768]{0} custom-call(f32[768]{0} %p26.27), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.209 = f32[768]{0} reshape(f32[768]{0} %custom-call.30)
  %broadcast.210 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.209), dimensions={0}
  %add.211 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.208, f32[768,4]{1,0} %broadcast.210)
  %reshape.212 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %add.211)
  %reshape.213 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.212)
  %dot.214 = f32[50257,4]{1,0} dot(f32[768,50257]{1,0} %custom-call.31, f32[768,4]{1,0} %reshape.213), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.215 = f32[50257,1,4]{2,1,0} reshape(f32[50257,4]{1,0} %dot.214)
  %scatter.154 = f32[128,4,12,64]{3,2,1,0} scatter(f32[128,4,12,64]{3,2,1,0} %custom-call.45, s32[1]{0} %p1.2, f32[1,4,12,64]{3,2,1,0} %reshape.91), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.154.AssignFunc.158
  %scatter.159 = f32[128,4,12,64]{3,2,1,0} scatter(f32[128,4,12,64]{3,2,1,0} %custom-call.46, s32[1]{0} %p1.2, f32[1,4,12,64]{3,2,1,0} %reshape.92), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.159.AssignFunc.163
  ROOT %tuple.216 = (f32[50257,1,4]{2,1,0}, f32[128,4,12,64]{3,2,1,0}, f32[128,4,12,64]{3,2,1,0}) tuple(f32[50257,1,4]{2,1,0} %reshape.215, f32[128,4,12,64]{3,2,1,0} %scatter.154, f32[128,4,12,64]{3,2,1,0} %scatter.159)
}

`

export default text
