const text = `
    HloModule SyncTensorsGraph.1755, input_output_alias={ {0}: (42, {}, must-alias), {1}: (43, {}, must-alias), {2}: (44, {}, must-alias), {3}: (45, {}, must-alias), {4}: (46, {}, must-alias), {5}: (47, {}, must-alias), {6}: (48, {}, must-alias), {7}: (49, {}, must-alias), {8}: (50, {}, must-alias), {9}: (51, {}, must-alias), {10}: (52, {}, must-alias), {11}: (53, {}, must-alias), {12}: (54, {}, must-alias), {13}: (55, {}, must-alias), {14}: (56, {}, must-alias), {15}: (57, {}, must-alias), {16}: (58, {}, must-alias), {17}: (59, {}, must-alias), {18}: (60, {}, must-alias), {19}: (61, {}, must-alias), {20}: (62, {}, must-alias), {21}: (63, {}, must-alias), {22}: (64, {}, must-alias), {23}: (65, {}, must-alias), {24}: (66, {}, must-alias), {25}: (67, {}, must-alias), {26}: (68, {}, must-alias), {27}: (69, {}, must-alias), {28}: (70, {}, must-alias), {29}: (71, {}, must-alias), {30}: (73, {}, must-alias) }

%MaxComputation.371 (x.372: f32[], y.373: f32[]) -> f32[] {
  %x.372 = f32[] parameter(0)
  %y.373 = f32[] parameter(1)
  ROOT %maximum.374 = f32[] maximum(f32[] %x.372, f32[] %y.373)
}

%AddComputation.380 (x.381: f32[], y.382: f32[]) -> f32[] {
  %x.381 = f32[] parameter(0)
  %y.382 = f32[] parameter(1)
  ROOT %add.383 = f32[] add(f32[] %x.381, f32[] %y.382)
}

%AddComputation.400 (x.401: f32[], y.402: f32[]) -> f32[] {
  %x.401 = f32[] parameter(0)
  %y.402 = f32[] parameter(1)
  ROOT %add.403 = f32[] add(f32[] %x.401, f32[] %y.402)
}

%AddComputation.798 (x.799: f32[], y.800: f32[]) -> f32[] {
  %x.799 = f32[] parameter(0)
  %y.800 = f32[] parameter(1)
  ROOT %add.801 = f32[] add(f32[] %x.799, f32[] %y.800)
}

%AddComputation.907 (x.908: f32[], y.909: f32[]) -> f32[] {
  %x.908 = f32[] parameter(0)
  %y.909 = f32[] parameter(1)
  ROOT %add.910 = f32[] add(f32[] %x.908, f32[] %y.909)
}

%AddComputation.960 (x.961: f32[], y.962: f32[]) -> f32[] {
  %x.961 = f32[] parameter(0)
  %y.962 = f32[] parameter(1)
  ROOT %add.963 = f32[] add(f32[] %x.961, f32[] %y.962)
}

%AddComputation.1012 (x.1013: f32[], y.1014: f32[]) -> f32[] {
  %x.1013 = f32[] parameter(0)
  %y.1014 = f32[] parameter(1)
  ROOT %add.1015 = f32[] add(f32[] %x.1013, f32[] %y.1014)
}

%AddComputation.1072 (x.1073: f32[], y.1074: f32[]) -> f32[] {
  %x.1073 = f32[] parameter(0)
  %y.1074 = f32[] parameter(1)
  ROOT %add.1075 = f32[] add(f32[] %x.1073, f32[] %y.1074)
}

%AddComputation.1096 (x.1097: f32[], y.1098: f32[]) -> f32[] {
  %x.1097 = f32[] parameter(0)
  %y.1098 = f32[] parameter(1)
  ROOT %add.1099 = f32[] add(f32[] %x.1097, f32[] %y.1098)
}

%AddComputation.1140 (x.1141: f32[], y.1142: f32[]) -> f32[] {
  %x.1141 = f32[] parameter(0)
  %y.1142 = f32[] parameter(1)
  ROOT %add.1143 = f32[] add(f32[] %x.1141, f32[] %y.1142)
}

%AddComputation.1184 (x.1185: f32[], y.1186: f32[]) -> f32[] {
  %x.1185 = f32[] parameter(0)
  %y.1186 = f32[] parameter(1)
  ROOT %add.1187 = f32[] add(f32[] %x.1185, f32[] %y.1186)
}

%AddComputation.1225 (x.1226: f32[], y.1227: f32[]) -> f32[] {
  %x.1226 = f32[] parameter(0)
  %y.1227 = f32[] parameter(1)
  ROOT %add.1228 = f32[] add(f32[] %x.1226, f32[] %y.1227)
}

%AddComputation.1249 (x.1250: f32[], y.1251: f32[]) -> f32[] {
  %x.1250 = f32[] parameter(0)
  %y.1251 = f32[] parameter(1)
  ROOT %add.1252 = f32[] add(f32[] %x.1250, f32[] %y.1251)
}

%AddComputation.1293 (x.1294: f32[], y.1295: f32[]) -> f32[] {
  %x.1294 = f32[] parameter(0)
  %y.1295 = f32[] parameter(1)
  ROOT %add.1296 = f32[] add(f32[] %x.1294, f32[] %y.1295)
}

%AddComputation.1374 (x.1375: f32[], y.1376: f32[]) -> f32[] {
  %x.1375 = f32[] parameter(0)
  %y.1376 = f32[] parameter(1)
  ROOT %add.1377 = f32[] add(f32[] %x.1375, f32[] %y.1376)
}

%AddComputation.1477 (x.1478: f32[], y.1479: f32[]) -> f32[] {
  %x.1478 = f32[] parameter(0)
  %y.1479 = f32[] parameter(1)
  ROOT %add.1480 = f32[] add(f32[] %x.1478, f32[] %y.1479)
}

%AddComputation.1494 (x.1495: f32[], y.1496: f32[]) -> f32[] {
  %x.1495 = f32[] parameter(0)
  %y.1496 = f32[] parameter(1)
  ROOT %add.1497 = f32[] add(f32[] %x.1495, f32[] %y.1496)
}

%AddComputation.1510 (x.1511: f32[], y.1512: f32[]) -> f32[] {
  %x.1511 = f32[] parameter(0)
  %y.1512 = f32[] parameter(1)
  ROOT %add.1513 = f32[] add(f32[] %x.1511, f32[] %y.1512)
}

%AddComputation.1542 (x.1543: f32[], y.1544: f32[]) -> f32[] {
  %x.1543 = f32[] parameter(0)
  %y.1544 = f32[] parameter(1)
  ROOT %add.1545 = f32[] add(f32[] %x.1543, f32[] %y.1544)
}

%AddComputation.1566 (x.1567: f32[], y.1568: f32[]) -> f32[] {
  %x.1567 = f32[] parameter(0)
  %y.1568 = f32[] parameter(1)
  ROOT %add.1569 = f32[] add(f32[] %x.1567, f32[] %y.1568)
}

%AddComputation.1611 (x.1612: f32[], y.1613: f32[]) -> f32[] {
  %x.1612 = f32[] parameter(0)
  %y.1613 = f32[] parameter(1)
  ROOT %add.1614 = f32[] add(f32[] %x.1612, f32[] %y.1613)
}

%ScatterCombiner.1731 (p0.1732: f32[], p1.1733: f32[]) -> f32[] {
  %p0.1732 = f32[] parameter(0)
  %p1.1733 = f32[] parameter(1)
  ROOT %add.1734 = f32[] add(f32[] %p0.1732, f32[] %p1.1733)
}

%SimpleCrossEntropyLossForwardMax.686 (p0.687: f32[], p1.688: f32[]) -> f32[] {
  %p0.687 = f32[] parameter(0)
  %p1.688 = f32[] parameter(1)
  ROOT %maximum.689 = f32[] maximum(f32[] %p0.687, f32[] %p1.688)
}

%SimpleCrossEntropyLossForwardAdd.690 (p0.691: f32[], p1.692: f32[]) -> f32[] {
  %p0.691 = f32[] parameter(0)
  %p1.692 = f32[] parameter(1)
  ROOT %add.693 = f32[] add(f32[] %p0.691, f32[] %p1.692)
}

%SimpleCrossEntropyLossForwardAdd.694 (p0.695: f32[], p1.696: f32[]) -> f32[] {
  %p0.695 = f32[] parameter(0)
  %p1.696 = f32[] parameter(1)
  ROOT %add.697 = f32[] add(f32[] %p0.695, f32[] %p1.696)
}

%SimpleCrossEntropyLossForwardAdd.698 (p0.699: f32[], p1.700: f32[]) -> f32[] {
  %p0.699 = f32[] parameter(0)
  %p1.700 = f32[] parameter(1)
  ROOT %add.701 = f32[] add(f32[] %p0.699, f32[] %p1.700)
}

%SimpleCrossEntropyLossForwardAdd.702 (p0.703: f32[], p1.704: f32[]) -> f32[] {
  %p0.703 = f32[] parameter(0)
  %p1.704 = f32[] parameter(1)
  ROOT %add.705 = f32[] add(f32[] %p0.703, f32[] %p1.704)
}

%SimpleCrossEntropyLossBackwardAdd.824 (p0.825: f32[], p1.826: f32[]) -> f32[] {
  %p0.825 = f32[] parameter(0)
  %p1.826 = f32[] parameter(1)
  ROOT %add.827 = f32[] add(f32[] %p0.825, f32[] %p1.826)
}

%SimpleCrossEntropyLossForwardMax.541 (p0.542: f32[], p1.543: f32[]) -> f32[] {
  %p0.542 = f32[] parameter(0)
  %p1.543 = f32[] parameter(1)
  ROOT %maximum.544 = f32[] maximum(f32[] %p0.542, f32[] %p1.543)
}

%SimpleCrossEntropyLossForwardAdd.545 (p0.546: f32[], p1.547: f32[]) -> f32[] {
  %p0.546 = f32[] parameter(0)
  %p1.547 = f32[] parameter(1)
  ROOT %add.548 = f32[] add(f32[] %p0.546, f32[] %p1.547)
}

%SimpleCrossEntropyLossForwardAdd.549 (p0.550: f32[], p1.551: f32[]) -> f32[] {
  %p0.550 = f32[] parameter(0)
  %p1.551 = f32[] parameter(1)
  ROOT %add.552 = f32[] add(f32[] %p0.550, f32[] %p1.551)
}

%SimpleCrossEntropyLossForwardAdd.553 (p0.554: f32[], p1.555: f32[]) -> f32[] {
  %p0.554 = f32[] parameter(0)
  %p1.555 = f32[] parameter(1)
  ROOT %add.556 = f32[] add(f32[] %p0.554, f32[] %p1.555)
}

%SimpleCrossEntropyLossForwardAdd.557 (p0.558: f32[], p1.559: f32[]) -> f32[] {
  %p0.558 = f32[] parameter(0)
  %p1.559 = f32[] parameter(1)
  ROOT %add.560 = f32[] add(f32[] %p0.558, f32[] %p1.559)
}

%SimpleCrossEntropyLossBackwardAdd.763 (p0.764: f32[], p1.765: f32[]) -> f32[] {
  %p0.764 = f32[] parameter(0)
  %p1.765 = f32[] parameter(1)
  ROOT %add.766 = f32[] add(f32[] %p0.764, f32[] %p1.765)
}

%Int32PermissiveEmbeddingScatterCombiner.1617 (p0.1618: f32[], p1.1619: f32[]) -> f32[] {
  %p0.1618 = f32[] parameter(0)
  %p1.1619 = f32[] parameter(1)
  ROOT %add.1620 = f32[] add(f32[] %p0.1618, f32[] %p1.1619)
}

%Int32PermissiveEmbeddingScatterCombiner.1654 (p0.1655: f32[], p1.1656: f32[]) -> f32[] {
  %p0.1655 = f32[] parameter(0)
  %p1.1656 = f32[] parameter(1)
  ROOT %add.1657 = f32[] add(f32[] %p0.1655, f32[] %p1.1656)
}

%AddComputation.860 (x.861: f32[], y.862: f32[]) -> f32[] {
  %x.861 = f32[] parameter(0)
  %y.862 = f32[] parameter(1)
  ROOT %add.863 = f32[] add(f32[] %x.861, f32[] %y.862)
}

%AddComputation.883 (x.884: f32[], y.885: f32[]) -> f32[] {
  %x.884 = f32[] parameter(0)
  %y.885 = f32[] parameter(1)
  ROOT %add.886 = f32[] add(f32[] %x.884, f32[] %y.885)
}

%AddComputation.1337 (x.1338: f32[], y.1339: f32[]) -> f32[] {
  %x.1338 = f32[] parameter(0)
  %y.1339 = f32[] parameter(1)
  ROOT %add.1340 = f32[] add(f32[] %x.1338, f32[] %y.1339)
}

%AddComputation.1433 (x.1434: f32[], y.1435: f32[]) -> f32[] {
  %x.1434 = f32[] parameter(0)
  %y.1435 = f32[] parameter(1)
  ROOT %add.1436 = f32[] add(f32[] %x.1434, f32[] %y.1435)
}

%AddComputation.1394 (x.1395: f32[], y.1396: f32[]) -> f32[] {
  %x.1395 = f32[] parameter(0)
  %y.1396 = f32[] parameter(1)
  ROOT %add.1397 = f32[] add(f32[] %x.1395, f32[] %y.1396)
}

ENTRY %SyncTensorsGraph.1755 (p0.2: f32[], p1.4: s64[16], p2.5: f32[2], p3.6: f32[2,16], p4.8: f32[16], p5.9: f32[16,16], p6.12: f32[16], p7.39: f32[16], p8.65: f32[], p9.66: s64[], p10.102: f32[16], p11.128: s64[1,512], p12.132: f32[512,16], p13.149: s64[16,128], p14.151: f32[2,16], p15.163: s64[16,128], p16.165: f32[30522,16], p17.191: f32[16], p18.244: f32[16], p19.246: f32[], p20.247: f32[16,8], p21.254: f32[8], p22.256: f32[8,16], p23.302: f32[], p24.303: s64[16,128], p25.324: f32[], p26.330: f32[8], p27.332: f32[8,16], p28.349: f32[8], p29.351: f32[8,16], p30.423: f32[16], p31.471: f32[16], p32.473: f32[16,4096], p33.480: f32[4096], p34.482: f32[4096,16], p35.517: f32[16], p36.605: s64[16,128], p37.612: f32[30522], p38.616: f32[16], p39.642: f32[16], p40.644: f32[16,16], p41.670: f32[16], p42.752: f32[1], p43.806: f32[2], p44.817: f32[2,16], p45.868: f32[30522], p46.891: f32[16], p47.915: f32[16], p48.968: f32[16], p49.981: f32[16,16], p50.1020: f32[16], p51.1034: f32[16,16], p52.1080: f32[16], p53.1104: f32[16], p54.1148: f32[16], p55.1161: f32[16,4096], p56.1192: f32[4096], p57.1205: f32[4096,16], p58.1233: f32[16], p59.1257: f32[16], p60.1301: f32[16], p61.1316: f32[16,8], p62.1345: f32[8], p63.1360: f32[8,16], p64.1402: f32[8], p65.1418: f32[8,16], p66.1441: f32[8], p67.1456: f32[8,16], p68.1550: f32[16], p69.1574: f32[16], p70.1647: f32[512,16], p71.1684: f32[2,16], p72.1713: s64[], p73.1751: f32[30522,16]) -> (f32[1], f32[2], f32[2,16], f32[30522], f32[16], /*index=5*/f32[16], f32[16], f32[16,16], f32[16], f32[16,16], /*index=10*/f32[16], f32[16], f32[16], f32[16,4096], f32[4096], /*index=15*/f32[4096,16], f32[16], f32[16], f32[16], f32[16,8], /*index=20*/f32[8], f32[8,16], f32[8], f32[8,16], f32[8], /*index=25*/f32[8,16], f32[16], f32[16], f32[512,16], f32[2,16], /*index=30*/f32[30522,16], f32[16,128,30522], f32[16,2], f32[], f32[]) {
  %p42.752 = f32[1]{0} parameter(42), frontend_attributes={neff_input_names="input42"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=506}
  %p36.605 = s64[16,128]{1,0} parameter(36), frontend_attributes={neff_input_names="input36"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1141}
  %constant.6 = s64[] constant(-100)
  %broadcast.196 = s64[16,128]{1,0} broadcast(s64[] %constant.6), dimensions={}
  %compare.8 = pred[16,128]{1,0} compare(s64[16,128]{1,0} %p36.605, s64[16,128]{1,0} %broadcast.196), direction=NE
  %reshape.530 = pred[2048]{0} reshape(pred[16,128]{1,0} %compare.8)
  %p41.670 = f32[16]{0} parameter(41), frontend_attributes={neff_input_names="input41"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.676 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p41.670), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p35.517 = f32[16]{0} parameter(35), frontend_attributes={neff_input_names="input35"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.523 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p35.517), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p30.423 = f32[16]{0} parameter(30), frontend_attributes={neff_input_names="input30"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.429 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p30.423), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p17.191 = f32[16]{0} parameter(17), frontend_attributes={neff_input_names="input17"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.197 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p17.191), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p16.165 = f32[30522,16]{1,0} parameter(16), frontend_attributes={neff_input_names="input16"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.10 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %p16.165), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p15.163 = s64[16,128]{1,0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %convert.6 = u32[16,128]{1,0} convert(s64[16,128]{1,0} %p15.163)
  %reshape.384 = u32[2048]{0} reshape(u32[16,128]{1,0} %convert.6), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %gather.174 = f32[2048,16]{1,0} gather(f32[30522,16]{1,0} %custom-call.10, u32[2048]{0} %reshape.384), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %p14.151 = f32[2,16]{1,0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.11 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %p14.151), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p13.149 = s64[16,128]{1,0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1137}
  %convert.5 = u32[16,128]{1,0} convert(s64[16,128]{1,0} %p13.149)
  %reshape.383 = u32[2048]{0} reshape(u32[16,128]{1,0} %convert.5), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1137}
  %gather.160 = f32[2048,16]{1,0} gather(f32[2,16]{1,0} %custom-call.11, u32[2048]{0} %reshape.383), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1137}
  %add.12 = f32[2048,16]{1,0} add(f32[2048,16]{1,0} %gather.174, f32[2048,16]{1,0} %gather.160), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=233}
  %reshape.519 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %add.12), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=233}
  %p12.132 = f32[512,16]{1,0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.12 = f32[512,16]{1,0} custom-call(f32[512,16]{1,0} %p12.132), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p11.128 = s64[1,512]{1,0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=216}
  %convert.4 = u32[1,512]{1,0} convert(s64[1,512]{1,0} %p11.128)
  %slice.0 = u32[1,128]{1,0} slice(u32[1,512]{1,0} %convert.4), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1137}
  %reshape.382 = u32[128]{0} reshape(u32[1,128]{1,0} %slice.0), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1137}
  %gather.141 = f32[128,16]{1,0} gather(f32[512,16]{1,0} %custom-call.12, u32[128]{0} %reshape.382), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1137}
  %broadcast.179 = f32[16,128,16]{2,1,0} broadcast(f32[128,16]{1,0} %gather.141), dimensions={1,2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=236}
  %add.180 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.519, f32[16,128,16]{2,1,0} %broadcast.179), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=236}
  %reshape.181 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %add.180), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.118 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.122 = f32[2048]{0} broadcast(f32[] %constant.118), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.113 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.117 = f32[2048]{0} broadcast(f32[] %constant.113), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.182 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.181, f32[2048]{0} %broadcast.122, f32[2048]{0} %broadcast.117), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.183 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.182), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.190 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.183), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p10.102 = f32[16]{0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.193 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p10.102), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.196 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.190, f32[16,128,16]{2,1,0} %broadcast.193), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.198 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.197, f32[16,128,16]{2,1,0} %multiply.196), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.67 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %p9.66 = s64[] parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.68 = s64[] multiply(s64[] %constant.67, s64[] %p9.66), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.69 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.70 = s64[] add(s64[] %multiply.68, s64[] %constant.69), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.77 = u64[] convert(s64[] %add.70), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.79 = u64[1]{0} reshape(u64[] %convert.77), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.43 = u64[1]{0} constant({0}), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %concatenate.81 = u64[2]{0} concatenate(u64[1]{0} %reshape.79, u64[1]{0} %constant.43), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.82 = (u64[2]{0}, u32[16,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.81), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.83 = u32[16,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[16,128,16]{2,1,0}) %rng-bit-generator.82), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.85 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.86 = u32[16,128,16]{2,1,0} broadcast(u32[] %constant.85), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.87 = u32[16,128,16]{2,1,0} shift-right-logical(u32[16,128,16]{2,1,0} %get-tuple-element.83, u32[16,128,16]{2,1,0} %broadcast.86), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.88 = f32[16,128,16]{2,1,0} convert(u32[16,128,16]{2,1,0} %shift-right-logical.87), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.89 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.90 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.89), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.94 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %convert.88, f32[16,128,16]{2,1,0} %broadcast.90), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %p8.65 = f32[] parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.74 = f32[16,128,16]{2,1,0} broadcast(f32[] %p8.65), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.97 = pred[16,128,16]{2,1,0} compare(f32[16,128,16]{2,1,0} %multiply.94, f32[16,128,16]{2,1,0} %broadcast.74), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.26 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.4 = f32[] divide(f32[] %constant.26, f32[] %p8.65)
  %broadcast.58 = f32[16,128,16]{2,1,0} broadcast(f32[] %divide.4), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.41 = f32[] constant(0)
  %broadcast.85 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.41), dimensions={}
  %select.13 = f32[16,128,16]{2,1,0} select(pred[16,128,16]{2,1,0} %compare.97, f32[16,128,16]{2,1,0} %broadcast.58, f32[16,128,16]{2,1,0} %broadcast.85), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.200 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.198, f32[16,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.353 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p29.351 = f32[8,16]{1,0} parameter(29), frontend_attributes={neff_input_names="input29"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.352 = f32[16,8]{0,1} transpose(f32[8,16]{1,0} %p29.351), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.354 = f32[2048,8]{1,0} dot(f32[2048,16]{1,0} %reshape.353, f32[16,8]{0,1} %transpose.352), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.355 = f32[16,128,8]{2,1,0} reshape(f32[2048,8]{1,0} %dot.354), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p28.349 = f32[8]{0} parameter(28), frontend_attributes={neff_input_names="input28"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.356 = f32[16,128,8]{2,1,0} broadcast(f32[8]{0} %p28.349), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.357 = f32[16,128,8]{2,1,0} add(f32[16,128,8]{2,1,0} %reshape.355, f32[16,128,8]{2,1,0} %broadcast.356), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.334 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p27.332 = f32[8,16]{1,0} parameter(27), frontend_attributes={neff_input_names="input27"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.333 = f32[16,8]{0,1} transpose(f32[8,16]{1,0} %p27.332), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.335 = f32[2048,8]{1,0} dot(f32[2048,16]{1,0} %reshape.334, f32[16,8]{0,1} %transpose.333), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.336 = f32[16,128,8]{2,1,0} reshape(f32[2048,8]{1,0} %dot.335), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p26.330 = f32[8]{0} parameter(26), frontend_attributes={neff_input_names="input26"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.337 = f32[16,128,8]{2,1,0} broadcast(f32[8]{0} %p26.330), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.338 = f32[16,128,8]{2,1,0} add(f32[16,128,8]{2,1,0} %reshape.336, f32[16,128,8]{2,1,0} %broadcast.337), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.54 = f32[16,1,128,8]{3,1,2,0} reshape(f32[16,128,8]{2,1,0} %add.338), metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=323}
  %transpose.341 = f32[16,1,8,128]{2,1,3,0} transpose(f32[16,1,128,8]{3,1,2,0} %reshape.54), dimensions={0,1,3,2}, metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=323}
  %reshape.343 = f32[16,8,128]{2,1,0} reshape(f32[16,1,8,128]{2,1,3,0} %transpose.341), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=323}
  %dot.362 = f32[16,128,128]{2,1,0} dot(f32[16,128,8]{2,1,0} %add.357, f32[16,8,128]{2,1,0} %reshape.343), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=323}
  %p25.324 = f32[] parameter(25), frontend_attributes={neff_input_names="input25"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=347}
  %broadcast.199 = f32[16,128,128]{2,1,0} broadcast(f32[] %p25.324), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=347}
  %divide.10 = f32[16,128,128]{2,1,0} divide(f32[16,128,128]{2,1,0} %dot.362, f32[16,128,128]{2,1,0} %broadcast.199), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=347}
  %reshape.525 = f32[16,1,128,128]{3,2,1,0} reshape(f32[16,128,128]{2,1,0} %divide.10), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=347}
  %constant.315 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %broadcast.201 = f32[16,128]{1,0} broadcast(f32[] %constant.315), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p24.303 = s64[16,128]{1,0} parameter(24), frontend_attributes={neff_input_names="input24"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=846}
  %convert.2 = f32[16,128]{1,0} convert(s64[16,128]{1,0} %p24.303), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=857}
  %subtract.4 = f32[16,128]{1,0} subtract(f32[16,128]{1,0} %broadcast.201, f32[16,128]{1,0} %convert.2), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p23.302 = f32[] parameter(23), frontend_attributes={neff_input_names="input23"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=858}
  %broadcast.203 = f32[16,128]{1,0} broadcast(f32[] %p23.302), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=858}
  %multiply.23 = f32[16,128]{1,0} multiply(f32[16,128]{1,0} %subtract.4, f32[16,128]{1,0} %broadcast.203), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=858}
  %broadcast.368 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[16,128]{1,0} %multiply.23), dimensions={0,3}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=350}
  %add.369 = f32[16,1,128,128]{3,2,1,0} add(f32[16,1,128,128]{3,2,1,0} %reshape.525, f32[16,1,128,128]{3,2,1,0} %broadcast.368), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=350}
  %constant.370 = f32[] constant(-inf), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.375 = f32[16,1,128]{2,1,0} reduce(f32[16,1,128,128]{3,2,1,0} %add.369, f32[] %constant.370), dimensions={3}, to_apply=%MaxComputation.371, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.76 = f32[16,128]{1,0} reshape(f32[16,1,128]{2,1,0} %reduce.375), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %broadcast.376 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[16,128]{1,0} %reshape.76), dimensions={0,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %subtract.377 = f32[16,1,128,128]{3,2,1,0} subtract(f32[16,1,128,128]{3,2,1,0} %add.369, f32[16,1,128,128]{3,2,1,0} %broadcast.376), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %exponential.378 = f32[16,1,128,128]{3,2,1,0} exponential(f32[16,1,128,128]{3,2,1,0} %subtract.377), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.379 = f32[] constant(0), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.384 = f32[16,1,128]{2,1,0} reduce(f32[16,1,128,128]{3,2,1,0} %exponential.378, f32[] %constant.379), dimensions={3}, to_apply=%AddComputation.380, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.77 = f32[16,128]{1,0} reshape(f32[16,1,128]{2,1,0} %reduce.384), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %broadcast.385 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[16,128]{1,0} %reshape.77), dimensions={0,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %divide.386 = f32[16,1,128,128]{3,2,1,0} divide(f32[16,1,128,128]{3,2,1,0} %exponential.378, f32[16,1,128,128]{3,2,1,0} %broadcast.385), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.201 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.202 = s64[] multiply(s64[] %constant.201, s64[] %add.70), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.203 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.204 = s64[] add(s64[] %multiply.202, s64[] %constant.203), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.273 = u64[] convert(s64[] %add.204), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.275 = u64[1]{0} reshape(u64[] %convert.273), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.44 = u64[1]{0} constant({0}), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %concatenate.277 = u64[2]{0} concatenate(u64[1]{0} %reshape.275, u64[1]{0} %constant.44), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.278 = (u64[2]{0}, u32[16,1,128,128]{3,2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.277), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.279 = u32[16,1,128,128]{3,2,1,0} get-tuple-element((u64[2]{0}, u32[16,1,128,128]{3,2,1,0}) %rng-bit-generator.278), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.281 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.282 = u32[16,1,128,128]{3,2,1,0} broadcast(u32[] %constant.281), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.283 = u32[16,1,128,128]{3,2,1,0} shift-right-logical(u32[16,1,128,128]{3,2,1,0} %get-tuple-element.279, u32[16,1,128,128]{3,2,1,0} %broadcast.282), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.284 = f32[16,1,128,128]{3,2,1,0} convert(u32[16,1,128,128]{3,2,1,0} %shift-right-logical.283), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.285 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.286 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[] %constant.285), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.290 = f32[16,1,128,128]{3,2,1,0} multiply(f32[16,1,128,128]{3,2,1,0} %convert.284, f32[16,1,128,128]{3,2,1,0} %broadcast.286), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.270 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[] %p8.65), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.293 = pred[16,1,128,128]{3,2,1,0} compare(f32[16,1,128,128]{3,2,1,0} %multiply.290, f32[16,1,128,128]{3,2,1,0} %broadcast.270), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.27 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.5 = f32[] divide(f32[] %constant.27, f32[] %p8.65)
  %broadcast.69 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[] %divide.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.39 = f32[] constant(0)
  %broadcast.83 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[] %constant.39), dimensions={}
  %select.12 = f32[16,1,128,128]{3,2,1,0} select(pred[16,1,128,128]{3,2,1,0} %compare.293, f32[16,1,128,128]{3,2,1,0} %broadcast.69, f32[16,1,128,128]{3,2,1,0} %broadcast.83), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.387 = f32[16,1,128,128]{3,2,1,0} multiply(f32[16,1,128,128]{3,2,1,0} %divide.386, f32[16,1,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.389 = f32[16,128,128]{2,1,0} reshape(f32[16,1,128,128]{3,2,1,0} %multiply.387), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=363}
  %reshape.258 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p22.256 = f32[8,16]{1,0} parameter(22), frontend_attributes={neff_input_names="input22"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.257 = f32[16,8]{0,1} transpose(f32[8,16]{1,0} %p22.256), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.259 = f32[2048,8]{1,0} dot(f32[2048,16]{1,0} %reshape.258, f32[16,8]{0,1} %transpose.257), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.260 = f32[16,128,8]{2,1,0} reshape(f32[2048,8]{1,0} %dot.259), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p21.254 = f32[8]{0} parameter(21), frontend_attributes={neff_input_names="input21"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.261 = f32[16,128,8]{2,1,0} broadcast(f32[8]{0} %p21.254), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.262 = f32[16,128,8]{2,1,0} add(f32[16,128,8]{2,1,0} %reshape.260, f32[16,128,8]{2,1,0} %broadcast.261), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %dot.390 = f32[16,128,8]{2,1,0} dot(f32[16,128,128]{2,1,0} %reshape.389, f32[16,128,8]{2,1,0} %add.262), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=363}
  %reshape.394 = f32[2048,8]{1,0} reshape(f32[16,128,8]{2,1,0} %dot.390), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p20.247 = f32[16,8]{1,0} parameter(20), frontend_attributes={neff_input_names="input20"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.248 = f32[8,16]{0,1} transpose(f32[16,8]{1,0} %p20.247), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.395 = f32[2048,16]{1,0} dot(f32[2048,8]{1,0} %reshape.394, f32[8,16]{0,1} %transpose.248), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.396 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.395), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %p19.246 = f32[] parameter(19), frontend_attributes={neff_input_names="input19"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.404 = (f32[16,128,16]{2,1,0}, f32[]) all-reduce(f32[16,128,16]{2,1,0} %reshape.396, f32[] %p19.246), replica_groups={{0,1}}, to_apply=%AddComputation.400, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.405 = f32[16,128,16]{2,1,0} get-tuple-element((f32[16,128,16]{2,1,0}, f32[]) %all-reduce.404), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %p18.244 = f32[16]{0} parameter(18), frontend_attributes={neff_input_names="input18"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %broadcast.409 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p18.244), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %add.410 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %get-tuple-element.405, f32[16,128,16]{2,1,0} %broadcast.409), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %constant.205 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.206 = s64[] multiply(s64[] %constant.205, s64[] %add.204), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.207 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.208 = s64[] add(s64[] %multiply.206, s64[] %constant.207), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.215 = u64[] convert(s64[] %add.208), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.217 = u64[1]{0} reshape(u64[] %convert.215), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.46 = u64[1]{0} constant({0}), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %concatenate.219 = u64[2]{0} concatenate(u64[1]{0} %reshape.217, u64[1]{0} %constant.46), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.220 = (u64[2]{0}, u32[16,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.219), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.221 = u32[16,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[16,128,16]{2,1,0}) %rng-bit-generator.220), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.223 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.224 = u32[16,128,16]{2,1,0} broadcast(u32[] %constant.223), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.225 = u32[16,128,16]{2,1,0} shift-right-logical(u32[16,128,16]{2,1,0} %get-tuple-element.221, u32[16,128,16]{2,1,0} %broadcast.224), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.226 = f32[16,128,16]{2,1,0} convert(u32[16,128,16]{2,1,0} %shift-right-logical.225), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.227 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.228 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.227), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.232 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %convert.226, f32[16,128,16]{2,1,0} %broadcast.228), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.212 = f32[16,128,16]{2,1,0} broadcast(f32[] %p8.65), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.235 = pred[16,128,16]{2,1,0} compare(f32[16,128,16]{2,1,0} %multiply.232, f32[16,128,16]{2,1,0} %broadcast.212), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.29 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.6 = f32[] divide(f32[] %constant.29, f32[] %p8.65)
  %broadcast.70 = f32[16,128,16]{2,1,0} broadcast(f32[] %divide.6), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.37 = f32[] constant(0)
  %broadcast.82 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.37), dimensions={}
  %select.11 = f32[16,128,16]{2,1,0} select(pred[16,128,16]{2,1,0} %compare.235, f32[16,128,16]{2,1,0} %broadcast.70, f32[16,128,16]{2,1,0} %broadcast.82), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.411 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.410, f32[16,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.412 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %multiply.411, f32[16,128,16]{2,1,0} %multiply.200), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=386}
  %reshape.413 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %add.412), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.55 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.59 = f32[2048]{0} broadcast(f32[] %constant.55), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.50 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.54 = f32[2048]{0} broadcast(f32[] %constant.50), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.414 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.413, f32[2048]{0} %broadcast.59, f32[2048]{0} %broadcast.54), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.415 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.414), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.422 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.415), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p7.39 = f32[16]{0} parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.425 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p7.39), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.428 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.422, f32[16,128,16]{2,1,0} %broadcast.425), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.430 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.429, f32[16,128,16]{2,1,0} %multiply.428), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.484 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.430), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p34.482 = f32[4096,16]{1,0} parameter(34), frontend_attributes={neff_input_names="input34"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %transpose.483 = f32[16,4096]{0,1} transpose(f32[4096,16]{1,0} %p34.482), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.485 = f32[2048,4096]{1,0} dot(f32[2048,16]{1,0} %reshape.484, f32[16,4096]{0,1} %transpose.483), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.486 = f32[16,128,4096]{2,1,0} reshape(f32[2048,4096]{1,0} %dot.485), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p33.480 = f32[4096]{0} parameter(33), frontend_attributes={neff_input_names="input33"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %broadcast.487 = f32[16,128,4096]{2,1,0} broadcast(f32[4096]{0} %p33.480), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.488 = f32[16,128,4096]{2,1,0} add(f32[16,128,4096]{2,1,0} %reshape.486, f32[16,128,4096]{2,1,0} %broadcast.487), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.13 = f32[16,128,4096]{2,1,0} custom-call(f32[16,128,4096]{2,1,0} %add.488), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.498 = f32[2048,4096]{1,0} reshape(f32[16,128,4096]{2,1,0} %custom-call.13), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p32.473 = f32[16,4096]{1,0} parameter(32), frontend_attributes={neff_input_names="input32"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %transpose.474 = f32[4096,16]{0,1} transpose(f32[16,4096]{1,0} %p32.473), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.499 = f32[2048,16]{1,0} dot(f32[2048,4096]{1,0} %reshape.498, f32[4096,16]{0,1} %transpose.474), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.500 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.499), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p31.471 = f32[16]{0} parameter(31), frontend_attributes={neff_input_names="input31"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %broadcast.501 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p31.471), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.502 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.500, f32[16,128,16]{2,1,0} %broadcast.501), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.432 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.433 = s64[] multiply(s64[] %constant.432, s64[] %add.208), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.434 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.435 = s64[] add(s64[] %multiply.433, s64[] %constant.434), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.442 = u64[] convert(s64[] %add.435), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.444 = u64[1]{0} reshape(u64[] %convert.442), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.48 = u64[1]{0} constant({0}), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %concatenate.446 = u64[2]{0} concatenate(u64[1]{0} %reshape.444, u64[1]{0} %constant.48), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.447 = (u64[2]{0}, u32[16,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.446), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.448 = u32[16,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[16,128,16]{2,1,0}) %rng-bit-generator.447), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.450 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.451 = u32[16,128,16]{2,1,0} broadcast(u32[] %constant.450), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.452 = u32[16,128,16]{2,1,0} shift-right-logical(u32[16,128,16]{2,1,0} %get-tuple-element.448, u32[16,128,16]{2,1,0} %broadcast.451), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.453 = f32[16,128,16]{2,1,0} convert(u32[16,128,16]{2,1,0} %shift-right-logical.452), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.454 = f32[] constant(1.1920929e-07), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.455 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.454), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.459 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %convert.453, f32[16,128,16]{2,1,0} %broadcast.455), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.439 = f32[16,128,16]{2,1,0} broadcast(f32[] %p8.65), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.462 = pred[16,128,16]{2,1,0} compare(f32[16,128,16]{2,1,0} %multiply.459, f32[16,128,16]{2,1,0} %broadcast.439), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.30 = f32[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.7 = f32[] divide(f32[] %constant.30, f32[] %p8.65)
  %broadcast.71 = f32[16,128,16]{2,1,0} broadcast(f32[] %divide.7), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.36 = f32[] constant(0)
  %broadcast.80 = f32[16,128,16]{2,1,0} broadcast(f32[] %constant.36), dimensions={}
  %select.10 = f32[16,128,16]{2,1,0} select(pred[16,128,16]{2,1,0} %compare.462, f32[16,128,16]{2,1,0} %broadcast.71, f32[16,128,16]{2,1,0} %broadcast.80), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.505 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.502, f32[16,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.506 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %multiply.505, f32[16,128,16]{2,1,0} %add.430), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=464}
  %reshape.507 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %add.506), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.28 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.32 = f32[2048]{0} broadcast(f32[] %constant.28), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.23 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.27 = f32[2048]{0} broadcast(f32[] %constant.23), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.508 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.507, f32[2048]{0} %broadcast.32, f32[2048]{0} %broadcast.27), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.509 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.508), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.516 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.509), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p6.12 = f32[16]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.519 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p6.12), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.522 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.516, f32[16,128,16]{2,1,0} %broadcast.519), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.524 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.523, f32[16,128,16]{2,1,0} %multiply.522), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.646 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.524), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p40.644 = f32[16,16]{1,0} parameter(40), frontend_attributes={neff_input_names="input40"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %transpose.645 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %p40.644), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.647 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.646, f32[16,16]{0,1} %transpose.645), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.648 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.647), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p39.642 = f32[16]{0} parameter(39), frontend_attributes={neff_input_names="input39"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %broadcast.649 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p39.642), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.650 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.648, f32[16,128,16]{2,1,0} %broadcast.649), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.14 = f32[16,128,16]{2,1,0} custom-call(f32[16,128,16]{2,1,0} %add.650), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.660 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %custom-call.14), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.632 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.636 = f32[2048]{0} broadcast(f32[] %constant.632), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.627 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.631 = f32[2048]{0} broadcast(f32[] %constant.627), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.661 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-training(f32[1,2048,16]{2,1,0} %reshape.660, f32[2048]{0} %broadcast.636, f32[2048]{0} %broadcast.631), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.662 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.661), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.669 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.662), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p38.616 = f32[16]{0} parameter(38), frontend_attributes={neff_input_names="input38"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.672 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p38.616), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.675 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.669, f32[16,128,16]{2,1,0} %broadcast.672), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.677 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %broadcast.676, f32[16,128,16]{2,1,0} %multiply.675), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.678 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.677), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %transpose.614 = f32[16,30522]{0,1} transpose(f32[30522,16]{1,0} %p16.165), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.679 = f32[2048,30522]{1,0} dot(f32[2048,16]{1,0} %reshape.678, f32[16,30522]{0,1} %transpose.614), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.680 = f32[16,128,30522]{2,1,0} reshape(f32[2048,30522]{1,0} %dot.679), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p37.612 = f32[30522]{0} parameter(37), frontend_attributes={neff_input_names="input37"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %broadcast.681 = f32[16,128,30522]{2,1,0} broadcast(f32[30522]{0} %p37.612), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.682 = f32[16,128,30522]{2,1,0} add(f32[16,128,30522]{2,1,0} %reshape.680, f32[16,128,30522]{2,1,0} %broadcast.681), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.685 = f32[2048,30522]{1,0} reshape(f32[16,128,30522]{2,1,0} %add.682), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.0 = f32[] constant(-inf)
  %reduce.0 = f32[2048]{0} reduce(f32[2048,30522]{1,0} %reshape.685, f32[] %constant.0), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardMax.686
  %broadcast.0 = f32[2048,30522]{1,0} broadcast(f32[2048]{0} %reduce.0), dimensions={0}
  %subtract.0 = f32[2048,30522]{1,0} subtract(f32[2048,30522]{1,0} %reshape.685, f32[2048,30522]{1,0} %broadcast.0)
  %exponential.0 = f32[2048,30522]{1,0} exponential(f32[2048,30522]{1,0} %subtract.0)
  %constant.2 = f32[] constant(0)
  %reduce.1 = f32[2048]{0} reduce(f32[2048,30522]{1,0} %exponential.0, f32[] %constant.2), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.690
  %log.0 = f32[2048]{0} log(f32[2048]{0} %reduce.1)
  %broadcast.1 = f32[2048,30522]{1,0} broadcast(f32[2048]{0} %log.0), dimensions={0}
  %subtract.1 = f32[2048,30522]{1,0} subtract(f32[2048,30522]{1,0} %subtract.0, f32[2048,30522]{1,0} %broadcast.1), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1 = s64[2048]{0} reshape(s64[16,128]{1,0} %p36.605)
  %broadcast.3 = s64[2048,30522]{1,0} broadcast(s64[2048]{0} %reshape.1), dimensions={0}
  %iota.5 = s64[2048,30522]{1,0} iota(), iota_dimension=1
  %compare.0 = pred[2048,30522]{1,0} compare(s64[2048,30522]{1,0} %broadcast.3, s64[2048,30522]{1,0} %iota.5), direction=EQ
  %constant.4 = f32[] constant(1)
  %broadcast.6 = f32[2048,30522]{1,0} broadcast(f32[] %constant.4), dimensions={}
  %constant.5 = f32[] constant(0)
  %broadcast.7 = f32[2048,30522]{1,0} broadcast(f32[] %constant.5), dimensions={}
  %select.0 = f32[2048,30522]{1,0} select(pred[2048,30522]{1,0} %compare.0, f32[2048,30522]{1,0} %broadcast.6, f32[2048,30522]{1,0} %broadcast.7)
  %multiply.2 = f32[2048,30522]{1,0} multiply(f32[2048,30522]{1,0} %subtract.1, f32[2048,30522]{1,0} %select.0)
  %reduce.2 = f32[2048]{0} reduce(f32[2048,30522]{1,0} %multiply.2, f32[] %constant.2), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.694
  %constant.31 = f32[] constant(0)
  %broadcast.73 = f32[2048]{0} broadcast(f32[] %constant.31), dimensions={}
  %select.6 = f32[2048]{0} select(pred[2048]{0} %reshape.530, f32[2048]{0} %reduce.2, f32[2048]{0} %broadcast.73)
  %reduce.3 = f32[] reduce(f32[2048]{0} %select.6, f32[] %constant.2), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.698
  %convert.0 = f32[2048]{0} convert(pred[2048]{0} %reshape.530), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reduce.4 = f32[] reduce(f32[2048]{0} %convert.0, f32[] %constant.2), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.702
  %divide.0 = f32[] divide(f32[] %reduce.3, f32[] %reduce.4)
  %negate.0 = f32[] negate(f32[] %divide.0), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p1.4 = s64[16]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1142}
  %constant.15 = s64[] constant(-100)
  %broadcast.33 = s64[16]{0} broadcast(s64[] %constant.15), dimensions={}
  %compare.4 = pred[16]{0} compare(s64[16]{0} %p1.4, s64[16]{0} %broadcast.33), direction=NE
  %slice.526 = f32[16,1,16]{2,1,0} slice(f32[16,128,16]{2,1,0} %add.524), slice={[0:16], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.527 = f32[16,16]{1,0} reshape(f32[16,1,16]{2,1,0} %slice.526), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p5.9 = f32[16,16]{1,0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %transpose.10 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %p5.9), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.528 = f32[16,16]{1,0} dot(f32[16,16]{1,0} %reshape.527, f32[16,16]{0,1} %transpose.10), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p4.8 = f32[16]{0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %broadcast.532 = f32[16,16]{1,0} broadcast(f32[16]{0} %p4.8), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.533 = f32[16,16]{1,0} add(f32[16,16]{1,0} %dot.528, f32[16,16]{1,0} %broadcast.532), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %tanh.534 = f32[16,16]{1,0} tanh(f32[16,16]{1,0} %add.533), metadata={op_type="aten__tanh" op_name="aten__tanh" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/activation.py" source_line=356}
  %p3.6 = f32[2,16]{1,0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %transpose.7 = f32[16,2]{0,1} transpose(f32[2,16]{1,0} %p3.6), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.535 = f32[16,2]{1,0} dot(f32[16,16]{1,0} %tanh.534, f32[16,2]{0,1} %transpose.7), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p2.5 = f32[2]{0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %broadcast.539 = f32[16,2]{1,0} broadcast(f32[2]{0} %p2.5), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.540 = f32[16,2]{1,0} add(f32[16,2]{1,0} %dot.535, f32[16,2]{1,0} %broadcast.539), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.9 = f32[] constant(-inf)
  %reduce.6 = f32[16]{0} reduce(f32[16,2]{1,0} %add.540, f32[] %constant.9), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardMax.541
  %broadcast.19 = f32[16,2]{1,0} broadcast(f32[16]{0} %reduce.6), dimensions={0}
  %subtract.2 = f32[16,2]{1,0} subtract(f32[16,2]{1,0} %add.540, f32[16,2]{1,0} %broadcast.19)
  %exponential.2 = f32[16,2]{1,0} exponential(f32[16,2]{1,0} %subtract.2)
  %constant.10 = f32[] constant(0)
  %reduce.7 = f32[16]{0} reduce(f32[16,2]{1,0} %exponential.2, f32[] %constant.10), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.545
  %log.1 = f32[16]{0} log(f32[16]{0} %reduce.7)
  %broadcast.21 = f32[16,2]{1,0} broadcast(f32[16]{0} %log.1), dimensions={0}
  %subtract.3 = f32[16,2]{1,0} subtract(f32[16,2]{1,0} %subtract.2, f32[16,2]{1,0} %broadcast.21), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.24 = s64[16,2]{1,0} broadcast(s64[16]{0} %p1.4), dimensions={0}
  %iota.7 = s64[16,2]{1,0} iota(), iota_dimension=1
  %compare.3 = pred[16,2]{1,0} compare(s64[16,2]{1,0} %broadcast.24, s64[16,2]{1,0} %iota.7), direction=EQ
  %constant.12 = f32[] constant(1)
  %broadcast.29 = f32[16,2]{1,0} broadcast(f32[] %constant.12), dimensions={}
  %constant.14 = f32[] constant(0)
  %broadcast.31 = f32[16,2]{1,0} broadcast(f32[] %constant.14), dimensions={}
  %select.2 = f32[16,2]{1,0} select(pred[16,2]{1,0} %compare.3, f32[16,2]{1,0} %broadcast.29, f32[16,2]{1,0} %broadcast.31)
  %multiply.7 = f32[16,2]{1,0} multiply(f32[16,2]{1,0} %subtract.3, f32[16,2]{1,0} %select.2)
  %reduce.8 = f32[16]{0} reduce(f32[16,2]{1,0} %multiply.7, f32[] %constant.10), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.549
  %constant.32 = f32[] constant(0)
  %broadcast.75 = f32[16]{0} broadcast(f32[] %constant.32), dimensions={}
  %select.7 = f32[16]{0} select(pred[16]{0} %compare.4, f32[16]{0} %reduce.8, f32[16]{0} %broadcast.75)
  %reduce.9 = f32[] reduce(f32[16]{0} %select.7, f32[] %constant.10), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.553
  %convert.1 = f32[16]{0} convert(pred[16]{0} %compare.4), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reduce.10 = f32[] reduce(f32[16]{0} %convert.1, f32[] %constant.10), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.557
  %divide.2 = f32[] divide(f32[] %reduce.9, f32[] %reduce.10)
  %negate.2 = f32[] negate(f32[] %divide.2), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.749 = f32[] add(f32[] %negate.0, f32[] %negate.2), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1143}
  %p0.2 = f32[] parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=504}
  %divide.750 = f32[] divide(f32[] %add.749, f32[] %p0.2), metadata={op_type="aten__div" op_name="aten__div" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=504}
  %reshape.157 = f32[1]{0} reshape(f32[] %divide.750), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=506}
  %add.754 = f32[1]{0} add(f32[1]{0} %p42.752, f32[1]{0} %reshape.157), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=506}
  %p43.806 = f32[2]{0} parameter(43), frontend_attributes={neff_input_names="input43"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %exponential.3 = f32[16,2]{1,0} exponential(f32[16,2]{1,0} %subtract.3)
  %constant.760 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/autograd/__init__.py" source_line=127}
  %constant.16 = f32[] constant(0)
  %reduce.11 = f32[] reduce(f32[16]{0} %convert.1, f32[] %constant.16), dimensions={0}, to_apply=%SimpleCrossEntropyLossBackwardAdd.763
  %multiply.16 = f32[] multiply(f32[] %p0.2, f32[] %reduce.11)
  %divide.3 = f32[] divide(f32[] %constant.760, f32[] %multiply.16)
  %broadcast.34 = f32[16]{0} broadcast(f32[] %divide.3), dimensions={}
  %constant.34 = f32[] constant(0)
  %broadcast.76 = f32[16]{0} broadcast(f32[] %constant.34), dimensions={}
  %select.8 = f32[16]{0} select(pred[16]{0} %compare.4, f32[16]{0} %broadcast.34, f32[16]{0} %broadcast.76)
  %broadcast.36 = f32[16,2]{1,0} broadcast(f32[16]{0} %select.8), dimensions={0}
  %multiply.10 = f32[16,2]{1,0} multiply(f32[16,2]{1,0} %exponential.3, f32[16,2]{1,0} %broadcast.36)
  %broadcast.39 = s64[16,2]{1,0} broadcast(s64[16]{0} %p1.4), dimensions={0}
  %iota.9 = s64[16,2]{1,0} iota(), iota_dimension=1
  %compare.5 = pred[16,2]{1,0} compare(s64[16,2]{1,0} %broadcast.39, s64[16,2]{1,0} %iota.9), direction=EQ
  %negate.3 = f32[] negate(f32[] %divide.3)
  %broadcast.43 = f32[16,2]{1,0} broadcast(f32[] %negate.3), dimensions={}
  %constant.17 = f32[] constant(0)
  %broadcast.45 = f32[16,2]{1,0} broadcast(f32[] %constant.17), dimensions={}
  %select.3 = f32[16,2]{1,0} select(pred[16,2]{1,0} %compare.5, f32[16,2]{1,0} %broadcast.43, f32[16,2]{1,0} %broadcast.45)
  %add.1 = f32[16,2]{1,0} add(f32[16,2]{1,0} %multiply.10, f32[16,2]{1,0} %select.3), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.796 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.802 = f32[2]{0} reduce(f32[16,2]{1,0} %add.1, f32[] %constant.796), dimensions={0}, to_apply=%AddComputation.798, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.807 = f32[2]{0} add(f32[2]{0} %p43.806, f32[2]{0} %reduce.802), metadata={op_type="aten__add" op_name="aten__add"}
  %p44.817 = f32[2,16]{1,0} parameter(44), frontend_attributes={neff_input_names="input44"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %transpose.813 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %tanh.534), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot = f32[2,16]{0,1} dot(f32[16,2]{1,0} %add.1, f32[16,16]{0,1} %transpose.813), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %add.818 = f32[2,16]{1,0} add(f32[2,16]{1,0} %p44.817, f32[2,16]{0,1} %dot), metadata={op_type="aten__add" op_name="aten__add"}
  %p45.868 = f32[30522]{0} parameter(45), frontend_attributes={neff_input_names="input45"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %exponential.1 = f32[2048,30522]{1,0} exponential(f32[2048,30522]{1,0} %subtract.1)
  %constant.7 = f32[] constant(0)
  %reduce.5 = f32[] reduce(f32[2048]{0} %convert.0, f32[] %constant.7), dimensions={0}, to_apply=%SimpleCrossEntropyLossBackwardAdd.824
  %multiply.17 = f32[] multiply(f32[] %p0.2, f32[] %reduce.5)
  %divide.1 = f32[] divide(f32[] %constant.760, f32[] %multiply.17)
  %broadcast.9 = f32[2048]{0} broadcast(f32[] %divide.1), dimensions={}
  %constant.35 = f32[] constant(0)
  %broadcast.77 = f32[2048]{0} broadcast(f32[] %constant.35), dimensions={}
  %select.9 = f32[2048]{0} select(pred[2048]{0} %reshape.530, f32[2048]{0} %broadcast.9, f32[2048]{0} %broadcast.77)
  %broadcast.10 = f32[2048,30522]{1,0} broadcast(f32[2048]{0} %select.9), dimensions={0}
  %multiply.5 = f32[2048,30522]{1,0} multiply(f32[2048,30522]{1,0} %exponential.1, f32[2048,30522]{1,0} %broadcast.10)
  %reshape.4 = s64[2048]{0} reshape(s64[16,128]{1,0} %p36.605)
  %broadcast.12 = s64[2048,30522]{1,0} broadcast(s64[2048]{0} %reshape.4), dimensions={0}
  %iota.11 = s64[2048,30522]{1,0} iota(), iota_dimension=1
  %compare.2 = pred[2048,30522]{1,0} compare(s64[2048,30522]{1,0} %broadcast.12, s64[2048,30522]{1,0} %iota.11), direction=EQ
  %negate.1 = f32[] negate(f32[] %divide.1)
  %broadcast.16 = f32[2048,30522]{1,0} broadcast(f32[] %negate.1), dimensions={}
  %constant.8 = f32[] constant(0)
  %broadcast.18 = f32[2048,30522]{1,0} broadcast(f32[] %constant.8), dimensions={}
  %select.1 = f32[2048,30522]{1,0} select(pred[2048,30522]{1,0} %compare.2, f32[2048,30522]{1,0} %broadcast.16, f32[2048,30522]{1,0} %broadcast.18)
  %add.0 = f32[2048,30522]{1,0} add(f32[2048,30522]{1,0} %multiply.5, f32[2048,30522]{1,0} %select.1), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.858 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.864 = f32[30522]{0} reduce(f32[2048,30522]{1,0} %add.0, f32[] %constant.858), dimensions={0}, to_apply=%AddComputation.860, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.869 = f32[30522]{0} add(f32[30522]{0} %p45.868, f32[30522]{0} %reduce.864), metadata={op_type="aten__add" op_name="aten__add"}
  %p46.891 = f32[16]{0} parameter(46), frontend_attributes={neff_input_names="input46"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %dot.879 = f32[2048,16]{1,0} dot(f32[2048,30522]{1,0} %add.0, f32[30522,16]{1,0} %p16.165), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.881 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.887 = f32[16]{0} reduce(f32[2048,16]{1,0} %dot.879, f32[] %constant.881), dimensions={0}, to_apply=%AddComputation.883, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.892 = f32[16]{0} add(f32[16]{0} %p46.891, f32[16]{0} %reduce.887), metadata={op_type="aten__add" op_name="aten__add"}
  %p47.915 = f32[16]{0} parameter(47), frontend_attributes={neff_input_names="input47"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.880 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.879), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.904 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.880, f32[16,128,16]{2,1,0} %reshape.669), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.905 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.911 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.904, f32[] %constant.905), dimensions={0,1}, to_apply=%AddComputation.907, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.916 = f32[16]{0} add(f32[16]{0} %p47.915, f32[16]{0} %reduce.911), metadata={op_type="aten__add" op_name="aten__add"}
  %p48.968 = f32[16]{0} parameter(48), frontend_attributes={neff_input_names="input48"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.922 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.926 = f32[2048]{0} broadcast(f32[] %constant.922), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.663 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.661), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.664 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.661), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.665 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.666 = f32[2048]{0} broadcast(f32[] %constant.665), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.667 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.664, f32[2048]{0} %broadcast.666), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt = f32[2048]{0} sqrt(f32[2048]{0} %add.667), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.940 = f32[2048]{0} multiply(f32[2048]{0} %sqrt, f32[2048]{0} %sqrt), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.52 = f32[] constant(-1e-12), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.78 = f32[2048]{0} broadcast(f32[] %constant.52), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.8 = f32[2048]{0} add(f32[2048]{0} %multiply.940, f32[2048]{0} %broadcast.78), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.933 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p38.616), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.934 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.880, f32[16,128,16]{2,1,0} %broadcast.933), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.935 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.934), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.943 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.660, f32[2048]{0} %broadcast.926, f32[2048]{0} %get-tuple-element.663, f32[2048]{0} %add.8, f32[1,2048,16]{2,1,0} %reshape.935), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.944 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.943), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.947 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.944), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.15 = f32[16,128,16]{2,1,0} custom-call(f32[16,128,16]{2,1,0} %add.650), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.6 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.947, f32[16,128,16]{2,1,0} %custom-call.15), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.958 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.964 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.6, f32[] %constant.958), dimensions={0,1}, to_apply=%AddComputation.960, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.969 = f32[16]{0} add(f32[16]{0} %p48.968, f32[16]{0} %reduce.964), metadata={op_type="aten__add" op_name="aten__add"}
  %p49.981 = f32[16,16]{1,0} parameter(49), frontend_attributes={neff_input_names="input49"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.975 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.6), metadata={op_type="aten__view" op_name="aten__view"}
  %reshape.976 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.524), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.977 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.976), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.1 = f32[16,16]{0,1} dot(f32[2048,16]{1,0} %reshape.975, f32[16,2048]{0,1} %transpose.977), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %add.982 = f32[16,16]{1,0} add(f32[16,16]{1,0} %p49.981, f32[16,16]{0,1} %dot.1), metadata={op_type="aten__add" op_name="aten__add"}
  %p50.1020 = f32[16]{0} parameter(50), frontend_attributes={neff_input_names="input50"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %dot.1008 = f32[16,16]{1,0} dot(f32[16,2]{1,0} %add.1, f32[2,16]{1,0} %p3.6), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.1000 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1004 = f32[16,16]{1,0} broadcast(f32[] %constant.1000), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %multiply.999 = f32[16,16]{1,0} multiply(f32[16,16]{1,0} %tanh.534, f32[16,16]{1,0} %tanh.534), metadata={op_type="aten__pow" op_name="aten__pow"}
  %subtract.1005 = f32[16,16]{1,0} subtract(f32[16,16]{1,0} %broadcast.1004, f32[16,16]{1,0} %multiply.999), metadata={op_type="aten__sub" op_name="aten__sub"}
  %multiply.1009 = f32[16,16]{1,0} multiply(f32[16,16]{1,0} %dot.1008, f32[16,16]{1,0} %subtract.1005), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1010 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1016 = f32[16]{0} reduce(f32[16,16]{1,0} %multiply.1009, f32[] %constant.1010), dimensions={0}, to_apply=%AddComputation.1012, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1021 = f32[16]{0} add(f32[16]{0} %p50.1020, f32[16]{0} %reduce.1016), metadata={op_type="aten__add" op_name="aten__add"}
  %p51.1034 = f32[16,16]{1,0} parameter(51), frontend_attributes={neff_input_names="input51"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %slice.1028 = f32[16,1,16]{2,1,0} slice(f32[16,128,16]{2,1,0} %add.524), slice={[0:16], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice"}
  %reshape.1029 = f32[16,16]{1,0} reshape(f32[16,1,16]{2,1,0} %slice.1028), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1030 = f32[16,16]{0,1} transpose(f32[16,16]{1,0} %reshape.1029), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.2 = f32[16,16]{0,1} dot(f32[16,16]{1,0} %multiply.1009, f32[16,16]{0,1} %transpose.1030), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %add.1035 = f32[16,16]{1,0} add(f32[16,16]{1,0} %p51.1034, f32[16,16]{0,1} %dot.2), metadata={op_type="aten__add" op_name="aten__add"}
  %p52.1080 = f32[16]{0} parameter(52), frontend_attributes={neff_input_names="input52"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %dot.1067 = f32[2048,16]{1,0} dot(f32[2048,16]{1,0} %reshape.975, f32[16,16]{1,0} %p40.644), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1068 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1067), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1048 = f32[16,16]{1,0} dot(f32[16,16]{1,0} %multiply.1009, f32[16,16]{1,0} %p5.9), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1049 = f32[16,1,16]{2,1,0} reshape(f32[16,16]{1,0} %dot.1048), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.53 = f32[] constant(0), metadata={op_type="aten__expand" op_name="aten__expand"}
  %pad = f32[16,128,16]{2,1,0} pad(f32[16,1,16]{2,1,0} %reshape.1049, f32[] %constant.53), padding=0_0x0_127x0_0, metadata={op_type="xla__update_slice" op_name="xla__update_slice"}
  %add.1069 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.1068, f32[16,128,16]{2,1,0} %pad), metadata={op_type="aten__add" op_name="aten__add"}
  %constant.1070 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1076 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %add.1069, f32[] %constant.1070), dimensions={0,1}, to_apply=%AddComputation.1072, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1081 = f32[16]{0} add(f32[16]{0} %p52.1080, f32[16]{0} %reduce.1076), metadata={op_type="aten__add" op_name="aten__add"}
  %p53.1104 = f32[16]{0} parameter(53), frontend_attributes={neff_input_names="input53"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %multiply.1093 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1069, f32[16,128,16]{2,1,0} %reshape.516), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1094 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1100 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1093, f32[] %constant.1094), dimensions={0,1}, to_apply=%AddComputation.1096, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1105 = f32[16]{0} add(f32[16]{0} %p53.1104, f32[16]{0} %reduce.1100), metadata={op_type="aten__add" op_name="aten__add"}
  %p54.1148 = f32[16]{0} parameter(54), frontend_attributes={neff_input_names="input54"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.1111 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1115 = f32[2048]{0} broadcast(f32[] %constant.1111), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.510 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.508), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.511 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.508), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.512 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.513 = f32[2048]{0} broadcast(f32[] %constant.512), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.514 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.511, f32[2048]{0} %broadcast.513), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.1 = f32[2048]{0} sqrt(f32[2048]{0} %add.514), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1129 = f32[2048]{0} multiply(f32[2048]{0} %sqrt.1, f32[2048]{0} %sqrt.1), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.54 = f32[] constant(-1e-12), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.79 = f32[2048]{0} broadcast(f32[] %constant.54), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.9 = f32[2048]{0} add(f32[2048]{0} %multiply.1129, f32[2048]{0} %broadcast.79), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.1122 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p6.12), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1123 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1069, f32[16,128,16]{2,1,0} %broadcast.1122), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1124 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1123), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.1132 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.507, f32[2048]{0} %broadcast.1115, f32[2048]{0} %get-tuple-element.510, f32[2048]{0} %add.9, f32[1,2048,16]{2,1,0} %reshape.1124), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1133 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.1132), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1136 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1133), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1137 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.1136, f32[16,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1138 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1144 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1137, f32[] %constant.1138), dimensions={0,1}, to_apply=%AddComputation.1140, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1149 = f32[16]{0} add(f32[16]{0} %p54.1148, f32[16]{0} %reduce.1144), metadata={op_type="aten__add" op_name="aten__add"}
  %p55.1161 = f32[16,4096]{1,0} parameter(55), frontend_attributes={neff_input_names="input55"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1155 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1137), metadata={op_type="aten__view" op_name="aten__view"}
  %reshape.1156 = f32[2048,4096]{1,0} reshape(f32[16,128,4096]{2,1,0} %custom-call.13), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1157 = f32[4096,2048]{0,1} transpose(f32[2048,4096]{1,0} %reshape.1156), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.3 = f32[16,4096]{0,1} dot(f32[2048,16]{1,0} %reshape.1155, f32[4096,2048]{0,1} %transpose.1157), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %add.1162 = f32[16,4096]{1,0} add(f32[16,4096]{1,0} %p55.1161, f32[16,4096]{0,1} %dot.3), metadata={op_type="aten__add" op_name="aten__add"}
  %p56.1192 = f32[4096]{0} parameter(56), frontend_attributes={neff_input_names="input56"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %dot.1170 = f32[2048,4096]{1,0} dot(f32[2048,16]{1,0} %reshape.1155, f32[16,4096]{1,0} %p32.473), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1171 = f32[16,128,4096]{2,1,0} reshape(f32[2048,4096]{1,0} %dot.1170), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.16 = f32[16,128,4096]{2,1,0} custom-call(f32[16,128,4096]{2,1,0} %add.488), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.11 = f32[16,128,4096]{2,1,0} multiply(f32[16,128,4096]{2,1,0} %reshape.1171, f32[16,128,4096]{2,1,0} %custom-call.16), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1182 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1188 = f32[4096]{0} reduce(f32[16,128,4096]{2,1,0} %multiply.11, f32[] %constant.1182), dimensions={0,1}, to_apply=%AddComputation.1184, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1193 = f32[4096]{0} add(f32[4096]{0} %p56.1192, f32[4096]{0} %reduce.1188), metadata={op_type="aten__add" op_name="aten__add"}
  %p57.1205 = f32[4096,16]{1,0} parameter(57), frontend_attributes={neff_input_names="input57"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1199 = f32[2048,4096]{1,0} reshape(f32[16,128,4096]{2,1,0} %multiply.11), metadata={op_type="aten__view" op_name="aten__view"}
  %reshape.1200 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.430), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1201 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1200), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.4 = f32[4096,16]{0,1} dot(f32[2048,4096]{1,0} %reshape.1199, f32[16,2048]{0,1} %transpose.1201), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %add.1206 = f32[4096,16]{1,0} add(f32[4096,16]{1,0} %p57.1205, f32[4096,16]{0,1} %dot.4), metadata={op_type="aten__add" op_name="aten__add"}
  %p58.1233 = f32[16]{0} parameter(58), frontend_attributes={neff_input_names="input58"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %dot.1219 = f32[2048,16]{1,0} dot(f32[2048,4096]{1,0} %reshape.1199, f32[4096,16]{1,0} %p34.482), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1220 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1219), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1222 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.1136, f32[16,128,16]{2,1,0} %reshape.1220), metadata={op_type="aten__add" op_name="aten__add"}
  %constant.1223 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1229 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %add.1222, f32[] %constant.1223), dimensions={0,1}, to_apply=%AddComputation.1225, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1234 = f32[16]{0} add(f32[16]{0} %p58.1233, f32[16]{0} %reduce.1229), metadata={op_type="aten__add" op_name="aten__add"}
  %p59.1257 = f32[16]{0} parameter(59), frontend_attributes={neff_input_names="input59"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %multiply.1246 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1222, f32[16,128,16]{2,1,0} %reshape.422), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1247 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1253 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1246, f32[] %constant.1247), dimensions={0,1}, to_apply=%AddComputation.1249, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1258 = f32[16]{0} add(f32[16]{0} %p59.1257, f32[16]{0} %reduce.1253), metadata={op_type="aten__add" op_name="aten__add"}
  %p60.1301 = f32[16]{0} parameter(60), frontend_attributes={neff_input_names="input60"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.1264 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1268 = f32[2048]{0} broadcast(f32[] %constant.1264), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.416 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.414), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.417 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.414), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.418 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.419 = f32[2048]{0} broadcast(f32[] %constant.418), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.420 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.417, f32[2048]{0} %broadcast.419), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.2 = f32[2048]{0} sqrt(f32[2048]{0} %add.420), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1282 = f32[2048]{0} multiply(f32[2048]{0} %sqrt.2, f32[2048]{0} %sqrt.2), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.56 = f32[] constant(-1e-12), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.81 = f32[2048]{0} broadcast(f32[] %constant.56), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.10 = f32[2048]{0} add(f32[2048]{0} %multiply.1282, f32[2048]{0} %broadcast.81), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.1275 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p7.39), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1276 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1222, f32[16,128,16]{2,1,0} %broadcast.1275), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1277 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1276), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.1285 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.413, f32[2048]{0} %broadcast.1268, f32[2048]{0} %get-tuple-element.416, f32[2048]{0} %add.10, f32[1,2048,16]{2,1,0} %reshape.1277), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1286 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.1285), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1289 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1286), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1290 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %reshape.1289, f32[16,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1291 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1297 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1290, f32[] %constant.1291), dimensions={0,1}, to_apply=%AddComputation.1293, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1302 = f32[16]{0} add(f32[16]{0} %p60.1301, f32[16]{0} %reduce.1297), metadata={op_type="aten__add" op_name="aten__add"}
  %p61.1316 = f32[16,8]{1,0} parameter(61), frontend_attributes={neff_input_names="input61"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1312 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1290), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1313 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1312), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1311 = f32[2048,8]{1,0} reshape(f32[16,128,8]{2,1,0} %dot.390), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1314 = f32[16,8]{1,0} dot(f32[16,2048]{0,1} %transpose.1313, f32[2048,8]{1,0} %reshape.1311), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %add.1317 = f32[16,8]{1,0} add(f32[16,8]{1,0} %p61.1316, f32[16,8]{1,0} %dot.1314), metadata={op_type="aten__add" op_name="aten__add"}
  %p62.1345 = f32[8]{0} parameter(62), frontend_attributes={neff_input_names="input62"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1329 = f32[16,128,128]{2,1,0} reshape(f32[16,1,128,128]{3,2,1,0} %multiply.387), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1330 = f32[16,128,128]{1,2,0} transpose(f32[16,128,128]{2,1,0} %reshape.1329), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.1323 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1290), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1324 = f32[2048,8]{1,0} dot(f32[2048,16]{1,0} %reshape.1323, f32[16,8]{1,0} %p20.247), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1328 = f32[16,128,8]{2,1,0} reshape(f32[2048,8]{1,0} %dot.1324), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1331 = f32[16,128,8]{2,1,0} dot(f32[16,128,128]{1,2,0} %transpose.1330, f32[16,128,8]{2,1,0} %reshape.1328), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %constant.1335 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1341 = f32[8]{0} reduce(f32[16,128,8]{2,1,0} %dot.1331, f32[] %constant.1335), dimensions={0,1}, to_apply=%AddComputation.1337, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1346 = f32[8]{0} add(f32[8]{0} %p62.1345, f32[8]{0} %reduce.1341), metadata={op_type="aten__add" op_name="aten__add"}
  %p63.1360 = f32[8,16]{1,0} parameter(63), frontend_attributes={neff_input_names="input63"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1356 = f32[2048,8]{1,0} reshape(f32[16,128,8]{2,1,0} %dot.1331), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1357 = f32[8,2048]{0,1} transpose(f32[2048,8]{1,0} %reshape.1356), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1352 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1358 = f32[8,16]{1,0} dot(f32[8,2048]{0,1} %transpose.1357, f32[2048,16]{1,0} %reshape.1352), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %add.1361 = f32[8,16]{1,0} add(f32[8,16]{1,0} %p63.1360, f32[8,16]{1,0} %dot.1358), metadata={op_type="aten__add" op_name="aten__add"}
  %p64.1402 = f32[8]{0} parameter(64), frontend_attributes={neff_input_names="input64"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %transpose.1386 = f32[16,8,128]{1,2,0} transpose(f32[16,128,8]{2,1,0} %add.357), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %transpose.1368 = f32[16,8,128]{1,2,0} transpose(f32[16,128,8]{2,1,0} %add.262), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1369 = f32[16,128,128]{2,1,0} dot(f32[16,128,8]{2,1,0} %reshape.1328, f32[16,8,128]{1,2,0} %transpose.1368), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1370 = f32[16,1,128,128]{3,2,1,0} reshape(f32[16,128,128]{2,1,0} %dot.1369), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1371 = f32[16,1,128,128]{3,2,1,0} multiply(f32[16,1,128,128]{3,2,1,0} %reshape.1370, f32[16,1,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1372 = f32[16,1,128,128]{3,2,1,0} multiply(f32[16,1,128,128]{3,2,1,0} %multiply.1371, f32[16,1,128,128]{3,2,1,0} %divide.386), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %constant.1373 = f32[] constant(0), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reduce.1378 = f32[16,1,128]{2,1,0} reduce(f32[16,1,128,128]{3,2,1,0} %multiply.1372, f32[] %constant.1373), dimensions={3}, to_apply=%AddComputation.1374, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reshape.293 = f32[16,128]{1,0} reshape(f32[16,1,128]{2,1,0} %reduce.1378), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %broadcast.1379 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[16,128]{1,0} %reshape.293), dimensions={0,2}, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %subtract.1380 = f32[16,1,128,128]{3,2,1,0} subtract(f32[16,1,128,128]{3,2,1,0} %multiply.1371, f32[16,1,128,128]{3,2,1,0} %broadcast.1379), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %multiply.1381 = f32[16,1,128,128]{3,2,1,0} multiply(f32[16,1,128,128]{3,2,1,0} %divide.386, f32[16,1,128,128]{3,2,1,0} %subtract.1380), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %broadcast.1382 = f32[16,1,128,128]{3,2,1,0} broadcast(f32[] %p25.324), dimensions={}, metadata={op_type="aten__div" op_name="aten__div"}
  %divide.1383 = f32[16,1,128,128]{3,2,1,0} divide(f32[16,1,128,128]{3,2,1,0} %multiply.1381, f32[16,1,128,128]{3,2,1,0} %broadcast.1382), metadata={op_type="aten__div" op_name="aten__div"}
  %reshape.1384 = f32[16,128,128]{2,1,0} reshape(f32[16,1,128,128]{3,2,1,0} %divide.1383), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1387 = f32[16,8,128]{2,1,0} dot(f32[16,8,128]{1,2,0} %transpose.1386, f32[16,128,128]{2,1,0} %reshape.1384), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %constant.1392 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1398 = f32[8]{0} reduce(f32[16,8,128]{2,1,0} %dot.1387, f32[] %constant.1392), dimensions={0,2}, to_apply=%AddComputation.1394, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1403 = f32[8]{0} add(f32[8]{0} %p64.1402, f32[8]{0} %reduce.1398), metadata={op_type="aten__add" op_name="aten__add"}
  %p65.1418 = f32[8,16]{1,0} parameter(65), frontend_attributes={neff_input_names="input65"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1410 = f32[16,1,8,128]{3,2,1,0} reshape(f32[16,8,128]{2,1,0} %dot.1387), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1412 = f32[16,128,1,8]{1,3,2,0} transpose(f32[16,1,8,128]{3,2,1,0} %reshape.1410), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1414 = f32[2048,8]{1,0} reshape(f32[16,128,1,8]{1,3,2,0} %transpose.1412), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1415 = f32[8,2048]{0,1} transpose(f32[2048,8]{1,0} %reshape.1414), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1409 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1416 = f32[8,16]{1,0} dot(f32[8,2048]{0,1} %transpose.1415, f32[2048,16]{1,0} %reshape.1409), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %add.1419 = f32[8,16]{1,0} add(f32[8,16]{1,0} %p65.1418, f32[8,16]{1,0} %dot.1416), metadata={op_type="aten__add" op_name="aten__add"}
  %p66.1441 = f32[8]{0} parameter(66), frontend_attributes={neff_input_names="input66"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1425 = f32[16,8,128]{2,1,0} reshape(f32[16,1,8,128]{2,1,3,0} %transpose.341), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1426 = f32[16,128,8]{1,2,0} transpose(f32[16,8,128]{2,1,0} %reshape.1425), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1427 = f32[16,128,8]{2,1,0} dot(f32[16,128,128]{2,1,0} %reshape.1384, f32[16,128,8]{1,2,0} %transpose.1426), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %constant.1431 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1437 = f32[8]{0} reduce(f32[16,128,8]{2,1,0} %dot.1427, f32[] %constant.1431), dimensions={0,1}, to_apply=%AddComputation.1433, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1442 = f32[8]{0} add(f32[8]{0} %p66.1441, f32[8]{0} %reduce.1437), metadata={op_type="aten__add" op_name="aten__add"}
  %p67.1456 = f32[8,16]{1,0} parameter(67), frontend_attributes={neff_input_names="input67"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1452 = f32[2048,8]{1,0} reshape(f32[16,128,8]{2,1,0} %dot.1427), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1453 = f32[8,2048]{0,1} transpose(f32[2048,8]{1,0} %reshape.1452), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1448 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %multiply.200), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1454 = f32[8,16]{1,0} dot(f32[8,2048]{0,1} %transpose.1453, f32[2048,16]{1,0} %reshape.1448), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %add.1457 = f32[8,16]{1,0} add(f32[8,16]{1,0} %p67.1456, f32[8,16]{1,0} %dot.1454), metadata={op_type="aten__add" op_name="aten__add"}
  %p68.1550 = f32[16]{0} parameter(68), frontend_attributes={neff_input_names="input68"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1471 = f32[2048,8]{1,0} reshape(f32[16,128,8]{2,1,0} %dot.1331), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1472 = f32[2048,16]{1,0} dot(f32[2048,8]{1,0} %reshape.1471, f32[8,16]{1,0} %p22.256), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1473 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1472), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1476 = f32[] get-tuple-element((f32[16,128,16]{2,1,0}, f32[]) %all-reduce.404), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.1481 = (f32[16,128,16]{2,1,0}, f32[]) all-reduce(f32[16,128,16]{2,1,0} %reshape.1473, f32[] %get-tuple-element.1476), replica_groups={{0,1}}, to_apply=%AddComputation.1477, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1482 = f32[16,128,16]{2,1,0} get-tuple-element((f32[16,128,16]{2,1,0}, f32[]) %all-reduce.1481), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %add.1536 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %reshape.1289, f32[16,128,16]{2,1,0} %get-tuple-element.1482), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1484 = f32[16,1,8,128]{3,2,1,0} reshape(f32[16,8,128]{2,1,0} %dot.1387), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1486 = f32[16,128,1,8]{1,3,2,0} transpose(f32[16,1,8,128]{3,2,1,0} %reshape.1484), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1488 = f32[2048,8]{1,0} reshape(f32[16,128,1,8]{1,3,2,0} %transpose.1486), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1489 = f32[2048,16]{1,0} dot(f32[2048,8]{1,0} %reshape.1488, f32[8,16]{1,0} %p27.332), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1490 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1489), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1493 = f32[] get-tuple-element((f32[16,128,16]{2,1,0}, f32[]) %all-reduce.1481), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.1498 = (f32[16,128,16]{2,1,0}, f32[]) all-reduce(f32[16,128,16]{2,1,0} %reshape.1490, f32[] %get-tuple-element.1493), replica_groups={{0,1}}, to_apply=%AddComputation.1494, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1499 = f32[16,128,16]{2,1,0} get-tuple-element((f32[16,128,16]{2,1,0}, f32[]) %all-reduce.1498), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %add.1537 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %add.1536, f32[16,128,16]{2,1,0} %get-tuple-element.1499), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1504 = f32[2048,8]{1,0} reshape(f32[16,128,8]{2,1,0} %dot.1427), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1505 = f32[2048,16]{1,0} dot(f32[2048,8]{1,0} %reshape.1504, f32[8,16]{1,0} %p29.351), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1506 = f32[16,128,16]{2,1,0} reshape(f32[2048,16]{1,0} %dot.1505), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1509 = f32[] get-tuple-element((f32[16,128,16]{2,1,0}, f32[]) %all-reduce.1498), index=1, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %all-reduce.1514 = (f32[16,128,16]{2,1,0}, f32[]) all-reduce(f32[16,128,16]{2,1,0} %reshape.1506, f32[] %get-tuple-element.1509), replica_groups={{0,1}}, to_apply=%AddComputation.1510, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %get-tuple-element.1515 = f32[16,128,16]{2,1,0} get-tuple-element((f32[16,128,16]{2,1,0}, f32[]) %all-reduce.1514), index=0, metadata={op_type="xla__cross_replica_sum" op_name="xla__cross_replica_sum" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=484}
  %add.1538 = f32[16,128,16]{2,1,0} add(f32[16,128,16]{2,1,0} %add.1537, f32[16,128,16]{2,1,0} %get-tuple-element.1515), metadata={op_type="aten__add" op_name="aten__add"}
  %multiply.1539 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %add.1538, f32[16,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1540 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1546 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1539, f32[] %constant.1540), dimensions={0,1}, to_apply=%AddComputation.1542, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1551 = f32[16]{0} add(f32[16]{0} %p68.1550, f32[16]{0} %reduce.1546), metadata={op_type="aten__add" op_name="aten__add"}
  %p69.1574 = f32[16]{0} parameter(69), frontend_attributes={neff_input_names="input69"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %multiply.1563 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %multiply.1539, f32[16,128,16]{2,1,0} %reshape.190), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1564 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1570 = f32[16]{0} reduce(f32[16,128,16]{2,1,0} %multiply.1563, f32[] %constant.1564), dimensions={0,1}, to_apply=%AddComputation.1566, metadata={op_type="aten__sum" op_name="aten__sum"}
  %add.1575 = f32[16]{0} add(f32[16]{0} %p69.1574, f32[16]{0} %reduce.1570), metadata={op_type="aten__add" op_name="aten__add"}
  %p70.1647 = f32[512,16]{1,0} parameter(70), frontend_attributes={neff_input_names="input70"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.19 = f32[] constant(0)
  %broadcast.46 = f32[512,16]{1,0} broadcast(f32[] %constant.19), dimensions={}
  %slice.1582 = s64[1,128]{1,0} slice(s64[1,512]{1,0} %p11.128), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.12 = s64[128]{0} reshape(s64[1,128]{1,0} %slice.1582)
  %constant.20 = s64[] constant(0)
  %broadcast.48 = s64[128]{0} broadcast(s64[] %constant.20), dimensions={}
  %compare.6 = pred[128]{0} compare(s64[128]{0} %reshape.12, s64[128]{0} %broadcast.48), direction=GE
  %constant.21 = s64[] constant(512)
  %broadcast.50 = s64[128]{0} broadcast(s64[] %constant.21), dimensions={}
  %add.2 = s64[128]{0} add(s64[128]{0} %reshape.12, s64[128]{0} %broadcast.50)
  %select.4 = s64[128]{0} select(pred[128]{0} %compare.6, s64[128]{0} %reshape.12, s64[128]{0} %add.2)
  %reshape.13 = s64[128,1]{1,0} reshape(s64[128]{0} %select.4)
  %constant.1583 = f32[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1587 = f32[2048]{0} broadcast(f32[] %constant.1583), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.184 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.182), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.185 = f32[2048]{0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-training.182), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.186 = f32[] constant(1e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.187 = f32[2048]{0} broadcast(f32[] %constant.186), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.188 = f32[2048]{0} add(f32[2048]{0} %get-tuple-element.185, f32[2048]{0} %broadcast.187), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.3 = f32[2048]{0} sqrt(f32[2048]{0} %add.188), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1601 = f32[2048]{0} multiply(f32[2048]{0} %sqrt.3, f32[2048]{0} %sqrt.3), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.57 = f32[] constant(-1e-12), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.87 = f32[2048]{0} broadcast(f32[] %constant.57), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.11 = f32[2048]{0} add(f32[2048]{0} %multiply.1601, f32[2048]{0} %broadcast.87), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %broadcast.1594 = f32[16,128,16]{2,1,0} broadcast(f32[16]{0} %p10.102), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1595 = f32[16,128,16]{2,1,0} multiply(f32[16,128,16]{2,1,0} %multiply.1539, f32[16,128,16]{2,1,0} %broadcast.1594), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1596 = f32[1,2048,16]{2,1,0} reshape(f32[16,128,16]{2,1,0} %multiply.1595), metadata={op_type="aten__view" op_name="aten__view"}
  %batch-norm-grad.1604 = (f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) batch-norm-grad(f32[1,2048,16]{2,1,0} %reshape.181, f32[2048]{0} %broadcast.1587, f32[2048]{0} %get-tuple-element.184, f32[2048]{0} %add.11, f32[1,2048,16]{2,1,0} %reshape.1596), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1605 = f32[1,2048,16]{2,1,0} get-tuple-element((f32[1,2048,16]{2,1,0}, f32[2048]{0}, f32[2048]{0}) %batch-norm-grad.1604), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1608 = f32[16,128,16]{2,1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1605), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1609 = f32[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1615 = f32[128,16]{1,0} reduce(f32[16,128,16]{2,1,0} %reshape.1608, f32[] %constant.1609), dimensions={0}, to_apply=%AddComputation.1611, metadata={op_type="aten__sum" op_name="aten__sum"}
  %scatter.0 = f32[512,16]{1,0} scatter(f32[512,16]{1,0} %broadcast.46, s64[128,1]{1,0} %reshape.13, f32[128,16]{1,0} %reduce.1615), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1617, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.17 = f32[512,16]{1,0} custom-call(f32[512,16]{1,0} %scatter.0), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1648 = f32[512,16]{1,0} add(f32[512,16]{1,0} %p70.1647, f32[512,16]{1,0} %custom-call.17), metadata={op_type="aten__add" op_name="aten__add"}
  %p71.1684 = f32[2,16]{1,0} parameter(71), frontend_attributes={neff_input_names="input71"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %constant.22 = f32[] constant(0)
  %broadcast.51 = f32[2,16]{1,0} broadcast(f32[] %constant.22), dimensions={}
  %reshape.17 = s64[2048]{0} reshape(s64[16,128]{1,0} %p13.149)
  %constant.24 = s64[] constant(0)
  %broadcast.53 = s64[2048]{0} broadcast(s64[] %constant.24), dimensions={}
  %compare.7 = pred[2048]{0} compare(s64[2048]{0} %reshape.17, s64[2048]{0} %broadcast.53), direction=GE
  %constant.25 = s64[] constant(2)
  %broadcast.55 = s64[2048]{0} broadcast(s64[] %constant.25), dimensions={}
  %add.3 = s64[2048]{0} add(s64[2048]{0} %reshape.17, s64[2048]{0} %broadcast.55)
  %select.5 = s64[2048]{0} select(pred[2048]{0} %compare.7, s64[2048]{0} %reshape.17, s64[2048]{0} %add.3)
  %reshape.18 = s64[2048,1]{1,0} reshape(s64[2048]{0} %select.5)
  %reshape.20 = f32[2048,16]{1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1605)
  %scatter.1 = f32[2,16]{1,0} scatter(f32[2,16]{1,0} %broadcast.51, s64[2048,1]{1,0} %reshape.18, f32[2048,16]{1,0} %reshape.20), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1654, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.18 = f32[2,16]{1,0} custom-call(f32[2,16]{1,0} %scatter.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1685 = f32[2,16]{1,0} add(f32[2,16]{1,0} %p71.1684, f32[2,16]{1,0} %custom-call.18), metadata={op_type="aten__add" op_name="aten__add"}
  %p73.1751 = f32[30522,16]{1,0} parameter(73), frontend_attributes={neff_input_names="input73"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %reshape.1745 = f32[2048,16]{1,0} reshape(f32[16,128,16]{2,1,0} %add.677), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1746 = f32[16,2048]{0,1} transpose(f32[2048,16]{1,0} %reshape.1745), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.5 = f32[30522,16]{0,1} dot(f32[2048,30522]{1,0} %add.0, f32[16,2048]{0,1} %transpose.1746), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.1725 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1729 = f32[30522,16]{1,0} broadcast(f32[] %constant.1725), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %reshape.1704 = s64[2048]{0} reshape(s64[16,128]{1,0} %p15.163), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1719 = s64[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1720 = s64[2048]{0} broadcast(s64[] %constant.1719), dimensions={}, metadata={op_type="aten__lt" op_name="aten__lt"}
  %compare.1721 = pred[2048]{0} compare(s64[2048]{0} %reshape.1704, s64[2048]{0} %broadcast.1720), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt"}
  %p72.1713 = s64[] parameter(72), frontend_attributes={neff_input_names="input72"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %broadcast.1717 = s64[2048]{0} broadcast(s64[] %p72.1713), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %add.1718 = s64[2048]{0} add(s64[2048]{0} %reshape.1704, s64[2048]{0} %broadcast.1717), metadata={op_type="aten__add" op_name="aten__add"}
  %select.1722 = s64[2048]{0} select(pred[2048]{0} %compare.1721, s64[2048]{0} %add.1718, s64[2048]{0} %reshape.1704), metadata={op_type="aten__where" op_name="aten__where"}
  %reshape.1723 = s64[2048,1]{1,0} reshape(s64[2048]{0} %select.1722), metadata={op_type="aten__stack" op_name="aten__stack"}
  %convert.1705 = f32[2048]{0} convert(s64[2048]{0} %reshape.1704), metadata={op_type="aten__ne" op_name="aten__ne"}
  %constant.1703 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1706 = f32[2048]{0} broadcast(f32[] %constant.1703), dimensions={}, metadata={op_type="aten__ne" op_name="aten__ne"}
  %compare.1707 = pred[2048]{0} compare(f32[2048]{0} %convert.1705, f32[2048]{0} %broadcast.1706), direction=NE, metadata={op_type="aten__ne" op_name="aten__ne"}
  %broadcast.1711 = pred[2048,16]{1,0} broadcast(pred[2048]{0} %compare.1707), dimensions={0}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %reshape.1702 = f32[2048,16]{1,0} reshape(f32[1,2048,16]{2,1,0} %get-tuple-element.1605), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1696 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1700 = f32[2048,16]{1,0} broadcast(f32[] %constant.1696), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %select.1712 = f32[2048,16]{1,0} select(pred[2048,16]{1,0} %broadcast.1711, f32[2048,16]{1,0} %reshape.1702, f32[2048,16]{1,0} %broadcast.1700), metadata={op_type="aten__where" op_name="aten__where"}
  %scatter.1735 = f32[30522,16]{1,0} scatter(f32[30522,16]{1,0} %broadcast.1729, s64[2048,1]{1,0} %reshape.1723, f32[2048,16]{1,0} %select.1712), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%ScatterCombiner.1731, metadata={op_type="aten__index_put" op_name="aten__index_put"}
  %custom-call.19 = f32[30522,16]{1,0} custom-call(f32[30522,16]{1,0} %scatter.1735), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/SemanticEquivalenceFramework/training_experiments/neuronx_distributed_venv/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1749 = f32[30522,16]{0,1} add(f32[30522,16]{0,1} %dot.5, f32[30522,16]{1,0} %custom-call.19), metadata={op_type="aten__add" op_name="aten__add"}
  %add.1752 = f32[30522,16]{1,0} add(f32[30522,16]{1,0} %p73.1751, f32[30522,16]{0,1} %add.1749), metadata={op_type="aten__add" op_name="aten__add"}
  ROOT %tuple.1754 = (f32[1]{0}, f32[2]{0}, f32[2,16]{1,0}, f32[30522]{0}, f32[16]{0}, /*index=5*/f32[16]{0}, f32[16]{0}, f32[16,16]{1,0}, f32[16]{0}, f32[16,16]{1,0}, /*index=10*/f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,4096]{1,0}, f32[4096]{0}, /*index=15*/f32[4096,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[16]{0}, f32[16,8]{1,0}, /*index=20*/f32[8]{0}, f32[8,16]{1,0}, f32[8]{0}, f32[8,16]{1,0}, f32[8]{0}, /*index=25*/f32[8,16]{1,0}, f32[16]{0}, f32[16]{0}, f32[512,16]{1,0}, f32[2,16]{1,0}, /*index=30*/f32[30522,16]{1,0}, f32[16,128,30522]{2,1,0}, f32[16,2]{1,0}, f32[], f32[]) tuple(f32[1]{0} %add.754, f32[2]{0} %add.807, f32[2,16]{1,0} %add.818, f32[30522]{0} %add.869, f32[16]{0} %add.892, /*index=5*/f32[16]{0} %add.916, f32[16]{0} %add.969, f32[16,16]{1,0} %add.982, f32[16]{0} %add.1021, f32[16,16]{1,0} %add.1035, /*index=10*/f32[16]{0} %add.1081, f32[16]{0} %add.1105, f32[16]{0} %add.1149, f32[16,4096]{1,0} %add.1162, f32[4096]{0} %add.1193, /*index=15*/f32[4096,16]{1,0} %add.1206, f32[16]{0} %add.1234, f32[16]{0} %add.1258, f32[16]{0} %add.1302, f32[16,8]{1,0} %add.1317, /*index=20*/f32[8]{0} %add.1346, f32[8,16]{1,0} %add.1361, f32[8]{0} %add.1403, f32[8,16]{1,0} %add.1419, f32[8]{0} %add.1442, /*index=25*/f32[8,16]{1,0} %add.1457, f32[16]{0} %add.1551, f32[16]{0} %add.1575, f32[512,16]{1,0} %add.1648, f32[2,16]{1,0} %add.1685, /*index=30*/f32[30522,16]{1,0} %add.1752, f32[16,128,30522]{2,1,0} %add.682, f32[16,2]{1,0} %add.540, f32[] %add.749, f32[] %divide.750), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15,output16,output17,output18,output19,output20,output21,output22,output23,output24,output25,output26,output27,output28,output29,output30,output31,output32,output33,output34"}
}


`

export default text;
