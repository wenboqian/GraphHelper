const text = `
    HloModule SyncTensorsGraph.277, input_output_alias={ {0}: (7, {}, must-alias), {1}: (6, {}, must-alias) }

%AddComputation.94 (x.95: f32[], y.96: f32[]) -> f32[] {
  %x.95 = f32[] parameter(0)
  %y.96 = f32[] parameter(1)
  ROOT %add.97 = f32[] add(f32[] %x.95, f32[] %y.96)
}

%AddComputation.108 (x.109: f32[], y.110: f32[]) -> f32[] {
  %x.109 = f32[] parameter(0)
  %y.110 = f32[] parameter(1)
  ROOT %add.111 = f32[] add(f32[] %x.109, f32[] %y.110)
}

%AddComputation.121 (x.122: f32[], y.123: f32[]) -> f32[] {
  %x.122 = f32[] parameter(0)
  %y.123 = f32[] parameter(1)
  ROOT %add.124 = f32[] add(f32[] %x.122, f32[] %y.123)
}

%AddComputation.139 (x.140: f32[], y.141: f32[]) -> f32[] {
  %x.140 = f32[] parameter(0)
  %y.141 = f32[] parameter(1)
  ROOT %add.142 = f32[] add(f32[] %x.140, f32[] %y.141)
}

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.277 (p0.1: f32[], p1.3: f32[], p2.5: f32[], p3.6: f32[], p4.12: f32[], p5.17: f32[], p6.18: f32[4], p7.26: f32[4,4], p8.35: f32[1,4], p9.129: f32[1], p10.166: f32[], p11.183: f32[], p12.189: f32[], p13.203: f32[], p14.204: f32[]) -> (f32[4,4], f32[4], f32[4], f32[4,4], f32[1], /*index=5*/f32[4,4], f32[4,4], f32[4], f32[4]) {
  %p7.26 = f32[4,4]{1,0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p14.204 = f32[] parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %broadcast.205 = f32[4,4]{1,0} broadcast(f32[] %p14.204), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.206 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %p7.26, f32[4,4]{1,0} %broadcast.205), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %p13.203 = f32[] parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %broadcast.207 = f32[4,4]{1,0} broadcast(f32[] %p13.203), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.209 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %multiply.206, f32[4,4]{1,0} %broadcast.207), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.210 = f32[4,4]{1,0} subtract(f32[4,4]{1,0} %p7.26, f32[4,4]{1,0} %multiply.209), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.1 = f32[] constant(0)
  %p12.189 = f32[] parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.0 = f32[] multiply(f32[] %constant.1, f32[] %p12.189), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.2 = f32[4,4]{1,0} broadcast(f32[] %multiply.0), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adamw.py" source_line=121}
  %constant.46 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=65}
  %broadcast.50 = f32[1,4]{1,0} broadcast(f32[] %constant.46), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=65}
  %p8.35 = f32[1,4]{1,0} parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.7 = f32[4]{0} reshape(f32[1,4]{1,0} %p8.35)
  %broadcast.29 = f32[4,4]{1,0} broadcast(f32[4]{0} %reshape.7), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.4 = f32[4,4]{1,0} custom-call(f32[4,4]{1,0} %p7.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.12 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %broadcast.29, f32[4,4]{1,0} %custom-call.4)
  %constant = f32[] constant(0)
  %reduce = f32[4]{0} reduce(f32[4,4]{1,0} %multiply.12, f32[] %constant), dimensions={1}, to_apply=%scalar_add_computation, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p6.18 = f32[4]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.5 = f32[4]{0} custom-call(f32[4]{0} %p6.18), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1 = f32[4]{0} add(f32[4]{0} %reduce, f32[4]{0} %custom-call.5), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.73 = f32[1,4]{1,0} reshape(f32[4]{0} %add.1), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p5.17 = f32[] parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=430}
  %all-gather.43 = (f32[2,4]{1,0}, f32[]) all-gather(f32[1,4]{1,0} %reshape.73, f32[] %p5.17), replica_groups={{0,1}}, dimensions={0}, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %get-tuple-element.53 = f32[] get-tuple-element((f32[2,4]{1,0}, f32[]) %all-gather.43), index=1, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %all-gather.54 = (f32[2,4]{1,0}, f32[]) all-gather(f32[1,4]{1,0} %broadcast.50, f32[] %get-tuple-element.53), replica_groups={{0,1}}, dimensions={0}, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %get-tuple-element.55 = f32[2,4]{1,0} get-tuple-element((f32[2,4]{1,0}, f32[]) %all-gather.54), index=0, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %slice.58 = f32[1,4]{1,0} slice(f32[2,4]{1,0} %get-tuple-element.55), slice={[1:2], [0:4]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/pipeline/comm.py" source_line=90}
  %reshape.80 = f32[4]{0} reshape(f32[1,4]{1,0} %slice.58), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.6 = f32[4]{0} custom-call(f32[4]{0} %reshape.80), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.17 = f32[4]{0} reshape(f32[1,4]{1,0} %slice.58)
  %broadcast.24 = f32[4,4]{0,1} broadcast(f32[4]{0} %reshape.17), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.16 = f32[4]{0} reshape(f32[1,4]{1,0} %p8.35)
  %broadcast.25 = f32[4,4]{0,1} broadcast(f32[4]{0} %reshape.16), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.10 = f32[4,4]{0,1} multiply(f32[4,4]{0,1} %broadcast.24, f32[4,4]{0,1} %broadcast.25), metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.7 = f32[4,4]{1,0} custom-call(f32[4,4]{0,1} %multiply.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %get-tuple-element.93 = f32[] get-tuple-element((f32[2,4]{1,0}, f32[]) %all-gather.54), index=1, metadata={op_type="xla__all_gather" op_name="xla__all_gather" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=586}
  %all-reduce.98 = (f32[4]{0}, f32[4,4]{1,0}, f32[]) all-reduce(f32[4]{0} %custom-call.6, f32[4,4]{1,0} %custom-call.7, f32[] %get-tuple-element.93), replica_groups={{0},{1}}, constrain_layout=true, to_apply=%AddComputation.94, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.100 = f32[4,4]{1,0} get-tuple-element((f32[4]{0}, f32[4,4]{1,0}, f32[]) %all-reduce.98), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %constant.3 = f32[1]{0} constant({1})
  %p9.129 = f32[1]{0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=114}
  %multiply.118 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %get-tuple-element.100, f32[4,4]{1,0} %get-tuple-element.100), metadata={op_type="aten__mul" op_name="aten__norm.1/aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %constant.119 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__norm.1/aten__sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %reduce.125 = f32[] reduce(f32[4,4]{1,0} %multiply.118, f32[] %constant.119), dimensions={0,1}, to_apply=%AddComputation.121, metadata={op_type="aten__sum" op_name="aten__norm.1/aten__sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %sqrt.126 = f32[] sqrt(f32[] %reduce.125), metadata={op_type="aten__sqrt" op_name="aten__norm.1/aten__sqrt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %multiply.128 = f32[] multiply(f32[] %sqrt.126, f32[] %sqrt.126), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/_tensor.py" source_line=40}
  %reshape.19 = f32[1]{0} reshape(f32[] %multiply.128), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=129}
  %add.131 = f32[1]{0} add(f32[1]{0} %p9.129, f32[1]{0} %reshape.19), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=129}
  %get-tuple-element.99 = f32[4]{0} get-tuple-element((f32[4]{0}, f32[4,4]{1,0}, f32[]) %all-reduce.98), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %multiply.105 = f32[4]{0} multiply(f32[4]{0} %get-tuple-element.99, f32[4]{0} %get-tuple-element.99), metadata={op_type="aten__mul" op_name="aten__norm.2/aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %constant.106 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__norm.2/aten__sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %reduce.112 = f32[] reduce(f32[4]{0} %multiply.105, f32[] %constant.106), dimensions={0}, to_apply=%AddComputation.108, metadata={op_type="aten__sum" op_name="aten__norm.2/aten__sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %sqrt.113 = f32[] sqrt(f32[] %reduce.112), metadata={op_type="aten__sqrt" op_name="aten__norm.2/aten__sqrt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/functional.py" source_line=1624}
  %multiply.115 = f32[] multiply(f32[] %sqrt.113, f32[] %sqrt.113), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/_tensor.py" source_line=40}
  %reshape.20 = f32[1]{0} reshape(f32[] %multiply.115), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=129}
  %add.133 = f32[1]{0} add(f32[1]{0} %add.131, f32[1]{0} %reshape.20), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=129}
  %get-tuple-element.138 = f32[] get-tuple-element((f32[4]{0}, f32[4,4]{1,0}, f32[]) %all-reduce.98), index=2, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.143 = (f32[1]{0}, f32[]) all-reduce(f32[1]{0} %add.133, f32[] %get-tuple-element.138), replica_groups={{0,1}}, to_apply=%AddComputation.139, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.144 = f32[1]{0} get-tuple-element((f32[1]{0}, f32[]) %all-reduce.143), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %constant.5 = f32[1]{0} constant({0.5})
  %power.146 = f32[1]{0} power(f32[1]{0} %get-tuple-element.144, f32[1]{0} %constant.5), metadata={op_type="aten__pow" op_name="aten__pow" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=137}
  %p4.12 = f32[] parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=188}
  %reshape.23 = f32[1]{0} reshape(f32[] %p4.12), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=188}
  %add.148 = f32[1]{0} add(f32[1]{0} %power.146, f32[1]{0} %reshape.23), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=188}
  %divide.151 = f32[1]{0} divide(f32[1]{0} %constant.3, f32[1]{0} %add.148), metadata={op_type="aten__reciprocal" op_name="aten__reciprocal" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/_tensor.py" source_line=913}
  %constant.9 = f32[1]{0} constant({1})
  %compare.158 = pred[1]{0} compare(f32[1]{0} %divide.151, f32[1]{0} %constant.9), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=192}
  %constant.12 = f32[1]{0} constant({1})
  %select.160 = f32[1]{0} select(pred[1]{0} %compare.158, f32[1]{0} %divide.151, f32[1]{0} %constant.12), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=191}
  %reshape.162 = f32[] reshape(f32[1]{0} %select.160), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=190}
  %broadcast.164 = f32[4,4]{1,0} broadcast(f32[] %reshape.162), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=190}
  %multiply.165 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %get-tuple-element.100, f32[4,4]{1,0} %broadcast.164), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=190}
  %p11.183 = f32[] parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.187 = f32[4,4]{1,0} broadcast(f32[] %p11.183), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.188 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %multiply.165, f32[4,4]{1,0} %broadcast.187), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.197 = f32[4,4]{1,0} add(f32[4,4]{1,0} %broadcast.2, f32[4,4]{1,0} %multiply.188), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.13 = f32[] constant(0)
  %p10.166 = f32[] parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.3 = f32[] multiply(f32[] %constant.13, f32[] %p10.166), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.7 = f32[4,4]{1,0} broadcast(f32[] %multiply.3), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adamw.py" source_line=125}
  %multiply.174 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %multiply.165, f32[4,4]{1,0} %multiply.165), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %p3.6 = f32[] parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.175 = f32[4,4]{1,0} broadcast(f32[] %p3.6), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.176 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %multiply.174, f32[4,4]{1,0} %broadcast.175), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.177 = f32[4,4]{1,0} add(f32[4,4]{1,0} %broadcast.7, f32[4,4]{1,0} %multiply.176), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.178 = f32[4,4]{1,0} sqrt(f32[4,4]{1,0} %add.177), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %p2.5 = f32[] parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.179 = f32[4,4]{1,0} broadcast(f32[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.180 = f32[4,4]{1,0} divide(f32[4,4]{1,0} %sqrt.178, f32[4,4]{1,0} %broadcast.179), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %p1.3 = f32[] parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.181 = f32[4,4]{1,0} broadcast(f32[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.182 = f32[4,4]{1,0} add(f32[4,4]{1,0} %divide.180, f32[4,4]{1,0} %broadcast.181), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.211 = f32[4,4]{1,0} divide(f32[4,4]{1,0} %add.197, f32[4,4]{1,0} %add.182), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %p0.1 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.212 = f32[4,4]{1,0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.213 = f32[4,4]{1,0} multiply(f32[4,4]{1,0} %divide.211, f32[4,4]{1,0} %broadcast.212), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.214 = f32[4,4]{1,0} add(f32[4,4]{1,0} %subtract.210, f32[4,4]{1,0} %multiply.213), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.266 = f32[4]{0} broadcast(f32[] %p14.204), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.267 = f32[4]{0} multiply(f32[4]{0} %p6.18, f32[4]{0} %broadcast.266), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.16 = f32[] constant(0)
  %broadcast.8 = f32[4]{0} broadcast(f32[] %constant.16), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %multiply.270 = f32[4]{0} multiply(f32[4]{0} %multiply.267, f32[4]{0} %broadcast.8), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %subtract.271 = f32[4]{0} subtract(f32[4]{0} %p6.18, f32[4]{0} %multiply.270), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=58}
  %constant.17 = f32[] constant(0)
  %multiply.7 = f32[] multiply(f32[] %constant.17, f32[] %p12.189), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %broadcast.12 = f32[4]{0} broadcast(f32[] %multiply.7), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adamw.py" source_line=121}
  %constant.19 = f32[1]{0} constant({1})
  %compare.224 = pred[1]{0} compare(f32[1]{0} %divide.151, f32[1]{0} %constant.19), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=192}
  %constant.20 = f32[1]{0} constant({1})
  %select.226 = f32[1]{0} select(pred[1]{0} %compare.224, f32[1]{0} %divide.151, f32[1]{0} %constant.20), metadata={op_type="aten__where" op_name="aten__where" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=191}
  %reshape.228 = f32[] reshape(f32[1]{0} %select.226), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=190}
  %broadcast.229 = f32[4]{0} broadcast(f32[] %reshape.228), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=190}
  %multiply.230 = f32[4]{0} multiply(f32[4]{0} %get-tuple-element.99, f32[4]{0} %broadcast.229), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py" source_line=190}
  %broadcast.250 = f32[4]{0} broadcast(f32[] %p11.183), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %multiply.251 = f32[4]{0} multiply(f32[4]{0} %multiply.230, f32[4]{0} %broadcast.250), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %add.259 = f32[4]{0} add(f32[4]{0} %broadcast.12, f32[4]{0} %multiply.251), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=61}
  %constant.21 = f32[] constant(0)
  %multiply.8 = f32[] multiply(f32[] %constant.21, f32[] %p10.166), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.15 = f32[4]{0} broadcast(f32[] %multiply.8), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch/optim/adamw.py" source_line=125}
  %multiply.238 = f32[4]{0} multiply(f32[4]{0} %multiply.230, f32[4]{0} %multiply.230), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %broadcast.239 = f32[4]{0} broadcast(f32[] %p3.6), dimensions={}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %multiply.240 = f32[4]{0} multiply(f32[4]{0} %multiply.238, f32[4]{0} %broadcast.239), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %add.241 = f32[4]{0} add(f32[4]{0} %broadcast.15, f32[4]{0} %multiply.240), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=62}
  %sqrt.242 = f32[4]{0} sqrt(f32[4]{0} %add.241), metadata={op_type="aten__sqrt" op_name="aten__sqrt" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.243 = f32[4]{0} broadcast(f32[] %p2.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.244 = f32[4]{0} divide(f32[4]{0} %sqrt.242, f32[4]{0} %broadcast.243), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %broadcast.245 = f32[4]{0} broadcast(f32[] %p1.3), dimensions={}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %add.246 = f32[4]{0} add(f32[4]{0} %divide.244, f32[4]{0} %broadcast.245), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=117}
  %divide.272 = f32[4]{0} divide(f32[4]{0} %add.259, f32[4]{0} %add.246), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %broadcast.273 = f32[4]{0} broadcast(f32[] %p0.1), dimensions={}, metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %multiply.274 = f32[4]{0} multiply(f32[4]{0} %divide.272, f32[4]{0} %broadcast.273), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  %add.275 = f32[4]{0} add(f32[4]{0} %subtract.271, f32[4]{0} %multiply.274), metadata={op_type="aten__addcdiv" op_name="aten__addcdiv" source_file="/home/ubuntu/assemble-subgraphs-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py" source_line=119}
  ROOT %tuple.276 = (f32[4,4]{1,0}, f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[1]{0}, /*index=5*/f32[4,4]{1,0}, f32[4,4]{1,0}, f32[4]{0}, f32[4]{0}) tuple(f32[4,4]{1,0} %add.214, f32[4]{0} %add.275, f32[4]{0} %multiply.230, f32[4,4]{1,0} %multiply.165, f32[1]{0} %power.146, /*index=5*/f32[4,4]{1,0} %add.197, f32[4,4]{1,0} %add.177, f32[4]{0} %add.259, f32[4]{0} %add.241), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8"}
}

`

export default text;
