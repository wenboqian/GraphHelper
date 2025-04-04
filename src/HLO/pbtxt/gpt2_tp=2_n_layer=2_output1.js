const text = `
HloModule FullyUnrolled.212, input_output_alias={ {1}: (5, {}, must-alias), {46}: (6, {}, must-alias) }

ENTRY %FullyUnrolled.212 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: f32[128,4,12,64], p6.7: f32[128,4,12,64], p7.8: f32[768], p8.9: f32[768], p9.10: f32[768,768], p10.11: f32[768], p11.12: f32[768,768], p12.13: f32[768], p13.14: f32[768,768], p14.15: f32[768], p15.16: f32[768,768], p16.17: f32[768], p17.18: f32[768], p18.19: f32[768], p19.20: f32[768,3072], p20.21: f32[3072], p21.22: f32[768,3072], p22.23: f32[768], p23.24: f32[768], p24.25: f32[768], p25.26: f32[768,50257]) -> (f32[50257,1,4], f32[128,4,12,64], f32[128,4,12,64], f32[768,4], f32[4,768], /*index=5*/f32[4,768], f32[4,768], f32[1,4,12,64], f32[1,4,12,64], f32[1,4,12,64], /*index=10*/f32[], f32[1,4,12,64], f32[1,4,12,64], f32[4,12,1,1], f32[], /*index=15*/f32[4,12,1,1], pred[4,12,1,128], f32[4,12,1,1], pred[4,12,1,1], f32[4,12,1,128], /*index=20*/f32[4,12,1,1], f32[], f32[4,12,1], f32[4,12,1], f32[4,12,1], /*index=25*/f32[4,12,1,128], f32[4,12,1,128], f32[4,12,1,128], f32[], f32[4,12,1], /*index=30*/f32[4,12,1,128], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1,1], f32[4,12,1], /*index=35*/f32[4,12,1], f32[4,12,1,1], f32[4,12,1], f32[128,4,12,64], f32[1,4,12,64], /*index=40*/f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], f32[4,12,1,64], /*index=45*/f32[1,4,12,64], f32[128,4,12,64], f32[4,768], f32[4,768], f32[768,1,4], /*index=50*/f32[768,1,4], f32[768,1,4]) {
  %all-reduce.184.Reducer.189 (p0.186: f32[], p1.187: f32[]) -> f32[] {
%all-reduce.217.Reducer.222 (p0.219: f32[], p1.220: f32[]) -> f32[] {
%reduce.288.MaxFunc.293 (p0.290: f32[], p1.291: f32[]) -> f32[] {
%reduce.294.MaxFunc.299 (p0.296: f32[], p1.297: f32[]) -> f32[] {
%reduce.305.AddFunc.310 (p0.307: f32[], p1.308: f32[]) -> f32[] {
%reduce.315.AddFunc.320 (p0.317: f32[], p1.318: f32[]) -> f32[] {
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
  %broadcast.279 = pred[4,6,1,128]{3,2,1,0} broadcast(pred[4,128]{1,0} %reshape.278), dimensions={0,3}
  %reshape.115 = pred[4,128]{1,0} reshape(pred[4,1,128]{2,1,0} %and.57)
  %p0.1 = f32[768,1,4]{2,1,0} parameter(0)
  %reshape.79 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %p0.1)
  %broadcast.59 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.58 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.60 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.59, s32[4,1]{1,0} %broadcast.58), direction=GE
  %reshape.121 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
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
  %convert.243 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %reshape.242)
  %constant.244 = f32[] constant(1)
  %broadcast.245 = f32[4]{0} broadcast(f32[] %constant.244), dimensions={}
  %constant.246 = f32[] constant(0)
  %broadcast.247 = f32[4]{0} broadcast(f32[] %constant.246), dimensions={}
  %batch-norm-training.248 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %convert.243, f32[4]{0} %broadcast.245, f32[4]{0} %broadcast.247), epsilon=1e-05, feature_index=1
  %get-tuple-element.249 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.248), index=0
  %p25.26 = f32[768]{0} parameter(25)
  %custom-call.226 = f32[768]{0} custom-call(f32[768]{0} %p25.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.250 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.226), dimensions={0}
  %multiply.251 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.249, f32[768,4]{1,0} %broadcast.250)
  %p26.27 = f32[768]{0} parameter(26)
  %custom-call.227 = f32[768]{0} custom-call(f32[768]{0} %p26.27), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.252 = f32[768,4]{1,0} broadcast(f32[768]{0} %custom-call.227), dimensions={0}
  %add.253 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.251, f32[768,4]{1,0} %broadcast.252)
  %convert.254 = f32[768,4]{1,0} convert(f32[768,4]{1,0} %add.253)
  %reshape.255 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %convert.254)
  %reshape.256 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.255)
  %p27.28 = f32[768,384]{1,0} parameter(27)
  %custom-call.228 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p27.28), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.257 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.256, f32[768,384]{1,0} %custom-call.228), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p28.29 = f32[384]{0} parameter(28)
  %custom-call.229 = f32[384]{0} custom-call(f32[384]{0} %p28.29), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.258 = f32[384]{0} reshape(f32[384]{0} %custom-call.229)
  %broadcast.259 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.258), dimensions={1}
  %add.260 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.257, f32[4,384]{1,0} %broadcast.259)
  %reshape.269 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.260)
  %constant.272 = f32[] constant(8)
  %broadcast.273 = f32[1,4,6,64]{3,2,1,0} broadcast(f32[] %constant.272), dimensions={}
  %divide.274 = f32[1,4,6,64]{3,2,1,0} divide(f32[1,4,6,64]{3,2,1,0} %reshape.269, f32[1,4,6,64]{3,2,1,0} %broadcast.273)
  %p7.8 = f32[128,4,6,64]{3,2,1,0} parameter(7)
  %custom-call.224 = f32[128,4,6,64]{3,2,1,0} custom-call(f32[128,4,6,64]{3,2,1,0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.275 = f32[4,6,1,128]{3,2,1,0} dot(f32[1,4,6,64]{3,2,1,0} %divide.274, f32[128,4,6,64]{3,2,1,0} %custom-call.224), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.276 = f32[] constant(-30000)
  %broadcast.277 = f32[4,6,1,128]{3,2,1,0} broadcast(f32[] %constant.276), dimensions={}
  %select.280 = f32[4,6,1,128]{3,2,1,0} select(pred[4,6,1,128]{3,2,1,0} %broadcast.279, f32[4,6,1,128]{3,2,1,0} %dot.275, f32[4,6,1,128]{3,2,1,0} %broadcast.277)
  %constant.287 = f32[] constant(-inf)
  %reduce.288 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,128]{3,2,1,0} %select.280, f32[] %constant.287), dimensions={3}, to_apply=%reduce.288.MaxFunc.293
  %reshape.284 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.60)
  %broadcast.285 = pred[4,6,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.284), dimensions={0}
  %p29.30 = f32[768,384]{1,0} parameter(29)
  %custom-call.230 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p29.30), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.261 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.256, f32[768,384]{1,0} %custom-call.230), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p30.31 = f32[384]{0} parameter(30)
  %custom-call.231 = f32[384]{0} custom-call(f32[384]{0} %p30.31), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.262 = f32[384]{0} reshape(f32[384]{0} %custom-call.231)
  %broadcast.263 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.262), dimensions={1}
  %add.264 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.261, f32[4,384]{1,0} %broadcast.263)
  %reshape.270 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.264)
  %dot.281 = f32[4,6,1,1]{3,2,1,0} dot(f32[1,4,6,64]{3,2,1,0} %divide.274, f32[1,4,6,64]{3,2,1,0} %reshape.270), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.282 = f32[] constant(-30000)
  %broadcast.283 = f32[4,6,1,1]{3,2,1,0} broadcast(f32[] %constant.282), dimensions={}
  %select.286 = f32[4,6,1,1]{3,2,1,0} select(pred[4,6,1,1]{3,2,1,0} %broadcast.285, f32[4,6,1,1]{3,2,1,0} %dot.281, f32[4,6,1,1]{3,2,1,0} %broadcast.283)
  %reduce.294 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,1]{3,2,1,0} %select.286, f32[] %constant.287), dimensions={3}, to_apply=%reduce.294.MaxFunc.299
  %maximum.300 = f32[4,6,1]{2,1,0} maximum(f32[4,6,1]{2,1,0} %reduce.288, f32[4,6,1]{2,1,0} %reduce.294)
  %broadcast.301 = f32[4,6,1,128]{3,2,1,0} broadcast(f32[4,6,1]{2,1,0} %maximum.300), dimensions={0,1,2}
  %subtract.302 = f32[4,6,1,128]{3,2,1,0} subtract(f32[4,6,1,128]{3,2,1,0} %select.280, f32[4,6,1,128]{3,2,1,0} %broadcast.301)
  %exponential.303 = f32[4,6,1,128]{3,2,1,0} exponential(f32[4,6,1,128]{3,2,1,0} %subtract.302)
  %convert.311 = f32[4,6,1,128]{3,2,1,0} convert(f32[4,6,1,128]{3,2,1,0} %exponential.303)
  %p8.9 = f32[128,4,6,64]{3,2,1,0} parameter(8)
  %custom-call.225 = f32[128,4,6,64]{3,2,1,0} custom-call(f32[128,4,6,64]{3,2,1,0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.324 = f32[4,6,1,64]{3,2,1,0} dot(f32[4,6,1,128]{3,2,1,0} %convert.311, f32[128,4,6,64]{3,2,1,0} %custom-call.225), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %broadcast.312 = f32[4,6,1,1]{3,2,1,0} broadcast(f32[4,6,1]{2,1,0} %maximum.300), dimensions={0,1,2}
  %subtract.313 = f32[4,6,1,1]{3,2,1,0} subtract(f32[4,6,1,1]{3,2,1,0} %select.286, f32[4,6,1,1]{3,2,1,0} %broadcast.312)
  %exponential.314 = f32[4,6,1,1]{3,2,1,0} exponential(f32[4,6,1,1]{3,2,1,0} %subtract.313)
  %convert.322 = f32[4,6,1,1]{3,2,1,0} convert(f32[4,6,1,1]{3,2,1,0} %exponential.314)
  %p31.32 = f32[768,384]{1,0} parameter(31)
  %custom-call.232 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p31.32), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.265 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.256, f32[768,384]{1,0} %custom-call.232), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p32.33 = f32[384]{0} parameter(32)
  %custom-call.233 = f32[384]{0} custom-call(f32[384]{0} %p32.33), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.266 = f32[384]{0} reshape(f32[384]{0} %custom-call.233)
  %broadcast.267 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.266), dimensions={1}
  %add.268 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.265, f32[4,384]{1,0} %broadcast.267)
  %reshape.271 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.268)
  %dot.325 = f32[4,6,1,64]{3,2,1,0} dot(f32[4,6,1,1]{3,2,1,0} %convert.322, f32[1,4,6,64]{3,2,1,0} %reshape.271), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.326 = f32[4,6,1,64]{3,2,1,0} add(f32[4,6,1,64]{3,2,1,0} %dot.324, f32[4,6,1,64]{3,2,1,0} %dot.325)
  %constant.304 = f32[] constant(0)
  %reduce.305 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,128]{3,2,1,0} %exponential.303, f32[] %constant.304), dimensions={3}, to_apply=%reduce.305.AddFunc.310
  %reduce.315 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,1]{3,2,1,0} %exponential.314, f32[] %constant.304), dimensions={3}, to_apply=%reduce.315.AddFunc.320
  %add.321 = f32[4,6,1]{2,1,0} add(f32[4,6,1]{2,1,0} %reduce.305, f32[4,6,1]{2,1,0} %reduce.315)
  %convert.323 = f32[4,6,1]{2,1,0} convert(f32[4,6,1]{2,1,0} %add.321)
  %broadcast.327 = f32[4,6,1,64]{3,2,1,0} broadcast(f32[4,6,1]{2,1,0} %convert.323), dimensions={0,1,2}
  %divide.328 = f32[4,6,1,64]{3,2,1,0} divide(f32[4,6,1,64]{3,2,1,0} %add.326, f32[4,6,1,64]{3,2,1,0} %broadcast.327)
  %transpose.329 = f32[1,4,6,64]{3,2,1,0} transpose(f32[4,6,1,64]{3,2,1,0} %divide.328), dimensions={2,0,1,3}
 }
`;

export default text;
