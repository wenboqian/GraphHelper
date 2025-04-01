const text = `
HloModule FullyUnrolled.212, input_output_alias={ {1}: (5, {}, must-alias), {46}: (6, {}, must-alias) }

ENTRY %FullyUnrolled.212 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: f32[128,4,12,64], p6.7: f32[128,4,12,64], p7.8: f32[768], p8.9: f32[768], p9.10: f32[768,768], p10.11: f32[768], p11.12: f32[768,768], p12.13: f32[768], p13.14: f32[768,768], p14.15: f32[768], p15.16: f32[768,768], p16.17: f32[768], p17.18: f32[768], p18.19: f32[768], p19.20: f32[768,3072], p20.21: f32[3072], p21.22: f32[768,3072], p22.23: f32[768], p23.24: f32[768], p24.25: f32[768], p25.26: f32[768,50257]) -> (f32[50257,1,4], f32[128,4,12,64], f32[128,4,12,64], f32[768,4], f32[4,768], /*index=5*/f32[4,768], f32[4,768], f32[1,4,12,64], f32[1,4,12,64], f32[1,4,12,64], /*index=10*/f32[], f32[1,4,12,64], f32[1,4,12,64], f32[4,12,1,1], f32[], /*index=15*/f32[4,12,1,1], pred[4,12,1,128], f32[4,12,1,1], pred[4,12,1,1], f32[4,12,1,128], /*index=20*/f32[4,12,1,1], f32[], f32[4,12,1], f32[4,12,1], f32[4,12,1], /*index=25*/f32[4,12,1,128], f32[4,12,1,128], f32[4,12,1,128], f32[], f32[4,12,1], /*index=30*/f32[4,12,1,128], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1], /*index=35*/f32[4,12,1], f32[4,12,1,1], f32[4,12,1], f32[128,4,12,64], f32[1,4,12,64], /*index=40*/f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], /*index=45*/f32[1,4,12,64], f32[128,4,12,64], f32[4,768], f32[4,768], f32[768,1,4], /*index=50*/f32[768,1,4], f32[768,1,4]) {
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
  %broadcast.267 = pred[4,12,1,128]{3,2,1,0} broadcast(pred[4,128]{1,0} %reshape.266), dimensions={0,3}
  %reshape.115 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.57)
  %p0.1 = f32[768,1,4]{2,1,0} parameter(0)
  %reshape.79 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %p0.1)
  %broadcast.59 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.58 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.60 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.59, s32[4,1]{1,0} %broadcast.58), direction=GE
  %reshape.121 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
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
  %convert.231 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.230)
  %constant.232 = f32[] constant(1)
  %broadcast.233 = f32[4]{0} broadcast(f32[] %constant.232), dimensions={}
  %constant.234 = f32[] constant(0)
  %broadcast.235 = f32[4]{0} broadcast(f32[] %constant.234), dimensions={}
  %batch-norm-training.236 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.231, f32[4]{0} %broadcast.233, f32[4]{0} %broadcast.235), epsilon=1e-05, feature_index=1
  %get-tuple-element.237 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.236), index=0
  %p25.26 = f32[768]{0} parameter(25)
  %custom-call.214 = f32[768]{0} custom-call(f32[768]{0} %p25.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.238 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.214), dimensions={0}
  %multiply.239 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.237, f32[768,4]{1,0} %broadcast.238)
  %p26.27 = f32[768]{0} parameter(26)
  %custom-call.215 = f32[768]{0} custom-call(f32[768]{0} %p26.27), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.240 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.215), dimensions={0}
  %add.241 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.239, f32[768,4]{1,0} %broadcast.240)
  %convert.242 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.241)
  %reshape.243 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.242)
  %reshape.244 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.243)
  %p27.28 = f32[768,768]{1,0} parameter(27)
  %custom-call.216 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p27.28), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.245 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.244, f32[768,768]{1,0} %custom-call.216), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p28.29 = f32[768]{0} parameter(28)
  %custom-call.217 = f32[768]{0} custom-call(f32[768]{0} %p28.29), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.246 = f32[768]{0} reshape(f32[768]{0} %custom-call.217)
  %broadcast.247 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.246), dimensions={1}
  %add.248 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.245, f32[4,768]{1,0} %broadcast.247)
  %reshape.257 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.248)
  %constant.260 = f32[] constant(8)
  %broadcast.261 = f32[1,4,12,64]{3,2,1,0} broadcast(f32[] %constant.260), dimensions={}
  %divide.262 = f32[1,4,12,64]{3,2,1,0} divide(f32[1,4,12,64]{3,2,1,0} %reshape.257, f32[1,4,12,64]{3,2,1,0} %broadcast.261)
  %p7.8 = f32[128,4,12,64]{3,2,1,0} parameter(7)
  %custom-call.212 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.263 = f32[4,12,1,128]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.262, f32[128,4,12,64]{3,2,1,0} %custom-call.212), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.264 = f32[] constant(-30000)
  %broadcast.265 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[] %constant.264), dimensions={}
  %select.268 = f32[4,12,1,128]{3,2,1,0} select(pred[4,12,1,128]{3,2,1,0} %broadcast.267, f32[4,12,1,128]{3,2,1,0} %dot.263, f32[4,12,1,128]{3,2,1,0} %broadcast.265)
  %constant.275 = f32[] constant(-inf)
  %reduce.276 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %select.268, f32[] %constant.275), dimensions={3}, to_apply=%reduce.276.MaxFunc.281
  %reshape.272 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
  %broadcast.273 = pred[4,12,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.272), dimensions={0}
  %p29.30 = f32[768,768]{1,0} parameter(29)
  %custom-call.218 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p29.30), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.249 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.244, f32[768,768]{1,0} %custom-call.218), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p30.31 = f32[768]{0} parameter(30)
  %custom-call.219 = f32[768]{0} custom-call(f32[768]{0} %p30.31), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.250 = f32[768]{0} reshape(f32[768]{0} %custom-call.219)
  %broadcast.251 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.250), dimensions={1}
  %add.252 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.249, f32[4,768]{1,0} %broadcast.251)
  %reshape.258 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.252)
  %dot.269 = f32[4,12,1,1]{3,2,1,0} dot(f32[1,4,12,64]{3,2,1,0} %divide.262, f32[1,4,12,64]{3,2,1,0} %reshape.258), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.270 = f32[] constant(-30000)
  %broadcast.271 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[] %constant.270), dimensions={}
  %select.274 = f32[4,12,1,1]{3,2,1,0} select(pred[4,12,1,1]{3,2,1,0} %broadcast.273, f32[4,12,1,1]{3,2,1,0} %dot.269, f32[4,12,1,1]{3,2,1,0} %broadcast.271)
  %reduce.282 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %select.274, f32[] %constant.275), dimensions={3}, to_apply=%reduce.282.MaxFunc.287
  %maximum.288 = f32[4,12,1]{2,1,0} maximum(f32[4,12,1]{2,1,0} %reduce.276, f32[4,12,1]{2,1,0} %reduce.282)
  %broadcast.289 = f32[4,12,1,128]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.288), dimensions={0,1,2}
  %subtract.290 = f32[4,12,1,128]{3,2,1,0} subtract(f32[4,12,1,128]{3,2,1,0} %select.268, f32[4,12,1,128]{3,2,1,0} %broadcast.289)
  %exponential.291 = f32[4,12,1,128]{3,2,1,0} exponential(f32[4,12,1,128]{3,2,1,0} %subtract.290)
  %convert.299 = f32[4,12,1,128]{3,2,1,0} convert(f32[4,12,1,128]{3,2,1,0} %exponential.291)
  %p8.9 = f32[128,4,12,64]{3,2,1,0} parameter(8)
  %custom-call.213 = f32[128,4,12,64]{3,2,1,0} custom-call(f32[128,4,12,64]{3,2,1,0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.312 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,128]{3,2,1,0} %convert.299, f32[128,4,12,64]{3,2,1,0} %custom-call.213), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %broadcast.300 = f32[4,12,1,1]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %maximum.288), dimensions={0,1,2}
  %subtract.301 = f32[4,12,1,1]{3,2,1,0} subtract(f32[4,12,1,1]{3,2,1,0} %select.274, f32[4,12,1,1]{3,2,1,0} %broadcast.300)
  %exponential.302 = f32[4,12,1,1]{3,2,1,0} exponential(f32[4,12,1,1]{3,2,1,0} %subtract.301)
  %convert.310 = f32[4,12,1,1]{3,2,1,0} convert(f32[4,12,1,1]{3,2,1,0} %exponential.302)
  %p31.32 = f32[768,768]{1,0} parameter(31)
  %custom-call.220 = f32[768,768]{1,0} custom-call(f32[768,768]{1,0} %p31.32), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.253 = f32[4,768]{1,0} dot(f32[768,4]{1,0} %reshape.244, f32[768,768]{1,0} %custom-call.220), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p32.33 = f32[768]{0} parameter(32)
  %custom-call.221 = f32[768]{0} custom-call(f32[768]{0} %p32.33), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.254 = f32[768]{0} reshape(f32[768]{0} %custom-call.221)
  %broadcast.255 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.254), dimensions={1}
  %add.256 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.253, f32[4,768]{1,0} %broadcast.255)
  %reshape.259 = f32[1,4,12,64]{3,2,1,0} reshape(f32[4,768]{1,0} %add.256)
  %dot.313 = f32[4,12,1,64]{3,2,1,0} dot(f32[4,12,1,1]{3,2,1,0} %convert.310, f32[1,4,12,64]{3,2,1,0} %reshape.259), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.314 = f32[4,12,1,64]{3,2,1,0} add(f32[4,12,1,64]{3,2,1,0} %dot.312, f32[4,12,1,64]{3,2,1,0} %dot.313)
  %constant.292 = f32[] constant(0)
  %reduce.293 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,128]{3,2,1,0} %exponential.291, f32[] %constant.292), dimensions={3}, to_apply=%reduce.293.AddFunc.298
  %reduce.303 = f32[4,12,1]{2,1,0} reduce(f32[4,12,1,1]{3,2,1,0} %exponential.302, f32[] %constant.292), dimensions={3}, to_apply=%reduce.303.AddFunc.308
  %add.309 = f32[4,12,1]{2,1,0} add(f32[4,12,1]{2,1,0} %reduce.293, f32[4,12,1]{2,1,0} %reduce.303)
  %convert.311 = f32[4,12,1]{2,1,0} convert(f32[4,12,1]{2,1,0} %add.309)
  %broadcast.315 = f32[4,12,1,64]{3,2,1,0} broadcast(f32[4,12,1]{2,1,0} %convert.311), dimensions={0,1,2}
  %divide.316 = f32[4,12,1,64]{3,2,1,0} divide(f32[4,12,1,64]{3,2,1,0} %add.314, f32[4,12,1,64]{3,2,1,0} %broadcast.315)
  %transpose.317 = f32[1,4,12,64]{3,2,1,0} transpose(f32[4,12,1,64]{3,2,1,0} %divide.316), dimensions={2,0,1,3}
 }
`;

export default text;
