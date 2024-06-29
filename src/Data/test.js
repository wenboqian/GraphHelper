import pb2X6 from "./pb2X6.js";

const input = `
    Tensor report begins, epoch: 0
Tensor: id=1, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=73
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %12 = f32[4,4]{0,1} aten::permute(%11) tensor_ids = [1], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %13 = f32[4,4]{1,0} aten::permute(%12) tensor_ids = [1], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %15 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%14) tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %16 = f32[4,4]{0,1} aten::permute(%15) tensor_ids = [1], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %17 = f32[4,4]{1,0} aten::permute(%16) tensor_ids = [1], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %18 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%14) tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %19 = f32[4,4]{0,1} aten::permute(%18) tensor_ids = [1], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %20 = f32[4,4]{1,0} aten::permute(%19) tensor_ids = [1], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %21 = f32[] xla::device_data() tensor_ids = [1], xla_shape=f32[], device=NEURON:0
  %22 = f32[] xla::device_data() tensor_ids = [1], xla_shape=f32[], device=NEURON:0
  %23 = f32[] prim::Constant() tensor_ids = [1], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %24 = f32[] aten::expand(%23) tensor_ids = [1], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %25 = f32[] aten::mul(%24, %22) tensor_ids = [1], xla_shape=f32[]
  %26 = f32[4]{0} aten::expand(%25) tensor_ids = [1], xla_shape=f32[4]{0}, size=(4)
  %27 = f32[4]{0} aten::div(%26, %21) tensor_ids = [1], xla_shape=f32[4]{0}
  %28 = f32[1,4]{1,0} aten::as_strided(%27) tensor_ids = [1], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %29 = f32[1,4]{1,0} aten::mm(%28, %20) tensor_ids = [1], xla_shape=f32[1,4]{1,0}
  %30 = f32[4]{0} aten::as_strided(%29) tensor_ids = [1], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::as_strided(%30) tensor_ids = [1], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %32 = f32[1,4]{1,0} aten::mm(%31, %17) tensor_ids = [1], xla_shape=f32[1,4]{1,0}
  %33 = f32[4]{0} aten::as_strided(%32) tensor_ids = [1], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %34 = f32[1,4]{1,0} aten::as_strided(%33) tensor_ids = [1], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %35 = f32[1,4]{1,0} aten::mm(%34, %13) tensor_ids = [1], xla_shape=f32[1,4]{1,0}
  %36 = f32[4]{0} aten::as_strided(%35) tensor_ids = [1], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %37 = f32[1,4]{1,0} aten::as_strided(%36) tensor_ids = [1], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %38 = f32[1,4]{1,0} aten::mm(%37, %9) tensor_ids = [1], xla_shape=f32[1,4]{1,0}
  %39 = f32[4]{0} aten::as_strided(%38) tensor_ids = [1], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %40 = f32[1,4]{1,0} aten::as_strided(%39) tensor_ids = [1], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %41 = f32[4]{0} xla::device_data() tensor_ids = [1], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %42 = f32[1,4]{1,0} aten::as_strided(%41) tensor_ids = [1], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %43 = f32[4,1]{0,1} aten::permute(%42) tensor_ids = [1], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %44 = f32[4,4]{1,0} aten::mm(%43, %40) tensor_ids = [1], xla_shape=f32[4,4]{1,0}
  %45 = f32[4,4]{0,1} aten::permute(%44) tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %46 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%45) tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %47 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %48 = f32[] prim::Constant() tensor_ids = [1], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %49 = f32[4,4]{1,0} aten::expand(%48) tensor_ids = [1], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %50 = f32[4,4]{1,0} aten::mul(%49, %47) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %51 = f32[4,4]{1,0} aten::addcmul(%50, %46, %46, %5) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %52 = f32[4,4]{1,0} aten::sqrt(%51) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %53 = f32[4,4]{1,0} aten::div(%52, %4) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %54 = f32[4,4]{1,0} aten::add(%53, %3) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %55 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %56 = f32[4,4]{1,0} aten::expand(%55) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %57 = f32[4,4]{1,0} aten::mul(%46, %56) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %58 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %59 = f32[] prim::Constant() tensor_ids = [1], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %60 = f32[4,4]{1,0} aten::expand(%59) tensor_ids = [1], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %61 = f32[4,4]{1,0} aten::mul(%60, %58) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %62 = f32[4,4]{1,0} aten::add(%61, %57) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %63 = f32[] prim::Constant() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %64 = f32[4,4]{1,0} aten::expand(%63) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %65 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %66 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %67 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %68 = f32[4,4]{1,0} aten::mul(%67, %66) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %69 = f32[4,4]{1,0} aten::mul(%68, %65) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %70 = f32[4,4]{1,0} aten::mul(%69, %64) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %71 = f32[4,4]{1,0} aten::sub(%67, %70) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %72 = f32[4,4]{1,0} aten::addcdiv(%71, %62, %54, %0) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=2, shape=f32[4]{0}, device=NEURON:0, ir_nodes=67
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %12 = f32[4,4]{0,1} aten::permute(%11) tensor_ids = [1, 2], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %13 = f32[4,4]{1,0} aten::permute(%12) tensor_ids = [1, 2], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %15 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%14) tensor_ids = [1, 2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %16 = f32[4,4]{0,1} aten::permute(%15) tensor_ids = [1, 2], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %17 = f32[4,4]{1,0} aten::permute(%16) tensor_ids = [1, 2], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %18 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%14) tensor_ids = [1, 2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %19 = f32[4,4]{0,1} aten::permute(%18) tensor_ids = [1, 2], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %20 = f32[4,4]{1,0} aten::permute(%19) tensor_ids = [1, 2], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %21 = f32[] xla::device_data() tensor_ids = [1, 2], xla_shape=f32[], device=NEURON:0
  %22 = f32[] xla::device_data() tensor_ids = [1, 2], xla_shape=f32[], device=NEURON:0
  %23 = f32[] prim::Constant() tensor_ids = [1, 2], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %24 = f32[] aten::expand(%23) tensor_ids = [1, 2], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %25 = f32[] aten::mul(%24, %22) tensor_ids = [1, 2], xla_shape=f32[]
  %26 = f32[4]{0} aten::expand(%25) tensor_ids = [1, 2], xla_shape=f32[4]{0}, size=(4)
  %27 = f32[4]{0} aten::div(%26, %21) tensor_ids = [1, 2], xla_shape=f32[4]{0}
  %28 = f32[1,4]{1,0} aten::as_strided(%27) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %29 = f32[1,4]{1,0} aten::mm(%28, %20) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}
  %30 = f32[4]{0} aten::as_strided(%29) tensor_ids = [1, 2], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::as_strided(%30) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %32 = f32[1,4]{1,0} aten::mm(%31, %17) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}
  %33 = f32[4]{0} aten::as_strided(%32) tensor_ids = [1, 2], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %34 = f32[1,4]{1,0} aten::as_strided(%33) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %35 = f32[1,4]{1,0} aten::mm(%34, %13) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}
  %36 = f32[4]{0} aten::as_strided(%35) tensor_ids = [1, 2], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %37 = f32[1,4]{1,0} aten::as_strided(%36) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %38 = f32[1,4]{1,0} aten::mm(%37, %9) tensor_ids = [1, 2], xla_shape=f32[1,4]{1,0}
  %39 = f32[4]{0} aten::as_strided(%38) tensor_ids = [2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %40 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%39) tensor_ids = [2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %41 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %42 = f32[] prim::Constant() tensor_ids = [2], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %43 = f32[4]{0} aten::expand(%42) tensor_ids = [2], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %44 = f32[4]{0} aten::mul(%43, %41) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %45 = f32[4]{0} aten::addcmul(%44, %40, %40, %5) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %46 = f32[4]{0} aten::sqrt(%45) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %47 = f32[4]{0} aten::div(%46, %4) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %48 = f32[4]{0} aten::add(%47, %3) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %49 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %50 = f32[4]{0} aten::expand(%49) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %51 = f32[4]{0} aten::mul(%40, %50) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %52 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %53 = f32[] prim::Constant() tensor_ids = [2], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %54 = f32[4]{0} aten::expand(%53) tensor_ids = [2], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %55 = f32[4]{0} aten::mul(%54, %52) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %56 = f32[4]{0} aten::add(%55, %51) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %57 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %58 = f32[4]{0} aten::expand(%57) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %59 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %60 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %61 = f32[4]{0} xla::device_data() tensor_ids = [2], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %62 = f32[4]{0} aten::mul(%61, %60) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %63 = f32[4]{0} aten::mul(%62, %59) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %64 = f32[4]{0} aten::mul(%63, %58) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %65 = f32[4]{0} aten::sub(%61, %64) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %66 = f32[4]{0} aten::addcdiv(%65, %56, %48, %0) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=3, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=78
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %12 = f32[4,4]{0,1} aten::permute(%11) tensor_ids = [1, 2, 3], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %13 = f32[4,4]{1,0} aten::permute(%12) tensor_ids = [1, 2, 3], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %14 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %15 = f32[4,4]{0,1} aten::permute(%14) tensor_ids = [1, 2, 3], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %16 = f32[4,4]{1,0} aten::permute(%15) tensor_ids = [1, 2, 3], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %17 = f32[] xla::device_data() tensor_ids = [1, 2, 3], xla_shape=f32[], device=NEURON:0
  %18 = f32[] xla::device_data() tensor_ids = [1, 2, 3], xla_shape=f32[], device=NEURON:0
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %20 = f32[] aten::expand(%19) tensor_ids = [1, 2, 3], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %21 = f32[] aten::mul(%20, %18) tensor_ids = [1, 2, 3], xla_shape=f32[]
  %22 = f32[4]{0} aten::expand(%21) tensor_ids = [1, 2, 3], xla_shape=f32[4]{0}, size=(4)
  %23 = f32[4]{0} aten::div(%22, %17) tensor_ids = [1, 2, 3], xla_shape=f32[4]{0}
  %24 = f32[1,4]{1,0} aten::as_strided(%23) tensor_ids = [1, 2, 3], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::mm(%24, %16) tensor_ids = [1, 2, 3], xla_shape=f32[1,4]{1,0}
  %26 = f32[4]{0} aten::as_strided(%25) tensor_ids = [1, 2, 3], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::as_strided(%26) tensor_ids = [1, 2, 3], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %28 = f32[1,4]{1,0} aten::mm(%27, %13) tensor_ids = [1, 2, 3], xla_shape=f32[1,4]{1,0}
  %29 = f32[4]{0} aten::as_strided(%28) tensor_ids = [1, 2, 3], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %30 = f32[1,4]{1,0} aten::as_strided(%29) tensor_ids = [1, 2, 3], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::mm(%30, %9) tensor_ids = [1, 2, 3], xla_shape=f32[1,4]{1,0}
  %32 = f32[4]{0} aten::as_strided(%31) tensor_ids = [1, 2, 3], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %33 = f32[1,4]{1,0} aten::as_strided(%32) tensor_ids = [1, 2, 3], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %34 = f32[] prim::Constant() tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[], value=1
  %35 = f32[4]{0} aten::expand(%34) tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %36 = f32[4]{0} xla::device_data() tensor_ids = [2, 3], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %37 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%36) tensor_ids = [3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %38 = f32[4]{0} aten::mul(%37, %35) tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %39 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %40 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%39) tensor_ids = [3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %41 = f32[4,4]{0,1} aten::permute(%40) tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %42 = f32[4]{0} xla::device_data() tensor_ids = [1, 3], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %43 = f32[1,4]{1,0} aten::as_strided(%42) tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %44 = f32[1,4]{1,0} aten::mm(%43, %41) tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %45 = f32[4]{0} aten::as_strided(%44) tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %46 = f32[4]{0} aten::add(%45, %38) tensor_ids = [3], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %47 = f32[1,4]{1,0} aten::as_strided(%46) tensor_ids = [3], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %48 = f32[4,1]{0,1} aten::permute(%47) tensor_ids = [3], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %49 = f32[4,4]{1,0} aten::mm(%48, %33) tensor_ids = [3], xla_shape=f32[4,4]{1,0}
  %50 = f32[4,4]{0,1} aten::permute(%49) tensor_ids = [3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %51 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%50) tensor_ids = [3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %52 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %53 = f32[] prim::Constant() tensor_ids = [3], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %54 = f32[4,4]{1,0} aten::expand(%53) tensor_ids = [3], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %55 = f32[4,4]{1,0} aten::mul(%54, %52) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %56 = f32[4,4]{1,0} aten::addcmul(%55, %51, %51, %5) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %57 = f32[4,4]{1,0} aten::sqrt(%56) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %58 = f32[4,4]{1,0} aten::div(%57, %4) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %59 = f32[4,4]{1,0} aten::add(%58, %3) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %60 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %61 = f32[4,4]{1,0} aten::expand(%60) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %62 = f32[4,4]{1,0} aten::mul(%51, %61) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %63 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %64 = f32[] prim::Constant() tensor_ids = [3], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %65 = f32[4,4]{1,0} aten::expand(%64) tensor_ids = [3], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %66 = f32[4,4]{1,0} aten::mul(%65, %63) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %67 = f32[4,4]{1,0} aten::add(%66, %62) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %68 = f32[] prim::Constant() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %69 = f32[4,4]{1,0} aten::expand(%68) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %70 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %71 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %72 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %73 = f32[4,4]{1,0} aten::mul(%72, %71) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %74 = f32[4,4]{1,0} aten::mul(%73, %70) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %75 = f32[4,4]{1,0} aten::mul(%74, %69) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %76 = f32[4,4]{1,0} aten::sub(%72, %75) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %77 = f32[4,4]{1,0} aten::addcdiv(%76, %67, %59, %0) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=4, shape=f32[4]{0}, device=NEURON:0, ir_nodes=60
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3, 4], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %12 = f32[4,4]{0,1} aten::permute(%11) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %13 = f32[4,4]{1,0} aten::permute(%12) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %14 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3, 4], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %15 = f32[4,4]{0,1} aten::permute(%14) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %16 = f32[4,4]{1,0} aten::permute(%15) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %17 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4], xla_shape=f32[], device=NEURON:0
  %18 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4], xla_shape=f32[], device=NEURON:0
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %20 = f32[] aten::expand(%19) tensor_ids = [1, 2, 3, 4], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %21 = f32[] aten::mul(%20, %18) tensor_ids = [1, 2, 3, 4], xla_shape=f32[]
  %22 = f32[4]{0} aten::expand(%21) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4]{0}, size=(4)
  %23 = f32[4]{0} aten::div(%22, %17) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4]{0}
  %24 = f32[1,4]{1,0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::mm(%24, %16) tensor_ids = [1, 2, 3, 4], xla_shape=f32[1,4]{1,0}
  %26 = f32[4]{0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::as_strided(%26) tensor_ids = [1, 2, 3, 4], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %28 = f32[1,4]{1,0} aten::mm(%27, %13) tensor_ids = [1, 2, 3, 4], xla_shape=f32[1,4]{1,0}
  %29 = f32[4]{0} aten::as_strided(%28) tensor_ids = [1, 2, 3, 4], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %30 = f32[1,4]{1,0} aten::as_strided(%29) tensor_ids = [1, 2, 3, 4], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::mm(%30, %9) tensor_ids = [1, 2, 3, 4], xla_shape=f32[1,4]{1,0}
  %32 = f32[4]{0} aten::as_strided(%31) tensor_ids = [4], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %33 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%32) tensor_ids = [4], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %34 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %35 = f32[] prim::Constant() tensor_ids = [4], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %36 = f32[4]{0} aten::expand(%35) tensor_ids = [4], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %37 = f32[4]{0} aten::mul(%36, %34) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %38 = f32[4]{0} aten::addcmul(%37, %33, %33, %5) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %39 = f32[4]{0} aten::sqrt(%38) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %40 = f32[4]{0} aten::div(%39, %4) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %41 = f32[4]{0} aten::add(%40, %3) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %42 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %43 = f32[4]{0} aten::expand(%42) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %44 = f32[4]{0} aten::mul(%33, %43) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %45 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %46 = f32[] prim::Constant() tensor_ids = [4], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %47 = f32[4]{0} aten::expand(%46) tensor_ids = [4], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %48 = f32[4]{0} aten::mul(%47, %45) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %49 = f32[4]{0} aten::add(%48, %44) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %50 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %51 = f32[4]{0} aten::expand(%50) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %52 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %53 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %54 = f32[4]{0} xla::device_data() tensor_ids = [4], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %55 = f32[4]{0} aten::mul(%54, %53) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %56 = f32[4]{0} aten::mul(%55, %52) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %57 = f32[4]{0} aten::mul(%56, %51) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %58 = f32[4]{0} aten::sub(%54, %57) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %59 = f32[4]{0} aten::addcdiv(%58, %49, %41, %0) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=5, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=83
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %11 = f32[4,4]{0,1} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %12 = f32[4,4]{1,0} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[], device=NEURON:0
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %16 = f32[] aten::expand(%15) tensor_ids = [1, 2, 3, 4, 5], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %17 = f32[] aten::mul(%16, %14) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[]
  %18 = f32[4]{0} aten::expand(%17) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4]{0}, size=(4)
  %19 = f32[4]{0} aten::div(%18, %13) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4]{0}
  %20 = f32[1,4]{1,0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %21 = f32[1,4]{1,0} aten::mm(%20, %12) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[1,4]{1,0}
  %22 = f32[4]{0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::mm(%23, %9) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[1,4]{1,0}
  %25 = f32[4]{0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4, 5], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %27 = f32[] prim::Constant() tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[], value=1
  %28 = f32[4]{0} aten::expand(%27) tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %29 = f32[4]{0} xla::device_data() tensor_ids = [4, 5], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %30 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%29) tensor_ids = [5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %31 = f32[4]{0} aten::mul(%30, %28) tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %32 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %33 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%32) tensor_ids = [1, 2, 5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %34 = f32[4,4]{0,1} aten::permute(%33) tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %35 = f32[] prim::Constant() tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[], value=1
  %36 = f32[4]{0} aten::expand(%35) tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %37 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %38 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%37) tensor_ids = [3, 5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %39 = f32[4]{0} aten::mul(%38, %36) tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %40 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %41 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%40) tensor_ids = [3, 5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %42 = f32[4,4]{0,1} aten::permute(%41) tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %43 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %44 = f32[1,4]{1,0} aten::as_strided(%43) tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %45 = f32[1,4]{1,0} aten::mm(%44, %42) tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %46 = f32[4]{0} aten::as_strided(%45) tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %47 = f32[4]{0} aten::add(%46, %39) tensor_ids = [3, 5], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %48 = f32[1,4]{1,0} aten::as_strided(%47) tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %49 = f32[1,4]{1,0} aten::mm(%48, %34) tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %50 = f32[4]{0} aten::as_strided(%49) tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %51 = f32[4]{0} aten::add(%50, %31) tensor_ids = [5], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %52 = f32[1,4]{1,0} aten::as_strided(%51) tensor_ids = [5], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %53 = f32[4,1]{0,1} aten::permute(%52) tensor_ids = [5], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %54 = f32[4,4]{1,0} aten::mm(%53, %26) tensor_ids = [5], xla_shape=f32[4,4]{1,0}
  %55 = f32[4,4]{0,1} aten::permute(%54) tensor_ids = [5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %56 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%55) tensor_ids = [5], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %57 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %58 = f32[] prim::Constant() tensor_ids = [5], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %59 = f32[4,4]{1,0} aten::expand(%58) tensor_ids = [5], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %60 = f32[4,4]{1,0} aten::mul(%59, %57) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %61 = f32[4,4]{1,0} aten::addcmul(%60, %56, %56, %5) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %62 = f32[4,4]{1,0} aten::sqrt(%61) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %63 = f32[4,4]{1,0} aten::div(%62, %4) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %64 = f32[4,4]{1,0} aten::add(%63, %3) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %65 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %66 = f32[4,4]{1,0} aten::expand(%65) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %67 = f32[4,4]{1,0} aten::mul(%56, %66) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %68 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %69 = f32[] prim::Constant() tensor_ids = [5], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %70 = f32[4,4]{1,0} aten::expand(%69) tensor_ids = [5], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %71 = f32[4,4]{1,0} aten::mul(%70, %68) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %72 = f32[4,4]{1,0} aten::add(%71, %67) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %73 = f32[] prim::Constant() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %74 = f32[4,4]{1,0} aten::expand(%73) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %75 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %76 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %77 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %78 = f32[4,4]{1,0} aten::mul(%77, %76) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %79 = f32[4,4]{1,0} aten::mul(%78, %75) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %80 = f32[4,4]{1,0} aten::mul(%79, %74) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %81 = f32[4,4]{1,0} aten::sub(%77, %80) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %82 = f32[4,4]{1,0} aten::addcdiv(%81, %72, %64, %0) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=6, shape=f32[4]{0}, device=NEURON:0, ir_nodes=53
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %11 = f32[4,4]{0,1} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %12 = f32[4,4]{1,0} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[], device=NEURON:0
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %16 = f32[] aten::expand(%15) tensor_ids = [1, 2, 3, 4, 5, 6], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %17 = f32[] aten::mul(%16, %14) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[]
  %18 = f32[4]{0} aten::expand(%17) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[4]{0}, size=(4)
  %19 = f32[4]{0} aten::div(%18, %13) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[4]{0}
  %20 = f32[1,4]{1,0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %21 = f32[1,4]{1,0} aten::mm(%20, %12) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[1,4]{1,0}
  %22 = f32[4]{0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::mm(%23, %9) tensor_ids = [1, 2, 3, 4, 5, 6], xla_shape=f32[1,4]{1,0}
  %25 = f32[4]{0} aten::as_strided(%24) tensor_ids = [6], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %26 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%25) tensor_ids = [6], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %27 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %28 = f32[] prim::Constant() tensor_ids = [6], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %29 = f32[4]{0} aten::expand(%28) tensor_ids = [6], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %30 = f32[4]{0} aten::mul(%29, %27) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %31 = f32[4]{0} aten::addcmul(%30, %26, %26, %5) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %32 = f32[4]{0} aten::sqrt(%31) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %33 = f32[4]{0} aten::div(%32, %4) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %34 = f32[4]{0} aten::add(%33, %3) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %35 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %36 = f32[4]{0} aten::expand(%35) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %37 = f32[4]{0} aten::mul(%26, %36) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %38 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %39 = f32[] prim::Constant() tensor_ids = [6], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %40 = f32[4]{0} aten::expand(%39) tensor_ids = [6], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %41 = f32[4]{0} aten::mul(%40, %38) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %42 = f32[4]{0} aten::add(%41, %37) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %43 = f32[] prim::Constant() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %44 = f32[4]{0} aten::expand(%43) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %45 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %46 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %47 = f32[4]{0} xla::device_data() tensor_ids = [6], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %48 = f32[4]{0} aten::mul(%47, %46) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %49 = f32[4]{0} aten::mul(%48, %45) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %50 = f32[4]{0} aten::mul(%49, %44) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %51 = f32[4]{0} aten::sub(%47, %50) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %52 = f32[4]{0} aten::addcdiv(%51, %42, %34, %0) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=7, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=108
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[] prim::Constant() tensor_ids = [7], xla_shape=f32[], value=1
  %7 = f32[4,4]{1,0} aten::expand(%6) tensor_ids = [7], xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %8 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %9 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %10 = f32[4,4]{0,1} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %11 = f32[4,4]{1,0} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %12 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[], device=NEURON:0
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[], device=NEURON:0
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %15 = f32[] aten::expand(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %16 = f32[] aten::mul(%15, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[]
  %17 = f32[4]{0} aten::expand(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[4]{0}, size=(4)
  %18 = f32[4]{0} aten::div(%17, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[4]{0}
  %19 = f32[1,4]{1,0} aten::as_strided(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %20 = f32[1,4]{1,0} aten::mm(%19, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[1,4]{1,0}
  %21 = f32[4]{0} aten::as_strided(%20) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %22 = f32[1,4]{1,0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %23 = f32[] prim::Constant() tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[], value=1
  %24 = f32[4]{0} aten::expand(%23) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %25 = f32[4]{0} xla::device_data() tensor_ids = [6, 7], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %26 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%25) tensor_ids = [7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %27 = f32[4]{0} aten::mul(%26, %24) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %28 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %29 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%28) tensor_ids = [1, 2, 3, 4, 7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %30 = f32[4,4]{0,1} aten::permute(%29) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %31 = f32[] prim::Constant() tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[], value=1
  %32 = f32[4]{0} aten::expand(%31) tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %33 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %34 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%33) tensor_ids = [5, 7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %35 = f32[4]{0} aten::mul(%34, %32) tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %36 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %37 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%36) tensor_ids = [1, 2, 5, 7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %38 = f32[4,4]{0,1} aten::permute(%37) tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %39 = f32[] prim::Constant() tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[], value=1
  %40 = f32[4]{0} aten::expand(%39) tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %41 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %42 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%41) tensor_ids = [3, 5, 7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %43 = f32[4]{0} aten::mul(%42, %40) tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %44 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %45 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%44) tensor_ids = [3, 5, 7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %46 = f32[4,4]{0,1} aten::permute(%45) tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %47 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %48 = f32[1,4]{1,0} aten::as_strided(%47) tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %49 = f32[1,4]{1,0} aten::mm(%48, %46) tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %50 = f32[4]{0} aten::as_strided(%49) tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %51 = f32[4]{0} aten::add(%50, %43) tensor_ids = [3, 5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %52 = f32[1,4]{1,0} aten::as_strided(%51) tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %53 = f32[1,4]{1,0} aten::mm(%52, %38) tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %54 = f32[4]{0} aten::as_strided(%53) tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %55 = f32[4]{0} aten::add(%54, %35) tensor_ids = [5, 7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %56 = f32[1,4]{1,0} aten::as_strided(%55) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %57 = f32[1,4]{1,0} aten::mm(%56, %30) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %58 = f32[4]{0} aten::as_strided(%57) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %59 = f32[4]{0} aten::add(%58, %27) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %60 = f32[1,4]{1,0} aten::as_strided(%59) tensor_ids = [7], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %61 = f32[4,1]{0,1} aten::permute(%60) tensor_ids = [7], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %62 = f32[4,4]{1,0} aten::mm(%61, %22) tensor_ids = [7], xla_shape=f32[4,4]{1,0}
  %63 = f32[4,4]{0,1} aten::permute(%62) tensor_ids = [7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %64 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%63) tensor_ids = [7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %65 = f32[4,4]{1,0} aten::mul(%64, %7) tensor_ids = [7], xla_shape=f32[4,4]{1,0}
  %66 = f32[] prim::Constant() tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[], value=1
  %67 = f32[4]{0} aten::expand(%66) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %68 = f32[4]{0} xla::device_data() tensor_ids = [7], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %69 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%68) tensor_ids = [7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %70 = f32[4]{0} aten::mul(%69, %67) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %71 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %72 = f32[4,4]{0,1} aten::permute(%71) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %73 = f32[1,4]{1,0} aten::as_strided(%59) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %74 = f32[1,4]{1,0} aten::mm(%73, %72) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %75 = f32[4]{0} aten::as_strided(%74) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %76 = f32[4]{0} aten::add(%75, %70) tensor_ids = [7], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %77 = f32[1,4]{1,0} aten::as_strided(%76) tensor_ids = [7], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %78 = f32[4,1]{0,1} aten::permute(%77) tensor_ids = [7], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %79 = f32[4,4]{1,0} aten::mm(%78, %19) tensor_ids = [7], xla_shape=f32[4,4]{1,0}
  %80 = f32[4,4]{0,1} aten::permute(%79) tensor_ids = [7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %81 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%80) tensor_ids = [7], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %82 = f32[4,4]{1,0} aten::add(%81, %65) tensor_ids = [7], xla_shape=f32[4,4]{1,0}
  %83 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %84 = f32[] prim::Constant() tensor_ids = [7], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %85 = f32[4,4]{1,0} aten::expand(%84) tensor_ids = [7], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %86 = f32[4,4]{1,0} aten::mul(%85, %83) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %87 = f32[4,4]{1,0} aten::addcmul(%86, %82, %82, %5) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %88 = f32[4,4]{1,0} aten::sqrt(%87) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %89 = f32[4,4]{1,0} aten::div(%88, %4) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %90 = f32[4,4]{1,0} aten::add(%89, %3) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %91 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %92 = f32[4,4]{1,0} aten::expand(%91) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %93 = f32[4,4]{1,0} aten::mul(%82, %92) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %94 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %95 = f32[] prim::Constant() tensor_ids = [7], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %96 = f32[4,4]{1,0} aten::expand(%95) tensor_ids = [7], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %97 = f32[4,4]{1,0} aten::mul(%96, %94) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %98 = f32[4,4]{1,0} aten::add(%97, %93) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %99 = f32[] prim::Constant() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %100 = f32[4,4]{1,0} aten::expand(%99) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %101 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %102 = f32[] xla::device_data() tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %103 = f32[4,4]{1,0} aten::mul(%8, %102) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %104 = f32[4,4]{1,0} aten::mul(%103, %101) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %105 = f32[4,4]{1,0} aten::mul(%104, %100) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %106 = f32[4,4]{1,0} aten::sub(%8, %105) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %107 = f32[4,4]{1,0} aten::addcdiv(%106, %98, %90, %0) tensor_ids = [7], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=8, shape=f32[4]{0}, device=NEURON:0, ir_nodes=52
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[] prim::Constant() tensor_ids = [8], xla_shape=f32[], value=1
  %7 = f32[4]{0} aten::expand(%6) tensor_ids = [8], xla_shape=f32[4]{0}, size=(4)
  %8 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %9 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %10 = f32[4,4]{0,1} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %11 = f32[4,4]{1,0} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %12 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[], device=NEURON:0
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[], device=NEURON:0
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %15 = f32[] aten::expand(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %16 = f32[] aten::mul(%15, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[]
  %17 = f32[4]{0} aten::expand(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[4]{0}, size=(4)
  %18 = f32[4]{0} aten::div(%17, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[4]{0}
  %19 = f32[1,4]{1,0} aten::as_strided(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %20 = f32[1,4]{1,0} aten::mm(%19, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8], xla_shape=f32[1,4]{1,0}
  %21 = f32[4]{0} aten::as_strided(%20) tensor_ids = [8], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %22 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%21) tensor_ids = [8], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %23 = f32[4]{0} aten::mul(%22, %7) tensor_ids = [8], xla_shape=f32[4]{0}
  %24 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%18) tensor_ids = [8], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %25 = f32[4]{0} aten::add(%24, %23) tensor_ids = [8], xla_shape=f32[4]{0}
  %26 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %27 = f32[] prim::Constant() tensor_ids = [8], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %28 = f32[4]{0} aten::expand(%27) tensor_ids = [8], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %29 = f32[4]{0} aten::mul(%28, %26) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %30 = f32[4]{0} aten::addcmul(%29, %25, %25, %5) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %31 = f32[4]{0} aten::sqrt(%30) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %32 = f32[4]{0} aten::div(%31, %4) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %33 = f32[4]{0} aten::add(%32, %3) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %34 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %35 = f32[4]{0} aten::expand(%34) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %36 = f32[4]{0} aten::mul(%25, %35) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %37 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %38 = f32[] prim::Constant() tensor_ids = [8], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %39 = f32[4]{0} aten::expand(%38) tensor_ids = [8], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %40 = f32[4]{0} aten::mul(%39, %37) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %41 = f32[4]{0} aten::add(%40, %36) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %42 = f32[] prim::Constant() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %43 = f32[4]{0} aten::expand(%42) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %44 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %45 = f32[] xla::device_data() tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %46 = f32[4]{0} xla::device_data() tensor_ids = [7, 8], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %47 = f32[4]{0} aten::mul(%46, %45) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %48 = f32[4]{0} aten::mul(%47, %44) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %49 = f32[4]{0} aten::mul(%48, %43) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %50 = f32[4]{0} aten::sub(%46, %49) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %51 = f32[4]{0} aten::addcdiv(%50, %41, %33, %0) tensor_ids = [8], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=9, shape=f32[1,4]{1,0}, device=NEURON:0, ir_nodes=1
Frames:
  convert (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1158)
  _apply (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:833)
  _apply (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:810)
  to (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1160)
  train_model (run_simple_model.py:55)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[1,4]{1,0} xla::device_data() tensor_ids = [9], location=convert@module.py:1158, xla_shape=f32[1,4]{1,0}, device=NEURON:0, ROOT=0
}


Tensor: id=10, shape=f32[1]{0}, device=NEURON:0, ir_nodes=1
Frames:
  convert (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1158)
  _apply (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:833)
  _apply (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:810)
  to (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1160)
  train_model (run_simple_model.py:55)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[1]{0} xla::device_data() tensor_ids = [10], location=convert@module.py:1158, xla_shape=f32[1]{0}, device=NEURON:0, ROOT=0
}


Tensor: id=11, shape=f32[4]{0}, device=NEURON:0, ir_nodes=1
Frames:
  train_model (run_simple_model.py:65)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0, ROOT=0
}


Tensor: id=42, shape=f32[], device=NEURON:0, ir_nodes=60
Frames:
  forward (run_simple_model.py:35)
  _call_impl (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1527)
  _wrapped_call_impl (/home/ubuntu/qwb/pytorch/torch/nn/modules/module.py:1518)
  train_model (run_simple_model.py:66)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[], value=1
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[4]{0} xla::device_data() tensor_ids = [7, 8, 42], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %3 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4]{0} aten::mul(%3, %1) tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %5 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %6 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,4]{0,1} aten::permute(%6) tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %8 = f32[] prim::Constant() tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[], value=1
  %9 = f32[4]{0} aten::expand(%8) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %10 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %11 = f32[4]{0} aten::mul(%10, %9) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %12 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %13 = f32[4,4]{0,1} aten::permute(%12) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %14 = f32[] prim::Constant() tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[], value=1
  %15 = f32[4]{0} aten::expand(%14) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %16 = f32[4]{0} xla::device_data() tensor_ids = [6, 7, 42], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %17 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%16) tensor_ids = [7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %18 = f32[4]{0} aten::mul(%17, %15) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %20 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%19) tensor_ids = [1, 2, 3, 4, 7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %21 = f32[4,4]{0,1} aten::permute(%20) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %22 = f32[] prim::Constant() tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[], value=1
  %23 = f32[4]{0} aten::expand(%22) tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %24 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %25 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%24) tensor_ids = [5, 7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %26 = f32[4]{0} aten::mul(%25, %23) tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %27 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %28 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%27) tensor_ids = [1, 2, 5, 7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %29 = f32[4,4]{0,1} aten::permute(%28) tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %30 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[], value=1
  %31 = f32[4]{0} aten::expand(%30) tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %32 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %33 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%32) tensor_ids = [3, 5, 7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %34 = f32[4]{0} aten::mul(%33, %31) tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %35 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %36 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%35) tensor_ids = [3, 5, 7, 42], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %37 = f32[4,4]{0,1} aten::permute(%36) tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %38 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %39 = f32[1,4]{1,0} aten::as_strided(%38) tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %40 = f32[1,4]{1,0} aten::mm(%39, %37) tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %41 = f32[4]{0} aten::as_strided(%40) tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %42 = f32[4]{0} aten::add(%41, %34) tensor_ids = [3, 5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %43 = f32[1,4]{1,0} aten::as_strided(%42) tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %44 = f32[1,4]{1,0} aten::mm(%43, %29) tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %45 = f32[4]{0} aten::as_strided(%44) tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %46 = f32[4]{0} aten::add(%45, %26) tensor_ids = [5, 7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %47 = f32[1,4]{1,0} aten::as_strided(%46) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %48 = f32[1,4]{1,0} aten::mm(%47, %21) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %49 = f32[4]{0} aten::as_strided(%48) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %50 = f32[4]{0} aten::add(%49, %18) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %51 = f32[1,4]{1,0} aten::as_strided(%50) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %52 = f32[1,4]{1,0} aten::mm(%51, %13) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %53 = f32[4]{0} aten::as_strided(%52) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %54 = f32[4]{0} aten::add(%53, %11) tensor_ids = [7, 42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %55 = f32[1,4]{1,0} aten::as_strided(%54) tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %56 = f32[1,4]{1,0} aten::mm(%55, %7) tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %57 = f32[4]{0} aten::as_strided(%56) tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %58 = f32[4]{0} aten::add(%57, %4) tensor_ids = [42], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %59 = f32[] aten::mean(%58) tensor_ids = [42], location=forward@run_simple_model.py:35, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=6, ROOT=0
}


Tensor: id=44, shape=f32[], device=NEURON:0, ir_nodes=62
Frames:
  train_model (run_simple_model.py:67)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [44], location=train_model@run_simple_model.py:67, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[], value=1
  %2 = f32[4]{0} aten::expand(%1) tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %3 = f32[4]{0} xla::device_data() tensor_ids = [7, 8, 42, 44], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %4 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%3) tensor_ids = [42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %5 = f32[4]{0} aten::mul(%4, %2) tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[] prim::Constant() tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[], value=1
  %10 = f32[4]{0} aten::expand(%9) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %11 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%3) tensor_ids = [7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %12 = f32[4]{0} aten::mul(%11, %10) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %13 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %14 = f32[4,4]{0,1} aten::permute(%13) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %15 = f32[] prim::Constant() tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[], value=1
  %16 = f32[4]{0} aten::expand(%15) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %17 = f32[4]{0} xla::device_data() tensor_ids = [6, 7, 42, 44], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %18 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%17) tensor_ids = [7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %19 = f32[4]{0} aten::mul(%18, %16) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %20 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %21 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%20) tensor_ids = [1, 2, 3, 4, 7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %22 = f32[4,4]{0,1} aten::permute(%21) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %23 = f32[] prim::Constant() tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[], value=1
  %24 = f32[4]{0} aten::expand(%23) tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %25 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42, 44], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %26 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%25) tensor_ids = [5, 7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %27 = f32[4]{0} aten::mul(%26, %24) tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %28 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %29 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%28) tensor_ids = [1, 2, 5, 7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %30 = f32[4,4]{0,1} aten::permute(%29) tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %31 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[], value=1
  %32 = f32[4]{0} aten::expand(%31) tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %33 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %34 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%33) tensor_ids = [3, 5, 7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %35 = f32[4]{0} aten::mul(%34, %32) tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %36 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %37 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%36) tensor_ids = [3, 5, 7, 42, 44], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %38 = f32[4,4]{0,1} aten::permute(%37) tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %39 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %40 = f32[1,4]{1,0} aten::as_strided(%39) tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %41 = f32[1,4]{1,0} aten::mm(%40, %38) tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %42 = f32[4]{0} aten::as_strided(%41) tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %43 = f32[4]{0} aten::add(%42, %35) tensor_ids = [3, 5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %44 = f32[1,4]{1,0} aten::as_strided(%43) tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %45 = f32[1,4]{1,0} aten::mm(%44, %30) tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %46 = f32[4]{0} aten::as_strided(%45) tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %47 = f32[4]{0} aten::add(%46, %27) tensor_ids = [5, 7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %48 = f32[1,4]{1,0} aten::as_strided(%47) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %49 = f32[1,4]{1,0} aten::mm(%48, %22) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %50 = f32[4]{0} aten::as_strided(%49) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %51 = f32[4]{0} aten::add(%50, %19) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %52 = f32[1,4]{1,0} aten::as_strided(%51) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %53 = f32[1,4]{1,0} aten::mm(%52, %14) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %54 = f32[4]{0} aten::as_strided(%53) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %55 = f32[4]{0} aten::add(%54, %12) tensor_ids = [7, 42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %56 = f32[1,4]{1,0} aten::as_strided(%55) tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %57 = f32[1,4]{1,0} aten::mm(%56, %8) tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %58 = f32[4]{0} aten::as_strided(%57) tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %59 = f32[4]{0} aten::add(%58, %5) tensor_ids = [42, 44], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %60 = f32[] aten::mean(%59) tensor_ids = [42, 44], location=forward@run_simple_model.py:35, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=6
  %61 = f32[] aten::mul(%60, %0) tensor_ids = [44], location=train_model@run_simple_model.py:67, xla_shape=f32[], ROOT=0
}


Tensor: id=57, shape=f32[4]{0}, device=NEURON:0, ir_nodes=20
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [8, 57], xla_shape=f32[], value=1
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [8, 57], xla_shape=f32[4]{0}, size=(4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[], device=NEURON:0
  %7 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[], device=NEURON:0
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %9 = f32[] aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %10 = f32[] aten::mul(%9, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[]
  %11 = f32[4]{0} aten::expand(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[4]{0}, size=(4)
  %12 = f32[4]{0} aten::div(%11, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[4]{0}
  %13 = f32[1,4]{1,0} aten::as_strided(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %14 = f32[1,4]{1,0} aten::mm(%13, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57], xla_shape=f32[1,4]{1,0}
  %15 = f32[4]{0} aten::as_strided(%14) tensor_ids = [8, 57], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %16 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%15) tensor_ids = [8, 57], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %17 = f32[4]{0} aten::mul(%16, %1) tensor_ids = [8, 57], xla_shape=f32[4]{0}
  %18 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%12) tensor_ids = [8, 57], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %19 = f32[4]{0} aten::add(%18, %17) tensor_ids = [8, 57], xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=58, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=77
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [7, 58], xla_shape=f32[], value=1
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [7, 58], xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[], device=NEURON:0
  %7 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[], device=NEURON:0
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %9 = f32[] aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %10 = f32[] aten::mul(%9, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[]
  %11 = f32[4]{0} aten::expand(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[4]{0}, size=(4)
  %12 = f32[4]{0} aten::div(%11, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[4]{0}
  %13 = f32[1,4]{1,0} aten::as_strided(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %14 = f32[1,4]{1,0} aten::mm(%13, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58], xla_shape=f32[1,4]{1,0}
  %15 = f32[4]{0} aten::as_strided(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %16 = f32[1,4]{1,0} aten::as_strided(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %17 = f32[] prim::Constant() tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[], value=1
  %18 = f32[4]{0} aten::expand(%17) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %19 = f32[4]{0} xla::device_data() tensor_ids = [6, 7, 42, 44, 58], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %20 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%19) tensor_ids = [7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %21 = f32[4]{0} aten::mul(%20, %18) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %22 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %23 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%22) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %24 = f32[4,4]{0,1} aten::permute(%23) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %25 = f32[] prim::Constant() tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[], value=1
  %26 = f32[4]{0} aten::expand(%25) tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %27 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42, 44, 58], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %28 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%27) tensor_ids = [5, 7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %29 = f32[4]{0} aten::mul(%28, %26) tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %30 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %31 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%30) tensor_ids = [1, 2, 5, 7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %32 = f32[4,4]{0,1} aten::permute(%31) tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %33 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[], value=1
  %34 = f32[4]{0} aten::expand(%33) tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %35 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %36 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%35) tensor_ids = [3, 5, 7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %37 = f32[4]{0} aten::mul(%36, %34) tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %38 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %39 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%38) tensor_ids = [3, 5, 7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %40 = f32[4,4]{0,1} aten::permute(%39) tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %41 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %42 = f32[1,4]{1,0} aten::as_strided(%41) tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %43 = f32[1,4]{1,0} aten::mm(%42, %40) tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %44 = f32[4]{0} aten::as_strided(%43) tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %45 = f32[4]{0} aten::add(%44, %37) tensor_ids = [3, 5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %46 = f32[1,4]{1,0} aten::as_strided(%45) tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %47 = f32[1,4]{1,0} aten::mm(%46, %32) tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %48 = f32[4]{0} aten::as_strided(%47) tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %49 = f32[4]{0} aten::add(%48, %29) tensor_ids = [5, 7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %50 = f32[1,4]{1,0} aten::as_strided(%49) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %51 = f32[1,4]{1,0} aten::mm(%50, %24) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %52 = f32[4]{0} aten::as_strided(%51) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %53 = f32[4]{0} aten::add(%52, %21) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %54 = f32[1,4]{1,0} aten::as_strided(%53) tensor_ids = [7, 58], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %55 = f32[4,1]{0,1} aten::permute(%54) tensor_ids = [7, 58], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %56 = f32[4,4]{1,0} aten::mm(%55, %16) tensor_ids = [7, 58], xla_shape=f32[4,4]{1,0}
  %57 = f32[4,4]{0,1} aten::permute(%56) tensor_ids = [7, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %58 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%57) tensor_ids = [7, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %59 = f32[4,4]{1,0} aten::mul(%58, %1) tensor_ids = [7, 58], xla_shape=f32[4,4]{1,0}
  %60 = f32[] prim::Constant() tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[], value=1
  %61 = f32[4]{0} aten::expand(%60) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %62 = f32[4]{0} xla::device_data() tensor_ids = [7, 8, 42, 44, 58], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %63 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%62) tensor_ids = [7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %64 = f32[4]{0} aten::mul(%63, %61) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %65 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %66 = f32[4,4]{0,1} aten::permute(%65) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %67 = f32[1,4]{1,0} aten::as_strided(%53) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %68 = f32[1,4]{1,0} aten::mm(%67, %66) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %69 = f32[4]{0} aten::as_strided(%68) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %70 = f32[4]{0} aten::add(%69, %64) tensor_ids = [7, 42, 44, 58], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %71 = f32[1,4]{1,0} aten::as_strided(%70) tensor_ids = [7, 58], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %72 = f32[4,1]{0,1} aten::permute(%71) tensor_ids = [7, 58], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %73 = f32[4,4]{1,0} aten::mm(%72, %13) tensor_ids = [7, 58], xla_shape=f32[4,4]{1,0}
  %74 = f32[4,4]{0,1} aten::permute(%73) tensor_ids = [7, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %75 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%74) tensor_ids = [7, 58], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %76 = f32[4,4]{1,0} aten::add(%75, %59) tensor_ids = [7, 58], xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=77, shape=f32[4]{0}, device=NEURON:0, ir_nodes=21
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %1 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %2 = f32[4,4]{0,1} aten::permute(%1) tensor_ids = [1, 2, 3, 4, 5, 6, 77], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %3 = f32[4,4]{1,0} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 77], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %4 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %5 = f32[4,4]{0,1} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %6 = f32[4,4]{1,0} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %7 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[], device=NEURON:0
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %10 = f32[] aten::expand(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %11 = f32[] aten::mul(%10, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[]
  %12 = f32[4]{0} aten::expand(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[4]{0}, size=(4)
  %13 = f32[4]{0} aten::div(%12, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[4]{0}
  %14 = f32[1,4]{1,0} aten::as_strided(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %15 = f32[1,4]{1,0} aten::mm(%14, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77], xla_shape=f32[1,4]{1,0}
  %16 = f32[4]{0} aten::as_strided(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %17 = f32[1,4]{1,0} aten::as_strided(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %18 = f32[1,4]{1,0} aten::mm(%17, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 77], xla_shape=f32[1,4]{1,0}
  %19 = f32[4]{0} aten::as_strided(%18) tensor_ids = [6, 77], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %20 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%19) tensor_ids = [6, 77], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer, ROOT=0
}


Tensor: id=78, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=51
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %1 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %2 = f32[4,4]{0,1} aten::permute(%1) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %3 = f32[4,4]{1,0} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %4 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %5 = f32[4,4]{0,1} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %6 = f32[4,4]{1,0} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %7 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[], device=NEURON:0
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %10 = f32[] aten::expand(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %11 = f32[] aten::mul(%10, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[]
  %12 = f32[4]{0} aten::expand(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[4]{0}, size=(4)
  %13 = f32[4]{0} aten::div(%12, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[4]{0}
  %14 = f32[1,4]{1,0} aten::as_strided(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %15 = f32[1,4]{1,0} aten::mm(%14, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78], xla_shape=f32[1,4]{1,0}
  %16 = f32[4]{0} aten::as_strided(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %17 = f32[1,4]{1,0} aten::as_strided(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %18 = f32[1,4]{1,0} aten::mm(%17, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78], xla_shape=f32[1,4]{1,0}
  %19 = f32[4]{0} aten::as_strided(%18) tensor_ids = [1, 2, 3, 4, 5, 78], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %20 = f32[1,4]{1,0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5, 78], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %21 = f32[] prim::Constant() tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[], value=1
  %22 = f32[4]{0} aten::expand(%21) tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %23 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42, 44, 58, 78], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %24 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%23) tensor_ids = [5, 7, 42, 44, 58, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %25 = f32[4]{0} aten::mul(%24, %22) tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %26 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %27 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%26) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %28 = f32[4,4]{0,1} aten::permute(%27) tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %29 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[], value=1
  %30 = f32[4]{0} aten::expand(%29) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %31 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %32 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%31) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %33 = f32[4]{0} aten::mul(%32, %30) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %34 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %35 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%34) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %36 = f32[4,4]{0,1} aten::permute(%35) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %37 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %38 = f32[1,4]{1,0} aten::as_strided(%37) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %39 = f32[1,4]{1,0} aten::mm(%38, %36) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %40 = f32[4]{0} aten::as_strided(%39) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %41 = f32[4]{0} aten::add(%40, %33) tensor_ids = [3, 5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %42 = f32[1,4]{1,0} aten::as_strided(%41) tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %43 = f32[1,4]{1,0} aten::mm(%42, %28) tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %44 = f32[4]{0} aten::as_strided(%43) tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %45 = f32[4]{0} aten::add(%44, %25) tensor_ids = [5, 7, 42, 44, 58, 78], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %46 = f32[1,4]{1,0} aten::as_strided(%45) tensor_ids = [5, 78], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %47 = f32[4,1]{0,1} aten::permute(%46) tensor_ids = [5, 78], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %48 = f32[4,4]{1,0} aten::mm(%47, %20) tensor_ids = [5, 78], xla_shape=f32[4,4]{1,0}
  %49 = f32[4,4]{0,1} aten::permute(%48) tensor_ids = [5, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %50 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%49) tensor_ids = [5, 78], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer, ROOT=0
}


Tensor: id=86, shape=f32[4]{0}, device=NEURON:0, ir_nodes=28
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %1 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %2 = f32[4,4]{0,1} aten::permute(%1) tensor_ids = [1, 2, 3, 4, 86], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %3 = f32[4,4]{1,0} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 86], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %9 = f32[4,4]{0,1} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %10 = f32[4,4]{1,0} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %11 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[], device=NEURON:0
  %12 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[], device=NEURON:0
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %14 = f32[] aten::expand(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %15 = f32[] aten::mul(%14, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[]
  %16 = f32[4]{0} aten::expand(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[4]{0}, size=(4)
  %17 = f32[4]{0} aten::div(%16, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[4]{0}
  %18 = f32[1,4]{1,0} aten::as_strided(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %19 = f32[1,4]{1,0} aten::mm(%18, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86], xla_shape=f32[1,4]{1,0}
  %20 = f32[4]{0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %21 = f32[1,4]{1,0} aten::as_strided(%20) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %22 = f32[1,4]{1,0} aten::mm(%21, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86], xla_shape=f32[1,4]{1,0}
  %23 = f32[4]{0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5, 78, 86], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 78, 86], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::mm(%24, %3) tensor_ids = [1, 2, 3, 4, 86], xla_shape=f32[1,4]{1,0}
  %26 = f32[4]{0} aten::as_strided(%25) tensor_ids = [4, 86], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %27 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%26) tensor_ids = [4, 86], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer, ROOT=0
}


Tensor: id=87, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=46
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %1 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %2 = f32[4,4]{0,1} aten::permute(%1) tensor_ids = [1, 2, 3, 4, 86, 87], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %3 = f32[4,4]{1,0} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 86, 87], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %9 = f32[4,4]{0,1} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %10 = f32[4,4]{1,0} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %11 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[], device=NEURON:0
  %12 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[], device=NEURON:0
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %14 = f32[] aten::expand(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %15 = f32[] aten::mul(%14, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[]
  %16 = f32[4]{0} aten::expand(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[4]{0}, size=(4)
  %17 = f32[4]{0} aten::div(%16, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[4]{0}
  %18 = f32[1,4]{1,0} aten::as_strided(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %19 = f32[1,4]{1,0} aten::mm(%18, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87], xla_shape=f32[1,4]{1,0}
  %20 = f32[4]{0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %21 = f32[1,4]{1,0} aten::as_strided(%20) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %22 = f32[1,4]{1,0} aten::mm(%21, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87], xla_shape=f32[1,4]{1,0}
  %23 = f32[4]{0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::mm(%24, %3) tensor_ids = [1, 2, 3, 4, 86, 87], xla_shape=f32[1,4]{1,0}
  %26 = f32[4]{0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 87], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::as_strided(%26) tensor_ids = [1, 2, 3, 87], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %28 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[], value=1
  %29 = f32[4]{0} aten::expand(%28) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %30 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78, 87], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %31 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%30) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %32 = f32[4]{0} aten::mul(%31, %29) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %33 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78, 87], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %34 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%33) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %35 = f32[4,4]{0,1} aten::permute(%34) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %36 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %37 = f32[1,4]{1,0} aten::as_strided(%36) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %38 = f32[1,4]{1,0} aten::mm(%37, %35) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %39 = f32[4]{0} aten::as_strided(%38) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %40 = f32[4]{0} aten::add(%39, %32) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %41 = f32[1,4]{1,0} aten::as_strided(%40) tensor_ids = [3, 87], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %42 = f32[4,1]{0,1} aten::permute(%41) tensor_ids = [3, 87], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %43 = f32[4,4]{1,0} aten::mm(%42, %27) tensor_ids = [3, 87], xla_shape=f32[4,4]{1,0}
  %44 = f32[4,4]{0,1} aten::permute(%43) tensor_ids = [3, 87], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %45 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%44) tensor_ids = [3, 87], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer, ROOT=0
}


Tensor: id=92, shape=f32[4]{0}, device=NEURON:0, ir_nodes=35
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %1 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %2 = f32[4,4]{0,1} aten::permute(%1) tensor_ids = [1, 2, 92], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %3 = f32[4,4]{1,0} aten::permute(%2) tensor_ids = [1, 2, 92], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 86, 87, 92], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 86, 87, 92], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %9 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %10 = f32[4,4]{0,1} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %11 = f32[4,4]{1,0} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %12 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %13 = f32[4,4]{0,1} aten::permute(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %14 = f32[4,4]{1,0} aten::permute(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %15 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[], device=NEURON:0
  %16 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[], device=NEURON:0
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %18 = f32[] aten::expand(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %19 = f32[] aten::mul(%18, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[]
  %20 = f32[4]{0} aten::expand(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[4]{0}, size=(4)
  %21 = f32[4]{0} aten::div(%20, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[4]{0}
  %22 = f32[1,4]{1,0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::mm(%22, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92], xla_shape=f32[1,4]{1,0}
  %24 = f32[4]{0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::mm(%25, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92], xla_shape=f32[1,4]{1,0}
  %27 = f32[4]{0} aten::as_strided(%26) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %28 = f32[1,4]{1,0} aten::as_strided(%27) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %29 = f32[1,4]{1,0} aten::mm(%28, %7) tensor_ids = [1, 2, 3, 4, 86, 87, 92], xla_shape=f32[1,4]{1,0}
  %30 = f32[4]{0} aten::as_strided(%29) tensor_ids = [1, 2, 3, 87, 92], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::as_strided(%30) tensor_ids = [1, 2, 3, 87, 92], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %32 = f32[1,4]{1,0} aten::mm(%31, %3) tensor_ids = [1, 2, 92], xla_shape=f32[1,4]{1,0}
  %33 = f32[4]{0} aten::as_strided(%32) tensor_ids = [2, 92], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %34 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%33) tensor_ids = [2, 92], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer, ROOT=0
}


Tensor: id=93, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=41
Frames:
  __call__ (/home/ubuntu/qwb/pytorch/xla/torch_xla/core/xla_op_registry.py:44)
  backward (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/xla_impl/hint.py:80)
  apply (/home/ubuntu/qwb/pytorch/torch/autograd/function.py:288)
IR {
  %0 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %1 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%0) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %2 = f32[4,4]{0,1} aten::permute(%1) tensor_ids = [1, 2, 92, 93], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %3 = f32[4,4]{1,0} aten::permute(%2) tensor_ids = [1, 2, 92, 93], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %9 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %10 = f32[4,4]{0,1} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %11 = f32[4,4]{1,0} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %12 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %13 = f32[4,4]{0,1} aten::permute(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %14 = f32[4,4]{1,0} aten::permute(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %15 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[], device=NEURON:0
  %16 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[], device=NEURON:0
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %18 = f32[] aten::expand(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %19 = f32[] aten::mul(%18, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[]
  %20 = f32[4]{0} aten::expand(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[4]{0}, size=(4)
  %21 = f32[4]{0} aten::div(%20, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[4]{0}
  %22 = f32[1,4]{1,0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::mm(%22, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[1,4]{1,0}
  %24 = f32[4]{0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::mm(%25, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93], xla_shape=f32[1,4]{1,0}
  %27 = f32[4]{0} aten::as_strided(%26) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %28 = f32[1,4]{1,0} aten::as_strided(%27) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %29 = f32[1,4]{1,0} aten::mm(%28, %7) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93], xla_shape=f32[1,4]{1,0}
  %30 = f32[4]{0} aten::as_strided(%29) tensor_ids = [1, 2, 3, 87, 92, 93], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::as_strided(%30) tensor_ids = [1, 2, 3, 87, 92, 93], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %32 = f32[1,4]{1,0} aten::mm(%31, %3) tensor_ids = [1, 2, 92, 93], xla_shape=f32[1,4]{1,0}
  %33 = f32[4]{0} aten::as_strided(%32) tensor_ids = [1, 93], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %34 = f32[1,4]{1,0} aten::as_strided(%33) tensor_ids = [1, 93], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %35 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %36 = f32[1,4]{1,0} aten::as_strided(%35) tensor_ids = [1, 93], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %37 = f32[4,1]{0,1} aten::permute(%36) tensor_ids = [1, 93], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %38 = f32[4,4]{1,0} aten::mm(%37, %34) tensor_ids = [1, 93], xla_shape=f32[4,4]{1,0}
  %39 = f32[4,4]{0,1} aten::permute(%38) tensor_ids = [1, 93], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %40 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%39) tensor_ids = [1, 93], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer, ROOT=0
}


Tensor: id=94, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=49
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1, 94], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [1, 94], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 92, 93, 94], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 92, 93, 94], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %12 = f32[4,4]{0,1} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %13 = f32[4,4]{1,0} aten::permute(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %14 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %15 = f32[4,4]{0,1} aten::permute(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %16 = f32[4,4]{1,0} aten::permute(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %17 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[], device=NEURON:0
  %18 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[], device=NEURON:0
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %20 = f32[] aten::expand(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %21 = f32[] aten::mul(%20, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[]
  %22 = f32[4]{0} aten::expand(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[4]{0}, size=(4)
  %23 = f32[4]{0} aten::div(%22, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[4]{0}
  %24 = f32[1,4]{1,0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::mm(%24, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[1,4]{1,0}
  %26 = f32[4]{0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::as_strided(%26) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %28 = f32[1,4]{1,0} aten::mm(%27, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94], xla_shape=f32[1,4]{1,0}
  %29 = f32[4]{0} aten::as_strided(%28) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %30 = f32[1,4]{1,0} aten::as_strided(%29) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::mm(%30, %9) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94], xla_shape=f32[1,4]{1,0}
  %32 = f32[4]{0} aten::as_strided(%31) tensor_ids = [1, 2, 3, 87, 92, 93, 94], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %33 = f32[1,4]{1,0} aten::as_strided(%32) tensor_ids = [1, 2, 3, 87, 92, 93, 94], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %34 = f32[1,4]{1,0} aten::mm(%33, %5) tensor_ids = [1, 2, 92, 93, 94], xla_shape=f32[1,4]{1,0}
  %35 = f32[4]{0} aten::as_strided(%34) tensor_ids = [1, 93, 94], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %36 = f32[1,4]{1,0} aten::as_strided(%35) tensor_ids = [1, 93, 94], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %37 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %38 = f32[1,4]{1,0} aten::as_strided(%37) tensor_ids = [1, 93, 94], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %39 = f32[4,1]{0,1} aten::permute(%38) tensor_ids = [1, 93, 94], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %40 = f32[4,4]{1,0} aten::mm(%39, %36) tensor_ids = [1, 93, 94], xla_shape=f32[4,4]{1,0}
  %41 = f32[4,4]{0,1} aten::permute(%40) tensor_ids = [1, 93, 94], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %42 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%41) tensor_ids = [1, 93, 94], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %43 = f32[4,4]{1,0} aten::mul(%42, %1) tensor_ids = [1, 94], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %44 = f32[] xla::device_data() tensor_ids = [1, 94], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %45 = f32[] prim::Constant() tensor_ids = [1, 94], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %46 = f32[4,4]{1,0} aten::expand(%45) tensor_ids = [1, 94], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %47 = f32[4,4]{1,0} aten::mul(%46, %44) tensor_ids = [1, 94], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %48 = f32[4,4]{1,0} aten::add(%47, %43) tensor_ids = [1, 94], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=95, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=47
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1, 95], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %2 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %3 = f32[4,4]{0,1} aten::permute(%2) tensor_ids = [1, 2, 92, 93, 94, 95], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %4 = f32[4,4]{1,0} aten::permute(%3) tensor_ids = [1, 2, 92, 93, 94, 95], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %5 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %6 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,4]{0,1} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %8 = f32[4,4]{1,0} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %9 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %10 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %11 = f32[4,4]{0,1} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %12 = f32[4,4]{1,0} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %13 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %14 = f32[4,4]{0,1} aten::permute(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %15 = f32[4,4]{1,0} aten::permute(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %16 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[], device=NEURON:0
  %17 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[], device=NEURON:0
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %19 = f32[] aten::expand(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %20 = f32[] aten::mul(%19, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[]
  %21 = f32[4]{0} aten::expand(%20) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4]{0}, size=(4)
  %22 = f32[4]{0} aten::div(%21, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4]{0}
  %23 = f32[1,4]{1,0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::mm(%23, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}
  %25 = f32[4]{0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::mm(%26, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}
  %28 = f32[4]{0} aten::as_strided(%27) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %29 = f32[1,4]{1,0} aten::as_strided(%28) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %30 = f32[1,4]{1,0} aten::mm(%29, %8) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}
  %31 = f32[4]{0} aten::as_strided(%30) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %32 = f32[1,4]{1,0} aten::as_strided(%31) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %33 = f32[1,4]{1,0} aten::mm(%32, %4) tensor_ids = [1, 2, 92, 93, 94, 95], xla_shape=f32[1,4]{1,0}
  %34 = f32[4]{0} aten::as_strided(%33) tensor_ids = [1, 93, 94, 95], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %35 = f32[1,4]{1,0} aten::as_strided(%34) tensor_ids = [1, 93, 94, 95], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %36 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94, 95], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %37 = f32[1,4]{1,0} aten::as_strided(%36) tensor_ids = [1, 93, 94, 95], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %38 = f32[4,1]{0,1} aten::permute(%37) tensor_ids = [1, 93, 94, 95], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %39 = f32[4,4]{1,0} aten::mm(%38, %35) tensor_ids = [1, 93, 94, 95], xla_shape=f32[4,4]{1,0}
  %40 = f32[4,4]{0,1} aten::permute(%39) tensor_ids = [1, 93, 94, 95], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %41 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%40) tensor_ids = [1, 93, 94, 95], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %42 = f32[] xla::device_data() tensor_ids = [1, 95], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %43 = f32[] prim::Constant() tensor_ids = [1, 95], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %44 = f32[4,4]{1,0} aten::expand(%43) tensor_ids = [1, 95], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %45 = f32[4,4]{1,0} aten::mul(%44, %42) tensor_ids = [1, 95], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %46 = f32[4,4]{1,0} aten::addcmul(%45, %41, %41, %0) tensor_ids = [1, 95], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=96, shape=f32[4]{0}, device=NEURON:0, ir_nodes=43
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2, 96], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [2, 96], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %12 = f32[4,4]{0,1} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %13 = f32[4,4]{1,0} aten::permute(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %14 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %15 = f32[4,4]{0,1} aten::permute(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %16 = f32[4,4]{1,0} aten::permute(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %17 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[], device=NEURON:0
  %18 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[], device=NEURON:0
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %20 = f32[] aten::expand(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %21 = f32[] aten::mul(%20, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[]
  %22 = f32[4]{0} aten::expand(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4]{0}, size=(4)
  %23 = f32[4]{0} aten::div(%22, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4]{0}
  %24 = f32[1,4]{1,0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::mm(%24, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}
  %26 = f32[4]{0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::as_strided(%26) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %28 = f32[1,4]{1,0} aten::mm(%27, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}
  %29 = f32[4]{0} aten::as_strided(%28) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %30 = f32[1,4]{1,0} aten::as_strided(%29) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %31 = f32[1,4]{1,0} aten::mm(%30, %9) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}
  %32 = f32[4]{0} aten::as_strided(%31) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %33 = f32[1,4]{1,0} aten::as_strided(%32) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %34 = f32[1,4]{1,0} aten::mm(%33, %5) tensor_ids = [1, 2, 92, 93, 94, 95, 96], xla_shape=f32[1,4]{1,0}
  %35 = f32[4]{0} aten::as_strided(%34) tensor_ids = [2, 92, 96], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %36 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%35) tensor_ids = [2, 92, 96], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %37 = f32[4]{0} aten::mul(%36, %1) tensor_ids = [2, 96], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %38 = f32[] xla::device_data() tensor_ids = [2, 96], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %39 = f32[] prim::Constant() tensor_ids = [2, 96], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %40 = f32[4]{0} aten::expand(%39) tensor_ids = [2, 96], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %41 = f32[4]{0} aten::mul(%40, %38) tensor_ids = [2, 96], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %42 = f32[4]{0} aten::add(%41, %37) tensor_ids = [2, 96], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=97, shape=f32[4]{0}, device=NEURON:0, ir_nodes=41
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2, 97], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %2 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %3 = f32[4,4]{0,1} aten::permute(%2) tensor_ids = [1, 2, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %4 = f32[4,4]{1,0} aten::permute(%3) tensor_ids = [1, 2, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %5 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %6 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,4]{0,1} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %8 = f32[4,4]{1,0} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %9 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %10 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %11 = f32[4,4]{0,1} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %12 = f32[4,4]{1,0} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %13 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %14 = f32[4,4]{0,1} aten::permute(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %15 = f32[4,4]{1,0} aten::permute(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %16 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[], device=NEURON:0
  %17 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[], device=NEURON:0
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %19 = f32[] aten::expand(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %20 = f32[] aten::mul(%19, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[]
  %21 = f32[4]{0} aten::expand(%20) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4]{0}, size=(4)
  %22 = f32[4]{0} aten::div(%21, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4]{0}
  %23 = f32[1,4]{1,0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::mm(%23, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}
  %25 = f32[4]{0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::mm(%26, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}
  %28 = f32[4]{0} aten::as_strided(%27) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %29 = f32[1,4]{1,0} aten::as_strided(%28) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %30 = f32[1,4]{1,0} aten::mm(%29, %8) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}
  %31 = f32[4]{0} aten::as_strided(%30) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %32 = f32[1,4]{1,0} aten::as_strided(%31) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %33 = f32[1,4]{1,0} aten::mm(%32, %4) tensor_ids = [1, 2, 92, 93, 94, 95, 96, 97], xla_shape=f32[1,4]{1,0}
  %34 = f32[4]{0} aten::as_strided(%33) tensor_ids = [2, 92, 96, 97], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %35 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%34) tensor_ids = [2, 92, 96, 97], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %36 = f32[] xla::device_data() tensor_ids = [2, 97], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %37 = f32[] prim::Constant() tensor_ids = [2, 97], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %38 = f32[4]{0} aten::expand(%37) tensor_ids = [2, 97], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %39 = f32[4]{0} aten::mul(%38, %36) tensor_ids = [2, 97], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %40 = f32[4]{0} aten::addcmul(%39, %35, %35, %0) tensor_ids = [2, 97], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=98, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=54
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3, 98], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [3, 98], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %11 = f32[4,4]{0,1} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %12 = f32[4,4]{1,0} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[], device=NEURON:0
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %16 = f32[] aten::expand(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %17 = f32[] aten::mul(%16, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[]
  %18 = f32[4]{0} aten::expand(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4]{0}, size=(4)
  %19 = f32[4]{0} aten::div(%18, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4]{0}
  %20 = f32[1,4]{1,0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %21 = f32[1,4]{1,0} aten::mm(%20, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[1,4]{1,0}
  %22 = f32[4]{0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::mm(%23, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[1,4]{1,0}
  %25 = f32[4]{0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::mm(%26, %5) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[1,4]{1,0}
  %28 = f32[4]{0} aten::as_strided(%27) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %29 = f32[1,4]{1,0} aten::as_strided(%28) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96, 97, 98], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %30 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[], value=1
  %31 = f32[4]{0} aten::expand(%30) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %32 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78, 87, 98], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %33 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%32) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %34 = f32[4]{0} aten::mul(%33, %31) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %35 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78, 87, 98], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %36 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%35) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %37 = f32[4,4]{0,1} aten::permute(%36) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %38 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94, 95, 98], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %39 = f32[1,4]{1,0} aten::as_strided(%38) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %40 = f32[1,4]{1,0} aten::mm(%39, %37) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %41 = f32[4]{0} aten::as_strided(%40) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %42 = f32[4]{0} aten::add(%41, %34) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %43 = f32[1,4]{1,0} aten::as_strided(%42) tensor_ids = [3, 87, 98], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %44 = f32[4,1]{0,1} aten::permute(%43) tensor_ids = [3, 87, 98], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %45 = f32[4,4]{1,0} aten::mm(%44, %29) tensor_ids = [3, 87, 98], xla_shape=f32[4,4]{1,0}
  %46 = f32[4,4]{0,1} aten::permute(%45) tensor_ids = [3, 87, 98], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %47 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%46) tensor_ids = [3, 87, 98], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %48 = f32[4,4]{1,0} aten::mul(%47, %1) tensor_ids = [3, 98], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %49 = f32[] xla::device_data() tensor_ids = [3, 98], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %50 = f32[] prim::Constant() tensor_ids = [3, 98], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %51 = f32[4,4]{1,0} aten::expand(%50) tensor_ids = [3, 98], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %52 = f32[4,4]{1,0} aten::mul(%51, %49) tensor_ids = [3, 98], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %53 = f32[4,4]{1,0} aten::add(%52, %48) tensor_ids = [3, 98], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=99, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=52
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3, 99], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %2 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %3 = f32[4,4]{0,1} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %4 = f32[4,4]{1,0} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %5 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %6 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,4]{0,1} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %8 = f32[4,4]{1,0} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %9 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %10 = f32[4,4]{0,1} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %11 = f32[4,4]{1,0} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %12 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[], device=NEURON:0
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[], device=NEURON:0
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %15 = f32[] aten::expand(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %16 = f32[] aten::mul(%15, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[]
  %17 = f32[4]{0} aten::expand(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4]{0}, size=(4)
  %18 = f32[4]{0} aten::div(%17, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4]{0}
  %19 = f32[1,4]{1,0} aten::as_strided(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %20 = f32[1,4]{1,0} aten::mm(%19, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[1,4]{1,0}
  %21 = f32[4]{0} aten::as_strided(%20) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %22 = f32[1,4]{1,0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::mm(%22, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[1,4]{1,0}
  %24 = f32[4]{0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::mm(%25, %4) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[1,4]{1,0}
  %27 = f32[4]{0} aten::as_strided(%26) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %28 = f32[1,4]{1,0} aten::as_strided(%27) tensor_ids = [1, 2, 3, 87, 92, 93, 94, 95, 96, 97, 98, 99], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %29 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[], value=1
  %30 = f32[4]{0} aten::expand(%29) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %31 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %32 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%31) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %33 = f32[4]{0} aten::mul(%32, %30) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %34 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %35 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%34) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %36 = f32[4,4]{0,1} aten::permute(%35) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %37 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94, 95, 98, 99], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %38 = f32[1,4]{1,0} aten::as_strided(%37) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %39 = f32[1,4]{1,0} aten::mm(%38, %36) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %40 = f32[4]{0} aten::as_strided(%39) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %41 = f32[4]{0} aten::add(%40, %33) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %42 = f32[1,4]{1,0} aten::as_strided(%41) tensor_ids = [3, 87, 98, 99], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %43 = f32[4,1]{0,1} aten::permute(%42) tensor_ids = [3, 87, 98, 99], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %44 = f32[4,4]{1,0} aten::mm(%43, %28) tensor_ids = [3, 87, 98, 99], xla_shape=f32[4,4]{1,0}
  %45 = f32[4,4]{0,1} aten::permute(%44) tensor_ids = [3, 87, 98, 99], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %46 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%45) tensor_ids = [3, 87, 98, 99], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %47 = f32[] xla::device_data() tensor_ids = [3, 99], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %48 = f32[] prim::Constant() tensor_ids = [3, 99], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %49 = f32[4,4]{1,0} aten::expand(%48) tensor_ids = [3, 99], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %50 = f32[4,4]{1,0} aten::mul(%49, %47) tensor_ids = [3, 99], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %51 = f32[4,4]{1,0} aten::addcmul(%50, %46, %46, %0) tensor_ids = [3, 99], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=100, shape=f32[4]{0}, device=NEURON:0, ir_nodes=36
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4, 100], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [4, 100], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %7 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %8 = f32[4,4]{0,1} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %9 = f32[4,4]{1,0} aten::permute(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %10 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %11 = f32[4,4]{0,1} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %12 = f32[4,4]{1,0} aten::permute(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[], device=NEURON:0
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %16 = f32[] aten::expand(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %17 = f32[] aten::mul(%16, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[]
  %18 = f32[4]{0} aten::expand(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4]{0}, size=(4)
  %19 = f32[4]{0} aten::div(%18, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4]{0}
  %20 = f32[1,4]{1,0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %21 = f32[1,4]{1,0} aten::mm(%20, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[1,4]{1,0}
  %22 = f32[4]{0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::as_strided(%22) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %24 = f32[1,4]{1,0} aten::mm(%23, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[1,4]{1,0}
  %25 = f32[4]{0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::as_strided(%25) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %27 = f32[1,4]{1,0} aten::mm(%26, %5) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100], xla_shape=f32[1,4]{1,0}
  %28 = f32[4]{0} aten::as_strided(%27) tensor_ids = [4, 86, 100], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %29 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%28) tensor_ids = [4, 86, 100], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %30 = f32[4]{0} aten::mul(%29, %1) tensor_ids = [4, 100], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %31 = f32[] xla::device_data() tensor_ids = [4, 100], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %32 = f32[] prim::Constant() tensor_ids = [4, 100], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %33 = f32[4]{0} aten::expand(%32) tensor_ids = [4, 100], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %34 = f32[4]{0} aten::mul(%33, %31) tensor_ids = [4, 100], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %35 = f32[4]{0} aten::add(%34, %30) tensor_ids = [4, 100], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=101, shape=f32[4]{0}, device=NEURON:0, ir_nodes=34
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4, 101], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %2 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %3 = f32[4,4]{0,1} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %4 = f32[4,4]{1,0} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %5 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %6 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,4]{0,1} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %8 = f32[4,4]{1,0} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %9 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %10 = f32[4,4]{0,1} aten::permute(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %11 = f32[4,4]{1,0} aten::permute(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %12 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[], device=NEURON:0
  %13 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[], device=NEURON:0
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %15 = f32[] aten::expand(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %16 = f32[] aten::mul(%15, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[]
  %17 = f32[4]{0} aten::expand(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4]{0}, size=(4)
  %18 = f32[4]{0} aten::div(%17, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4]{0}
  %19 = f32[1,4]{1,0} aten::as_strided(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %20 = f32[1,4]{1,0} aten::mm(%19, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[1,4]{1,0}
  %21 = f32[4]{0} aten::as_strided(%20) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %22 = f32[1,4]{1,0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %23 = f32[1,4]{1,0} aten::mm(%22, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[1,4]{1,0}
  %24 = f32[4]{0} aten::as_strided(%23) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %25 = f32[1,4]{1,0} aten::as_strided(%24) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %26 = f32[1,4]{1,0} aten::mm(%25, %4) tensor_ids = [1, 2, 3, 4, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101], xla_shape=f32[1,4]{1,0}
  %27 = f32[4]{0} aten::as_strided(%26) tensor_ids = [4, 86, 100, 101], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %28 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%27) tensor_ids = [4, 86, 100, 101], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %29 = f32[] xla::device_data() tensor_ids = [4, 101], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %30 = f32[] prim::Constant() tensor_ids = [4, 101], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %31 = f32[4]{0} aten::expand(%30) tensor_ids = [4, 101], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %32 = f32[4]{0} aten::mul(%31, %29) tensor_ids = [4, 101], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %33 = f32[4]{0} aten::addcmul(%32, %28, %28, %0) tensor_ids = [4, 101], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=102, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=59
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [5, 102], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [5, 102], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,4]{0,1} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %8 = f32[4,4]{1,0} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[], device=NEURON:0
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[], device=NEURON:0
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %12 = f32[] aten::expand(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %13 = f32[] aten::mul(%12, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[]
  %14 = f32[4]{0} aten::expand(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4]{0}, size=(4)
  %15 = f32[4]{0} aten::div(%14, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4]{0}
  %16 = f32[1,4]{1,0} aten::as_strided(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %17 = f32[1,4]{1,0} aten::mm(%16, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[1,4]{1,0}
  %18 = f32[4]{0} aten::as_strided(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %19 = f32[1,4]{1,0} aten::as_strided(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %20 = f32[1,4]{1,0} aten::mm(%19, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[1,4]{1,0}
  %21 = f32[4]{0} aten::as_strided(%20) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %22 = f32[1,4]{1,0} aten::as_strided(%21) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %23 = f32[] prim::Constant() tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[], value=1
  %24 = f32[4]{0} aten::expand(%23) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %25 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42, 44, 58, 78, 102], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %26 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%25) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %27 = f32[4]{0} aten::mul(%26, %24) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %28 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %29 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%28) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %30 = f32[4,4]{0,1} aten::permute(%29) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %31 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[], value=1
  %32 = f32[4]{0} aten::expand(%31) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %33 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %34 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%33) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %35 = f32[4]{0} aten::mul(%34, %32) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %36 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %37 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%36) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %38 = f32[4,4]{0,1} aten::permute(%37) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %39 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94, 95, 98, 99, 102], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %40 = f32[1,4]{1,0} aten::as_strided(%39) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %41 = f32[1,4]{1,0} aten::mm(%40, %38) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %42 = f32[4]{0} aten::as_strided(%41) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %43 = f32[4]{0} aten::add(%42, %35) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %44 = f32[1,4]{1,0} aten::as_strided(%43) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %45 = f32[1,4]{1,0} aten::mm(%44, %30) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %46 = f32[4]{0} aten::as_strided(%45) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %47 = f32[4]{0} aten::add(%46, %27) tensor_ids = [5, 7, 42, 44, 58, 78, 102], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %48 = f32[1,4]{1,0} aten::as_strided(%47) tensor_ids = [5, 78, 102], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %49 = f32[4,1]{0,1} aten::permute(%48) tensor_ids = [5, 78, 102], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %50 = f32[4,4]{1,0} aten::mm(%49, %22) tensor_ids = [5, 78, 102], xla_shape=f32[4,4]{1,0}
  %51 = f32[4,4]{0,1} aten::permute(%50) tensor_ids = [5, 78, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %52 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%51) tensor_ids = [5, 78, 102], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %53 = f32[4,4]{1,0} aten::mul(%52, %1) tensor_ids = [5, 102], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %54 = f32[] xla::device_data() tensor_ids = [5, 102], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %55 = f32[] prim::Constant() tensor_ids = [5, 102], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %56 = f32[4,4]{1,0} aten::expand(%55) tensor_ids = [5, 102], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %57 = f32[4,4]{1,0} aten::mul(%56, %54) tensor_ids = [5, 102], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %58 = f32[4,4]{1,0} aten::add(%57, %53) tensor_ids = [5, 102], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=103, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=57
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [5, 103], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %2 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %3 = f32[4,4]{0,1} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %4 = f32[4,4]{1,0} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[], device=NEURON:0
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %11 = f32[] aten::expand(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %12 = f32[] aten::mul(%11, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[]
  %13 = f32[4]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4]{0}, size=(4)
  %14 = f32[4]{0} aten::div(%13, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4]{0}
  %15 = f32[1,4]{1,0} aten::as_strided(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %16 = f32[1,4]{1,0} aten::mm(%15, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[1,4]{1,0}
  %17 = f32[4]{0} aten::as_strided(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %18 = f32[1,4]{1,0} aten::as_strided(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %19 = f32[1,4]{1,0} aten::mm(%18, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[1,4]{1,0}
  %20 = f32[4]{0} aten::as_strided(%19) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %21 = f32[1,4]{1,0} aten::as_strided(%20) tensor_ids = [1, 2, 3, 4, 5, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %22 = f32[] prim::Constant() tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[], value=1
  %23 = f32[4]{0} aten::expand(%22) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %24 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42, 44, 58, 78, 102, 103], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %25 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%24) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %26 = f32[4]{0} aten::mul(%25, %23) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %27 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102, 103], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %28 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%27) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %29 = f32[4,4]{0,1} aten::permute(%28) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %30 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[], value=1
  %31 = f32[4]{0} aten::expand(%30) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %32 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %33 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%32) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %34 = f32[4]{0} aten::mul(%33, %31) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %35 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %36 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%35) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %37 = f32[4,4]{0,1} aten::permute(%36) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %38 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94, 95, 98, 99, 102, 103], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %39 = f32[1,4]{1,0} aten::as_strided(%38) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %40 = f32[1,4]{1,0} aten::mm(%39, %37) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %41 = f32[4]{0} aten::as_strided(%40) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %42 = f32[4]{0} aten::add(%41, %34) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %43 = f32[1,4]{1,0} aten::as_strided(%42) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %44 = f32[1,4]{1,0} aten::mm(%43, %29) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %45 = f32[4]{0} aten::as_strided(%44) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %46 = f32[4]{0} aten::add(%45, %26) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %47 = f32[1,4]{1,0} aten::as_strided(%46) tensor_ids = [5, 78, 102, 103], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %48 = f32[4,1]{0,1} aten::permute(%47) tensor_ids = [5, 78, 102, 103], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %49 = f32[4,4]{1,0} aten::mm(%48, %21) tensor_ids = [5, 78, 102, 103], xla_shape=f32[4,4]{1,0}
  %50 = f32[4,4]{0,1} aten::permute(%49) tensor_ids = [5, 78, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %51 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%50) tensor_ids = [5, 78, 102, 103], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %52 = f32[] xla::device_data() tensor_ids = [5, 103], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %53 = f32[] prim::Constant() tensor_ids = [5, 103], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %54 = f32[4,4]{1,0} aten::expand(%53) tensor_ids = [5, 103], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %55 = f32[4,4]{1,0} aten::mul(%54, %52) tensor_ids = [5, 103], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %56 = f32[4,4]{1,0} aten::addcmul(%55, %51, %51, %0) tensor_ids = [5, 103], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=104, shape=f32[4]{0}, device=NEURON:0, ir_nodes=29
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [6, 104], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [6, 104], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %3 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %4 = f32[4,4]{0,1} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %5 = f32[4,4]{1,0} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %6 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %7 = f32[4,4]{0,1} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %8 = f32[4,4]{1,0} aten::permute(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[], device=NEURON:0
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[], device=NEURON:0
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %12 = f32[] aten::expand(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %13 = f32[] aten::mul(%12, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[]
  %14 = f32[4]{0} aten::expand(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[4]{0}, size=(4)
  %15 = f32[4]{0} aten::div(%14, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[4]{0}
  %16 = f32[1,4]{1,0} aten::as_strided(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %17 = f32[1,4]{1,0} aten::mm(%16, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[1,4]{1,0}
  %18 = f32[4]{0} aten::as_strided(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %19 = f32[1,4]{1,0} aten::as_strided(%18) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %20 = f32[1,4]{1,0} aten::mm(%19, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104], xla_shape=f32[1,4]{1,0}
  %21 = f32[4]{0} aten::as_strided(%20) tensor_ids = [6, 77, 104], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %22 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%21) tensor_ids = [6, 77, 104], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %23 = f32[4]{0} aten::mul(%22, %1) tensor_ids = [6, 104], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %24 = f32[] xla::device_data() tensor_ids = [6, 104], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %25 = f32[] prim::Constant() tensor_ids = [6, 104], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %26 = f32[4]{0} aten::expand(%25) tensor_ids = [6, 104], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %27 = f32[4]{0} aten::mul(%26, %24) tensor_ids = [6, 104], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %28 = f32[4]{0} aten::add(%27, %23) tensor_ids = [6, 104], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=105, shape=f32[4]{0}, device=NEURON:0, ir_nodes=27
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [6, 105], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %2 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %3 = f32[4,4]{0,1} aten::permute(%2) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %4 = f32[4,4]{1,0} aten::permute(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%1) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[], device=NEURON:0
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %11 = f32[] aten::expand(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %12 = f32[] aten::mul(%11, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[]
  %13 = f32[4]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[4]{0}, size=(4)
  %14 = f32[4]{0} aten::div(%13, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[4]{0}
  %15 = f32[1,4]{1,0} aten::as_strided(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %16 = f32[1,4]{1,0} aten::mm(%15, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[1,4]{1,0}
  %17 = f32[4]{0} aten::as_strided(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %18 = f32[1,4]{1,0} aten::as_strided(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %19 = f32[1,4]{1,0} aten::mm(%18, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105], xla_shape=f32[1,4]{1,0}
  %20 = f32[4]{0} aten::as_strided(%19) tensor_ids = [6, 77, 104, 105], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %21 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%20) tensor_ids = [6, 77, 104, 105], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %22 = f32[] xla::device_data() tensor_ids = [6, 105], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %23 = f32[] prim::Constant() tensor_ids = [6, 105], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %24 = f32[4]{0} aten::expand(%23) tensor_ids = [6, 105], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %25 = f32[4]{0} aten::mul(%24, %22) tensor_ids = [6, 105], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %26 = f32[4]{0} aten::addcmul(%25, %21, %21, %0) tensor_ids = [6, 105], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=106, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=85
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [7, 106], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [7, 106], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[] prim::Constant() tensor_ids = [7, 58, 106], xla_shape=f32[], value=1
  %3 = f32[4,4]{1,0} aten::expand(%2) tensor_ids = [7, 58, 106], xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[], device=NEURON:0
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %11 = f32[] aten::expand(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %12 = f32[] aten::mul(%11, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[]
  %13 = f32[4]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[4]{0}, size=(4)
  %14 = f32[4]{0} aten::div(%13, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[4]{0}
  %15 = f32[1,4]{1,0} aten::as_strided(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %16 = f32[1,4]{1,0} aten::mm(%15, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[1,4]{1,0}
  %17 = f32[4]{0} aten::as_strided(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %18 = f32[1,4]{1,0} aten::as_strided(%17) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %19 = f32[] prim::Constant() tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[], value=1
  %20 = f32[4]{0} aten::expand(%19) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %21 = f32[4]{0} xla::device_data() tensor_ids = [6, 7, 42, 44, 58, 106], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %22 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%21) tensor_ids = [7, 42, 44, 58, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %23 = f32[4]{0} aten::mul(%22, %20) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %24 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 106], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %25 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%24) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %26 = f32[4,4]{0,1} aten::permute(%25) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %27 = f32[] prim::Constant() tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[], value=1
  %28 = f32[4]{0} aten::expand(%27) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %29 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42, 44, 58, 78, 102, 103, 106], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %30 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%29) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %31 = f32[4]{0} aten::mul(%30, %28) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %32 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102, 103, 106], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %33 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%32) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102, 103, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %34 = f32[4,4]{0,1} aten::permute(%33) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %35 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[], value=1
  %36 = f32[4]{0} aten::expand(%35) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %37 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %38 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%37) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %39 = f32[4]{0} aten::mul(%38, %36) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %40 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %41 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%40) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %42 = f32[4,4]{0,1} aten::permute(%41) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %43 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94, 95, 98, 99, 102, 103, 106], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %44 = f32[1,4]{1,0} aten::as_strided(%43) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %45 = f32[1,4]{1,0} aten::mm(%44, %42) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %46 = f32[4]{0} aten::as_strided(%45) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %47 = f32[4]{0} aten::add(%46, %39) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %48 = f32[1,4]{1,0} aten::as_strided(%47) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %49 = f32[1,4]{1,0} aten::mm(%48, %34) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %50 = f32[4]{0} aten::as_strided(%49) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %51 = f32[4]{0} aten::add(%50, %31) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %52 = f32[1,4]{1,0} aten::as_strided(%51) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %53 = f32[1,4]{1,0} aten::mm(%52, %26) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %54 = f32[4]{0} aten::as_strided(%53) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %55 = f32[4]{0} aten::add(%54, %23) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %56 = f32[1,4]{1,0} aten::as_strided(%55) tensor_ids = [7, 58, 106], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %57 = f32[4,1]{0,1} aten::permute(%56) tensor_ids = [7, 58, 106], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %58 = f32[4,4]{1,0} aten::mm(%57, %18) tensor_ids = [7, 58, 106], xla_shape=f32[4,4]{1,0}
  %59 = f32[4,4]{0,1} aten::permute(%58) tensor_ids = [7, 58, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %60 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%59) tensor_ids = [7, 58, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %61 = f32[4,4]{1,0} aten::mul(%60, %3) tensor_ids = [7, 58, 106], xla_shape=f32[4,4]{1,0}
  %62 = f32[] prim::Constant() tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[], value=1
  %63 = f32[4]{0} aten::expand(%62) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %64 = f32[4]{0} xla::device_data() tensor_ids = [7, 8, 42, 44, 58, 106], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %65 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%64) tensor_ids = [7, 42, 44, 58, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %66 = f32[4]{0} aten::mul(%65, %63) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %67 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %68 = f32[4,4]{0,1} aten::permute(%67) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %69 = f32[1,4]{1,0} aten::as_strided(%55) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %70 = f32[1,4]{1,0} aten::mm(%69, %68) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %71 = f32[4]{0} aten::as_strided(%70) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %72 = f32[4]{0} aten::add(%71, %66) tensor_ids = [7, 42, 44, 58, 106], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %73 = f32[1,4]{1,0} aten::as_strided(%72) tensor_ids = [7, 58, 106], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %74 = f32[4,1]{0,1} aten::permute(%73) tensor_ids = [7, 58, 106], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %75 = f32[4,4]{1,0} aten::mm(%74, %15) tensor_ids = [7, 58, 106], xla_shape=f32[4,4]{1,0}
  %76 = f32[4,4]{0,1} aten::permute(%75) tensor_ids = [7, 58, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %77 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%76) tensor_ids = [7, 58, 106], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %78 = f32[4,4]{1,0} aten::add(%77, %61) tensor_ids = [7, 58, 106], xla_shape=f32[4,4]{1,0}
  %79 = f32[4,4]{1,0} aten::mul(%78, %1) tensor_ids = [7, 106], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %80 = f32[] xla::device_data() tensor_ids = [7, 106], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %81 = f32[] prim::Constant() tensor_ids = [7, 106], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %82 = f32[4,4]{1,0} aten::expand(%81) tensor_ids = [7, 106], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %83 = f32[4,4]{1,0} aten::mul(%82, %80) tensor_ids = [7, 106], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %84 = f32[4,4]{1,0} aten::add(%83, %79) tensor_ids = [7, 106], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=107, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=83
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [7, 107], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [7, 58, 106, 107], xla_shape=f32[], value=1
  %2 = f32[4,4]{1,0} aten::expand(%1) tensor_ids = [7, 58, 106, 107], xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %3 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %4 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %5 = f32[4,4]{0,1} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %6 = f32[4,4]{1,0} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %7 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[], device=NEURON:0
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %10 = f32[] aten::expand(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %11 = f32[] aten::mul(%10, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[]
  %12 = f32[4]{0} aten::expand(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[4]{0}, size=(4)
  %13 = f32[4]{0} aten::div(%12, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[4]{0}
  %14 = f32[1,4]{1,0} aten::as_strided(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %15 = f32[1,4]{1,0} aten::mm(%14, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[1,4]{1,0}
  %16 = f32[4]{0} aten::as_strided(%15) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %17 = f32[1,4]{1,0} aten::as_strided(%16) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %18 = f32[] prim::Constant() tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[], value=1
  %19 = f32[4]{0} aten::expand(%18) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %20 = f32[4]{0} xla::device_data() tensor_ids = [6, 7, 42, 44, 58, 106, 107], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %21 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%20) tensor_ids = [7, 42, 44, 58, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %22 = f32[4]{0} aten::mul(%21, %19) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %23 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 106, 107], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %24 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%23) tensor_ids = [1, 2, 3, 4, 7, 42, 44, 58, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %25 = f32[4,4]{0,1} aten::permute(%24) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %26 = f32[] prim::Constant() tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[], value=1
  %27 = f32[4]{0} aten::expand(%26) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %28 = f32[4]{0} xla::device_data() tensor_ids = [4, 5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %29 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%28) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %30 = f32[4]{0} aten::mul(%29, %27) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %31 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102, 103, 106, 107], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %32 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%31) tensor_ids = [1, 2, 5, 7, 42, 44, 58, 78, 92, 93, 94, 95, 96, 97, 102, 103, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %33 = f32[4,4]{0,1} aten::permute(%32) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %34 = f32[] prim::Constant() tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[], value=1
  %35 = f32[4]{0} aten::expand(%34) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %36 = f32[4]{0} xla::device_data() tensor_ids = [2, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %37 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%36) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %38 = f32[4]{0} aten::mul(%37, %35) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %39 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %40 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%39) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %41 = f32[4,4]{0,1} aten::permute(%40) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %42 = f32[4]{0} xla::device_data() tensor_ids = [1, 3, 5, 7, 11, 42, 44, 58, 78, 87, 93, 94, 95, 98, 99, 102, 103, 106, 107], location=train_model@run_simple_model.py:65, xla_shape=f32[4]{0}, device=NEURON:0
  %43 = f32[1,4]{1,0} aten::as_strided(%42) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %44 = f32[1,4]{1,0} aten::mm(%43, %41) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %45 = f32[4]{0} aten::as_strided(%44) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %46 = f32[4]{0} aten::add(%45, %38) tensor_ids = [3, 5, 7, 42, 44, 58, 78, 87, 98, 99, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %47 = f32[1,4]{1,0} aten::as_strided(%46) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %48 = f32[1,4]{1,0} aten::mm(%47, %33) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %49 = f32[4]{0} aten::as_strided(%48) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %50 = f32[4]{0} aten::add(%49, %30) tensor_ids = [5, 7, 42, 44, 58, 78, 102, 103, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %51 = f32[1,4]{1,0} aten::as_strided(%50) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %52 = f32[1,4]{1,0} aten::mm(%51, %25) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %53 = f32[4]{0} aten::as_strided(%52) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %54 = f32[4]{0} aten::add(%53, %22) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %55 = f32[1,4]{1,0} aten::as_strided(%54) tensor_ids = [7, 58, 106, 107], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %56 = f32[4,1]{0,1} aten::permute(%55) tensor_ids = [7, 58, 106, 107], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %57 = f32[4,4]{1,0} aten::mm(%56, %17) tensor_ids = [7, 58, 106, 107], xla_shape=f32[4,4]{1,0}
  %58 = f32[4,4]{0,1} aten::permute(%57) tensor_ids = [7, 58, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %59 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%58) tensor_ids = [7, 58, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %60 = f32[4,4]{1,0} aten::mul(%59, %2) tensor_ids = [7, 58, 106, 107], xla_shape=f32[4,4]{1,0}
  %61 = f32[] prim::Constant() tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[], value=1
  %62 = f32[4]{0} aten::expand(%61) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4)
  %63 = f32[4]{0} xla::device_data() tensor_ids = [7, 8, 42, 44, 58, 106, 107], location=convert@module.py:1158, xla_shape=f32[4]{0}, device=NEURON:0
  %64 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%63) tensor_ids = [7, 42, 44, 58, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %65 = f32[4]{0} aten::mul(%64, %62) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %66 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 42, 44, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %67 = f32[4,4]{0,1} aten::permute(%66) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %68 = f32[1,4]{1,0} aten::as_strided(%54) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %69 = f32[1,4]{1,0} aten::mm(%68, %67) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[1,4]{1,0}
  %70 = f32[4]{0} aten::as_strided(%69) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %71 = f32[4]{0} aten::add(%70, %65) tensor_ids = [7, 42, 44, 58, 106, 107], location=forward@linear.py:114, xla_shape=f32[4]{0}
  %72 = f32[1,4]{1,0} aten::as_strided(%71) tensor_ids = [7, 58, 106, 107], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %73 = f32[4,1]{0,1} aten::permute(%72) tensor_ids = [7, 58, 106, 107], xla_shape=f32[4,1]{0,1}, dims=(1, 0)
  %74 = f32[4,4]{1,0} aten::mm(%73, %14) tensor_ids = [7, 58, 106, 107], xla_shape=f32[4,4]{1,0}
  %75 = f32[4,4]{0,1} aten::permute(%74) tensor_ids = [7, 58, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %76 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%75) tensor_ids = [7, 58, 106, 107], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %77 = f32[4,4]{1,0} aten::add(%76, %60) tensor_ids = [7, 58, 106, 107], xla_shape=f32[4,4]{1,0}
  %78 = f32[] xla::device_data() tensor_ids = [7, 107], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %79 = f32[] prim::Constant() tensor_ids = [7, 107], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %80 = f32[4,4]{1,0} aten::expand(%79) tensor_ids = [7, 107], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %81 = f32[4,4]{1,0} aten::mul(%80, %78) tensor_ids = [7, 107], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %82 = f32[4,4]{1,0} aten::addcmul(%81, %77, %77, %0) tensor_ids = [7, 107], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=108, shape=f32[4]{0}, device=NEURON:0, ir_nodes=28
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [8, 108], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [8, 108], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[] prim::Constant() tensor_ids = [8, 57, 108], xla_shape=f32[], value=1
  %3 = f32[4]{0} aten::expand(%2) tensor_ids = [8, 57, 108], xla_shape=f32[4]{0}, size=(4)
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %5 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %6 = f32[4,4]{0,1} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %7 = f32[4,4]{1,0} aten::permute(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[], device=NEURON:0
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %11 = f32[] aten::expand(%10) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %12 = f32[] aten::mul(%11, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[]
  %13 = f32[4]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[4]{0}, size=(4)
  %14 = f32[4]{0} aten::div(%13, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[4]{0}
  %15 = f32[1,4]{1,0} aten::as_strided(%14) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %16 = f32[1,4]{1,0} aten::mm(%15, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108], xla_shape=f32[1,4]{1,0}
  %17 = f32[4]{0} aten::as_strided(%16) tensor_ids = [8, 57, 108], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %18 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%17) tensor_ids = [8, 57, 108], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %19 = f32[4]{0} aten::mul(%18, %3) tensor_ids = [8, 57, 108], xla_shape=f32[4]{0}
  %20 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%14) tensor_ids = [8, 57, 108], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %21 = f32[4]{0} aten::add(%20, %19) tensor_ids = [8, 57, 108], xla_shape=f32[4]{0}
  %22 = f32[4]{0} aten::mul(%21, %1) tensor_ids = [8, 108], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %23 = f32[] xla::device_data() tensor_ids = [8, 108], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %24 = f32[] prim::Constant() tensor_ids = [8, 108], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %25 = f32[4]{0} aten::expand(%24) tensor_ids = [8, 108], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %26 = f32[4]{0} aten::mul(%25, %23) tensor_ids = [8, 108], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %27 = f32[4]{0} aten::add(%26, %22) tensor_ids = [8, 108], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=109, shape=f32[4]{0}, device=NEURON:0, ir_nodes=26
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  train_model (run_simple_model.py:70)
  <module> (run_simple_model.py:89)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [8, 109], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [8, 57, 108, 109], xla_shape=f32[], value=1
  %2 = f32[4]{0} aten::expand(%1) tensor_ids = [8, 57, 108, 109], xla_shape=f32[4]{0}, size=(4)
  %3 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], location=convert@module.py:1158, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %4 = f32[4,4]{1,0} xla::_op_TransferWithStaticRingTransfer(%3) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 42, 44, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, computation=TransferWithStaticRingTransfer
  %5 = f32[4,4]{0,1} aten::permute(%4) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[4,4]{0,1}, dims=(1, 0)
  %6 = f32[4,4]{1,0} aten::permute(%5) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[4,4]{1,0}, dims=(1, 0)
  %7 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[], device=NEURON:0
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], location=_make_grads@__init__.py:127, xla_shape=f32[], value=1
  %10 = f32[] aten::expand(%9) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], location=_make_grads@__init__.py:127, xla_shape=f32[], size=(), dynamic_dims=()
  %11 = f32[] aten::mul(%10, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[]
  %12 = f32[4]{0} aten::expand(%11) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[4]{0}, size=(4)
  %13 = f32[4]{0} aten::div(%12, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[4]{0}
  %14 = f32[1,4]{1,0} aten::as_strided(%13) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[1,4]{1,0}, size=(1, 4), stride=(4, 1), storage_offset=0
  %15 = f32[1,4]{1,0} aten::mm(%14, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 7, 8, 57, 58, 77, 78, 86, 87, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109], xla_shape=f32[1,4]{1,0}
  %16 = f32[4]{0} aten::as_strided(%15) tensor_ids = [8, 57, 108, 109], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, size=(4), stride=(1), storage_offset=0
  %17 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%16) tensor_ids = [8, 57, 108, 109], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %18 = f32[4]{0} aten::mul(%17, %2) tensor_ids = [8, 57, 108, 109], xla_shape=f32[4]{0}
  %19 = f32[4]{0} xla::_op_TransferWithStaticRingTransfer(%13) tensor_ids = [8, 57, 108, 109], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, computation=TransferWithStaticRingTransfer
  %20 = f32[4]{0} aten::add(%19, %18) tensor_ids = [8, 57, 108, 109], xla_shape=f32[4]{0}
  %21 = f32[] xla::device_data() tensor_ids = [8, 109], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %22 = f32[] prim::Constant() tensor_ids = [8, 109], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %23 = f32[4]{0} aten::expand(%22) tensor_ids = [8, 109], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %24 = f32[4]{0} aten::mul(%23, %21) tensor_ids = [8, 109], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %25 = f32[4]{0} aten::addcmul(%24, %20, %20, %0) tensor_ids = [8, 109], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}
    `;
const [irNodesMap, nodeRelations, x6Graph] = pb2X6(input)
console.log("111", irNodesMap)
