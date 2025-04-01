const text = `
HloModule FullyUnrolled.212, input_output_alias={ {1}: (5, {}, must-alias), {46}: (6, {}, must-alias) }

ENTRY %FullyUnrolled.212 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: f32[128,4,12,64], p6.7: f32[128,4,12,64], p7.8: f32[768], p8.9: f32[768], p9.10: f32[768,768], p10.11: f32[768], p11.12: f32[768,768], p12.13: f32[768], p13.14: f32[768,768], p14.15: f32[768], p15.16: f32[768,768], p16.17: f32[768], p17.18: f32[768], p18.19: f32[768], p19.20: f32[768,3072], p20.21: f32[3072], p21.22: f32[768,3072], p22.23: f32[768], p23.24: f32[768], p24.25: f32[768], p25.26: f32[768,50257]) -> (f32[50257,1,4], f32[128,4,12,64], f32[128,4,12,64], f32[768,4], f32[4,768], /*index=5*/f32[4,768], f32[4,768], f32[1,4,12,64], f32[1,4,12,64], f32[1,4,12,64], /*index=10*/f32[], f32[1,4,12,64], f32[1,4,12,64], f32[4,12,1,1], f32[], /*index=15*/f32[4,12,1,1], pred[4,12,1,128], f32[4,12,1,1], pred[4,12,1,1], f32[4,12,1,128], /*index=20*/f32[4,12,1,1], f32[], f32[4,12,1], f32[4,12,1], f32[4,12,1], /*index=25*/f32[4,12,1,128], f32[4,12,1,128], f32[4,12,1,128], f32[], f32[4,12,1], /*index=30*/f32[4,12,1,128], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1], /*index=35*/f32[4,12,1], f32[4,12,1,1], f32[4,12,1], f32[128,4,12,64], f32[1,4,12,64], /*index=40*/f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], /*index=45*/f32[1,4,12,64], f32[128,4,12,64], f32[4,768], f32[4,768], f32[768,1,4], /*index=50*/f32[768,1,4], f32[768,1,4]) {
  %p43.44 = f32[768,50257]{1,0} parameter(43)
  %custom-call.47 = f32[768,50257]{1,0} custom-call(f32[768,50257]{1,0} %p43.44), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %iota.48 = s32[128]{0} iota(), iota_dimension=0
  %broadcast.49 = s32[1,128]{1,0} broadcast(s32[128]{0} %iota.48), dimensions={1}
  %p1.2 = s32[1]{0} parameter(1)
  %broadcast.50 = s32[1,128]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={0}
  %compare.51 = pred[1,128]{1,0} compare(s32[1,128]{1,0} %broadcast.49, s32[1,128]{1,0} %broadcast.50), direction=LT
  %broadcast.55 = pred[4,1,128]{2,1,0} broadcast(pred[1,128]{1,0} %compare.51), dimensions={1,2}
  %broadcast.52 = s32[4,128]{1,0} broadcast(s32[128]{0} %iota.48), dimensions={1}
  %p2.3 = s32[4]{0} parameter(2)
  %broadcast.53 = s32[4,128]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.54 = pred[4,128]{1,0} compare(s32[4,128]{1,0} %broadcast.52, s32[4,128]{1,0} %broadcast.53), direction=GE
  %broadcast.56 = pred[4,1,128]{2,1,0} broadcast(pred[4,128]{1,0} %compare.54), dimensions={0,2}
  %and.57 = pred[4,1,128]{2,1,0} and(pred[4,1,128]{2,1,0} %broadcast.55, pred[4,1,128]{2,1,0} %broadcast.56)
  %reshape.266 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.57)
  %reshape.115 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.57)
  %broadcast.116 = pred[4,12,1,128]{3,2,1,0} broadcast(pred[4,128]{1,0} %reshape.115), dimensions={0,3}
  %p0.1 = f32[768,1,4]{2,1,0} parameter(0)
  %reshape.79 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %p0.1)
  %convert.80 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.79)
  %constant.81 = f32[] constant(1)
  %broadcast.82 = f32[4]{0} broadcast(f32[] %constant.81), dimensions={}
  %constant.83 = f32[] constant(0)
  %broadcast.84 = f32[4]{0} broadcast(f32[] %constant.83), dimensions={}
  %batch-norm-training.85 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.80, f32[4]{0} %broadcast.82, f32[4]{0} %broadcast.84), epsilon=1e-05, feature_index=1
  %get-tuple-element.86 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.85), index=0
  %p9.10 = f32[768]{0} parameter(9)
  %custom-call.63 = f32[768]{0} custom-call(f32[768]{0} %p9.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.87 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.63), dimensions={0}
  %multiply.88 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.86, f32[768,4]{1,0} %broadcast.87)
  %p10.11 = f32[768]{0} parameter(10)
  %custom-call.64 = f32[768]{0} custom-call(f32[768]{0} %p10.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.89 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.64), dimensions={0}
  %add.90 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.88, f32[768,4]{1,0} %broadcast.89)
  %convert.91 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.90)
  %reshape.92 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.91)
  %reshape.93 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.92)
  %p11.12 = f32[768,768]{1,0} parameter(11)
  %custom-call.65 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.94 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.93, f32[768,768]{1,0} %custom-call.65), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p12.13 = f32[768]{0} parameter(12)
  %custom-call.66 = f32[768]{0} custom-call(f32[768]{0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.95 = f32[768]{0} reshape(f32[768]{0} %custom-call.66)
  %broadcast.96 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.95), dimensions={1}
  %add.97 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.94, f32[4,768]{1,0} %broadcast.96)
  %reshape.106 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.97)
  %constant.109 = f32[] constant(8)
  %broadcast.110 = f32[1,4,12,64]{3,2,1,0} broadcast(f32[] %constant.109), dimensions={}
  %divide.111 = f32[1,4,12,64]{3,2,1,0} divide(f32[1,4,12,64]{3,2,1,0} %reshape.106, f32[1,4,12,64]{3,2,1,0} %broadcast.110)
  %p5.6 = f32[128,4,12,64]{3,2,1,0} parameter(5)
  %custom-call.61 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p5.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.112 = f32[4,12,1,128]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.111, f32[128,4,12,64]{3,2,1,0} %custom-call.61), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.113 = f32[] constant(-30000)
  %broadcast.114 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[] %constant.113), dimensions={}
  %select.117 = f32[4,12,1,128]{3,2,1,0} select(pred[4,12,1,128]{3,2,1,0} %broadcast.116, f32[4,12,1,128]{3,2,1,0} %dot.112, f32[4,12,1,128]{3,2,1,0} %broadcast.114)
  %constant.124 = f32[] constant(-inf)
  %reduce.125 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %select.117, f32[] %constant.124), dimensions={3}, to_apply=%reduce.125.MaxFunc.130
  %broadcast.59 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.58 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.60 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.59, s32[4,1]{1,0} %broadcast.58), direction=GE
  %reshape.121 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
  %broadcast.122 = pred[4,12,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.121), dimensions={0}
  %p13.14 = f32[768,768]{1,0} parameter(13)
  %custom-call.67 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.98 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.93, f32[768,768]{1,0} %custom-call.67), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p14.15 = f32[768]{0} parameter(14)
  %custom-call.68 = f32[768]{0} custom-call(f32[768]{0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.99 = f32[768]{0} reshape(f32[768]{0} %custom-call.68)
  %broadcast.100 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.99), dimensions={1}
  %add.101 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.98, f32[4,768]{1,0} %broadcast.100)
  %reshape.107 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.101)
  %dot.118 = f32[4,12,1,1]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.111, f32[1,4,12,64]{3,2,1,0} %reshape.107), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.119 = f32[] constant(-30000)
  %broadcast.120 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[] %constant.119), dimensions={}
  %select.123 = f32[4,12,1,1]{3,2,1,0} select(pred[4,12,1,1]{3,2,1,0} %broadcast.122, f32[4,12,1,1]{3,2,1,0} %dot.118, f32[4,12,1,1]{3,2,1,0} %broadcast.120)
  %reduce.131 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %select.123, f32[] %constant.124), dimensions={3}, to_apply=%reduce.131.MaxFunc.136
  %maximum.137 = f32[4,12,1]{2,1,0} maximum(f32[4,12,1]{2,1,0} %reduce.125, f32[4,12,1]{2,1,0} %reduce.131)
  %broadcast.138 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.137), dimensions={0,1,2}
  %subtract.139 = f32[4,12,1,128]{3,2,1,0} subtract(f32[4,12,1,128]{3,2,1,0} %select.117, f32[4,12,1,128]{3,2,1,0} %broadcast.138)
  %exponential.140 = f32[4,12,1,128]{3,2,1,0} exponential(f32[4,12,1,128]{3,2,1,0} %subtract.139)
  %convert.148 = f32[4,12,1,128]{3,2,1,0} convert(f32[4,12,1,128]{3,2,1,0} %exponential.140)
  %p6.7 = f32[128,4,12,64]{3,2,1,0} parameter(6)
  %custom-call.62 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p6.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.161 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,128]{3,2,1,0} %convert.148, f32[128,4,12,64]{3,2,1,0} %custom-call.62), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %broadcast.149 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.137), dimensions={0,1,2}
  %subtract.150 = f32[4,12,1,1]{3,2,1,0} subtract(f32[4,12,1,1]{3,2,1,0} %select.123, f32[4,12,1,1]{3,2,1,0} %broadcast.149)
  %exponential.151 = f32[4,12,1,1]{3,2,1,0} exponential(f32[4,12,1,1]{3,2,1,0} %subtract.150)
  %convert.159 = f32[4,12,1,1]{3,2,1,0} convert(f32[4,12,1,1]{3,2,1,0} %exponential.151)
  %p15.16 = f32[768,768]{1,0} parameter(15)
  %custom-call.69 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.102 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.93, f32[768,768]{1,0} %custom-call.69), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p16.17 = f32[768]{0} parameter(16)
  %custom-call.70 = f32[768]{0} custom-call(f32[768]{0} %p16.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.103 = f32[768]{0} reshape(f32[768]{0} %custom-call.70)
  %broadcast.104 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.103), dimensions={1}
  %add.105 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.102, f32[4,768]{1,0} %broadcast.104)
  %reshape.108 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.105)
  %dot.162 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,1]{3,2,1,0} %convert.159, f32[1,4,12,64]{3,2,1,0} %reshape.108), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.163 = f32[4,12,1,64]{3,2,1,0} add(f32[4,12,1,64]{3,2,1,0} %dot.161, f32[4,12,1,64]{3,2,1,0} %dot.162)
  %constant.141 = f32[] constant(0)
  %reduce.142 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %exponential.140, f32[] %constant.141), dimensions={3}, to_apply=%reduce.142.AddFunc.147
  %reduce.152 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %exponential.151, f32[] %constant.141), dimensions={3}, to_apply=%reduce.152.AddFunc.157
  %add.158 = f32[4,12,1]{2,1,0} add(f32[4,12,1]{2,1,0} %reduce.142, f32[4,12,1]{2,1,0} %reduce.152)
  %convert.160 = f32[4,12,1]{2,1,0} convert(f32[4,12,1]{2,1,0} %add.158)
  %broadcast.164 = f32[4,12,1,64]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %convert.160), dimensions={0,1,2}
  %divide.165 = f32[4,12,1,64]{3,2,1,0} divide(f32[4,12,1,64]{3,2,1,0} %add.163, f32[4,12,1,64]{3,2,1,0} %broadcast.164)
  %transpose.166 = f32[1,4,12,64]{3,2,1,0} transpose(f32[4,12,1,64]{3,2,1,0} %divide.165), dimensions={2,0,1,3}
  %reshape.177 = f32[4,768]{1,0} reshape(f32[1,4,12,64]{3,2,1,0} %transpose.166)
  %p17.18 = f32[768,768]{1,0} parameter(17)
  %custom-call.71 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p17.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.178 = f32[4,768]{1,0} dot(f32[4,768]{1,0} %reshape.177, f32[768,768]{1,0} %custom-call.71), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p18.19 = f32[768]{0} parameter(18)
  %custom-call.72 = f32[768]{0} custom-call(f32[768]{0} %p18.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.179 = f32[768]{0} reshape(f32[768]{0} %custom-call.72)
  %broadcast.180 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.179), dimensions={1}
  %add.181 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.178, f32[4,768]{1,0} %broadcast.180)
  %transpose.182 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.181), dimensions={1,0}
  %reshape.183 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.182)
  %add.184 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.183, f32[768,1,4]{2,1,0} %p0.1)
  %reshape.185 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.184)
  %convert.186 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.185)
  %constant.187 = f32[] constant(1)
  %broadcast.188 = f32[4]{0} broadcast(f32[] %constant.187), dimensions={}
  %constant.189 = f32[] constant(0)
  %broadcast.190 = f32[4]{0} broadcast(f32[] %constant.189), dimensions={}
  %batch-norm-training.191 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.186, f32[4]{0} %broadcast.188, f32[4]{0} %broadcast.190), epsilon=1e-05, feature_index=1
  %get-tuple-element.192 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.191), index=0
  %p19.20 = f32[768]{0} parameter(19)
  %custom-call.73 = f32[768]{0} custom-call(f32[768]{0} %p19.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.193 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.73), dimensions={0}
  %multiply.194 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.192, f32[768,4]{1,0} %broadcast.193)
  %p20.21 = f32[768]{0} parameter(20)
  %custom-call.74 = f32[768]{0} custom-call(f32[768]{0} %p20.21), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.195 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.74), dimensions={0}
  %add.196 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.194, f32[768,4]{1,0} %broadcast.195)
  %convert.197 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.196)
  %reshape.198 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.197)
  %reshape.199 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.198)
  %p21.22 = f32[768,3072]{1,0} parameter(21)
  %custom-call.75 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p21.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.200 = f32[4,3072]{1,0} dot(f32[768,4]{1,0} %reshape.199, f32[768,3072]{1,0} %custom-call.75), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p22.23 = f32[3072]{0} parameter(22)
  %custom-call.76 = f32[3072]{0} custom-call(f32[3072]{0} %p22.23), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.201 = f32[3072]{0} reshape(f32[3072]{0} %custom-call.76)
  %broadcast.202 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %reshape.201), dimensions={1}
  %add.203 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.200, f32[4,3072]{1,0} %broadcast.202)
  %custom-call.204 = f32[4,3072]{1,0} custom-call(f32[4,3072]{1,0} %add.203), custom_call_target="AwsNeuronGeluApprxTanh", api_version=API_VERSION_UNSPECIFIED
  %p23.24 = f32[768,3072]{1,0} parameter(23)
  %custom-call.77 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p23.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.205 = f32[4,768]{1,0} dot(f32[4,3072]{1,0} %custom-call.204, f32[768,3072]{1,0} %custom-call.77), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p24.25 = f32[768]{0} parameter(24)
  %custom-call.78 = f32[768]{0} custom-call(f32[768]{0} %p24.25), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.206 = f32[768]{0} reshape(f32[768]{0} %custom-call.78)
  %broadcast.207 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.206), dimensions={1}
  %add.208 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.205, f32[4,768]{1,0} %broadcast.207)
  %transpose.209 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.208), dimensions={1,0}
  %reshape.210 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.209)
  %add.211 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.210, f32[768,1,4]{2,1,0} %add.184)
  %reshape.230 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.211)
  %reshape.272 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
  %reshape.328 = f32[4,768]{1,0} reshape(f32[1,4,12,64]{3,2,1,0} %transpose.317)
  %p33.34 = f32[768,768]{1,0} parameter(33)
  %custom-call.222 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p33.34), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.329 = f32[4,768]{1,0} dot(f32[4,768]{1,0} %reshape.328, f32[768,768]{1,0} %custom-call.222), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p34.35 = f32[768]{0} parameter(34)
  %custom-call.223 = f32[768]{0} custom-call(f32[768]{0} %p34.35), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.330 = f32[768]{0} reshape(f32[768]{0} %custom-call.223)
  %broadcast.331 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.330), dimensions={1}
  %add.332 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.329, f32[4,768]{1,0} %broadcast.331)
  %transpose.333 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.332), dimensions={1,0}
  %reshape.334 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.333)
  %add.335 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.334, f32[768,1,4]{2,1,0} %add.211)
  %reshape.336 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.335)
  %convert.337 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.336)
  %constant.338 = f32[] constant(1)
  %broadcast.339 = f32[4]{0} broadcast(f32[] %constant.338), dimensions={}
  %constant.340 = f32[] constant(0)
  %broadcast.341 = f32[4]{0} broadcast(f32[] %constant.340), dimensions={}
  %batch-norm-training.342 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.337, f32[4]{0} %broadcast.339, f32[4]{0} %broadcast.341), epsilon=1e-05, feature_index=1
  %get-tuple-element.343 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.342), index=0
  %p35.36 = f32[768]{0} parameter(35)
  %custom-call.224 = f32[768]{0} custom-call(f32[768]{0} %p35.36), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.344 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.224), dimensions={0}
  %multiply.345 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.343, f32[768,4]{1,0} %broadcast.344)
  %p36.37 = f32[768]{0} parameter(36)
  %custom-call.225 = f32[768]{0} custom-call(f32[768]{0} %p36.37), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.346 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.225), dimensions={0}
  %add.347 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.345, f32[768,4]{1,0} %broadcast.346)
  %convert.348 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.347)
  %reshape.349 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.348)
  %reshape.350 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.349)
  %p37.38 = f32[768,3072]{1,0} parameter(37)
  %custom-call.226 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p37.38), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.351 = f32[4,3072]{1,0} dot(f32[768,4]{1,0} %reshape.350, f32[768,3072]{1,0} %custom-call.226), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p38.39 = f32[3072]{0} parameter(38)
  %custom-call.227 = f32[3072]{0} custom-call(f32[3072]{0} %p38.39), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.352 = f32[3072]{0} reshape(f32[3072]{0} %custom-call.227)
  %broadcast.353 = f32[4,3072]{1,0} broadcast(f32[3072]{0} %reshape.352), dimensions={1}
  %add.354 = f32[4,3072]{1,0} add(f32[4,3072]{1,0} %dot.351, f32[4,3072]{1,0} %broadcast.353)
  %custom-call.355 = f32[4,3072]{1,0} custom-call(f32[4,3072]{1,0} %add.354), custom_call_target="AwsNeuronGeluApprxTanh", api_version=API_VERSION_UNSPECIFIED
  %p39.40 = f32[768,3072]{1,0} parameter(39)
  %custom-call.228 = f32[768,3072]{1,0} custom-call(f32[768,3072]{1,0} %p39.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.356 = f32[4,768]{1,0} dot(f32[4,3072]{1,0} %custom-call.355, f32[768,3072]{1,0} %custom-call.228), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p40.41 = f32[768]{0} parameter(40)
  %custom-call.229 = f32[768]{0} custom-call(f32[768]{0} %p40.41), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.357 = f32[768]{0} reshape(f32[768]{0} %custom-call.229)
  %broadcast.358 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.357), dimensions={1}
  %add.359 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.356, f32[4,768]{1,0} %broadcast.358)
  %transpose.360 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.359), dimensions={1,0}
  %reshape.361 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.360)
  %add.362 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %reshape.361, f32[768,1,4]{2,1,0} %add.335)
  %reshape.363 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.362)
  %convert.364 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.363)
  %constant.365 = f32[] constant(1)
  %broadcast.366 = f32[4]{0} broadcast(f32[] %constant.365), dimensions={}
  %constant.367 = f32[] constant(0)
  %broadcast.368 = f32[4]{0} broadcast(f32[] %constant.367), dimensions={}
  %batch-norm-training.369 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.364, f32[4]{0} %broadcast.366, f32[4]{0} %broadcast.368), epsilon=1e-05, feature_index=1
  %get-tuple-element.370 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.369), index=0
  %p41.42 = f32[768]{0} parameter(41)
  %custom-call.45 = f32[768]{0} custom-call(f32[768]{0} %p41.42), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.371 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.45), dimensions={0}
  %multiply.372 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.370, f32[768,4]{1,0} %broadcast.371)
  %p42.43 = f32[768]{0} parameter(42)
  %custom-call.46 = f32[768]{0} custom-call(f32[768]{0} %p42.43), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.373 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.46), dimensions={0}
  %add.374 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.372, f32[768,4]{1,0} %broadcast.373)
  %convert.375 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.374)
  %reshape.376 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.375)
  %reshape.377 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.376)
  %dot.378 = f32[50257,4]{1,0} dot(f32[768,50257]{1,0} %custom-call.47, f32[768,4]{1,0} %reshape.377), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.379 = f32[50257,1,4]{2,1,0} reshape(f32[50257,4]{1,0} %dot.378)
 }
`;

export default text;
