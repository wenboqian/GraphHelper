const text = `
HloModule FullyUnrolled.212, input_output_alias={ {1}: (5, {}, must-alias), {46}: (6, {}, must-alias) }

ENTRY %FullyUnrolled.212 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: f32[128,4,12,64], p6.7: f32[128,4,12,64], p7.8: f32[768], p8.9: f32[768], p9.10: f32[768,768], p10.11: f32[768], p11.12: f32[768,768], p12.13: f32[768], p13.14: f32[768,768], p14.15: f32[768], p15.16: f32[768,768], p16.17: f32[768], p17.18: f32[768], p18.19: f32[768], p19.20: f32[768,3072], p20.21: f32[3072], p21.22: f32[768,3072], p22.23: f32[768], p23.24: f32[768], p24.25: f32[768], p25.26: f32[768,50257]) -> (f32[50257,1,4], f32[128,4,12,64], f32[128,4,12,64], f32[768,4], f32[4,768], /*index=5*/f32[4,768], f32[4,768], f32[1,4,12,64], f32[1,4,12,64], f32[1,4,12,64], /*index=10*/f32[], f32[1,4,12,64], f32[1,4,12,64], f32[4,12,1,1], f32[], /*index=15*/f32[4,12,1,1], pred[4,12,1,128], f32[4,12,1,1], pred[4,12,1,1], f32[4,12,1,128], /*index=20*/f32[4,12,1,1], f32[], f32[4,12,1], f32[4,12,1], f32[4,12,1], /*index=25*/f32[4,12,1,128], f32[4,12,1,128], f32[4,12,1,128], f32[], f32[4,12,1], /*index=30*/f32[4,12,1,128], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1], /*index=35*/f32[4,12,1], f32[4,12,1,1], f32[4,12,1], f32[128,4,12,64], f32[1,4,12,64], /*index=40*/f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], /*index=45*/f32[1,4,12,64], f32[128,4,12,64], f32[4,768], f32[4,768], f32[768,1,4], /*index=50*/f32[768,1,4], f32[768,1,4]) {
  %p43.44 = f32[768,25129]{1,0} parameter(43)
  %custom-call.47 = f32[768,25129]{1,0} custom-call(f32[768,25129]{1,0} %p43.44), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
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
  %reshape.278 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.57)
  %reshape.115 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.57)
  %broadcast.116 = pred[4,6,1,128]{3,2,1,0} broadcast(pred[4,128]{1,0} %reshape.115), dimensions={0,3}
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
  %p11.12 = f32[768,384]{1,0} parameter(11)
  %custom-call.65 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.94 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.93, f32[768,384]{1,0} %custom-call.65), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p12.13 = f32[384]{0} parameter(12)
  %custom-call.66 = f32[384]{0} custom-call(f32[384]{0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.95 = f32[384]{0} reshape(f32[384]{0} %custom-call.66)
  %broadcast.96 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.95), dimensions={1}
  %add.97 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.94, f32[4,384]{1,0} %broadcast.96)
  %reshape.106 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.97)
  %constant.109 = f32[] constant(8)
  %broadcast.110 = f32[1,4,6,64]{3,2,1,0} broadcast(f32[] %constant.109), dimensions={}
  %divide.111 = f32[1,4,6,64]{3,2,1,0} divide(f32[1,4,6,64]{3,2,1,0} %reshape.106, f32[1,4,6,64]{3,2,1,0} %broadcast.110)
  %p5.6 = f32[128,4,6,64]{3,2,1,0} parameter(5)
  %custom-call.61 = f32[128,4,6,64]{3,2,1,0} custom-call(f32[128,4,6,64]{3,2,1,0} %p5.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.112 = f32[4,6,1,128]{3,2,1,0} dot(f32[1,4,6,64]{3,2,1,0} %divide.111, f32[128,4,6,64]{3,2,1,0} %custom-call.61), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.113 = f32[] constant(-30000)
  %broadcast.114 = f32[4,6,1,128]{3,2,1,0} broadcast(f32[] %constant.113), dimensions={}
  %select.117 = f32[4,6,1,128]{3,2,1,0} select(pred[4,6,1,128]{3,2,1,0} %broadcast.116, f32[4,6,1,128]{3,2,1,0} %dot.112, f32[4,6,1,128]{3,2,1,0} %broadcast.114)
  %constant.124 = f32[] constant(-inf)
  %reduce.125 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,128]{3,2,1,0} %select.117, f32[] %constant.124), dimensions={3}, to_apply=%reduce.125.MaxFunc.130
  %broadcast.59 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.58 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.60 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.59, s32[4,1]{1,0} %broadcast.58), direction=GE
  %reshape.121 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
  %broadcast.122 = pred[4,6,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.121), dimensions={0}
  %p13.14 = f32[768,384]{1,0} parameter(13)
  %custom-call.67 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.98 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.93, f32[768,384]{1,0} %custom-call.67), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p14.15 = f32[384]{0} parameter(14)
  %custom-call.68 = f32[384]{0} custom-call(f32[384]{0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.99 = f32[384]{0} reshape(f32[384]{0} %custom-call.68)
  %broadcast.100 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.99), dimensions={1}
  %add.101 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.98, f32[4,384]{1,0} %broadcast.100)
  %reshape.107 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.101)
  %dot.118 = f32[4,6,1,1]{3,2,1,0} dot(f32[1,4,6,64]{3,2,1,0} %divide.111, f32[1,4,6,64]{3,2,1,0} %reshape.107), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.119 = f32[] constant(-30000)
  %broadcast.120 = f32[4,6,1,1]{3,2,1,0} broadcast(f32[] %constant.119), dimensions={}
  %select.123 = f32[4,6,1,1]{3,2,1,0} select(pred[4,6,1,1]{3,2,1,0} %broadcast.122, f32[4,6,1,1]{3,2,1,0} %dot.118, f32[4,6,1,1]{3,2,1,0} %broadcast.120)
  %reduce.131 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,1]{3,2,1,0} %select.123, f32[] %constant.124), dimensions={3}, to_apply=%reduce.131.MaxFunc.136
  %maximum.137 = f32[4,6,1]{2,1,0} maximum(f32[4,6,1]{2,1,0} %reduce.125, f32[4,6,1]{2,1,0} %reduce.131)
  %broadcast.138 = f32[4,6,1,128]{3,2,1,0} broadcast(f32[4,6,1]{2,1,0} %maximum.137), dimensions={0,1,2}
  %subtract.139 = f32[4,6,1,128]{3,2,1,0} subtract(f32[4,6,1,128]{3,2,1,0} %select.117, f32[4,6,1,128]{3,2,1,0} %broadcast.138)
  %exponential.140 = f32[4,6,1,128]{3,2,1,0} exponential(f32[4,6,1,128]{3,2,1,0} %subtract.139)
  %convert.148 = f32[4,6,1,128]{3,2,1,0} convert(f32[4,6,1,128]{3,2,1,0} %exponential.140)
  %p6.7 = f32[128,4,6,64]{3,2,1,0} parameter(6)
  %custom-call.62 = f32[128,4,6,64]{3,2,1,0} custom-call(f32[128,4,6,64]{3,2,1,0} %p6.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.161 = f32[4,6,1,64]{3,2,1,0} dot(f32[4,6,1,128]{3,2,1,0} %convert.148, f32[128,4,6,64]{3,2,1,0} %custom-call.62), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %broadcast.149 = f32[4,6,1,1]{3,2,1,0} broadcast(f32[4,6,1]{2,1,0} %maximum.137), dimensions={0,1,2}
  %subtract.150 = f32[4,6,1,1]{3,2,1,0} subtract(f32[4,6,1,1]{3,2,1,0} %select.123, f32[4,6,1,1]{3,2,1,0} %broadcast.149)
  %exponential.151 = f32[4,6,1,1]{3,2,1,0} exponential(f32[4,6,1,1]{3,2,1,0} %subtract.150)
  %convert.159 = f32[4,6,1,1]{3,2,1,0} convert(f32[4,6,1,1]{3,2,1,0} %exponential.151)
  %p15.16 = f32[768,384]{1,0} parameter(15)
  %custom-call.69 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.102 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.93, f32[768,384]{1,0} %custom-call.69), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p16.17 = f32[384]{0} parameter(16)
  %custom-call.70 = f32[384]{0} custom-call(f32[384]{0} %p16.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.103 = f32[384]{0} reshape(f32[384]{0} %custom-call.70)
  %broadcast.104 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.103), dimensions={1}
  %add.105 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.102, f32[4,384]{1,0} %broadcast.104)
  %reshape.108 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.105)
  %dot.162 = f32[4,6,1,64]{3,2,1,0} dot(f32[4,6,1,1]{3,2,1,0} %convert.159, f32[1,4,6,64]{3,2,1,0} %reshape.108), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.163 = f32[4,6,1,64]{3,2,1,0} add(f32[4,6,1,64]{3,2,1,0} %dot.161, f32[4,6,1,64]{3,2,1,0} %dot.162)
  %constant.141 = f32[] constant(0)
  %reduce.142 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,128]{3,2,1,0} %exponential.140, f32[] %constant.141), dimensions={3}, to_apply=%reduce.142.AddFunc.147
  %reduce.152 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,1]{3,2,1,0} %exponential.151, f32[] %constant.141), dimensions={3}, to_apply=%reduce.152.AddFunc.157
  %add.158 = f32[4,6,1]{2,1,0} add(f32[4,6,1]{2,1,0} %reduce.142, f32[4,6,1]{2,1,0} %reduce.152)
  %convert.160 = f32[4,6,1]{2,1,0} convert(f32[4,6,1]{2,1,0} %add.158)
  %broadcast.164 = f32[4,6,1,64]{3,2,1,0} broadcast(f32[4,6,1]{2,1,0} %convert.160), dimensions={0,1,2}
  %divide.165 = f32[4,6,1,64]{3,2,1,0} divide(f32[4,6,1,64]{3,2,1,0} %add.163, f32[4,6,1,64]{3,2,1,0} %broadcast.164)
  %transpose.166 = f32[1,4,6,64]{3,2,1,0} transpose(f32[4,6,1,64]{3,2,1,0} %divide.165), dimensions={2,0,1,3}
  %reshape.177 = f32[4,384]{1,0} reshape(f32[1,4,6,64]{3,2,1,0} %transpose.166)
  %p17.18 = f32[768,384]{1,0} parameter(17)
  %custom-call.71 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p17.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.178 = f32[4,768]{1,0} dot(f32[4,384]{1,0} %reshape.177, f32[768,384]{1,0} %custom-call.71), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p18.19 = f32[768]{0} parameter(18)
  %custom-call.72 = f32[768]{0} custom-call(f32[768]{0} %p18.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.179 = f32[768]{0} reshape(f32[768]{0} %custom-call.72)
  %broadcast.180 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.179), dimensions={1}
  %add.181 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.178, f32[4,768]{1,0} %broadcast.180)
  %transpose.182 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.181), dimensions={1,0}
  %reshape.183 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.182)
  %all-reduce.184 = f32[768,1,4]{2,1,0} all-reduce(f32[768,1,4]{2,1,0} %reshape.183), replica_groups={{0,1}}, to_apply=%all-reduce.184.Reducer.189
  %add.190 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %all-reduce.184, f32[768,1,4]{2,1,0} %p0.1)
  %reshape.191 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.190)
  %convert.192 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.191)
  %constant.193 = f32[] constant(1)
  %broadcast.194 = f32[4]{0} broadcast(f32[] %constant.193), dimensions={}
  %constant.195 = f32[] constant(0)
  %broadcast.196 = f32[4]{0} broadcast(f32[] %constant.195), dimensions={}
  %batch-norm-training.197 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.192, f32[4]{0} %broadcast.194, f32[4]{0} %broadcast.196), epsilon=1e-05, feature_index=1
  %get-tuple-element.198 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.197), index=0
  %p19.20 = f32[768]{0} parameter(19)
  %custom-call.73 = f32[768]{0} custom-call(f32[768]{0} %p19.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.199 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.73), dimensions={0}
  %multiply.200 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.198, f32[768,4]{1,0} %broadcast.199)
  %p20.21 = f32[768]{0} parameter(20)
  %custom-call.74 = f32[768]{0} custom-call(f32[768]{0} %p20.21), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.201 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.74), dimensions={0}
  %add.202 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.200, f32[768,4]{1,0} %broadcast.201)
  %convert.203 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.202)
  %reshape.204 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.203)
  %reshape.205 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.204)
  %p21.22 = f32[768,1536]{1,0} parameter(21)
  %custom-call.75 = f32[768,1536]{1,0} custom-call(f32[768,1536]{1,0} %p21.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.206 = f32[4,1536]{1,0} dot(f32[768,4]{1,0} %reshape.205, f32[768,1536]{1,0} %custom-call.75), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p22.23 = f32[1536]{0} parameter(22)
  %custom-call.76 = f32[1536]{0} custom-call(f32[1536]{0} %p22.23), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.207 = f32[1536]{0} reshape(f32[1536]{0} %custom-call.76)
  %broadcast.208 = f32[4,1536]{1,0} broadcast(f32[1536]{0} %reshape.207), dimensions={1}
  %add.209 = f32[4,1536]{1,0} add(f32[4,1536]{1,0} %dot.206, f32[4,1536]{1,0} %broadcast.208)
  %custom-call.210 = f32[4,1536]{1,0} custom-call(f32[4,1536]{1,0} %add.209), custom_call_target="AwsNeuronGeluApprxTanh", api_version=API_VERSION_UNSPECIFIED
  %p23.24 = f32[768,1536]{1,0} parameter(23)
  %custom-call.77 = f32[768,1536]{1,0} custom-call(f32[768,1536]{1,0} %p23.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.211 = f32[4,768]{1,0} dot(f32[4,1536]{1,0} %custom-call.210, f32[768,1536]{1,0} %custom-call.77), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p24.25 = f32[768]{0} parameter(24)
  %custom-call.78 = f32[768]{0} custom-call(f32[768]{0} %p24.25), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.212 = f32[768]{0} reshape(f32[768]{0} %custom-call.78)
  %broadcast.213 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.212), dimensions={1}
  %add.214 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.211, f32[4,768]{1,0} %broadcast.213)
  %transpose.215 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.214), dimensions={1,0}
  %reshape.216 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.215)
  %all-reduce.217 = f32[768,1,4]{2,1,0} all-reduce(f32[768,1,4]{2,1,0} %reshape.216), replica_groups={{0,1}}, to_apply=%all-reduce.217.Reducer.222
  %add.223 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %all-reduce.217, f32[768,1,4]{2,1,0} %add.190)
  %reshape.242 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.223)
  %reshape.284 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
  %reshape.340 = f32[4,384]{1,0} reshape(f32[1,4,6,64]{3,2,1,0} %transpose.329)
  %p33.34 = f32[768,384]{1,0} parameter(33)
  %custom-call.234 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p33.34), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.341 = f32[4,768]{1,0} dot(f32[4,384]{1,0} %reshape.340, f32[768,384]{1,0} %custom-call.234), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p34.35 = f32[768]{0} parameter(34)
  %custom-call.235 = f32[768]{0} custom-call(f32[768]{0} %p34.35), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.342 = f32[768]{0} reshape(f32[768]{0} %custom-call.235)
  %broadcast.343 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.342), dimensions={1}
  %add.344 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.341, f32[4,768]{1,0} %broadcast.343)
  %transpose.345 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.344), dimensions={1,0}
  %reshape.346 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.345)
  %all-reduce.347 = f32[768,1,4]{2,1,0} all-reduce(f32[768,1,4]{2,1,0} %reshape.346), replica_groups={{0,1}}, to_apply=%all-reduce.347.Reducer.352
  %add.353 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %all-reduce.347, f32[768,1,4]{2,1,0} %add.223)
  %reshape.354 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.353)
  %convert.355 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.354)
  %constant.356 = f32[] constant(1)
  %broadcast.357 = f32[4]{0} broadcast(f32[] %constant.356), dimensions={}
  %constant.358 = f32[] constant(0)
  %broadcast.359 = f32[4]{0} broadcast(f32[] %constant.358), dimensions={}
  %batch-norm-training.360 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.355, f32[4]{0} %broadcast.357, f32[4]{0} %broadcast.359), epsilon=1e-05, feature_index=1
  %get-tuple-element.361 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.360), index=0
  %p35.36 = f32[768]{0} parameter(35)
  %custom-call.236 = f32[768]{0} custom-call(f32[768]{0} %p35.36), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.362 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.236), dimensions={0}
  %multiply.363 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.361, f32[768,4]{1,0} %broadcast.362)
  %p36.37 = f32[768]{0} parameter(36)
  %custom-call.237 = f32[768]{0} custom-call(f32[768]{0} %p36.37), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.364 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.237), dimensions={0}
  %add.365 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.363, f32[768,4]{1,0} %broadcast.364)
  %convert.366 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.365)
  %reshape.367 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.366)
  %reshape.368 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.367)
  %p37.38 = f32[768,1536]{1,0} parameter(37)
  %custom-call.238 = f32[768,1536]{1,0} custom-call(f32[768,1536]{1,0} %p37.38), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.369 = f32[4,1536]{1,0} dot(f32[768,4]{1,0} %reshape.368, f32[768,1536]{1,0} %custom-call.238), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p38.39 = f32[1536]{0} parameter(38)
  %custom-call.239 = f32[1536]{0} custom-call(f32[1536]{0} %p38.39), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.370 = f32[1536]{0} reshape(f32[1536]{0} %custom-call.239)
  %broadcast.371 = f32[4,1536]{1,0} broadcast(f32[1536]{0} %reshape.370), dimensions={1}
  %add.372 = f32[4,1536]{1,0} add(f32[4,1536]{1,0} %dot.369, f32[4,1536]{1,0} %broadcast.371)
  %custom-call.373 = f32[4,1536]{1,0} custom-call(f32[4,1536]{1,0} %add.372), custom_call_target="AwsNeuronGeluApprxTanh", api_version=API_VERSION_UNSPECIFIED
  %p39.40 = f32[768,1536]{1,0} parameter(39)
  %custom-call.240 = f32[768,1536]{1,0} custom-call(f32[768,1536]{1,0} %p39.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.374 = f32[4,768]{1,0} dot(f32[4,1536]{1,0} %custom-call.373, f32[768,1536]{1,0} %custom-call.240), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p40.41 = f32[768]{0} parameter(40)
  %custom-call.241 = f32[768]{0} custom-call(f32[768]{0} %p40.41), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.375 = f32[768]{0} reshape(f32[768]{0} %custom-call.241)
  %broadcast.376 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.375), dimensions={1}
  %add.377 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.374, f32[4,768]{1,0} %broadcast.376)
  %transpose.378 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.377), dimensions={1,0}
  %reshape.379 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.378)
  %all-reduce.380 = f32[768,1,4]{2,1,0} all-reduce(f32[768,1,4]{2,1,0} %reshape.379), replica_groups={{0,1}}, to_apply=%all-reduce.380.Reducer.385
  %add.386 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %all-reduce.380, f32[768,1,4]{2,1,0} %add.353)
  %reshape.387 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.386)
  %convert.388 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.387)
  %constant.389 = f32[] constant(1)
  %broadcast.390 = f32[4]{0} broadcast(f32[] %constant.389), dimensions={}
  %constant.391 = f32[] constant(0)
  %broadcast.392 = f32[4]{0} broadcast(f32[] %constant.391), dimensions={}
  %batch-norm-training.393 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.388, f32[4]{0} %broadcast.390, f32[4]{0} %broadcast.392), epsilon=1e-05, feature_index=1
  %get-tuple-element.394 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.393), index=0
  %p41.42 = f32[768]{0} parameter(41)
  %custom-call.45 = f32[768]{0} custom-call(f32[768]{0} %p41.42), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.395 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.45), dimensions={0}
  %multiply.396 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.394, f32[768,4]{1,0} %broadcast.395)
  %p42.43 = f32[768]{0} parameter(42)
  %custom-call.46 = f32[768]{0} custom-call(f32[768]{0} %p42.43), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.397 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.46), dimensions={0}
  %add.398 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.396, f32[768,4]{1,0} %broadcast.397)
  %convert.399 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.398)
  %reshape.400 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.399)
  %reshape.401 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.400)
  %dot.402 = f32[25129,4]{1,0} dot(f32[768,25129]{1,0} %custom-call.47, f32[768,4]{1,0} %reshape.401), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.403 = f32[25129,1,4]{2,1,0} reshape(f32[25129,4]{1,0} %dot.402)
 }
`;

export default text;
