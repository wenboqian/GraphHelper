const text = `
    HloModule SyncTensorsGraph.55, input_output_alias={ {0}: (0, {}, must-alias), {1}: (1, {}, must-alias), {2}: (2, {}, must-alias) }

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.55 (p0.1: f32[1,4], p1.2: f32[1], p2.3: f32[4], p3.27: f32[]) -> (f32[1,4], f32[1], f32[4], f32[1], f32[1], /*index=5*/f32[1], f32[1,4]) {
  %p0.1 = f32[1,4]{1,0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %p1.2 = f32[1]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %p2.3 = f32[4]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="run_linear.py" source_line=16}
  %custom-call.4 = f32[1,4]{1,0} custom-call(f32[1,4]{1,0} %p0.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.2 = f32[4]{0} reshape(f32[1,4]{1,0} %custom-call.4)
  %multiply = f32[4]{0} multiply(f32[4]{0} %p2.3, f32[4]{0} %reshape.2)
  %constant = f32[] constant(0)
  %reduce = f32[] reduce(f32[4]{0} %multiply, f32[] %constant), dimensions={0}, to_apply=%scalar_add_computation, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.25 = f32[1]{0} reshape(f32[] %reduce), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.5 = f32[1]{0} custom-call(f32[1]{0} %p1.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.26 = f32[1]{0} add(f32[1]{0} %reshape.25, f32[1]{0} %custom-call.5), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p3.27 = f32[] parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="run_linear.py" source_line=18}
  %reshape.7 = f32[1]{0} reshape(f32[] %p3.27), metadata={op_type="aten__mul" op_name="aten__mul" source_file="run_linear.py" source_line=18}
  %multiply.29 = f32[1]{0} multiply(f32[1]{0} %add.26, f32[1]{0} %reshape.7), metadata={op_type="aten__mul" op_name="aten__mul" source_file="run_linear.py" source_line=18}
  %reshape.24 = f32[1]{0} reshape(f32[] %p3.27), metadata={op_type="aten__mul" op_name="aten__mul"}
  %custom-call.6 = f32[1]{0} custom-call(f32[1]{0} %reshape.24), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast = f32[4]{0} broadcast(f32[] %p3.27), dimensions={}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.1 = f32[4]{0} multiply(f32[4]{0} %p2.3, f32[4]{0} %broadcast), metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.14 = f32[1,4]{0,1} reshape(f32[4]{0} %multiply.1), metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.7 = f32[1,4]{1,0} custom-call(f32[1,4]{0,1} %reshape.14), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  ROOT %tuple.54 = (f32[1,4]{1,0}, f32[1]{0}, f32[4]{0}, f32[1]{0}, f32[1]{0}, /*index=5*/f32[1]{0}, f32[1,4]{1,0}) tuple(f32[1,4]{1,0} %p0.1, f32[1]{0} %p1.2, f32[4]{0} %p2.3, f32[1]{0} %add.26, f32[1]{0} %multiply.29, /*index=5*/f32[1]{0} %custom-call.6, f32[1,4]{1,0} %custom-call.7), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6"}
}
`

export default text;
