import CryptoJS from 'crypto-js';
import fs from 'fs';
import path from 'path';

function pb2X6() {
    const input = `
        Tensor report begins: 0
Tensor: id=1, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=100
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[] prim::Constant() tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14) tensor_ids = [1], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[4]{0} aten::mul(%27.0, %27.0) tensor_ids = [1], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4,4]{1,0} aten::mul(%27.2, %27.2) tensor_ids = [1], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[4,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[1]{0} xla::device_data() tensor_ids = [1], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %58 = f32[1]{0} aten::add(%57, %56) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %49) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %42) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %35) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::div(%61, %28) tensor_ids = [1], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %63 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%62, %27.4) tensor_ids = [1], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %64 = f32[1]{0} aten::pow(%63.0, %13) tensor_ids = [1], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %65 = f32[1]{0} aten::add(%64, %11) tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %66 = f32[1]{0} aten::reciprocal(%65) tensor_ids = [1], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %67 = f32[1]{0} aten::mul(%66, %8) tensor_ids = [1], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %68 = f32[1]{0} aten::expand(%67) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %69 = s64[] prim::Constant() tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %70 = pred[1]{0} aten::lt(%67, %69) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %71 = pred[1]{0} aten::expand(%70) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %72 = f32[1]{0} aten::where(%71, %68, %7) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %73 = f32[4,4]{1,0} aten::mul(%27.3, %72) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %74 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %75 = f32[] prim::Constant() tensor_ids = [1], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %76 = f32[4,4]{1,0} aten::expand(%75) tensor_ids = [1], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %77 = f32[4,4]{1,0} aten::mul(%76, %74) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %78 = f32[4,4]{1,0} aten::addcmul(%77, %73, %73, %5) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %79 = f32[4,4]{1,0} aten::sqrt(%78) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %80 = f32[4,4]{1,0} aten::div(%79, %4) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %81 = f32[4,4]{1,0} aten::add(%80, %3) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %82 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %83 = f32[4,4]{1,0} aten::expand(%82) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %84 = f32[4,4]{1,0} aten::mul(%73, %83) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %85 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %86 = f32[] prim::Constant() tensor_ids = [1], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %87 = f32[4,4]{1,0} aten::expand(%86) tensor_ids = [1], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %88 = f32[4,4]{1,0} aten::mul(%87, %85) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %89 = f32[4,4]{1,0} aten::add(%88, %84) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %90 = f32[] prim::Constant() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %91 = f32[4,4]{1,0} aten::expand(%90) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %92 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %93 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %94 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %95 = f32[4,4]{1,0} aten::mul(%94, %93) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %96 = f32[4,4]{1,0} aten::mul(%95, %92) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %97 = f32[4,4]{1,0} aten::mul(%96, %91) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %98 = f32[4,4]{1,0} aten::sub(%94, %97) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %99 = f32[4,4]{1,0} aten::addcdiv(%98, %89, %81, %0) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=2, shape=f32[4]{0}, device=NEURON:0, ir_nodes=100
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[] prim::Constant() tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14) tensor_ids = [1, 2], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[4]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4,4]{1,0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[4,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[1]{0} xla::device_data() tensor_ids = [1, 2], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %58 = f32[1]{0} aten::add(%57, %56) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %49) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %42) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %35) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::div(%61, %28) tensor_ids = [1, 2], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %63 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%62, %27.4) tensor_ids = [1, 2], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %64 = f32[1]{0} aten::pow(%63.0, %13) tensor_ids = [1, 2], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %65 = f32[1]{0} aten::add(%64, %11) tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %66 = f32[1]{0} aten::reciprocal(%65) tensor_ids = [1, 2], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %67 = f32[1]{0} aten::mul(%66, %8) tensor_ids = [1, 2], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %68 = f32[1]{0} aten::expand(%67) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %69 = s64[] prim::Constant() tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %70 = pred[1]{0} aten::lt(%67, %69) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %71 = pred[1]{0} aten::expand(%70) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %72 = f32[1]{0} aten::where(%71, %68, %7) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %73 = f32[4]{0} aten::mul(%27.1, %72) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %74 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %75 = f32[] prim::Constant() tensor_ids = [2], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %76 = f32[4]{0} aten::expand(%75) tensor_ids = [2], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %77 = f32[4]{0} aten::mul(%76, %74) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %78 = f32[4]{0} aten::addcmul(%77, %73, %73, %5) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %79 = f32[4]{0} aten::sqrt(%78) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %80 = f32[4]{0} aten::div(%79, %4) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %81 = f32[4]{0} aten::add(%80, %3) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %82 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %83 = f32[4]{0} aten::expand(%82) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %84 = f32[4]{0} aten::mul(%73, %83) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %85 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %86 = f32[] prim::Constant() tensor_ids = [2], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %87 = f32[4]{0} aten::expand(%86) tensor_ids = [2], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %88 = f32[4]{0} aten::mul(%87, %85) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %89 = f32[4]{0} aten::add(%88, %84) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %90 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %91 = f32[4]{0} aten::expand(%90) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %92 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=0
  %93 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %94 = f32[4]{0} xla::device_data() tensor_ids = [2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, device=NEURON:0
  %95 = f32[4]{0} aten::mul(%94, %93) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %96 = f32[4]{0} aten::mul(%95, %92) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %97 = f32[4]{0} aten::mul(%96, %91) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %98 = f32[4]{0} aten::sub(%94, %97) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %99 = f32[4]{0} aten::addcdiv(%98, %89, %81, %0) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=3, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=100
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[] prim::Constant() tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14) tensor_ids = [1, 2, 3], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[4]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4,4]{1,0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[4,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %58 = f32[1]{0} aten::add(%57, %56) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %49) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %42) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %35) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::div(%61, %28) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %63 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%62, %27.4) tensor_ids = [1, 2, 3], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %64 = f32[1]{0} aten::pow(%63.0, %13) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %65 = f32[1]{0} aten::add(%64, %11) tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %66 = f32[1]{0} aten::reciprocal(%65) tensor_ids = [1, 2, 3], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %67 = f32[1]{0} aten::mul(%66, %8) tensor_ids = [1, 2, 3], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %68 = f32[1]{0} aten::expand(%67) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %69 = s64[] prim::Constant() tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %70 = pred[1]{0} aten::lt(%67, %69) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %71 = pred[1]{0} aten::expand(%70) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %72 = f32[1]{0} aten::where(%71, %68, %7) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %73 = f32[4,4]{1,0} aten::mul(%27.2, %72) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %74 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %75 = f32[] prim::Constant() tensor_ids = [3], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %76 = f32[4,4]{1,0} aten::expand(%75) tensor_ids = [3], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %77 = f32[4,4]{1,0} aten::mul(%76, %74) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %78 = f32[4,4]{1,0} aten::addcmul(%77, %73, %73, %5) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %79 = f32[4,4]{1,0} aten::sqrt(%78) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %80 = f32[4,4]{1,0} aten::div(%79, %4) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %81 = f32[4,4]{1,0} aten::add(%80, %3) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %82 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %83 = f32[4,4]{1,0} aten::expand(%82) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %84 = f32[4,4]{1,0} aten::mul(%73, %83) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %85 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %86 = f32[] prim::Constant() tensor_ids = [3], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %87 = f32[4,4]{1,0} aten::expand(%86) tensor_ids = [3], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %88 = f32[4,4]{1,0} aten::mul(%87, %85) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %89 = f32[4,4]{1,0} aten::add(%88, %84) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %90 = f32[] prim::Constant() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %91 = f32[4,4]{1,0} aten::expand(%90) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %92 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %93 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %94 = f32[4,4]{1,0} xla::device_data() tensor_ids = [3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %95 = f32[4,4]{1,0} aten::mul(%94, %93) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %96 = f32[4,4]{1,0} aten::mul(%95, %92) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %97 = f32[4,4]{1,0} aten::mul(%96, %91) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %98 = f32[4,4]{1,0} aten::sub(%94, %97) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %99 = f32[4,4]{1,0} aten::addcdiv(%98, %89, %81, %0) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=4, shape=f32[4]{0}, device=NEURON:0, ir_nodes=100
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:0
  %5 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %6 = f32[] prim::Constant() tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14) tensor_ids = [1, 2, 3, 4], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[4]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3, 4], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3, 4], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3, 4], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3, 4], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3, 4], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3, 4], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4,4]{1,0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3, 4], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3, 4], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3, 4], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[4,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3, 4], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3, 4], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3, 4], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %58 = f32[1]{0} aten::add(%57, %56) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %49) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %42) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %35) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::div(%61, %28) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %63 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%62, %27.4) tensor_ids = [1, 2, 3, 4], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %64 = f32[1]{0} aten::pow(%63.0, %13) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %65 = f32[1]{0} aten::add(%64, %11) tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %66 = f32[1]{0} aten::reciprocal(%65) tensor_ids = [1, 2, 3, 4], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %67 = f32[1]{0} aten::mul(%66, %8) tensor_ids = [1, 2, 3, 4], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %68 = f32[1]{0} aten::expand(%67) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %69 = s64[] prim::Constant() tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %70 = pred[1]{0} aten::lt(%67, %69) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %71 = pred[1]{0} aten::expand(%70) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %72 = f32[1]{0} aten::where(%71, %68, %7) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %73 = f32[4]{0} aten::mul(%27.0, %72) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %74 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %75 = f32[] prim::Constant() tensor_ids = [4], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %76 = f32[4]{0} aten::expand(%75) tensor_ids = [4], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %77 = f32[4]{0} aten::mul(%76, %74) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %78 = f32[4]{0} aten::addcmul(%77, %73, %73, %5) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %79 = f32[4]{0} aten::sqrt(%78) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %80 = f32[4]{0} aten::div(%79, %4) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %81 = f32[4]{0} aten::add(%80, %3) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %82 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %83 = f32[4]{0} aten::expand(%82) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %84 = f32[4]{0} aten::mul(%73, %83) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %85 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %86 = f32[] prim::Constant() tensor_ids = [4], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %87 = f32[4]{0} aten::expand(%86) tensor_ids = [4], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %88 = f32[4]{0} aten::mul(%87, %85) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %89 = f32[4]{0} aten::add(%88, %84) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %90 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %91 = f32[4]{0} aten::expand(%90) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %92 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=0
  %93 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:0
  %94 = f32[4]{0} xla::device_data() tensor_ids = [4], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, device=NEURON:0
  %95 = f32[4]{0} aten::mul(%94, %93) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %96 = f32[4]{0} aten::mul(%95, %92) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %97 = f32[4]{0} aten::mul(%96, %91) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %98 = f32[4]{0} aten::sub(%94, %97) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %99 = f32[4]{0} aten::addcdiv(%98, %89, %81, %0) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=45, shape=f32[4]{0}, device=NEURON:0, ir_nodes=68
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 45], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %17 = f32[4]{0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 45], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 45], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %25 = f32[4]{0} aten::mul(%21.0, %21.0) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %26 = f32[] aten::sum(%25) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %27 = f32[] aten::sqrt(%26) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %28 = f32[] aten::pow(%27, %24) tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %29 = f32[] aten::mul(%28, %23) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[4]{0} aten::mul(%21.1, %21.1) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4,4]{1,0} aten::mul(%21.2, %21.2) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4,4]{1,0} aten::mul(%21.3, %21.3) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 45], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 45], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %52 = f32[1]{0} aten::add(%51, %50) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %53 = f32[1]{0} aten::add(%52, %43) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %36) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %29) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::div(%55, %22) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %57 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%56, %21.4) tensor_ids = [1, 2, 3, 4, 45], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %58 = f32[1]{0} aten::pow(%57.0, %7) tensor_ids = [1, 2, 3, 4, 45], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %5) tensor_ids = [1, 2, 3, 4, 45], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::reciprocal(%59) tensor_ids = [1, 2, 3, 4, 45], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::mul(%60, %2) tensor_ids = [1, 2, 3, 4, 45], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::expand(%61) tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %63 = s64[] prim::Constant() tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %64 = pred[1]{0} aten::lt(%61, %63) tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %65 = pred[1]{0} aten::expand(%64) tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %66 = f32[1]{0} aten::where(%65, %62, %1) tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %67 = f32[4]{0} aten::mul(%21.0, %66) tensor_ids = [4, 45], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=46, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=68
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 45, 46], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %17 = f32[4]{0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 45, 46], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 45, 46], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %25 = f32[4]{0} aten::mul(%21.0, %21.0) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %26 = f32[] aten::sum(%25) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %27 = f32[] aten::sqrt(%26) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %28 = f32[] aten::pow(%27, %24) tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %29 = f32[] aten::mul(%28, %23) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[4]{0} aten::mul(%21.1, %21.1) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4,4]{1,0} aten::mul(%21.2, %21.2) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4,4]{1,0} aten::mul(%21.3, %21.3) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 45, 46], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 45, 46], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %52 = f32[1]{0} aten::add(%51, %50) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %53 = f32[1]{0} aten::add(%52, %43) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %36) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %29) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::div(%55, %22) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %57 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%56, %21.4) tensor_ids = [1, 2, 3, 4, 45, 46], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %58 = f32[1]{0} aten::pow(%57.0, %7) tensor_ids = [1, 2, 3, 4, 45, 46], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %5) tensor_ids = [1, 2, 3, 4, 45, 46], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::reciprocal(%59) tensor_ids = [1, 2, 3, 4, 45, 46], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::mul(%60, %2) tensor_ids = [1, 2, 3, 4, 45, 46], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::expand(%61) tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %63 = s64[] prim::Constant() tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %64 = pred[1]{0} aten::lt(%61, %63) tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %65 = pred[1]{0} aten::expand(%64) tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %66 = f32[1]{0} aten::where(%65, %62, %1) tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %67 = f32[4,4]{1,0} aten::mul(%21.2, %66) tensor_ids = [3, 46], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=52, shape=f32[4]{0}, device=NEURON:0, ir_nodes=68
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %17 = f32[4]{0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 45, 46, 52], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %25 = f32[4]{0} aten::mul(%21.0, %21.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %26 = f32[] aten::sum(%25) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %27 = f32[] aten::sqrt(%26) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %28 = f32[] aten::pow(%27, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %29 = f32[] aten::mul(%28, %23) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[4]{0} aten::mul(%21.1, %21.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4,4]{1,0} aten::mul(%21.2, %21.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4,4]{1,0} aten::mul(%21.3, %21.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 45, 46, 52], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %52 = f32[1]{0} aten::add(%51, %50) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %53 = f32[1]{0} aten::add(%52, %43) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %36) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %29) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::div(%55, %22) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %57 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%56, %21.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %58 = f32[1]{0} aten::pow(%57.0, %7) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %5) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::reciprocal(%59) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::mul(%60, %2) tensor_ids = [1, 2, 3, 4, 45, 46, 52], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::expand(%61) tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %63 = s64[] prim::Constant() tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %64 = pred[1]{0} aten::lt(%61, %63) tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %65 = pred[1]{0} aten::expand(%64) tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %66 = f32[1]{0} aten::where(%65, %62, %1) tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %67 = f32[4]{0} aten::mul(%21.1, %66) tensor_ids = [2, 52], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=53, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=68
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %17 = f32[4]{0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %25 = f32[4]{0} aten::mul(%21.0, %21.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %26 = f32[] aten::sum(%25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %27 = f32[] aten::sqrt(%26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %28 = f32[] aten::pow(%27, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %29 = f32[] aten::mul(%28, %23) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[4]{0} aten::mul(%21.1, %21.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4,4]{1,0} aten::mul(%21.2, %21.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4,4]{1,0} aten::mul(%21.3, %21.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %52 = f32[1]{0} aten::add(%51, %50) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %53 = f32[1]{0} aten::add(%52, %43) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %36) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %29) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::div(%55, %22) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %57 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%56, %21.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %58 = f32[1]{0} aten::pow(%57.0, %7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %59 = f32[1]{0} aten::add(%58, %5) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::reciprocal(%59) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::mul(%60, %2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::expand(%61) tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %63 = s64[] prim::Constant() tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %64 = pred[1]{0} aten::lt(%61, %63) tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %65 = pred[1]{0} aten::expand(%64) tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %66 = f32[1]{0} aten::where(%65, %62, %1) tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %67 = f32[4,4]{1,0} aten::mul(%21.3, %66) tensor_ids = [1, 53], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=99, shape=f32[1]{0}, device=NEURON:0, ir_nodes=53
Frames:
  get_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:136)
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:171)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %5 = f32[4,4]{1,0} aten::div(%4, %3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %7 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %8 = f32[4,4]{1,0} aten::div(%7, %6) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %11 = f32[4]{0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %14 = f32[4]{0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %15 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%14, %11, %8, %5, %2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %19 = f32[4]{0} aten::mul(%15.0, %15.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %20 = f32[] aten::sum(%19) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %21 = f32[] aten::sqrt(%20) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %22 = f32[] aten::pow(%21, %18) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %23 = f32[] aten::mul(%22, %17) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %26 = f32[4]{0} aten::mul(%15.1, %15.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %27 = f32[] aten::sum(%26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %28 = f32[] aten::sqrt(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %29 = f32[] aten::pow(%28, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %30 = f32[] aten::mul(%29, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[4,4]{1,0} aten::mul(%15.2, %15.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4,4]{1,0} aten::mul(%15.3, %15.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %46 = f32[1]{0} aten::add(%45, %44) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %47 = f32[1]{0} aten::add(%46, %37) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %48 = f32[1]{0} aten::add(%47, %30) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %49 = f32[1]{0} aten::add(%48, %23) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %50 = f32[1]{0} aten::div(%49, %16) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %51 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%50, %15.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %52 = f32[1]{0} aten::pow(%51.0, %1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, ROOT=0
}


Tensor: id=133, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=76
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1, 133], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [1, 133], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[] prim::Constant() tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %19 = f32[4]{0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %27 = f32[4]{0} aten::mul(%23.0, %23.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %28 = f32[] aten::sum(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %29 = f32[] aten::sqrt(%28) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %30 = f32[] aten::pow(%29, %26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %31 = f32[] aten::mul(%30, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %33 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %34 = f32[4]{0} aten::mul(%23.1, %23.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %35 = f32[] aten::sum(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %36 = f32[] aten::sqrt(%35) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %37 = f32[] aten::pow(%36, %33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %38 = f32[] aten::mul(%37, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %40 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %41 = f32[4,4]{1,0} aten::mul(%23.2, %23.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %42 = f32[] aten::sum(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %43 = f32[] aten::sqrt(%42) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %44 = f32[] aten::pow(%43, %40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %45 = f32[] aten::mul(%44, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %47 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %48 = f32[4,4]{1,0} aten::mul(%23.3, %23.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %49 = f32[] aten::sum(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %50 = f32[] aten::sqrt(%49) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %51 = f32[] aten::pow(%50, %47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %52 = f32[] aten::mul(%51, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %53 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %54 = f32[1]{0} aten::add(%53, %52) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::add(%56, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %58 = f32[1]{0} aten::div(%57, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %59 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%58, %23.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %60 = f32[1]{0} aten::pow(%59.0, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::reciprocal(%61) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::mul(%62, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %64 = f32[1]{0} aten::expand(%63) tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %65 = s64[] prim::Constant() tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %66 = pred[1]{0} aten::lt(%63, %65) tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %67 = pred[1]{0} aten::expand(%66) tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %68 = f32[1]{0} aten::where(%67, %64, %3) tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %69 = f32[4,4]{1,0} aten::mul(%23.3, %68) tensor_ids = [1, 53, 133], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %70 = f32[4,4]{1,0} aten::mul(%69, %1) tensor_ids = [1, 133], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %71 = f32[] xla::device_data() tensor_ids = [1, 133], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %72 = f32[] prim::Constant() tensor_ids = [1, 133], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %73 = f32[4,4]{1,0} aten::expand(%72) tensor_ids = [1, 133], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %74 = f32[4,4]{1,0} aten::mul(%73, %71) tensor_ids = [1, 133], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %75 = f32[4,4]{1,0} aten::add(%74, %70) tensor_ids = [1, 133], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=134, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=74
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1, 134], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %18 = f32[4]{0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %26 = f32[4]{0} aten::mul(%22.0, %22.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %27 = f32[] aten::sum(%26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %28 = f32[] aten::sqrt(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %29 = f32[] aten::pow(%28, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %30 = f32[] aten::mul(%29, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[4]{0} aten::mul(%22.1, %22.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4,4]{1,0} aten::mul(%22.2, %22.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4,4]{1,0} aten::mul(%22.3, %22.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %53 = f32[1]{0} aten::add(%52, %51) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %44) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %37) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %30) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::div(%56, %23) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %58 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%57, %22.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %59 = f32[1]{0} aten::pow(%58.0, %8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %6) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::reciprocal(%60) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::mul(%61, %3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::expand(%62) tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %64 = s64[] prim::Constant() tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %65 = pred[1]{0} aten::lt(%62, %64) tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %66 = pred[1]{0} aten::expand(%65) tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %67 = f32[1]{0} aten::where(%66, %63, %2) tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %68 = f32[4,4]{1,0} aten::mul(%22.3, %67) tensor_ids = [1, 53, 133, 134], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %69 = f32[] xla::device_data() tensor_ids = [1, 134], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %70 = f32[] prim::Constant() tensor_ids = [1, 134], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %71 = f32[4,4]{1,0} aten::expand(%70) tensor_ids = [1, 134], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %72 = f32[4,4]{1,0} aten::mul(%71, %69) tensor_ids = [1, 134], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %73 = f32[4,4]{1,0} aten::addcmul(%72, %68, %68, %0) tensor_ids = [1, 134], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=135, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=76
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3, 135], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [3, 135], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[] prim::Constant() tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %19 = f32[4]{0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %27 = f32[4]{0} aten::mul(%23.0, %23.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %28 = f32[] aten::sum(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %29 = f32[] aten::sqrt(%28) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %30 = f32[] aten::pow(%29, %26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %31 = f32[] aten::mul(%30, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %33 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %34 = f32[4]{0} aten::mul(%23.1, %23.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %35 = f32[] aten::sum(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %36 = f32[] aten::sqrt(%35) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %37 = f32[] aten::pow(%36, %33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %38 = f32[] aten::mul(%37, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %40 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %41 = f32[4,4]{1,0} aten::mul(%23.2, %23.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %42 = f32[] aten::sum(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %43 = f32[] aten::sqrt(%42) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %44 = f32[] aten::pow(%43, %40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %45 = f32[] aten::mul(%44, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %47 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %48 = f32[4,4]{1,0} aten::mul(%23.3, %23.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %49 = f32[] aten::sum(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %50 = f32[] aten::sqrt(%49) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %51 = f32[] aten::pow(%50, %47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %52 = f32[] aten::mul(%51, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %53 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %54 = f32[1]{0} aten::add(%53, %52) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::add(%56, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %58 = f32[1]{0} aten::div(%57, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %59 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%58, %23.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %60 = f32[1]{0} aten::pow(%59.0, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::reciprocal(%61) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::mul(%62, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %64 = f32[1]{0} aten::expand(%63) tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %65 = s64[] prim::Constant() tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %66 = pred[1]{0} aten::lt(%63, %65) tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %67 = pred[1]{0} aten::expand(%66) tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %68 = f32[1]{0} aten::where(%67, %64, %3) tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %69 = f32[4,4]{1,0} aten::mul(%23.2, %68) tensor_ids = [3, 46, 135], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %70 = f32[4,4]{1,0} aten::mul(%69, %1) tensor_ids = [3, 135], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %71 = f32[] xla::device_data() tensor_ids = [3, 135], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %72 = f32[] prim::Constant() tensor_ids = [3, 135], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %73 = f32[4,4]{1,0} aten::expand(%72) tensor_ids = [3, 135], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %74 = f32[4,4]{1,0} aten::mul(%73, %71) tensor_ids = [3, 135], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %75 = f32[4,4]{1,0} aten::add(%74, %70) tensor_ids = [3, 135], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=136, shape=f32[4,4]{1,0}, device=NEURON:0, ir_nodes=74
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3, 136], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %18 = f32[4]{0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %26 = f32[4]{0} aten::mul(%22.0, %22.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %27 = f32[] aten::sum(%26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %28 = f32[] aten::sqrt(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %29 = f32[] aten::pow(%28, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %30 = f32[] aten::mul(%29, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[4]{0} aten::mul(%22.1, %22.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4,4]{1,0} aten::mul(%22.2, %22.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4,4]{1,0} aten::mul(%22.3, %22.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %53 = f32[1]{0} aten::add(%52, %51) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %44) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %37) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %30) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::div(%56, %23) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %58 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%57, %22.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %59 = f32[1]{0} aten::pow(%58.0, %8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %6) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::reciprocal(%60) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::mul(%61, %3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::expand(%62) tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %64 = s64[] prim::Constant() tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %65 = pred[1]{0} aten::lt(%62, %64) tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %66 = pred[1]{0} aten::expand(%65) tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %67 = f32[1]{0} aten::where(%66, %63, %2) tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %68 = f32[4,4]{1,0} aten::mul(%22.2, %67) tensor_ids = [3, 46, 135, 136], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %69 = f32[] xla::device_data() tensor_ids = [3, 136], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %70 = f32[] prim::Constant() tensor_ids = [3, 136], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %71 = f32[4,4]{1,0} aten::expand(%70) tensor_ids = [3, 136], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %72 = f32[4,4]{1,0} aten::mul(%71, %69) tensor_ids = [3, 136], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %73 = f32[4,4]{1,0} aten::addcmul(%72, %68, %68, %0) tensor_ids = [3, 136], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=171, shape=f32[4]{0}, device=NEURON:0, ir_nodes=76
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2, 171], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [2, 171], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[] prim::Constant() tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %19 = f32[4]{0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %27 = f32[4]{0} aten::mul(%23.0, %23.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %28 = f32[] aten::sum(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %29 = f32[] aten::sqrt(%28) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %30 = f32[] aten::pow(%29, %26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %31 = f32[] aten::mul(%30, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %33 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %34 = f32[4]{0} aten::mul(%23.1, %23.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %35 = f32[] aten::sum(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %36 = f32[] aten::sqrt(%35) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %37 = f32[] aten::pow(%36, %33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %38 = f32[] aten::mul(%37, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %40 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %41 = f32[4,4]{1,0} aten::mul(%23.2, %23.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %42 = f32[] aten::sum(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %43 = f32[] aten::sqrt(%42) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %44 = f32[] aten::pow(%43, %40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %45 = f32[] aten::mul(%44, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %47 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %48 = f32[4,4]{1,0} aten::mul(%23.3, %23.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %49 = f32[] aten::sum(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %50 = f32[] aten::sqrt(%49) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %51 = f32[] aten::pow(%50, %47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %52 = f32[] aten::mul(%51, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %53 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %54 = f32[1]{0} aten::add(%53, %52) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::add(%56, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %58 = f32[1]{0} aten::div(%57, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %59 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%58, %23.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %60 = f32[1]{0} aten::pow(%59.0, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::reciprocal(%61) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::mul(%62, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %64 = f32[1]{0} aten::expand(%63) tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %65 = s64[] prim::Constant() tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %66 = pred[1]{0} aten::lt(%63, %65) tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %67 = pred[1]{0} aten::expand(%66) tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %68 = f32[1]{0} aten::where(%67, %64, %3) tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %69 = f32[4]{0} aten::mul(%23.1, %68) tensor_ids = [2, 52, 171], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %70 = f32[4]{0} aten::mul(%69, %1) tensor_ids = [2, 171], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %71 = f32[] xla::device_data() tensor_ids = [2, 171], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %72 = f32[] prim::Constant() tensor_ids = [2, 171], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %73 = f32[4]{0} aten::expand(%72) tensor_ids = [2, 171], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %74 = f32[4]{0} aten::mul(%73, %71) tensor_ids = [2, 171], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %75 = f32[4]{0} aten::add(%74, %70) tensor_ids = [2, 171], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=172, shape=f32[4]{0}, device=NEURON:0, ir_nodes=74
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2, 172], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %18 = f32[4]{0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %26 = f32[4]{0} aten::mul(%22.0, %22.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %27 = f32[] aten::sum(%26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %28 = f32[] aten::sqrt(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %29 = f32[] aten::pow(%28, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %30 = f32[] aten::mul(%29, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[4]{0} aten::mul(%22.1, %22.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4,4]{1,0} aten::mul(%22.2, %22.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4,4]{1,0} aten::mul(%22.3, %22.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %53 = f32[1]{0} aten::add(%52, %51) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %44) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %37) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %30) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::div(%56, %23) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %58 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%57, %22.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %59 = f32[1]{0} aten::pow(%58.0, %8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %6) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::reciprocal(%60) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::mul(%61, %3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::expand(%62) tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %64 = s64[] prim::Constant() tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %65 = pred[1]{0} aten::lt(%62, %64) tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %66 = pred[1]{0} aten::expand(%65) tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %67 = f32[1]{0} aten::where(%66, %63, %2) tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %68 = f32[4]{0} aten::mul(%22.1, %67) tensor_ids = [2, 52, 171, 172], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %69 = f32[] xla::device_data() tensor_ids = [2, 172], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %70 = f32[] prim::Constant() tensor_ids = [2, 172], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %71 = f32[4]{0} aten::expand(%70) tensor_ids = [2, 172], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %72 = f32[4]{0} aten::mul(%71, %69) tensor_ids = [2, 172], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %73 = f32[4]{0} aten::addcmul(%72, %68, %68, %0) tensor_ids = [2, 172], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=173, shape=f32[4]{0}, device=NEURON:0, ir_nodes=76
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4, 173], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [4, 173], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[] prim::Constant() tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %19 = f32[4]{0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %27 = f32[4]{0} aten::mul(%23.0, %23.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %28 = f32[] aten::sum(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %29 = f32[] aten::sqrt(%28) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %30 = f32[] aten::pow(%29, %26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %31 = f32[] aten::mul(%30, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %33 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %34 = f32[4]{0} aten::mul(%23.1, %23.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %35 = f32[] aten::sum(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %36 = f32[] aten::sqrt(%35) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %37 = f32[] aten::pow(%36, %33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %38 = f32[] aten::mul(%37, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %40 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %41 = f32[4,4]{1,0} aten::mul(%23.2, %23.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %42 = f32[] aten::sum(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %43 = f32[] aten::sqrt(%42) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %44 = f32[] aten::pow(%43, %40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %45 = f32[] aten::mul(%44, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %47 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %48 = f32[4,4]{1,0} aten::mul(%23.3, %23.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %49 = f32[] aten::sum(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %50 = f32[] aten::sqrt(%49) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %51 = f32[] aten::pow(%50, %47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %52 = f32[] aten::mul(%51, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %53 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %54 = f32[1]{0} aten::add(%53, %52) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::add(%56, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %58 = f32[1]{0} aten::div(%57, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %59 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%58, %23.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %60 = f32[1]{0} aten::pow(%59.0, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::add(%60, %7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::reciprocal(%61) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::mul(%62, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %64 = f32[1]{0} aten::expand(%63) tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %65 = s64[] prim::Constant() tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %66 = pred[1]{0} aten::lt(%63, %65) tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %67 = pred[1]{0} aten::expand(%66) tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %68 = f32[1]{0} aten::where(%67, %64, %3) tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %69 = f32[4]{0} aten::mul(%23.0, %68) tensor_ids = [4, 45, 173], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %70 = f32[4]{0} aten::mul(%69, %1) tensor_ids = [4, 173], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %71 = f32[] xla::device_data() tensor_ids = [4, 173], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:0
  %72 = f32[] prim::Constant() tensor_ids = [4, 173], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %73 = f32[4]{0} aten::expand(%72) tensor_ids = [4, 173], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %74 = f32[4]{0} aten::mul(%73, %71) tensor_ids = [4, 173], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %75 = f32[4]{0} aten::add(%74, %70) tensor_ids = [4, 173], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=174, shape=f32[4]{0}, device=NEURON:0, ir_nodes=74
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4, 174], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %1 = f32[] prim::Constant() tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173, 174], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173, 174], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173, 174], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:0
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173, 174], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:0
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:0
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %18 = f32[4]{0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:0
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = (f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], num_outputs=5, location=all_reduce@xla_model.py:484, xla_shape=(f32[4]{0}, f32[4]{0}, f32[4,4]{1,0}, f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %26 = f32[4]{0} aten::mul(%22.0, %22.0) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %27 = f32[] aten::sum(%26) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %28 = f32[] aten::sqrt(%27) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %29 = f32[] aten::pow(%28, %25) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %30 = f32[] aten::mul(%29, %24) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[4]{0} aten::mul(%22.1, %22.1) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4,4]{1,0} aten::mul(%22.2, %22.2) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4,4]{1,0} aten::mul(%22.3, %22.3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:0
  %53 = f32[1]{0} aten::add(%52, %51) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %54 = f32[1]{0} aten::add(%53, %44) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %55 = f32[1]{0} aten::add(%54, %37) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %56 = f32[1]{0} aten::add(%55, %30) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %57 = f32[1]{0} aten::div(%56, %23) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %58 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%57, %22.4) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %59 = f32[1]{0} aten::pow(%58.0, %8) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 99, 133, 134, 135, 136, 171, 172, 173, 174], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %60 = f32[1]{0} aten::add(%59, %6) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173, 174], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %61 = f32[1]{0} aten::reciprocal(%60) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173, 174], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %62 = f32[1]{0} aten::mul(%61, %3) tensor_ids = [1, 2, 3, 4, 45, 46, 52, 53, 133, 134, 135, 136, 171, 172, 173, 174], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %63 = f32[1]{0} aten::expand(%62) tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %64 = s64[] prim::Constant() tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %65 = pred[1]{0} aten::lt(%62, %64) tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %66 = pred[1]{0} aten::expand(%65) tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %67 = f32[1]{0} aten::where(%66, %63, %2) tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %68 = f32[4]{0} aten::mul(%22.0, %67) tensor_ids = [4, 45, 173, 174], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %69 = f32[] xla::device_data() tensor_ids = [4, 174], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:0
  %70 = f32[] prim::Constant() tensor_ids = [4, 174], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %71 = f32[4]{0} aten::expand(%70) tensor_ids = [4, 174], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %72 = f32[4]{0} aten::mul(%71, %69) tensor_ids = [4, 174], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %73 = f32[4]{0} aten::addcmul(%72, %68, %68, %0) tensor_ids = [4, 174], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}


Tensor report begins: 1
Tensor: id=1, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=122
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %5 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %6 = f32[] prim::Constant() tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %15 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %23 = f32[1,4]{1,0} aten::div(%22, %21) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %24 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %28 = f32[4]{0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %29 = f32[4]{0} aten::div(%28, %27) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %30 = f32[] prim::Constant() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %31 = f32[1]{0} xla::device_data() tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %32 = f32[1]{0} aten::div(%31, %30) tensor_ids = [1], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %33 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%32, %29, %26, %23, %20, %17, %14) tensor_ids = [1], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %34 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %35 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %36 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %37 = f32[1]{0} aten::mul(%33.0, %33.0) tensor_ids = [1], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %38 = f32[] aten::sum(%37) tensor_ids = [1], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %39 = f32[] aten::sqrt(%38) tensor_ids = [1], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %40 = f32[] aten::pow(%39, %36) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %41 = f32[] aten::mul(%40, %35) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %42 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %43 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %44 = f32[4]{0} aten::mul(%33.1, %33.1) tensor_ids = [1], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %45 = f32[] aten::sum(%44) tensor_ids = [1], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %46 = f32[] aten::sqrt(%45) tensor_ids = [1], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %47 = f32[] aten::pow(%46, %43) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %48 = f32[] aten::mul(%47, %42) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %49 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %50 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %51 = f32[4]{0} aten::mul(%33.2, %33.2) tensor_ids = [1], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %52 = f32[] aten::sum(%51) tensor_ids = [1], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %53 = f32[] aten::sqrt(%52) tensor_ids = [1], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %54 = f32[] aten::pow(%53, %50) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %55 = f32[] aten::mul(%54, %49) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %56 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %57 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %58 = f32[1,4]{1,0} aten::mul(%33.3, %33.3) tensor_ids = [1], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %59 = f32[] aten::sum(%58) tensor_ids = [1], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %60 = f32[] aten::sqrt(%59) tensor_ids = [1], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %61 = f32[] aten::pow(%60, %57) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %62 = f32[] aten::mul(%61, %56) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %63 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %64 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %65 = f32[4,4]{1,0} aten::mul(%33.4, %33.4) tensor_ids = [1], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %66 = f32[] aten::sum(%65) tensor_ids = [1], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %67 = f32[] aten::sqrt(%66) tensor_ids = [1], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %68 = f32[] aten::pow(%67, %64) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %69 = f32[] aten::mul(%68, %63) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %70 = f32[] prim::Constant() tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %71 = f32[] prim::Constant() tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %72 = f32[4,4]{1,0} aten::mul(%33.5, %33.5) tensor_ids = [1], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %73 = f32[] aten::sum(%72) tensor_ids = [1], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %74 = f32[] aten::sqrt(%73) tensor_ids = [1], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %75 = f32[] aten::pow(%74, %71) tensor_ids = [1], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %76 = f32[] aten::mul(%75, %70) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %77 = f32[1]{0} xla::device_data() tensor_ids = [1], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %78 = f32[1]{0} aten::add(%77, %76) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %69) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::add(%79, %62) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %55) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %48) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %41) tensor_ids = [1], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::div(%83, %34) tensor_ids = [1], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %85 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%84, %33.6) tensor_ids = [1], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %86 = f32[1]{0} aten::pow(%85.0, %13) tensor_ids = [1], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %87 = f32[1]{0} aten::add(%86, %11) tensor_ids = [1], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %88 = f32[1]{0} aten::reciprocal(%87) tensor_ids = [1], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %89 = f32[1]{0} aten::mul(%88, %8) tensor_ids = [1], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %90 = f32[1]{0} aten::expand(%89) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %91 = s64[] prim::Constant() tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %92 = pred[1]{0} aten::lt(%89, %91) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %93 = pred[1]{0} aten::expand(%92) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %94 = f32[1]{0} aten::where(%93, %90, %7) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %95 = f32[4,4]{1,0} aten::mul(%33.5, %94) tensor_ids = [1], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %96 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %97 = f32[] prim::Constant() tensor_ids = [1], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %98 = f32[4,4]{1,0} aten::expand(%97) tensor_ids = [1], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %99 = f32[4,4]{1,0} aten::mul(%98, %96) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %100 = f32[4,4]{1,0} aten::addcmul(%99, %95, %95, %5) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %101 = f32[4,4]{1,0} aten::sqrt(%100) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %102 = f32[4,4]{1,0} aten::div(%101, %4) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %103 = f32[4,4]{1,0} aten::add(%102, %3) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %104 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %105 = f32[4,4]{1,0} aten::expand(%104) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %106 = f32[4,4]{1,0} aten::mul(%95, %105) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %107 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %108 = f32[] prim::Constant() tensor_ids = [1], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %109 = f32[4,4]{1,0} aten::expand(%108) tensor_ids = [1], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %110 = f32[4,4]{1,0} aten::mul(%109, %107) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %111 = f32[4,4]{1,0} aten::add(%110, %106) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %112 = f32[] prim::Constant() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %113 = f32[4,4]{1,0} aten::expand(%112) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %114 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %115 = f32[] xla::device_data() tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %116 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %117 = f32[4,4]{1,0} aten::mul(%116, %115) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %118 = f32[4,4]{1,0} aten::mul(%117, %114) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %119 = f32[4,4]{1,0} aten::mul(%118, %113) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %120 = f32[4,4]{1,0} aten::sub(%116, %119) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %121 = f32[4,4]{1,0} aten::addcdiv(%120, %111, %103, %0) tensor_ids = [1], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=2, shape=f32[4]{0}, device=NEURON:1, ir_nodes=122
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %5 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %6 = f32[] prim::Constant() tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %15 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %23 = f32[1,4]{1,0} aten::div(%22, %21) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %28 = f32[4]{0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %29 = f32[4]{0} aten::div(%28, %27) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %30 = f32[] prim::Constant() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %31 = f32[1]{0} xla::device_data() tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %32 = f32[1]{0} aten::div(%31, %30) tensor_ids = [1, 2], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %33 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%32, %29, %26, %23, %20, %17, %14) tensor_ids = [1, 2], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %34 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %35 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %36 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %37 = f32[1]{0} aten::mul(%33.0, %33.0) tensor_ids = [1, 2], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %38 = f32[] aten::sum(%37) tensor_ids = [1, 2], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %39 = f32[] aten::sqrt(%38) tensor_ids = [1, 2], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %40 = f32[] aten::pow(%39, %36) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %41 = f32[] aten::mul(%40, %35) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %42 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %43 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %44 = f32[4]{0} aten::mul(%33.1, %33.1) tensor_ids = [1, 2], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %45 = f32[] aten::sum(%44) tensor_ids = [1, 2], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %46 = f32[] aten::sqrt(%45) tensor_ids = [1, 2], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %47 = f32[] aten::pow(%46, %43) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %48 = f32[] aten::mul(%47, %42) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %49 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %50 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %51 = f32[4]{0} aten::mul(%33.2, %33.2) tensor_ids = [1, 2], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %52 = f32[] aten::sum(%51) tensor_ids = [1, 2], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %53 = f32[] aten::sqrt(%52) tensor_ids = [1, 2], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %54 = f32[] aten::pow(%53, %50) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %55 = f32[] aten::mul(%54, %49) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %56 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %57 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %58 = f32[1,4]{1,0} aten::mul(%33.3, %33.3) tensor_ids = [1, 2], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %59 = f32[] aten::sum(%58) tensor_ids = [1, 2], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %60 = f32[] aten::sqrt(%59) tensor_ids = [1, 2], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %61 = f32[] aten::pow(%60, %57) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %62 = f32[] aten::mul(%61, %56) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %63 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %64 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %65 = f32[4,4]{1,0} aten::mul(%33.4, %33.4) tensor_ids = [1, 2], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %66 = f32[] aten::sum(%65) tensor_ids = [1, 2], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %67 = f32[] aten::sqrt(%66) tensor_ids = [1, 2], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %68 = f32[] aten::pow(%67, %64) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %69 = f32[] aten::mul(%68, %63) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %70 = f32[] prim::Constant() tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %71 = f32[] prim::Constant() tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %72 = f32[4,4]{1,0} aten::mul(%33.5, %33.5) tensor_ids = [1, 2], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %73 = f32[] aten::sum(%72) tensor_ids = [1, 2], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %74 = f32[] aten::sqrt(%73) tensor_ids = [1, 2], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %75 = f32[] aten::pow(%74, %71) tensor_ids = [1, 2], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %76 = f32[] aten::mul(%75, %70) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %77 = f32[1]{0} xla::device_data() tensor_ids = [1, 2], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %78 = f32[1]{0} aten::add(%77, %76) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %69) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::add(%79, %62) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %55) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %48) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %41) tensor_ids = [1, 2], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::div(%83, %34) tensor_ids = [1, 2], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %85 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%84, %33.6) tensor_ids = [1, 2], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %86 = f32[1]{0} aten::pow(%85.0, %13) tensor_ids = [1, 2], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %87 = f32[1]{0} aten::add(%86, %11) tensor_ids = [1, 2], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %88 = f32[1]{0} aten::reciprocal(%87) tensor_ids = [1, 2], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %89 = f32[1]{0} aten::mul(%88, %8) tensor_ids = [1, 2], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %90 = f32[1]{0} aten::expand(%89) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %91 = s64[] prim::Constant() tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %92 = pred[1]{0} aten::lt(%89, %91) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %93 = pred[1]{0} aten::expand(%92) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %94 = f32[1]{0} aten::where(%93, %90, %7) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %95 = f32[4]{0} aten::mul(%33.2, %94) tensor_ids = [2], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %96 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %97 = f32[] prim::Constant() tensor_ids = [2], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %98 = f32[4]{0} aten::expand(%97) tensor_ids = [2], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %99 = f32[4]{0} aten::mul(%98, %96) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %100 = f32[4]{0} aten::addcmul(%99, %95, %95, %5) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %101 = f32[4]{0} aten::sqrt(%100) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %102 = f32[4]{0} aten::div(%101, %4) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %103 = f32[4]{0} aten::add(%102, %3) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %104 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %105 = f32[4]{0} aten::expand(%104) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %106 = f32[4]{0} aten::mul(%95, %105) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %107 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %108 = f32[] prim::Constant() tensor_ids = [2], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %109 = f32[4]{0} aten::expand(%108) tensor_ids = [2], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %110 = f32[4]{0} aten::mul(%109, %107) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %111 = f32[4]{0} aten::add(%110, %106) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %112 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %113 = f32[4]{0} aten::expand(%112) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %114 = f32[] prim::Constant() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=0
  %115 = f32[] xla::device_data() tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %116 = f32[4]{0} xla::device_data() tensor_ids = [2], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, device=NEURON:1
  %117 = f32[4]{0} aten::mul(%116, %115) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %118 = f32[4]{0} aten::mul(%117, %114) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %119 = f32[4]{0} aten::mul(%118, %113) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %120 = f32[4]{0} aten::sub(%116, %119) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %121 = f32[4]{0} aten::addcdiv(%120, %111, %103, %0) tensor_ids = [2], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=3, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=122
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %5 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %6 = f32[] prim::Constant() tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %23 = f32[1,4]{1,0} aten::div(%22, %21) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %28 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %29 = f32[4]{0} aten::div(%28, %27) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %31 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %32 = f32[1]{0} aten::div(%31, %30) tensor_ids = [1, 2, 3], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %33 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%32, %29, %26, %23, %20, %17, %14) tensor_ids = [1, 2, 3], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %34 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %35 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %37 = f32[1]{0} aten::mul(%33.0, %33.0) tensor_ids = [1, 2, 3], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %38 = f32[] aten::sum(%37) tensor_ids = [1, 2, 3], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %39 = f32[] aten::sqrt(%38) tensor_ids = [1, 2, 3], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %40 = f32[] aten::pow(%39, %36) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %41 = f32[] aten::mul(%40, %35) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %42 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %44 = f32[4]{0} aten::mul(%33.1, %33.1) tensor_ids = [1, 2, 3], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %45 = f32[] aten::sum(%44) tensor_ids = [1, 2, 3], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %46 = f32[] aten::sqrt(%45) tensor_ids = [1, 2, 3], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %47 = f32[] aten::pow(%46, %43) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %48 = f32[] aten::mul(%47, %42) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %49 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %51 = f32[4]{0} aten::mul(%33.2, %33.2) tensor_ids = [1, 2, 3], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %52 = f32[] aten::sum(%51) tensor_ids = [1, 2, 3], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %53 = f32[] aten::sqrt(%52) tensor_ids = [1, 2, 3], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %54 = f32[] aten::pow(%53, %50) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %55 = f32[] aten::mul(%54, %49) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %56 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %58 = f32[1,4]{1,0} aten::mul(%33.3, %33.3) tensor_ids = [1, 2, 3], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %59 = f32[] aten::sum(%58) tensor_ids = [1, 2, 3], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %60 = f32[] aten::sqrt(%59) tensor_ids = [1, 2, 3], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %61 = f32[] aten::pow(%60, %57) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %62 = f32[] aten::mul(%61, %56) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %63 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %65 = f32[4,4]{1,0} aten::mul(%33.4, %33.4) tensor_ids = [1, 2, 3], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %66 = f32[] aten::sum(%65) tensor_ids = [1, 2, 3], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %67 = f32[] aten::sqrt(%66) tensor_ids = [1, 2, 3], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %68 = f32[] aten::pow(%67, %64) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %69 = f32[] aten::mul(%68, %63) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %70 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %71 = f32[] prim::Constant() tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %72 = f32[4,4]{1,0} aten::mul(%33.5, %33.5) tensor_ids = [1, 2, 3], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %73 = f32[] aten::sum(%72) tensor_ids = [1, 2, 3], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %74 = f32[] aten::sqrt(%73) tensor_ids = [1, 2, 3], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %75 = f32[] aten::pow(%74, %71) tensor_ids = [1, 2, 3], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %76 = f32[] aten::mul(%75, %70) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %77 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %78 = f32[1]{0} aten::add(%77, %76) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %69) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::add(%79, %62) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %55) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %48) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %41) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::div(%83, %34) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %85 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%84, %33.6) tensor_ids = [1, 2, 3], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %86 = f32[1]{0} aten::pow(%85.0, %13) tensor_ids = [1, 2, 3], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %87 = f32[1]{0} aten::add(%86, %11) tensor_ids = [1, 2, 3], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %88 = f32[1]{0} aten::reciprocal(%87) tensor_ids = [1, 2, 3], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %89 = f32[1]{0} aten::mul(%88, %8) tensor_ids = [1, 2, 3], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %90 = f32[1]{0} aten::expand(%89) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %91 = s64[] prim::Constant() tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %92 = pred[1]{0} aten::lt(%89, %91) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %93 = pred[1]{0} aten::expand(%92) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %94 = f32[1]{0} aten::where(%93, %90, %7) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %95 = f32[4,4]{1,0} aten::mul(%33.4, %94) tensor_ids = [3], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %96 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %97 = f32[] prim::Constant() tensor_ids = [3], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %98 = f32[4,4]{1,0} aten::expand(%97) tensor_ids = [3], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %99 = f32[4,4]{1,0} aten::mul(%98, %96) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %100 = f32[4,4]{1,0} aten::addcmul(%99, %95, %95, %5) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %101 = f32[4,4]{1,0} aten::sqrt(%100) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %102 = f32[4,4]{1,0} aten::div(%101, %4) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %103 = f32[4,4]{1,0} aten::add(%102, %3) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4,4]{1,0}
  %104 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %105 = f32[4,4]{1,0} aten::expand(%104) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %106 = f32[4,4]{1,0} aten::mul(%95, %105) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %107 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %108 = f32[] prim::Constant() tensor_ids = [3], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %109 = f32[4,4]{1,0} aten::expand(%108) tensor_ids = [3], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %110 = f32[4,4]{1,0} aten::mul(%109, %107) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %111 = f32[4,4]{1,0} aten::add(%110, %106) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %112 = f32[] prim::Constant() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %113 = f32[4,4]{1,0} aten::expand(%112) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %114 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %115 = f32[] xla::device_data() tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %116 = f32[4,4]{1,0} xla::device_data() tensor_ids = [3], location=__call__@xla_op_registry.py:44, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %117 = f32[4,4]{1,0} aten::mul(%116, %115) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %118 = f32[4,4]{1,0} aten::mul(%117, %114) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %119 = f32[4,4]{1,0} aten::mul(%118, %113) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %120 = f32[4,4]{1,0} aten::sub(%116, %119) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4,4]{1,0}
  %121 = f32[4,4]{1,0} aten::addcdiv(%120, %111, %103, %0) tensor_ids = [3], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=4, shape=f32[4]{0}, device=NEURON:1, ir_nodes=122
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %5 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %6 = f32[] prim::Constant() tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %23 = f32[1,4]{1,0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %28 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %29 = f32[4]{0} aten::div(%28, %27) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %31 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %32 = f32[1]{0} aten::div(%31, %30) tensor_ids = [1, 2, 3, 4], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %33 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%32, %29, %26, %23, %20, %17, %14) tensor_ids = [1, 2, 3, 4], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %34 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %35 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %37 = f32[1]{0} aten::mul(%33.0, %33.0) tensor_ids = [1, 2, 3, 4], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %38 = f32[] aten::sum(%37) tensor_ids = [1, 2, 3, 4], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %39 = f32[] aten::sqrt(%38) tensor_ids = [1, 2, 3, 4], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %40 = f32[] aten::pow(%39, %36) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %41 = f32[] aten::mul(%40, %35) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %42 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %44 = f32[4]{0} aten::mul(%33.1, %33.1) tensor_ids = [1, 2, 3, 4], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %45 = f32[] aten::sum(%44) tensor_ids = [1, 2, 3, 4], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %46 = f32[] aten::sqrt(%45) tensor_ids = [1, 2, 3, 4], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %47 = f32[] aten::pow(%46, %43) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %48 = f32[] aten::mul(%47, %42) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %49 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %51 = f32[4]{0} aten::mul(%33.2, %33.2) tensor_ids = [1, 2, 3, 4], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %52 = f32[] aten::sum(%51) tensor_ids = [1, 2, 3, 4], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %53 = f32[] aten::sqrt(%52) tensor_ids = [1, 2, 3, 4], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %54 = f32[] aten::pow(%53, %50) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %55 = f32[] aten::mul(%54, %49) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %56 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %58 = f32[1,4]{1,0} aten::mul(%33.3, %33.3) tensor_ids = [1, 2, 3, 4], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %59 = f32[] aten::sum(%58) tensor_ids = [1, 2, 3, 4], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %60 = f32[] aten::sqrt(%59) tensor_ids = [1, 2, 3, 4], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %61 = f32[] aten::pow(%60, %57) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %62 = f32[] aten::mul(%61, %56) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %63 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %65 = f32[4,4]{1,0} aten::mul(%33.4, %33.4) tensor_ids = [1, 2, 3, 4], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %66 = f32[] aten::sum(%65) tensor_ids = [1, 2, 3, 4], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %67 = f32[] aten::sqrt(%66) tensor_ids = [1, 2, 3, 4], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %68 = f32[] aten::pow(%67, %64) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %69 = f32[] aten::mul(%68, %63) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %70 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %71 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %72 = f32[4,4]{1,0} aten::mul(%33.5, %33.5) tensor_ids = [1, 2, 3, 4], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %73 = f32[] aten::sum(%72) tensor_ids = [1, 2, 3, 4], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %74 = f32[] aten::sqrt(%73) tensor_ids = [1, 2, 3, 4], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %75 = f32[] aten::pow(%74, %71) tensor_ids = [1, 2, 3, 4], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %76 = f32[] aten::mul(%75, %70) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %77 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %78 = f32[1]{0} aten::add(%77, %76) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %69) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::add(%79, %62) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %55) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %48) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %41) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::div(%83, %34) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %85 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%84, %33.6) tensor_ids = [1, 2, 3, 4], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %86 = f32[1]{0} aten::pow(%85.0, %13) tensor_ids = [1, 2, 3, 4], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %87 = f32[1]{0} aten::add(%86, %11) tensor_ids = [1, 2, 3, 4], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %88 = f32[1]{0} aten::reciprocal(%87) tensor_ids = [1, 2, 3, 4], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %89 = f32[1]{0} aten::mul(%88, %8) tensor_ids = [1, 2, 3, 4], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %90 = f32[1]{0} aten::expand(%89) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %91 = s64[] prim::Constant() tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %92 = pred[1]{0} aten::lt(%89, %91) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %93 = pred[1]{0} aten::expand(%92) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %94 = f32[1]{0} aten::where(%93, %90, %7) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %95 = f32[4]{0} aten::mul(%33.1, %94) tensor_ids = [4], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %96 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %97 = f32[] prim::Constant() tensor_ids = [4], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %98 = f32[4]{0} aten::expand(%97) tensor_ids = [4], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %99 = f32[4]{0} aten::mul(%98, %96) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %100 = f32[4]{0} aten::addcmul(%99, %95, %95, %5) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %101 = f32[4]{0} aten::sqrt(%100) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %102 = f32[4]{0} aten::div(%101, %4) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %103 = f32[4]{0} aten::add(%102, %3) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[4]{0}
  %104 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %105 = f32[4]{0} aten::expand(%104) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %106 = f32[4]{0} aten::mul(%95, %105) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %107 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %108 = f32[] prim::Constant() tensor_ids = [4], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %109 = f32[4]{0} aten::expand(%108) tensor_ids = [4], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %110 = f32[4]{0} aten::mul(%109, %107) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %111 = f32[4]{0} aten::add(%110, %106) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %112 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %113 = f32[4]{0} aten::expand(%112) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}, size=(4)
  %114 = f32[] prim::Constant() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=0
  %115 = f32[] xla::device_data() tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %116 = f32[4]{0} xla::device_data() tensor_ids = [4], location=__call__@xla_op_registry.py:44, xla_shape=f32[4]{0}, device=NEURON:1
  %117 = f32[4]{0} aten::mul(%116, %115) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %118 = f32[4]{0} aten::mul(%117, %114) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %119 = f32[4]{0} aten::mul(%118, %113) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %120 = f32[4]{0} aten::sub(%116, %119) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[4]{0}
  %121 = f32[4]{0} aten::addcdiv(%120, %111, %103, %0) tensor_ids = [4], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=5, shape=f32[1,4]{1,0}, device=NEURON:1, ir_nodes=122
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %5 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %6 = f32[] prim::Constant() tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2, 3, 4, 5], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %23 = f32[1,4]{1,0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %28 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %29 = f32[4]{0} aten::div(%28, %27) tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %31 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %32 = f32[1]{0} aten::div(%31, %30) tensor_ids = [1, 2, 3, 4, 5], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %33 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%32, %29, %26, %23, %20, %17, %14) tensor_ids = [1, 2, 3, 4, 5], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %34 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %35 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %37 = f32[1]{0} aten::mul(%33.0, %33.0) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %38 = f32[] aten::sum(%37) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %39 = f32[] aten::sqrt(%38) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %40 = f32[] aten::pow(%39, %36) tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %41 = f32[] aten::mul(%40, %35) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %42 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %44 = f32[4]{0} aten::mul(%33.1, %33.1) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %45 = f32[] aten::sum(%44) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %46 = f32[] aten::sqrt(%45) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %47 = f32[] aten::pow(%46, %43) tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %48 = f32[] aten::mul(%47, %42) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %49 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %51 = f32[4]{0} aten::mul(%33.2, %33.2) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %52 = f32[] aten::sum(%51) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %53 = f32[] aten::sqrt(%52) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %54 = f32[] aten::pow(%53, %50) tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %55 = f32[] aten::mul(%54, %49) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %56 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %58 = f32[1,4]{1,0} aten::mul(%33.3, %33.3) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %59 = f32[] aten::sum(%58) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %60 = f32[] aten::sqrt(%59) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %61 = f32[] aten::pow(%60, %57) tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %62 = f32[] aten::mul(%61, %56) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %63 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %65 = f32[4,4]{1,0} aten::mul(%33.4, %33.4) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %66 = f32[] aten::sum(%65) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %67 = f32[] aten::sqrt(%66) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %68 = f32[] aten::pow(%67, %64) tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %69 = f32[] aten::mul(%68, %63) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %70 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %71 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %72 = f32[4,4]{1,0} aten::mul(%33.5, %33.5) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %73 = f32[] aten::sum(%72) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %74 = f32[] aten::sqrt(%73) tensor_ids = [1, 2, 3, 4, 5], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %75 = f32[] aten::pow(%74, %71) tensor_ids = [1, 2, 3, 4, 5], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %76 = f32[] aten::mul(%75, %70) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %77 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %78 = f32[1]{0} aten::add(%77, %76) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %69) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::add(%79, %62) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %55) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %48) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %41) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::div(%83, %34) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %85 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%84, %33.6) tensor_ids = [1, 2, 3, 4, 5], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %86 = f32[1]{0} aten::pow(%85.0, %13) tensor_ids = [1, 2, 3, 4, 5], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %87 = f32[1]{0} aten::add(%86, %11) tensor_ids = [1, 2, 3, 4, 5], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %88 = f32[1]{0} aten::reciprocal(%87) tensor_ids = [1, 2, 3, 4, 5], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %89 = f32[1]{0} aten::mul(%88, %8) tensor_ids = [1, 2, 3, 4, 5], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %90 = f32[1]{0} aten::expand(%89) tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %91 = s64[] prim::Constant() tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %92 = pred[1]{0} aten::lt(%89, %91) tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %93 = pred[1]{0} aten::expand(%92) tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %94 = f32[1]{0} aten::where(%93, %90, %7) tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %95 = f32[1,4]{1,0} aten::mul(%33.3, %94) tensor_ids = [5], location=clip_grad_norm@grads.py:189, xla_shape=f32[1,4]{1,0}
  %96 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %97 = f32[] prim::Constant() tensor_ids = [5], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %98 = f32[1,4]{1,0} aten::expand(%97) tensor_ids = [5], location=_init_group@adamw.py:125, xla_shape=f32[1,4]{1,0}, size=(1, 4)
  %99 = f32[1,4]{1,0} aten::mul(%98, %96) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1,4]{1,0}
  %100 = f32[1,4]{1,0} aten::addcmul(%99, %95, %95, %5) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1,4]{1,0}
  %101 = f32[1,4]{1,0} aten::sqrt(%100) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[1,4]{1,0}
  %102 = f32[1,4]{1,0} aten::div(%101, %4) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[1,4]{1,0}
  %103 = f32[1,4]{1,0} aten::add(%102, %3) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[1,4]{1,0}
  %104 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %105 = f32[1,4]{1,0} aten::expand(%104) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}, size=(1, 4)
  %106 = f32[1,4]{1,0} aten::mul(%95, %105) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}
  %107 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %108 = f32[] prim::Constant() tensor_ids = [5], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %109 = f32[1,4]{1,0} aten::expand(%108) tensor_ids = [5], location=_init_group@adamw.py:121, xla_shape=f32[1,4]{1,0}, size=(1, 4)
  %110 = f32[1,4]{1,0} aten::mul(%109, %107) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}
  %111 = f32[1,4]{1,0} aten::add(%110, %106) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}
  %112 = f32[] prim::Constant() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %113 = f32[1,4]{1,0} aten::expand(%112) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1,4]{1,0}, size=(1, 4)
  %114 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %115 = f32[] xla::device_data() tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %116 = f32[1,4]{1,0} xla::device_data() tensor_ids = [5], location=__call__@xla_op_registry.py:44, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %117 = f32[1,4]{1,0} aten::mul(%116, %115) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1,4]{1,0}
  %118 = f32[1,4]{1,0} aten::mul(%117, %114) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1,4]{1,0}
  %119 = f32[1,4]{1,0} aten::mul(%118, %113) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1,4]{1,0}
  %120 = f32[1,4]{1,0} aten::sub(%116, %119) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1,4]{1,0}
  %121 = f32[1,4]{1,0} aten::addcdiv(%120, %111, %103, %0) tensor_ids = [5], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[1,4]{1,0}, ROOT=0
}


Tensor: id=6, shape=f32[1]{0}, device=NEURON:1, ir_nodes=122
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:119)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], value=1
  %2 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %3 = f32[] aten::mul(%2, %1) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[]
  %4 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[], device=NEURON:1
  %5 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %6 = f32[] prim::Constant() tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %11 = f32[] aten::mul(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %13 = f32[1]{0} aten::expand(%12) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %14 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %17 = f32[4,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %20 = f32[4,4]{1,0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %23 = f32[1,4]{1,0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %26 = f32[4]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %27 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %28 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %29 = f32[4]{0} aten::div(%28, %27) tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %31 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %32 = f32[1]{0} aten::div(%31, %30) tensor_ids = [1, 2, 3, 4, 5, 6], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %33 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%32, %29, %26, %23, %20, %17, %14) tensor_ids = [1, 2, 3, 4, 5, 6], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %34 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %35 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %37 = f32[1]{0} aten::mul(%33.0, %33.0) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %38 = f32[] aten::sum(%37) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %39 = f32[] aten::sqrt(%38) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %40 = f32[] aten::pow(%39, %36) tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %41 = f32[] aten::mul(%40, %35) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %42 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %44 = f32[4]{0} aten::mul(%33.1, %33.1) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %45 = f32[] aten::sum(%44) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %46 = f32[] aten::sqrt(%45) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %47 = f32[] aten::pow(%46, %43) tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %48 = f32[] aten::mul(%47, %42) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %49 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %51 = f32[4]{0} aten::mul(%33.2, %33.2) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %52 = f32[] aten::sum(%51) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %53 = f32[] aten::sqrt(%52) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %54 = f32[] aten::pow(%53, %50) tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %55 = f32[] aten::mul(%54, %49) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %56 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %58 = f32[1,4]{1,0} aten::mul(%33.3, %33.3) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %59 = f32[] aten::sum(%58) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %60 = f32[] aten::sqrt(%59) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %61 = f32[] aten::pow(%60, %57) tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %62 = f32[] aten::mul(%61, %56) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %63 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %65 = f32[4,4]{1,0} aten::mul(%33.4, %33.4) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %66 = f32[] aten::sum(%65) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %67 = f32[] aten::sqrt(%66) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %68 = f32[] aten::pow(%67, %64) tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %69 = f32[] aten::mul(%68, %63) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %70 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %71 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %72 = f32[4,4]{1,0} aten::mul(%33.5, %33.5) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %73 = f32[] aten::sum(%72) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %74 = f32[] aten::sqrt(%73) tensor_ids = [1, 2, 3, 4, 5, 6], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %75 = f32[] aten::pow(%74, %71) tensor_ids = [1, 2, 3, 4, 5, 6], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %76 = f32[] aten::mul(%75, %70) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %77 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %78 = f32[1]{0} aten::add(%77, %76) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %69) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::add(%79, %62) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %55) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %48) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %41) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::div(%83, %34) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %85 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%84, %33.6) tensor_ids = [1, 2, 3, 4, 5, 6], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %86 = f32[1]{0} aten::pow(%85.0, %13) tensor_ids = [1, 2, 3, 4, 5, 6], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %87 = f32[1]{0} aten::add(%86, %11) tensor_ids = [1, 2, 3, 4, 5, 6], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %88 = f32[1]{0} aten::reciprocal(%87) tensor_ids = [1, 2, 3, 4, 5, 6], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %89 = f32[1]{0} aten::mul(%88, %8) tensor_ids = [1, 2, 3, 4, 5, 6], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %90 = f32[1]{0} aten::expand(%89) tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %91 = s64[] prim::Constant() tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %92 = pred[1]{0} aten::lt(%89, %91) tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %93 = pred[1]{0} aten::expand(%92) tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %94 = f32[1]{0} aten::where(%93, %90, %7) tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %95 = f32[1]{0} aten::mul(%33.0, %94) tensor_ids = [6], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %96 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %97 = f32[] prim::Constant() tensor_ids = [6], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %98 = f32[1]{0} aten::expand(%97) tensor_ids = [6], location=_init_group@adamw.py:125, xla_shape=f32[1]{0}, size=(1)
  %99 = f32[1]{0} aten::mul(%98, %96) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1]{0}
  %100 = f32[1]{0} aten::addcmul(%99, %95, %95, %5) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1]{0}
  %101 = f32[1]{0} aten::sqrt(%100) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[1]{0}
  %102 = f32[1]{0} aten::div(%101, %4) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[1]{0}
  %103 = f32[1]{0} aten::add(%102, %3) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:117, xla_shape=f32[1]{0}
  %104 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %105 = f32[1]{0} aten::expand(%104) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}, size=(1)
  %106 = f32[1]{0} aten::mul(%95, %105) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}
  %107 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %108 = f32[] prim::Constant() tensor_ids = [6], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %109 = f32[1]{0} aten::expand(%108) tensor_ids = [6], location=_init_group@adamw.py:121, xla_shape=f32[1]{0}, size=(1)
  %110 = f32[1]{0} aten::mul(%109, %107) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}
  %111 = f32[1]{0} aten::add(%110, %106) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}
  %112 = f32[] prim::Constant() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=1
  %113 = f32[1]{0} aten::expand(%112) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1]{0}, size=(1)
  %114 = f32[] prim::Constant() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], value=0
  %115 = f32[] xla::device_data() tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[], device=NEURON:1
  %116 = f32[1]{0} xla::device_data() tensor_ids = [6], location=__call__@xla_op_registry.py:44, xla_shape=f32[1]{0}, device=NEURON:1
  %117 = f32[1]{0} aten::mul(%116, %115) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1]{0}
  %118 = f32[1]{0} aten::mul(%117, %114) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1]{0}
  %119 = f32[1]{0} aten::mul(%118, %113) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1]{0}
  %120 = f32[1]{0} aten::sub(%116, %119) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:58, xla_shape=f32[1]{0}
  %121 = f32[1]{0} aten::addcdiv(%120, %111, %103, %0) tensor_ids = [6], location=_single_tensor_adamw_@adamw.py:119, xla_shape=f32[1]{0}, ROOT=0
}


Tensor: id=57, shape=f32[1]{0}, device=NEURON:1, ir_nodes=90
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %17 = f32[1,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %26 = f32[1]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %27 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[1]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4]{0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[1,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %59 = f32[4,4]{1,0} aten::mul(%27.4, %27.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %60 = f32[] aten::sum(%59) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %61 = f32[] aten::sqrt(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %62 = f32[] aten::pow(%61, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %63 = f32[] aten::mul(%62, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %66 = f32[4,4]{1,0} aten::mul(%27.5, %27.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %67 = f32[] aten::sum(%66) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %68 = f32[] aten::sqrt(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %69 = f32[] aten::pow(%68, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %70 = f32[] aten::mul(%69, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %71 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %72 = f32[1]{0} aten::add(%71, %70) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %73 = f32[1]{0} aten::add(%72, %63) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %56) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %49) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %42) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %35) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::div(%77, %28) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %79 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%78, %27.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %80 = f32[1]{0} aten::pow(%79.0, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::reciprocal(%81) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::mul(%82, %2) tensor_ids = [1, 2, 3, 4, 5, 6, 57], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::expand(%83) tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %85 = s64[] prim::Constant() tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %86 = pred[1]{0} aten::lt(%83, %85) tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %87 = pred[1]{0} aten::expand(%86) tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %88 = f32[1]{0} aten::where(%87, %84, %1) tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %89 = f32[1]{0} aten::mul(%27.0, %88) tensor_ids = [6, 57], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, ROOT=0
}


Tensor: id=58, shape=f32[1,4]{1,0}, device=NEURON:1, ir_nodes=90
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %17 = f32[1,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %26 = f32[1]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %27 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[1]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4]{0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[1,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %59 = f32[4,4]{1,0} aten::mul(%27.4, %27.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %60 = f32[] aten::sum(%59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %61 = f32[] aten::sqrt(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %62 = f32[] aten::pow(%61, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %63 = f32[] aten::mul(%62, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %66 = f32[4,4]{1,0} aten::mul(%27.5, %27.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %67 = f32[] aten::sum(%66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %68 = f32[] aten::sqrt(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %69 = f32[] aten::pow(%68, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %70 = f32[] aten::mul(%69, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %71 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %72 = f32[1]{0} aten::add(%71, %70) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %73 = f32[1]{0} aten::add(%72, %63) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %56) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %49) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %42) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %35) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::div(%77, %28) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %79 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%78, %27.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %80 = f32[1]{0} aten::pow(%79.0, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::reciprocal(%81) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::mul(%82, %2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::expand(%83) tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %85 = s64[] prim::Constant() tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %86 = pred[1]{0} aten::lt(%83, %85) tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %87 = pred[1]{0} aten::expand(%86) tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %88 = f32[1]{0} aten::where(%87, %84, %1) tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %89 = f32[1,4]{1,0} aten::mul(%27.3, %88) tensor_ids = [5, 58], location=clip_grad_norm@grads.py:189, xla_shape=f32[1,4]{1,0}, ROOT=0
}


Tensor: id=66, shape=f32[4]{0}, device=NEURON:1, ir_nodes=90
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %17 = f32[1,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %26 = f32[1]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %27 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[1]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4]{0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[1,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %59 = f32[4,4]{1,0} aten::mul(%27.4, %27.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %60 = f32[] aten::sum(%59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %61 = f32[] aten::sqrt(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %62 = f32[] aten::pow(%61, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %63 = f32[] aten::mul(%62, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %66 = f32[4,4]{1,0} aten::mul(%27.5, %27.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %67 = f32[] aten::sum(%66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %68 = f32[] aten::sqrt(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %69 = f32[] aten::pow(%68, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %70 = f32[] aten::mul(%69, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %71 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %72 = f32[1]{0} aten::add(%71, %70) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %73 = f32[1]{0} aten::add(%72, %63) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %56) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %49) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %42) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %35) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::div(%77, %28) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %79 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%78, %27.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %80 = f32[1]{0} aten::pow(%79.0, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::reciprocal(%81) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::mul(%82, %2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::expand(%83) tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %85 = s64[] prim::Constant() tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %86 = pred[1]{0} aten::lt(%83, %85) tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %87 = pred[1]{0} aten::expand(%86) tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %88 = f32[1]{0} aten::where(%87, %84, %1) tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %89 = f32[4]{0} aten::mul(%27.1, %88) tensor_ids = [4, 66], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=67, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=90
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %17 = f32[1,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %26 = f32[1]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %27 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[1]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4]{0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[1,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %59 = f32[4,4]{1,0} aten::mul(%27.4, %27.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %60 = f32[] aten::sum(%59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %61 = f32[] aten::sqrt(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %62 = f32[] aten::pow(%61, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %63 = f32[] aten::mul(%62, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %66 = f32[4,4]{1,0} aten::mul(%27.5, %27.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %67 = f32[] aten::sum(%66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %68 = f32[] aten::sqrt(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %69 = f32[] aten::pow(%68, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %70 = f32[] aten::mul(%69, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %71 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %72 = f32[1]{0} aten::add(%71, %70) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %73 = f32[1]{0} aten::add(%72, %63) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %56) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %49) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %42) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %35) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::div(%77, %28) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %79 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%78, %27.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %80 = f32[1]{0} aten::pow(%79.0, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::reciprocal(%81) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::mul(%82, %2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::expand(%83) tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %85 = s64[] prim::Constant() tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %86 = pred[1]{0} aten::lt(%83, %85) tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %87 = pred[1]{0} aten::expand(%86) tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %88 = f32[1]{0} aten::where(%87, %84, %1) tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %89 = f32[4,4]{1,0} aten::mul(%27.4, %88) tensor_ids = [3, 67], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=75, shape=f32[4]{0}, device=NEURON:1, ir_nodes=90
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %17 = f32[1,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %26 = f32[1]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %27 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[1]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4]{0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[1,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %59 = f32[4,4]{1,0} aten::mul(%27.4, %27.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %60 = f32[] aten::sum(%59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %61 = f32[] aten::sqrt(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %62 = f32[] aten::pow(%61, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %63 = f32[] aten::mul(%62, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %66 = f32[4,4]{1,0} aten::mul(%27.5, %27.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %67 = f32[] aten::sum(%66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %68 = f32[] aten::sqrt(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %69 = f32[] aten::pow(%68, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %70 = f32[] aten::mul(%69, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %71 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %72 = f32[1]{0} aten::add(%71, %70) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %73 = f32[1]{0} aten::add(%72, %63) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %56) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %49) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %42) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %35) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::div(%77, %28) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %79 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%78, %27.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %80 = f32[1]{0} aten::pow(%79.0, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::reciprocal(%81) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::mul(%82, %2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::expand(%83) tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %85 = s64[] prim::Constant() tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %86 = pred[1]{0} aten::lt(%83, %85) tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %87 = pred[1]{0} aten::expand(%86) tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %88 = f32[1]{0} aten::where(%87, %84, %1) tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %89 = f32[4]{0} aten::mul(%27.2, %88) tensor_ids = [2, 75], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=76, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=90
Frames:
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:189)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %4 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %5 = f32[] aten::mul(%4, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %7 = f32[1]{0} aten::expand(%6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %8 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %11 = f32[4,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %14 = f32[4,4]{1,0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %17 = f32[1,4]{1,0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %20 = f32[4]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %21 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %22 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %23 = f32[4]{0} aten::div(%22, %21) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %25 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %26 = f32[1]{0} aten::div(%25, %24) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %27 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%26, %23, %20, %17, %14, %11, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %28 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %31 = f32[1]{0} aten::mul(%27.0, %27.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %32 = f32[] aten::sum(%31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %33 = f32[] aten::sqrt(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %34 = f32[] aten::pow(%33, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %35 = f32[] aten::mul(%34, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %36 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %38 = f32[4]{0} aten::mul(%27.1, %27.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %39 = f32[] aten::sum(%38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %40 = f32[] aten::sqrt(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %41 = f32[] aten::pow(%40, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %42 = f32[] aten::mul(%41, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %43 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %45 = f32[4]{0} aten::mul(%27.2, %27.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %46 = f32[] aten::sum(%45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %47 = f32[] aten::sqrt(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %48 = f32[] aten::pow(%47, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %49 = f32[] aten::mul(%48, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %50 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %52 = f32[1,4]{1,0} aten::mul(%27.3, %27.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %53 = f32[] aten::sum(%52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %54 = f32[] aten::sqrt(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %55 = f32[] aten::pow(%54, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %56 = f32[] aten::mul(%55, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %57 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %59 = f32[4,4]{1,0} aten::mul(%27.4, %27.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %60 = f32[] aten::sum(%59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %61 = f32[] aten::sqrt(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %62 = f32[] aten::pow(%61, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %63 = f32[] aten::mul(%62, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %64 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %66 = f32[4,4]{1,0} aten::mul(%27.5, %27.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %67 = f32[] aten::sum(%66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %68 = f32[] aten::sqrt(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %69 = f32[] aten::pow(%68, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %70 = f32[] aten::mul(%69, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %71 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %72 = f32[1]{0} aten::add(%71, %70) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %73 = f32[1]{0} aten::add(%72, %63) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %56) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %49) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %42) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %35) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::div(%77, %28) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %79 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%78, %27.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %80 = f32[1]{0} aten::pow(%79.0, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %81 = f32[1]{0} aten::add(%80, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::reciprocal(%81) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::mul(%82, %2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::expand(%83) tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %85 = s64[] prim::Constant() tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %86 = pred[1]{0} aten::lt(%83, %85) tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %87 = pred[1]{0} aten::expand(%86) tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %88 = f32[1]{0} aten::where(%87, %84, %1) tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %89 = f32[4,4]{1,0} aten::mul(%27.5, %88) tensor_ids = [1, 76], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=171, shape=f32[1]{0}, device=NEURON:1, ir_nodes=75
Frames:
  get_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:136)
  clip_grad_norm (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/grads.py:171)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:81)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %4 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %5 = f32[4,4]{1,0} aten::div(%4, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %6 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %7 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %8 = f32[4,4]{1,0} aten::div(%7, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %9 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %10 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %11 = f32[1,4]{1,0} aten::div(%10, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %12 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %13 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %14 = f32[4]{0} aten::div(%13, %12) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %15 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %16 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %17 = f32[4]{0} aten::div(%16, %15) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %18 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %19 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %20 = f32[1]{0} aten::div(%19, %18) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %21 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%20, %17, %14, %11, %8, %5, %2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %24 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %25 = f32[1]{0} aten::mul(%21.0, %21.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %26 = f32[] aten::sum(%25) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %27 = f32[] aten::sqrt(%26) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %28 = f32[] aten::pow(%27, %24) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %29 = f32[] aten::mul(%28, %23) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[4]{0} aten::mul(%21.1, %21.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4]{0} aten::mul(%21.2, %21.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[1,4]{1,0} aten::mul(%21.3, %21.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %53 = f32[4,4]{1,0} aten::mul(%21.4, %21.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %54 = f32[] aten::sum(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %55 = f32[] aten::sqrt(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %56 = f32[] aten::pow(%55, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %57 = f32[] aten::mul(%56, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %60 = f32[4,4]{1,0} aten::mul(%21.5, %21.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %61 = f32[] aten::sum(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %62 = f32[] aten::sqrt(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %63 = f32[] aten::pow(%62, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %64 = f32[] aten::mul(%63, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %65 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %66 = f32[1]{0} aten::add(%65, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %67 = f32[1]{0} aten::add(%66, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %68 = f32[1]{0} aten::add(%67, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %69 = f32[1]{0} aten::add(%68, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %70 = f32[1]{0} aten::add(%69, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %71 = f32[1]{0} aten::add(%70, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %72 = f32[1]{0} aten::div(%71, %22) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %73 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%72, %21.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %74 = f32[1]{0} aten::pow(%73.0, %1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, ROOT=0
}


Tensor: id=219, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=98
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1, 219], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [1, 219], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[] prim::Constant() tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %19 = f32[1,4]{1,0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %24 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %25 = f32[4]{0} aten::div(%24, %23) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %27 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %28 = f32[1]{0} aten::div(%27, %26) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %29 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%28, %25, %22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[1]{0} aten::mul(%29.0, %29.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4]{0} aten::mul(%29.1, %29.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4]{0} aten::mul(%29.2, %29.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %53 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %54 = f32[1,4]{1,0} aten::mul(%29.3, %29.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %55 = f32[] aten::sum(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %56 = f32[] aten::sqrt(%55) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %57 = f32[] aten::pow(%56, %53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %58 = f32[] aten::mul(%57, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %60 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %61 = f32[4,4]{1,0} aten::mul(%29.4, %29.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %62 = f32[] aten::sum(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %63 = f32[] aten::sqrt(%62) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %64 = f32[] aten::pow(%63, %60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %65 = f32[] aten::mul(%64, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %67 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %68 = f32[4,4]{1,0} aten::mul(%29.5, %29.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %69 = f32[] aten::sum(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %70 = f32[] aten::sqrt(%69) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %71 = f32[] aten::pow(%70, %67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %72 = f32[] aten::mul(%71, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %73 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %74 = f32[1]{0} aten::add(%73, %72) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::div(%79, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %81 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%80, %29.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %82 = f32[1]{0} aten::pow(%81.0, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::reciprocal(%83) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::mul(%84, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %86 = f32[1]{0} aten::expand(%85) tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %87 = s64[] prim::Constant() tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %88 = pred[1]{0} aten::lt(%85, %87) tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %89 = pred[1]{0} aten::expand(%88) tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %90 = f32[1]{0} aten::where(%89, %86, %3) tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %91 = f32[4,4]{1,0} aten::mul(%29.5, %90) tensor_ids = [1, 76, 219], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %92 = f32[4,4]{1,0} aten::mul(%91, %1) tensor_ids = [1, 219], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %93 = f32[] xla::device_data() tensor_ids = [1, 219], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %94 = f32[] prim::Constant() tensor_ids = [1, 219], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %95 = f32[4,4]{1,0} aten::expand(%94) tensor_ids = [1, 219], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %96 = f32[4,4]{1,0} aten::mul(%95, %93) tensor_ids = [1, 219], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %97 = f32[4,4]{1,0} aten::add(%96, %92) tensor_ids = [1, 219], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=220, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=96
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [1, 220], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %18 = f32[1,4]{1,0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %23 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %24 = f32[4]{0} aten::div(%23, %22) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %26 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %27 = f32[1]{0} aten::div(%26, %25) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %28 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%27, %24, %21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[1]{0} aten::mul(%28.0, %28.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4]{0} aten::mul(%28.1, %28.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4]{0} aten::mul(%28.2, %28.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %53 = f32[1,4]{1,0} aten::mul(%28.3, %28.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %54 = f32[] aten::sum(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %55 = f32[] aten::sqrt(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %56 = f32[] aten::pow(%55, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %57 = f32[] aten::mul(%56, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %60 = f32[4,4]{1,0} aten::mul(%28.4, %28.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %61 = f32[] aten::sum(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %62 = f32[] aten::sqrt(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %63 = f32[] aten::pow(%62, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %64 = f32[] aten::mul(%63, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %67 = f32[4,4]{1,0} aten::mul(%28.5, %28.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %68 = f32[] aten::sum(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %69 = f32[] aten::sqrt(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %70 = f32[] aten::pow(%69, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %71 = f32[] aten::mul(%70, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %72 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %73 = f32[1]{0} aten::add(%72, %71) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::div(%78, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %80 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%79, %28.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %81 = f32[1]{0} aten::pow(%80.0, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::reciprocal(%82) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::mul(%83, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::expand(%84) tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %86 = s64[] prim::Constant() tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %87 = pred[1]{0} aten::lt(%84, %86) tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %88 = pred[1]{0} aten::expand(%87) tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %89 = f32[1]{0} aten::where(%88, %85, %2) tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %90 = f32[4,4]{1,0} aten::mul(%28.5, %89) tensor_ids = [1, 76, 219, 220], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %91 = f32[] xla::device_data() tensor_ids = [1, 220], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %92 = f32[] prim::Constant() tensor_ids = [1, 220], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %93 = f32[4,4]{1,0} aten::expand(%92) tensor_ids = [1, 220], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %94 = f32[4,4]{1,0} aten::mul(%93, %91) tensor_ids = [1, 220], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %95 = f32[4,4]{1,0} aten::addcmul(%94, %90, %90, %0) tensor_ids = [1, 220], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=221, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=98
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3, 221], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %1 = f32[4,4]{1,0} aten::expand(%0) tensor_ids = [3, 221], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %2 = f32[] prim::Constant() tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %19 = f32[1,4]{1,0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %24 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %25 = f32[4]{0} aten::div(%24, %23) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %27 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %28 = f32[1]{0} aten::div(%27, %26) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %29 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%28, %25, %22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[1]{0} aten::mul(%29.0, %29.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4]{0} aten::mul(%29.1, %29.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4]{0} aten::mul(%29.2, %29.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %53 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %54 = f32[1,4]{1,0} aten::mul(%29.3, %29.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %55 = f32[] aten::sum(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %56 = f32[] aten::sqrt(%55) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %57 = f32[] aten::pow(%56, %53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %58 = f32[] aten::mul(%57, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %60 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %61 = f32[4,4]{1,0} aten::mul(%29.4, %29.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %62 = f32[] aten::sum(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %63 = f32[] aten::sqrt(%62) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %64 = f32[] aten::pow(%63, %60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %65 = f32[] aten::mul(%64, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %67 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %68 = f32[4,4]{1,0} aten::mul(%29.5, %29.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %69 = f32[] aten::sum(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %70 = f32[] aten::sqrt(%69) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %71 = f32[] aten::pow(%70, %67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %72 = f32[] aten::mul(%71, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %73 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %74 = f32[1]{0} aten::add(%73, %72) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::div(%79, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %81 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%80, %29.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %82 = f32[1]{0} aten::pow(%81.0, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::reciprocal(%83) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::mul(%84, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %86 = f32[1]{0} aten::expand(%85) tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %87 = s64[] prim::Constant() tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %88 = pred[1]{0} aten::lt(%85, %87) tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %89 = pred[1]{0} aten::expand(%88) tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %90 = f32[1]{0} aten::where(%89, %86, %3) tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %91 = f32[4,4]{1,0} aten::mul(%29.4, %90) tensor_ids = [3, 67, 221], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %92 = f32[4,4]{1,0} aten::mul(%91, %1) tensor_ids = [3, 221], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %93 = f32[] xla::device_data() tensor_ids = [3, 221], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %94 = f32[] prim::Constant() tensor_ids = [3, 221], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %95 = f32[4,4]{1,0} aten::expand(%94) tensor_ids = [3, 221], location=_init_group@adamw.py:121, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %96 = f32[4,4]{1,0} aten::mul(%95, %93) tensor_ids = [3, 221], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}
  %97 = f32[4,4]{1,0} aten::add(%96, %92) tensor_ids = [3, 221], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=222, shape=f32[4,4]{1,0}, device=NEURON:1, ir_nodes=96
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [3, 222], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %18 = f32[1,4]{1,0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %23 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %24 = f32[4]{0} aten::div(%23, %22) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %26 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %27 = f32[1]{0} aten::div(%26, %25) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %28 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%27, %24, %21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[1]{0} aten::mul(%28.0, %28.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4]{0} aten::mul(%28.1, %28.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4]{0} aten::mul(%28.2, %28.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %53 = f32[1,4]{1,0} aten::mul(%28.3, %28.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %54 = f32[] aten::sum(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %55 = f32[] aten::sqrt(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %56 = f32[] aten::pow(%55, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %57 = f32[] aten::mul(%56, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %60 = f32[4,4]{1,0} aten::mul(%28.4, %28.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %61 = f32[] aten::sum(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %62 = f32[] aten::sqrt(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %63 = f32[] aten::pow(%62, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %64 = f32[] aten::mul(%63, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %67 = f32[4,4]{1,0} aten::mul(%28.5, %28.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %68 = f32[] aten::sum(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %69 = f32[] aten::sqrt(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %70 = f32[] aten::pow(%69, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %71 = f32[] aten::mul(%70, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %72 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %73 = f32[1]{0} aten::add(%72, %71) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::div(%78, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %80 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%79, %28.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %81 = f32[1]{0} aten::pow(%80.0, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::reciprocal(%82) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::mul(%83, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::expand(%84) tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %86 = s64[] prim::Constant() tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %87 = pred[1]{0} aten::lt(%84, %86) tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %88 = pred[1]{0} aten::expand(%87) tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %89 = f32[1]{0} aten::where(%88, %85, %2) tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %90 = f32[4,4]{1,0} aten::mul(%28.4, %89) tensor_ids = [3, 67, 221, 222], location=clip_grad_norm@grads.py:189, xla_shape=f32[4,4]{1,0}
  %91 = f32[] xla::device_data() tensor_ids = [3, 222], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %92 = f32[] prim::Constant() tensor_ids = [3, 222], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %93 = f32[4,4]{1,0} aten::expand(%92) tensor_ids = [3, 222], location=_init_group@adamw.py:125, xla_shape=f32[4,4]{1,0}, size=(4, 4)
  %94 = f32[4,4]{1,0} aten::mul(%93, %91) tensor_ids = [3, 222], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}
  %95 = f32[4,4]{1,0} aten::addcmul(%94, %90, %90, %0) tensor_ids = [3, 222], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4,4]{1,0}, ROOT=0
}


Tensor: id=223, shape=f32[1,4]{1,0}, device=NEURON:1, ir_nodes=98
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [5, 223], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %1 = f32[1,4]{1,0} aten::expand(%0) tensor_ids = [5, 223], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}, size=(1, 4)
  %2 = f32[] prim::Constant() tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %19 = f32[1,4]{1,0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %24 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %25 = f32[4]{0} aten::div(%24, %23) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %27 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %28 = f32[1]{0} aten::div(%27, %26) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %29 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%28, %25, %22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[1]{0} aten::mul(%29.0, %29.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4]{0} aten::mul(%29.1, %29.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4]{0} aten::mul(%29.2, %29.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %53 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %54 = f32[1,4]{1,0} aten::mul(%29.3, %29.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %55 = f32[] aten::sum(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %56 = f32[] aten::sqrt(%55) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %57 = f32[] aten::pow(%56, %53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %58 = f32[] aten::mul(%57, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %60 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %61 = f32[4,4]{1,0} aten::mul(%29.4, %29.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %62 = f32[] aten::sum(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %63 = f32[] aten::sqrt(%62) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %64 = f32[] aten::pow(%63, %60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %65 = f32[] aten::mul(%64, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %67 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %68 = f32[4,4]{1,0} aten::mul(%29.5, %29.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %69 = f32[] aten::sum(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %70 = f32[] aten::sqrt(%69) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %71 = f32[] aten::pow(%70, %67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %72 = f32[] aten::mul(%71, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %73 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %74 = f32[1]{0} aten::add(%73, %72) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::div(%79, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %81 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%80, %29.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %82 = f32[1]{0} aten::pow(%81.0, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::reciprocal(%83) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::mul(%84, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %86 = f32[1]{0} aten::expand(%85) tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %87 = s64[] prim::Constant() tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %88 = pred[1]{0} aten::lt(%85, %87) tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %89 = pred[1]{0} aten::expand(%88) tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %90 = f32[1]{0} aten::where(%89, %86, %3) tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %91 = f32[1,4]{1,0} aten::mul(%29.3, %90) tensor_ids = [5, 58, 223], location=clip_grad_norm@grads.py:189, xla_shape=f32[1,4]{1,0}
  %92 = f32[1,4]{1,0} aten::mul(%91, %1) tensor_ids = [5, 223], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}
  %93 = f32[] xla::device_data() tensor_ids = [5, 223], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %94 = f32[] prim::Constant() tensor_ids = [5, 223], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %95 = f32[1,4]{1,0} aten::expand(%94) tensor_ids = [5, 223], location=_init_group@adamw.py:121, xla_shape=f32[1,4]{1,0}, size=(1, 4)
  %96 = f32[1,4]{1,0} aten::mul(%95, %93) tensor_ids = [5, 223], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}
  %97 = f32[1,4]{1,0} aten::add(%96, %92) tensor_ids = [5, 223], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1,4]{1,0}, ROOT=0
}


Tensor: id=224, shape=f32[1,4]{1,0}, device=NEURON:1, ir_nodes=96
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [5, 224], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %18 = f32[1,4]{1,0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %23 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %24 = f32[4]{0} aten::div(%23, %22) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %26 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %27 = f32[1]{0} aten::div(%26, %25) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %28 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%27, %24, %21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[1]{0} aten::mul(%28.0, %28.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4]{0} aten::mul(%28.1, %28.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4]{0} aten::mul(%28.2, %28.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %53 = f32[1,4]{1,0} aten::mul(%28.3, %28.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %54 = f32[] aten::sum(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %55 = f32[] aten::sqrt(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %56 = f32[] aten::pow(%55, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %57 = f32[] aten::mul(%56, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %60 = f32[4,4]{1,0} aten::mul(%28.4, %28.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %61 = f32[] aten::sum(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %62 = f32[] aten::sqrt(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %63 = f32[] aten::pow(%62, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %64 = f32[] aten::mul(%63, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %67 = f32[4,4]{1,0} aten::mul(%28.5, %28.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %68 = f32[] aten::sum(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %69 = f32[] aten::sqrt(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %70 = f32[] aten::pow(%69, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %71 = f32[] aten::mul(%70, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %72 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %73 = f32[1]{0} aten::add(%72, %71) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::div(%78, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %80 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%79, %28.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %81 = f32[1]{0} aten::pow(%80.0, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::reciprocal(%82) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::mul(%83, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::expand(%84) tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %86 = s64[] prim::Constant() tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %87 = pred[1]{0} aten::lt(%84, %86) tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %88 = pred[1]{0} aten::expand(%87) tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %89 = f32[1]{0} aten::where(%88, %85, %2) tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %90 = f32[1,4]{1,0} aten::mul(%28.3, %89) tensor_ids = [5, 58, 223, 224], location=clip_grad_norm@grads.py:189, xla_shape=f32[1,4]{1,0}
  %91 = f32[] xla::device_data() tensor_ids = [5, 224], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %92 = f32[] prim::Constant() tensor_ids = [5, 224], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %93 = f32[1,4]{1,0} aten::expand(%92) tensor_ids = [5, 224], location=_init_group@adamw.py:125, xla_shape=f32[1,4]{1,0}, size=(1, 4)
  %94 = f32[1,4]{1,0} aten::mul(%93, %91) tensor_ids = [5, 224], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1,4]{1,0}
  %95 = f32[1,4]{1,0} aten::addcmul(%94, %90, %90, %0) tensor_ids = [5, 224], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1,4]{1,0}, ROOT=0
}


Tensor: id=276, shape=f32[4]{0}, device=NEURON:1, ir_nodes=98
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2, 276], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [2, 276], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[] prim::Constant() tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %19 = f32[1,4]{1,0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %24 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %25 = f32[4]{0} aten::div(%24, %23) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %27 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %28 = f32[1]{0} aten::div(%27, %26) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %29 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%28, %25, %22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[1]{0} aten::mul(%29.0, %29.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4]{0} aten::mul(%29.1, %29.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4]{0} aten::mul(%29.2, %29.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %53 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %54 = f32[1,4]{1,0} aten::mul(%29.3, %29.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %55 = f32[] aten::sum(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %56 = f32[] aten::sqrt(%55) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %57 = f32[] aten::pow(%56, %53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %58 = f32[] aten::mul(%57, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %60 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %61 = f32[4,4]{1,0} aten::mul(%29.4, %29.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %62 = f32[] aten::sum(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %63 = f32[] aten::sqrt(%62) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %64 = f32[] aten::pow(%63, %60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %65 = f32[] aten::mul(%64, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %67 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %68 = f32[4,4]{1,0} aten::mul(%29.5, %29.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %69 = f32[] aten::sum(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %70 = f32[] aten::sqrt(%69) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %71 = f32[] aten::pow(%70, %67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %72 = f32[] aten::mul(%71, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %73 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %74 = f32[1]{0} aten::add(%73, %72) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::div(%79, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %81 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%80, %29.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %82 = f32[1]{0} aten::pow(%81.0, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::reciprocal(%83) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::mul(%84, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %86 = f32[1]{0} aten::expand(%85) tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %87 = s64[] prim::Constant() tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %88 = pred[1]{0} aten::lt(%85, %87) tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %89 = pred[1]{0} aten::expand(%88) tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %90 = f32[1]{0} aten::where(%89, %86, %3) tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %91 = f32[4]{0} aten::mul(%29.2, %90) tensor_ids = [2, 75, 276], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %92 = f32[4]{0} aten::mul(%91, %1) tensor_ids = [2, 276], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %93 = f32[] xla::device_data() tensor_ids = [2, 276], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %94 = f32[] prim::Constant() tensor_ids = [2, 276], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %95 = f32[4]{0} aten::expand(%94) tensor_ids = [2, 276], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %96 = f32[4]{0} aten::mul(%95, %93) tensor_ids = [2, 276], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %97 = f32[4]{0} aten::add(%96, %92) tensor_ids = [2, 276], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=277, shape=f32[4]{0}, device=NEURON:1, ir_nodes=96
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [2, 277], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %18 = f32[1,4]{1,0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %23 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %24 = f32[4]{0} aten::div(%23, %22) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %26 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %27 = f32[1]{0} aten::div(%26, %25) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %28 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%27, %24, %21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[1]{0} aten::mul(%28.0, %28.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4]{0} aten::mul(%28.1, %28.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4]{0} aten::mul(%28.2, %28.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %53 = f32[1,4]{1,0} aten::mul(%28.3, %28.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %54 = f32[] aten::sum(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %55 = f32[] aten::sqrt(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %56 = f32[] aten::pow(%55, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %57 = f32[] aten::mul(%56, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %60 = f32[4,4]{1,0} aten::mul(%28.4, %28.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %61 = f32[] aten::sum(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %62 = f32[] aten::sqrt(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %63 = f32[] aten::pow(%62, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %64 = f32[] aten::mul(%63, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %67 = f32[4,4]{1,0} aten::mul(%28.5, %28.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %68 = f32[] aten::sum(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %69 = f32[] aten::sqrt(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %70 = f32[] aten::pow(%69, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %71 = f32[] aten::mul(%70, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %72 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %73 = f32[1]{0} aten::add(%72, %71) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::div(%78, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %80 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%79, %28.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %81 = f32[1]{0} aten::pow(%80.0, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::reciprocal(%82) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::mul(%83, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::expand(%84) tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %86 = s64[] prim::Constant() tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %87 = pred[1]{0} aten::lt(%84, %86) tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %88 = pred[1]{0} aten::expand(%87) tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %89 = f32[1]{0} aten::where(%88, %85, %2) tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %90 = f32[4]{0} aten::mul(%28.2, %89) tensor_ids = [2, 75, 276, 277], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %91 = f32[] xla::device_data() tensor_ids = [2, 277], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %92 = f32[] prim::Constant() tensor_ids = [2, 277], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %93 = f32[4]{0} aten::expand(%92) tensor_ids = [2, 277], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %94 = f32[4]{0} aten::mul(%93, %91) tensor_ids = [2, 277], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %95 = f32[4]{0} aten::addcmul(%94, %90, %90, %0) tensor_ids = [2, 277], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=278, shape=f32[4]{0}, device=NEURON:1, ir_nodes=98
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4, 278], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %1 = f32[4]{0} aten::expand(%0) tensor_ids = [4, 278], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, size=(4)
  %2 = f32[] prim::Constant() tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %19 = f32[1,4]{1,0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %24 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %25 = f32[4]{0} aten::div(%24, %23) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %27 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %28 = f32[1]{0} aten::div(%27, %26) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %29 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%28, %25, %22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[1]{0} aten::mul(%29.0, %29.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4]{0} aten::mul(%29.1, %29.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4]{0} aten::mul(%29.2, %29.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %53 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %54 = f32[1,4]{1,0} aten::mul(%29.3, %29.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %55 = f32[] aten::sum(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %56 = f32[] aten::sqrt(%55) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %57 = f32[] aten::pow(%56, %53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %58 = f32[] aten::mul(%57, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %60 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %61 = f32[4,4]{1,0} aten::mul(%29.4, %29.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %62 = f32[] aten::sum(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %63 = f32[] aten::sqrt(%62) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %64 = f32[] aten::pow(%63, %60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %65 = f32[] aten::mul(%64, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %67 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %68 = f32[4,4]{1,0} aten::mul(%29.5, %29.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %69 = f32[] aten::sum(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %70 = f32[] aten::sqrt(%69) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %71 = f32[] aten::pow(%70, %67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %72 = f32[] aten::mul(%71, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %73 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %74 = f32[1]{0} aten::add(%73, %72) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::div(%79, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %81 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%80, %29.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %82 = f32[1]{0} aten::pow(%81.0, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::reciprocal(%83) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::mul(%84, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %86 = f32[1]{0} aten::expand(%85) tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %87 = s64[] prim::Constant() tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %88 = pred[1]{0} aten::lt(%85, %87) tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %89 = pred[1]{0} aten::expand(%88) tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %90 = f32[1]{0} aten::where(%89, %86, %3) tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %91 = f32[4]{0} aten::mul(%29.1, %90) tensor_ids = [4, 66, 278], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %92 = f32[4]{0} aten::mul(%91, %1) tensor_ids = [4, 278], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %93 = f32[] xla::device_data() tensor_ids = [4, 278], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %94 = f32[] prim::Constant() tensor_ids = [4, 278], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %95 = f32[4]{0} aten::expand(%94) tensor_ids = [4, 278], location=_init_group@adamw.py:121, xla_shape=f32[4]{0}, size=(4)
  %96 = f32[4]{0} aten::mul(%95, %93) tensor_ids = [4, 278], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}
  %97 = f32[4]{0} aten::add(%96, %92) tensor_ids = [4, 278], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=279, shape=f32[4]{0}, device=NEURON:1, ir_nodes=96
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [4, 279], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %18 = f32[1,4]{1,0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %23 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %24 = f32[4]{0} aten::div(%23, %22) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %26 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %27 = f32[1]{0} aten::div(%26, %25) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %28 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%27, %24, %21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[1]{0} aten::mul(%28.0, %28.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4]{0} aten::mul(%28.1, %28.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4]{0} aten::mul(%28.2, %28.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %53 = f32[1,4]{1,0} aten::mul(%28.3, %28.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %54 = f32[] aten::sum(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %55 = f32[] aten::sqrt(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %56 = f32[] aten::pow(%55, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %57 = f32[] aten::mul(%56, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %60 = f32[4,4]{1,0} aten::mul(%28.4, %28.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %61 = f32[] aten::sum(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %62 = f32[] aten::sqrt(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %63 = f32[] aten::pow(%62, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %64 = f32[] aten::mul(%63, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %67 = f32[4,4]{1,0} aten::mul(%28.5, %28.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %68 = f32[] aten::sum(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %69 = f32[] aten::sqrt(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %70 = f32[] aten::pow(%69, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %71 = f32[] aten::mul(%70, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %72 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %73 = f32[1]{0} aten::add(%72, %71) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::div(%78, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %80 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%79, %28.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %81 = f32[1]{0} aten::pow(%80.0, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::reciprocal(%82) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::mul(%83, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::expand(%84) tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %86 = s64[] prim::Constant() tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %87 = pred[1]{0} aten::lt(%84, %86) tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %88 = pred[1]{0} aten::expand(%87) tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %89 = f32[1]{0} aten::where(%88, %85, %2) tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %90 = f32[4]{0} aten::mul(%28.1, %89) tensor_ids = [4, 66, 278, 279], location=clip_grad_norm@grads.py:189, xla_shape=f32[4]{0}
  %91 = f32[] xla::device_data() tensor_ids = [4, 279], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %92 = f32[] prim::Constant() tensor_ids = [4, 279], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %93 = f32[4]{0} aten::expand(%92) tensor_ids = [4, 279], location=_init_group@adamw.py:125, xla_shape=f32[4]{0}, size=(4)
  %94 = f32[4]{0} aten::mul(%93, %91) tensor_ids = [4, 279], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}
  %95 = f32[4]{0} aten::addcmul(%94, %90, %90, %0) tensor_ids = [4, 279], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[4]{0}, ROOT=0
}


Tensor: id=280, shape=f32[1]{0}, device=NEURON:1, ir_nodes=98
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:61)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [6, 280], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %1 = f32[1]{0} aten::expand(%0) tensor_ids = [6, 280], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}, size=(1)
  %2 = f32[] prim::Constant() tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %3 = f32[1]{0} aten::expand(%2) tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %5 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %6 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %7 = f32[] aten::mul(%6, %5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %8 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %9 = f32[1]{0} aten::expand(%8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %10 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %11 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %12 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %13 = f32[4,4]{1,0} aten::div(%12, %11) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %14 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %15 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %16 = f32[4,4]{1,0} aten::div(%15, %14) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %17 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %18 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %19 = f32[1,4]{1,0} aten::div(%18, %17) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %20 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %21 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %22 = f32[4]{0} aten::div(%21, %20) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %23 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %24 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %25 = f32[4]{0} aten::div(%24, %23) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %26 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %27 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %28 = f32[1]{0} aten::div(%27, %26) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %29 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%28, %25, %22, %19, %16, %13, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %32 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %33 = f32[1]{0} aten::mul(%29.0, %29.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %34 = f32[] aten::sum(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %35 = f32[] aten::sqrt(%34) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %36 = f32[] aten::pow(%35, %32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %37 = f32[] aten::mul(%36, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %39 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %40 = f32[4]{0} aten::mul(%29.1, %29.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %41 = f32[] aten::sum(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %42 = f32[] aten::sqrt(%41) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %43 = f32[] aten::pow(%42, %39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %44 = f32[] aten::mul(%43, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %46 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %47 = f32[4]{0} aten::mul(%29.2, %29.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %48 = f32[] aten::sum(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %49 = f32[] aten::sqrt(%48) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %50 = f32[] aten::pow(%49, %46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %51 = f32[] aten::mul(%50, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %53 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %54 = f32[1,4]{1,0} aten::mul(%29.3, %29.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %55 = f32[] aten::sum(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %56 = f32[] aten::sqrt(%55) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %57 = f32[] aten::pow(%56, %53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %58 = f32[] aten::mul(%57, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %60 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %61 = f32[4,4]{1,0} aten::mul(%29.4, %29.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %62 = f32[] aten::sum(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %63 = f32[] aten::sqrt(%62) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %64 = f32[] aten::pow(%63, %60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %65 = f32[] aten::mul(%64, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %67 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %68 = f32[4,4]{1,0} aten::mul(%29.5, %29.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %69 = f32[] aten::sum(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %70 = f32[] aten::sqrt(%69) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %71 = f32[] aten::pow(%70, %67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %72 = f32[] aten::mul(%71, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %73 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %74 = f32[1]{0} aten::add(%73, %72) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::add(%78, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %80 = f32[1]{0} aten::div(%79, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %81 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%80, %29.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %82 = f32[1]{0} aten::pow(%81.0, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::add(%82, %7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::reciprocal(%83) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::mul(%84, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %86 = f32[1]{0} aten::expand(%85) tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %87 = s64[] prim::Constant() tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %88 = pred[1]{0} aten::lt(%85, %87) tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %89 = pred[1]{0} aten::expand(%88) tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %90 = f32[1]{0} aten::where(%89, %86, %3) tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %91 = f32[1]{0} aten::mul(%29.0, %90) tensor_ids = [6, 57, 280], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %92 = f32[1]{0} aten::mul(%91, %1) tensor_ids = [6, 280], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}
  %93 = f32[] xla::device_data() tensor_ids = [6, 280], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[], device=NEURON:1
  %94 = f32[] prim::Constant() tensor_ids = [6, 280], location=_init_group@adamw.py:121, xla_shape=f32[], value=0
  %95 = f32[1]{0} aten::expand(%94) tensor_ids = [6, 280], location=_init_group@adamw.py:121, xla_shape=f32[1]{0}, size=(1)
  %96 = f32[1]{0} aten::mul(%95, %93) tensor_ids = [6, 280], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}
  %97 = f32[1]{0} aten::add(%96, %92) tensor_ids = [6, 280], location=_single_tensor_adamw_@adamw.py:61, xla_shape=f32[1]{0}, ROOT=0
}


Tensor: id=281, shape=f32[1]{0}, device=NEURON:1, ir_nodes=96
Frames:
  _single_tensor_adamw_ (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/torch_neuronx/optim/adamw.py:62)
  adamw (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:335)
  step (/home/ubuntu/qwb/pytorch/torch/optim/adamw.py:184)
  _use_grad (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:76)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/optimizer.py:373)
  step (/home/ubuntu/qwb/xla-explore-env/lib/python3.8/site-packages/neuronx_distributed/trainer/optimizer.py:82)
  wrapper (/home/ubuntu/qwb/pytorch/torch/optim/lr_scheduler.py:68)
  train_simple_model (run_simple_model_nxd.py:187)
  _mp_fn (run_simple_model_nxd.py:200)
  <module> (run_simple_model_nxd.py:264)
IR {
  %0 = f32[] xla::device_data() tensor_ids = [6, 281], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %1 = f32[] prim::Constant() tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=f32[], value=1
  %2 = f32[1]{0} aten::expand(%1) tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %3 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=__rdiv__@_tensor.py:913, xla_shape=f32[], value=1
  %4 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=clip_grad_norm@grads.py:187, xla_shape=f32[], value=1
  %5 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=clip_grad_norm@grads.py:187, xla_shape=f32[], device=NEURON:1
  %6 = f32[] aten::mul(%5, %4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=clip_grad_norm@grads.py:187, xla_shape=f32[]
  %7 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:136, xla_shape=f32[], value=0.5
  %8 = f32[1]{0} aten::expand(%7) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}, size=(1)
  %9 = f32[] xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=all_reduce@xla_model.py:484, xla_shape=f32[], device=NEURON:1
  %10 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %11 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %12 = f32[4,4]{1,0} aten::div(%11, %10) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %13 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %14 = f32[4,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}, device=NEURON:1
  %15 = f32[4,4]{1,0} aten::div(%14, %13) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4,4]{1,0}
  %16 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %17 = f32[1,4]{1,0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}, device=NEURON:1
  %18 = f32[1,4]{1,0} aten::div(%17, %16) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1,4]{1,0}
  %19 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %20 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %21 = f32[4]{0} aten::div(%20, %19) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %22 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %23 = f32[4]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}, device=NEURON:1
  %24 = f32[4]{0} aten::div(%23, %22) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[4]{0}
  %25 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[], value=1
  %26 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}, device=NEURON:1
  %27 = f32[1]{0} aten::div(%26, %25) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=bucket_allreduce_gradients@grads.py:220, xla_shape=f32[1]{0}
  %28 = (f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]) xla::cross_replica_sum(%27, %24, %21, %18, %15, %12, %9) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], num_outputs=7, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[4]{0}, f32[4]{0}, f32[1,4]{1,0}, f32[4,4]{1,0}, /*index=5*/f32[4,4]{1,0}, f32[]), reduce_type=0, scale=1, pin_layout=1, groups=((0),(1))
  %29 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:129, xla_shape=f32[], value=1
  %30 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %31 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %32 = f32[1]{0} aten::mul(%28.0, %28.0) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[1]{0}
  %33 = f32[] aten::sum(%32) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %34 = f32[] aten::sqrt(%33) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.6, location=norm@functional.py:1624, xla_shape=f32[]
  %35 = f32[] aten::pow(%34, %31) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %36 = f32[] aten::mul(%35, %30) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %37 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %38 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %39 = f32[4]{0} aten::mul(%28.1, %28.1) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %40 = f32[] aten::sum(%39) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %41 = f32[] aten::sqrt(%40) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.5, location=norm@functional.py:1624, xla_shape=f32[]
  %42 = f32[] aten::pow(%41, %38) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %43 = f32[] aten::mul(%42, %37) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %44 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %45 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %46 = f32[4]{0} aten::mul(%28.2, %28.2) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[4]{0}
  %47 = f32[] aten::sum(%46) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0), keep_reduced_dimensions=0, dtype=-1
  %48 = f32[] aten::sqrt(%47) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.4, location=norm@functional.py:1624, xla_shape=f32[]
  %49 = f32[] aten::pow(%48, %45) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %50 = f32[] aten::mul(%49, %44) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %51 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %52 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %53 = f32[1,4]{1,0} aten::mul(%28.3, %28.3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[1,4]{1,0}
  %54 = f32[] aten::sum(%53) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %55 = f32[] aten::sqrt(%54) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.3, location=norm@functional.py:1624, xla_shape=f32[]
  %56 = f32[] aten::pow(%55, %52) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %57 = f32[] aten::mul(%56, %51) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %58 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %59 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %60 = f32[4,4]{1,0} aten::mul(%28.4, %28.4) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %61 = f32[] aten::sum(%60) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %62 = f32[] aten::sqrt(%61) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.2, location=norm@functional.py:1624, xla_shape=f32[]
  %63 = f32[] aten::pow(%62, %59) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %64 = f32[] aten::mul(%63, %58) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %65 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[], value=1
  %66 = f32[] prim::Constant() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[], value=2
  %67 = f32[4,4]{1,0} aten::mul(%28.5, %28.5) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[4,4]{1,0}
  %68 = f32[] aten::sum(%67) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[], dimensions=(0, 1), keep_reduced_dimensions=0, dtype=-1
  %69 = f32[] aten::sqrt(%68) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], scope=aten::norm.1, location=norm@functional.py:1624, xla_shape=f32[]
  %70 = f32[] aten::pow(%69, %66) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=wrapped@_tensor.py:40, xla_shape=f32[]
  %71 = f32[] aten::mul(%70, %65) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[]
  %72 = f32[1]{0} xla::device_data() tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:113, xla_shape=f32[1]{0}, device=NEURON:1
  %73 = f32[1]{0} aten::add(%72, %71) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %74 = f32[1]{0} aten::add(%73, %64) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %75 = f32[1]{0} aten::add(%74, %57) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %76 = f32[1]{0} aten::add(%75, %50) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %77 = f32[1]{0} aten::add(%76, %43) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %78 = f32[1]{0} aten::add(%77, %36) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:128, xla_shape=f32[1]{0}
  %79 = f32[1]{0} aten::div(%78, %29) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:129, xla_shape=f32[1]{0}
  %80 = (f32[1]{0}, f32[]) xla::cross_replica_sum(%79, %28.6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], num_outputs=2, location=all_reduce@xla_model.py:484, xla_shape=(f32[1]{0}, f32[]), reduce_type=0, scale=1, pin_layout=0, groups=((0, 1))
  %81 = f32[1]{0} aten::pow(%80.0, %8) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 171, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=get_grad_norm@grads.py:136, xla_shape=f32[1]{0}
  %82 = f32[1]{0} aten::add(%81, %6) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=clip_grad_norm@grads.py:187, xla_shape=f32[1]{0}
  %83 = f32[1]{0} aten::reciprocal(%82) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %84 = f32[1]{0} aten::mul(%83, %3) tensor_ids = [1, 2, 3, 4, 5, 6, 57, 58, 66, 67, 75, 76, 219, 220, 221, 222, 223, 224, 276, 277, 278, 279, 280, 281], location=__rdiv__@_tensor.py:913, xla_shape=f32[1]{0}
  %85 = f32[1]{0} aten::expand(%84) tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}, size=(1)
  %86 = s64[] prim::Constant() tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=s64[], value=1
  %87 = pred[1]{0} aten::lt(%84, %86) tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}
  %88 = pred[1]{0} aten::expand(%87) tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=pred[1]{0}, size=(1)
  %89 = f32[1]{0} aten::where(%88, %85, %2) tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %90 = f32[1]{0} aten::mul(%28.0, %89) tensor_ids = [6, 57, 280, 281], location=clip_grad_norm@grads.py:189, xla_shape=f32[1]{0}
  %91 = f32[] xla::device_data() tensor_ids = [6, 281], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[], device=NEURON:1
  %92 = f32[] prim::Constant() tensor_ids = [6, 281], location=_init_group@adamw.py:125, xla_shape=f32[], value=0
  %93 = f32[1]{0} aten::expand(%92) tensor_ids = [6, 281], location=_init_group@adamw.py:125, xla_shape=f32[1]{0}, size=(1)
  %94 = f32[1]{0} aten::mul(%93, %91) tensor_ids = [6, 281], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1]{0}
  %95 = f32[1]{0} aten::addcmul(%94, %90, %90, %0) tensor_ids = [6, 281], location=_single_tensor_adamw_@adamw.py:62, xla_shape=f32[1]{0}, ROOT=0
}



    `;

    function getIrNodesMap(input) {
        let result = { '%0': [] }
        const lines = input.split('\n');
        let currentId = '';
        let content = [];

        for (const line of lines) {
            const idMatch = line.match(/id=(\d+)/);
            if (idMatch) {
                // Store the previous content into the result object under the previous ID
                if (currentId !== '') {
                    result[`%${currentId}`] = content;
                }
                // Reset for the new ID
                currentId = idMatch[1];
                content = [];
            }
            // Add the current line to the content array
            content.push(line);
        }

        // Store the last collected content under the last ID
        if (currentId !== '') {
            result[`%${currentId}`] = content;
        }

        return result;
    }

    const irNodesMap = getIrNodesMap(input);

// Todo: 使用async, await保证文件流结果同步
    function readPbFile(absolutePath) {
        let res = '';
        fs.readdir(absolutePath, 'utf8', (err, files) => {
            if (err) {
                console.error('Error reading the file:', err);
                return;
            }
            let cnt = 0;
            for (let i = 0; i < files.length; i++) {
                let file = files[i];
                if (file.endsWith('.pbtxt')) {
                    // 暂时只支持读取第一个文件
                    if (cnt > 1) {
                        break;
                    }
                    const filePath = path.join(absolutePath, file);
                    // 读取并打印文件内容
                    fs.readFile(filePath, 'utf8', (err, data) => {
                        if (err) {
                            console.error("Error reading file:", err);
                            return;
                        }
                        return data;
                    });
                    cnt += 1;
                }
            }
        });
        return res;
    }
    const absolutePath = '/Users/qwb/Desktop/Distributed System Research/HLODiffHelper/antvX6_2.0_React-main/src/Data';
    // const inputText = await readPbFile(absolutePath);

    const nodeRelations = parseHLO(input)

    function getRandomColor() {
        // 生成随机的 R、G、B 分量
        let r = Math.floor(Math.random() * (256 - 128) + 128);
        let g = Math.floor(Math.random() * (256 - 128) + 128);
        let b = Math.floor(Math.random() * (256 - 128) + 128);
        let color = "#" + r.toString(16).padStart(2, '0') + g.toString(16).padStart(2, '0') + b.toString(16).padStart(2, '0');
        return color;
    }

    function extractType(str) {
        const regex = /%([^0-9.]+)[0-9]*\./;
        const match = str.match(regex);
        if (match) {
            return match[1];
        } else {
            const fallbackMatch = str.match(/%([^.]+)\./);
            return fallbackMatch ? fallbackMatch[1] : null;
        }
    }

    function parseHLO() {
        const lines = input.split('\n');
        let relations = {};
        lines.forEach(line => {
            if (line && typeof line !== 'string') {
                return;
            }
            if (!line || line && !line.trim() || line.length === 0) {
                return;
            }
            const regex = /tensor_ids\s*=\s*\[([^\]]+)\]/;
            const matches = line.match(regex);
            if (matches && matches.length > 1) {
                const ids = matches[1].split(',').map(Number);
                // console.log("ids: ", ids)
                for (let i = 1; i < ids.length; i++) {
                    const from = "%" + ids[i - 1].toString();
                    const to = "%" + ids[i].toString();
                    if (!relations[to]) {
                        relations[to] = new Set([]);
                    }
                    if (!relations[from]) {
                        relations[from] = new Set([]);
                    }
                    relations[to].add(from);
                }
            }
        });
        console.log("relations", relations)
        const convertedRelations = {};
        Object.keys(relations).map(key => {
            convertedRelations[key] = Array.from(relations[key]);
        });
        console.log("convertedRelations", convertedRelations)
        return convertedRelations;
    }

    function generateX6Graph(nodes) {
        const graph = [];
        const colors = {};
        const positions = { x: 40, y: 40, width: 100, height: 40 }; // Default positions and dimensions
        const visited = new Set();

        // Generate node objects
        Object.keys(nodes).forEach((node, index) => {
            // prevent from generating duplicate nodes
            if (visited.has(node)) {
                return;
            }
            const match = extractType(node);
            let color = '#fffff';
            if (match in colors) {
                color = colors[match];
            } else {
                color = getRandomColor();
                colors[match] = color;
            }
            graph.push({
                // id: node.replace('%', 'node'),
                id: node,
                x: positions.x,
                // y: positions.y + (index * 50), // Increment y position for each node for clarity
                y: positions.y, // Increment y position for each node for clarity
                width: positions.width,
                height: positions.height,
                label: node,
                shape: 'rect',
                attrs: {
                    body: {
                        fill: color
                    }
                }
            });
            visited.add(node);
        });

        // Generate edges and %p node
        Object.entries(nodes).forEach(([target, sources]) => {
            sources.forEach(source => {
                if (!visited.has(source)) {
                    const match = extractType(source);
                    let color = '#fffff';
                    if (match in colors) {
                        color = colors[match];
                    } else {
                        color = getRandomColor();
                        colors[match] = color;
                    }
                    graph.push({
                        // id: node.replace('%', 'node'),
                        id: source,
                        x: positions.x,
                        // y: positions.y + (index * 50), // Increment y position for each node for clarity
                        y: positions.y, // Increment y position for each node for clarity
                        width: positions.width,
                        height: positions.height,
                        label: source,
                        shape: 'rect',
                        attrs: {
                            body: {
                                fill: color
                            }
                        }
                    });
                    visited.add(source);
                }
                const edgeName = CryptoJS.MD5(source + target).toString(); // MD5 hash of source and target names
                graph.push({
                    id: 'edge' + edgeName,
                    // source: source.replace('%', 'node'),
                    // target: target.replace('%', 'node'),
                    source: source,
                    target: target,
                    shape: 'edge'
                });
            });
        });

        return graph;
    }

    const X6GraphRepresentation = generateX6Graph(nodeRelations);
    return [irNodesMap, nodeRelations, X6GraphRepresentation];
}

export default pb2X6;

