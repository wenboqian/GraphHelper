const text = `
    HloModule SyncTensorsGraph.119, input_output_alias={ {0}: (8, {}, must-alias), {1}: (9, {}, must-alias), {2}: (5, {}, must-alias) }

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.119 (p0.1: f32[], p1.3: f32[], p2.5: f32[], p3.6: f32[], p4.7: f32[], p5.14: f32[4], p6.26: f32[], p7.49: f32[], p8.53: f32[1,4], p9.88: f32[1]) -> (f32[1,4], f32[1], f32[4], f32[1], f32[1], /*index=5*/f32[1], f32[1,4], f32[1,4], f32[1,4], f32[1], /*index=10*/f32[1]) {
  %p8.53 = f32[1,4]{1,0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %p7.49 = f32[] parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=384}
  %broadcast.50 = f32[1,4]{1,0} broadcast(f32[] %p7.49), dimensions={}, metadata={op_type="aten__mul" op_name="aten__lerp.1/aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=384}
  %p5.14 = f32[4]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="run_linear.py" source_line=17}
  %p4.7 = f32[] parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %broadcast.5 = f32[4]{0} broadcast(f32[] %p4.7), dimensions={}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.1 = f32[4]{0} multiply(f32[4]{0} %p5.14, f32[4]{0} %broadcast.5), metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.10 = f32[1,4]{0,1} reshape(f32[4]{0} %multiply.1), metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.4 = f32[1,4]{1,0} custom-call(f32[1,4]{0,1} %reshape.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.51 = f32[1,4]{1,0} multiply(f32[1,4]{1,0} %broadcast.50, f32[1,4]{1,0} %custom-call.4), metadata={op_type="aten__mul" op_name="aten__lerp.1/aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=384}
  %constant.9 = f32[] constant(0)
  %p6.26 = f32[] parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %multiply.6 = f32[] multiply(f32[] %constant.9, f32[] %p6.26), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %broadcast.3 = f32[1,4]{1,0} broadcast(f32[] %multiply.6), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=111}
  %multiply.34 = f32[1,4]{1,0} multiply(f32[1,4]{1,0} %custom-call.4, f32[1,4]{1,0} %custom-call.4), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %p3.6 = f32[] parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %broadcast.35 = f32[1,4]{1,0} broadcast(f32[] %p3.6), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %multiply.36 = f32[1,4]{1,0} multiply(f32[1,4]{1,0} %multiply.34, f32[1,4]{1,0} %broadcast.35), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %add.37 = f32[1,4]{1,0} add(f32[1,4]{1,0} %broadcast.3, f32[1,4]{1,0} %multiply.36), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %sqrt.38 = f32[1,4]{1,0} sqrt(f32[1,4]{1,0} %add.37), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %p2.5 = f32[] parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %broadcast.39 = f32[1,4]{1,0} broadcast(f32[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %divide.40 = f32[1,4]{1,0} divide(f32[1,4]{1,0} %sqrt.38, f32[1,4]{1,0} %broadcast.39), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %p1.3 = f32[] parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %broadcast.41 = f32[1,4]{1,0} broadcast(f32[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %add.42 = f32[1,4]{1,0} add(f32[1,4]{1,0} %divide.40, f32[1,4]{1,0} %broadcast.41), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %divide.54 = f32[1,4]{1,0} divide(f32[1,4]{1,0} %multiply.51, f32[1,4]{1,0} %add.42), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %broadcast.55 = f32[1,4]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %multiply.56 = f32[1,4]{1,0} multiply(f32[1,4]{1,0} %divide.54, f32[1,4]{1,0} %broadcast.55), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %add.57 = f32[1,4]{1,0} add(f32[1,4]{1,0} %p8.53, f32[1,4]{1,0} %multiply.56), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %p9.88 = f32[1]{0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %reshape.18 = f32[1]{0} reshape(f32[] %p7.49), metadata={op_type="aten__mul" op_name="aten__lerp.2/aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=384}
  %reshape.47 = f32[1]{0} reshape(f32[] %p4.7), metadata={op_type="aten__mul" op_name="aten__mul"}
  %custom-call.5 = f32[1]{0} custom-call(f32[1]{0} %reshape.47), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.86 = f32[1]{0} multiply(f32[1]{0} %reshape.18, f32[1]{0} %custom-call.5), metadata={op_type="aten__mul" op_name="aten__lerp.2/aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=384}
  %constant.10 = f32[] constant(0)
  %multiply.5 = f32[] multiply(f32[] %constant.10, f32[] %p6.26), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %reshape.50 = f32[1]{0} reshape(f32[] %multiply.5), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %multiply.72 = f32[1]{0} multiply(f32[1]{0} %custom-call.5, f32[1]{0} %custom-call.5), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %reshape.21 = f32[1]{0} reshape(f32[] %p3.6), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %multiply.74 = f32[1]{0} multiply(f32[1]{0} %multiply.72, f32[1]{0} %reshape.21), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %add.75 = f32[1]{0} add(f32[1]{0} %reshape.50, f32[1]{0} %multiply.74), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=385}
  %sqrt.76 = f32[1]{0} sqrt(f32[1]{0} %add.75), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %reshape.22 = f32[1]{0} reshape(f32[] %p2.5), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %divide.78 = f32[1]{0} divide(f32[1]{0} %sqrt.76, f32[1]{0} %reshape.22), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %reshape.23 = f32[1]{0} reshape(f32[] %p1.3), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %add.80 = f32[1]{0} add(f32[1]{0} %divide.78, f32[1]{0} %reshape.23), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=432}
  %divide.89 = f32[1]{0} divide(f32[1]{0} %multiply.86, f32[1]{0} %add.80), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %reshape.24 = f32[1]{0} reshape(f32[] %p0.1), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %multiply.91 = f32[1]{0} multiply(f32[1]{0} %divide.89, f32[1]{0} %reshape.24), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %add.92 = f32[1]{0} add(f32[1]{0} %p9.88, f32[1]{0} %multiply.91), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adam.py" source_line=434}
  %custom-call.6 = f32[1,4]{1,0} custom-call(f32[1,4]{1,0} %p8.53), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.27 = f32[4]{0} reshape(f32[1,4]{1,0} %custom-call.6)
  %multiply.2 = f32[4]{0} multiply(f32[4]{0} %p5.14, f32[4]{0} %reshape.27)
  %constant = f32[] constant(0)
  %reduce = f32[] reduce(f32[4]{0} %multiply.2, f32[] %constant), dimensions={0}, to_apply=%scalar_add_computation, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.114 = f32[1]{0} reshape(f32[] %reduce), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.7 = f32[1]{0} custom-call(f32[1]{0} %p9.88), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.115 = f32[1]{0} add(f32[1]{0} %reshape.114, f32[1]{0} %custom-call.7), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.33 = f32[1]{0} reshape(f32[] %p4.7), metadata={op_type="aten__mul" op_name="aten__mul" source_file="run_linear.py" source_line=19}
  %multiply.117 = f32[1]{0} multiply(f32[1]{0} %add.115, f32[1]{0} %reshape.33), metadata={op_type="aten__mul" op_name="aten__mul" source_file="run_linear.py" source_line=19}
  ROOT %tuple.118 = (f32[1,4]{1,0}, f32[1]{0}, f32[4]{0}, f32[1]{0}, f32[1]{0}, /*index=5*/f32[1]{0}, f32[1,4]{1,0}, f32[1,4]{1,0}, f32[1,4]{1,0}, f32[1]{0}, /*index=10*/f32[1]{0}) tuple(f32[1,4]{1,0} %add.57, f32[1]{0} %add.92, f32[4]{0} %p5.14, f32[1]{0} %add.115, f32[1]{0} %multiply.117, /*index=5*/f32[1]{0} %custom-call.5, f32[1,4]{1,0} %custom-call.4, f32[1,4]{1,0} %multiply.51, f32[1,4]{1,0} %add.37, f32[1]{0} %multiply.86, /*index=10*/f32[1]{0} %add.75), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10"}
}

`;

export default text
