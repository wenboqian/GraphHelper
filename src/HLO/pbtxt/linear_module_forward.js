const text = `
    HloModule SyncTensorsGraph.31, input_output_alias={ {0}: (0, {}, must-alias), {1}: (1, {}, must-alias), {2}: (2, {}, must-alias) }

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.31 (p0.1: f32[1,4], p1.2: f32[1], p2.3: f32[4], p3.27: f32[]) -> (f32[1,4], f32[1], f32[4], f32[1,4], f32[1], /*index=5*/f32[1]) {
  %p0.1 = f32[1,4]{1,0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %p1.2 = f32[1]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %p2.3 = f32[4]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="run_linear.py" source_line=17}
  %reshape.4 = f32[1,4]{1,0} reshape(f32[4]{0} %p2.3), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.2 = f32[1,4]{1,0} custom-call(f32[1,4]{1,0} %p0.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.2 = f32[4]{0} reshape(f32[1,4]{1,0} %custom-call.2)
  %multiply = f32[4]{0} multiply(f32[4]{0} %p2.3, f32[4]{0} %reshape.2)
  %constant = f32[] constant(0)
  %reduce = f32[] reduce(f32[4]{0} %multiply, f32[] %constant), dimensions={0}, to_apply=%scalar_add_computation, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.25 = f32[1]{0} reshape(f32[] %reduce), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.3 = f32[1]{0} custom-call(f32[1]{0} %p1.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.26 = f32[1]{0} add(f32[1]{0} %reshape.25, f32[1]{0} %custom-call.3), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p3.27 = f32[] parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="run_linear.py" source_line=19}
  %reshape.8 = f32[1]{0} reshape(f32[] %p3.27), metadata={op_type="aten__mul" op_name="aten__mul" source_file="run_linear.py" source_line=19}
  %multiply.29 = f32[1]{0} multiply(f32[1]{0} %add.26, f32[1]{0} %reshape.8), metadata={op_type="aten__mul" op_name="aten__mul" source_file="run_linear.py" source_line=19}
  ROOT %tuple.30 = (f32[1,4]{1,0}, f32[1]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[1]{0}, /*index=5*/f32[1]{0}) tuple(f32[1,4]{1,0} %p0.1, f32[1]{0} %p1.2, f32[4]{0} %p2.3, f32[1,4]{1,0} %reshape.4, f32[1]{0} %add.26, /*index=5*/f32[1]{0} %multiply.29), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5"}
}

`

export default text;
