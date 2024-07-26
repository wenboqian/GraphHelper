const text = `
    HloModule Scribable.164, input_output_alias={ {1}: (3, {}, must-alias), {2}: (4, {}, must-alias) }

%scatter.61.AssignFunc.65 (p0.63: f32[], p1.64: f32[]) -> f32[] {
  %p0.63 = f32[] parameter(0)
  ROOT %p1.64 = f32[] parameter(1)
}

%scatter.66.AssignFunc.70 (p0.68: f32[], p1.69: f32[]) -> f32[] {
  %p0.68 = f32[] parameter(0)
  ROOT %p1.69 = f32[] parameter(1)
}

%reduce.88.MaxFunc.93 (p0.90: f32[], p1.91: f32[]) -> f32[] {
  %p0.90 = f32[] parameter(0)
  %p1.91 = f32[] parameter(1)
  ROOT %maximum.92 = f32[] maximum(f32[] %p0.90, f32[] %p1.91)
}

%reduce.98.AddFunc.103 (p0.100: f32[], p1.101: f32[]) -> f32[] {
  %p0.100 = f32[] parameter(0)
  %p1.101 = f32[] parameter(1)
  ROOT %add.102 = f32[] add(f32[] %p0.100, f32[] %p1.101)
}

%all-reduce.112.AddFunc.117 (p0.114: f32[], p1.115: f32[]) -> f32[] {
  %p0.114 = f32[] parameter(0)
  %p1.115 = f32[] parameter(1)
  ROOT %add.116 = f32[] add(f32[] %p0.114, f32[] %p1.115)
}

%all-reduce.133.Reducer.138 (p0.135: f32[], p1.136: f32[]) -> f32[] {
  %p0.135 = f32[] parameter(0)
  %p1.136 = f32[] parameter(1)
  ROOT %add.137 = f32[] add(f32[] %p0.135, f32[] %p1.136)
}

ENTRY %Scribable.164 (p0.1: f32[4096,1,4], p1.2: f32[1,256,256], p2.3: s32[1], p3.4: f32[128,4,8,256], p4.5: f32[128,4,8,256], p5.6: f32[4096], p6.7: f32[4096], p7.8: f32[4096,2048], p8.9: f32[4096,2048], p9.10: f32[4096,2048], p10.11: f32[2048,4096], p11.12: f32[4096,8192], p12.13: f32[8192], p13.14: f32[8192,4096], p14.15: f32[4096], p15.16: f32[4096], p16.17: f32[4096], p17.18: f32[4096,25200], p18.19: f32[25200]) -> (f32[25200,1,4], f32[128,4,8,256], f32[128,4,8,256]) {
  %p17.18 = f32[4096,25200]{1,0} parameter(17)
  %custom-call.142 = f32[4096,25200]{1,0} custom-call(f32[4096,25200]{1,0} %p17.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %p0.1 = f32[4096,1,4]{2,1,0} parameter(0)
  %reshape.36 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %p0.1)
  %convert.37 = f32[4096,4]{1,0} convert(f32[4096,4]{1,0} %reshape.36)
  %constant.38 = f32[] constant(1)
  %broadcast.39 = f32[4]{0} broadcast(f32[] %constant.38), dimensions={}
  %constant.40 = f32[] constant(0)
  %broadcast.41 = f32[4]{0} broadcast(f32[] %constant.40), dimensions={}
  %batch-norm-training.42 = (f32[4096,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[4096,4]{1,0} %convert.37, f32[4]{0} %broadcast.39, f32[4]{0} %broadcast.41), epsilon=1e-05, feature_index=1
  %get-tuple-element.43 = f32[4096,4]{1,0} get-tuple-element((f32[4096,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.42), index=0
  %p5.6 = f32[4096]{0} parameter(5)
  %custom-call.28 = f32[4096]{0} custom-call(f32[4096]{0} %p5.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.44 = f32[4096,4]{1,0} broadcast(f32[4096]{0} %custom-call.28), dimensions={0}
  %multiply.45 = f32[4096,4]{1,0} multiply(f32[4096,4]{1,0} %get-tuple-element.43, f32[4096,4]{1,0} %broadcast.44)
  %p6.7 = f32[4096]{0} parameter(6)
  %custom-call.29 = f32[4096]{0} custom-call(f32[4096]{0} %p6.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.46 = f32[4096,4]{1,0} broadcast(f32[4096]{0} %custom-call.29), dimensions={0}
  %add.47 = f32[4096,4]{1,0} add(f32[4096,4]{1,0} %multiply.45, f32[4096,4]{1,0} %broadcast.46)
  %convert.48 = f32[4096,4]{1,0} convert(f32[4096,4]{1,0} %add.47)
  %reshape.49 = f32[4096,1,4]{2,1,0} reshape(f32[4096,4]{1,0} %convert.48)
  %reshape.123 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %reshape.49)
  %p11.12 = f32[4096,8192]{1,0} parameter(11)
  %custom-call.119 = f32[4096,8192]{1,0} custom-call(f32[4096,8192]{1,0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.124 = f32[4,8192]{1,0} dot(f32[4096,4]{1,0} %reshape.123, f32[4096,8192]{1,0} %custom-call.119), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p12.13 = f32[8192]{0} parameter(12)
  %custom-call.120 = f32[8192]{0} custom-call(f32[8192]{0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.125 = f32[4,8192]{1,0} broadcast(f32[8192]{0} %custom-call.120), dimensions={1}
  %add.126 = f32[4,8192]{1,0} add(f32[4,8192]{1,0} %dot.124, f32[4,8192]{1,0} %broadcast.125)
  %custom-call.127 = f32[4,8192]{1,0} custom-call(f32[4,8192]{1,0} %add.126), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED
  %p13.14 = f32[8192,4096]{1,0} parameter(13)
  %custom-call.121 = f32[8192,4096]{1,0} custom-call(f32[8192,4096]{1,0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.128 = f32[4,4096]{1,0} dot(f32[4,8192]{1,0} %custom-call.127, f32[8192,4096]{1,0} %custom-call.121), lhs_contracting_dims={1}, rhs_contracting_dims={0}
  %p14.15 = f32[4096]{0} parameter(14)
  %custom-call.122 = f32[4096]{0} custom-call(f32[4096]{0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.129 = f32[4,4096]{1,0} broadcast(f32[4096]{0} %custom-call.122), dimensions={1}
  %add.130 = f32[4,4096]{1,0} add(f32[4,4096]{1,0} %dot.128, f32[4,4096]{1,0} %broadcast.129)
  %transpose.131 = f32[4096,4]{1,0} transpose(f32[4,4096]{1,0} %add.130), dimensions={1,0}
  %reshape.132 = f32[4096,1,4]{2,1,0} reshape(f32[4096,4]{1,0} %transpose.131)
  %all-reduce.133 = f32[4096,1,4]{2,1,0} all-reduce(f32[4096,1,4]{2,1,0} %reshape.132), replica_groups={{0,1}}, to_apply=%all-reduce.133.Reducer.138
  %p10.11 = f32[2048,4096]{1,0} parameter(10)
  %custom-call.33 = f32[2048,4096]{1,0} custom-call(f32[2048,4096]{1,0} %p10.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.50 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %reshape.49)
  %p7.8 = f32[4096,2048]{1,0} parameter(7)
  %custom-call.30 = f32[4096,2048]{1,0} custom-call(f32[4096,2048]{1,0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.51 = f32[4,2048]{1,0} dot(f32[4096,4]{1,0} %reshape.50, f32[4096,2048]{1,0} %custom-call.30), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.52 = f32[1,32,256]{2,1,0} reshape(f32[4,2048]{1,0} %dot.51)
  %p1.2 = f32[1,256,256]{2,1,0} parameter(1)
  %dot.53 = f32[1,32,256]{2,1,0} dot(f32[1,32,256]{2,1,0} %reshape.52, f32[1,256,256]{2,1,0} %p1.2), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}
  %reshape.54 = f32[1,4,8,256]{3,2,1,0} reshape(f32[1,32,256]{2,1,0} %dot.53)
  %convert.71 = f32[1,4,8,256]{3,2,1,0} convert(f32[1,4,8,256]{3,2,1,0} %reshape.54)
  %constant.72 = f32[] constant(16)
  %broadcast.73 = f32[1,4,8,256]{3,2,1,0} broadcast(f32[] %constant.72), dimensions={}
  %divide.74 = f32[1,4,8,256]{3,2,1,0} divide(f32[1,4,8,256]{3,2,1,0} %convert.71, f32[1,4,8,256]{3,2,1,0} %broadcast.73)
  %p3.4 = f32[128,4,8,256]{3,2,1,0} parameter(3)
  %custom-call.34 = f32[128,4,8,256]{3,2,1,0} custom-call(f32[128,4,8,256]{3,2,1,0} %p3.4), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %p2.3 = s32[1]{0} parameter(2)
  %p8.9 = f32[4096,2048]{1,0} parameter(8)
  %custom-call.31 = f32[4096,2048]{1,0} custom-call(f32[4096,2048]{1,0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.55 = f32[4,2048]{1,0} dot(f32[4096,4]{1,0} %reshape.50, f32[4096,2048]{1,0} %custom-call.31), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.56 = f32[1,32,256]{2,1,0} reshape(f32[4,2048]{1,0} %dot.55)
  %dot.57 = f32[1,32,256]{2,1,0} dot(f32[1,32,256]{2,1,0} %reshape.56, f32[1,256,256]{2,1,0} %p1.2), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}
  %reshape.58 = f32[1,4,8,256]{3,2,1,0} reshape(f32[1,32,256]{2,1,0} %dot.57)
  %scatter.61 = f32[128,4,8,256]{3,2,1,0} scatter(f32[128,4,8,256]{3,2,1,0} %custom-call.34, s32[1]{0} %p2.3, f32[1,4,8,256]{3,2,1,0} %reshape.58), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.61.AssignFunc.65
  %convert.75 = f32[128,4,8,256]{3,2,1,0} convert(f32[128,4,8,256]{3,2,1,0} %scatter.61)
  %dot.76 = f32[4,8,1,128]{3,2,1,0} dot(f32[1,4,8,256]{3,2,1,0} %divide.74, f32[128,4,8,256]{3,2,1,0} %convert.75), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %iota.21 = s32[1,128]{1,0} iota(), iota_dimension=1
  %broadcast.24 = s32[1,128]{1,0} broadcast(s32[1]{0} %p2.3), dimensions={0}
  %compare.25 = pred[1,128]{1,0} compare(s32[1,128]{1,0} %iota.21, s32[1,128]{1,0} %broadcast.24), direction=LE
  %convert.26 = f32[1,128]{1,0} convert(pred[1,128]{1,0} %compare.25)
  %iota.20 = s32[1,128]{1,0} iota(), iota_dimension=0
  %compare.22 = pred[1,128]{1,0} compare(s32[1,128]{1,0} %iota.20, s32[1,128]{1,0} %iota.21), direction=GE
  %convert.23 = f32[1,128]{1,0} convert(pred[1,128]{1,0} %compare.22)
  %multiply.27 = f32[1,128]{1,0} multiply(f32[1,128]{1,0} %convert.26, f32[1,128]{1,0} %convert.23)
  %broadcast.77 = f32[4,8,1,128]{3,2,1,0} broadcast(f32[1,128]{1,0} %multiply.27), dimensions={2,3}
  %multiply.78 = f32[4,8,1,128]{3,2,1,0} multiply(f32[4,8,1,128]{3,2,1,0} %dot.76, f32[4,8,1,128]{3,2,1,0} %broadcast.77)
  %constant.79 = f32[] constant(1)
  %broadcast.80 = f32[1,128]{1,0} broadcast(f32[] %constant.79), dimensions={}
  %subtract.81 = f32[1,128]{1,0} subtract(f32[1,128]{1,0} %broadcast.80, f32[1,128]{1,0} %multiply.27)
  %constant.82 = f32[] constant(-65536)
  %broadcast.83 = f32[1,128]{1,0} broadcast(f32[] %constant.82), dimensions={}
  %multiply.84 = f32[1,128]{1,0} multiply(f32[1,128]{1,0} %subtract.81, f32[1,128]{1,0} %broadcast.83)
  %broadcast.85 = f32[4,8,1,128]{3,2,1,0} broadcast(f32[1,128]{1,0} %multiply.84), dimensions={2,3}
  %add.86 = f32[4,8,1,128]{3,2,1,0} add(f32[4,8,1,128]{3,2,1,0} %multiply.78, f32[4,8,1,128]{3,2,1,0} %broadcast.85)
  %constant.87 = f32[] constant(-inf)
  %reduce.88 = f32[4,8,1]{2,1,0} reduce(f32[4,8,1,128]{3,2,1,0} %add.86, f32[] %constant.87), dimensions={3}, to_apply=%reduce.88.MaxFunc.93
  %broadcast.94 = f32[4,8,1,128]{3,2,1,0} broadcast(f32[4,8,1]{2,1,0} %reduce.88), dimensions={0,1,2}
  %subtract.95 = f32[4,8,1,128]{3,2,1,0} subtract(f32[4,8,1,128]{3,2,1,0} %add.86, f32[4,8,1,128]{3,2,1,0} %broadcast.94)
  %exponential.96 = f32[4,8,1,128]{3,2,1,0} exponential(f32[4,8,1,128]{3,2,1,0} %subtract.95)
  %constant.97 = f32[] constant(0)
  %reduce.98 = f32[4,8,1]{2,1,0} reduce(f32[4,8,1,128]{3,2,1,0} %exponential.96, f32[] %constant.97), dimensions={3}, to_apply=%reduce.98.AddFunc.103
  %broadcast.104 = f32[4,8,1,128]{3,2,1,0} broadcast(f32[4,8,1]{2,1,0} %reduce.98), dimensions={0,1,2}
  %divide.105 = f32[4,8,1,128]{3,2,1,0} divide(f32[4,8,1,128]{3,2,1,0} %exponential.96, f32[4,8,1,128]{3,2,1,0} %broadcast.104)
  %convert.106 = f32[4,8,1,128]{3,2,1,0} convert(f32[4,8,1,128]{3,2,1,0} %divide.105)
  %p4.5 = f32[128,4,8,256]{3,2,1,0} parameter(4)
  %custom-call.35 = f32[128,4,8,256]{3,2,1,0} custom-call(f32[128,4,8,256]{3,2,1,0} %p4.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %p9.10 = f32[4096,2048]{1,0} parameter(9)
  %custom-call.32 = f32[4096,2048]{1,0} custom-call(f32[4096,2048]{1,0} %p9.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.59 = f32[4,2048]{1,0} dot(f32[4096,4]{1,0} %reshape.50, f32[4096,2048]{1,0} %custom-call.32), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.60 = f32[1,4,8,256]{3,2,1,0} reshape(f32[4,2048]{1,0} %dot.59)
  %scatter.66 = f32[128,4,8,256]{3,2,1,0} scatter(f32[128,4,8,256]{3,2,1,0} %custom-call.35, s32[1]{0} %p2.3, f32[1,4,8,256]{3,2,1,0} %reshape.60), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.66.AssignFunc.70
  %dot.107 = f32[4,8,1,256]{3,2,1,0} dot(f32[4,8,1,128]{3,2,1,0} %convert.106, f32[128,4,8,256]{3,2,1,0} %scatter.66), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %transpose.108 = f32[1,4,8,256]{3,2,1,0} transpose(f32[4,8,1,256]{3,2,1,0} %dot.107), dimensions={2,0,1,3}
  %reshape.109 = f32[4,2048]{1,0} reshape(f32[1,4,8,256]{3,2,1,0} %transpose.108)
  %dot.110 = f32[4096,4]{1,0} dot(f32[2048,4096]{1,0} %custom-call.33, f32[4,2048]{1,0} %reshape.109), lhs_contracting_dims={0}, rhs_contracting_dims={1}
  %reshape.111 = f32[4096,1,4]{2,1,0} reshape(f32[4096,4]{1,0} %dot.110)
  %all-reduce.112 = f32[4096,1,4]{2,1,0} all-reduce(f32[4096,1,4]{2,1,0} %reshape.111), replica_groups={{0,1}}, to_apply=%all-reduce.112.AddFunc.117
  %add.118 = f32[4096,1,4]{2,1,0} add(f32[4096,1,4]{2,1,0} %all-reduce.112, f32[4096,1,4]{2,1,0} %p0.1)
  %add.139 = f32[4096,1,4]{2,1,0} add(f32[4096,1,4]{2,1,0} %all-reduce.133, f32[4096,1,4]{2,1,0} %add.118)
  %reshape.144 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %add.139)
  %convert.145 = f32[4096,4]{1,0} convert(f32[4096,4]{1,0} %reshape.144)
  %constant.146 = f32[] constant(1)
  %broadcast.147 = f32[4]{0} broadcast(f32[] %constant.146), dimensions={}
  %constant.148 = f32[] constant(0)
  %broadcast.149 = f32[4]{0} broadcast(f32[] %constant.148), dimensions={}
  %batch-norm-training.150 = (f32[4096,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[4096,4]{1,0} %convert.145, f32[4]{0} %broadcast.147, f32[4]{0} %broadcast.149), epsilon=1e-05, feature_index=1
  %get-tuple-element.151 = f32[4096,4]{1,0} get-tuple-element((f32[4096,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.150), index=0
  %p15.16 = f32[4096]{0} parameter(15)
  %custom-call.140 = f32[4096]{0} custom-call(f32[4096]{0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.152 = f32[4096,4]{1,0} broadcast(f32[4096]{0} %custom-call.140), dimensions={0}
  %multiply.153 = f32[4096,4]{1,0} multiply(f32[4096,4]{1,0} %get-tuple-element.151, f32[4096,4]{1,0} %broadcast.152)
  %p16.17 = f32[4096]{0} parameter(16)
  %custom-call.141 = f32[4096]{0} custom-call(f32[4096]{0} %p16.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.154 = f32[4096,4]{1,0} broadcast(f32[4096]{0} %custom-call.141), dimensions={0}
  %add.155 = f32[4096,4]{1,0} add(f32[4096,4]{1,0} %multiply.153, f32[4096,4]{1,0} %broadcast.154)
  %convert.156 = f32[4096,4]{1,0} convert(f32[4096,4]{1,0} %add.155)
  %reshape.157 = f32[4096,1,4]{2,1,0} reshape(f32[4096,4]{1,0} %convert.156)
  %reshape.158 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %reshape.157)
  %dot.159 = f32[25200,4]{1,0} dot(f32[4096,25200]{1,0} %custom-call.142, f32[4096,4]{1,0} %reshape.158), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p18.19 = f32[25200]{0} parameter(18)
  %custom-call.143 = f32[25200]{0} custom-call(f32[25200]{0} %p18.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %broadcast.160 = f32[25200,4]{1,0} broadcast(f32[25200]{0} %custom-call.143), dimensions={0}
  %add.161 = f32[25200,4]{1,0} add(f32[25200,4]{1,0} %dot.159, f32[25200,4]{1,0} %broadcast.160)
  %reshape.162 = f32[25200,1,4]{2,1,0} reshape(f32[25200,4]{1,0} %add.161)
  ROOT %tuple.163 = (f32[25200,1,4]{2,1,0}, f32[128,4,8,256]{3,2,1,0}, f32[128,4,8,256]{3,2,1,0}) tuple(f32[25200,1,4]{2,1,0} %reshape.162, f32[128,4,8,256]{3,2,1,0} %scatter.61, f32[128,4,8,256]{3,2,1,0} %scatter.66)
}

`

export default text;
