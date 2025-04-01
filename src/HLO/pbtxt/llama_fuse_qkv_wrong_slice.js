const text = `
ENTRY %FullyUnrolled.180 (p0.1: f32[4096,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: f32[128,4,4,1024], p5.6: f32[128,4,4,1024], p6.7: f32[4096], p7.8: f32[4096,4096], p8.9: f32[4096,4096], p9.10: f32[4096,4096], p10.11: f32[4096,4096], p11.12: f32[4096], p12.13: f32[4096,11008], p13.14: f32[4096,11008], p14.15: f32[4096,11008], p15.16: f32[4096], p16.17: f32[4096,32000]) -> (f32[32000,1,4], f32[128,4,4,1024], f32[128,4,4,1024]) {

  %p0.1 = f32[4096,64,4]{2,1,0} parameter(0)
  %p8.9 = f32[4096]{0} parameter(8)
  %custom-call.57 = f32[4096]{0} custom-call(f32[4096]{0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %constant.64 = f32[] constant(1e-05)
  %custom-call.65 = f32[4096,64,4]{2,1,0} custom-call(f32[4096,64,4]{2,1,0} %p0.1, f32[4096]{0} %custom-call.57, f32[] %constant.64), custom_call_target="AwsNeuronRmsNorm", api_version=API_VERSION_UNSPECIFIED, backend_config="0"
  %reshape.66 = f32[4096,256]{1,0} reshape(f32[4096,64,4]{2,1,0} %custom-call.65)
  %p9.10 = f32[4096,384]{1,0} parameter(9)
  %custom-call.58 = f32[4096,384]{1,0} custom-call(f32[4096,384]{1,0} %p9.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.67 = f32[256,384]{1,0} dot(f32[4096,256]{1,0} %reshape.66, f32[4096,384]{1,0} %custom-call.58), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %slice.68 = f32[256,128]{1,0} slice(f32[256,384]{1,0} %dot.67), slice={[0:256], [0:128]}
  %reshape.71 = f32[64,4,1,128]{3,2,1,0} reshape(f32[256,128]{1,0} %slice.68)
`

export default text;
