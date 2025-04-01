const text = `
    HloModule SyncTensorsGraph.87

%AddComputation.50 (x.51: f32[], y.52: f32[]) -> f32[] {
  %x.51 = f32[] parameter(0)
  %y.52 = f32[] parameter(1)
  ROOT %add.53 = f32[] add(f32[] %x.51, f32[] %y.52)
}

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add.1 = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.87 (p0.1: f32[], p1.2: f32[1], p2.10: f32[1,3], p3.19: f32[], p4.20: s64[]) -> (f32[1,1]) {
  %constant.68 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=65}
  %broadcast.72 = f32[1,3]{1,0} broadcast(f32[] %constant.68), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=65}
  %constant.57 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=65}
  %broadcast.61 = f32[1,3]{1,0} broadcast(f32[] %constant.57), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=65}
  %constant.21 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %p4.20 = s64[] parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %multiply.22 = s64[] multiply(s64[] %constant.21, s64[] %p4.20), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %constant.23 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %add.24 = s64[] add(s64[] %multiply.22, s64[] %constant.23), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %convert.27 = u64[] convert(s64[] %add.24), metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %reshape.29 = u64[1]{0} reshape(u64[] %convert.27), metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %constant.1 = u64[1]{0} constant({0})
  %concatenate.31 = u64[2]{0} concatenate(u64[1]{0} %reshape.29, u64[1]{0} %constant.1), dimensions={0}, metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %rng-bit-generator.32 = (u64[2]{0}, u32[1]{0}) rng-bit-generator(u64[2]{0} %concatenate.31), algorithm=rng_default, metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %get-tuple-element.33 = u32[1]{0} get-tuple-element((u64[2]{0}, u32[1]{0}) %rng-bit-generator.32), index=1, metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %constant.2 = u32[1]{0} constant({9})
  %shift-right-logical.37 = u32[1]{0} shift-right-logical(u32[1]{0} %get-tuple-element.33, u32[1]{0} %constant.2), metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %convert.38 = f32[1]{0} convert(u32[1]{0} %shift-right-logical.37), metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %constant.3 = f32[1]{0} constant({1.1920929e-07})
  %multiply.44 = f32[1]{0} multiply(f32[1]{0} %convert.38, f32[1]{0} %constant.3), metadata={op_type="aten__uniform" op_name="aten__uniform" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/parallel_state.py" source_line=92}
  %p3.19 = f32[] parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.54 = (f32[1]{0}, f32[]) all-reduce(f32[1]{0} %multiply.44, f32[] %p3.19), replica_groups={}, to_apply=%AddComputation.50, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.64 = f32[] get-tuple-element((f32[1]{0}, f32[]) %all-reduce.54), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-gather.65 = (f32[2,3]{1,0}, f32[]) all-gather(f32[1,3]{1,0} %broadcast.61, f32[] %get-tuple-element.64), replica_groups={{0,1}}, dimensions={0}, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %get-tuple-element.75 = f32[] get-tuple-element((f32[2,3]{1,0}, f32[]) %all-gather.65), index=1, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %all-gather.76 = (f32[2,3]{1,0}, f32[]) all-gather(f32[1,3]{1,0} %broadcast.72, f32[] %get-tuple-element.75), replica_groups={{0,1}}, dimensions={0}, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %get-tuple-element.77 = f32[2,3]{1,0} get-tuple-element((f32[2,3]{1,0}, f32[]) %all-gather.76), index=0, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %slice.79 = f32[1,3]{1,0} slice(f32[2,3]{1,0} %get-tuple-element.77), slice={[0:1], [0:3]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=90}
  %p2.10 = f32[1,3]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %custom-call.2 = f32[1,3]{1,0} custom-call(f32[1,3]{1,0} %p2.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1 = f32[1,3]{1,0} multiply(f32[1,3]{1,0} %slice.79, f32[1,3]{1,0} %custom-call.2)
  %constant = f32[] constant(0)
  %reduce = f32[] reduce(f32[1,3]{1,0} %multiply.1, f32[] %constant), dimensions={0,1}, to_apply=%scalar_add_computation, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.13 = f32[1,1]{1,0} reshape(f32[] %reduce), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p1.2 = f32[1]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/module.py" source_line=1158}
  %custom-call.3 = f32[1]{0} custom-call(f32[1]{0} %p1.2), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.14 = f32[1,1]{1,0} reshape(f32[1]{0} %custom-call.3), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.83 = f32[1,1]{1,0} add(f32[1,1]{1,0} %reshape.13, f32[1,1]{1,0} %reshape.14), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="<eval_with_key>.3" source_line=6}
  %reshape.15 = f32[1,1]{1,0} reshape(f32[] %p0.1), metadata={op_type="aten__mul" op_name="aten__mul" source_file="<eval_with_key>.3" source_line=6}
  %multiply.85 = f32[1,1]{1,0} multiply(f32[1,1]{1,0} %add.83, f32[1,1]{1,0} %reshape.15), metadata={op_type="aten__mul" op_name="aten__mul" source_file="<eval_with_key>.3" source_line=6}
  ROOT %tuple.86 = (f32[1,1]{1,0}) tuple(f32[1,1]{1,0} %multiply.85), frontend_attributes={neff_output_names="output0"}
}
`

export default text;
