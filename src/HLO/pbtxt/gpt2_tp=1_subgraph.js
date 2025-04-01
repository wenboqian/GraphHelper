const text = `
ENTRY %FullyUnrolled {
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
}
`;

export default text;
