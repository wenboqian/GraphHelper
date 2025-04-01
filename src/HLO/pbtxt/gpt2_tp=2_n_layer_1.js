const text = `
    HloModule FullyUnrolled.229, input_output_alias={ {1}: (7, {}, must-alias), {2}: (8, {}, must-alias) }

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

%all-reduce.171.Reducer.176 (p0.173: f32[], p1.174: f32[]) -> f32[] {
  %p0.173 = f32[] parameter(0)
  %p1.174 = f32[] parameter(1)
  ROOT %add.175 = f32[] add(f32[] %p0.173, f32[] %p1.174)
}

%all-reduce.204.Reducer.209 (p0.206: f32[], p1.207: f32[]) -> f32[] {
  %p0.206 = f32[] parameter(0)
  %p1.207 = f32[] parameter(1)
  ROOT %add.208 = f32[] add(f32[] %p0.206, f32[] %p1.207)
}

ENTRY %FullyUnrolled.229 (p0.1: f32[768,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: s32[1], p6.7: s32[1], p7.8: f32[128,4,6,64], p8.9: f32[128,4,6,64], p9.10: f32[768], p10.11: f32[768], p11.12: f32[768,384], p12.13: f32[384], p13.14: f32[768,384], p14.15: f32[384], p15.16: f32[768,384], p16.17: f32[384], p17.18: f32[768,384], p18.19: f32[768], p19.20: f32[768], p20.21: f32[768], p21.22: f32[768,1536], p22.23: f32[1536], p23.24: f32[768,1536], p24.25: f32[768], p25.26: f32[768], p26.27: f32[768], p27.28: f32[768,25129]) -> (f32[25129,1,4], f32[128,4,6,64], f32[128,4,6,64]) {
  %p3.4 = s32[1]{0} parameter(3)
  %p4.5 = s32[1]{0} parameter(4)
  %p5.6 = s32[1]{0} parameter(5)
  %p6.7 = s32[1]{0} parameter(6)
  %p27.28 = f32[768,25129]{1,0} parameter(27)
  %custom-call.31 = f32[768,25129]{1,0} custom-call(f32[768,25129]{1,0} %p27.28), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
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
  %broadcast.100 = pred[4,6,1,128]{3,2,1,0} broadcast(pred[4,128]{1,0} %reshape.99), dimensions={0,3}
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
  %p11.12 = f32[768,384]{1,0} parameter(11)
  %custom-call.49 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.78 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.77, f32[768,384]{1,0} %custom-call.49), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p12.13 = f32[384]{0} parameter(12)
  %custom-call.50 = f32[384]{0} custom-call(f32[384]{0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.79 = f32[384]{0} reshape(f32[384]{0} %custom-call.50)
  %broadcast.80 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.79), dimensions={1}
  %add.81 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.78, f32[4,384]{1,0} %broadcast.80)
  %reshape.90 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.81)
  %constant.93 = f32[] constant(8)
  %broadcast.94 = f32[1,4,6,64]{3,2,1,0} broadcast(f32[] %constant.93), dimensions={}
  %divide.95 = f32[1,4,6,64]{3,2,1,0} divide(f32[1,4,6,64]{3,2,1,0} %reshape.90, f32[1,4,6,64]{3,2,1,0} %broadcast.94)
  %p7.8 = f32[128,4,6,64]{3,2,1,0} parameter(7)
  %custom-call.45 = f32[128,4,6,64]{3,2,1,0} custom-call(f32[128,4,6,64]{3,2,1,0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.96 = f32[4,6,1,128]{3,2,1,0} dot(f32[1,4,6,64]{3,2,1,0} %divide.95, f32[128,4,6,64]{3,2,1,0} %custom-call.45), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.97 = f32[] constant(-30000)
  %broadcast.98 = f32[4,6,1,128]{3,2,1,0} broadcast(f32[] %constant.97), dimensions={}
  %select.101 = f32[4,6,1,128]{3,2,1,0} select(pred[4,6,1,128]{3,2,1,0} %broadcast.100, f32[4,6,1,128]{3,2,1,0} %dot.96, f32[4,6,1,128]{3,2,1,0} %broadcast.98)
  %constant.108 = f32[] constant(-inf)
  %reduce.109 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,128]{3,2,1,0} %select.101, f32[] %constant.108), dimensions={3}, to_apply=%reduce.109.Reducer.114
  %broadcast.43 = s32[4,1]{1,0} broadcast(s32[1]{0} %p1.2), dimensions={1}
  %broadcast.42 = s32[4,1]{1,0} broadcast(s32[4]{0} %p2.3), dimensions={0}
  %compare.44 = pred[4,1]{1,0} compare(s32[4,1]{1,0} %broadcast.43, s32[4,1]{1,0} %broadcast.42), direction=GE
  %reshape.105 = pred[4]{0} reshape(pred[4,1]{1,0} %compare.44)
  %broadcast.106 = pred[4,6,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.105), dimensions={0}
  %p13.14 = f32[768,384]{1,0} parameter(13)
  %custom-call.51 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.82 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.77, f32[768,384]{1,0} %custom-call.51), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p14.15 = f32[384]{0} parameter(14)
  %custom-call.52 = f32[384]{0} custom-call(f32[384]{0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.83 = f32[384]{0} reshape(f32[384]{0} %custom-call.52)
  %broadcast.84 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.83), dimensions={1}
  %add.85 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.82, f32[4,384]{1,0} %broadcast.84)
  %reshape.91 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.85)
  %dot.102 = f32[4,6,1,1]{3,2,1,0} dot(f32[1,4,6,64]{3,2,1,0} %divide.95, f32[1,4,6,64]{3,2,1,0} %reshape.91), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.103 = f32[] constant(-30000)
  %broadcast.104 = f32[4,6,1,1]{3,2,1,0} broadcast(f32[] %constant.103), dimensions={}
  %select.107 = f32[4,6,1,1]{3,2,1,0} select(pred[4,6,1,1]{3,2,1,0} %broadcast.106, f32[4,6,1,1]{3,2,1,0} %dot.102, f32[4,6,1,1]{3,2,1,0} %broadcast.104)
  %constant.115 = f32[] constant(-inf)
  %reduce.116 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,1]{3,2,1,0} %select.107, f32[] %constant.115), dimensions={3}, to_apply=%reduce.116.Reducer.121
  %maximum.122 = f32[4,6,1]{2,1,0} maximum(f32[4,6,1]{2,1,0} %reduce.109, f32[4,6,1]{2,1,0} %reduce.116)
  %reshape.123 = f32[4,6]{1,0} reshape(f32[4,6,1]{2,1,0} %maximum.122)
  %broadcast.124 = f32[4,6,1,128]{3,2,1,0} broadcast(f32[4,6]{1,0} %reshape.123), dimensions={0,1}
  %subtract.125 = f32[4,6,1,128]{3,2,1,0} subtract(f32[4,6,1,128]{3,2,1,0} %select.101, f32[4,6,1,128]{3,2,1,0} %broadcast.124)
  %exponential.126 = f32[4,6,1,128]{3,2,1,0} exponential(f32[4,6,1,128]{3,2,1,0} %subtract.125)
  %p8.9 = f32[128,4,6,64]{3,2,1,0} parameter(8)
  %custom-call.46 = f32[128,4,6,64]{3,2,1,0} custom-call(f32[128,4,6,64]{3,2,1,0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.147 = f32[4,6,1,64]{3,2,1,0} dot(f32[4,6,1,128]{3,2,1,0} %exponential.126, f32[128,4,6,64]{3,2,1,0} %custom-call.46), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %reshape.134 = f32[4,6]{1,0} reshape(f32[4,6,1]{2,1,0} %maximum.122)
  %broadcast.135 = f32[4,6,1,1]{3,2,1,0} broadcast(f32[4,6]{1,0} %reshape.134), dimensions={0,1}
  %subtract.136 = f32[4,6,1,1]{3,2,1,0} subtract(f32[4,6,1,1]{3,2,1,0} %select.107, f32[4,6,1,1]{3,2,1,0} %broadcast.135)
  %exponential.137 = f32[4,6,1,1]{3,2,1,0} exponential(f32[4,6,1,1]{3,2,1,0} %subtract.136)
  %p15.16 = f32[768,384]{1,0} parameter(15)
  %custom-call.53 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.86 = f32[4,384]{1,0} dot(f32[768,4]{1,0} %reshape.77, f32[768,384]{1,0} %custom-call.53), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p16.17 = f32[384]{0} parameter(16)
  %custom-call.54 = f32[384]{0} custom-call(f32[384]{0} %p16.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.87 = f32[384]{0} reshape(f32[384]{0} %custom-call.54)
  %broadcast.88 = f32[4,384]{1,0} broadcast(f32[384]{0} %reshape.87), dimensions={1}
  %add.89 = f32[4,384]{1,0} add(f32[4,384]{1,0} %dot.86, f32[4,384]{1,0} %broadcast.88)
  %reshape.92 = f32[1,4,6,64]{3,2,1,0} reshape(f32[4,384]{1,0} %add.89)
  %dot.148 = f32[4,6,1,64]{3,2,1,0} dot(f32[4,6,1,1]{3,2,1,0} %exponential.137, f32[1,4,6,64]{3,2,1,0} %reshape.92), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.149 = f32[4,6,1,64]{3,2,1,0} add(f32[4,6,1,64]{3,2,1,0} %dot.147, f32[4,6,1,64]{3,2,1,0} %dot.148)
  %constant.127 = f32[] constant(0)
  %reduce.128 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,128]{3,2,1,0} %exponential.126, f32[] %constant.127), dimensions={3}, to_apply=%reduce.128.Reducer.133
  %constant.138 = f32[] constant(0)
  %reduce.139 = f32[4,6,1]{2,1,0} reduce(f32[4,6,1,1]{3,2,1,0} %exponential.137, f32[] %constant.138), dimensions={3}, to_apply=%reduce.139.Reducer.144
  %add.145 = f32[4,6,1]{2,1,0} add(f32[4,6,1]{2,1,0} %reduce.128, f32[4,6,1]{2,1,0} %reduce.139)
  %convert.146 = f32[4,6,1]{2,1,0} convert(f32[4,6,1]{2,1,0} %add.145)
  %reshape.150 = f32[4,6]{1,0} reshape(f32[4,6,1]{2,1,0} %convert.146)
  %broadcast.151 = f32[4,6,1,64]{3,2,1,0} broadcast(f32[4,6]{1,0} %reshape.150), dimensions={0,1}
  %divide.152 = f32[4,6,1,64]{3,2,1,0} divide(f32[4,6,1,64]{3,2,1,0} %add.149, f32[4,6,1,64]{3,2,1,0} %broadcast.151)
  %transpose.153 = f32[1,4,6,64]{3,2,1,0} transpose(f32[4,6,1,64]{3,2,1,0} %divide.152), dimensions={2,0,1,3}
  %reshape.164 = f32[4,384]{1,0} reshape(f32[1,4,6,64]{3,2,1,0} %transpose.153)
  %p17.18 = f32[768,384]{1,0} parameter(17)
  %custom-call.55 = f32[768,384]{1,0} custom-call(f32[768,384]{1,0} %p17.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.165 = f32[4,768]{1,0} dot(f32[4,384]{1,0} %reshape.164, f32[768,384]{1,0} %custom-call.55), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p18.19 = f32[768]{0} parameter(18)
  %custom-call.56 = f32[768]{0} custom-call(f32[768]{0} %p18.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.166 = f32[768]{0} reshape(f32[768]{0} %custom-call.56)
  %broadcast.167 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.166), dimensions={1}
  %add.168 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.165, f32[4,768]{1,0} %broadcast.167)
  %transpose.169 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.168), dimensions={1,0}
  %reshape.170 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.169)
  %all-reduce.171 = f32[768,1,4]{2,1,0} all-reduce(f32[768,1,4]{2,1,0} %reshape.170), replica_groups={{0,1}}, to_apply=%all-reduce.171.Reducer.176
  %add.177 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %all-reduce.171, f32[768,1,4]{2,1,0} %p0.1)
  %reshape.178 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.177)
  %constant.179 = f32[] constant(1)
  %broadcast.180 = f32[4]{0} broadcast(f32[] %constant.179), dimensions={}
  %constant.181 = f32[] constant(0)
  %broadcast.182 = f32[4]{0} broadcast(f32[] %constant.181), dimensions={}
  %batch-norm-training.183 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %reshape.178, f32[4]{0} %broadcast.180, f32[4]{0} %broadcast.182), epsilon=1e-05, feature_index=1
  %get-tuple-element.184 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.183), index=0
  %p19.20 = f32[768]{0} parameter(19)
  %custom-call.57 = f32[768]{0} custom-call(f32[768]{0} %p19.20), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.185 = f32[768]{0} reshape(f32[768]{0} %custom-call.57)
  %broadcast.186 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.185), dimensions={0}
  %multiply.187 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.184, f32[768,4]{1,0} %broadcast.186)
  %p20.21 = f32[768]{0} parameter(20)
  %custom-call.58 = f32[768]{0} custom-call(f32[768]{0} %p20.21), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.188 = f32[768]{0} reshape(f32[768]{0} %custom-call.58)
  %broadcast.189 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.188), dimensions={0}
  %add.190 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.187, f32[768,4]{1,0} %broadcast.189)
  %reshape.191 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %add.190)
  %reshape.192 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.191)
  %p21.22 = f32[768,1536]{1,0} parameter(21)
  %custom-call.59 = f32[768,1536]{1,0} custom-call(f32[768,1536]{1,0} %p21.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.193 = f32[4,1536]{1,0} dot(f32[768,4]{1,0} %reshape.192, f32[768,1536]{1,0} %custom-call.59), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %p22.23 = f32[1536]{0} parameter(22)
  %custom-call.60 = f32[1536]{0} custom-call(f32[1536]{0} %p22.23), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.194 = f32[1536]{0} reshape(f32[1536]{0} %custom-call.60)
  %broadcast.195 = f32[4,1536]{1,0} broadcast(f32[1536]{0} %reshape.194), dimensions={1}
  %add.196 = f32[4,1536]{1,0} add(f32[4,1536]{1,0} %dot.193, f32[4,1536]{1,0} %broadcast.195)
  %custom-call.197 = f32[4,1536]{1,0} custom-call(f32[4,1536]{1,0} %add.196), custom_call_target="AwsNeuronGeluApprxTanh", api_version=API_VERSION_UNSPECIFIED
  %p23.24 = f32[768,1536]{1,0} parameter(23)
  %custom-call.61 = f32[768,1536]{1,0} custom-call(f32[768,1536]{1,0} %p23.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.198 = f32[4,768]{1,0} dot(f32[4,1536]{1,0} %custom-call.197, f32[768,1536]{1,0} %custom-call.61), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %p24.25 = f32[768]{0} parameter(24)
  %custom-call.62 = f32[768]{0} custom-call(f32[768]{0} %p24.25), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.199 = f32[768]{0} reshape(f32[768]{0} %custom-call.62)
  %broadcast.200 = f32[4,768]{1,0} broadcast(f32[768]{0} %reshape.199), dimensions={1}
  %add.201 = f32[4,768]{1,0} add(f32[4,768]{1,0} %dot.198, f32[4,768]{1,0} %broadcast.200)
  %transpose.202 = f32[768,4]{1,0} transpose(f32[4,768]{1,0} %add.201), dimensions={1,0}
  %reshape.203 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %transpose.202)
  %all-reduce.204 = f32[768,1,4]{2,1,0} all-reduce(f32[768,1,4]{2,1,0} %reshape.203), replica_groups={{0,1}}, to_apply=%all-reduce.204.Reducer.209
  %add.210 = f32[768,1,4]{2,1,0} add(f32[768,1,4]{2,1,0} %all-reduce.204, f32[768,1,4]{2,1,0} %add.177)
  %reshape.211 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %add.210)
  %constant.212 = f32[] constant(1)
  %broadcast.213 = f32[4]{0} broadcast(f32[] %constant.212), dimensions={}
  %constant.214 = f32[] constant(0)
  %broadcast.215 = f32[4]{0} broadcast(f32[] %constant.214), dimensions={}
  %batch-norm-training.216 = (f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) batch-norm-training(f32[768,4]{1,0} %reshape.211, f32[4]{0} %broadcast.213, f32[4]{0} %broadcast.215), epsilon=1e-05, feature_index=1
  %get-tuple-element.217 = f32[768,4]{1,0} get-tuple-element((f32[768,4]{1,0}, f32[4]{0}, f32[4]{0}) %batch-norm-training.216), index=0
  %p25.26 = f32[768]{0} parameter(25)
  %custom-call.29 = f32[768]{0} custom-call(f32[768]{0} %p25.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.218 = f32[768]{0} reshape(f32[768]{0} %custom-call.29)
  %broadcast.219 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.218), dimensions={0}
  %multiply.220 = f32[768,4]{1,0} multiply(f32[768,4]{1,0} %get-tuple-element.217, f32[768,4]{1,0} %broadcast.219)
  %p26.27 = f32[768]{0} parameter(26)
  %custom-call.30 = f32[768]{0} custom-call(f32[768]{0} %p26.27), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.221 = f32[768]{0} reshape(f32[768]{0} %custom-call.30)
  %broadcast.222 = f32[768,4]{1,0} broadcast(f32[768]{0} %reshape.221), dimensions={0}
  %add.223 = f32[768,4]{1,0} add(f32[768,4]{1,0} %multiply.220, f32[768,4]{1,0} %broadcast.222)
  %reshape.224 = f32[768,1,4]{2,1,0} reshape(f32[768,4]{1,0} %add.223)
  %reshape.225 = f32[768,4]{1,0} reshape(f32[768,1,4]{2,1,0} %reshape.224)
  %dot.226 = f32[25129,4]{1,0} dot(f32[768,25129]{1,0} %custom-call.31, f32[768,4]{1,0} %reshape.225), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.227 = f32[25129,1,4]{2,1,0} reshape(f32[25129,4]{1,0} %dot.226)
  %scatter.154 = f32[128,4,6,64]{3,2,1,0} scatter(f32[128,4,6,64]{3,2,1,0} %custom-call.45, s32[1]{0} %p1.2, f32[1,4,6,64]{3,2,1,0} %reshape.91), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.154.AssignFunc.158
  %scatter.159 = f32[128,4,6,64]{3,2,1,0} scatter(f32[128,4,6,64]{3,2,1,0} %custom-call.46, s32[1]{0} %p1.2, f32[1,4,6,64]{3,2,1,0} %reshape.92), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.159.AssignFunc.163
  ROOT %tuple.228 = (f32[25129,1,4]{2,1,0}, f32[128,4,6,64]{3,2,1,0}, f32[128,4,6,64]{3,2,1,0}) tuple(f32[25129,1,4]{2,1,0} %reshape.227, f32[128,4,6,64]{3,2,1,0} %scatter.154, f32[128,4,6,64]{3,2,1,0} %scatter.159)
}
`;

export default text;
