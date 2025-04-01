const text = `
    HloModule SyncTensorsGraph.1711, input_output_alias={ {0}: (40, {}, must-alias) }

%MaxComputation.421 (x.422: f32[], y.423: f32[]) -> f32[] {
  %x.422 = f32[] parameter(0)
  %y.423 = f32[] parameter(1)
  ROOT %maximum.424 = f32[] maximum(f32[] %x.422, f32[] %y.423)
}

%AddComputation.430 (x.431: f32[], y.432: f32[]) -> f32[] {
  %x.431 = f32[] parameter(0)
  %y.432 = f32[] parameter(1)
  ROOT %add.433 = f32[] add(f32[] %x.431, f32[] %y.432)
}

%AddComputation.1187 (x.1188: f32[], y.1189: f32[]) -> f32[] {
  %x.1188 = f32[] parameter(0)
  %y.1189 = f32[] parameter(1)
  ROOT %add.1190 = f32[] add(f32[] %x.1188, f32[] %y.1189)
}

%ScatterCombiner.1283 (p0.1284: f32[], p1.1285: f32[]) -> f32[] {
  %p0.1284 = f32[] parameter(0)
  %p1.1285 = f32[] parameter(1)
  ROOT %add.1286 = f32[] add(f32[] %p0.1284, f32[] %p1.1285)
}

%AddComputation.1334 (x.1335: f32[], y.1336: f32[]) -> f32[] {
  %x.1335 = f32[] parameter(0)
  %y.1336 = f32[] parameter(1)
  ROOT %add.1337 = f32[] add(f32[] %x.1335, f32[] %y.1336)
}

%AddComputation.1350 (x.1351: f32[], y.1352: f32[]) -> f32[] {
  %x.1351 = f32[] parameter(0)
  %y.1352 = f32[] parameter(1)
  ROOT %add.1353 = f32[] add(f32[] %x.1351, f32[] %y.1352)
}

%AddComputation.1406 (x.1407: f32[], y.1408: f32[]) -> f32[] {
  %x.1407 = f32[] parameter(0)
  %y.1408 = f32[] parameter(1)
  ROOT %add.1409 = f32[] add(f32[] %x.1407, f32[] %y.1408)
}

%AddComputation.1429 (x.1430: f32[], y.1431: f32[]) -> f32[] {
  %x.1430 = f32[] parameter(0)
  %y.1431 = f32[] parameter(1)
  ROOT %add.1432 = f32[] add(f32[] %x.1430, f32[] %y.1431)
}

%AddComputation.1445 (x.1446: f32[], y.1447: f32[]) -> f32[] {
  %x.1446 = f32[] parameter(0)
  %y.1447 = f32[] parameter(1)
  ROOT %add.1448 = f32[] add(f32[] %x.1446, f32[] %y.1447)
}

%AddComputation.1472 (x.1473: f32[], y.1474: f32[]) -> f32[] {
  %x.1473 = f32[] parameter(0)
  %y.1474 = f32[] parameter(1)
  ROOT %add.1475 = f32[] add(f32[] %x.1473, f32[] %y.1474)
}

%AddComputation.1499 (x.1500: f32[], y.1501: f32[]) -> f32[] {
  %x.1500 = f32[] parameter(0)
  %y.1501 = f32[] parameter(1)
  ROOT %add.1502 = f32[] add(f32[] %x.1500, f32[] %y.1501)
}

%AddComputation.1522 (x.1523: f32[], y.1524: f32[]) -> f32[] {
  %x.1523 = f32[] parameter(0)
  %y.1524 = f32[] parameter(1)
  ROOT %add.1525 = f32[] add(f32[] %x.1523, f32[] %y.1524)
}

%AddComputation.1538 (x.1539: f32[], y.1540: f32[]) -> f32[] {
  %x.1539 = f32[] parameter(0)
  %y.1540 = f32[] parameter(1)
  ROOT %add.1541 = f32[] add(f32[] %x.1539, f32[] %y.1540)
}

%AddComputation.1613 (x.1614: f32[], y.1615: f32[]) -> f32[] {
  %x.1614 = f32[] parameter(0)
  %y.1615 = f32[] parameter(1)
  ROOT %add.1616 = f32[] add(f32[] %x.1614, f32[] %y.1615)
}

%AddComputation.1636 (x.1637: f32[], y.1638: f32[]) -> f32[] {
  %x.1637 = f32[] parameter(0)
  %y.1638 = f32[] parameter(1)
  ROOT %add.1639 = f32[] add(f32[] %x.1637, f32[] %y.1638)
}

%SimpleCrossEntropyLossForwardAdd.800 (p0.801: f32[], p1.802: f32[]) -> f32[] {
  %p0.801 = f32[] parameter(0)
  %p1.802 = f32[] parameter(1)
  ROOT %add.803 = f32[] add(f32[] %p0.801, f32[] %p1.802)
}

%SimpleCrossEntropyLossForwardAdd.804 (p0.805: f32[], p1.806: f32[]) -> f32[] {
  %p0.805 = f32[] parameter(0)
  %p1.806 = f32[] parameter(1)
  ROOT %add.807 = f32[] add(f32[] %p0.805, f32[] %p1.806)
}

%SimpleCrossEntropyLossForwardAdd.808 (p0.809: f32[], p1.810: f32[]) -> f32[] {
  %p0.809 = f32[] parameter(0)
  %p1.810 = f32[] parameter(1)
  ROOT %add.811 = f32[] add(f32[] %p0.809, f32[] %p1.810)
}

%SimpleCrossEntropyLossForwardAdd.812 (p0.813: f32[], p1.814: f32[]) -> f32[] {
  %p0.813 = f32[] parameter(0)
  %p1.814 = f32[] parameter(1)
  ROOT %add.815 = f32[] add(f32[] %p0.813, f32[] %p1.814)
}

%SimpleCrossEntropyLossBackwardAdd.927 (p0.928: f32[], p1.929: f32[]) -> f32[] {
  %p0.928 = f32[] parameter(0)
  %p1.929 = f32[] parameter(1)
  ROOT %add.930 = f32[] add(f32[] %p0.928, f32[] %p1.929)
}

%SimpleCrossEntropyLossForwardMax.613 (p0.614: f32[], p1.615: f32[]) -> f32[] {
  %p0.614 = f32[] parameter(0)
  %p1.615 = f32[] parameter(1)
  ROOT %maximum.616 = f32[] maximum(f32[] %p0.614, f32[] %p1.615)
}

%SimpleCrossEntropyLossForwardAdd.617 (p0.618: f32[], p1.619: f32[]) -> f32[] {
  %p0.618 = f32[] parameter(0)
  %p1.619 = f32[] parameter(1)
  ROOT %add.620 = f32[] add(f32[] %p0.618, f32[] %p1.619)
}

%SimpleCrossEntropyLossForwardAdd.621 (p0.622: f32[], p1.623: f32[]) -> f32[] {
  %p0.622 = f32[] parameter(0)
  %p1.623 = f32[] parameter(1)
  ROOT %add.624 = f32[] add(f32[] %p0.622, f32[] %p1.623)
}

%Int32PermissiveEmbeddingScatterCombiner.1652 (p0.1653: f32[], p1.1654: f32[]) -> f32[] {
  %p0.1653 = f32[] parameter(0)
  %p1.1654 = f32[] parameter(1)
  ROOT %add.1655 = f32[] add(f32[] %p0.1653, f32[] %p1.1654)
}

%Int32PermissiveEmbeddingScatterCombiner.1681 (p0.1682: f32[], p1.1683: f32[]) -> f32[] {
  %p0.1682 = f32[] parameter(0)
  %p1.1683 = f32[] parameter(1)
  ROOT %add.1684 = f32[] add(f32[] %p0.1682, f32[] %p1.1683)
}

%SimpleCrossEntropyLossForwardMax.796 (p0.797: f32[], p1.798: f32[]) -> f32[] {
  %p0.797 = f32[] parameter(0)
  %p1.798 = f32[] parameter(1)
  ROOT %maximum.799 = f32[] maximum(f32[] %p0.797, f32[] %p1.798)
}

%AddComputation.963 (x.964: f32[], y.965: f32[]) -> f32[] {
  %x.964 = f32[] parameter(0)
  %y.965 = f32[] parameter(1)
  ROOT %add.966 = f32[] add(f32[] %x.964, f32[] %y.965)
}

%AddComputation.1311 (x.1312: f32[], y.1313: f32[]) -> f32[] {
  %x.1312 = f32[] parameter(0)
  %y.1313 = f32[] parameter(1)
  ROOT %add.1314 = f32[] add(f32[] %x.1312, f32[] %y.1313)
}

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add.12 = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

%AddComputation.1557 (x.1558: f32[], y.1559: f32[]) -> f32[] {
  %x.1558 = f32[] parameter(0)
  %y.1559 = f32[] parameter(1)
  ROOT %add.1560 = f32[] add(f32[] %x.1558, f32[] %y.1559)
}

%AddComputation.1577 (x.1578: f32[], y.1579: f32[]) -> f32[] {
  %x.1578 = f32[] parameter(0)
  %y.1579 = f32[] parameter(1)
  ROOT %add.1580 = f32[] add(f32[] %x.1578, f32[] %y.1579)
}

%AddComputation.1597 (x.1598: f32[], y.1599: f32[]) -> f32[] {
  %x.1598 = f32[] parameter(0)
  %y.1599 = f32[] parameter(1)
  ROOT %add.1600 = f32[] add(f32[] %x.1598, f32[] %y.1599)
}

ENTRY %SyncTensorsGraph.1711 (p0.4: s64[1], p1.5: f32[2], p2.13: f32[2,16], p3.22: f32[16], p4.30: f32[16,16], p5.40: f32[16], p6.74: f32[16], p7.107: f32[], p8.108: s64[], p9.144: f32[16], p10.177: s64[1,512], p11.181: f32[512,16], p12.198: s64[1,128], p13.200: f32[2,16], p14.212: s64[1,128], p15.214: f32[30522,16], p16.235: f32[16], p17.295: f32[16], p18.297: f32[16,16], p19.304: f32[16], p20.306: f32[16,16], p21.352: f32[], p22.353: s64[1,128], p23.374: f32[], p24.380: f32[16], p25.382: f32[16,16], p26.399: f32[16], p27.401: f32[16,16], p28.459: f32[16], p29.514: f32[16], p30.523: f32[16,4096], p31.537: f32[4096], p32.546: f32[4096,16], p33.586: f32[16], p34.675: s64[1,128], p35.682: f32[30522], p36.700: f32[16], p37.733: f32[16], p38.742: f32[16,16], p39.773: f32[16], p40.862: f32[1], p41.1265: s64[]) -> (f32[1], f32[1,128,30522], f32[1,2], f32[], f32[], /*index=5*/f32[2], f32[2,16], f32[30522], f32[30522,16], f32[16], /*index=10*/f32[16], f32[16], f32[16,16], f32[16], f32[16,16], /*index=15*/f32[16], f32[16], f32[16], f32[16,4096], f32[4096], /*index=20*/f32[4096,16], f32[16], f32[16], f32[16], f32[16,16], /*index=25*/f32[16], f32[16,16], f32[16], f32[16,16], f32[16], /*index=30*/f32[16,16], f32[16], f32[16], f32[512,16], f32[2,16]) {
  %p40.862 = f32[1]{0} parameter(40), frontend_attributes={neff_input_names="input40"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=510}
  %p34.675 = s64[1,128]{1,0} parameter(34), frontend_attributes={neff_input_names="input34"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1134}
  %constant.7 = s64[] constant(-100)
  %broadcast.184 = s64[1,128]{1,0} broadcast(s64[] %constant.7), dimensions={}
  %compare.8 = pred[1,128]{1,0} compare(s64[1,128]{1,0} %p34.675, s64[1,128]{1,0} %broadcast.184), direction=NE
  %reshape.447 = pred[128]{0} reshape(pred[1,128]{1,0} %compare.8)
  %p39.773 = f32[16]{0} parameter(39), frontend_attributes={neff_input_names="input39"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.72 = f32[16]{0} custom-call(f32[16]{0} %p39.773), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.786 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.72), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p33.586 = f32[16]{0} parameter(33), frontend_attributes={neff_input_names="input33"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.55 = f32[16]{0} custom-call(f32[16]{0} %p33.586), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.599 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.55), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p28.459 = f32[16]{0} parameter(28), frontend_attributes={neff_input_names="input28"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.56 = f32[16]{0} custom-call(f32[16]{0} %p28.459), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.472 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.56), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p16.235 = f32[16]{0} parameter(16), frontend_attributes={neff_input_names="input16"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.57 = f32[16]{0} custom-call(f32[16]{0} %p16.235), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.248 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.57), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p15.214 = f32[30522,16]{1,0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.58 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %p15.214), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p14.212 = s64[1,128]{1,0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %convert.6 = u32[1,128]{1,0} convert(s64[1,128]{1,0} %p14.212)
  %reshape.304 = u32[128]{0} reshape(u32[1,128]{1,0} %convert.6), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %gather.223 = f32[128,16]{1,0} gather(f32[30522,16]{1,0} %custom-call.58, u32[128]{0} %reshape.304), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %p13.200 = f32[2,16]{1,0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.59 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %p13.200), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p12.198 = s64[1,128]{1,0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %convert.5 = u32[1,128]{1,0} convert(s64[1,128]{1,0} %p12.198)
  %reshape.303 = u32[128]{0} reshape(u32[1,128]{1,0} %convert.5), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %gather.209 = f32[128,16]{1,0} gather(f32[2,16]{1,0} %custom-call.59, u32[128]{0} %reshape.303), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %add.13 = f32[128,16]{1,0} add(f32[128,16]{1,0} %gather.223, f32[128,16]{1,0} %gather.209), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=235}
  %p11.181 = f32[512,16]{1,0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.60 = f32[512,16]{1,0} custom-call(f32[512,16]{1,0} %p11.181), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p10.177 = s64[1,512]{1,0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=218}
  %convert.4 = u32[1,512]{1,0} convert(s64[1,512]{1,0} %p10.177)
  %slice.0 = u32[1,128]{1,0} slice(u32[1,512]{1,0} %convert.4), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %reshape.301 = u32[128]{0} reshape(u32[1,128]{1,0} %slice.0), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %gather.190 = f32[128,16]{1,0} gather(f32[512,16]{1,0} %custom-call.60, u32[128]{0} %reshape.301), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %add.16 = f32[128,16]{1,0} add(f32[128,16]{1,0} %add.13, f32[128,16]{1,0} %gather.190), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %reshape.469 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %add.16), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %constant.167 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.171 = f32[128]{0} broadcast(f32[] %constant.167), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.162 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.166 = f32[128]{0} broadcast(f32[] %constant.162), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.227 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %reshape.469, f32[128]{0} %broadcast.171, f32[128]{0} %broadcast.166), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.228 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.227), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p9.144 = f32[16]{0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.61 = f32[16]{0} custom-call(f32[16]{0} %p9.144), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.244 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.61), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.247 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.228, f32[1,128,16]{2,1,0} %broadcast.244), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.249 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %broadcast.248, f32[1,128,16]{2,1,0} %multiply.247), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.109 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %p8.108 = s64[] parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.110 = s64[] multiply(s64[] %constant.109, s64[] %p8.108), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.111 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.112 = s64[] add(s64[] %multiply.110, s64[] %constant.111), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.119 = u64[] convert(s64[] %add.112), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.121 = u64[1]{0} reshape(u64[] %convert.119), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.41 = u64[1]{0} constant({0})
  %concatenate.123 = u64[2]{0} concatenate(u64[1]{0} %reshape.121, u64[1]{0} %constant.41), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.124 = (u64[2]{0}, u32[1,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.123), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.125 = u32[1,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[1,128,16]{2,1,0}) %rng-bit-generator.124), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.127 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.128 = u32[1,128,16]{2,1,0} broadcast(u32[] %constant.127), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.129 = u32[1,128,16]{2,1,0} shift-right-logical(u32[1,128,16]{2,1,0} %get-tuple-element.125, u32[1,128,16]{2,1,0} %broadcast.128), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.130 = f32[1,128,16]{2,1,0} convert(u32[1,128,16]{2,1,0} %shift-right-logical.129), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.131 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.132 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.131), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.136 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %convert.130, f32[1,128,16]{2,1,0} %broadcast.132), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %p7.107 = f32[] parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.116 = f32[1,128,16]{2,1,0} broadcast(f32[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.139 = pred[1,128,16]{2,1,0} compare(f32[1,128,16]{2,1,0} %multiply.136, f32[1,128,16]{2,1,0} %broadcast.116), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.23 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.4 = f32[] divide(f32[] %constant.23, f32[] %p7.107)
  %broadcast.41 = f32[1,128,16]{2,1,0} broadcast(f32[] %divide.4), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.34 = f32[] constant(0)
  %broadcast.98 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.34), dimensions={}
  %select.13 = f32[1,128,16]{2,1,0} select(pred[1,128,16]{2,1,0} %compare.139, f32[1,128,16]{2,1,0} %broadcast.41, f32[1,128,16]{2,1,0} %broadcast.98), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.251 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.249, f32[1,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.403 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p27.401 = f32[16,16]{1,0} parameter(27), frontend_attributes={neff_input_names="input27"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.402 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %p27.401), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.404 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.403, f32[16,16]{0,1} %transpose.402), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.405 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.404), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p26.399 = f32[16]{0} parameter(26), frontend_attributes={neff_input_names="input26"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.406 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %p26.399), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.407 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.405, f32[1,128,16]{2,1,0} %broadcast.406), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.408 = f32[1,128,2,8]{3,2,1,0} reshape(f32[1,128,16]{2,1,0} %add.407), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %transpose.409 = f32[1,2,128,8]{3,1,2,0} transpose(f32[1,128,2,8]{3,2,1,0} %reshape.408), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.411 = f32[2,128,8]{2,1,0} reshape(f32[1,2,128,8]{3,1,2,0} %transpose.409), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.384 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p25.382 = f32[16,16]{1,0} parameter(25), frontend_attributes={neff_input_names="input25"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.383 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %p25.382), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.385 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.384, f32[16,16]{0,1} %transpose.383), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.386 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.385), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p24.380 = f32[16]{0} parameter(24), frontend_attributes={neff_input_names="input24"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.387 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %p24.380), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.388 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.386, f32[1,128,16]{2,1,0} %broadcast.387), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.389 = f32[1,128,2,8]{3,2,1,0} reshape(f32[1,128,16]{2,1,0} %add.388), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %transpose.391 = f32[1,2,8,128]{2,1,3,0} transpose(f32[1,128,2,8]{3,2,1,0} %reshape.389), dimensions={0,2,3,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.393 = f32[2,8,128]{2,1,0} reshape(f32[1,2,8,128]{2,1,3,0} %transpose.391), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %dot.412 = f32[2,128,128]{2,1,0} dot(f32[2,128,8]{2,1,0} %reshape.411, f32[2,8,128]{2,1,0} %reshape.393), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %p23.374 = f32[] parameter(23), frontend_attributes={neff_input_names="input23"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %broadcast.186 = f32[2,128,128]{2,1,0} broadcast(f32[] %p23.374), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %divide.8 = f32[2,128,128]{2,1,0} divide(f32[2,128,128]{2,1,0} %dot.412, f32[2,128,128]{2,1,0} %broadcast.186), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %reshape.433 = f32[1,2,128,128]{3,2,1,0} reshape(f32[2,128,128]{2,1,0} %divide.8), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %constant.365 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %broadcast.188 = f32[1,128]{1,0} broadcast(f32[] %constant.365), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p22.353 = s64[1,128]{1,0} parameter(22), frontend_attributes={neff_input_names="input22"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=958}
  %convert.2 = f32[1,128]{1,0} convert(s64[1,128]{1,0} %p22.353), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=969}
  %subtract.4 = f32[1,128]{1,0} subtract(f32[1,128]{1,0} %broadcast.188, f32[1,128]{1,0} %convert.2), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p21.352 = f32[] parameter(21), frontend_attributes={neff_input_names="input21"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %broadcast.194 = f32[1,128]{1,0} broadcast(f32[] %p21.352), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %multiply.31 = f32[1,128]{1,0} multiply(f32[1,128]{1,0} %subtract.4, f32[1,128]{1,0} %broadcast.194), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %reshape.50 = f32[128]{0} reshape(f32[1,128]{1,0} %multiply.31)
  %broadcast.418 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[128]{0} %reshape.50), dimensions={3}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %add.419 = f32[1,2,128,128]{3,2,1,0} add(f32[1,2,128,128]{3,2,1,0} %reshape.433, f32[1,2,128,128]{3,2,1,0} %broadcast.418), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %constant.420 = f32[] constant(-inf), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.425 = f32[1,2,128]{2,1,0} reduce(f32[1,2,128,128]{3,2,1,0} %add.419, f32[] %constant.420), dimensions={3}, to_apply=%MaxComputation.421, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.52 = f32[2,128]{1,0} reshape(f32[1,2,128]{2,1,0} %reduce.425)
  %broadcast.426 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[2,128]{1,0} %reshape.52), dimensions={1,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %subtract.427 = f32[1,2,128,128]{3,2,1,0} subtract(f32[1,2,128,128]{3,2,1,0} %add.419, f32[1,2,128,128]{3,2,1,0} %broadcast.426), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %exponential.428 = f32[1,2,128,128]{3,2,1,0} exponential(f32[1,2,128,128]{3,2,1,0} %subtract.427), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.429 = f32[] constant(0), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.434 = f32[1,2,128]{2,1,0} reduce(f32[1,2,128,128]{3,2,1,0} %exponential.428, f32[] %constant.429), dimensions={3}, to_apply=%AddComputation.430, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.53 = f32[2,128]{1,0} reshape(f32[1,2,128]{2,1,0} %reduce.434)
  %broadcast.435 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[2,128]{1,0} %reshape.53), dimensions={1,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %divide.436 = f32[1,2,128,128]{3,2,1,0} divide(f32[1,2,128,128]{3,2,1,0} %exponential.428, f32[1,2,128,128]{3,2,1,0} %broadcast.435), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.252 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.253 = s64[] multiply(s64[] %constant.252, s64[] %add.112), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.254 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.255 = s64[] add(s64[] %multiply.253, s64[] %constant.254), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.323 = u64[] convert(s64[] %add.255), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.325 = u64[1]{0} reshape(u64[] %convert.323), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.42 = u64[1]{0} constant({0})
  %concatenate.327 = u64[2]{0} concatenate(u64[1]{0} %reshape.325, u64[1]{0} %constant.42), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.328 = (u64[2]{0}, u32[1,2,128,128]{3,2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.327), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.329 = u32[1,2,128,128]{3,2,1,0} get-tuple-element((u64[2]{0}, u32[1,2,128,128]{3,2,1,0}) %rng-bit-generator.328), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.331 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.332 = u32[1,2,128,128]{3,2,1,0} broadcast(u32[] %constant.331), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.333 = u32[1,2,128,128]{3,2,1,0} shift-right-logical(u32[1,2,128,128]{3,2,1,0} %get-tuple-element.329, u32[1,2,128,128]{3,2,1,0} %broadcast.332), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.334 = f32[1,2,128,128]{3,2,1,0} convert(u32[1,2,128,128]{3,2,1,0} %shift-right-logical.333), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.335 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.336 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[] %constant.335), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.340 = f32[1,2,128,128]{3,2,1,0} multiply(f32[1,2,128,128]{3,2,1,0} %convert.334, f32[1,2,128,128]{3,2,1,0} %broadcast.336), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.320 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.343 = pred[1,2,128,128]{3,2,1,0} compare(f32[1,2,128,128]{3,2,1,0} %multiply.340, f32[1,2,128,128]{3,2,1,0} %broadcast.320), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.24 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.5 = f32[] divide(f32[] %constant.24, f32[] %p7.107)
  %broadcast.49 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[] %divide.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.33 = f32[] constant(0)
  %broadcast.92 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[] %constant.33), dimensions={}
  %select.12 = f32[1,2,128,128]{3,2,1,0} select(pred[1,2,128,128]{3,2,1,0} %compare.343, f32[1,2,128,128]{3,2,1,0} %broadcast.49, f32[1,2,128,128]{3,2,1,0} %broadcast.92), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.437 = f32[1,2,128,128]{3,2,1,0} multiply(f32[1,2,128,128]{3,2,1,0} %divide.436, f32[1,2,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.439 = f32[2,128,128]{2,1,0} reshape(f32[1,2,128,128]{3,2,1,0} %multiply.437), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.308 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p20.306 = f32[16,16]{1,0} parameter(20), frontend_attributes={neff_input_names="input20"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.307 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %p20.306), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.309 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.308, f32[16,16]{0,1} %transpose.307), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.310 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.309), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p19.304 = f32[16]{0} parameter(19), frontend_attributes={neff_input_names="input19"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.311 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %p19.304), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.312 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.310, f32[1,128,16]{2,1,0} %broadcast.311), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.313 = f32[1,128,2,8]{3,2,1,0} reshape(f32[1,128,16]{2,1,0} %add.312), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %transpose.314 = f32[1,2,128,8]{3,1,2,0} transpose(f32[1,128,2,8]{3,2,1,0} %reshape.313), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.316 = f32[2,128,8]{2,1,0} reshape(f32[1,2,128,8]{3,1,2,0} %transpose.314), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %dot.440 = f32[2,128,8]{2,1,0} dot(f32[2,128,128]{2,1,0} %reshape.439, f32[2,128,8]{2,1,0} %reshape.316), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.441 = f32[1,2,128,8]{3,2,1,0} reshape(f32[2,128,8]{2,1,0} %dot.440), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.442 = f32[1,128,2,8]{3,1,2,0} transpose(f32[1,2,128,8]{3,2,1,0} %reshape.441), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.444 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{3,1,2,0} %transpose.442), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p18.297 = f32[16,16]{1,0} parameter(18), frontend_attributes={neff_input_names="input18"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.298 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %p18.297), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.445 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.444, f32[16,16]{0,1} %transpose.298), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.446 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.445), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %p17.295 = f32[16]{0} parameter(17), frontend_attributes={neff_input_names="input17"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %broadcast.447 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %p17.295), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %add.448 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.446, f32[1,128,16]{2,1,0} %broadcast.447), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %constant.256 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.257 = s64[] multiply(s64[] %constant.256, s64[] %add.255), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.258 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.259 = s64[] add(s64[] %multiply.257, s64[] %constant.258), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.266 = u64[] convert(s64[] %add.259), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.268 = u64[1]{0} reshape(u64[] %convert.266), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.43 = u64[1]{0} constant({0})
  %concatenate.270 = u64[2]{0} concatenate(u64[1]{0} %reshape.268, u64[1]{0} %constant.43), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.271 = (u64[2]{0}, u32[1,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.270), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.272 = u32[1,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[1,128,16]{2,1,0}) %rng-bit-generator.271), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.274 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.275 = u32[1,128,16]{2,1,0} broadcast(u32[] %constant.274), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.276 = u32[1,128,16]{2,1,0} shift-right-logical(u32[1,128,16]{2,1,0} %get-tuple-element.272, u32[1,128,16]{2,1,0} %broadcast.275), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.277 = f32[1,128,16]{2,1,0} convert(u32[1,128,16]{2,1,0} %shift-right-logical.276), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.278 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.279 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.278), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.283 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %convert.277, f32[1,128,16]{2,1,0} %broadcast.279), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.263 = f32[1,128,16]{2,1,0} broadcast(f32[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.286 = pred[1,128,16]{2,1,0} compare(f32[1,128,16]{2,1,0} %multiply.283, f32[1,128,16]{2,1,0} %broadcast.263), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.25 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.6 = f32[] divide(f32[] %constant.25, f32[] %p7.107)
  %broadcast.53 = f32[1,128,16]{2,1,0} broadcast(f32[] %divide.6), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.32 = f32[] constant(0)
  %broadcast.88 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.32), dimensions={}
  %select.11 = f32[1,128,16]{2,1,0} select(pred[1,128,16]{2,1,0} %compare.286, f32[1,128,16]{2,1,0} %broadcast.53, f32[1,128,16]{2,1,0} %broadcast.88), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.449 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.448, f32[1,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.450 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %multiply.449, f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=388}
  %constant.97 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.101 = f32[128]{0} broadcast(f32[] %constant.97), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.92 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.96 = f32[128]{0} broadcast(f32[] %constant.92), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.451 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %add.450, f32[128]{0} %broadcast.101, f32[128]{0} %broadcast.96), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.452 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.451), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p6.74 = f32[16]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.62 = f32[16]{0} custom-call(f32[16]{0} %p6.74), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.468 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.62), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.471 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.452, f32[1,128,16]{2,1,0} %broadcast.468), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.473 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %broadcast.472, f32[1,128,16]{2,1,0} %multiply.471), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.555 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.473), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p32.546 = f32[4096,16]{1,0} parameter(32), frontend_attributes={neff_input_names="input32"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.63 = f32[4096,16]{1,0} custom-call(f32[4096,16]{1,0} %p32.546), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.554 = f32[16,4096]{0,1} transpose(f32[4096,16]{1,0} %custom-call.63), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.556 = f32[128,4096]{1,0} dot(f32[128,16]{1,0} %reshape.555, f32[16,4096]{0,1} %transpose.554), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.557 = f32[1,128,4096]{2,1,0} reshape(f32[128,4096]{1,0} %dot.556), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p31.537 = f32[4096]{0} parameter(31), frontend_attributes={neff_input_names="input31"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.64 = f32[4096]{0} custom-call(f32[4096]{0} %p31.537), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.558 = f32[1,128,4096]{2,1,0} broadcast(f32[4096]{0} %custom-call.64), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.559 = f32[1,128,4096]{2,1,0} add(f32[1,128,4096]{2,1,0} %reshape.557, f32[1,128,4096]{2,1,0} %broadcast.558), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.65 = f32[1,128,4096]{2,1,0} custom-call(f32[1,128,4096]{2,1,0} %add.559), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.569 = f32[128,4096]{1,0} reshape(f32[1,128,4096]{2,1,0} %custom-call.65), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p30.523 = f32[16,4096]{1,0} parameter(30), frontend_attributes={neff_input_names="input30"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.66 = f32[16,4096]{1,0} custom-call(f32[16,4096]{1,0} %p30.523), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.531 = f32[4096,16]{0,1} transpose(f32[16,4096]{1,0} %custom-call.66), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.570 = f32[128,16]{1,0} dot(f32[128,4096]{1,0} %reshape.569, f32[4096,16]{0,1} %transpose.531), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.571 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.570), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p29.514 = f32[16]{0} parameter(29), frontend_attributes={neff_input_names="input29"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.67 = f32[16]{0} custom-call(f32[16]{0} %p29.514), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.572 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.67), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.573 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.571, f32[1,128,16]{2,1,0} %broadcast.572), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.475 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.476 = s64[] multiply(s64[] %constant.475, s64[] %add.259), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.477 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.478 = s64[] add(s64[] %multiply.476, s64[] %constant.477), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.485 = u64[] convert(s64[] %add.478), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.487 = u64[1]{0} reshape(u64[] %convert.485), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.45 = u64[1]{0} constant({0})
  %concatenate.489 = u64[2]{0} concatenate(u64[1]{0} %reshape.487, u64[1]{0} %constant.45), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.490 = (u64[2]{0}, u32[1,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.489), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.491 = u32[1,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[1,128,16]{2,1,0}) %rng-bit-generator.490), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.493 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.494 = u32[1,128,16]{2,1,0} broadcast(u32[] %constant.493), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.495 = u32[1,128,16]{2,1,0} shift-right-logical(u32[1,128,16]{2,1,0} %get-tuple-element.491, u32[1,128,16]{2,1,0} %broadcast.494), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.496 = f32[1,128,16]{2,1,0} convert(u32[1,128,16]{2,1,0} %shift-right-logical.495), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.497 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.498 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.497), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.502 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %convert.496, f32[1,128,16]{2,1,0} %broadcast.498), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.482 = f32[1,128,16]{2,1,0} broadcast(f32[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.505 = pred[1,128,16]{2,1,0} compare(f32[1,128,16]{2,1,0} %multiply.502, f32[1,128,16]{2,1,0} %broadcast.482), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.26 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.7 = f32[] divide(f32[] %constant.26, f32[] %p7.107)
  %broadcast.58 = f32[1,128,16]{2,1,0} broadcast(f32[] %divide.7), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.31 = f32[] constant(0)
  %broadcast.85 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.31), dimensions={}
  %select.10 = f32[1,128,16]{2,1,0} select(pred[1,128,16]{2,1,0} %compare.505, f32[1,128,16]{2,1,0} %broadcast.58, f32[1,128,16]{2,1,0} %broadcast.85), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.576 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.573, f32[1,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.577 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %multiply.576, f32[1,128,16]{2,1,0} %add.473), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=466}
  %constant.63 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.67 = f32[128]{0} broadcast(f32[] %constant.63), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.58 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.62 = f32[128]{0} broadcast(f32[] %constant.58), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.578 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %add.577, f32[128]{0} %broadcast.67, f32[128]{0} %broadcast.62), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.579 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.578), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p5.40 = f32[16]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.68 = f32[16]{0} custom-call(f32[16]{0} %p5.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.595 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.68), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.598 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.579, f32[1,128,16]{2,1,0} %broadcast.595), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.600 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %broadcast.599, f32[1,128,16]{2,1,0} %multiply.598), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.751 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.600), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p38.742 = f32[16,16]{1,0} parameter(38), frontend_attributes={neff_input_names="input38"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.69 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p38.742), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.750 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.69), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.752 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.751, f32[16,16]{0,1} %transpose.750), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.753 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.752), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p37.733 = f32[16]{0} parameter(37), frontend_attributes={neff_input_names="input37"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.70 = f32[16]{0} custom-call(f32[16]{0} %p37.733), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.754 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.70), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.755 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.753, f32[1,128,16]{2,1,0} %broadcast.754), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.71 = f32[1,128,16]{2,1,0} custom-call(f32[1,128,16]{2,1,0} %add.755), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.723 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.727 = f32[128]{0} broadcast(f32[] %constant.723), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.718 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.722 = f32[128]{0} broadcast(f32[] %constant.718), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.765 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %custom-call.71, f32[128]{0} %broadcast.727, f32[128]{0} %broadcast.722), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.766 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.765), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p36.700 = f32[16]{0} parameter(36), frontend_attributes={neff_input_names="input36"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.73 = f32[16]{0} custom-call(f32[16]{0} %p36.700), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.782 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.73), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.785 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.766, f32[1,128,16]{2,1,0} %broadcast.782), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.787 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %broadcast.786, f32[1,128,16]{2,1,0} %multiply.785), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.788 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.787), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.74 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %p15.214), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.698 = f32[16,30522]{0,1} transpose(f32[30522,16]{1,0} %custom-call.74), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.789 = f32[128,30522]{1,0} dot(f32[128,16]{1,0} %reshape.788, f32[16,30522]{0,1} %transpose.698), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.790 = f32[1,128,30522]{2,1,0} reshape(f32[128,30522]{1,0} %dot.789), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p35.682 = f32[30522]{0} parameter(35), frontend_attributes={neff_input_names="input35"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.75 = f32[30522]{0} custom-call(f32[30522]{0} %p35.682), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.791 = f32[1,128,30522]{2,1,0} broadcast(f32[30522]{0} %custom-call.75), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.792 = f32[1,128,30522]{2,1,0} add(f32[1,128,30522]{2,1,0} %reshape.790, f32[1,128,30522]{2,1,0} %broadcast.791), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.795 = f32[128,30522]{1,0} reshape(f32[1,128,30522]{2,1,0} %add.792), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.0 = f32[] constant(-inf)
  %reduce.0 = f32[128]{0} reduce(f32[1,128,30522]{2,1,0} %add.792, f32[] %constant.0), dimensions={0,2}, to_apply=%SimpleCrossEntropyLossForwardMax.796
  %broadcast.0 = f32[128,30522]{1,0} broadcast(f32[128]{0} %reduce.0), dimensions={0}
  %subtract.0 = f32[128,30522]{1,0} subtract(f32[128,30522]{1,0} %reshape.795, f32[128,30522]{1,0} %broadcast.0)
  %exponential.0 = f32[128,30522]{1,0} exponential(f32[128,30522]{1,0} %subtract.0)
  %constant.4 = f32[] constant(0)
  %reduce.1 = f32[128]{0} reduce(f32[128,30522]{1,0} %exponential.0, f32[] %constant.4), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.800
  %log.0 = f32[128]{0} log(f32[128]{0} %reduce.1)
  %broadcast.1 = f32[128,30522]{1,0} broadcast(f32[128]{0} %log.0), dimensions={0}
  %subtract.1 = f32[128,30522]{1,0} subtract(f32[128,30522]{1,0} %subtract.0, f32[128,30522]{1,0} %broadcast.1), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1 = s64[128]{0} reshape(s64[1,128]{1,0} %p34.675)
  %broadcast.3 = s64[128,30522]{1,0} broadcast(s64[128]{0} %reshape.1), dimensions={0}
  %iota.5 = s64[128,30522]{1,0} iota(), iota_dimension=1
  %compare.0 = pred[128,30522]{1,0} compare(s64[128,30522]{1,0} %broadcast.3, s64[128,30522]{1,0} %iota.5), direction=EQ
  %constant.5 = f32[] constant(1)
  %broadcast.6 = f32[128,30522]{1,0} broadcast(f32[] %constant.5), dimensions={}
  %constant.6 = f32[] constant(0)
  %broadcast.7 = f32[128,30522]{1,0} broadcast(f32[] %constant.6), dimensions={}
  %select.0 = f32[128,30522]{1,0} select(pred[128,30522]{1,0} %compare.0, f32[128,30522]{1,0} %broadcast.6, f32[128,30522]{1,0} %broadcast.7)
  %multiply.2 = f32[128,30522]{1,0} multiply(f32[128,30522]{1,0} %subtract.1, f32[128,30522]{1,0} %select.0)
  %reduce.2 = f32[128]{0} reduce(f32[128,30522]{1,0} %multiply.2, f32[] %constant.4), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.804
  %constant.27 = f32[] constant(0)
  %broadcast.61 = f32[128]{0} broadcast(f32[] %constant.27), dimensions={}
  %select.6 = f32[128]{0} select(pred[128]{0} %reshape.447, f32[128]{0} %reduce.2, f32[128]{0} %broadcast.61)
  %reduce.3 = f32[] reduce(f32[128]{0} %select.6, f32[] %constant.4), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.808
  %convert.0 = f32[128]{0} convert(pred[128]{0} %reshape.447), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reduce.4 = f32[] reduce(f32[128]{0} %convert.0, f32[] %constant.4), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.812
  %divide.0 = f32[] divide(f32[] %reduce.3, f32[] %reduce.4)
  %negate.0 = f32[] negate(f32[] %divide.0), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p0.4 = s64[1]{0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1135}
  %constant.49 = s64[1]{0} constant({-100})
  %compare.4 = pred[1]{0} compare(s64[1]{0} %p0.4, s64[1]{0} %constant.49), direction=NE
  %slice.602 = f32[1,1,16]{2,1,0} slice(f32[1,128,16]{2,1,0} %add.600), slice={[0:1], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.130 = f32[16]{0} reshape(f32[1,1,16]{2,1,0} %slice.602)
  %broadcast.198 = f32[16,16]{1,0} broadcast(f32[16]{0} %reshape.130), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p4.30 = f32[16,16]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.78 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p4.30), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.32 = f32[16,16]{1,0} multiply(f32[16,16]{1,0} %broadcast.198, f32[16,16]{1,0} %custom-call.78)
  %constant.35 = f32[] constant(0)
  %reduce.18 = f32[16]{0} reduce(f32[16,16]{1,0} %multiply.32, f32[] %constant.35), dimensions={1}, to_apply=%scalar_add_computation, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p3.22 = f32[16]{0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.79 = f32[16]{0} custom-call(f32[16]{0} %p3.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.14 = f32[16]{0} add(f32[16]{0} %reduce.18, f32[16]{0} %custom-call.79), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %tanh.0 = f32[16]{0} tanh(f32[16]{0} %add.14), metadata={op_type="aten__tanh" op_name="aten__tanh" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/activation.py" source_line=356}
  %broadcast.200 = f32[2,16]{1,0} broadcast(f32[16]{0} %tanh.0), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p2.13 = f32[2,16]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.80 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %p2.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.33 = f32[2,16]{1,0} multiply(f32[2,16]{1,0} %broadcast.200, f32[2,16]{1,0} %custom-call.80)
  %constant.36 = f32[] constant(0)
  %reduce.19 = f32[2]{0} reduce(f32[2,16]{1,0} %multiply.33, f32[] %constant.36), dimensions={1}, to_apply=%scalar_add_computation, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p1.5 = f32[2]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.81 = f32[2]{0} custom-call(f32[2]{0} %p1.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.15 = f32[2]{0} add(f32[2]{0} %reduce.19, f32[2]{0} %custom-call.81), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.440 = f32[1,2]{1,0} reshape(f32[2]{0} %add.15), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.10 = f32[] constant(-inf)
  %reduce.6 = f32[1]{0} reduce(f32[1,2]{1,0} %reshape.440, f32[] %constant.10), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardMax.613
  %reshape.136 = f32[] reshape(f32[1]{0} %reduce.6)
  %broadcast.17 = f32[1,2]{1,0} broadcast(f32[] %reshape.136), dimensions={}
  %subtract.2 = f32[1,2]{1,0} subtract(f32[1,2]{1,0} %reshape.440, f32[1,2]{1,0} %broadcast.17)
  %exponential.2 = f32[1,2]{1,0} exponential(f32[1,2]{1,0} %subtract.2)
  %constant.11 = f32[] constant(0)
  %reduce.7 = f32[1]{0} reduce(f32[1,2]{1,0} %exponential.2, f32[] %constant.11), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.617
  %log.1 = f32[1]{0} log(f32[1]{0} %reduce.7)
  %reshape.137 = f32[] reshape(f32[1]{0} %log.1)
  %broadcast.18 = f32[1,2]{1,0} broadcast(f32[] %reshape.137), dimensions={}
  %subtract.3 = f32[1,2]{1,0} subtract(f32[1,2]{1,0} %subtract.2, f32[1,2]{1,0} %broadcast.18), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.140 = s64[] reshape(s64[1]{0} %p0.4)
  %broadcast.20 = s64[1,2]{1,0} broadcast(s64[] %reshape.140), dimensions={}
  %iota.2 = s64[1,2]{1,0} iota(), iota_dimension=1
  %compare.3 = pred[1,2]{1,0} compare(s64[1,2]{1,0} %broadcast.20, s64[1,2]{1,0} %iota.2), direction=EQ
  %constant.12 = f32[] constant(1)
  %broadcast.22 = f32[1,2]{1,0} broadcast(f32[] %constant.12), dimensions={}
  %constant.13 = f32[] constant(0)
  %broadcast.23 = f32[1,2]{1,0} broadcast(f32[] %constant.13), dimensions={}
  %select.2 = f32[1,2]{1,0} select(pred[1,2]{1,0} %compare.3, f32[1,2]{1,0} %broadcast.22, f32[1,2]{1,0} %broadcast.23)
  %multiply.7 = f32[1,2]{1,0} multiply(f32[1,2]{1,0} %subtract.3, f32[1,2]{1,0} %select.2)
  %reduce.8 = f32[1]{0} reduce(f32[1,2]{1,0} %multiply.7, f32[] %constant.11), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.621
  %constant.50 = f32[1]{0} constant({0})
  %select.7 = f32[1]{0} select(pred[1]{0} %compare.4, f32[1]{0} %reduce.8, f32[1]{0} %constant.50)
  %convert.1 = f32[1]{0} convert(pred[1]{0} %compare.4), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %divide.9 = f32[1]{0} divide(f32[1]{0} %select.7, f32[1]{0} %convert.1)
  %negate.8 = f32[1]{0} negate(f32[1]{0} %divide.9), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.476 = f32[] reshape(f32[1]{0} %negate.8), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.859 = f32[] add(f32[] %negate.0, f32[] %reshape.476), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1136}
  %reshape.145 = f32[1]{0} reshape(f32[] %add.859), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=510}
  %add.864 = f32[1]{0} add(f32[1]{0} %p40.862, f32[1]{0} %reshape.145), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=510}
  %exponential.3 = f32[1,2]{1,0} exponential(f32[1,2]{1,0} %subtract.3)
  %constant.59 = f32[1]{0} constant({1})
  %divide.10 = f32[1]{0} divide(f32[1]{0} %constant.59, f32[1]{0} %convert.1)
  %constant.51 = f32[1]{0} constant({0})
  %select.8 = f32[1]{0} select(pred[1]{0} %compare.4, f32[1]{0} %divide.10, f32[1]{0} %constant.51)
  %reshape.150 = f32[] reshape(f32[1]{0} %select.8)
  %broadcast.26 = f32[1,2]{1,0} broadcast(f32[] %reshape.150), dimensions={}
  %multiply.10 = f32[1,2]{1,0} multiply(f32[1,2]{1,0} %exponential.3, f32[1,2]{1,0} %broadcast.26)
  %reshape.154 = s64[] reshape(s64[1]{0} %p0.4)
  %broadcast.28 = s64[1,2]{1,0} broadcast(s64[] %reshape.154), dimensions={}
  %iota.3 = s64[1,2]{1,0} iota(), iota_dimension=1
  %compare.5 = pred[1,2]{1,0} compare(s64[1,2]{1,0} %broadcast.28, s64[1,2]{1,0} %iota.3), direction=EQ
  %negate.9 = f32[1]{0} negate(f32[1]{0} %divide.10)
  %reshape.478 = f32[] reshape(f32[1]{0} %negate.9)
  %broadcast.30 = f32[1,2]{1,0} broadcast(f32[] %reshape.478), dimensions={}
  %constant.16 = f32[] constant(0)
  %broadcast.31 = f32[1,2]{1,0} broadcast(f32[] %constant.16), dimensions={}
  %select.3 = f32[1,2]{1,0} select(pred[1,2]{1,0} %compare.5, f32[1,2]{1,0} %broadcast.30, f32[1,2]{1,0} %broadcast.31)
  %add.1 = f32[1,2]{1,0} add(f32[1,2]{1,0} %multiply.10, f32[1,2]{1,0} %select.3), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.909 = f32[2]{0} reshape(f32[1,2]{1,0} %add.1), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.83 = f32[2]{0} custom-call(f32[2]{0} %reshape.909), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.166 = f32[2]{0} reshape(f32[1,2]{1,0} %add.1)
  %broadcast.143 = f32[2,16]{0,1} broadcast(f32[2]{0} %reshape.166), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %broadcast.144 = f32[2,16]{0,1} broadcast(f32[16]{0} %tanh.0), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.22 = f32[2,16]{0,1} multiply(f32[2,16]{0,1} %broadcast.143, f32[2,16]{0,1} %broadcast.144), metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.84 = f32[2,16]{1,0} custom-call(f32[2,16]{0,1} %multiply.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %exponential.1 = f32[128,30522]{1,0} exponential(f32[128,30522]{1,0} %subtract.1)
  %constant.867 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/autograd/__init__.py" source_line=127}
  %constant.8 = f32[] constant(0)
  %reduce.5 = f32[] reduce(f32[128]{0} %convert.0, f32[] %constant.8), dimensions={0}, to_apply=%SimpleCrossEntropyLossBackwardAdd.927
  %divide.1 = f32[] divide(f32[] %constant.867, f32[] %reduce.5)
  %broadcast.9 = f32[128]{0} broadcast(f32[] %divide.1), dimensions={}
  %constant.30 = f32[] constant(0)
  %broadcast.74 = f32[128]{0} broadcast(f32[] %constant.30), dimensions={}
  %select.9 = f32[128]{0} select(pred[128]{0} %reshape.447, f32[128]{0} %broadcast.9, f32[128]{0} %broadcast.74)
  %broadcast.10 = f32[128,30522]{1,0} broadcast(f32[128]{0} %select.9), dimensions={0}
  %multiply.5 = f32[128,30522]{1,0} multiply(f32[128,30522]{1,0} %exponential.1, f32[128,30522]{1,0} %broadcast.10)
  %reshape.4 = s64[128]{0} reshape(s64[1,128]{1,0} %p34.675)
  %broadcast.12 = s64[128,30522]{1,0} broadcast(s64[128]{0} %reshape.4), dimensions={0}
  %iota.7 = s64[128,30522]{1,0} iota(), iota_dimension=1
  %compare.2 = pred[128,30522]{1,0} compare(s64[128,30522]{1,0} %broadcast.12, s64[128,30522]{1,0} %iota.7), direction=EQ
  %negate.1 = f32[] negate(f32[] %divide.1)
  %broadcast.15 = f32[128,30522]{1,0} broadcast(f32[] %negate.1), dimensions={}
  %constant.9 = f32[] constant(0)
  %broadcast.16 = f32[128,30522]{1,0} broadcast(f32[] %constant.9), dimensions={}
  %select.1 = f32[128,30522]{1,0} select(pred[128,30522]{1,0} %compare.2, f32[128,30522]{1,0} %broadcast.15, f32[128,30522]{1,0} %broadcast.16)
  %add.0 = f32[128,30522]{1,0} add(f32[128,30522]{1,0} %multiply.5, f32[128,30522]{1,0} %select.1), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.961 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.967 = f32[30522]{0} reduce(f32[128,30522]{1,0} %add.0, f32[] %constant.961), dimensions={0}, to_apply=%AddComputation.963, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.85 = f32[30522]{0} custom-call(f32[30522]{0} %reduce.967), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1297 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.787), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1298 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1297), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.4 = f32[30522,16]{0,1} dot(f32[128,30522]{1,0} %add.0, f32[16,128]{0,1} %transpose.1298), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.86 = f32[30522,16]{1,0} custom-call(f32[30522,16]{0,1} %dot.4), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1277 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1281 = f32[30522,16]{1,0} broadcast(f32[] %constant.1277), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %reshape.1256 = s64[128]{0} reshape(s64[1,128]{1,0} %p14.212), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1271 = s64[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1272 = s64[128]{0} broadcast(s64[] %constant.1271), dimensions={}, metadata={op_type="aten__lt" op_name="aten__lt"}
  %compare.1273 = pred[128]{0} compare(s64[128]{0} %reshape.1256, s64[128]{0} %broadcast.1272), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt"}
  %p41.1265 = s64[] parameter(41), frontend_attributes={neff_input_names="input41"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %broadcast.1269 = s64[128]{0} broadcast(s64[] %p41.1265), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %add.1270 = s64[128]{0} add(s64[128]{0} %reshape.1256, s64[128]{0} %broadcast.1269), metadata={op_type="aten__add" op_name="aten__add"}
  %select.1274 = s64[128]{0} select(pred[128]{0} %compare.1273, s64[128]{0} %add.1270, s64[128]{0} %reshape.1256), metadata={op_type="aten__where" op_name="aten__where"}
  %reshape.1275 = s64[128,1]{1,0} reshape(s64[128]{0} %select.1274), metadata={op_type="aten__stack" op_name="aten__stack"}
  %convert.1257 = f32[128]{0} convert(s64[128]{0} %reshape.1256), metadata={op_type="aten__ne" op_name="aten__ne"}
  %constant.1255 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1258 = f32[128]{0} broadcast(f32[] %constant.1255), dimensions={}, metadata={op_type="aten__ne" op_name="aten__ne"}
  %compare.1259 = pred[128]{0} compare(f32[128]{0} %convert.1257, f32[128]{0} %broadcast.1258), direction=NE, metadata={op_type="aten__ne" op_name="aten__ne"}
  %broadcast.1263 = pred[128,16]{1,0} broadcast(pred[128]{0} %compare.1259), dimensions={0}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %constant.987 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.991 = f32[128]{0} broadcast(f32[] %constant.987), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.229 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.227), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.230 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.227), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.231 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.232 = f32[128]{0} broadcast(f32[] %constant.231), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.233 = f32[128]{0} add(f32[128]{0} %get-tuple-element.230, f32[128]{0} %broadcast.232), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt = f32[128]{0} sqrt(f32[128]{0} %add.233), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1247 = f32[128]{0} multiply(f32[128]{0} %sqrt, f32[128]{0} %sqrt), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.52 = f32[] constant(-1e-12)
  %broadcast.75 = f32[128]{0} broadcast(f32[] %constant.52), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.8 = f32[128]{0} add(f32[128]{0} %multiply.1247, f32[128]{0} %broadcast.75), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1007 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1011 = f32[128]{0} broadcast(f32[] %constant.1007), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.453 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.451), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.454 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.451), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.455 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.456 = f32[128]{0} broadcast(f32[] %constant.455), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.457 = f32[128]{0} add(f32[128]{0} %get-tuple-element.454, f32[128]{0} %broadcast.456), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.1 = f32[128]{0} sqrt(f32[128]{0} %add.457), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1168 = f32[128]{0} multiply(f32[128]{0} %sqrt.1, f32[128]{0} %sqrt.1), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.54 = f32[] constant(-1e-12)
  %broadcast.76 = f32[128]{0} broadcast(f32[] %constant.54), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.9 = f32[128]{0} add(f32[128]{0} %multiply.1168, f32[128]{0} %broadcast.76), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1027 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1031 = f32[128]{0} broadcast(f32[] %constant.1027), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.580 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.578), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.581 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.578), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.582 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.583 = f32[128]{0} broadcast(f32[] %constant.582), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.584 = f32[128]{0} add(f32[128]{0} %get-tuple-element.581, f32[128]{0} %broadcast.583), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.2 = f32[128]{0} sqrt(f32[128]{0} %add.584), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1136 = f32[128]{0} multiply(f32[128]{0} %sqrt.2, f32[128]{0} %sqrt.2), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.55 = f32[] constant(-1e-12)
  %broadcast.77 = f32[128]{0} broadcast(f32[] %constant.55), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.10 = f32[128]{0} add(f32[128]{0} %multiply.1136, f32[128]{0} %broadcast.77), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1086 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1090 = f32[128]{0} broadcast(f32[] %constant.1086), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.767 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.765), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.768 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.765), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.769 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.770 = f32[128]{0} broadcast(f32[] %constant.769), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.771 = f32[128]{0} add(f32[128]{0} %get-tuple-element.768, f32[128]{0} %broadcast.770), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.3 = f32[128]{0} sqrt(f32[128]{0} %add.771), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1109 = f32[128]{0} multiply(f32[128]{0} %sqrt.3, f32[128]{0} %sqrt.3), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.56 = f32[] constant(-1e-12)
  %broadcast.78 = f32[128]{0} broadcast(f32[] %constant.56), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.11 = f32[128]{0} add(f32[128]{0} %multiply.1109, f32[128]{0} %broadcast.78), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %dot.1101 = f32[128,16]{1,0} dot(f32[128,30522]{1,0} %add.0, f32[30522,16]{1,0} %custom-call.74), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1102 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1101), metadata={op_type="aten__view" op_name="aten__view"}
  %broadcast.1103 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.73), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1104 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %reshape.1102, f32[1,128,16]{2,1,0} %broadcast.1103), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1112 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %custom-call.71, f32[128]{0} %broadcast.1090, f32[128]{0} %get-tuple-element.767, f32[128]{0} %add.11, f32[1,128,16]{2,1,0} %multiply.1104), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1113 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1112), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %custom-call.76 = f32[1,128,16]{2,1,0} custom-call(f32[1,128,16]{2,1,0} %add.755), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.6 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.1113, f32[1,128,16]{2,1,0} %custom-call.76), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1126 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.6), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1127 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.1126, f32[16,16]{1,0} %custom-call.69), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1128 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1127), metadata={op_type="aten__view" op_name="aten__view"}
  %reshape.202 = f32[2]{0} reshape(f32[1,2]{1,0} %add.1)
  %broadcast.192 = f32[2,16]{1,0} broadcast(f32[2]{0} %reshape.202), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.29 = f32[2,16]{1,0} multiply(f32[2,16]{1,0} %broadcast.192, f32[2,16]{1,0} %custom-call.80)
  %constant.37 = f32[] constant(0)
  %reduce.20 = f32[16]{0} reduce(f32[2,16]{1,0} %multiply.29, f32[] %constant.37), dimensions={0}, to_apply=%scalar_add_computation, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.1057 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.202 = f32[16]{0} broadcast(f32[] %constant.1057), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %multiply.34 = f32[16]{0} multiply(f32[16]{0} %tanh.0, f32[16]{0} %tanh.0), metadata={op_type="aten__pow" op_name="aten__pow"}
  %subtract.5 = f32[16]{0} subtract(f32[16]{0} %broadcast.202, f32[16]{0} %multiply.34), metadata={op_type="aten__sub" op_name="aten__sub"}
  %multiply.35 = f32[16]{0} multiply(f32[16]{0} %reduce.20, f32[16]{0} %subtract.5), metadata={op_type="aten__mul" op_name="aten__mul"}
  %broadcast.193 = f32[16,16]{1,0} broadcast(f32[16]{0} %multiply.35), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.30 = f32[16,16]{1,0} multiply(f32[16,16]{1,0} %broadcast.193, f32[16,16]{1,0} %custom-call.78)
  %constant.38 = f32[] constant(0)
  %reduce.21 = f32[16]{0} reduce(f32[16,16]{1,0} %multiply.30, f32[] %constant.38), dimensions={0}, to_apply=%scalar_add_computation, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1068 = f32[1,1,16]{2,1,0} reshape(f32[16]{0} %reduce.21), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.57 = f32[] constant(0)
  %pad = f32[1,128,16]{2,1,0} pad(f32[1,1,16]{2,1,0} %reshape.1068, f32[] %constant.57), padding=0_0x0_127x0_0, metadata={op_type="xla__update_slice" op_name="xla__update_slice"}
  %add.1129 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.1128, f32[1,128,16]{2,1,0} %pad), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1130 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.68), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1131 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1129, f32[1,128,16]{2,1,0} %broadcast.1130), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1139 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %add.577, f32[128]{0} %broadcast.1031, f32[128]{0} %get-tuple-element.580, f32[128]{0} %add.10, f32[1,128,16]{2,1,0} %multiply.1131), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1140 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1139), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %multiply.1143 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.1140, f32[1,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1144 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.1143), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1145 = f32[128,4096]{1,0} dot(f32[128,16]{1,0} %reshape.1144, f32[16,4096]{1,0} %custom-call.66), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1146 = f32[1,128,4096]{2,1,0} reshape(f32[128,4096]{1,0} %dot.1145), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.82 = f32[1,128,4096]{2,1,0} custom-call(f32[1,128,4096]{2,1,0} %add.559), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.11 = f32[1,128,4096]{2,1,0} multiply(f32[1,128,4096]{2,1,0} %reshape.1146, f32[1,128,4096]{2,1,0} %custom-call.82), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1157 = f32[128,4096]{1,0} reshape(f32[1,128,4096]{2,1,0} %multiply.11), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1158 = f32[128,16]{1,0} dot(f32[128,4096]{1,0} %reshape.1157, f32[4096,16]{1,0} %custom-call.63), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1159 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1158), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1161 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %get-tuple-element.1140, f32[1,128,16]{2,1,0} %reshape.1159), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1162 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.62), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1163 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1161, f32[1,128,16]{2,1,0} %broadcast.1162), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1171 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %add.450, f32[128]{0} %broadcast.1011, f32[128]{0} %get-tuple-element.453, f32[128]{0} %add.9, f32[1,128,16]{2,1,0} %multiply.1163), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1172 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1171), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1227 = f32[2,128,128]{2,1,0} reshape(f32[1,2,128,128]{3,2,1,0} %multiply.437), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1228 = f32[2,128,128]{1,2,0} transpose(f32[2,128,128]{2,1,0} %reshape.1227), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %multiply.1175 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.1172, f32[1,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1176 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.1175), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1177 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.1176, f32[16,16]{1,0} %p18.297), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1179 = f32[1,128,2,8]{3,2,1,0} reshape(f32[128,16]{1,0} %dot.1177), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1180 = f32[1,2,128,8]{3,1,2,0} transpose(f32[1,128,2,8]{3,2,1,0} %reshape.1179), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %reshape.1181 = f32[2,128,8]{2,1,0} reshape(f32[1,2,128,8]{3,1,2,0} %transpose.1180), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1229 = f32[2,128,8]{2,1,0} dot(f32[2,128,128]{1,2,0} %transpose.1228, f32[2,128,8]{2,1,0} %reshape.1181), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1230 = f32[1,2,128,8]{3,2,1,0} reshape(f32[2,128,8]{2,1,0} %dot.1229), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1231 = f32[1,128,2,8]{3,1,2,0} transpose(f32[1,2,128,8]{3,2,1,0} %reshape.1230), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1233 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{3,1,2,0} %transpose.1231), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1234 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.1233, f32[16,16]{1,0} %p20.306), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1235 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1234), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1237 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %get-tuple-element.1172, f32[1,128,16]{2,1,0} %reshape.1235), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1211 = f32[2,128,8]{2,1,0} reshape(f32[1,2,128,8]{3,1,2,0} %transpose.409), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1212 = f32[2,8,128]{1,2,0} transpose(f32[2,128,8]{2,1,0} %reshape.1211), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.1005 = f32[2,128,8]{2,1,0} reshape(f32[1,2,128,8]{3,1,2,0} %transpose.314), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1006 = f32[2,8,128]{1,2,0} transpose(f32[2,128,8]{2,1,0} %reshape.1005), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1182 = f32[2,128,128]{2,1,0} dot(f32[2,128,8]{2,1,0} %reshape.1181, f32[2,8,128]{1,2,0} %transpose.1006), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1183 = f32[1,2,128,128]{3,2,1,0} reshape(f32[2,128,128]{2,1,0} %dot.1182), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1184 = f32[1,2,128,128]{3,2,1,0} multiply(f32[1,2,128,128]{3,2,1,0} %reshape.1183, f32[1,2,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1185 = f32[1,2,128,128]{3,2,1,0} multiply(f32[1,2,128,128]{3,2,1,0} %multiply.1184, f32[1,2,128,128]{3,2,1,0} %divide.436), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %constant.1186 = f32[] constant(0), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reduce.1191 = f32[1,2,128]{2,1,0} reduce(f32[1,2,128,128]{3,2,1,0} %multiply.1185, f32[] %constant.1186), dimensions={3}, to_apply=%AddComputation.1187, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reshape.234 = f32[2,128]{1,0} reshape(f32[1,2,128]{2,1,0} %reduce.1191)
  %broadcast.1192 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[2,128]{1,0} %reshape.234), dimensions={1,2}, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %subtract.1193 = f32[1,2,128,128]{3,2,1,0} subtract(f32[1,2,128,128]{3,2,1,0} %multiply.1184, f32[1,2,128,128]{3,2,1,0} %broadcast.1192), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %multiply.1194 = f32[1,2,128,128]{3,2,1,0} multiply(f32[1,2,128,128]{3,2,1,0} %divide.436, f32[1,2,128,128]{3,2,1,0} %subtract.1193), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %broadcast.1195 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[] %p23.374), dimensions={}, metadata={op_type="aten__div" op_name="aten__div"}
  %divide.1196 = f32[1,2,128,128]{3,2,1,0} divide(f32[1,2,128,128]{3,2,1,0} %multiply.1194, f32[1,2,128,128]{3,2,1,0} %broadcast.1195), metadata={op_type="aten__div" op_name="aten__div"}
  %reshape.1197 = f32[2,128,128]{2,1,0} reshape(f32[1,2,128,128]{3,2,1,0} %divide.1196), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1213 = f32[2,8,128]{2,1,0} dot(f32[2,8,128]{1,2,0} %transpose.1212, f32[2,128,128]{2,1,0} %reshape.1197), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1214 = f32[1,2,8,128]{3,2,1,0} reshape(f32[2,8,128]{2,1,0} %dot.1213), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1216 = f32[1,128,2,8]{1,3,2,0} transpose(f32[1,2,8,128]{3,2,1,0} %reshape.1214), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1218 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{1,3,2,0} %transpose.1216), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1219 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.1218, f32[16,16]{1,0} %p25.382), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1220 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1219), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1238 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %add.1237, f32[1,128,16]{2,1,0} %reshape.1220), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1003 = f32[2,8,128]{2,1,0} reshape(f32[1,2,8,128]{2,1,3,0} %transpose.391), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1004 = f32[2,128,8]{1,2,0} transpose(f32[2,8,128]{2,1,0} %reshape.1003), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1198 = f32[2,128,8]{2,1,0} dot(f32[2,128,128]{2,1,0} %reshape.1197, f32[2,128,8]{1,2,0} %transpose.1004), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1199 = f32[1,2,128,8]{3,2,1,0} reshape(f32[2,128,8]{2,1,0} %dot.1198), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1200 = f32[1,128,2,8]{3,1,2,0} transpose(f32[1,2,128,8]{3,2,1,0} %reshape.1199), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1202 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{3,1,2,0} %transpose.1200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1203 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.1202, f32[16,16]{1,0} %p27.401), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1204 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1203), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1239 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %add.1238, f32[1,128,16]{2,1,0} %reshape.1204), metadata={op_type="aten__add" op_name="aten__add"}
  %multiply.1240 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1239, f32[1,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul"}
  %broadcast.1241 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.61), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1242 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %multiply.1240, f32[1,128,16]{2,1,0} %broadcast.1241), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1250 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %reshape.469, f32[128]{0} %broadcast.991, f32[128]{0} %get-tuple-element.229, f32[128]{0} %add.8, f32[1,128,16]{2,1,0} %multiply.1242), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1251 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1250), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1254 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %get-tuple-element.1251), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.982 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.986 = f32[128,16]{1,0} broadcast(f32[] %constant.982), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %select.1264 = f32[128,16]{1,0} select(pred[128,16]{1,0} %broadcast.1263, f32[128,16]{1,0} %reshape.1254, f32[128,16]{1,0} %broadcast.986), metadata={op_type="aten__where" op_name="aten__where"}
  %scatter.1287 = f32[30522,16]{1,0} scatter(f32[30522,16]{1,0} %broadcast.1281, s64[128,1]{1,0} %reshape.1275, f32[128,16]{1,0} %select.1264), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%ScatterCombiner.1283, metadata={op_type="aten__index_put" op_name="aten__index_put"}
  %custom-call.87 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %scatter.1287), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1308 = f32[30522,16]{1,0} add(f32[30522,16]{1,0} %custom-call.86, f32[30522,16]{1,0} %custom-call.87), metadata={op_type="aten__add" op_name="aten__add"}
  %constant.1309 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1315 = f32[16]{0} reduce(f32[128,16]{1,0} %dot.1101, f32[] %constant.1309), dimensions={0}, to_apply=%AddComputation.1311, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.88 = f32[16]{0} custom-call(f32[16]{0} %reduce.1315), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1331 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %reshape.1102, f32[1,128,16]{2,1,0} %get-tuple-element.766), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1332 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1338 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1331, f32[] %constant.1332), dimensions={0,1}, to_apply=%AddComputation.1334, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.89 = f32[16]{0} custom-call(f32[16]{0} %reduce.1338), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1348 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1354 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.6, f32[] %constant.1348), dimensions={0,1}, to_apply=%AddComputation.1350, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.90 = f32[16]{0} custom-call(f32[16]{0} %reduce.1354), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1364 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.600), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1365 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1364), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.7 = f32[16,16]{0,1} dot(f32[128,16]{1,0} %reshape.1126, f32[16,128]{0,1} %transpose.1365), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.91 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.92 = f32[16]{0} custom-call(f32[16]{0} %multiply.35), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.179 = f32[16,16]{0,1} broadcast(f32[16]{0} %multiply.35), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %slice.1392 = f32[1,1,16]{2,1,0} slice(f32[1,128,16]{2,1,0} %add.600), slice={[0:1], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice"}
  %reshape.261 = f32[16]{0} reshape(f32[1,1,16]{2,1,0} %slice.1392)
  %broadcast.180 = f32[16,16]{0,1} broadcast(f32[16]{0} %reshape.261), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.26 = f32[16,16]{0,1} multiply(f32[16,16]{0,1} %broadcast.179, f32[16,16]{0,1} %broadcast.180), metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.93 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %multiply.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1404 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1410 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %add.1129, f32[] %constant.1404), dimensions={0,1}, to_apply=%AddComputation.1406, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.94 = f32[16]{0} custom-call(f32[16]{0} %reduce.1410), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1426 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1129, f32[1,128,16]{2,1,0} %get-tuple-element.579), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1427 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1433 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1426, f32[] %constant.1427), dimensions={0,1}, to_apply=%AddComputation.1429, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.95 = f32[16]{0} custom-call(f32[16]{0} %reduce.1433), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1443 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1449 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1143, f32[] %constant.1443), dimensions={0,1}, to_apply=%AddComputation.1445, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.96 = f32[16]{0} custom-call(f32[16]{0} %reduce.1449), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1459 = f32[128,4096]{1,0} reshape(f32[1,128,4096]{2,1,0} %custom-call.65), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1460 = f32[4096,128]{0,1} transpose(f32[128,4096]{1,0} %reshape.1459), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.10 = f32[16,4096]{0,1} dot(f32[128,16]{1,0} %reshape.1144, f32[4096,128]{0,1} %transpose.1460), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.97 = f32[16,4096]{1,0} custom-call(f32[16,4096]{0,1} %dot.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1470 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1476 = f32[4096]{0} reduce(f32[1,128,4096]{2,1,0} %multiply.11, f32[] %constant.1470), dimensions={0,1}, to_apply=%AddComputation.1472, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.98 = f32[4096]{0} custom-call(f32[4096]{0} %reduce.1476), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1486 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.473), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1487 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1486), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.11 = f32[4096,16]{0,1} dot(f32[128,4096]{1,0} %reshape.1157, f32[16,128]{0,1} %transpose.1487), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.99 = f32[4096,16]{1,0} custom-call(f32[4096,16]{0,1} %dot.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1497 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1503 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %add.1161, f32[] %constant.1497), dimensions={0,1}, to_apply=%AddComputation.1499, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.100 = f32[16]{0} custom-call(f32[16]{0} %reduce.1503), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1519 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1161, f32[1,128,16]{2,1,0} %get-tuple-element.452), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1520 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1526 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1519, f32[] %constant.1520), dimensions={0,1}, to_apply=%AddComputation.1522, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.101 = f32[16]{0} custom-call(f32[16]{0} %reduce.1526), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1536 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1542 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1175, f32[] %constant.1536), dimensions={0,1}, to_apply=%AddComputation.1538, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1549 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.1175), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1550 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1549), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1545 = f32[1,2,128,8]{3,2,1,0} reshape(f32[2,128,8]{2,1,0} %dot.440), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1546 = f32[1,128,2,8]{3,1,2,0} transpose(f32[1,2,128,8]{3,2,1,0} %reshape.1545), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1548 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{3,1,2,0} %transpose.1546), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1551 = f32[16,16]{1,0} dot(f32[16,128]{0,1} %transpose.1550, f32[128,16]{1,0} %reshape.1548), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1555 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.15 = f32[2,8]{1,0} reduce(f32[2,128,8]{2,1,0} %dot.1229, f32[] %constant.1555), dimensions={1}, to_apply=%AddComputation.1557, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1563 = f32[16]{0} reshape(f32[2,8]{1,0} %reduce.15), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=969}
  %reshape.1565 = f32[1,2,128,8]{3,2,1,0} reshape(f32[2,128,8]{2,1,0} %dot.1229), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1566 = f32[1,128,2,8]{3,1,2,0} transpose(f32[1,2,128,8]{3,2,1,0} %reshape.1565), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1568 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{3,1,2,0} %transpose.1566), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1569 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1568), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1564 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1570 = f32[16,16]{1,0} dot(f32[16,128]{0,1} %transpose.1569, f32[128,16]{1,0} %reshape.1564), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1575 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.16 = f32[2,8]{1,0} reduce(f32[2,8,128]{2,1,0} %dot.1213, f32[] %constant.1575), dimensions={2}, to_apply=%AddComputation.1577, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1583 = f32[16]{0} reshape(f32[2,8]{1,0} %reduce.16), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=969}
  %reshape.1585 = f32[1,2,8,128]{3,2,1,0} reshape(f32[2,8,128]{2,1,0} %dot.1213), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1587 = f32[1,128,2,8]{1,3,2,0} transpose(f32[1,2,8,128]{3,2,1,0} %reshape.1585), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1589 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{1,3,2,0} %transpose.1587), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1590 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1589), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1584 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1591 = f32[16,16]{1,0} dot(f32[16,128]{0,1} %transpose.1590, f32[128,16]{1,0} %reshape.1584), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1595 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.17 = f32[2,8]{1,0} reduce(f32[2,128,8]{2,1,0} %dot.1198, f32[] %constant.1595), dimensions={1}, to_apply=%AddComputation.1597, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1603 = f32[16]{0} reshape(f32[2,8]{1,0} %reduce.17), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=969}
  %reshape.1605 = f32[1,2,128,8]{3,2,1,0} reshape(f32[2,128,8]{2,1,0} %dot.1198), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1606 = f32[1,128,2,8]{3,1,2,0} transpose(f32[1,2,128,8]{3,2,1,0} %reshape.1605), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1608 = f32[128,16]{1,0} reshape(f32[1,128,2,8]{3,1,2,0} %transpose.1606), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1609 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1608), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1604 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1610 = f32[16,16]{1,0} dot(f32[16,128]{0,1} %transpose.1609, f32[128,16]{1,0} %reshape.1604), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1611 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1617 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1240, f32[] %constant.1611), dimensions={0,1}, to_apply=%AddComputation.1613, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.102 = f32[16]{0} custom-call(f32[16]{0} %reduce.1617), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1633 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %multiply.1240, f32[1,128,16]{2,1,0} %get-tuple-element.228), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1634 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1640 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1633, f32[] %constant.1634), dimensions={0,1}, to_apply=%AddComputation.1636, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.103 = f32[16]{0} custom-call(f32[16]{0} %reduce.1640), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.17 = f32[] constant(0)
  %broadcast.32 = f32[512,16]{1,0} broadcast(f32[] %constant.17), dimensions={}
  %slice.1651 = s64[1,128]{1,0} slice(s64[1,512]{1,0} %p10.177), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.10 = s64[128]{0} reshape(s64[1,128]{1,0} %slice.1651)
  %constant.18 = s64[] constant(0)
  %broadcast.33 = s64[128]{0} broadcast(s64[] %constant.18), dimensions={}
  %compare.6 = pred[128]{0} compare(s64[128]{0} %reshape.10, s64[128]{0} %broadcast.33), direction=GE
  %constant.19 = s64[] constant(512)
  %broadcast.34 = s64[128]{0} broadcast(s64[] %constant.19), dimensions={}
  %add.2 = s64[128]{0} add(s64[128]{0} %reshape.10, s64[128]{0} %broadcast.34)
  %select.4 = s64[128]{0} select(pred[128]{0} %compare.6, s64[128]{0} %reshape.10, s64[128]{0} %add.2)
  %reshape.11 = s64[128,1]{1,0} reshape(s64[128]{0} %select.4)
  %reshape.12 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %get-tuple-element.1251)
  %scatter.0 = f32[512,16]{1,0} scatter(f32[512,16]{1,0} %broadcast.32, s64[128,1]{1,0} %reshape.11, f32[128,16]{1,0} %reshape.12), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1652, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.104 = f32[512,16]{1,0} custom-call(f32[512,16]{1,0} %scatter.0), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.20 = f32[] constant(0)
  %broadcast.35 = f32[2,16]{1,0} broadcast(f32[] %constant.20), dimensions={}
  %reshape.13 = s64[128]{0} reshape(s64[1,128]{1,0} %p12.198)
  %constant.21 = s64[] constant(0)
  %broadcast.36 = s64[128]{0} broadcast(s64[] %constant.21), dimensions={}
  %compare.7 = pred[128]{0} compare(s64[128]{0} %reshape.13, s64[128]{0} %broadcast.36), direction=GE
  %constant.22 = s64[] constant(2)
  %broadcast.37 = s64[128]{0} broadcast(s64[] %constant.22), dimensions={}
  %add.3 = s64[128]{0} add(s64[128]{0} %reshape.13, s64[128]{0} %broadcast.37)
  %select.5 = s64[128]{0} select(pred[128]{0} %compare.7, s64[128]{0} %reshape.13, s64[128]{0} %add.3)
  %reshape.14 = s64[128,1]{1,0} reshape(s64[128]{0} %select.5)
  %reshape.15 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %get-tuple-element.1251)
  %scatter.1 = f32[2,16]{1,0} scatter(f32[2,16]{1,0} %broadcast.35, s64[128,1]{1,0} %reshape.14, f32[128,16]{1,0} %reshape.15), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1681, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.105 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %scatter.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  ROOT %tuple.1710 = (f32[1]{0}, f32[1,128,30522]{2,1,0}, f32[1,2]{1,0}, f32[], f32[], /*index=5*/f32[2]{0}, f32[2,16]{1,0}, f32[30522]{0}, f32[30522,16]{1,0}, f32[16]{0}, /*index=10*/f32[16]{0}, f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, f32[16,16]{1,0}, /*index=15*/f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,4096]{1,0}, f32[4096]{0}, /*index=20*/f32[4096,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,16]{1,0}, /*index=25*/f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, /*index=30*/f32[16,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[512,16]{1,0}, f32[2,16]{1,0}) tuple(f32[1]{0} %add.864, f32[1,128,30522]{2,1,0} %add.792, f32[1,2]{1,0} %reshape.440, f32[] %add.859, f32[] %add.859, /*index=5*/f32[2]{0} %custom-call.83, f32[2,16]{1,0} %custom-call.84, f32[30522]{0} %custom-call.85, f32[30522,16]{1,0} %add.1308, f32[16]{0} %custom-call.88, /*index=10*/f32[16]{0} %custom-call.89, f32[16]{0} %custom-call.90, f32[16,16]{1,0} %custom-call.91, f32[16]{0} %custom-call.92, f32[16,16]{1,0} %custom-call.93, /*index=15*/f32[16]{0} %custom-call.94, f32[16]{0} %custom-call.95, f32[16]{0} %custom-call.96, f32[16,4096]{1,0} %custom-call.97, f32[4096]{0} %custom-call.98, /*index=20*/f32[4096,16]{1,0} %custom-call.99, f32[16]{0} %custom-call.100, f32[16]{0} %custom-call.101, f32[16]{0} %reduce.1542, f32[16,16]{1,0} %dot.1551, /*index=25*/f32[16]{0} %reshape.1563, f32[16,16]{1,0} %dot.1570, f32[16]{0} %reshape.1583, f32[16,16]{1,0} %dot.1591, f32[16]{0} %reshape.1603, /*index=30*/f32[16,16]{1,0} %dot.1610, f32[16]{0} %custom-call.102, f32[16]{0} %custom-call.103, f32[512,16]{1,0} %custom-call.104, f32[2,16]{1,0} %custom-call.105), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15,output16,output17,output18,output19,output20,output21,output22,output23,output24,output25,output26,output27,output28,output29,output30,output31,output32,output33,output34"}
}

`;

export default text;
