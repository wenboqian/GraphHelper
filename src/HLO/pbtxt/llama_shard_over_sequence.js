const text = `
    HloModule FullyUnrolled.286, input_output_alias={ {1}: (6, {}, must-alias), {44}: (7, {}, must-alias) }

%reduce.150.Reducer.155 (p0.152: f32[], p1.153: f32[]) -> f32[] {
  %p0.152 = f32[] parameter(0)
  %p1.153 = f32[] parameter(1)
  ROOT %maximum.154 = f32[] maximum(f32[] %p0.152, f32[] %p1.153)
}

%reduce.157.Reducer.162 (p0.159: f32[], p1.160: f32[]) -> f32[] {
  %p0.159 = f32[] parameter(0)
  %p1.160 = f32[] parameter(1)
  ROOT %maximum.161 = f32[] maximum(f32[] %p0.159, f32[] %p1.160)
}

%reduce.173.Reducer.178 (p0.175: f32[], p1.176: f32[]) -> f32[] {
  %p0.175 = f32[] parameter(0)
  %p1.176 = f32[] parameter(1)
  ROOT %add.177 = f32[] add(f32[] %p0.175, f32[] %p1.176)
}

%reduce.180.Reducer.185 (p0.182: f32[], p1.183: f32[]) -> f32[] {
  %p0.182 = f32[] parameter(0)
  %p1.183 = f32[] parameter(1)
  ROOT %add.184 = f32[] add(f32[] %p0.182, f32[] %p1.183)
}

%reduce.194.Reducer.199 (p0.196: f32[], p1.197: f32[]) -> f32[] {
  %p0.196 = f32[] parameter(0)
  %p1.197 = f32[] parameter(1)
  ROOT %maximum.198 = f32[] maximum(f32[] %p0.196, f32[] %p1.197)
}

%reduce.207.Reducer.212 (p0.209: f32[], p1.210: f32[]) -> f32[] {
  %p0.209 = f32[] parameter(0)
  %p1.210 = f32[] parameter(1)
  ROOT %add.211 = f32[] add(f32[] %p0.209, f32[] %p1.210)
}

%reduce-scatter.233.AddFunc.238 (p0.235: f32[], p1.236: f32[]) -> f32[] {
  %p0.235 = f32[] parameter(0)
  %p1.236 = f32[] parameter(1)
  ROOT %add.237 = f32[] add(f32[] %p0.235, f32[] %p1.236)
}

%scatter.241.AssignFunc.245 (p0.243: f32[], p1.244: f32[]) -> f32[] {
  %p0.243 = f32[] parameter(0)
  ROOT %p1.244 = f32[] parameter(1)
}

%scatter.246.AssignFunc.250 (p0.248: f32[], p1.249: f32[]) -> f32[] {
  %p0.248 = f32[] parameter(0)
  ROOT %p1.249 = f32[] parameter(1)
}

%all-reduce.255.Reducer.260 (p0.257: f32[], p1.258: f32[]) -> f32[] {
  %p0.257 = f32[] parameter(0)
  %p1.258 = f32[] parameter(1)
  ROOT %add.259 = f32[] add(f32[] %p0.257, f32[] %p1.258)
}

%all-reduce.273.Reducer.278 (p0.275: f32[], p1.276: f32[]) -> f32[] {
  %p0.275 = f32[] parameter(0)
  %p1.276 = f32[] parameter(1)
  ROOT %add.277 = f32[] add(f32[] %p0.275, f32[] %p1.276)
}

ENTRY %FullyUnrolled.286 (p0.1: f32[4096,1,4], p1.2: s32[1], p2.3: s32[4], p3.4: s32[1], p4.5: s32[1], p5.6: s32[1], p6.7: f32[64,4,1,128], p7.8: f32[64,4,1,128], p8.9: f32[4096], p9.10: f32[4096,384], p10.11: f32[4096,128], p11.12: f32[4096], p12.13: f32[4096,448], p13.14: f32[4096,448], p14.15: f32[4096,448], p15.16: u64[1], p16.18: f32[4096], p17.19: f32[4096,4008]) -> (f32[4008,1,4], f32[64,4,1,128], f32[64,4,1,128], u64[1], u64[1], /*index=5*/f32[4096], f32[4096,4008], f32[1], f32[1,1], f32[64], /*index=10*/f32[1,64], f32[1,64], f32[1,64], f32[1,64], f32[1,64], /*index=15*/f32[1,64], f32[4096,1,4], f32[4096,4], f32[4,384], f32[4,128], /*index=20*/f32[4,128], f32[4,128], f32[1,4,1,128], f32[1,4,1,128], f32[1,4,1,128], /*index=25*/f32[1,4,1,64], f32[1,4,1,64], f32[1,4,1,64], f32[1,4,1,64], f32[1,4,1,128], /*index=30*/f32[1,4,1,128], f32[], f32[1,4,1,128], f32[1,4,1,128], f32[64,4,1,128], /*index=35*/f32[64,4,1,128], f32[1,4,4,128], f32[1,4,4,128], f32[4,4,1,1], f32[], /*index=40*/f32[4,4,1,1], pred[4,4,1,1], f32[4,4,1,1], f32[1,4,1,128], f32[64,4,1,128], /*index=45*/f32[4,4,1,64], f32[4,4,1,64], f32[4,4,1,1], f32[4,4,1,1], f32[4,128], /*index=50*/f32[4,4096], f32[4096,1,4], f32[4096,1,4], f32[4096,1,4], f32[4096,1,4], /*index=55*/f32[4096,1,4], f32[4096,1,4], f32[4096,1,4], f32[4096,1,4], f32[4008,1,4], /*index=60*/f32[4008,1,4], f32[4008,1,4]) {
  %p3.4 = s32[1]{0} parameter(3)
  %p4.5 = s32[1]{0} parameter(4)
  %p5.6 = s32[1]{0} parameter(5)
  %p15.16 = u64[1]{0} parameter(15)
  %custom-call.17 = u64[1]{0} custom-call(u64[1]{0} %p15.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.240 = u64[] reshape(u64[1]{0} %custom-call.17)
  %p17.19 = f32[4096,4008]{1,0} parameter(17)
  %custom-call.21 = f32[4096,4008]{1,0} custom-call(f32[4096,4008]{1,0} %p17.19), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %iota.55 = s32[4,1,64]{2,1,0} iota(), iota_dimension=2
  %p1.2 = s32[1]{0} parameter(1)
  %constant.45 = s32[] constant(3)
  %broadcast.46 = s32[1]{0} broadcast(s32[] %constant.45), dimensions={}
  %add.47 = s32[1]{0} add(s32[1]{0} %p1.2, s32[1]{0} %broadcast.46)
  %convert.37 = s32[1]{0} convert(u64[1]{0} %custom-call.17)
  %constant.38 = s32[] constant(4)
  %broadcast.39 = s32[1]{0} broadcast(s32[] %constant.38), dimensions={}
  %remainder.40 = s32[1]{0} remainder(s32[1]{0} %convert.37, s32[1]{0} %broadcast.39)
  %reshape.48 = s32[] reshape(s32[1]{0} %remainder.40)
  %reshape.49 = s32[] reshape(s32[] %reshape.48)
  %broadcast.50 = s32[1]{0} broadcast(s32[] %reshape.49), dimensions={}
  %subtract.51 = s32[1]{0} subtract(s32[1]{0} %add.47, s32[1]{0} %broadcast.50)
  %constant.52 = s32[] constant(4)
  %broadcast.53 = s32[1]{0} broadcast(s32[] %constant.52), dimensions={}
  %divide.54 = s32[1]{0} divide(s32[1]{0} %subtract.51, s32[1]{0} %broadcast.53)
  %reshape.56 = s32[] reshape(s32[1]{0} %divide.54)
  %broadcast.57 = s32[4,1,64]{2,1,0} broadcast(s32[] %reshape.56), dimensions={}
  %compare.58 = pred[4,1,64]{2,1,0} compare(s32[4,1,64]{2,1,0} %iota.55, s32[4,1,64]{2,1,0} %broadcast.57), direction=LT
  %p2.3 = s32[4]{0} parameter(2)
  %constant.67 = s32[] constant(4)
  %broadcast.68 = s32[4]{0} broadcast(s32[] %constant.67), dimensions={}
  %divide.69 = s32[4]{0} divide(s32[4]{0} %p2.3, s32[4]{0} %broadcast.68)
  %reshape.73 = s32[] reshape(s32[1]{0} %remainder.40)
  %broadcast.74 = s32[4]{0} broadcast(s32[] %reshape.73), dimensions={}
  %constant.70 = s32[] constant(4)
  %broadcast.71 = s32[4]{0} broadcast(s32[] %constant.70), dimensions={}
  %remainder.72 = s32[4]{0} remainder(s32[4]{0} %p2.3, s32[4]{0} %broadcast.71)
  %compare.75 = pred[4]{0} compare(s32[4]{0} %broadcast.74, s32[4]{0} %remainder.72), direction=LT
  %convert.76 = s32[4]{0} convert(pred[4]{0} %compare.75)
  %add.77 = s32[4]{0} add(s32[4]{0} %divide.69, s32[4]{0} %convert.76)
  %reshape.78 = s32[4]{0} reshape(s32[4]{0} %add.77)
  %broadcast.79 = s32[4,1,64]{2,1,0} broadcast(s32[4]{0} %reshape.78), dimensions={0}
  %compare.80 = pred[4,1,64]{2,1,0} compare(s32[4,1,64]{2,1,0} %iota.55, s32[4,1,64]{2,1,0} %broadcast.79), direction=GE
  %and.81 = pred[4,1,64]{2,1,0} and(pred[4,1,64]{2,1,0} %compare.58, pred[4,1,64]{2,1,0} %compare.80)
  %reshape.137 = pred[4,64]{1,0} reshape(pred[4,1,64]{2,1,0} %and.81)
  %broadcast.138 = pred[4,4,1,64]{3,2,1,0} broadcast(pred[4,64]{1,0} %reshape.137), dimensions={0,3}
  %convert.22 = f32[1]{0} convert(s32[1]{0} %p1.2)
  %reshape.23 = f32[1,1]{1,0} reshape(f32[1]{0} %convert.22)
  %constant.24 = f32[64]{0} constant({1, 0.814617217, 0.663601279, 0.540581, 0.440366626, 0.358730227, 0.292227834, 0.238053814, 0.193922758, 0.157972813, 0.128687382, 0.10483095, 0.0853971, 0.0695659518, 0.0566696189, 0.0461640507, 0.0376060307, 0.0306345206, 0.0249554086, 0.0203291047, 0.0165604409, 0.0134904198, 0.0109895291, 0.00895225909, 0.00729266508, 0.00594073068, 0.00483942125, 0.00394227589, 0.00321144611, 0.00261609908, 0.0021311196, 0.00173604675, 0.00141421345, 0.00115204265, 0.000938473851, 0.000764497, 0.000622772437, 0.000507321151, 0.000413272559, 0.000336658937, 0.000274248188, 0.000223407274, 0.000181991432, 0.000148253355, 0.000120769742, 9.83811115e-05, 8.01429487e-05, 6.52858216e-05, 5.31829573e-05, 4.33237547e-05, 3.52922762e-05, 2.8749695e-05, 2.34199979e-05, 1.90783339e-05, 1.55415401e-05, 1.26604064e-05, 1.03133852e-05, 8.40146095e-06, 6.84397537e-06, 5.57522026e-06, 4.54167048e-06, 3.69972304e-06, 3.01385808e-06, 2.4551407e-06})
  %reshape.25 = f32[1,64]{1,0} reshape(f32[64]{0} %constant.24)
  %dot.26 = f32[1,64]{1,0} dot(f32[1,1]{1,0} %reshape.23, f32[1,64]{1,0} %reshape.25), lhs_contracting_dims={1}, rhs_contracting_dims={0}
  %cosine.28 = f32[1,64]{1,0} cosine(f32[1,64]{1,0} %dot.26)
  %reshape.103 = f32[64]{0} reshape(f32[1,64]{1,0} %cosine.28)
  %broadcast.104 = f32[1,4,1,64]{3,2,1,0} broadcast(f32[64]{0} %reshape.103), dimensions={3}
  %p0.1 = f32[4096,1,4]{2,1,0} parameter(0)
  %p8.9 = f32[4096]{0} parameter(8)
  %custom-call.84 = f32[4096]{0} custom-call(f32[4096]{0} %p8.9), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %constant.91 = f32[] constant(1e-05)
  %custom-call.92 = f32[4096,1,4]{2,1,0} custom-call(f32[4096,1,4]{2,1,0} %p0.1, f32[4096]{0} %custom-call.84, f32[] %constant.91), custom_call_target="AwsNeuronRmsNorm", api_version=API_VERSION_UNSPECIFIED, backend_config="0"
  %reshape.93 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %custom-call.92)
  %p9.10 = f32[4096,384]{1,0} parameter(9)
  %custom-call.85 = f32[4096,384]{1,0} custom-call(f32[4096,384]{1,0} %p9.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.94 = f32[4,384]{1,0} dot(f32[4096,4]{1,0} %reshape.93, f32[4096,384]{1,0} %custom-call.85), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %slice.95 = f32[4,128]{1,0} slice(f32[4,384]{1,0} %dot.94), slice={[0:4], [0:128]}
  %reshape.98 = f32[1,4,1,128]{3,2,1,0} reshape(f32[4,128]{1,0} %slice.95)
  %slice.105 = f32[1,4,1,64]{3,2,1,0} slice(f32[1,4,1,128]{3,2,1,0} %reshape.98), slice={[0:1], [0:4], [0:1], [0:64]}
  %multiply.107 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.104, f32[1,4,1,64]{3,2,1,0} %slice.105)
  %sine.27 = f32[1,64]{1,0} sine(f32[1,64]{1,0} %dot.26)
  %reshape.101 = f32[64]{0} reshape(f32[1,64]{1,0} %sine.27)
  %broadcast.102 = f32[1,4,1,64]{3,2,1,0} broadcast(f32[64]{0} %reshape.101), dimensions={3}
  %slice.106 = f32[1,4,1,64]{3,2,1,0} slice(f32[1,4,1,128]{3,2,1,0} %reshape.98), slice={[0:1], [0:4], [0:1], [64:128]}
  %multiply.108 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.102, f32[1,4,1,64]{3,2,1,0} %slice.106)
  %subtract.109 = f32[1,4,1,64]{3,2,1,0} subtract(f32[1,4,1,64]{3,2,1,0} %multiply.107, f32[1,4,1,64]{3,2,1,0} %multiply.108)
  %multiply.110 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.104, f32[1,4,1,64]{3,2,1,0} %slice.106)
  %multiply.111 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.102, f32[1,4,1,64]{3,2,1,0} %slice.105)
  %add.112 = f32[1,4,1,64]{3,2,1,0} add(f32[1,4,1,64]{3,2,1,0} %multiply.110, f32[1,4,1,64]{3,2,1,0} %multiply.111)
  %concatenate.113 = f32[1,4,1,128]{3,2,1,0} concatenate(f32[1,4,1,64]{3,2,1,0} %subtract.109, f32[1,4,1,64]{3,2,1,0} %add.112), dimensions={3}
  %constant.127 = f32[] constant(11.3137083)
  %broadcast.128 = f32[1,4,1,128]{3,2,1,0} broadcast(f32[] %constant.127), dimensions={}
  %divide.129 = f32[1,4,1,128]{3,2,1,0} divide(f32[1,4,1,128]{3,2,1,0} %concatenate.113, f32[1,4,1,128]{3,2,1,0} %broadcast.128)
  %all-gather.130 = f32[1,4,4,128]{3,2,1,0} all-gather(f32[1,4,1,128]{3,2,1,0} %divide.129), replica_groups={{0,1,2,3},{4,5,6,7},{8,9,10,11},{12,13,14,15},{16,17,18,19},{20,21,22,23},{24,25,26,27},{28,29,30,31}}, dimensions={2}
  %p6.7 = f32[64,4,1,128]{3,2,1,0} parameter(6)
  %custom-call.82 = f32[64,4,1,128]{3,2,1,0} custom-call(f32[64,4,1,128]{3,2,1,0} %p6.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.131 = f32[64,4,128]{2,1,0} reshape(f32[64,4,1,128]{3,2,1,0} %custom-call.82)
  %broadcast.132 = f32[64,4,1,4,128]{4,3,2,1,0} broadcast(f32[64,4,128]{2,1,0} %reshape.131), dimensions={0,1,4}
  %reshape.133 = f32[64,4,4,128]{3,2,1,0} reshape(f32[64,4,1,4,128]{4,3,2,1,0} %broadcast.132)
  %dot.134 = f32[4,4,1,64]{3,2,1,0} dot(f32[1,4,4,128]{3,2,1,0} %all-gather.130, f32[64,4,4,128]{3,2,1,0} %reshape.133), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.135 = f32[] constant(-30000)
  %broadcast.136 = f32[4,4,1,64]{3,2,1,0} broadcast(f32[] %constant.135), dimensions={}
  %select.139 = f32[4,4,1,64]{3,2,1,0} select(pred[4,4,1,64]{3,2,1,0} %broadcast.138, f32[4,4,1,64]{3,2,1,0} %dot.134, f32[4,4,1,64]{3,2,1,0} %broadcast.136)
  %constant.149 = f32[] constant(-inf)
  %reduce.150 = f32[4,4,1]{2,1,0} reduce(f32[4,4,1,64]{3,2,1,0} %select.139, f32[] %constant.149), dimensions={3}, to_apply=%reduce.150.Reducer.155
  %iota.59 = s32[1,1]{1,0} iota(), iota_dimension=0
  %iota.60 = s32[1,1]{1,0} iota(), iota_dimension=1
  %compare.61 = pred[1,1]{1,0} compare(s32[1,1]{1,0} %iota.59, s32[1,1]{1,0} %iota.60), direction=GE
  %reshape.62 = pred[] reshape(pred[1,1]{1,0} %compare.61)
  %broadcast.63 = pred[4,1,1]{2,1,0} broadcast(pred[] %reshape.62), dimensions={}
  %constant.34 = s32[] constant(4)
  %broadcast.35 = s32[1]{0} broadcast(s32[] %constant.34), dimensions={}
  %remainder.36 = s32[1]{0} remainder(s32[1]{0} %p1.2, s32[1]{0} %broadcast.35)
  %reshape.41 = s32[] reshape(s32[1]{0} %remainder.40)
  %broadcast.42 = s32[1]{0} broadcast(s32[] %reshape.41), dimensions={}
  %compare.43 = pred[1]{0} compare(s32[1]{0} %remainder.36, s32[1]{0} %broadcast.42), direction=EQ
  %reshape.64 = pred[] reshape(pred[1]{0} %compare.43)
  %broadcast.65 = pred[4,1,1]{2,1,0} broadcast(pred[] %reshape.64), dimensions={}
  %and.66 = pred[4,1,1]{2,1,0} and(pred[4,1,1]{2,1,0} %broadcast.63, pred[4,1,1]{2,1,0} %broadcast.65)
  %reshape.146 = pred[4]{0} reshape(pred[4,1,1]{2,1,0} %and.66)
  %broadcast.147 = pred[4,4,1,1]{3,2,1,0} broadcast(pred[4]{0} %reshape.146), dimensions={0}
  %reshape.116 = f32[64]{0} reshape(f32[1,64]{1,0} %cosine.28)
  %broadcast.117 = f32[1,4,1,64]{3,2,1,0} broadcast(f32[64]{0} %reshape.116), dimensions={3}
  %slice.96 = f32[4,128]{1,0} slice(f32[4,384]{1,0} %dot.94), slice={[0:4], [128:256]}
  %reshape.99 = f32[1,4,1,128]{3,2,1,0} reshape(f32[4,128]{1,0} %slice.96)
  %slice.118 = f32[1,4,1,64]{3,2,1,0} slice(f32[1,4,1,128]{3,2,1,0} %reshape.99), slice={[0:1], [0:4], [0:1], [0:64]}
  %multiply.120 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.117, f32[1,4,1,64]{3,2,1,0} %slice.118)
  %reshape.114 = f32[64]{0} reshape(f32[1,64]{1,0} %sine.27)
  %broadcast.115 = f32[1,4,1,64]{3,2,1,0} broadcast(f32[64]{0} %reshape.114), dimensions={3}
  %slice.119 = f32[1,4,1,64]{3,2,1,0} slice(f32[1,4,1,128]{3,2,1,0} %reshape.99), slice={[0:1], [0:4], [0:1], [64:128]}
  %multiply.121 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.115, f32[1,4,1,64]{3,2,1,0} %slice.119)
  %subtract.122 = f32[1,4,1,64]{3,2,1,0} subtract(f32[1,4,1,64]{3,2,1,0} %multiply.120, f32[1,4,1,64]{3,2,1,0} %multiply.121)
  %multiply.123 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.117, f32[1,4,1,64]{3,2,1,0} %slice.119)
  %multiply.124 = f32[1,4,1,64]{3,2,1,0} multiply(f32[1,4,1,64]{3,2,1,0} %broadcast.115, f32[1,4,1,64]{3,2,1,0} %slice.118)
  %add.125 = f32[1,4,1,64]{3,2,1,0} add(f32[1,4,1,64]{3,2,1,0} %multiply.123, f32[1,4,1,64]{3,2,1,0} %multiply.124)
  %concatenate.126 = f32[1,4,1,128]{3,2,1,0} concatenate(f32[1,4,1,64]{3,2,1,0} %subtract.122, f32[1,4,1,64]{3,2,1,0} %add.125), dimensions={3}
  %reshape.140 = f32[4,128]{1,0} reshape(f32[1,4,1,128]{3,2,1,0} %concatenate.126)
  %broadcast.141 = f32[1,4,1,4,128]{4,3,2,1,0} broadcast(f32[4,128]{1,0} %reshape.140), dimensions={1,4}
  %reshape.142 = f32[1,4,4,128]{3,2,1,0} reshape(f32[1,4,1,4,128]{4,3,2,1,0} %broadcast.141)
  %dot.143 = f32[4,4,1,1]{3,2,1,0} dot(f32[1,4,4,128]{3,2,1,0} %all-gather.130, f32[1,4,4,128]{3,2,1,0} %reshape.142), lhs_batch_dims={1,2}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={3}
  %constant.144 = f32[] constant(-30000)
  %broadcast.145 = f32[4,4,1,1]{3,2,1,0} broadcast(f32[] %constant.144), dimensions={}
  %select.148 = f32[4,4,1,1]{3,2,1,0} select(pred[4,4,1,1]{3,2,1,0} %broadcast.147, f32[4,4,1,1]{3,2,1,0} %dot.143, f32[4,4,1,1]{3,2,1,0} %broadcast.145)
  %constant.156 = f32[] constant(-inf)
  %reduce.157 = f32[4,4,1]{2,1,0} reduce(f32[4,4,1,1]{3,2,1,0} %select.148, f32[] %constant.156), dimensions={3}, to_apply=%reduce.157.Reducer.162
  %maximum.163 = f32[4,4,1]{2,1,0} maximum(f32[4,4,1]{2,1,0} %reduce.150, f32[4,4,1]{2,1,0} %reduce.157)
  %reshape.164 = f32[4,4]{1,0} reshape(f32[4,4,1]{2,1,0} %maximum.163)
  %broadcast.165 = f32[4,4,1,64]{3,2,1,0} broadcast(f32[4,4]{1,0} %reshape.164), dimensions={0,1}
  %subtract.168 = f32[4,4,1,64]{3,2,1,0} subtract(f32[4,4,1,64]{3,2,1,0} %select.139, f32[4,4,1,64]{3,2,1,0} %broadcast.165)
  %exponential.170 = f32[4,4,1,64]{3,2,1,0} exponential(f32[4,4,1,64]{3,2,1,0} %subtract.168)
  %constant.172 = f32[] constant(0)
  %reduce.173 = f32[4,4,1]{2,1,0} reduce(f32[4,4,1,64]{3,2,1,0} %exponential.170, f32[] %constant.172), dimensions={3}, to_apply=%reduce.173.Reducer.178
  %reshape.166 = f32[4,4]{1,0} reshape(f32[4,4,1]{2,1,0} %maximum.163)
  %broadcast.167 = f32[4,4,1,1]{3,2,1,0} broadcast(f32[4,4]{1,0} %reshape.166), dimensions={0,1}
  %subtract.169 = f32[4,4,1,1]{3,2,1,0} subtract(f32[4,4,1,1]{3,2,1,0} %select.148, f32[4,4,1,1]{3,2,1,0} %broadcast.167)
  %exponential.171 = f32[4,4,1,1]{3,2,1,0} exponential(f32[4,4,1,1]{3,2,1,0} %subtract.169)
  %constant.179 = f32[] constant(0)
  %reduce.180 = f32[4,4,1]{2,1,0} reduce(f32[4,4,1,1]{3,2,1,0} %exponential.171, f32[] %constant.179), dimensions={3}, to_apply=%reduce.180.Reducer.185
  %add.186 = f32[4,4,1]{2,1,0} add(f32[4,4,1]{2,1,0} %reduce.173, f32[4,4,1]{2,1,0} %reduce.180)
  %concatenate.187 = f32[4,8,1]{2,1,0} concatenate(f32[4,4,1]{2,1,0} %maximum.163, f32[4,4,1]{2,1,0} %add.186), dimensions={1}
  %all-gather.188 = f32[4,32,1]{2,1,0} all-gather(f32[4,8,1]{2,1,0} %concatenate.187), replica_groups={{0,1,2,3},{4,5,6,7},{8,9,10,11},{12,13,14,15},{16,17,18,19},{20,21,22,23},{24,25,26,27},{28,29,30,31}}, dimensions={1}
  %reshape.189 = f32[4,4,2,4,1]{4,3,2,1,0} reshape(f32[4,32,1]{2,1,0} %all-gather.188)
  %slice.190 = f32[4,4,1,4,1]{4,3,2,1,0} slice(f32[4,4,2,4,1]{4,3,2,1,0} %reshape.189), slice={[0:4], [0:4], [0:1], [0:4], [0:1]}
  %reshape.192 = f32[4,4,4,1]{3,2,1,0} reshape(f32[4,4,1,4,1]{4,3,2,1,0} %slice.190)
  %constant.193 = f32[] constant(-inf)
  %reduce.194 = f32[4,4,1]{2,1,0} reduce(f32[4,4,4,1]{3,2,1,0} %reshape.192, f32[] %constant.193), dimensions={1}, to_apply=%reduce.194.Reducer.199
  %reshape.213 = f32[4,4]{1,0} reshape(f32[4,4,1]{2,1,0} %reduce.194)
  %broadcast.214 = f32[4,4,1,64]{3,2,1,0} broadcast(f32[4,4]{1,0} %reshape.213), dimensions={0,1}
  %subtract.217 = f32[4,4,1,64]{3,2,1,0} subtract(f32[4,4,1,64]{3,2,1,0} %select.139, f32[4,4,1,64]{3,2,1,0} %broadcast.214)
  %exponential.219 = f32[4,4,1,64]{3,2,1,0} exponential(f32[4,4,1,64]{3,2,1,0} %subtract.217)
  %p7.8 = f32[64,4,1,128]{3,2,1,0} parameter(7)
  %custom-call.83 = f32[64,4,1,128]{3,2,1,0} custom-call(f32[64,4,1,128]{3,2,1,0} %p7.8), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %reshape.221 = f32[64,4,128]{2,1,0} reshape(f32[64,4,1,128]{3,2,1,0} %custom-call.83)
  %broadcast.222 = f32[64,4,1,4,128]{4,3,2,1,0} broadcast(f32[64,4,128]{2,1,0} %reshape.221), dimensions={0,1,4}
  %reshape.223 = f32[64,4,4,128]{3,2,1,0} reshape(f32[64,4,1,4,128]{4,3,2,1,0} %broadcast.222)
  %dot.227 = f32[4,4,1,128]{3,2,1,0} dot(f32[4,4,1,64]{3,2,1,0} %exponential.219, f32[64,4,4,128]{3,2,1,0} %reshape.223), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %reshape.215 = f32[4,4]{1,0} reshape(f32[4,4,1]{2,1,0} %reduce.194)
  %broadcast.216 = f32[4,4,1,1]{3,2,1,0} broadcast(f32[4,4]{1,0} %reshape.215), dimensions={0,1}
  %subtract.218 = f32[4,4,1,1]{3,2,1,0} subtract(f32[4,4,1,1]{3,2,1,0} %select.148, f32[4,4,1,1]{3,2,1,0} %broadcast.216)
  %exponential.220 = f32[4,4,1,1]{3,2,1,0} exponential(f32[4,4,1,1]{3,2,1,0} %subtract.218)
  %slice.97 = f32[4,128]{1,0} slice(f32[4,384]{1,0} %dot.94), slice={[0:4], [256:384]}
  %reshape.100 = f32[1,4,1,128]{3,2,1,0} reshape(f32[4,128]{1,0} %slice.97)
  %reshape.224 = f32[4,128]{1,0} reshape(f32[1,4,1,128]{3,2,1,0} %reshape.100)
  %broadcast.225 = f32[1,4,1,4,128]{4,3,2,1,0} broadcast(f32[4,128]{1,0} %reshape.224), dimensions={1,4}
  %reshape.226 = f32[1,4,4,128]{3,2,1,0} reshape(f32[1,4,1,4,128]{4,3,2,1,0} %broadcast.225)
  %dot.228 = f32[4,4,1,128]{3,2,1,0} dot(f32[4,4,1,1]{3,2,1,0} %exponential.220, f32[1,4,4,128]{3,2,1,0} %reshape.226), lhs_batch_dims={0,1}, lhs_contracting_dims={3}, rhs_batch_dims={1,2}, rhs_contracting_dims={0}
  %add.229 = f32[4,4,1,128]{3,2,1,0} add(f32[4,4,1,128]{3,2,1,0} %dot.227, f32[4,4,1,128]{3,2,1,0} %dot.228)
  %slice.191 = f32[4,4,1,4,1]{4,3,2,1,0} slice(f32[4,4,2,4,1]{4,3,2,1,0} %reshape.189), slice={[0:4], [0:4], [1:2], [0:4], [0:1]}
  %reshape.202 = f32[4,4,4,1]{3,2,1,0} reshape(f32[4,4,1,4,1]{4,3,2,1,0} %slice.191)
  %reshape.200 = f32[4,4]{1,0} reshape(f32[4,4,1]{2,1,0} %reduce.194)
  %broadcast.201 = f32[4,4,4,1]{3,2,1,0} broadcast(f32[4,4]{1,0} %reshape.200), dimensions={0,2}
  %subtract.203 = f32[4,4,4,1]{3,2,1,0} subtract(f32[4,4,4,1]{3,2,1,0} %reshape.192, f32[4,4,4,1]{3,2,1,0} %broadcast.201)
  %exponential.204 = f32[4,4,4,1]{3,2,1,0} exponential(f32[4,4,4,1]{3,2,1,0} %subtract.203)
  %multiply.205 = f32[4,4,4,1]{3,2,1,0} multiply(f32[4,4,4,1]{3,2,1,0} %reshape.202, f32[4,4,4,1]{3,2,1,0} %exponential.204)
  %constant.206 = f32[] constant(0)
  %reduce.207 = f32[4,4,1]{2,1,0} reduce(f32[4,4,4,1]{3,2,1,0} %multiply.205, f32[] %constant.206), dimensions={1}, to_apply=%reduce.207.Reducer.212
  %reshape.230 = f32[4,4]{1,0} reshape(f32[4,4,1]{2,1,0} %reduce.207)
  %broadcast.231 = f32[4,4,1,128]{3,2,1,0} broadcast(f32[4,4]{1,0} %reshape.230), dimensions={0,1}
  %divide.232 = f32[4,4,1,128]{3,2,1,0} divide(f32[4,4,1,128]{3,2,1,0} %add.229, f32[4,4,1,128]{3,2,1,0} %broadcast.231)
  %reduce-scatter.233 = f32[4,1,1,128]{3,2,1,0} reduce-scatter(f32[4,4,1,128]{3,2,1,0} %divide.232), replica_groups={{0,1,2,3},{4,5,6,7},{8,9,10,11},{12,13,14,15},{16,17,18,19},{20,21,22,23},{24,25,26,27},{28,29,30,31}}, dimensions={1}, to_apply=%reduce-scatter.233.AddFunc.238
  %transpose.239 = f32[1,4,1,128]{3,2,1,0} transpose(f32[4,1,1,128]{3,2,1,0} %reduce-scatter.233), dimensions={2,0,1,3}
  %reshape.251 = f32[4,128]{1,0} reshape(f32[1,4,1,128]{3,2,1,0} %transpose.239)
  %p10.11 = f32[4096,128]{1,0} parameter(10)
  %custom-call.86 = f32[4096,128]{1,0} custom-call(f32[4096,128]{1,0} %p10.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.252 = f32[4,4096]{1,0} dot(f32[4,128]{1,0} %reshape.251, f32[4096,128]{1,0} %custom-call.86), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %transpose.253 = f32[4096,4]{1,0} transpose(f32[4,4096]{1,0} %dot.252), dimensions={1,0}
  %reshape.254 = f32[4096,1,4]{2,1,0} reshape(f32[4096,4]{1,0} %transpose.253)
  %all-reduce.255 = f32[4096,1,4]{2,1,0} all-reduce(f32[4096,1,4]{2,1,0} %reshape.254), replica_groups={{0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31}}, to_apply=%all-reduce.255.Reducer.260
  %add.261 = f32[4096,1,4]{2,1,0} add(f32[4096,1,4]{2,1,0} %all-reduce.255, f32[4096,1,4]{2,1,0} %p0.1)
  %p11.12 = f32[4096]{0} parameter(11)
  %custom-call.87 = f32[4096]{0} custom-call(f32[4096]{0} %p11.12), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %constant.262 = f32[] constant(1e-05)
  %custom-call.263 = f32[4096,1,4]{2,1,0} custom-call(f32[4096,1,4]{2,1,0} %add.261, f32[4096]{0} %custom-call.87, f32[] %constant.262), custom_call_target="AwsNeuronRmsNorm", api_version=API_VERSION_UNSPECIFIED, backend_config="0"
  %reshape.264 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %custom-call.263)
  %p12.13 = f32[4096,448]{1,0} parameter(12)
  %custom-call.88 = f32[4096,448]{1,0} custom-call(f32[4096,448]{1,0} %p12.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.265 = f32[4,448]{1,0} dot(f32[4096,4]{1,0} %reshape.264, f32[4096,448]{1,0} %custom-call.88), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %logistic.266 = f32[4,448]{1,0} logistic(f32[4,448]{1,0} %dot.265)
  %multiply.267 = f32[4,448]{1,0} multiply(f32[4,448]{1,0} %dot.265, f32[4,448]{1,0} %logistic.266)
  %p13.14 = f32[4096,448]{1,0} parameter(13)
  %custom-call.89 = f32[4096,448]{1,0} custom-call(f32[4096,448]{1,0} %p13.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.268 = f32[4,448]{1,0} dot(f32[4096,4]{1,0} %reshape.264, f32[4096,448]{1,0} %custom-call.89), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %multiply.269 = f32[4,448]{1,0} multiply(f32[4,448]{1,0} %multiply.267, f32[4,448]{1,0} %dot.268)
  %p14.15 = f32[4096,448]{1,0} parameter(14)
  %custom-call.90 = f32[4096,448]{1,0} custom-call(f32[4096,448]{1,0} %p14.15), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %dot.270 = f32[4,4096]{1,0} dot(f32[4,448]{1,0} %multiply.269, f32[4096,448]{1,0} %custom-call.90), lhs_contracting_dims={1}, rhs_contracting_dims={1}
  %transpose.271 = f32[4096,4]{1,0} transpose(f32[4,4096]{1,0} %dot.270), dimensions={1,0}
  %reshape.272 = f32[4096,1,4]{2,1,0} reshape(f32[4096,4]{1,0} %transpose.271)
  %all-reduce.273 = f32[4096,1,4]{2,1,0} all-reduce(f32[4096,1,4]{2,1,0} %reshape.272), replica_groups={{0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31}}, to_apply=%all-reduce.273.Reducer.278
  %add.279 = f32[4096,1,4]{2,1,0} add(f32[4096,1,4]{2,1,0} %all-reduce.273, f32[4096,1,4]{2,1,0} %add.261)
  %p16.18 = f32[4096]{0} parameter(16)
  %custom-call.20 = f32[4096]{0} custom-call(f32[4096]{0} %p16.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED
  %constant.280 = f32[] constant(1e-05)
  %custom-call.281 = f32[4096,1,4]{2,1,0} custom-call(f32[4096,1,4]{2,1,0} %add.279, f32[4096]{0} %custom-call.20, f32[] %constant.280), custom_call_target="AwsNeuronRmsNorm", api_version=API_VERSION_UNSPECIFIED, backend_config="0"
  %reshape.282 = f32[4096,4]{1,0} reshape(f32[4096,1,4]{2,1,0} %custom-call.281)
  %dot.283 = f32[4008,4]{1,0} dot(f32[4096,4008]{1,0} %custom-call.21, f32[4096,4]{1,0} %reshape.282), lhs_contracting_dims={0}, rhs_contracting_dims={0}
  %reshape.284 = f32[4008,1,4]{2,1,0} reshape(f32[4008,4]{1,0} %dot.283)
  %constant.29 = s32[] constant(4)
  %broadcast.30 = s32[1]{0} broadcast(s32[] %constant.29), dimensions={}
  %divide.31 = s32[1]{0} divide(s32[1]{0} %p1.2, s32[1]{0} %broadcast.30)
  %constant.32 = s32[] constant(63)
  %broadcast.33 = s32[1]{0} broadcast(s32[] %constant.32), dimensions={}
  %select.44 = s32[1]{0} select(pred[1]{0} %compare.43, s32[1]{0} %divide.31, s32[1]{0} %broadcast.33)
  %scatter.241 = f32[64,4,1,128]{3,2,1,0} scatter(f32[64,4,1,128]{3,2,1,0} %custom-call.82, s32[1]{0} %select.44, f32[1,4,1,128]{3,2,1,0} %concatenate.126), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.241.AssignFunc.245
  %scatter.246 = f32[64,4,1,128]{3,2,1,0} scatter(f32[64,4,1,128]{3,2,1,0} %custom-call.83, s32[1]{0} %select.44, f32[1,4,1,128]{3,2,1,0} %reshape.100), update_window_dims={1,2,3}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%scatter.246.AssignFunc.250
  ROOT %tuple.285 = (f32[4008,1,4]{2,1,0}, f32[64,4,1,128]{3,2,1,0}, f32[64,4,1,128]{3,2,1,0}, u64[1]{0}, u64[1]{0}, /*index=5*/f32[4096]{0}, f32[4096,4008]{1,0}, f32[1]{0}, f32[1,1]{1,0}, f32[64]{0}, /*index=10*/f32[1,64]{1,0}, f32[1,64]{1,0}, f32[1,64]{1,0}, f32[1,64]{1,0}, f32[1,64]{1,0}, /*index=15*/f32[1,64]{1,0}, f32[4096,1,4]{2,1,0}, f32[4096,4]{1,0}, f32[4,384]{1,0}, f32[4,128]{1,0}, /*index=20*/f32[4,128]{1,0}, f32[4,128]{1,0}, f32[1,4,1,128]{3,2,1,0}, f32[1,4,1,128]{3,2,1,0}, f32[1,4,1,128]{3,2,1,0}, /*index=25*/f32[1,4,1,64]{3,2,1,0}, f32[1,4,1,64]{3,2,1,0}, f32[1,4,1,64]{3,2,1,0}, f32[1,4,1,64]{3,2,1,0}, f32[1,4,1,128]{3,2,1,0}, /*index=30*/f32[1,4,1,128]{3,2,1,0}, f32[], f32[1,4,1,128]{3,2,1,0}, f32[1,4,1,128]{3,2,1,0}, f32[64,4,1,128]{3,2,1,0}, /*index=35*/f32[64,4,1,128]{3,2,1,0}, f32[1,4,4,128]{3,2,1,0}, f32[1,4,4,128]{3,2,1,0}, f32[4,4,1,1]{3,2,1,0}, f32[], /*index=40*/f32[4,4,1,1]{3,2,1,0}, pred[4,4,1,1]{3,2,1,0}, f32[4,4,1,1]{3,2,1,0}, f32[1,4,1,128]{3,2,1,0}, f32[64,4,1,128]{3,2,1,0}, /*index=45*/f32[4,4,1,64]{3,2,1,0}, f32[4,4,1,64]{3,2,1,0}, f32[4,4,1,1]{3,2,1,0}, f32[4,4,1,1]{3,2,1,0}, f32[4,128]{1,0}, /*index=50*/f32[4,4096]{1,0}, f32[4096,1,4]{2,1,0}, f32[4096,1,4]{2,1,0}, f32[4096,1,4]{2,1,0}, f32[4096,1,4]{2,1,0}, /*index=55*/f32[4096,1,4]{2,1,0}, f32[4096,1,4]{2,1,0}, f32[4096,1,4]{2,1,0}, f32[4096,1,4]{2,1,0}, f32[4008,1,4]{2,1,0}, /*index=60*/f32[4008,1,4]{2,1,0}, f32[4008,1,4]{2,1,0}) tuple(f32[4008,1,4]{2,1,0} %reshape.284, f32[64,4,1,128]{3,2,1,0} %scatter.241, f32[64,4,1,128]{3,2,1,0} %scatter.246, u64[1]{0} %custom-call.17, u64[1]{0} %custom-call.17, /*index=5*/f32[4096]{0} %custom-call.20, f32[4096,4008]{1,0} %custom-call.21, f32[1]{0} %convert.22, f32[1,1]{1,0} %reshape.23, f32[64]{0} %constant.24, /*index=10*/f32[1,64]{1,0} %reshape.25, f32[1,64]{1,0} %dot.26, f32[1,64]{1,0} %sine.27, f32[1,64]{1,0} %cosine.28, f32[1,64]{1,0} %sine.27, /*index=15*/f32[1,64]{1,0} %cosine.28, f32[4096,1,4]{2,1,0} %custom-call.92, f32[4096,4]{1,0} %reshape.93, f32[4,384]{1,0} %dot.94, f32[4,128]{1,0} %slice.95, /*index=20*/f32[4,128]{1,0} %slice.96, f32[4,128]{1,0} %slice.97, f32[1,4,1,128]{3,2,1,0} %reshape.99, f32[1,4,1,128]{3,2,1,0} %reshape.100, f32[1,4,1,128]{3,2,1,0} %reshape.98, /*index=25*/f32[1,4,1,64]{3,2,1,0} %broadcast.115, f32[1,4,1,64]{3,2,1,0} %broadcast.117, f32[1,4,1,64]{3,2,1,0} %slice.118, f32[1,4,1,64]{3,2,1,0} %slice.119, f32[1,4,1,128]{3,2,1,0} %concatenate.113, /*index=30*/f32[1,4,1,128]{3,2,1,0} %concatenate.126, f32[] %constant.127, f32[1,4,1,128]{3,2,1,0} %broadcast.128, f32[1,4,1,128]{3,2,1,0} %divide.129, f32[64,4,1,128]{3,2,1,0} %custom-call.82, /*index=35*/f32[64,4,1,128]{3,2,1,0} %custom-call.83, f32[1,4,4,128]{3,2,1,0} %all-gather.130, f32[1,4,4,128]{3,2,1,0} %reshape.142, f32[4,4,1,1]{3,2,1,0} %dot.143, f32[] %constant.144, /*index=40*/f32[4,4,1,1]{3,2,1,0} %broadcast.145, pred[4,4,1,1]{3,2,1,0} %broadcast.147, f32[4,4,1,1]{3,2,1,0} %select.148, f32[1,4,1,128]{3,2,1,0} %transpose.239, f32[64,4,1,128]{3,2,1,0} %scatter.246, /*index=45*/f32[4,4,1,64]{3,2,1,0} %select.139, f32[4,4,1,64]{3,2,1,0} %select.139, f32[4,4,1,1]{3,2,1,0} %select.148, f32[4,4,1,1]{3,2,1,0} %select.148, f32[4,128]{1,0} %reshape.251, /*index=50*/f32[4,4096]{1,0} %dot.252, f32[4096,1,4]{2,1,0} %reshape.254, f32[4096,1,4]{2,1,0} %reshape.254, f32[4096,1,4]{2,1,0} %all-reduce.255, f32[4096,1,4]{2,1,0} %all-reduce.255, /*index=55*/f32[4096,1,4]{2,1,0} %add.261, f32[4096,1,4]{2,1,0} %custom-call.263, f32[4096,1,4]{2,1,0} %all-reduce.273, f32[4096,1,4]{2,1,0} %add.279, f32[4008,1,4]{2,1,0} %reshape.284, /*index=60*/f32[4008,1,4]{2,1,0} %reshape.284, f32[4008,1,4]{2,1,0} %reshape.284)
}


`;

export default text
