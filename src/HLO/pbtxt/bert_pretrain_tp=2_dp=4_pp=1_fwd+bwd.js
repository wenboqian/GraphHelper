const text = `
    HloModule SyncTensorsGraph.1760, input_output_alias={ {0}: (41, {}, must-alias) }

%MaxComputation.422 (x.423: f32[], y.424: f32[]) -> f32[] {
  %x.423 = f32[] parameter(0)
  %y.424 = f32[] parameter(1)
  ROOT %maximum.425 = f32[] maximum(f32[] %x.423, f32[] %y.424)
}

%AddComputation.431 (x.432: f32[], y.433: f32[]) -> f32[] {
  %x.432 = f32[] parameter(0)
  %y.433 = f32[] parameter(1)
  ROOT %add.434 = f32[] add(f32[] %x.432, f32[] %y.433)
}

%AddComputation.451 (x.452: f32[], y.453: f32[]) -> f32[] {
  %x.452 = f32[] parameter(0)
  %y.453 = f32[] parameter(1)
  ROOT %add.454 = f32[] add(f32[] %x.452, f32[] %y.453)
}

%AddComputation.1203 (x.1204: f32[], y.1205: f32[]) -> f32[] {
  %x.1204 = f32[] parameter(0)
  %y.1205 = f32[] parameter(1)
  ROOT %add.1206 = f32[] add(f32[] %x.1204, f32[] %y.1205)
}

%AddComputation.1217 (x.1218: f32[], y.1219: f32[]) -> f32[] {
  %x.1218 = f32[] parameter(0)
  %y.1219 = f32[] parameter(1)
  ROOT %add.1220 = f32[] add(f32[] %x.1218, f32[] %y.1219)
}

%AddComputation.1241 (x.1242: f32[], y.1243: f32[]) -> f32[] {
  %x.1242 = f32[] parameter(0)
  %y.1243 = f32[] parameter(1)
  ROOT %add.1244 = f32[] add(f32[] %x.1242, f32[] %y.1243)
}

%AddComputation.1260 (x.1261: f32[], y.1262: f32[]) -> f32[] {
  %x.1261 = f32[] parameter(0)
  %y.1262 = f32[] parameter(1)
  ROOT %add.1263 = f32[] add(f32[] %x.1261, f32[] %y.1262)
}

%ScatterCombiner.1332 (p0.1333: f32[], p1.1334: f32[]) -> f32[] {
  %p0.1333 = f32[] parameter(0)
  %p1.1334 = f32[] parameter(1)
  ROOT %add.1335 = f32[] add(f32[] %p0.1333, f32[] %p1.1334)
}

%AddComputation.1383 (x.1384: f32[], y.1385: f32[]) -> f32[] {
  %x.1384 = f32[] parameter(0)
  %y.1385 = f32[] parameter(1)
  ROOT %add.1386 = f32[] add(f32[] %x.1384, f32[] %y.1385)
}

%AddComputation.1399 (x.1400: f32[], y.1401: f32[]) -> f32[] {
  %x.1400 = f32[] parameter(0)
  %y.1401 = f32[] parameter(1)
  ROOT %add.1402 = f32[] add(f32[] %x.1400, f32[] %y.1401)
}

%AddComputation.1455 (x.1456: f32[], y.1457: f32[]) -> f32[] {
  %x.1456 = f32[] parameter(0)
  %y.1457 = f32[] parameter(1)
  ROOT %add.1458 = f32[] add(f32[] %x.1456, f32[] %y.1457)
}

%AddComputation.1478 (x.1479: f32[], y.1480: f32[]) -> f32[] {
  %x.1479 = f32[] parameter(0)
  %y.1480 = f32[] parameter(1)
  ROOT %add.1481 = f32[] add(f32[] %x.1479, f32[] %y.1480)
}

%AddComputation.1494 (x.1495: f32[], y.1496: f32[]) -> f32[] {
  %x.1495 = f32[] parameter(0)
  %y.1496 = f32[] parameter(1)
  ROOT %add.1497 = f32[] add(f32[] %x.1495, f32[] %y.1496)
}

%AddComputation.1521 (x.1522: f32[], y.1523: f32[]) -> f32[] {
  %x.1522 = f32[] parameter(0)
  %y.1523 = f32[] parameter(1)
  ROOT %add.1524 = f32[] add(f32[] %x.1522, f32[] %y.1523)
}

%AddComputation.1548 (x.1549: f32[], y.1550: f32[]) -> f32[] {
  %x.1549 = f32[] parameter(0)
  %y.1550 = f32[] parameter(1)
  ROOT %add.1551 = f32[] add(f32[] %x.1549, f32[] %y.1550)
}

%AddComputation.1571 (x.1572: f32[], y.1573: f32[]) -> f32[] {
  %x.1572 = f32[] parameter(0)
  %y.1573 = f32[] parameter(1)
  ROOT %add.1574 = f32[] add(f32[] %x.1572, f32[] %y.1573)
}

%AddComputation.1587 (x.1588: f32[], y.1589: f32[]) -> f32[] {
  %x.1588 = f32[] parameter(0)
  %y.1589 = f32[] parameter(1)
  ROOT %add.1590 = f32[] add(f32[] %x.1588, f32[] %y.1589)
}

%AddComputation.1662 (x.1663: f32[], y.1664: f32[]) -> f32[] {
  %x.1663 = f32[] parameter(0)
  %y.1664 = f32[] parameter(1)
  ROOT %add.1665 = f32[] add(f32[] %x.1663, f32[] %y.1664)
}

%AddComputation.1685 (x.1686: f32[], y.1687: f32[]) -> f32[] {
  %x.1686 = f32[] parameter(0)
  %y.1687 = f32[] parameter(1)
  ROOT %add.1688 = f32[] add(f32[] %x.1686, f32[] %y.1687)
}

%SimpleCrossEntropyLossForwardAdd.813 (p0.814: f32[], p1.815: f32[]) -> f32[] {
  %p0.814 = f32[] parameter(0)
  %p1.815 = f32[] parameter(1)
  ROOT %add.816 = f32[] add(f32[] %p0.814, f32[] %p1.815)
}

%SimpleCrossEntropyLossForwardAdd.817 (p0.818: f32[], p1.819: f32[]) -> f32[] {
  %p0.818 = f32[] parameter(0)
  %p1.819 = f32[] parameter(1)
  ROOT %add.820 = f32[] add(f32[] %p0.818, f32[] %p1.819)
}

%SimpleCrossEntropyLossForwardAdd.821 (p0.822: f32[], p1.823: f32[]) -> f32[] {
  %p0.822 = f32[] parameter(0)
  %p1.823 = f32[] parameter(1)
  ROOT %add.824 = f32[] add(f32[] %p0.822, f32[] %p1.823)
}

%SimpleCrossEntropyLossForwardAdd.825 (p0.826: f32[], p1.827: f32[]) -> f32[] {
  %p0.826 = f32[] parameter(0)
  %p1.827 = f32[] parameter(1)
  ROOT %add.828 = f32[] add(f32[] %p0.826, f32[] %p1.827)
}

%SimpleCrossEntropyLossBackwardAdd.940 (p0.941: f32[], p1.942: f32[]) -> f32[] {
  %p0.941 = f32[] parameter(0)
  %p1.942 = f32[] parameter(1)
  ROOT %add.943 = f32[] add(f32[] %p0.941, f32[] %p1.942)
}

%SimpleCrossEntropyLossForwardMax.626 (p0.627: f32[], p1.628: f32[]) -> f32[] {
  %p0.627 = f32[] parameter(0)
  %p1.628 = f32[] parameter(1)
  ROOT %maximum.629 = f32[] maximum(f32[] %p0.627, f32[] %p1.628)
}

%SimpleCrossEntropyLossForwardAdd.630 (p0.631: f32[], p1.632: f32[]) -> f32[] {
  %p0.631 = f32[] parameter(0)
  %p1.632 = f32[] parameter(1)
  ROOT %add.633 = f32[] add(f32[] %p0.631, f32[] %p1.632)
}

%SimpleCrossEntropyLossForwardAdd.634 (p0.635: f32[], p1.636: f32[]) -> f32[] {
  %p0.635 = f32[] parameter(0)
  %p1.636 = f32[] parameter(1)
  ROOT %add.637 = f32[] add(f32[] %p0.635, f32[] %p1.636)
}

%Int32PermissiveEmbeddingScatterCombiner.1701 (p0.1702: f32[], p1.1703: f32[]) -> f32[] {
  %p0.1702 = f32[] parameter(0)
  %p1.1703 = f32[] parameter(1)
  ROOT %add.1704 = f32[] add(f32[] %p0.1702, f32[] %p1.1703)
}

%Int32PermissiveEmbeddingScatterCombiner.1730 (p0.1731: f32[], p1.1732: f32[]) -> f32[] {
  %p0.1731 = f32[] parameter(0)
  %p1.1732 = f32[] parameter(1)
  ROOT %add.1733 = f32[] add(f32[] %p0.1731, f32[] %p1.1732)
}

%SimpleCrossEntropyLossForwardMax.809 (p0.810: f32[], p1.811: f32[]) -> f32[] {
  %p0.810 = f32[] parameter(0)
  %p1.811 = f32[] parameter(1)
  ROOT %maximum.812 = f32[] maximum(f32[] %p0.810, f32[] %p1.811)
}

%AddComputation.976 (x.977: f32[], y.978: f32[]) -> f32[] {
  %x.977 = f32[] parameter(0)
  %y.978 = f32[] parameter(1)
  ROOT %add.979 = f32[] add(f32[] %x.977, f32[] %y.978)
}

%AddComputation.1360 (x.1361: f32[], y.1362: f32[]) -> f32[] {
  %x.1361 = f32[] parameter(0)
  %y.1362 = f32[] parameter(1)
  ROOT %add.1363 = f32[] add(f32[] %x.1361, f32[] %y.1362)
}

%AddComputation.1606 (x.1607: f32[], y.1608: f32[]) -> f32[] {
  %x.1607 = f32[] parameter(0)
  %y.1608 = f32[] parameter(1)
  ROOT %add.1609 = f32[] add(f32[] %x.1607, f32[] %y.1608)
}

%AddComputation.1646 (x.1647: f32[], y.1648: f32[]) -> f32[] {
  %x.1647 = f32[] parameter(0)
  %y.1648 = f32[] parameter(1)
  ROOT %add.1649 = f32[] add(f32[] %x.1647, f32[] %y.1648)
}

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add.12 = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

%AddComputation.1626 (x.1627: f32[], y.1628: f32[]) -> f32[] {
  %x.1627 = f32[] parameter(0)
  %y.1628 = f32[] parameter(1)
  ROOT %add.1629 = f32[] add(f32[] %x.1627, f32[] %y.1628)
}

ENTRY %SyncTensorsGraph.1760 (p0.4: s64[1], p1.5: f32[2], p2.13: f32[2,16], p3.22: f32[16], p4.30: f32[16,16], p5.40: f32[16], p6.74: f32[16], p7.107: f32[], p8.108: s64[], p9.144: f32[16], p10.177: s64[1,512], p11.181: f32[512,16], p12.198: s64[1,128], p13.200: f32[2,16], p14.212: s64[1,128], p15.214: f32[30522,16], p16.235: f32[16], p17.295: f32[16], p18.297: f32[], p19.298: f32[16,8], p20.305: f32[8], p21.307: f32[8,16], p22.353: f32[], p23.354: s64[1,128], p24.375: f32[], p25.381: f32[8], p26.383: f32[8,16], p27.400: f32[8], p28.402: f32[8,16], p29.472: f32[16], p30.527: f32[16], p31.536: f32[16,4096], p32.550: f32[4096], p33.559: f32[4096,16], p34.599: f32[16], p35.688: s64[1,128], p36.695: f32[30522], p37.713: f32[16], p38.746: f32[16], p39.755: f32[16,16], p40.786: f32[16], p41.875: f32[1], p42.1314: s64[]) -> (f32[1], f32[1,128,30522], f32[1,2], f32[], f32[], /*index=5*/f32[2], f32[2,16], f32[30522], f32[30522,16], f32[16], /*index=10*/f32[16], f32[16], f32[16,16], f32[16], f32[16,16], /*index=15*/f32[16], f32[16], f32[16], f32[16,4096], f32[4096], /*index=20*/f32[4096,16], f32[16], f32[16], f32[16], f32[16,8], /*index=25*/f32[8], f32[8,16], f32[8], f32[8,16], f32[8], /*index=30*/f32[8,16], f32[16], f32[16], f32[512,16], f32[2,16]) {
  %p41.875 = f32[1]{0} parameter(41), frontend_attributes={neff_input_names="input41"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=508}
  %p35.688 = s64[1,128]{1,0} parameter(35), frontend_attributes={neff_input_names="input35"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1134}
  %constant.7 = s64[] constant(-100)
  %broadcast.184 = s64[1,128]{1,0} broadcast(s64[] %constant.7), dimensions={}
  %compare.8 = pred[1,128]{1,0} compare(s64[1,128]{1,0} %p35.688, s64[1,128]{1,0} %broadcast.184), direction=NE
  %reshape.527 = pred[128]{0} reshape(pred[1,128]{1,0} %compare.8)
  %p40.786 = f32[16]{0} parameter(40), frontend_attributes={neff_input_names="input40"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.72 = f32[16]{0} custom-call(f32[16]{0} %p40.786), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.799 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.72), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p34.599 = f32[16]{0} parameter(34), frontend_attributes={neff_input_names="input34"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.55 = f32[16]{0} custom-call(f32[16]{0} %p34.599), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.612 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.55), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p29.472 = f32[16]{0} parameter(29), frontend_attributes={neff_input_names="input29"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.56 = f32[16]{0} custom-call(f32[16]{0} %p29.472), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.485 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.56), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p16.235 = f32[16]{0} parameter(16), frontend_attributes={neff_input_names="input16"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.57 = f32[16]{0} custom-call(f32[16]{0} %p16.235), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.248 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.57), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p15.214 = f32[30522,16]{1,0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.58 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %p15.214), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p14.212 = s64[1,128]{1,0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %convert.6 = u32[1,128]{1,0} convert(s64[1,128]{1,0} %p14.212)
  %reshape.383 = u32[128]{0} reshape(u32[1,128]{1,0} %convert.6), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %gather.223 = f32[128,16]{1,0} gather(f32[30522,16]{1,0} %custom-call.58, u32[128]{0} %reshape.383), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %p13.200 = f32[2,16]{1,0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.59 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %p13.200), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p12.198 = s64[1,128]{1,0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %convert.5 = u32[1,128]{1,0} convert(s64[1,128]{1,0} %p12.198)
  %reshape.382 = u32[128]{0} reshape(u32[1,128]{1,0} %convert.5), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %gather.209 = f32[128,16]{1,0} gather(f32[2,16]{1,0} %custom-call.59, u32[128]{0} %reshape.382), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %add.13 = f32[128,16]{1,0} add(f32[128,16]{1,0} %gather.223, f32[128,16]{1,0} %gather.209), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=235}
  %p11.181 = f32[512,16]{1,0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.60 = f32[512,16]{1,0} custom-call(f32[512,16]{1,0} %p11.181), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p10.177 = s64[1,512]{1,0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=218}
  %convert.4 = u32[1,512]{1,0} convert(s64[1,512]{1,0} %p10.177)
  %slice.0 = u32[1,128]{1,0} slice(u32[1,512]{1,0} %convert.4), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %reshape.381 = u32[128]{0} reshape(u32[1,128]{1,0} %slice.0), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %gather.190 = f32[128,16]{1,0} gather(f32[512,16]{1,0} %custom-call.60, u32[128]{0} %reshape.381), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %add.16 = f32[128,16]{1,0} add(f32[128,16]{1,0} %add.13, f32[128,16]{1,0} %gather.190), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %reshape.551 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %add.16), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %constant.167 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.171 = f32[128]{0} broadcast(f32[] %constant.167), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.162 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.166 = f32[128]{0} broadcast(f32[] %constant.162), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.227 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %reshape.551, f32[128]{0} %broadcast.171, f32[128]{0} %broadcast.166), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
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
  %reshape.404 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p28.402 = f32[8,16]{1,0} parameter(28), frontend_attributes={neff_input_names="input28"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.403 = f32[16,8]{0,1} transpose(f32[8,16]{1,0} %p28.402), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.405 = f32[128,8]{1,0} dot(f32[128,16]{1,0} %reshape.404, f32[16,8]{0,1} %transpose.403), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.406 = f32[1,128,8]{2,1,0} reshape(f32[128,8]{1,0} %dot.405), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p27.400 = f32[8]{0} parameter(27), frontend_attributes={neff_input_names="input27"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.407 = f32[1,128,8]{2,1,0} broadcast(f32[8]{0} %p27.400), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.408 = f32[1,128,8]{2,1,0} add(f32[1,128,8]{2,1,0} %reshape.406, f32[1,128,8]{2,1,0} %broadcast.407), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.39 = f32[128,8]{1,0} reshape(f32[1,128,8]{2,1,0} %add.408)
  %reshape.385 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p26.383 = f32[8,16]{1,0} parameter(26), frontend_attributes={neff_input_names="input26"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.384 = f32[16,8]{0,1} transpose(f32[8,16]{1,0} %p26.383), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.386 = f32[128,8]{1,0} dot(f32[128,16]{1,0} %reshape.385, f32[16,8]{0,1} %transpose.384), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.387 = f32[1,128,8]{2,1,0} reshape(f32[128,8]{1,0} %dot.386), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p25.381 = f32[8]{0} parameter(25), frontend_attributes={neff_input_names="input25"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.388 = f32[1,128,8]{2,1,0} broadcast(f32[8]{0} %p25.381), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.389 = f32[1,128,8]{2,1,0} add(f32[1,128,8]{2,1,0} %reshape.387, f32[1,128,8]{2,1,0} %broadcast.388), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.36 = f32[1,1,128,8]{3,1,2,0} reshape(f32[1,128,8]{2,1,0} %add.389), metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %transpose.392 = f32[1,1,8,128]{2,1,3,0} transpose(f32[1,1,128,8]{3,1,2,0} %reshape.36), dimensions={0,1,3,2}, metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.40 = f32[8,128]{1,0} reshape(f32[1,1,8,128]{2,1,3,0} %transpose.392)
  %dot = f32[128,128]{1,0} dot(f32[128,8]{1,0} %reshape.39, f32[8,128]{1,0} %reshape.40), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %p24.375 = f32[] parameter(24), frontend_attributes={neff_input_names="input24"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %broadcast.186 = f32[128,128]{1,0} broadcast(f32[] %p24.375), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %divide.8 = f32[128,128]{1,0} divide(f32[128,128]{1,0} %dot, f32[128,128]{1,0} %broadcast.186), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %reshape.516 = f32[1,1,128,128]{3,2,1,0} reshape(f32[128,128]{1,0} %divide.8), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %constant.366 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %broadcast.188 = f32[1,128]{1,0} broadcast(f32[] %constant.366), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p23.354 = s64[1,128]{1,0} parameter(23), frontend_attributes={neff_input_names="input23"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=958}
  %convert.2 = f32[1,128]{1,0} convert(s64[1,128]{1,0} %p23.354), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=969}
  %subtract.4 = f32[1,128]{1,0} subtract(f32[1,128]{1,0} %broadcast.188, f32[1,128]{1,0} %convert.2), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p22.353 = f32[] parameter(22), frontend_attributes={neff_input_names="input22"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %broadcast.194 = f32[1,128]{1,0} broadcast(f32[] %p22.353), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %multiply.31 = f32[1,128]{1,0} multiply(f32[1,128]{1,0} %subtract.4, f32[1,128]{1,0} %broadcast.194), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %reshape.60 = f32[128]{0} reshape(f32[1,128]{1,0} %multiply.31)
  %broadcast.419 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[128]{0} %reshape.60), dimensions={3}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %add.420 = f32[1,1,128,128]{3,2,1,0} add(f32[1,1,128,128]{3,2,1,0} %reshape.516, f32[1,1,128,128]{3,2,1,0} %broadcast.419), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %constant.421 = f32[] constant(-inf), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.426 = f32[1,1,128]{2,1,0} reduce(f32[1,1,128,128]{3,2,1,0} %add.420, f32[] %constant.421), dimensions={3}, to_apply=%MaxComputation.422, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.62 = f32[128]{0} reshape(f32[1,1,128]{2,1,0} %reduce.426)
  %broadcast.427 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[128]{0} %reshape.62), dimensions={2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %subtract.428 = f32[1,1,128,128]{3,2,1,0} subtract(f32[1,1,128,128]{3,2,1,0} %add.420, f32[1,1,128,128]{3,2,1,0} %broadcast.427), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %exponential.429 = f32[1,1,128,128]{3,2,1,0} exponential(f32[1,1,128,128]{3,2,1,0} %subtract.428), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.430 = f32[] constant(0), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.435 = f32[1,1,128]{2,1,0} reduce(f32[1,1,128,128]{3,2,1,0} %exponential.429, f32[] %constant.430), dimensions={3}, to_apply=%AddComputation.431, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.63 = f32[128]{0} reshape(f32[1,1,128]{2,1,0} %reduce.435)
  %broadcast.436 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[128]{0} %reshape.63), dimensions={2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %divide.437 = f32[1,1,128,128]{3,2,1,0} divide(f32[1,1,128,128]{3,2,1,0} %exponential.429, f32[1,1,128,128]{3,2,1,0} %broadcast.436), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.252 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.253 = s64[] multiply(s64[] %constant.252, s64[] %add.112), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.254 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.255 = s64[] add(s64[] %multiply.253, s64[] %constant.254), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.324 = u64[] convert(s64[] %add.255), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.326 = u64[1]{0} reshape(u64[] %convert.324), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.42 = u64[1]{0} constant({0})
  %concatenate.328 = u64[2]{0} concatenate(u64[1]{0} %reshape.326, u64[1]{0} %constant.42), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.329 = (u64[2]{0}, u32[1,1,128,128]{3,2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.328), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.330 = u32[1,1,128,128]{3,2,1,0} get-tuple-element((u64[2]{0}, u32[1,1,128,128]{3,2,1,0}) %rng-bit-generator.329), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.332 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.333 = u32[1,1,128,128]{3,2,1,0} broadcast(u32[] %constant.332), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.334 = u32[1,1,128,128]{3,2,1,0} shift-right-logical(u32[1,1,128,128]{3,2,1,0} %get-tuple-element.330, u32[1,1,128,128]{3,2,1,0} %broadcast.333), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.335 = f32[1,1,128,128]{3,2,1,0} convert(u32[1,1,128,128]{3,2,1,0} %shift-right-logical.334), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.336 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.337 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[] %constant.336), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.341 = f32[1,1,128,128]{3,2,1,0} multiply(f32[1,1,128,128]{3,2,1,0} %convert.335, f32[1,1,128,128]{3,2,1,0} %broadcast.337), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.321 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.344 = pred[1,1,128,128]{3,2,1,0} compare(f32[1,1,128,128]{3,2,1,0} %multiply.341, f32[1,1,128,128]{3,2,1,0} %broadcast.321), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.24 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.5 = f32[] divide(f32[] %constant.24, f32[] %p7.107)
  %broadcast.49 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[] %divide.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.33 = f32[] constant(0)
  %broadcast.92 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[] %constant.33), dimensions={}
  %select.12 = f32[1,1,128,128]{3,2,1,0} select(pred[1,1,128,128]{3,2,1,0} %compare.344, f32[1,1,128,128]{3,2,1,0} %broadcast.49, f32[1,1,128,128]{3,2,1,0} %broadcast.92), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.438 = f32[1,1,128,128]{3,2,1,0} multiply(f32[1,1,128,128]{3,2,1,0} %divide.437, f32[1,1,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.78 = f32[128,128]{1,0} reshape(f32[1,1,128,128]{3,2,1,0} %multiply.438)
  %reshape.309 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p21.307 = f32[8,16]{1,0} parameter(21), frontend_attributes={neff_input_names="input21"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.308 = f32[16,8]{0,1} transpose(f32[8,16]{1,0} %p21.307), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.310 = f32[128,8]{1,0} dot(f32[128,16]{1,0} %reshape.309, f32[16,8]{0,1} %transpose.308), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.311 = f32[1,128,8]{2,1,0} reshape(f32[128,8]{1,0} %dot.310), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p20.305 = f32[8]{0} parameter(20), frontend_attributes={neff_input_names="input20"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.312 = f32[1,128,8]{2,1,0} broadcast(f32[8]{0} %p20.305), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.313 = f32[1,128,8]{2,1,0} add(f32[1,128,8]{2,1,0} %reshape.311, f32[1,128,8]{2,1,0} %broadcast.312), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.79 = f32[128,8]{1,0} reshape(f32[1,128,8]{2,1,0} %add.313)
  %dot.1 = f32[128,8]{1,0} dot(f32[128,128]{1,0} %reshape.78, f32[128,8]{1,0} %reshape.79), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %p19.298 = f32[16,8]{1,0} parameter(19), frontend_attributes={neff_input_names="input19"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.299 = f32[8,16]{0,1} transpose(f32[16,8]{1,0} %p19.298), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.446 = f32[128,16]{1,0} dot(f32[128,8]{1,0} %dot.1, f32[8,16]{0,1} %transpose.299), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.447 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.446), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %p18.297 = f32[] parameter(18), frontend_attributes={neff_input_names="input18"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.455 = (f32[1,128,16]{2,1,0}, f32[]) all-reduce(f32[1,128,16]{2,1,0} %reshape.447, f32[] %p18.297), replica_groups={{0,1},{2,3},{4,5},{6,7}}, to_apply=%AddComputation.451, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.456 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[]) %all-reduce.455), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %p17.295 = f32[16]{0} parameter(17), frontend_attributes={neff_input_names="input17"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %broadcast.460 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %p17.295), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %add.461 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %get-tuple-element.456, f32[1,128,16]{2,1,0} %broadcast.460), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
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
  %multiply.462 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.461, f32[1,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.463 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %multiply.462, f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=388}
  %constant.97 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.101 = f32[128]{0} broadcast(f32[] %constant.97), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.92 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.96 = f32[128]{0} broadcast(f32[] %constant.92), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.464 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %add.463, f32[128]{0} %broadcast.101, f32[128]{0} %broadcast.96), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.465 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.464), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p6.74 = f32[16]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.62 = f32[16]{0} custom-call(f32[16]{0} %p6.74), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.481 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.62), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.484 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.465, f32[1,128,16]{2,1,0} %broadcast.481), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.486 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %broadcast.485, f32[1,128,16]{2,1,0} %multiply.484), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.568 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.486), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p33.559 = f32[4096,16]{1,0} parameter(33), frontend_attributes={neff_input_names="input33"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.63 = f32[4096,16]{1,0} custom-call(f32[4096,16]{1,0} %p33.559), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.567 = f32[16,4096]{0,1} transpose(f32[4096,16]{1,0} %custom-call.63), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.569 = f32[128,4096]{1,0} dot(f32[128,16]{1,0} %reshape.568, f32[16,4096]{0,1} %transpose.567), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.570 = f32[1,128,4096]{2,1,0} reshape(f32[128,4096]{1,0} %dot.569), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p32.550 = f32[4096]{0} parameter(32), frontend_attributes={neff_input_names="input32"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.64 = f32[4096]{0} custom-call(f32[4096]{0} %p32.550), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.571 = f32[1,128,4096]{2,1,0} broadcast(f32[4096]{0} %custom-call.64), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.572 = f32[1,128,4096]{2,1,0} add(f32[1,128,4096]{2,1,0} %reshape.570, f32[1,128,4096]{2,1,0} %broadcast.571), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.65 = f32[1,128,4096]{2,1,0} custom-call(f32[1,128,4096]{2,1,0} %add.572), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.582 = f32[128,4096]{1,0} reshape(f32[1,128,4096]{2,1,0} %custom-call.65), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p31.536 = f32[16,4096]{1,0} parameter(31), frontend_attributes={neff_input_names="input31"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.66 = f32[16,4096]{1,0} custom-call(f32[16,4096]{1,0} %p31.536), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.544 = f32[4096,16]{0,1} transpose(f32[16,4096]{1,0} %custom-call.66), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.583 = f32[128,16]{1,0} dot(f32[128,4096]{1,0} %reshape.582, f32[4096,16]{0,1} %transpose.544), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.584 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.583), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p30.527 = f32[16]{0} parameter(30), frontend_attributes={neff_input_names="input30"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.67 = f32[16]{0} custom-call(f32[16]{0} %p30.527), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.585 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.67), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.586 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.584, f32[1,128,16]{2,1,0} %broadcast.585), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.488 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.489 = s64[] multiply(s64[] %constant.488, s64[] %add.259), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.490 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.491 = s64[] add(s64[] %multiply.489, s64[] %constant.490), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.498 = u64[] convert(s64[] %add.491), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.500 = u64[1]{0} reshape(u64[] %convert.498), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.45 = u64[1]{0} constant({0})
  %concatenate.502 = u64[2]{0} concatenate(u64[1]{0} %reshape.500, u64[1]{0} %constant.45), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.503 = (u64[2]{0}, u32[1,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.502), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.504 = u32[1,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[1,128,16]{2,1,0}) %rng-bit-generator.503), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.506 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.507 = u32[1,128,16]{2,1,0} broadcast(u32[] %constant.506), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.508 = u32[1,128,16]{2,1,0} shift-right-logical(u32[1,128,16]{2,1,0} %get-tuple-element.504, u32[1,128,16]{2,1,0} %broadcast.507), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.509 = f32[1,128,16]{2,1,0} convert(u32[1,128,16]{2,1,0} %shift-right-logical.508), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.510 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.511 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.510), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.515 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %convert.509, f32[1,128,16]{2,1,0} %broadcast.511), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.495 = f32[1,128,16]{2,1,0} broadcast(f32[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.518 = pred[1,128,16]{2,1,0} compare(f32[1,128,16]{2,1,0} %multiply.515, f32[1,128,16]{2,1,0} %broadcast.495), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.26 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.7 = f32[] divide(f32[] %constant.26, f32[] %p7.107)
  %broadcast.58 = f32[1,128,16]{2,1,0} broadcast(f32[] %divide.7), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.31 = f32[] constant(0)
  %broadcast.85 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.31), dimensions={}
  %select.10 = f32[1,128,16]{2,1,0} select(pred[1,128,16]{2,1,0} %compare.518, f32[1,128,16]{2,1,0} %broadcast.58, f32[1,128,16]{2,1,0} %broadcast.85), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.589 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.586, f32[1,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.590 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %multiply.589, f32[1,128,16]{2,1,0} %add.486), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=466}
  %constant.63 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.67 = f32[128]{0} broadcast(f32[] %constant.63), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.58 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.62 = f32[128]{0} broadcast(f32[] %constant.58), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.591 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %add.590, f32[128]{0} %broadcast.67, f32[128]{0} %broadcast.62), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.592 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.591), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p5.40 = f32[16]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.68 = f32[16]{0} custom-call(f32[16]{0} %p5.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.608 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.68), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.611 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.592, f32[1,128,16]{2,1,0} %broadcast.608), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.613 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %broadcast.612, f32[1,128,16]{2,1,0} %multiply.611), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.764 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.613), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p39.755 = f32[16,16]{1,0} parameter(39), frontend_attributes={neff_input_names="input39"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.69 = f32[16,16]{1,0} custom-call(f32[16,16]{1,0} %p39.755), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.763 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %custom-call.69), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.765 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.764, f32[16,16]{0,1} %transpose.763), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.766 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.765), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p38.746 = f32[16]{0} parameter(38), frontend_attributes={neff_input_names="input38"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.70 = f32[16]{0} custom-call(f32[16]{0} %p38.746), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.767 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.70), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.768 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.766, f32[1,128,16]{2,1,0} %broadcast.767), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.71 = f32[1,128,16]{2,1,0} custom-call(f32[1,128,16]{2,1,0} %add.768), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.736 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.740 = f32[128]{0} broadcast(f32[] %constant.736), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.731 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.735 = f32[128]{0} broadcast(f32[] %constant.731), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.778 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-training(f32[1,128,16]{2,1,0} %custom-call.71, f32[128]{0} %broadcast.740, f32[128]{0} %broadcast.735), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.779 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.778), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p37.713 = f32[16]{0} parameter(37), frontend_attributes={neff_input_names="input37"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.73 = f32[16]{0} custom-call(f32[16]{0} %p37.713), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.795 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.73), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.798 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.779, f32[1,128,16]{2,1,0} %broadcast.795), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.800 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %broadcast.799, f32[1,128,16]{2,1,0} %multiply.798), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.801 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.800), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.74 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %p15.214), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.711 = f32[16,30522]{0,1} transpose(f32[30522,16]{1,0} %custom-call.74), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.802 = f32[128,30522]{1,0} dot(f32[128,16]{1,0} %reshape.801, f32[16,30522]{0,1} %transpose.711), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.803 = f32[1,128,30522]{2,1,0} reshape(f32[128,30522]{1,0} %dot.802), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p36.695 = f32[30522]{0} parameter(36), frontend_attributes={neff_input_names="input36"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.75 = f32[30522]{0} custom-call(f32[30522]{0} %p36.695), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.804 = f32[1,128,30522]{2,1,0} broadcast(f32[30522]{0} %custom-call.75), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.805 = f32[1,128,30522]{2,1,0} add(f32[1,128,30522]{2,1,0} %reshape.803, f32[1,128,30522]{2,1,0} %broadcast.804), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.808 = f32[128,30522]{1,0} reshape(f32[1,128,30522]{2,1,0} %add.805), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.0 = f32[] constant(-inf)
  %reduce.0 = f32[128]{0} reduce(f32[1,128,30522]{2,1,0} %add.805, f32[] %constant.0), dimensions={0,2}, to_apply=%SimpleCrossEntropyLossForwardMax.809
  %broadcast.0 = f32[128,30522]{1,0} broadcast(f32[128]{0} %reduce.0), dimensions={0}
  %subtract.0 = f32[128,30522]{1,0} subtract(f32[128,30522]{1,0} %reshape.808, f32[128,30522]{1,0} %broadcast.0)
  %exponential.0 = f32[128,30522]{1,0} exponential(f32[128,30522]{1,0} %subtract.0)
  %constant.4 = f32[] constant(0)
  %reduce.1 = f32[128]{0} reduce(f32[128,30522]{1,0} %exponential.0, f32[] %constant.4), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.813
  %log.0 = f32[128]{0} log(f32[128]{0} %reduce.1)
  %broadcast.1 = f32[128,30522]{1,0} broadcast(f32[128]{0} %log.0), dimensions={0}
  %subtract.1 = f32[128,30522]{1,0} subtract(f32[128,30522]{1,0} %subtract.0, f32[128,30522]{1,0} %broadcast.1), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1 = s64[128]{0} reshape(s64[1,128]{1,0} %p35.688)
  %broadcast.3 = s64[128,30522]{1,0} broadcast(s64[128]{0} %reshape.1), dimensions={0}
  %iota.5 = s64[128,30522]{1,0} iota(), iota_dimension=1
  %compare.0 = pred[128,30522]{1,0} compare(s64[128,30522]{1,0} %broadcast.3, s64[128,30522]{1,0} %iota.5), direction=EQ
  %constant.5 = f32[] constant(1)
  %broadcast.6 = f32[128,30522]{1,0} broadcast(f32[] %constant.5), dimensions={}
  %constant.6 = f32[] constant(0)
  %broadcast.7 = f32[128,30522]{1,0} broadcast(f32[] %constant.6), dimensions={}
  %select.0 = f32[128,30522]{1,0} select(pred[128,30522]{1,0} %compare.0, f32[128,30522]{1,0} %broadcast.6, f32[128,30522]{1,0} %broadcast.7)
  %multiply.2 = f32[128,30522]{1,0} multiply(f32[128,30522]{1,0} %subtract.1, f32[128,30522]{1,0} %select.0)
  %reduce.2 = f32[128]{0} reduce(f32[128,30522]{1,0} %multiply.2, f32[] %constant.4), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.817
  %constant.27 = f32[] constant(0)
  %broadcast.61 = f32[128]{0} broadcast(f32[] %constant.27), dimensions={}
  %select.6 = f32[128]{0} select(pred[128]{0} %reshape.527, f32[128]{0} %reduce.2, f32[128]{0} %broadcast.61)
  %reduce.3 = f32[] reduce(f32[128]{0} %select.6, f32[] %constant.4), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.821
  %convert.0 = f32[128]{0} convert(pred[128]{0} %reshape.527), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reduce.4 = f32[] reduce(f32[128]{0} %convert.0, f32[] %constant.4), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.825
  %divide.0 = f32[] divide(f32[] %reduce.3, f32[] %reduce.4)
  %negate.0 = f32[] negate(f32[] %divide.0), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p0.4 = s64[1]{0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1135}
  %constant.49 = s64[1]{0} constant({-100})
  %compare.4 = pred[1]{0} compare(s64[1]{0} %p0.4, s64[1]{0} %constant.49), direction=NE
  %slice.615 = f32[1,1,16]{2,1,0} slice(f32[1,128,16]{2,1,0} %add.613), slice={[0:1], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.144 = f32[16]{0} reshape(f32[1,1,16]{2,1,0} %slice.615)
  %broadcast.198 = f32[16,16]{1,0} broadcast(f32[16]{0} %reshape.144), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
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
  %reshape.522 = f32[1,2]{1,0} reshape(f32[2]{0} %add.15), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.10 = f32[] constant(-inf)
  %reduce.6 = f32[1]{0} reduce(f32[1,2]{1,0} %reshape.522, f32[] %constant.10), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardMax.626
  %reshape.150 = f32[] reshape(f32[1]{0} %reduce.6)
  %broadcast.17 = f32[1,2]{1,0} broadcast(f32[] %reshape.150), dimensions={}
  %subtract.2 = f32[1,2]{1,0} subtract(f32[1,2]{1,0} %reshape.522, f32[1,2]{1,0} %broadcast.17)
  %exponential.2 = f32[1,2]{1,0} exponential(f32[1,2]{1,0} %subtract.2)
  %constant.11 = f32[] constant(0)
  %reduce.7 = f32[1]{0} reduce(f32[1,2]{1,0} %exponential.2, f32[] %constant.11), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.630
  %log.1 = f32[1]{0} log(f32[1]{0} %reduce.7)
  %reshape.151 = f32[] reshape(f32[1]{0} %log.1)
  %broadcast.18 = f32[1,2]{1,0} broadcast(f32[] %reshape.151), dimensions={}
  %subtract.3 = f32[1,2]{1,0} subtract(f32[1,2]{1,0} %subtract.2, f32[1,2]{1,0} %broadcast.18), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.156 = s64[] reshape(s64[1]{0} %p0.4)
  %broadcast.20 = s64[1,2]{1,0} broadcast(s64[] %reshape.156), dimensions={}
  %iota.2 = s64[1,2]{1,0} iota(), iota_dimension=1
  %compare.3 = pred[1,2]{1,0} compare(s64[1,2]{1,0} %broadcast.20, s64[1,2]{1,0} %iota.2), direction=EQ
  %constant.12 = f32[] constant(1)
  %broadcast.22 = f32[1,2]{1,0} broadcast(f32[] %constant.12), dimensions={}
  %constant.13 = f32[] constant(0)
  %broadcast.23 = f32[1,2]{1,0} broadcast(f32[] %constant.13), dimensions={}
  %select.2 = f32[1,2]{1,0} select(pred[1,2]{1,0} %compare.3, f32[1,2]{1,0} %broadcast.22, f32[1,2]{1,0} %broadcast.23)
  %multiply.7 = f32[1,2]{1,0} multiply(f32[1,2]{1,0} %subtract.3, f32[1,2]{1,0} %select.2)
  %reduce.8 = f32[1]{0} reduce(f32[1,2]{1,0} %multiply.7, f32[] %constant.11), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.634
  %constant.50 = f32[1]{0} constant({0})
  %select.7 = f32[1]{0} select(pred[1]{0} %compare.4, f32[1]{0} %reduce.8, f32[1]{0} %constant.50)
  %convert.1 = f32[1]{0} convert(pred[1]{0} %compare.4), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %divide.9 = f32[1]{0} divide(f32[1]{0} %select.7, f32[1]{0} %convert.1)
  %negate.8 = f32[1]{0} negate(f32[1]{0} %divide.9), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.558 = f32[] reshape(f32[1]{0} %negate.8), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.872 = f32[] add(f32[] %negate.0, f32[] %reshape.558), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1136}
  %reshape.164 = f32[1]{0} reshape(f32[] %add.872), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=508}
  %add.877 = f32[1]{0} add(f32[1]{0} %p41.875, f32[1]{0} %reshape.164), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=508}
  %exponential.3 = f32[1,2]{1,0} exponential(f32[1,2]{1,0} %subtract.3)
  %constant.59 = f32[1]{0} constant({1})
  %divide.10 = f32[1]{0} divide(f32[1]{0} %constant.59, f32[1]{0} %convert.1)
  %constant.51 = f32[1]{0} constant({0})
  %select.8 = f32[1]{0} select(pred[1]{0} %compare.4, f32[1]{0} %divide.10, f32[1]{0} %constant.51)
  %reshape.172 = f32[] reshape(f32[1]{0} %select.8)
  %broadcast.26 = f32[1,2]{1,0} broadcast(f32[] %reshape.172), dimensions={}
  %multiply.10 = f32[1,2]{1,0} multiply(f32[1,2]{1,0} %exponential.3, f32[1,2]{1,0} %broadcast.26)
  %reshape.177 = s64[] reshape(s64[1]{0} %p0.4)
  %broadcast.28 = s64[1,2]{1,0} broadcast(s64[] %reshape.177), dimensions={}
  %iota.3 = s64[1,2]{1,0} iota(), iota_dimension=1
  %compare.5 = pred[1,2]{1,0} compare(s64[1,2]{1,0} %broadcast.28, s64[1,2]{1,0} %iota.3), direction=EQ
  %negate.9 = f32[1]{0} negate(f32[1]{0} %divide.10)
  %reshape.560 = f32[] reshape(f32[1]{0} %negate.9)
  %broadcast.30 = f32[1,2]{1,0} broadcast(f32[] %reshape.560), dimensions={}
  %constant.16 = f32[] constant(0)
  %broadcast.31 = f32[1,2]{1,0} broadcast(f32[] %constant.16), dimensions={}
  %select.3 = f32[1,2]{1,0} select(pred[1,2]{1,0} %compare.5, f32[1,2]{1,0} %broadcast.30, f32[1,2]{1,0} %broadcast.31)
  %add.1 = f32[1,2]{1,0} add(f32[1,2]{1,0} %multiply.10, f32[1,2]{1,0} %select.3), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.922 = f32[2]{0} reshape(f32[1,2]{1,0} %add.1), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.83 = f32[2]{0} custom-call(f32[2]{0} %reshape.922), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.185 = f32[2]{0} reshape(f32[1,2]{1,0} %add.1)
  %broadcast.143 = f32[2,16]{0,1} broadcast(f32[2]{0} %reshape.185), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %broadcast.144 = f32[2,16]{0,1} broadcast(f32[16]{0} %tanh.0), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.22 = f32[2,16]{0,1} multiply(f32[2,16]{0,1} %broadcast.143, f32[2,16]{0,1} %broadcast.144), metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.84 = f32[2,16]{1,0} custom-call(f32[2,16]{0,1} %multiply.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %exponential.1 = f32[128,30522]{1,0} exponential(f32[128,30522]{1,0} %subtract.1)
  %constant.880 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/autograd/__init__.py" source_line=127}
  %constant.8 = f32[] constant(0)
  %reduce.5 = f32[] reduce(f32[128]{0} %convert.0, f32[] %constant.8), dimensions={0}, to_apply=%SimpleCrossEntropyLossBackwardAdd.940
  %divide.1 = f32[] divide(f32[] %constant.880, f32[] %reduce.5)
  %broadcast.9 = f32[128]{0} broadcast(f32[] %divide.1), dimensions={}
  %constant.30 = f32[] constant(0)
  %broadcast.74 = f32[128]{0} broadcast(f32[] %constant.30), dimensions={}
  %select.9 = f32[128]{0} select(pred[128]{0} %reshape.527, f32[128]{0} %broadcast.9, f32[128]{0} %broadcast.74)
  %broadcast.10 = f32[128,30522]{1,0} broadcast(f32[128]{0} %select.9), dimensions={0}
  %multiply.5 = f32[128,30522]{1,0} multiply(f32[128,30522]{1,0} %exponential.1, f32[128,30522]{1,0} %broadcast.10)
  %reshape.4 = s64[128]{0} reshape(s64[1,128]{1,0} %p35.688)
  %broadcast.12 = s64[128,30522]{1,0} broadcast(s64[128]{0} %reshape.4), dimensions={0}
  %iota.7 = s64[128,30522]{1,0} iota(), iota_dimension=1
  %compare.2 = pred[128,30522]{1,0} compare(s64[128,30522]{1,0} %broadcast.12, s64[128,30522]{1,0} %iota.7), direction=EQ
  %negate.1 = f32[] negate(f32[] %divide.1)
  %broadcast.15 = f32[128,30522]{1,0} broadcast(f32[] %negate.1), dimensions={}
  %constant.9 = f32[] constant(0)
  %broadcast.16 = f32[128,30522]{1,0} broadcast(f32[] %constant.9), dimensions={}
  %select.1 = f32[128,30522]{1,0} select(pred[128,30522]{1,0} %compare.2, f32[128,30522]{1,0} %broadcast.15, f32[128,30522]{1,0} %broadcast.16)
  %add.0 = f32[128,30522]{1,0} add(f32[128,30522]{1,0} %multiply.5, f32[128,30522]{1,0} %select.1), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.974 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.980 = f32[30522]{0} reduce(f32[128,30522]{1,0} %add.0, f32[] %constant.974), dimensions={0}, to_apply=%AddComputation.976, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.85 = f32[30522]{0} custom-call(f32[30522]{0} %reduce.980), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1346 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.800), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1347 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1346), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.6 = f32[30522,16]{0,1} dot(f32[128,30522]{1,0} %add.0, f32[16,128]{0,1} %transpose.1347), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.86 = f32[30522,16]{1,0} custom-call(f32[30522,16]{0,1} %dot.6), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1326 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1330 = f32[30522,16]{1,0} broadcast(f32[] %constant.1326), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %reshape.1305 = s64[128]{0} reshape(s64[1,128]{1,0} %p14.212), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1320 = s64[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1321 = s64[128]{0} broadcast(s64[] %constant.1320), dimensions={}, metadata={op_type="aten__lt" op_name="aten__lt"}
  %compare.1322 = pred[128]{0} compare(s64[128]{0} %reshape.1305, s64[128]{0} %broadcast.1321), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt"}
  %p42.1314 = s64[] parameter(42), frontend_attributes={neff_input_names="input42"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %broadcast.1318 = s64[128]{0} broadcast(s64[] %p42.1314), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %add.1319 = s64[128]{0} add(s64[128]{0} %reshape.1305, s64[128]{0} %broadcast.1318), metadata={op_type="aten__add" op_name="aten__add"}
  %select.1323 = s64[128]{0} select(pred[128]{0} %compare.1322, s64[128]{0} %add.1319, s64[128]{0} %reshape.1305), metadata={op_type="aten__where" op_name="aten__where"}
  %reshape.1324 = s64[128,1]{1,0} reshape(s64[128]{0} %select.1323), metadata={op_type="aten__stack" op_name="aten__stack"}
  %convert.1306 = f32[128]{0} convert(s64[128]{0} %reshape.1305), metadata={op_type="aten__ne" op_name="aten__ne"}
  %constant.1304 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1307 = f32[128]{0} broadcast(f32[] %constant.1304), dimensions={}, metadata={op_type="aten__ne" op_name="aten__ne"}
  %compare.1308 = pred[128]{0} compare(f32[128]{0} %convert.1306, f32[128]{0} %broadcast.1307), direction=NE, metadata={op_type="aten__ne" op_name="aten__ne"}
  %broadcast.1312 = pred[128,16]{1,0} broadcast(pred[128]{0} %compare.1308), dimensions={0}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %constant.1000 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1004 = f32[128]{0} broadcast(f32[] %constant.1000), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.229 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.227), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.230 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.227), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.231 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.232 = f32[128]{0} broadcast(f32[] %constant.231), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.233 = f32[128]{0} add(f32[128]{0} %get-tuple-element.230, f32[128]{0} %broadcast.232), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt = f32[128]{0} sqrt(f32[128]{0} %add.233), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1296 = f32[128]{0} multiply(f32[128]{0} %sqrt, f32[128]{0} %sqrt), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.52 = f32[] constant(-1e-12)
  %broadcast.75 = f32[128]{0} broadcast(f32[] %constant.52), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.8 = f32[128]{0} add(f32[128]{0} %multiply.1296, f32[128]{0} %broadcast.75), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1016 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1020 = f32[128]{0} broadcast(f32[] %constant.1016), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.466 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.464), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.467 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.464), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.468 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.469 = f32[128]{0} broadcast(f32[] %constant.468), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.470 = f32[128]{0} add(f32[128]{0} %get-tuple-element.467, f32[128]{0} %broadcast.469), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.1 = f32[128]{0} sqrt(f32[128]{0} %add.470), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1177 = f32[128]{0} multiply(f32[128]{0} %sqrt.1, f32[128]{0} %sqrt.1), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.54 = f32[] constant(-1e-12)
  %broadcast.76 = f32[128]{0} broadcast(f32[] %constant.54), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.9 = f32[128]{0} add(f32[128]{0} %multiply.1177, f32[128]{0} %broadcast.76), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1036 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1040 = f32[128]{0} broadcast(f32[] %constant.1036), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.593 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.591), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.594 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.591), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.595 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.596 = f32[128]{0} broadcast(f32[] %constant.595), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.597 = f32[128]{0} add(f32[128]{0} %get-tuple-element.594, f32[128]{0} %broadcast.596), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.2 = f32[128]{0} sqrt(f32[128]{0} %add.597), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1145 = f32[128]{0} multiply(f32[128]{0} %sqrt.2, f32[128]{0} %sqrt.2), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.55 = f32[] constant(-1e-12)
  %broadcast.77 = f32[128]{0} broadcast(f32[] %constant.55), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.10 = f32[128]{0} add(f32[128]{0} %multiply.1145, f32[128]{0} %broadcast.77), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1095 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1099 = f32[128]{0} broadcast(f32[] %constant.1095), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.780 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.778), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.781 = f32[128]{0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-training.778), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.782 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.783 = f32[128]{0} broadcast(f32[] %constant.782), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.784 = f32[128]{0} add(f32[128]{0} %get-tuple-element.781, f32[128]{0} %broadcast.783), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.3 = f32[128]{0} sqrt(f32[128]{0} %add.784), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1118 = f32[128]{0} multiply(f32[128]{0} %sqrt.3, f32[128]{0} %sqrt.3), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.56 = f32[] constant(-1e-12)
  %broadcast.78 = f32[128]{0} broadcast(f32[] %constant.56), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.11 = f32[128]{0} add(f32[128]{0} %multiply.1118, f32[128]{0} %broadcast.78), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %dot.1110 = f32[128,16]{1,0} dot(f32[128,30522]{1,0} %add.0, f32[30522,16]{1,0} %custom-call.74), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1111 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1110), metadata={op_type="aten__view" op_name="aten__view"}
  %broadcast.1112 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.73), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1113 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %reshape.1111, f32[1,128,16]{2,1,0} %broadcast.1112), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1121 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %custom-call.71, f32[128]{0} %broadcast.1099, f32[128]{0} %get-tuple-element.780, f32[128]{0} %add.11, f32[1,128,16]{2,1,0} %multiply.1113), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1122 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1121), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %custom-call.76 = f32[1,128,16]{2,1,0} custom-call(f32[1,128,16]{2,1,0} %add.768), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.6 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.1122, f32[1,128,16]{2,1,0} %custom-call.76), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1135 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.6), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1136 = f32[128,16]{1,0} dot(f32[128,16]{1,0} %reshape.1135, f32[16,16]{1,0} %custom-call.69), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1137 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1136), metadata={op_type="aten__view" op_name="aten__view"}
  %reshape.218 = f32[2]{0} reshape(f32[1,2]{1,0} %add.1)
  %broadcast.192 = f32[2,16]{1,0} broadcast(f32[2]{0} %reshape.218), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.29 = f32[2,16]{1,0} multiply(f32[2,16]{1,0} %broadcast.192, f32[2,16]{1,0} %custom-call.80)
  %constant.37 = f32[] constant(0)
  %reduce.20 = f32[16]{0} reduce(f32[2,16]{1,0} %multiply.29, f32[] %constant.37), dimensions={0}, to_apply=%scalar_add_computation, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.1066 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.202 = f32[16]{0} broadcast(f32[] %constant.1066), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %multiply.34 = f32[16]{0} multiply(f32[16]{0} %tanh.0, f32[16]{0} %tanh.0), metadata={op_type="aten__pow" op_name="aten__pow"}
  %subtract.5 = f32[16]{0} subtract(f32[16]{0} %broadcast.202, f32[16]{0} %multiply.34), metadata={op_type="aten__sub" op_name="aten__sub"}
  %multiply.35 = f32[16]{0} multiply(f32[16]{0} %reduce.20, f32[16]{0} %subtract.5), metadata={op_type="aten__mul" op_name="aten__mul"}
  %broadcast.193 = f32[16,16]{1,0} broadcast(f32[16]{0} %multiply.35), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.30 = f32[16,16]{1,0} multiply(f32[16,16]{1,0} %broadcast.193, f32[16,16]{1,0} %custom-call.78)
  %constant.38 = f32[] constant(0)
  %reduce.21 = f32[16]{0} reduce(f32[16,16]{1,0} %multiply.30, f32[] %constant.38), dimensions={0}, to_apply=%scalar_add_computation, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1077 = f32[1,1,16]{2,1,0} reshape(f32[16]{0} %reduce.21), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.57 = f32[] constant(0)
  %pad = f32[1,128,16]{2,1,0} pad(f32[1,1,16]{2,1,0} %reshape.1077, f32[] %constant.57), padding=0_0x0_127x0_0, metadata={op_type="xla__update_slice" op_name="xla__update_slice"}
  %add.1138 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %reshape.1137, f32[1,128,16]{2,1,0} %pad), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1139 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.68), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1140 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1138, f32[1,128,16]{2,1,0} %broadcast.1139), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1148 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %add.590, f32[128]{0} %broadcast.1040, f32[128]{0} %get-tuple-element.593, f32[128]{0} %add.10, f32[1,128,16]{2,1,0} %multiply.1140), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1149 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1148), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %multiply.1152 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.1149, f32[1,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1153 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.1152), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1154 = f32[128,4096]{1,0} dot(f32[128,16]{1,0} %reshape.1153, f32[16,4096]{1,0} %custom-call.66), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1155 = f32[1,128,4096]{2,1,0} reshape(f32[128,4096]{1,0} %dot.1154), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.82 = f32[1,128,4096]{2,1,0} custom-call(f32[1,128,4096]{2,1,0} %add.572), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.11 = f32[1,128,4096]{2,1,0} multiply(f32[1,128,4096]{2,1,0} %reshape.1155, f32[1,128,4096]{2,1,0} %custom-call.82), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1166 = f32[128,4096]{1,0} reshape(f32[1,128,4096]{2,1,0} %multiply.11), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1167 = f32[128,16]{1,0} dot(f32[128,4096]{1,0} %reshape.1166, f32[4096,16]{1,0} %custom-call.63), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1168 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1167), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1170 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %get-tuple-element.1149, f32[1,128,16]{2,1,0} %reshape.1168), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1171 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.62), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1172 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1170, f32[1,128,16]{2,1,0} %broadcast.1171), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1180 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %add.463, f32[128]{0} %broadcast.1020, f32[128]{0} %get-tuple-element.466, f32[128]{0} %add.9, f32[1,128,16]{2,1,0} %multiply.1172), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1181 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1180), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1191 = f32[1,128,128]{2,1,0} reshape(f32[1,1,128,128]{3,2,1,0} %multiply.438), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1192 = f32[1,128,128]{1,2,0} transpose(f32[1,128,128]{2,1,0} %reshape.1191), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.246 = f32[128,128]{0,1} reshape(f32[1,128,128]{1,2,0} %transpose.1192)
  %multiply.1184 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %get-tuple-element.1181, f32[1,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1185 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.1184), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1186 = f32[128,8]{1,0} dot(f32[128,16]{1,0} %reshape.1185, f32[16,8]{1,0} %p19.298), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.9 = f32[128,8]{1,0} dot(f32[128,128]{0,1} %reshape.246, f32[128,8]{1,0} %dot.1186), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %dot.1198 = f32[128,16]{1,0} dot(f32[128,8]{1,0} %dot.9, f32[8,16]{1,0} %p21.307), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1199 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1198), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1202 = f32[] get-tuple-element((f32[1,128,16]{2,1,0}, f32[]) %all-reduce.455), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.1207 = (f32[1,128,16]{2,1,0}, f32[]) all-reduce(f32[1,128,16]{2,1,0} %reshape.1199, f32[] %get-tuple-element.1202), replica_groups={{0,1},{2,3},{4,5},{6,7}}, to_apply=%AddComputation.1203, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1208 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[]) %all-reduce.1207), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %add.1286 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %get-tuple-element.1181, f32[1,128,16]{2,1,0} %get-tuple-element.1208), metadata={op_type="aten__add" op_name="aten__add"}
  %transpose.1229 = f32[1,8,128]{1,2,0} transpose(f32[1,128,8]{2,1,0} %add.408), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.271 = f32[8,128]{0,1} reshape(f32[1,8,128]{1,2,0} %transpose.1229)
  %transpose.1211 = f32[1,8,128]{1,2,0} transpose(f32[1,128,8]{2,1,0} %add.313), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.265 = f32[8,128]{0,1} reshape(f32[1,8,128]{1,2,0} %transpose.1211)
  %dot.10 = f32[128,128]{1,0} dot(f32[128,8]{1,0} %dot.1186, f32[8,128]{0,1} %reshape.265), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1213 = f32[1,1,128,128]{3,2,1,0} reshape(f32[128,128]{1,0} %dot.10), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1214 = f32[1,1,128,128]{3,2,1,0} multiply(f32[1,1,128,128]{3,2,1,0} %reshape.1213, f32[1,1,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1215 = f32[1,1,128,128]{3,2,1,0} multiply(f32[1,1,128,128]{3,2,1,0} %multiply.1214, f32[1,1,128,128]{3,2,1,0} %divide.437), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %constant.1216 = f32[] constant(0), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reduce.1221 = f32[1,1,128]{2,1,0} reduce(f32[1,1,128,128]{3,2,1,0} %multiply.1215, f32[] %constant.1216), dimensions={3}, to_apply=%AddComputation.1217, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reshape.270 = f32[128]{0} reshape(f32[1,1,128]{2,1,0} %reduce.1221)
  %broadcast.1222 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[128]{0} %reshape.270), dimensions={2}, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %subtract.1223 = f32[1,1,128,128]{3,2,1,0} subtract(f32[1,1,128,128]{3,2,1,0} %multiply.1214, f32[1,1,128,128]{3,2,1,0} %broadcast.1222), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %multiply.1224 = f32[1,1,128,128]{3,2,1,0} multiply(f32[1,1,128,128]{3,2,1,0} %divide.437, f32[1,1,128,128]{3,2,1,0} %subtract.1223), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %broadcast.1225 = f32[1,1,128,128]{3,2,1,0} broadcast(f32[] %p24.375), dimensions={}, metadata={op_type="aten__div" op_name="aten__div"}
  %divide.1226 = f32[1,1,128,128]{3,2,1,0} divide(f32[1,1,128,128]{3,2,1,0} %multiply.1224, f32[1,1,128,128]{3,2,1,0} %broadcast.1225), metadata={op_type="aten__div" op_name="aten__div"}
  %reshape.272 = f32[128,128]{1,0} reshape(f32[1,1,128,128]{3,2,1,0} %divide.1226)
  %dot.11 = f32[8,128]{1,0} dot(f32[8,128]{0,1} %reshape.271, f32[128,128]{1,0} %reshape.272), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1231 = f32[1,1,8,128]{3,2,1,0} reshape(f32[8,128]{1,0} %dot.11), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1233 = f32[1,128,1,8]{1,3,2,0} transpose(f32[1,1,8,128]{3,2,1,0} %reshape.1231), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1235 = f32[128,8]{1,0} reshape(f32[1,128,1,8]{1,3,2,0} %transpose.1233), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1236 = f32[128,16]{1,0} dot(f32[128,8]{1,0} %reshape.1235, f32[8,16]{1,0} %p26.383), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1237 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1236), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1240 = f32[] get-tuple-element((f32[1,128,16]{2,1,0}, f32[]) %all-reduce.1207), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.1245 = (f32[1,128,16]{2,1,0}, f32[]) all-reduce(f32[1,128,16]{2,1,0} %reshape.1237, f32[] %get-tuple-element.1240), replica_groups={{0,1},{2,3},{4,5},{6,7}}, to_apply=%AddComputation.1241, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1246 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[]) %all-reduce.1245), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %add.1287 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %add.1286, f32[1,128,16]{2,1,0} %get-tuple-element.1246), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.280 = f32[128,128]{1,0} reshape(f32[1,1,128,128]{3,2,1,0} %divide.1226)
  %reshape.1248 = f32[1,8,128]{2,1,0} reshape(f32[1,1,8,128]{2,1,3,0} %transpose.392), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1249 = f32[1,128,8]{1,2,0} transpose(f32[1,8,128]{2,1,0} %reshape.1248), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.281 = f32[128,8]{0,1} reshape(f32[1,128,8]{1,2,0} %transpose.1249)
  %dot.12 = f32[128,8]{1,0} dot(f32[128,128]{1,0} %reshape.280, f32[128,8]{0,1} %reshape.281), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %dot.1255 = f32[128,16]{1,0} dot(f32[128,8]{1,0} %dot.12, f32[8,16]{1,0} %p28.402), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1256 = f32[1,128,16]{2,1,0} reshape(f32[128,16]{1,0} %dot.1255), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1259 = f32[] get-tuple-element((f32[1,128,16]{2,1,0}, f32[]) %all-reduce.1245), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.1264 = (f32[1,128,16]{2,1,0}, f32[]) all-reduce(f32[1,128,16]{2,1,0} %reshape.1256, f32[] %get-tuple-element.1259), replica_groups={{0,1},{2,3},{4,5},{6,7}}, to_apply=%AddComputation.1260, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1265 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[]) %all-reduce.1264), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %add.1288 = f32[1,128,16]{2,1,0} add(f32[1,128,16]{2,1,0} %add.1287, f32[1,128,16]{2,1,0} %get-tuple-element.1265), metadata={op_type="aten__add" op_name="aten__add"}
  %multiply.1289 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1288, f32[1,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul"}
  %broadcast.1290 = f32[1,128,16]{2,1,0} broadcast(f32[16]{0} %custom-call.61), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1291 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %multiply.1289, f32[1,128,16]{2,1,0} %broadcast.1290), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1299 = (f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) batch-norm-grad(f32[1,128,16]{2,1,0} %reshape.551, f32[128]{0} %broadcast.1004, f32[128]{0} %get-tuple-element.229, f32[128]{0} %add.8, f32[1,128,16]{2,1,0} %multiply.1291), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1300 = f32[1,128,16]{2,1,0} get-tuple-element((f32[1,128,16]{2,1,0}, f32[128]{0}, f32[128]{0}) %batch-norm-grad.1299), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1303 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %get-tuple-element.1300), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.995 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.999 = f32[128,16]{1,0} broadcast(f32[] %constant.995), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %select.1313 = f32[128,16]{1,0} select(pred[128,16]{1,0} %broadcast.1312, f32[128,16]{1,0} %reshape.1303, f32[128,16]{1,0} %broadcast.999), metadata={op_type="aten__where" op_name="aten__where"}
  %scatter.1336 = f32[30522,16]{1,0} scatter(f32[30522,16]{1,0} %broadcast.1330, s64[128,1]{1,0} %reshape.1324, f32[128,16]{1,0} %select.1313), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%ScatterCombiner.1332, metadata={op_type="aten__index_put" op_name="aten__index_put"}
  %custom-call.87 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %scatter.1336), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1357 = f32[30522,16]{1,0} add(f32[30522,16]{1,0} %custom-call.86, f32[30522,16]{1,0} %custom-call.87), metadata={op_type="aten__add" op_name="aten__add"}
  %constant.1358 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1364 = f32[16]{0} reduce(f32[128,16]{1,0} %dot.1110, f32[] %constant.1358), dimensions={0}, to_apply=%AddComputation.1360, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.88 = f32[16]{0} custom-call(f32[16]{0} %reduce.1364), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1380 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %reshape.1111, f32[1,128,16]{2,1,0} %get-tuple-element.779), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1381 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1387 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1380, f32[] %constant.1381), dimensions={0,1}, to_apply=%AddComputation.1383, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.89 = f32[16]{0} custom-call(f32[16]{0} %reduce.1387), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1397 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1403 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.6, f32[] %constant.1397), dimensions={0,1}, to_apply=%AddComputation.1399, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.90 = f32[16]{0} custom-call(f32[16]{0} %reduce.1403), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1413 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.613), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1414 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1413), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.13 = f32[16,16]{0,1} dot(f32[128,16]{1,0} %reshape.1135, f32[16,128]{0,1} %transpose.1414), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.91 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %dot.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.92 = f32[16]{0} custom-call(f32[16]{0} %multiply.35), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.179 = f32[16,16]{0,1} broadcast(f32[16]{0} %multiply.35), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %slice.1441 = f32[1,1,16]{2,1,0} slice(f32[1,128,16]{2,1,0} %add.613), slice={[0:1], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice"}
  %reshape.315 = f32[16]{0} reshape(f32[1,1,16]{2,1,0} %slice.1441)
  %broadcast.180 = f32[16,16]{0,1} broadcast(f32[16]{0} %reshape.315), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.26 = f32[16,16]{0,1} multiply(f32[16,16]{0,1} %broadcast.179, f32[16,16]{0,1} %broadcast.180), metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.93 = f32[16,16]{1,0} custom-call(f32[16,16]{0,1} %multiply.26), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1453 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1459 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %add.1138, f32[] %constant.1453), dimensions={0,1}, to_apply=%AddComputation.1455, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.94 = f32[16]{0} custom-call(f32[16]{0} %reduce.1459), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1475 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1138, f32[1,128,16]{2,1,0} %get-tuple-element.592), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1476 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1482 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1475, f32[] %constant.1476), dimensions={0,1}, to_apply=%AddComputation.1478, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.95 = f32[16]{0} custom-call(f32[16]{0} %reduce.1482), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1492 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1498 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1152, f32[] %constant.1492), dimensions={0,1}, to_apply=%AddComputation.1494, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.96 = f32[16]{0} custom-call(f32[16]{0} %reduce.1498), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1508 = f32[128,4096]{1,0} reshape(f32[1,128,4096]{2,1,0} %custom-call.65), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1509 = f32[4096,128]{0,1} transpose(f32[128,4096]{1,0} %reshape.1508), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.16 = f32[16,4096]{0,1} dot(f32[128,16]{1,0} %reshape.1153, f32[4096,128]{0,1} %transpose.1509), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.97 = f32[16,4096]{1,0} custom-call(f32[16,4096]{0,1} %dot.16), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1519 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1525 = f32[4096]{0} reduce(f32[1,128,4096]{2,1,0} %multiply.11, f32[] %constant.1519), dimensions={0,1}, to_apply=%AddComputation.1521, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.98 = f32[4096]{0} custom-call(f32[4096]{0} %reduce.1525), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1535 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %add.486), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1536 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1535), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.17 = f32[4096,16]{0,1} dot(f32[128,4096]{1,0} %reshape.1166, f32[16,128]{0,1} %transpose.1536), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.99 = f32[4096,16]{1,0} custom-call(f32[4096,16]{0,1} %dot.17), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1546 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1552 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %add.1170, f32[] %constant.1546), dimensions={0,1}, to_apply=%AddComputation.1548, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.100 = f32[16]{0} custom-call(f32[16]{0} %reduce.1552), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1568 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %add.1170, f32[1,128,16]{2,1,0} %get-tuple-element.465), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1569 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1575 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1568, f32[] %constant.1569), dimensions={0,1}, to_apply=%AddComputation.1571, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.101 = f32[16]{0} custom-call(f32[16]{0} %reduce.1575), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1585 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1591 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1184, f32[] %constant.1585), dimensions={0,1}, to_apply=%AddComputation.1587, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1598 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.1184), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1599 = f32[16,128]{0,1} transpose(f32[128,16]{1,0} %reshape.1598), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1600 = f32[16,8]{1,0} dot(f32[16,128]{0,1} %transpose.1599, f32[128,8]{1,0} %dot.1), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1604 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1610 = f32[8]{0} reduce(f32[128,8]{1,0} %dot.9, f32[] %constant.1604), dimensions={0}, to_apply=%AddComputation.1606, metadata={op_type="aten__sum" op_name="aten__sum"}
  %transpose.1618 = f32[8,128]{0,1} transpose(f32[128,8]{1,0} %dot.9), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1613 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1619 = f32[8,16]{1,0} dot(f32[8,128]{0,1} %transpose.1618, f32[128,16]{1,0} %reshape.1613), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1624 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1630 = f32[8]{0} reduce(f32[8,128]{1,0} %dot.11, f32[] %constant.1624), dimensions={1}, to_apply=%AddComputation.1626, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1634 = f32[1,1,8,128]{3,2,1,0} reshape(f32[8,128]{1,0} %dot.11), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1636 = f32[1,128,1,8]{1,3,2,0} transpose(f32[1,1,8,128]{3,2,1,0} %reshape.1634), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1638 = f32[128,8]{1,0} reshape(f32[1,128,1,8]{1,3,2,0} %transpose.1636), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1639 = f32[8,128]{0,1} transpose(f32[128,8]{1,0} %reshape.1638), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1633 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1640 = f32[8,16]{1,0} dot(f32[8,128]{0,1} %transpose.1639, f32[128,16]{1,0} %reshape.1633), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1644 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1650 = f32[8]{0} reduce(f32[128,8]{1,0} %dot.12, f32[] %constant.1644), dimensions={0}, to_apply=%AddComputation.1646, metadata={op_type="aten__sum" op_name="aten__sum"}
  %transpose.1658 = f32[8,128]{0,1} transpose(f32[128,8]{1,0} %dot.12), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1653 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %multiply.251), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1659 = f32[8,16]{1,0} dot(f32[8,128]{0,1} %transpose.1658, f32[128,16]{1,0} %reshape.1653), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1660 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1666 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1289, f32[] %constant.1660), dimensions={0,1}, to_apply=%AddComputation.1662, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.102 = f32[16]{0} custom-call(f32[16]{0} %reduce.1666), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1682 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %multiply.1289, f32[1,128,16]{2,1,0} %get-tuple-element.228), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1683 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1689 = f32[16]{0} reduce(f32[1,128,16]{2,1,0} %multiply.1682, f32[] %constant.1683), dimensions={0,1}, to_apply=%AddComputation.1685, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.103 = f32[16]{0} custom-call(f32[16]{0} %reduce.1689), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.17 = f32[] constant(0)
  %broadcast.32 = f32[512,16]{1,0} broadcast(f32[] %constant.17), dimensions={}
  %slice.1700 = s64[1,128]{1,0} slice(s64[1,512]{1,0} %p10.177), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.10 = s64[128]{0} reshape(s64[1,128]{1,0} %slice.1700)
  %constant.18 = s64[] constant(0)
  %broadcast.33 = s64[128]{0} broadcast(s64[] %constant.18), dimensions={}
  %compare.6 = pred[128]{0} compare(s64[128]{0} %reshape.10, s64[128]{0} %broadcast.33), direction=GE
  %constant.19 = s64[] constant(512)
  %broadcast.34 = s64[128]{0} broadcast(s64[] %constant.19), dimensions={}
  %add.2 = s64[128]{0} add(s64[128]{0} %reshape.10, s64[128]{0} %broadcast.34)
  %select.4 = s64[128]{0} select(pred[128]{0} %compare.6, s64[128]{0} %reshape.10, s64[128]{0} %add.2)
  %reshape.11 = s64[128,1]{1,0} reshape(s64[128]{0} %select.4)
  %reshape.12 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %get-tuple-element.1300)
  %scatter.0 = f32[512,16]{1,0} scatter(f32[512,16]{1,0} %broadcast.32, s64[128,1]{1,0} %reshape.11, f32[128,16]{1,0} %reshape.12), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1701, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
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
  %reshape.15 = f32[128,16]{1,0} reshape(f32[1,128,16]{2,1,0} %get-tuple-element.1300)
  %scatter.1 = f32[2,16]{1,0} scatter(f32[2,16]{1,0} %broadcast.35, s64[128,1]{1,0} %reshape.14, f32[128,16]{1,0} %reshape.15), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1730, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.105 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %scatter.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  ROOT %tuple.1759 = (f32[1]{0}, f32[1,128,30522]{2,1,0}, f32[1,2]{1,0}, f32[], f32[], /*index=5*/f32[2]{0}, f32[2,16]{1,0}, f32[30522]{0}, f32[30522,16]{1,0}, f32[16]{0}, /*index=10*/f32[16]{0}, f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, f32[16,16]{1,0}, /*index=15*/f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,4096]{1,0}, f32[4096]{0}, /*index=20*/f32[4096,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,8]{1,0}, /*index=25*/f32[8]{0}, f32[8,16]{1,0}, f32[8]{0}, f32[8,16]{1,0}, f32[8]{0}, /*index=30*/f32[8,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[512,16]{1,0}, f32[2,16]{1,0}) tuple(f32[1]{0} %add.877, f32[1,128,30522]{2,1,0} %add.805, f32[1,2]{1,0} %reshape.522, f32[] %add.872, f32[] %add.872, /*index=5*/f32[2]{0} %custom-call.83, f32[2,16]{1,0} %custom-call.84, f32[30522]{0} %custom-call.85, f32[30522,16]{1,0} %add.1357, f32[16]{0} %custom-call.88, /*index=10*/f32[16]{0} %custom-call.89, f32[16]{0} %custom-call.90, f32[16,16]{1,0} %custom-call.91, f32[16]{0} %custom-call.92, f32[16,16]{1,0} %custom-call.93, /*index=15*/f32[16]{0} %custom-call.94, f32[16]{0} %custom-call.95, f32[16]{0} %custom-call.96, f32[16,4096]{1,0} %custom-call.97, f32[4096]{0} %custom-call.98, /*index=20*/f32[4096,16]{1,0} %custom-call.99, f32[16]{0} %custom-call.100, f32[16]{0} %custom-call.101, f32[16]{0} %reduce.1591, f32[16,8]{1,0} %dot.1600, /*index=25*/f32[8]{0} %reduce.1610, f32[8,16]{1,0} %dot.1619, f32[8]{0} %reduce.1630, f32[8,16]{1,0} %dot.1640, f32[8]{0} %reduce.1650, /*index=30*/f32[8,16]{1,0} %dot.1659, f32[16]{0} %custom-call.102, f32[16]{0} %custom-call.103, f32[512,16]{1,0} %custom-call.104, f32[2,16]{1,0} %custom-call.105), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15,output16,output17,output18,output19,output20,output21,output22,output23,output24,output25,output26,output27,output28,output29,output30,output31,output32,output33,output34"}
}

`;

export default text;
