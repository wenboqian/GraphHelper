const text = `
    HloModule SyncTensorsGraph.1724, input_output_alias={ {0}: (40, {}, must-alias) }

%MaxComputation.430 (x.431: bf16[], y.432: bf16[]) -> bf16[] {
  %x.431 = bf16[] parameter(0)
  %y.432 = bf16[] parameter(1)
  ROOT %maximum.433 = bf16[] maximum(bf16[] %x.431, bf16[] %y.432)
}

%AddComputation.439 (x.440: bf16[], y.441: bf16[]) -> bf16[] {
  %x.440 = bf16[] parameter(0)
  %y.441 = bf16[] parameter(1)
  ROOT %add.442 = bf16[] add(bf16[] %x.440, bf16[] %y.441)
}

%AddComputation.1200 (x.1201: bf16[], y.1202: bf16[]) -> bf16[] {
  %x.1201 = bf16[] parameter(0)
  %y.1202 = bf16[] parameter(1)
  ROOT %add.1203 = bf16[] add(bf16[] %x.1201, bf16[] %y.1202)
}

%ScatterCombiner.1296 (p0.1297: bf16[], p1.1298: bf16[]) -> bf16[] {
  %p0.1297 = bf16[] parameter(0)
  %p1.1298 = bf16[] parameter(1)
  ROOT %add.1299 = bf16[] add(bf16[] %p0.1297, bf16[] %p1.1298)
}

%AddComputation.1347 (x.1348: bf16[], y.1349: bf16[]) -> bf16[] {
  %x.1348 = bf16[] parameter(0)
  %y.1349 = bf16[] parameter(1)
  ROOT %add.1350 = bf16[] add(bf16[] %x.1348, bf16[] %y.1349)
}

%AddComputation.1363 (x.1364: bf16[], y.1365: bf16[]) -> bf16[] {
  %x.1364 = bf16[] parameter(0)
  %y.1365 = bf16[] parameter(1)
  ROOT %add.1366 = bf16[] add(bf16[] %x.1364, bf16[] %y.1365)
}

%AddComputation.1419 (x.1420: bf16[], y.1421: bf16[]) -> bf16[] {
  %x.1420 = bf16[] parameter(0)
  %y.1421 = bf16[] parameter(1)
  ROOT %add.1422 = bf16[] add(bf16[] %x.1420, bf16[] %y.1421)
}

%AddComputation.1442 (x.1443: bf16[], y.1444: bf16[]) -> bf16[] {
  %x.1443 = bf16[] parameter(0)
  %y.1444 = bf16[] parameter(1)
  ROOT %add.1445 = bf16[] add(bf16[] %x.1443, bf16[] %y.1444)
}

%AddComputation.1458 (x.1459: bf16[], y.1460: bf16[]) -> bf16[] {
  %x.1459 = bf16[] parameter(0)
  %y.1460 = bf16[] parameter(1)
  ROOT %add.1461 = bf16[] add(bf16[] %x.1459, bf16[] %y.1460)
}

%AddComputation.1485 (x.1486: bf16[], y.1487: bf16[]) -> bf16[] {
  %x.1486 = bf16[] parameter(0)
  %y.1487 = bf16[] parameter(1)
  ROOT %add.1488 = bf16[] add(bf16[] %x.1486, bf16[] %y.1487)
}

%AddComputation.1512 (x.1513: bf16[], y.1514: bf16[]) -> bf16[] {
  %x.1513 = bf16[] parameter(0)
  %y.1514 = bf16[] parameter(1)
  ROOT %add.1515 = bf16[] add(bf16[] %x.1513, bf16[] %y.1514)
}

%AddComputation.1535 (x.1536: bf16[], y.1537: bf16[]) -> bf16[] {
  %x.1536 = bf16[] parameter(0)
  %y.1537 = bf16[] parameter(1)
  ROOT %add.1538 = bf16[] add(bf16[] %x.1536, bf16[] %y.1537)
}

%AddComputation.1551 (x.1552: bf16[], y.1553: bf16[]) -> bf16[] {
  %x.1552 = bf16[] parameter(0)
  %y.1553 = bf16[] parameter(1)
  ROOT %add.1554 = bf16[] add(bf16[] %x.1552, bf16[] %y.1553)
}

%AddComputation.1626 (x.1627: bf16[], y.1628: bf16[]) -> bf16[] {
  %x.1627 = bf16[] parameter(0)
  %y.1628 = bf16[] parameter(1)
  ROOT %add.1629 = bf16[] add(bf16[] %x.1627, bf16[] %y.1628)
}

%AddComputation.1649 (x.1650: bf16[], y.1651: bf16[]) -> bf16[] {
  %x.1650 = bf16[] parameter(0)
  %y.1651 = bf16[] parameter(1)
  ROOT %add.1652 = bf16[] add(bf16[] %x.1650, bf16[] %y.1651)
}

%SimpleCrossEntropyLossForwardAdd.812 (p0.813: bf16[], p1.814: bf16[]) -> bf16[] {
  %p0.813 = bf16[] parameter(0)
  %p1.814 = bf16[] parameter(1)
  ROOT %add.815 = bf16[] add(bf16[] %p0.813, bf16[] %p1.814)
}

%SimpleCrossEntropyLossForwardAdd.816 (p0.817: bf16[], p1.818: bf16[]) -> bf16[] {
  %p0.817 = bf16[] parameter(0)
  %p1.818 = bf16[] parameter(1)
  ROOT %add.819 = bf16[] add(bf16[] %p0.817, bf16[] %p1.818)
}

%SimpleCrossEntropyLossForwardAdd.820 (p0.821: bf16[], p1.822: bf16[]) -> bf16[] {
  %p0.821 = bf16[] parameter(0)
  %p1.822 = bf16[] parameter(1)
  ROOT %add.823 = bf16[] add(bf16[] %p0.821, bf16[] %p1.822)
}

%SimpleCrossEntropyLossForwardAdd.824 (p0.825: bf16[], p1.826: bf16[]) -> bf16[] {
  %p0.825 = bf16[] parameter(0)
  %p1.826 = bf16[] parameter(1)
  ROOT %add.827 = bf16[] add(bf16[] %p0.825, bf16[] %p1.826)
}

%SimpleCrossEntropyLossBackwardAdd.940 (p0.941: bf16[], p1.942: bf16[]) -> bf16[] {
  %p0.941 = bf16[] parameter(0)
  %p1.942 = bf16[] parameter(1)
  ROOT %add.943 = bf16[] add(bf16[] %p0.941, bf16[] %p1.942)
}

%SimpleCrossEntropyLossForwardMax.625 (p0.626: bf16[], p1.627: bf16[]) -> bf16[] {
  %p0.626 = bf16[] parameter(0)
  %p1.627 = bf16[] parameter(1)
  ROOT %maximum.628 = bf16[] maximum(bf16[] %p0.626, bf16[] %p1.627)
}

%SimpleCrossEntropyLossForwardAdd.629 (p0.630: bf16[], p1.631: bf16[]) -> bf16[] {
  %p0.630 = bf16[] parameter(0)
  %p1.631 = bf16[] parameter(1)
  ROOT %add.632 = bf16[] add(bf16[] %p0.630, bf16[] %p1.631)
}

%SimpleCrossEntropyLossForwardAdd.633 (p0.634: bf16[], p1.635: bf16[]) -> bf16[] {
  %p0.634 = bf16[] parameter(0)
  %p1.635 = bf16[] parameter(1)
  ROOT %add.636 = bf16[] add(bf16[] %p0.634, bf16[] %p1.635)
}

%Int32PermissiveEmbeddingScatterCombiner.1665 (p0.1666: bf16[], p1.1667: bf16[]) -> bf16[] {
  %p0.1666 = bf16[] parameter(0)
  %p1.1667 = bf16[] parameter(1)
  ROOT %add.1668 = bf16[] add(bf16[] %p0.1666, bf16[] %p1.1667)
}

%Int32PermissiveEmbeddingScatterCombiner.1694 (p0.1695: bf16[], p1.1696: bf16[]) -> bf16[] {
  %p0.1695 = bf16[] parameter(0)
  %p1.1696 = bf16[] parameter(1)
  ROOT %add.1697 = bf16[] add(bf16[] %p0.1695, bf16[] %p1.1696)
}

%SimpleCrossEntropyLossForwardMax.808 (p0.809: bf16[], p1.810: bf16[]) -> bf16[] {
  %p0.809 = bf16[] parameter(0)
  %p1.810 = bf16[] parameter(1)
  ROOT %maximum.811 = bf16[] maximum(bf16[] %p0.809, bf16[] %p1.810)
}

%AddComputation.976 (x.977: bf16[], y.978: bf16[]) -> bf16[] {
  %x.977 = bf16[] parameter(0)
  %y.978 = bf16[] parameter(1)
  ROOT %add.979 = bf16[] add(bf16[] %x.977, bf16[] %y.978)
}

%AddComputation.1324 (x.1325: bf16[], y.1326: bf16[]) -> bf16[] {
  %x.1325 = bf16[] parameter(0)
  %y.1326 = bf16[] parameter(1)
  ROOT %add.1327 = bf16[] add(bf16[] %x.1325, bf16[] %y.1326)
}

%AddComputation.1570 (x.1571: bf16[], y.1572: bf16[]) -> bf16[] {
  %x.1571 = bf16[] parameter(0)
  %y.1572 = bf16[] parameter(1)
  ROOT %add.1573 = bf16[] add(bf16[] %x.1571, bf16[] %y.1572)
}

%AddComputation.1590 (x.1591: bf16[], y.1592: bf16[]) -> bf16[] {
  %x.1591 = bf16[] parameter(0)
  %y.1592 = bf16[] parameter(1)
  ROOT %add.1593 = bf16[] add(bf16[] %x.1591, bf16[] %y.1592)
}

%AddComputation.1610 (x.1611: bf16[], y.1612: bf16[]) -> bf16[] {
  %x.1611 = bf16[] parameter(0)
  %y.1612 = bf16[] parameter(1)
  ROOT %add.1613 = bf16[] add(bf16[] %x.1611, bf16[] %y.1612)
}

%scalar_add_computation (scalar_lhs: f32[], scalar_rhs: f32[]) -> f32[] {
  %scalar_lhs = f32[] parameter(0)
  %scalar_rhs = f32[] parameter(1)
  ROOT %add.12 = f32[] add(f32[] %scalar_lhs, f32[] %scalar_rhs)
}

ENTRY %SyncTensorsGraph.1724 (p0.4: s64[1], p1.5: bf16[2], p2.13: bf16[2,16], p3.22: bf16[16], p4.30: bf16[16,16], p5.40: bf16[16], p6.74: bf16[16], p7.107: bf16[], p8.108: s64[], p9.147: bf16[16], p10.180: s64[1,512], p11.184: bf16[512,16], p12.201: s64[1,128], p13.203: bf16[2,16], p14.215: s64[1,128], p15.217: bf16[30522,16], p16.238: bf16[16], p17.301: bf16[16], p18.303: bf16[16,16], p19.310: bf16[16], p20.312: bf16[16,16], p21.361: bf16[], p22.362: s64[1,128], p23.383: bf16[], p24.389: bf16[16], p25.391: bf16[16,16], p26.408: bf16[16], p27.410: bf16[16,16], p28.468: bf16[16], p29.526: bf16[16], p30.535: bf16[16,4096], p31.549: bf16[4096], p32.558: bf16[4096,16], p33.598: bf16[16], p34.687: s64[1,128], p35.694: bf16[30522], p36.712: bf16[16], p37.745: bf16[16], p38.754: bf16[16,16], p39.785: bf16[16], p40.875: f32[1], p41.1278: s64[]) -> (f32[1], bf16[1,128,30522], bf16[1,2], bf16[], bf16[], /*index=5*/bf16[2], bf16[2,16], bf16[30522], bf16[30522,16], bf16[16], /*index=10*/bf16[16], bf16[16], bf16[16,16], bf16[16], bf16[16,16], /*index=15*/bf16[16], bf16[16], bf16[16], bf16[16,4096], bf16[4096], /*index=20*/bf16[4096,16], bf16[16], bf16[16], bf16[16], bf16[16,16], /*index=25*/bf16[16], bf16[16,16], bf16[16], bf16[16,16], bf16[16], /*index=30*/bf16[16,16], bf16[16], bf16[16], bf16[512,16], bf16[2,16]) {
  %p40.875 = f32[1]{0} parameter(40), frontend_attributes={neff_input_names="input40"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=511}
  %p34.687 = s64[1,128]{1,0} parameter(34), frontend_attributes={neff_input_names="input34"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1134}
  %constant.7 = s64[] constant(-100)
  %broadcast.188 = s64[1,128]{1,0} broadcast(s64[] %constant.7), dimensions={}
  %compare.8 = pred[1,128]{1,0} compare(s64[1,128]{1,0} %p34.687, s64[1,128]{1,0} %broadcast.188), direction=NE
  %reshape.443 = pred[128]{0} reshape(pred[1,128]{1,0} %compare.8)
  %p39.785 = bf16[16]{0} parameter(39), frontend_attributes={neff_input_names="input39"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.72 = bf16[16]{0} custom-call(bf16[16]{0} %p39.785), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.798 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.72), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p33.598 = bf16[16]{0} parameter(33), frontend_attributes={neff_input_names="input33"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.55 = bf16[16]{0} custom-call(bf16[16]{0} %p33.598), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.611 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.55), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p28.468 = bf16[16]{0} parameter(28), frontend_attributes={neff_input_names="input28"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.56 = bf16[16]{0} custom-call(bf16[16]{0} %p28.468), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.481 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.56), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p16.238 = bf16[16]{0} parameter(16), frontend_attributes={neff_input_names="input16"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.57 = bf16[16]{0} custom-call(bf16[16]{0} %p16.238), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.251 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.57), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p15.217 = bf16[30522,16]{1,0} parameter(15), frontend_attributes={neff_input_names="input15"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.58 = bf16[30522,16]{1,0} custom-call(bf16[30522,16]{1,0} %p15.217), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p14.215 = s64[1,128]{1,0} parameter(14), frontend_attributes={neff_input_names="input14"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %convert.7 = u32[1,128]{1,0} convert(s64[1,128]{1,0} %p14.215)
  %reshape.303 = u32[128]{0} reshape(u32[1,128]{1,0} %convert.7), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %gather.226 = bf16[128,16]{1,0} gather(bf16[30522,16]{1,0} %custom-call.58, u32[128]{0} %reshape.303), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2233}
  %p13.203 = bf16[2,16]{1,0} parameter(13), frontend_attributes={neff_input_names="input13"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.59 = bf16[2,16]{1,0} custom-call(bf16[2,16]{1,0} %p13.203), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p12.201 = s64[1,128]{1,0} parameter(12), frontend_attributes={neff_input_names="input12"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %convert.6 = u32[1,128]{1,0} convert(s64[1,128]{1,0} %p12.201)
  %reshape.302 = u32[128]{0} reshape(u32[1,128]{1,0} %convert.6), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %gather.212 = bf16[128,16]{1,0} gather(bf16[2,16]{1,0} %custom-call.59, u32[128]{0} %reshape.302), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %add.13 = bf16[128,16]{1,0} add(bf16[128,16]{1,0} %gather.226, bf16[128,16]{1,0} %gather.212), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=235}
  %p11.184 = bf16[512,16]{1,0} parameter(11), frontend_attributes={neff_input_names="input11"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.60 = bf16[512,16]{1,0} custom-call(bf16[512,16]{1,0} %p11.184), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p10.180 = s64[1,512]{1,0} parameter(10), frontend_attributes={neff_input_names="input10"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=218}
  %convert.5 = u32[1,512]{1,0} convert(s64[1,512]{1,0} %p10.180)
  %slice.0 = u32[1,128]{1,0} slice(u32[1,512]{1,0} %convert.5), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %reshape.301 = u32[128]{0} reshape(u32[1,128]{1,0} %slice.0), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %gather.193 = bf16[128,16]{1,0} gather(bf16[512,16]{1,0} %custom-call.60, u32[128]{0} %reshape.301), offset_dims={1}, collapsed_slice_dims={0}, start_index_map={0}, index_vector_dim=1, slice_sizes={1,16}, metadata={op_type="aten__index_select" op_name="aten__index_select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_neuronx/xla_impl/ops.py" source_line=1027}
  %add.16 = bf16[128,16]{1,0} add(bf16[128,16]{1,0} %add.13, bf16[128,16]{1,0} %gather.193), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %reshape.474 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %add.16), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=238}
  %constant.170 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.174 = bf16[128]{0} broadcast(bf16[] %constant.170), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.165 = bf16[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.169 = bf16[128]{0} broadcast(bf16[] %constant.165), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.230 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-training(bf16[1,128,16]{2,1,0} %reshape.474, bf16[128]{0} %broadcast.174, bf16[128]{0} %broadcast.169), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.231 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.230), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p9.147 = bf16[16]{0} parameter(9), frontend_attributes={neff_input_names="input9"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.61 = bf16[16]{0} custom-call(bf16[16]{0} %p9.147), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.247 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.61), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.250 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %get-tuple-element.231, bf16[1,128,16]{2,1,0} %broadcast.247), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.252 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %broadcast.251, bf16[1,128,16]{2,1,0} %multiply.250), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.109 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %p8.108 = s64[] parameter(8), frontend_attributes={neff_input_names="input8"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.110 = s64[] multiply(s64[] %constant.109, s64[] %p8.108), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.111 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.112 = s64[] add(s64[] %multiply.110, s64[] %constant.111), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.119 = u64[] convert(s64[] %add.112), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.123 = u64[1]{0} reshape(u64[] %convert.119), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.41 = u64[1]{0} constant({0})
  %concatenate.125 = u64[2]{0} concatenate(u64[1]{0} %reshape.123, u64[1]{0} %constant.41), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.126 = (u64[2]{0}, u32[1,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.125), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.127 = u32[1,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[1,128,16]{2,1,0}) %rng-bit-generator.126), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.129 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.130 = u32[1,128,16]{2,1,0} broadcast(u32[] %constant.129), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.131 = u32[1,128,16]{2,1,0} shift-right-logical(u32[1,128,16]{2,1,0} %get-tuple-element.127, u32[1,128,16]{2,1,0} %broadcast.130), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.132 = f32[1,128,16]{2,1,0} convert(u32[1,128,16]{2,1,0} %shift-right-logical.131), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.45 = f32[] constant(1.1920929e-07)
  %broadcast.40 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.45), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.138 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %convert.132, f32[1,128,16]{2,1,0} %broadcast.40), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.141 = bf16[1,128,16]{2,1,0} convert(f32[1,128,16]{2,1,0} %multiply.138), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %p7.107 = bf16[] parameter(7), frontend_attributes={neff_input_names="input7"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.116 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.142 = pred[1,128,16]{2,1,0} compare(bf16[1,128,16]{2,1,0} %convert.141, bf16[1,128,16]{2,1,0} %broadcast.116), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.23 = bf16[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.4 = bf16[] divide(bf16[] %constant.23, bf16[] %p7.107)
  %broadcast.42 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %divide.4), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.34 = bf16[] constant(0)
  %broadcast.105 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %constant.34), dimensions={}
  %select.13 = bf16[1,128,16]{2,1,0} select(pred[1,128,16]{2,1,0} %compare.142, bf16[1,128,16]{2,1,0} %broadcast.42, bf16[1,128,16]{2,1,0} %broadcast.105), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.254 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.252, bf16[1,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.412 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.254), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p27.410 = bf16[16,16]{1,0} parameter(27), frontend_attributes={neff_input_names="input27"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.411 = bf16[16,16]{0,1} transpose(bf16[16,16]{1,0} %p27.410), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.413 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.412, bf16[16,16]{0,1} %transpose.411), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.414 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.413), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p26.408 = bf16[16]{0} parameter(26), frontend_attributes={neff_input_names="input26"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.415 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %p26.408), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.416 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %reshape.414, bf16[1,128,16]{2,1,0} %broadcast.415), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.417 = bf16[1,128,2,8]{3,2,1,0} reshape(bf16[1,128,16]{2,1,0} %add.416), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %transpose.418 = bf16[1,2,128,8]{3,1,2,0} transpose(bf16[1,128,2,8]{3,2,1,0} %reshape.417), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.420 = bf16[2,128,8]{2,1,0} reshape(bf16[1,2,128,8]{3,1,2,0} %transpose.418), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.393 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.254), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p25.391 = bf16[16,16]{1,0} parameter(25), frontend_attributes={neff_input_names="input25"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.392 = bf16[16,16]{0,1} transpose(bf16[16,16]{1,0} %p25.391), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.394 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.393, bf16[16,16]{0,1} %transpose.392), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  // forward all-reduce consumer anchor
  %reshape.395 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.394), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p24.389 = bf16[16]{0} parameter(24), frontend_attributes={neff_input_names="input24"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.396 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %p24.389), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.397 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %reshape.395, bf16[1,128,16]{2,1,0} %broadcast.396), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.398 = bf16[1,128,2,8]{3,2,1,0} reshape(bf16[1,128,16]{2,1,0} %add.397), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %transpose.400 = bf16[1,2,8,128]{2,1,3,0} transpose(bf16[1,128,2,8]{3,2,1,0} %reshape.398), dimensions={0,2,3,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %reshape.402 = bf16[2,8,128]{2,1,0} reshape(bf16[1,2,8,128]{2,1,3,0} %transpose.400), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %dot.421 = bf16[2,128,128]{2,1,0} dot(bf16[2,128,8]{2,1,0} %reshape.420, bf16[2,8,128]{2,1,0} %reshape.402), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=325}
  %p23.383 = bf16[] parameter(23), frontend_attributes={neff_input_names="input23"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %broadcast.190 = bf16[2,128,128]{2,1,0} broadcast(bf16[] %p23.383), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %divide.8 = bf16[2,128,128]{2,1,0} divide(bf16[2,128,128]{2,1,0} %dot.421, bf16[2,128,128]{2,1,0} %broadcast.190), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %reshape.434 = bf16[1,2,128,128]{3,2,1,0} reshape(bf16[2,128,128]{2,1,0} %divide.8), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=349}
  %constant.374 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %broadcast.192 = bf16[1,128]{1,0} broadcast(bf16[] %constant.374), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p22.362 = s64[1,128]{1,0} parameter(22), frontend_attributes={neff_input_names="input22"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=958}
  %convert.3 = bf16[1,128]{1,0} convert(s64[1,128]{1,0} %p22.362), metadata={op_type="aten__as_strided" op_name="aten__as_strided" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=969}
  %subtract.4 = bf16[1,128]{1,0} subtract(bf16[1,128]{1,0} %broadcast.192, bf16[1,128]{1,0} %convert.3), metadata={op_type="aten__sub" op_name="aten__sub" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/_tensor.py" source_line=909}
  %p21.361 = bf16[] parameter(21), frontend_attributes={neff_input_names="input21"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %broadcast.199 = bf16[1,128]{1,0} broadcast(bf16[] %p21.361), dimensions={}, metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %multiply.39 = bf16[1,128]{1,0} multiply(bf16[1,128]{1,0} %subtract.4, bf16[1,128]{1,0} %broadcast.199), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/modeling_utils.py" source_line=970}
  %reshape.50 = bf16[128]{0} reshape(bf16[1,128]{1,0} %multiply.39)
  %broadcast.427 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[128]{0} %reshape.50), dimensions={3}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %add.428 = bf16[1,2,128,128]{3,2,1,0} add(bf16[1,2,128,128]{3,2,1,0} %reshape.434, bf16[1,2,128,128]{3,2,1,0} %broadcast.427), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=352}
  %constant.429 = bf16[] constant(-inf), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.434 = bf16[1,2,128]{2,1,0} reduce(bf16[1,2,128,128]{3,2,1,0} %add.428, bf16[] %constant.429), dimensions={3}, to_apply=%MaxComputation.430, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.52 = bf16[2,128]{1,0} reshape(bf16[1,2,128]{2,1,0} %reduce.434)
  %broadcast.435 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[2,128]{1,0} %reshape.52), dimensions={1,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %subtract.436 = bf16[1,2,128,128]{3,2,1,0} subtract(bf16[1,2,128,128]{3,2,1,0} %add.428, bf16[1,2,128,128]{3,2,1,0} %broadcast.435), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %exponential.437 = bf16[1,2,128,128]{3,2,1,0} exponential(bf16[1,2,128,128]{3,2,1,0} %subtract.436), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.438 = bf16[] constant(0), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reduce.443 = bf16[1,2,128]{2,1,0} reduce(bf16[1,2,128,128]{3,2,1,0} %exponential.437, bf16[] %constant.438), dimensions={3}, to_apply=%AddComputation.439, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %reshape.53 = bf16[2,128]{1,0} reshape(bf16[1,2,128]{2,1,0} %reduce.443)
  %broadcast.444 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[2,128]{1,0} %reshape.53), dimensions={1,2}, metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %divide.445 = bf16[1,2,128,128]{3,2,1,0} divide(bf16[1,2,128,128]{3,2,1,0} %exponential.437, bf16[1,2,128,128]{3,2,1,0} %broadcast.444), metadata={op_type="aten__softmax" op_name="aten__softmax" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1856}
  %constant.255 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.256 = s64[] multiply(s64[] %constant.255, s64[] %add.112), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.257 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.258 = s64[] add(s64[] %multiply.256, s64[] %constant.257), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.329 = u64[] convert(s64[] %add.258), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.333 = u64[1]{0} reshape(u64[] %convert.329), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.46 = u64[1]{0} constant({0})
  %concatenate.335 = u64[2]{0} concatenate(u64[1]{0} %reshape.333, u64[1]{0} %constant.46), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.336 = (u64[2]{0}, u32[1,2,128,128]{3,2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.335), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.337 = u32[1,2,128,128]{3,2,1,0} get-tuple-element((u64[2]{0}, u32[1,2,128,128]{3,2,1,0}) %rng-bit-generator.336), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.339 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.340 = u32[1,2,128,128]{3,2,1,0} broadcast(u32[] %constant.339), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.341 = u32[1,2,128,128]{3,2,1,0} shift-right-logical(u32[1,2,128,128]{3,2,1,0} %get-tuple-element.337, u32[1,2,128,128]{3,2,1,0} %broadcast.340), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.342 = f32[1,2,128,128]{3,2,1,0} convert(u32[1,2,128,128]{3,2,1,0} %shift-right-logical.341), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.51 = f32[] constant(1.1920929e-07)
  %broadcast.49 = f32[1,2,128,128]{3,2,1,0} broadcast(f32[] %constant.51), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.348 = f32[1,2,128,128]{3,2,1,0} multiply(f32[1,2,128,128]{3,2,1,0} %convert.342, f32[1,2,128,128]{3,2,1,0} %broadcast.49), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.351 = bf16[1,2,128,128]{3,2,1,0} convert(f32[1,2,128,128]{3,2,1,0} %multiply.348), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.326 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.352 = pred[1,2,128,128]{3,2,1,0} compare(bf16[1,2,128,128]{3,2,1,0} %convert.351, bf16[1,2,128,128]{3,2,1,0} %broadcast.326), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.24 = bf16[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.5 = bf16[] divide(bf16[] %constant.24, bf16[] %p7.107)
  %broadcast.53 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[] %divide.5), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.33 = bf16[] constant(0)
  %broadcast.98 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[] %constant.33), dimensions={}
  %select.12 = bf16[1,2,128,128]{3,2,1,0} select(pred[1,2,128,128]{3,2,1,0} %compare.352, bf16[1,2,128,128]{3,2,1,0} %broadcast.53, bf16[1,2,128,128]{3,2,1,0} %broadcast.98), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.446 = bf16[1,2,128,128]{3,2,1,0} multiply(bf16[1,2,128,128]{3,2,1,0} %divide.445, bf16[1,2,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.448 = bf16[2,128,128]{2,1,0} reshape(bf16[1,2,128,128]{3,2,1,0} %multiply.446), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.314 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.254), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p20.312 = bf16[16,16]{1,0} parameter(20), frontend_attributes={neff_input_names="input20"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.313 = bf16[16,16]{0,1} transpose(bf16[16,16]{1,0} %p20.312), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.315 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.314, bf16[16,16]{0,1} %transpose.313), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.316 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.315), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %p19.310 = bf16[16]{0} parameter(19), frontend_attributes={neff_input_names="input19"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %broadcast.317 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %p19.310), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %add.318 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %reshape.316, bf16[1,128,16]{2,1,0} %broadcast.317), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=624}
  %reshape.319 = bf16[1,128,2,8]{3,2,1,0} reshape(bf16[1,128,16]{2,1,0} %add.318), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %transpose.320 = bf16[1,2,128,8]{3,1,2,0} transpose(bf16[1,128,2,8]{3,2,1,0} %reshape.319), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.322 = bf16[2,128,8]{2,1,0} reshape(bf16[1,2,128,8]{3,1,2,0} %transpose.320), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %dot.449 = bf16[2,128,8]{2,1,0} dot(bf16[2,128,128]{2,1,0} %reshape.448, bf16[2,128,8]{2,1,0} %reshape.322), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=365}
  %reshape.450 = bf16[1,2,128,8]{3,2,1,0} reshape(bf16[2,128,8]{2,1,0} %dot.449), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.451 = bf16[1,128,2,8]{3,1,2,0} transpose(bf16[1,2,128,8]{3,2,1,0} %reshape.450), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.453 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{3,1,2,0} %transpose.451), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %p18.303 = bf16[16,16]{1,0} parameter(18), frontend_attributes={neff_input_names="input18"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %transpose.304 = bf16[16,16]{0,1} transpose(bf16[16,16]{1,0} %p18.303), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %dot.454 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.453, bf16[16,16]{0,1} %transpose.304), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=322}
  %reshape.455 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.454), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %p17.301 = bf16[16]{0} parameter(17), frontend_attributes={neff_input_names="input17"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %broadcast.456 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %p17.301), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %add.457 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %reshape.455, bf16[1,128,16]{2,1,0} %broadcast.456), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=800}
  %constant.259 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.260 = s64[] multiply(s64[] %constant.259, s64[] %add.258), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.261 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.262 = s64[] add(s64[] %multiply.260, s64[] %constant.261), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.269 = u64[] convert(s64[] %add.262), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.273 = u64[1]{0} reshape(u64[] %convert.269), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.52 = u64[1]{0} constant({0})
  %concatenate.275 = u64[2]{0} concatenate(u64[1]{0} %reshape.273, u64[1]{0} %constant.52), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.276 = (u64[2]{0}, u32[1,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.275), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.277 = u32[1,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[1,128,16]{2,1,0}) %rng-bit-generator.276), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.279 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.280 = u32[1,128,16]{2,1,0} broadcast(u32[] %constant.279), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.281 = u32[1,128,16]{2,1,0} shift-right-logical(u32[1,128,16]{2,1,0} %get-tuple-element.277, u32[1,128,16]{2,1,0} %broadcast.280), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.282 = f32[1,128,16]{2,1,0} convert(u32[1,128,16]{2,1,0} %shift-right-logical.281), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.57 = f32[] constant(1.1920929e-07)
  %broadcast.54 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.57), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.288 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %convert.282, f32[1,128,16]{2,1,0} %broadcast.54), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.291 = bf16[1,128,16]{2,1,0} convert(f32[1,128,16]{2,1,0} %multiply.288), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.266 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.292 = pred[1,128,16]{2,1,0} compare(bf16[1,128,16]{2,1,0} %convert.291, bf16[1,128,16]{2,1,0} %broadcast.266), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.25 = bf16[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.6 = bf16[] divide(bf16[] %constant.25, bf16[] %p7.107)
  %broadcast.58 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %divide.6), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.32 = bf16[] constant(0)
  %broadcast.95 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %constant.32), dimensions={}
  %select.11 = bf16[1,128,16]{2,1,0} select(pred[1,128,16]{2,1,0} %compare.292, bf16[1,128,16]{2,1,0} %broadcast.58, bf16[1,128,16]{2,1,0} %broadcast.95), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.458 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.457, bf16[1,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.459 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %multiply.458, bf16[1,128,16]{2,1,0} %multiply.254), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=388}
  %constant.97 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.101 = bf16[128]{0} broadcast(bf16[] %constant.97), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.92 = bf16[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.96 = bf16[128]{0} broadcast(bf16[] %constant.92), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.460 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-training(bf16[1,128,16]{2,1,0} %add.459, bf16[128]{0} %broadcast.101, bf16[128]{0} %broadcast.96), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.461 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.460), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p6.74 = bf16[16]{0} parameter(6), frontend_attributes={neff_input_names="input6"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.62 = bf16[16]{0} custom-call(bf16[16]{0} %p6.74), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.477 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.62), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.480 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %get-tuple-element.461, bf16[1,128,16]{2,1,0} %broadcast.477), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.482 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %broadcast.481, bf16[1,128,16]{2,1,0} %multiply.480), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.567 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %add.482), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p32.558 = bf16[4096,16]{1,0} parameter(32), frontend_attributes={neff_input_names="input32"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.63 = bf16[4096,16]{1,0} custom-call(bf16[4096,16]{1,0} %p32.558), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.566 = bf16[16,4096]{0,1} transpose(bf16[4096,16]{1,0} %custom-call.63), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.568 = bf16[128,4096]{1,0} dot(bf16[128,16]{1,0} %reshape.567, bf16[16,4096]{0,1} %transpose.566), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.569 = bf16[1,128,4096]{2,1,0} reshape(bf16[128,4096]{1,0} %dot.568), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p31.549 = bf16[4096]{0} parameter(31), frontend_attributes={neff_input_names="input31"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.64 = bf16[4096]{0} custom-call(bf16[4096]{0} %p31.549), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.570 = bf16[1,128,4096]{2,1,0} broadcast(bf16[4096]{0} %custom-call.64), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.571 = bf16[1,128,4096]{2,1,0} add(bf16[1,128,4096]{2,1,0} %reshape.569, bf16[1,128,4096]{2,1,0} %broadcast.570), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.65 = bf16[1,128,4096]{2,1,0} custom-call(bf16[1,128,4096]{2,1,0} %add.571), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.581 = bf16[128,4096]{1,0} reshape(bf16[1,128,4096]{2,1,0} %custom-call.65), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p30.535 = bf16[16,4096]{1,0} parameter(30), frontend_attributes={neff_input_names="input30"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.66 = bf16[16,4096]{1,0} custom-call(bf16[16,4096]{1,0} %p30.535), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.543 = bf16[4096,16]{0,1} transpose(bf16[16,4096]{1,0} %custom-call.66), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.582 = bf16[128,16]{1,0} dot(bf16[128,4096]{1,0} %reshape.581, bf16[4096,16]{0,1} %transpose.543), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.583 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.582), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p29.526 = bf16[16]{0} parameter(29), frontend_attributes={neff_input_names="input29"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.67 = bf16[16]{0} custom-call(bf16[16]{0} %p29.526), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.584 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.67), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.585 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %reshape.583, bf16[1,128,16]{2,1,0} %broadcast.584), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.484 = s64[] constant(214013), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.485 = s64[] multiply(s64[] %constant.484, s64[] %add.262), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.486 = s64[] constant(2531011), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.487 = s64[] add(s64[] %multiply.485, s64[] %constant.486), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.494 = u64[] convert(s64[] %add.487), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %reshape.498 = u64[1]{0} reshape(u64[] %convert.494), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.60 = u64[1]{0} constant({0})
  %concatenate.500 = u64[2]{0} concatenate(u64[1]{0} %reshape.498, u64[1]{0} %constant.60), dimensions={0}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %rng-bit-generator.501 = (u64[2]{0}, u32[1,128,16]{2,1,0}) rng-bit-generator(u64[2]{0} %concatenate.500), algorithm=rng_default, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %get-tuple-element.502 = u32[1,128,16]{2,1,0} get-tuple-element((u64[2]{0}, u32[1,128,16]{2,1,0}) %rng-bit-generator.501), index=1, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.504 = u32[] constant(9), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.505 = u32[1,128,16]{2,1,0} broadcast(u32[] %constant.504), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %shift-right-logical.506 = u32[1,128,16]{2,1,0} shift-right-logical(u32[1,128,16]{2,1,0} %get-tuple-element.502, u32[1,128,16]{2,1,0} %broadcast.505), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.507 = f32[1,128,16]{2,1,0} convert(u32[1,128,16]{2,1,0} %shift-right-logical.506), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.65 = f32[] constant(1.1920929e-07)
  %broadcast.61 = f32[1,128,16]{2,1,0} broadcast(f32[] %constant.65), dimensions={}, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.513 = f32[1,128,16]{2,1,0} multiply(f32[1,128,16]{2,1,0} %convert.507, f32[1,128,16]{2,1,0} %broadcast.61), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %convert.516 = bf16[1,128,16]{2,1,0} convert(f32[1,128,16]{2,1,0} %multiply.513), metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %broadcast.491 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %p7.107), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %compare.517 = pred[1,128,16]{2,1,0} compare(bf16[1,128,16]{2,1,0} %convert.516, bf16[1,128,16]{2,1,0} %broadcast.491), direction=LT, metadata={op_type="aten__bernoulli" op_name="aten__bernoulli" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.26 = bf16[] constant(1), metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %divide.7 = bf16[] divide(bf16[] %constant.26, bf16[] %p7.107)
  %broadcast.64 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %divide.7), dimensions={}, metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %constant.31 = bf16[] constant(0)
  %broadcast.92 = bf16[1,128,16]{2,1,0} broadcast(bf16[] %constant.31), dimensions={}
  %select.10 = bf16[1,128,16]{2,1,0} select(pred[1,128,16]{2,1,0} %compare.517, bf16[1,128,16]{2,1,0} %broadcast.64, bf16[1,128,16]{2,1,0} %broadcast.92), metadata={op_type="aten__div" op_name="aten__div" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %multiply.588 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.585, bf16[1,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=1266}
  %add.589 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %multiply.588, bf16[1,128,16]{2,1,0} %add.482), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=466}
  %constant.63 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.67 = bf16[128]{0} broadcast(bf16[] %constant.63), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.58 = bf16[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.62 = bf16[128]{0} broadcast(bf16[] %constant.58), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.590 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-training(bf16[1,128,16]{2,1,0} %add.589, bf16[128]{0} %broadcast.67, bf16[128]{0} %broadcast.62), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.591 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.590), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p5.40 = bf16[16]{0} parameter(5), frontend_attributes={neff_input_names="input5"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.68 = bf16[16]{0} custom-call(bf16[16]{0} %p5.40), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.607 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.68), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.610 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %get-tuple-element.591, bf16[1,128,16]{2,1,0} %broadcast.607), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.612 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %broadcast.611, bf16[1,128,16]{2,1,0} %multiply.610), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.763 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %add.612), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p38.754 = bf16[16,16]{1,0} parameter(38), frontend_attributes={neff_input_names="input38"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.69 = bf16[16,16]{1,0} custom-call(bf16[16,16]{1,0} %p38.754), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.762 = bf16[16,16]{0,1} transpose(bf16[16,16]{1,0} %custom-call.69), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.764 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.763, bf16[16,16]{0,1} %transpose.762), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.765 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.764), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p37.745 = bf16[16]{0} parameter(37), frontend_attributes={neff_input_names="input37"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.70 = bf16[16]{0} custom-call(bf16[16]{0} %p37.745), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.766 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.70), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.767 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %reshape.765, bf16[1,128,16]{2,1,0} %broadcast.766), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.71 = bf16[1,128,16]{2,1,0} custom-call(bf16[1,128,16]{2,1,0} %add.767), custom_call_target="AwsNeuronGelu", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_GeluForwardImpl" op_name="xla___op_GeluForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.735 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.739 = bf16[128]{0} broadcast(bf16[] %constant.735), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.730 = bf16[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.734 = bf16[128]{0} broadcast(bf16[] %constant.730), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %batch-norm-training.777 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-training(bf16[1,128,16]{2,1,0} %custom-call.71, bf16[128]{0} %broadcast.739, bf16[128]{0} %broadcast.734), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.778 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.777), index=0, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %p36.712 = bf16[16]{0} parameter(36), frontend_attributes={neff_input_names="input36"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.73 = bf16[16]{0} custom-call(bf16[16]{0} %p36.712), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.794 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.73), dimensions={2}, metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.797 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %get-tuple-element.778, bf16[1,128,16]{2,1,0} %broadcast.794), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.799 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %broadcast.798, bf16[1,128,16]{2,1,0} %multiply.797), metadata={op_type="aten__addcmul" op_name="aten__addcmul" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %reshape.800 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %add.799), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %custom-call.74 = bf16[30522,16]{1,0} custom-call(bf16[30522,16]{1,0} %p15.217), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %transpose.710 = bf16[16,30522]{0,1} transpose(bf16[30522,16]{1,0} %custom-call.74), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %dot.801 = bf16[128,30522]{1,0} dot(bf16[128,16]{1,0} %reshape.800, bf16[16,30522]{0,1} %transpose.710), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.802 = bf16[1,128,30522]{2,1,0} reshape(bf16[128,30522]{1,0} %dot.801), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p35.694 = bf16[30522]{0} parameter(35), frontend_attributes={neff_input_names="input35"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.75 = bf16[30522]{0} custom-call(bf16[30522]{0} %p35.694), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.803 = bf16[1,128,30522]{2,1,0} broadcast(bf16[30522]{0} %custom-call.75), dimensions={2}, metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %add.804 = bf16[1,128,30522]{2,1,0} add(bf16[1,128,30522]{2,1,0} %reshape.802, bf16[1,128,30522]{2,1,0} %broadcast.803), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.807 = bf16[128,30522]{1,0} reshape(bf16[1,128,30522]{2,1,0} %add.804), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.0 = bf16[] constant(-inf)
  %reduce.0 = bf16[128]{0} reduce(bf16[1,128,30522]{2,1,0} %add.804, bf16[] %constant.0), dimensions={0,2}, to_apply=%SimpleCrossEntropyLossForwardMax.808
  %broadcast.0 = bf16[128,30522]{1,0} broadcast(bf16[128]{0} %reduce.0), dimensions={0}
  %subtract.0 = bf16[128,30522]{1,0} subtract(bf16[128,30522]{1,0} %reshape.807, bf16[128,30522]{1,0} %broadcast.0)
  %exponential.0 = bf16[128,30522]{1,0} exponential(bf16[128,30522]{1,0} %subtract.0)
  %constant.4 = bf16[] constant(0)
  %reduce.1 = bf16[128]{0} reduce(bf16[128,30522]{1,0} %exponential.0, bf16[] %constant.4), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.812
  %log.0 = bf16[128]{0} log(bf16[128]{0} %reduce.1)
  %broadcast.1 = bf16[128,30522]{1,0} broadcast(bf16[128]{0} %log.0), dimensions={0}
  %subtract.1 = bf16[128,30522]{1,0} subtract(bf16[128,30522]{1,0} %subtract.0, bf16[128,30522]{1,0} %broadcast.1), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1 = s64[128]{0} reshape(s64[1,128]{1,0} %p34.687)
  %broadcast.3 = s64[128,30522]{1,0} broadcast(s64[128]{0} %reshape.1), dimensions={0}
  %iota.5 = s64[128,30522]{1,0} iota(), iota_dimension=1
  %compare.0 = pred[128,30522]{1,0} compare(s64[128,30522]{1,0} %broadcast.3, s64[128,30522]{1,0} %iota.5), direction=EQ
  %constant.5 = bf16[] constant(1)
  %broadcast.6 = bf16[128,30522]{1,0} broadcast(bf16[] %constant.5), dimensions={}
  %constant.6 = bf16[] constant(0)
  %broadcast.7 = bf16[128,30522]{1,0} broadcast(bf16[] %constant.6), dimensions={}
  %select.0 = bf16[128,30522]{1,0} select(pred[128,30522]{1,0} %compare.0, bf16[128,30522]{1,0} %broadcast.6, bf16[128,30522]{1,0} %broadcast.7)
  %multiply.2 = bf16[128,30522]{1,0} multiply(bf16[128,30522]{1,0} %subtract.1, bf16[128,30522]{1,0} %select.0)
  %reduce.2 = bf16[128]{0} reduce(bf16[128,30522]{1,0} %multiply.2, bf16[] %constant.4), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.816
  %constant.27 = bf16[] constant(0)
  %broadcast.68 = bf16[128]{0} broadcast(bf16[] %constant.27), dimensions={}
  %select.6 = bf16[128]{0} select(pred[128]{0} %reshape.443, bf16[128]{0} %reduce.2, bf16[128]{0} %broadcast.68)
  %reduce.3 = bf16[] reduce(bf16[128]{0} %select.6, bf16[] %constant.4), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.820
  %convert.0 = bf16[128]{0} convert(pred[128]{0} %reshape.443), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reduce.4 = bf16[] reduce(bf16[128]{0} %convert.0, bf16[] %constant.4), dimensions={0}, to_apply=%SimpleCrossEntropyLossForwardAdd.824
  %divide.0 = bf16[] divide(bf16[] %reduce.3, bf16[] %reduce.4)
  %negate.0 = bf16[] negate(bf16[] %divide.0), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %p0.4 = s64[1]{0} parameter(0), frontend_attributes={neff_input_names="input0"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1135}
  %constant.69 = s64[1]{0} constant({-100})
  %compare.4 = pred[1]{0} compare(s64[1]{0} %p0.4, s64[1]{0} %constant.69), direction=NE
  %slice.614 = bf16[1,1,16]{2,1,0} slice(bf16[1,128,16]{2,1,0} %add.612), slice={[0:1], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.130 = bf16[16]{0} reshape(bf16[1,1,16]{2,1,0} %slice.614)
  %broadcast.202 = bf16[16,16]{1,0} broadcast(bf16[16]{0} %reshape.130), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p4.30 = bf16[16,16]{1,0} parameter(4), frontend_attributes={neff_input_names="input4"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.78 = bf16[16,16]{1,0} custom-call(bf16[16,16]{1,0} %p4.30), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.40 = bf16[16,16]{1,0} multiply(bf16[16,16]{1,0} %broadcast.202, bf16[16,16]{1,0} %custom-call.78)
  %convert.24 = f32[16,16]{1,0} convert(bf16[16,16]{1,0} %multiply.40)
  %constant.35 = f32[] constant(0)
  %reduce.18 = f32[16]{0} reduce(f32[16,16]{1,0} %convert.24, f32[] %constant.35), dimensions={1}, to_apply=%scalar_add_computation
  %convert.9 = bf16[16]{0} convert(f32[16]{0} %reduce.18), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p3.22 = bf16[16]{0} parameter(3), frontend_attributes={neff_input_names="input3"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.79 = bf16[16]{0} custom-call(bf16[16]{0} %p3.22), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.14 = bf16[16]{0} add(bf16[16]{0} %convert.9, bf16[16]{0} %custom-call.79), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %tanh.0 = bf16[16]{0} tanh(bf16[16]{0} %add.14), metadata={op_type="aten__tanh" op_name="aten__tanh" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/activation.py" source_line=356}
  %broadcast.204 = bf16[2,16]{1,0} broadcast(bf16[16]{0} %tanh.0), dimensions={1}, metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p2.13 = bf16[2,16]{1,0} parameter(2), frontend_attributes={neff_input_names="input2"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.80 = bf16[2,16]{1,0} custom-call(bf16[2,16]{1,0} %p2.13), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.41 = bf16[2,16]{1,0} multiply(bf16[2,16]{1,0} %broadcast.204, bf16[2,16]{1,0} %custom-call.80)
  %convert.25 = f32[2,16]{1,0} convert(bf16[2,16]{1,0} %multiply.41)
  %constant.36 = f32[] constant(0)
  %reduce.19 = f32[2]{0} reduce(f32[2,16]{1,0} %convert.25, f32[] %constant.36), dimensions={1}, to_apply=%scalar_add_computation
  %convert.11 = bf16[2]{0} convert(f32[2]{0} %reduce.19), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %p1.5 = bf16[2]{0} parameter(1), frontend_attributes={neff_input_names="input1"}, metadata={op_type="xla__device_data" op_name="xla__device_data" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.81 = bf16[2]{0} custom-call(bf16[2]{0} %p1.5), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.15 = bf16[2]{0} add(bf16[2]{0} %convert.11, bf16[2]{0} %custom-call.81), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %reshape.440 = bf16[1,2]{1,0} reshape(bf16[2]{0} %add.15), metadata={op_type="aten__addmm" op_name="aten__addmm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/modules/linear.py" source_line=114}
  %constant.10 = bf16[] constant(-inf)
  %reduce.6 = bf16[1]{0} reduce(bf16[1,2]{1,0} %reshape.440, bf16[] %constant.10), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardMax.625
  %reshape.136 = bf16[] reshape(bf16[1]{0} %reduce.6)
  %broadcast.17 = bf16[1,2]{1,0} broadcast(bf16[] %reshape.136), dimensions={}
  %subtract.2 = bf16[1,2]{1,0} subtract(bf16[1,2]{1,0} %reshape.440, bf16[1,2]{1,0} %broadcast.17)
  %exponential.2 = bf16[1,2]{1,0} exponential(bf16[1,2]{1,0} %subtract.2)
  %constant.11 = bf16[] constant(0)
  %reduce.7 = bf16[1]{0} reduce(bf16[1,2]{1,0} %exponential.2, bf16[] %constant.11), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.629
  %log.1 = bf16[1]{0} log(bf16[1]{0} %reduce.7)
  %reshape.137 = bf16[] reshape(bf16[1]{0} %log.1)
  %broadcast.18 = bf16[1,2]{1,0} broadcast(bf16[] %reshape.137), dimensions={}
  %subtract.3 = bf16[1,2]{1,0} subtract(bf16[1,2]{1,0} %subtract.2, bf16[1,2]{1,0} %broadcast.18), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.140 = s64[] reshape(s64[1]{0} %p0.4)
  %broadcast.20 = s64[1,2]{1,0} broadcast(s64[] %reshape.140), dimensions={}
  %iota.2 = s64[1,2]{1,0} iota(), iota_dimension=1
  %compare.3 = pred[1,2]{1,0} compare(s64[1,2]{1,0} %broadcast.20, s64[1,2]{1,0} %iota.2), direction=EQ
  %constant.12 = bf16[] constant(1)
  %broadcast.22 = bf16[1,2]{1,0} broadcast(bf16[] %constant.12), dimensions={}
  %constant.13 = bf16[] constant(0)
  %broadcast.23 = bf16[1,2]{1,0} broadcast(bf16[] %constant.13), dimensions={}
  %select.2 = bf16[1,2]{1,0} select(pred[1,2]{1,0} %compare.3, bf16[1,2]{1,0} %broadcast.22, bf16[1,2]{1,0} %broadcast.23)
  %multiply.7 = bf16[1,2]{1,0} multiply(bf16[1,2]{1,0} %subtract.3, bf16[1,2]{1,0} %select.2)
  %reduce.8 = bf16[1]{0} reduce(bf16[1,2]{1,0} %multiply.7, bf16[] %constant.11), dimensions={1}, to_apply=%SimpleCrossEntropyLossForwardAdd.633
  %constant.70 = bf16[1]{0} constant({0})
  %select.7 = bf16[1]{0} select(pred[1]{0} %compare.4, bf16[1]{0} %reduce.8, bf16[1]{0} %constant.70)
  %convert.1 = bf16[1]{0} convert(pred[1]{0} %compare.4), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %divide.9 = bf16[1]{0} divide(bf16[1]{0} %select.7, bf16[1]{0} %convert.1)
  %negate.8 = bf16[1]{0} negate(bf16[1]{0} %divide.9), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.481 = bf16[] reshape(bf16[1]{0} %negate.8), metadata={op_type="xla___op_SimpleCrossEntropyLossForwardImpl" op_name="xla___op_SimpleCrossEntropyLossForwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.871 = bf16[] add(bf16[] %negate.0, bf16[] %reshape.481), metadata={op_type="aten__add" op_name="aten__add" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/transformers/models/bert/modeling_bert.py" source_line=1136}
  %convert.70 = f32[] convert(bf16[] %add.871), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=511}
  %reshape.621 = f32[1]{0} reshape(f32[] %convert.70), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=511}
  %add.877 = f32[1]{0} add(f32[1]{0} %p40.875, f32[1]{0} %reshape.621), metadata={op_type="aten__add" op_name="aten__add" source_file="tp_dp_bert_large_hf_pretrain_hdf5.py" source_line=511}
  %exponential.3 = bf16[1,2]{1,0} exponential(bf16[1,2]{1,0} %subtract.3)
  %constant.78 = bf16[1]{0} constant({1})
  %divide.10 = bf16[1]{0} divide(bf16[1]{0} %constant.78, bf16[1]{0} %convert.1)
  %constant.71 = bf16[1]{0} constant({0})
  %select.8 = bf16[1]{0} select(pred[1]{0} %compare.4, bf16[1]{0} %divide.10, bf16[1]{0} %constant.71)
  %reshape.150 = bf16[] reshape(bf16[1]{0} %select.8)
  %broadcast.26 = bf16[1,2]{1,0} broadcast(bf16[] %reshape.150), dimensions={}
  %multiply.10 = bf16[1,2]{1,0} multiply(bf16[1,2]{1,0} %exponential.3, bf16[1,2]{1,0} %broadcast.26)
  %reshape.153 = s64[] reshape(s64[1]{0} %p0.4)
  %broadcast.28 = s64[1,2]{1,0} broadcast(s64[] %reshape.153), dimensions={}
  %iota.3 = s64[1,2]{1,0} iota(), iota_dimension=1
  %compare.5 = pred[1,2]{1,0} compare(s64[1,2]{1,0} %broadcast.28, s64[1,2]{1,0} %iota.3), direction=EQ
  %negate.9 = bf16[1]{0} negate(bf16[1]{0} %divide.10)
  %reshape.483 = bf16[] reshape(bf16[1]{0} %negate.9)
  %broadcast.30 = bf16[1,2]{1,0} broadcast(bf16[] %reshape.483), dimensions={}
  %constant.16 = bf16[] constant(0)
  %broadcast.31 = bf16[1,2]{1,0} broadcast(bf16[] %constant.16), dimensions={}
  %select.3 = bf16[1,2]{1,0} select(pred[1,2]{1,0} %compare.5, bf16[1,2]{1,0} %broadcast.30, bf16[1,2]{1,0} %broadcast.31)
  %add.1 = bf16[1,2]{1,0} add(bf16[1,2]{1,0} %multiply.10, bf16[1,2]{1,0} %select.3), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.922 = bf16[2]{0} reshape(bf16[1,2]{1,0} %add.1), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.83 = bf16[2]{0} custom-call(bf16[2]{0} %reshape.922), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.164 = bf16[2]{0} reshape(bf16[1,2]{1,0} %add.1)
  %broadcast.147 = bf16[2,16]{0,1} broadcast(bf16[2]{0} %reshape.164), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %broadcast.148 = bf16[2,16]{0,1} broadcast(bf16[16]{0} %tanh.0), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.30 = bf16[2,16]{0,1} multiply(bf16[2,16]{0,1} %broadcast.147, bf16[2,16]{0,1} %broadcast.148), metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.84 = bf16[2,16]{1,0} custom-call(bf16[2,16]{0,1} %multiply.30), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %exponential.1 = bf16[128,30522]{1,0} exponential(bf16[128,30522]{1,0} %subtract.1)
  %constant.880 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/autograd/__init__.py" source_line=127}
  %constant.8 = bf16[] constant(0)
  %reduce.5 = bf16[] reduce(bf16[128]{0} %convert.0, bf16[] %constant.8), dimensions={0}, to_apply=%SimpleCrossEntropyLossBackwardAdd.940
  %divide.1 = bf16[] divide(bf16[] %constant.880, bf16[] %reduce.5)
  %broadcast.9 = bf16[128]{0} broadcast(bf16[] %divide.1), dimensions={}
  %constant.30 = bf16[] constant(0)
  %broadcast.78 = bf16[128]{0} broadcast(bf16[] %constant.30), dimensions={}
  %select.9 = bf16[128]{0} select(pred[128]{0} %reshape.443, bf16[128]{0} %broadcast.9, bf16[128]{0} %broadcast.78)
  %broadcast.10 = bf16[128,30522]{1,0} broadcast(bf16[128]{0} %select.9), dimensions={0}
  %multiply.5 = bf16[128,30522]{1,0} multiply(bf16[128,30522]{1,0} %exponential.1, bf16[128,30522]{1,0} %broadcast.10)
  %reshape.4 = s64[128]{0} reshape(s64[1,128]{1,0} %p34.687)
  %broadcast.12 = s64[128,30522]{1,0} broadcast(s64[128]{0} %reshape.4), dimensions={0}
  %iota.7 = s64[128,30522]{1,0} iota(), iota_dimension=1
  %compare.2 = pred[128,30522]{1,0} compare(s64[128,30522]{1,0} %broadcast.12, s64[128,30522]{1,0} %iota.7), direction=EQ
  %negate.1 = bf16[] negate(bf16[] %divide.1)
  %broadcast.15 = bf16[128,30522]{1,0} broadcast(bf16[] %negate.1), dimensions={}
  %constant.9 = bf16[] constant(0)
  %broadcast.16 = bf16[128,30522]{1,0} broadcast(bf16[] %constant.9), dimensions={}
  %select.1 = bf16[128,30522]{1,0} select(pred[128,30522]{1,0} %compare.2, bf16[128,30522]{1,0} %broadcast.15, bf16[128,30522]{1,0} %broadcast.16)
  %add.0 = bf16[128,30522]{1,0} add(bf16[128,30522]{1,0} %multiply.5, bf16[128,30522]{1,0} %select.1), metadata={op_type="xla___op_SimpleCrossEntropyLossBackwardImpl" op_name="xla___op_SimpleCrossEntropyLossBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.974 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.980 = bf16[30522]{0} reduce(bf16[128,30522]{1,0} %add.0, bf16[] %constant.974), dimensions={0}, to_apply=%AddComputation.976, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.85 = bf16[30522]{0} custom-call(bf16[30522]{0} %reduce.980), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1310 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %add.799), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1311 = bf16[16,128]{0,1} transpose(bf16[128,16]{1,0} %reshape.1310), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.4 = bf16[30522,16]{0,1} dot(bf16[128,30522]{1,0} %add.0, bf16[16,128]{0,1} %transpose.1311), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.86 = bf16[30522,16]{1,0} custom-call(bf16[30522,16]{0,1} %dot.4), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1290 = bf16[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1294 = bf16[30522,16]{1,0} broadcast(bf16[] %constant.1290), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %reshape.1269 = s64[128]{0} reshape(s64[1,128]{1,0} %p14.215), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.1284 = s64[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1285 = s64[128]{0} broadcast(s64[] %constant.1284), dimensions={}, metadata={op_type="aten__lt" op_name="aten__lt"}
  %compare.1286 = pred[128]{0} compare(s64[128]{0} %reshape.1269, s64[128]{0} %broadcast.1285), direction=LT, metadata={op_type="aten__lt" op_name="aten__lt"}
  %p41.1278 = s64[] parameter(41), frontend_attributes={neff_input_names="input41"}, metadata={op_type="xla__device_data" op_name="xla__device_data"}
  %broadcast.1282 = s64[128]{0} broadcast(s64[] %p41.1278), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %add.1283 = s64[128]{0} add(s64[128]{0} %reshape.1269, s64[128]{0} %broadcast.1282), metadata={op_type="aten__add" op_name="aten__add"}
  %select.1287 = s64[128]{0} select(pred[128]{0} %compare.1286, s64[128]{0} %add.1283, s64[128]{0} %reshape.1269), metadata={op_type="aten__where" op_name="aten__where"}
  %reshape.1288 = s64[128,1]{1,0} reshape(s64[128]{0} %select.1287), metadata={op_type="aten__stack" op_name="aten__stack"}
  %convert.1270 = f32[128]{0} convert(s64[128]{0} %reshape.1269), metadata={op_type="aten__ne" op_name="aten__ne"}
  %constant.1268 = f32[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1271 = f32[128]{0} broadcast(f32[] %constant.1268), dimensions={}, metadata={op_type="aten__ne" op_name="aten__ne"}
  %compare.1272 = pred[128]{0} compare(f32[128]{0} %convert.1270, f32[128]{0} %broadcast.1271), direction=NE, metadata={op_type="aten__ne" op_name="aten__ne"}
  %broadcast.1276 = pred[128,16]{1,0} broadcast(pred[128]{0} %compare.1272), dimensions={0}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %constant.1000 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1004 = bf16[128]{0} broadcast(bf16[] %constant.1000), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.232 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.230), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.233 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.230), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.234 = bf16[] constant(1.002e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.235 = bf16[128]{0} broadcast(bf16[] %constant.234), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.236 = bf16[128]{0} add(bf16[128]{0} %get-tuple-element.233, bf16[128]{0} %broadcast.235), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt = bf16[128]{0} sqrt(bf16[128]{0} %add.236), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1260 = bf16[128]{0} multiply(bf16[128]{0} %sqrt, bf16[128]{0} %sqrt), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.72 = bf16[] constant(-1.002e-12)
  %broadcast.79 = bf16[128]{0} broadcast(bf16[] %constant.72), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.8 = bf16[128]{0} add(bf16[128]{0} %multiply.1260, bf16[128]{0} %broadcast.79), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1020 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1024 = bf16[128]{0} broadcast(bf16[] %constant.1020), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.462 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.460), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.463 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.460), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.464 = bf16[] constant(1.002e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.465 = bf16[128]{0} broadcast(bf16[] %constant.464), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.466 = bf16[128]{0} add(bf16[128]{0} %get-tuple-element.463, bf16[128]{0} %broadcast.465), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.1 = bf16[128]{0} sqrt(bf16[128]{0} %add.466), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1181 = bf16[128]{0} multiply(bf16[128]{0} %sqrt.1, bf16[128]{0} %sqrt.1), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.74 = bf16[] constant(-1.002e-12)
  %broadcast.80 = bf16[128]{0} broadcast(bf16[] %constant.74), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.9 = bf16[128]{0} add(bf16[128]{0} %multiply.1181, bf16[128]{0} %broadcast.80), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1040 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1044 = bf16[128]{0} broadcast(bf16[] %constant.1040), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.592 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.590), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.593 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.590), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.594 = bf16[] constant(1.002e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.595 = bf16[128]{0} broadcast(bf16[] %constant.594), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.596 = bf16[128]{0} add(bf16[128]{0} %get-tuple-element.593, bf16[128]{0} %broadcast.595), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.2 = bf16[128]{0} sqrt(bf16[128]{0} %add.596), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1149 = bf16[128]{0} multiply(bf16[128]{0} %sqrt.2, bf16[128]{0} %sqrt.2), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.75 = bf16[] constant(-1.002e-12)
  %broadcast.81 = bf16[128]{0} broadcast(bf16[] %constant.75), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.10 = bf16[128]{0} add(bf16[128]{0} %multiply.1149, bf16[128]{0} %broadcast.81), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.1099 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.1103 = bf16[128]{0} broadcast(bf16[] %constant.1099), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %get-tuple-element.779 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.777), index=1, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %get-tuple-element.780 = bf16[128]{0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-training.777), index=2, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %constant.781 = bf16[] constant(1.002e-12), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %broadcast.782 = bf16[128]{0} broadcast(bf16[] %constant.781), dimensions={}, metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %add.783 = bf16[128]{0} add(bf16[128]{0} %get-tuple-element.780, bf16[128]{0} %broadcast.782), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %sqrt.3 = bf16[128]{0} sqrt(bf16[128]{0} %add.783), metadata={op_type="aten__native_batch_norm" op_name="aten__native_batch_norm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch/nn/functional.py" source_line=2543}
  %multiply.1122 = bf16[128]{0} multiply(bf16[128]{0} %sqrt.3, bf16[128]{0} %sqrt.3), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %constant.76 = bf16[] constant(-1.002e-12)
  %broadcast.82 = bf16[128]{0} broadcast(bf16[] %constant.76), dimensions={}, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %add.11 = bf16[128]{0} add(bf16[128]{0} %multiply.1122, bf16[128]{0} %broadcast.82), metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %dot.1114 = bf16[128,16]{1,0} dot(bf16[128,30522]{1,0} %add.0, bf16[30522,16]{1,0} %custom-call.74), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1115 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.1114), metadata={op_type="aten__view" op_name="aten__view"}
  %broadcast.1116 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.73), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1117 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %reshape.1115, bf16[1,128,16]{2,1,0} %broadcast.1116), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1125 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-grad(bf16[1,128,16]{2,1,0} %custom-call.71, bf16[128]{0} %broadcast.1103, bf16[128]{0} %get-tuple-element.779, bf16[128]{0} %add.11, bf16[1,128,16]{2,1,0} %multiply.1117), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1126 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-grad.1125), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %custom-call.76 = bf16[1,128,16]{2,1,0} custom-call(bf16[1,128,16]{2,1,0} %add.767), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.6 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %get-tuple-element.1126, bf16[1,128,16]{2,1,0} %custom-call.76), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1139 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.6), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1140 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.1139, bf16[16,16]{1,0} %custom-call.69), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1141 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.1140), metadata={op_type="aten__view" op_name="aten__view"}
  %reshape.201 = bf16[2]{0} reshape(bf16[1,2]{1,0} %add.1)
  %broadcast.196 = bf16[2,16]{1,0} broadcast(bf16[2]{0} %reshape.201), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.37 = bf16[2,16]{1,0} multiply(bf16[2,16]{1,0} %broadcast.196, bf16[2,16]{1,0} %custom-call.80)
  %convert.20 = f32[2,16]{1,0} convert(bf16[2,16]{1,0} %multiply.37)
  %constant.37 = f32[] constant(0)
  %reduce.20 = f32[16]{0} reduce(f32[2,16]{1,0} %convert.20, f32[] %constant.37), dimensions={0}, to_apply=%scalar_add_computation
  %convert.13 = bf16[16]{0} convert(f32[16]{0} %reduce.20), metadata={op_type="aten__mm" op_name="aten__mm"}
  %constant.1070 = bf16[] constant(1), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.206 = bf16[16]{0} broadcast(bf16[] %constant.1070), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %multiply.42 = bf16[16]{0} multiply(bf16[16]{0} %tanh.0, bf16[16]{0} %tanh.0), metadata={op_type="aten__pow" op_name="aten__pow"}
  %subtract.5 = bf16[16]{0} subtract(bf16[16]{0} %broadcast.206, bf16[16]{0} %multiply.42), metadata={op_type="aten__sub" op_name="aten__sub"}
  %multiply.43 = bf16[16]{0} multiply(bf16[16]{0} %convert.13, bf16[16]{0} %subtract.5), metadata={op_type="aten__mul" op_name="aten__mul"}
  %broadcast.197 = bf16[16,16]{1,0} broadcast(bf16[16]{0} %multiply.43), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.38 = bf16[16,16]{1,0} multiply(bf16[16,16]{1,0} %broadcast.197, bf16[16,16]{1,0} %custom-call.78)
  %convert.21 = f32[16,16]{1,0} convert(bf16[16,16]{1,0} %multiply.38)
  %constant.38 = f32[] constant(0)
  %reduce.21 = f32[16]{0} reduce(f32[16,16]{1,0} %convert.21, f32[] %constant.38), dimensions={0}, to_apply=%scalar_add_computation
  %convert.15 = bf16[16]{0} convert(f32[16]{0} %reduce.21), metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1081 = bf16[1,1,16]{2,1,0} reshape(bf16[16]{0} %convert.15), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.77 = bf16[] constant(0)
  %pad = bf16[1,128,16]{2,1,0} pad(bf16[1,1,16]{2,1,0} %reshape.1081, bf16[] %constant.77), padding=0_0x0_127x0_0, metadata={op_type="xla__update_slice" op_name="xla__update_slice"}
  %add.1142 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %reshape.1141, bf16[1,128,16]{2,1,0} %pad), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1143 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.68), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1144 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.1142, bf16[1,128,16]{2,1,0} %broadcast.1143), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1152 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-grad(bf16[1,128,16]{2,1,0} %add.589, bf16[128]{0} %broadcast.1044, bf16[128]{0} %get-tuple-element.592, bf16[128]{0} %add.10, bf16[1,128,16]{2,1,0} %multiply.1144), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1153 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-grad.1152), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %multiply.1156 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %get-tuple-element.1153, bf16[1,128,16]{2,1,0} %select.10), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1157 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.1156), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1158 = bf16[128,4096]{1,0} dot(bf16[128,16]{1,0} %reshape.1157, bf16[16,4096]{1,0} %custom-call.66), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1159 = bf16[1,128,4096]{2,1,0} reshape(bf16[128,4096]{1,0} %dot.1158), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.82 = bf16[1,128,4096]{2,1,0} custom-call(bf16[1,128,4096]{2,1,0} %add.571), custom_call_target="AwsNeuronGeluBackward", api_version=API_VERSION_UNSPECIFIED
  %multiply.11 = bf16[1,128,4096]{2,1,0} multiply(bf16[1,128,4096]{2,1,0} %reshape.1159, bf16[1,128,4096]{2,1,0} %custom-call.82), metadata={op_type="xla___op_GeluBackwardImpl" op_name="xla___op_GeluBackwardImpl" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1170 = bf16[128,4096]{1,0} reshape(bf16[1,128,4096]{2,1,0} %multiply.11), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1171 = bf16[128,16]{1,0} dot(bf16[128,4096]{1,0} %reshape.1170, bf16[4096,16]{1,0} %custom-call.63), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %reshape.1172 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.1171), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1174 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %get-tuple-element.1153, bf16[1,128,16]{2,1,0} %reshape.1172), metadata={op_type="aten__add" op_name="aten__add"}
  %broadcast.1175 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.62), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1176 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.1174, bf16[1,128,16]{2,1,0} %broadcast.1175), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1184 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-grad(bf16[1,128,16]{2,1,0} %add.459, bf16[128]{0} %broadcast.1024, bf16[128]{0} %get-tuple-element.462, bf16[128]{0} %add.9, bf16[1,128,16]{2,1,0} %multiply.1176), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1185 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-grad.1184), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1240 = bf16[2,128,128]{2,1,0} reshape(bf16[1,2,128,128]{3,2,1,0} %multiply.446), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1241 = bf16[2,128,128]{1,2,0} transpose(bf16[2,128,128]{2,1,0} %reshape.1240), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %multiply.1188 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %get-tuple-element.1185, bf16[1,128,16]{2,1,0} %select.11), metadata={op_type="aten__mul" op_name="aten__mul"}
  %reshape.1189 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.1188), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1190 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.1189, bf16[16,16]{1,0} %p18.303), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1192 = bf16[1,128,2,8]{3,2,1,0} reshape(bf16[128,16]{1,0} %dot.1190), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1193 = bf16[1,2,128,8]{3,1,2,0} transpose(bf16[1,128,2,8]{3,2,1,0} %reshape.1192), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %reshape.1194 = bf16[2,128,8]{2,1,0} reshape(bf16[1,2,128,8]{3,1,2,0} %transpose.1193), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1242 = bf16[2,128,8]{2,1,0} dot(bf16[2,128,128]{1,2,0} %transpose.1241, bf16[2,128,8]{2,1,0} %reshape.1194), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1243 = bf16[1,2,128,8]{3,2,1,0} reshape(bf16[2,128,8]{2,1,0} %dot.1242), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1244 = bf16[1,128,2,8]{3,1,2,0} transpose(bf16[1,2,128,8]{3,2,1,0} %reshape.1243), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1246 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{3,1,2,0} %transpose.1244), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1247 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.1246, bf16[16,16]{1,0} %p20.312), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1248 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.1247), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1250 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %get-tuple-element.1185, bf16[1,128,16]{2,1,0} %reshape.1248), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1224 = bf16[2,128,8]{2,1,0} reshape(bf16[1,2,128,8]{3,1,2,0} %transpose.418), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1225 = bf16[2,8,128]{1,2,0} transpose(bf16[2,128,8]{2,1,0} %reshape.1224), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %reshape.1018 = bf16[2,128,8]{2,1,0} reshape(bf16[1,2,128,8]{3,1,2,0} %transpose.320), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1019 = bf16[2,8,128]{1,2,0} transpose(bf16[2,128,8]{2,1,0} %reshape.1018), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1195 = bf16[2,128,128]{2,1,0} dot(bf16[2,128,8]{2,1,0} %reshape.1194, bf16[2,8,128]{1,2,0} %transpose.1019), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1196 = bf16[1,2,128,128]{3,2,1,0} reshape(bf16[2,128,128]{2,1,0} %dot.1195), metadata={op_type="aten__view" op_name="aten__view"}
  %multiply.1197 = bf16[1,2,128,128]{3,2,1,0} multiply(bf16[1,2,128,128]{3,2,1,0} %reshape.1196, bf16[1,2,128,128]{3,2,1,0} %select.12), metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1198 = bf16[1,2,128,128]{3,2,1,0} multiply(bf16[1,2,128,128]{3,2,1,0} %multiply.1197, bf16[1,2,128,128]{3,2,1,0} %divide.445), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %constant.1199 = bf16[] constant(0), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reduce.1204 = bf16[1,2,128]{2,1,0} reduce(bf16[1,2,128,128]{3,2,1,0} %multiply.1198, bf16[] %constant.1199), dimensions={3}, to_apply=%AddComputation.1200, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %reshape.234 = bf16[2,128]{1,0} reshape(bf16[1,2,128]{2,1,0} %reduce.1204)
  %broadcast.1205 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[2,128]{1,0} %reshape.234), dimensions={1,2}, metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %subtract.1206 = bf16[1,2,128,128]{3,2,1,0} subtract(bf16[1,2,128,128]{3,2,1,0} %multiply.1197, bf16[1,2,128,128]{3,2,1,0} %broadcast.1205), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %multiply.1207 = bf16[1,2,128,128]{3,2,1,0} multiply(bf16[1,2,128,128]{3,2,1,0} %divide.445, bf16[1,2,128,128]{3,2,1,0} %subtract.1206), metadata={op_type="aten___softmax_backward_data" op_name="aten___softmax_backward_data"}
  %broadcast.1208 = bf16[1,2,128,128]{3,2,1,0} broadcast(bf16[] %p23.383), dimensions={}, metadata={op_type="aten__div" op_name="aten__div"}
  %divide.1209 = bf16[1,2,128,128]{3,2,1,0} divide(bf16[1,2,128,128]{3,2,1,0} %multiply.1207, bf16[1,2,128,128]{3,2,1,0} %broadcast.1208), metadata={op_type="aten__div" op_name="aten__div"}
  %reshape.1210 = bf16[2,128,128]{2,1,0} reshape(bf16[1,2,128,128]{3,2,1,0} %divide.1209), metadata={op_type="aten__view" op_name="aten__view"}
  %dot.1226 = bf16[2,8,128]{2,1,0} dot(bf16[2,8,128]{1,2,0} %transpose.1225, bf16[2,128,128]{2,1,0} %reshape.1210), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1227 = bf16[1,2,8,128]{3,2,1,0} reshape(bf16[2,8,128]{2,1,0} %dot.1226), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1229 = bf16[1,128,2,8]{1,3,2,0} transpose(bf16[1,2,8,128]{3,2,1,0} %reshape.1227), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1231 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{1,3,2,0} %transpose.1229), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1232 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.1231, bf16[16,16]{1,0} %p25.391), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1233 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.1232), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1251 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %add.1250, bf16[1,128,16]{2,1,0} %reshape.1233), metadata={op_type="aten__add" op_name="aten__add"}
  %reshape.1016 = bf16[2,8,128]{2,1,0} reshape(bf16[1,2,8,128]{2,1,3,0} %transpose.400), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1017 = bf16[2,128,8]{1,2,0} transpose(bf16[2,8,128]{2,1,0} %reshape.1016), dimensions={0,2,1}, metadata={op_type="aten__as_strided" op_name="aten__as_strided"}
  %dot.1211 = bf16[2,128,8]{2,1,0} dot(bf16[2,128,128]{2,1,0} %reshape.1210, bf16[2,128,8]{1,2,0} %transpose.1017), lhs_batch_dims={0}, lhs_contracting_dims={2}, rhs_batch_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__matmul" op_name="aten__matmul"}
  %reshape.1212 = bf16[1,2,128,8]{3,2,1,0} reshape(bf16[2,128,8]{2,1,0} %dot.1211), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %transpose.1213 = bf16[1,128,2,8]{3,1,2,0} transpose(bf16[1,2,128,8]{3,2,1,0} %reshape.1212), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1215 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{3,1,2,0} %transpose.1213), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %dot.1216 = bf16[128,16]{1,0} dot(bf16[128,16]{1,0} %reshape.1215, bf16[16,16]{1,0} %p27.410), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=348}
  %reshape.1217 = bf16[1,128,16]{2,1,0} reshape(bf16[128,16]{1,0} %dot.1216), metadata={op_type="aten__view" op_name="aten__view"}
  %add.1252 = bf16[1,128,16]{2,1,0} add(bf16[1,128,16]{2,1,0} %add.1251, bf16[1,128,16]{2,1,0} %reshape.1217), metadata={op_type="aten__add" op_name="aten__add"}
  %multiply.1253 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.1252, bf16[1,128,16]{2,1,0} %select.13), metadata={op_type="aten__mul" op_name="aten__mul"}
  %broadcast.1254 = bf16[1,128,16]{2,1,0} broadcast(bf16[16]{0} %custom-call.61), dimensions={2}, metadata={op_type="aten__mul" op_name="aten__mul"}
  %multiply.1255 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %multiply.1253, bf16[1,128,16]{2,1,0} %broadcast.1254), metadata={op_type="aten__mul" op_name="aten__mul"}
  %batch-norm-grad.1263 = (bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) batch-norm-grad(bf16[1,128,16]{2,1,0} %reshape.474, bf16[128]{0} %broadcast.1004, bf16[128]{0} %get-tuple-element.232, bf16[128]{0} %add.8, bf16[1,128,16]{2,1,0} %multiply.1255), epsilon=1e-12, feature_index=1, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %get-tuple-element.1264 = bf16[1,128,16]{2,1,0} get-tuple-element((bf16[1,128,16]{2,1,0}, bf16[128]{0}, bf16[128]{0}) %batch-norm-grad.1263), index=0, metadata={op_type="aten__native_batch_norm_backward" op_name="aten__native_batch_norm_backward"}
  %reshape.1267 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %get-tuple-element.1264), metadata={op_type="aten__view" op_name="aten__view"}
  %constant.995 = bf16[] constant(0), metadata={op_type="prim__Constant" op_name="prim__Constant"}
  %broadcast.999 = bf16[128,16]{1,0} broadcast(bf16[] %constant.995), dimensions={}, metadata={op_type="aten__expand" op_name="aten__expand"}
  %select.1277 = bf16[128,16]{1,0} select(pred[128,16]{1,0} %broadcast.1276, bf16[128,16]{1,0} %reshape.1267, bf16[128,16]{1,0} %broadcast.999), metadata={op_type="aten__where" op_name="aten__where"}
  %scatter.1300 = bf16[30522,16]{1,0} scatter(bf16[30522,16]{1,0} %broadcast.1294, s64[128,1]{1,0} %reshape.1288, bf16[128,16]{1,0} %select.1277), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%ScatterCombiner.1296, metadata={op_type="aten__index_put" op_name="aten__index_put"}
  %custom-call.87 = bf16[30522,16]{1,0} custom-call(bf16[30522,16]{1,0} %scatter.1300), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %add.1321 = bf16[30522,16]{1,0} add(bf16[30522,16]{1,0} %custom-call.86, bf16[30522,16]{1,0} %custom-call.87), metadata={op_type="aten__add" op_name="aten__add"}
  %constant.1322 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1328 = bf16[16]{0} reduce(bf16[128,16]{1,0} %dot.1114, bf16[] %constant.1322), dimensions={0}, to_apply=%AddComputation.1324, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.88 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1328), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1344 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %reshape.1115, bf16[1,128,16]{2,1,0} %get-tuple-element.778), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1345 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1351 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.1344, bf16[] %constant.1345), dimensions={0,1}, to_apply=%AddComputation.1347, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.89 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1351), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1361 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1367 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.6, bf16[] %constant.1361), dimensions={0,1}, to_apply=%AddComputation.1363, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.90 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1367), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1377 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %add.612), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1378 = bf16[16,128]{0,1} transpose(bf16[128,16]{1,0} %reshape.1377), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.7 = bf16[16,16]{0,1} dot(bf16[128,16]{1,0} %reshape.1139, bf16[16,128]{0,1} %transpose.1378), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.91 = bf16[16,16]{1,0} custom-call(bf16[16,16]{0,1} %dot.7), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.92 = bf16[16]{0} custom-call(bf16[16]{0} %multiply.43), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %broadcast.183 = bf16[16,16]{0,1} broadcast(bf16[16]{0} %multiply.43), dimensions={0}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %slice.1405 = bf16[1,1,16]{2,1,0} slice(bf16[1,128,16]{2,1,0} %add.612), slice={[0:1], [0:1], [0:16]}, metadata={op_type="xla__generic_slice" op_name="xla__generic_slice"}
  %reshape.260 = bf16[16]{0} reshape(bf16[1,1,16]{2,1,0} %slice.1405)
  %broadcast.184 = bf16[16,16]{0,1} broadcast(bf16[16]{0} %reshape.260), dimensions={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %multiply.34 = bf16[16,16]{0,1} multiply(bf16[16,16]{0,1} %broadcast.183, bf16[16,16]{0,1} %broadcast.184), metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.93 = bf16[16,16]{1,0} custom-call(bf16[16,16]{0,1} %multiply.34), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1417 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1423 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %add.1142, bf16[] %constant.1417), dimensions={0,1}, to_apply=%AddComputation.1419, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.94 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1423), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1439 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.1142, bf16[1,128,16]{2,1,0} %get-tuple-element.591), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1440 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1446 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.1439, bf16[] %constant.1440), dimensions={0,1}, to_apply=%AddComputation.1442, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.95 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1446), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1456 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1462 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.1156, bf16[] %constant.1456), dimensions={0,1}, to_apply=%AddComputation.1458, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.96 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1462), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1472 = bf16[128,4096]{1,0} reshape(bf16[1,128,4096]{2,1,0} %custom-call.65), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1473 = bf16[4096,128]{0,1} transpose(bf16[128,4096]{1,0} %reshape.1472), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.10 = bf16[16,4096]{0,1} dot(bf16[128,16]{1,0} %reshape.1157, bf16[4096,128]{0,1} %transpose.1473), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.97 = bf16[16,4096]{1,0} custom-call(bf16[16,4096]{0,1} %dot.10), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1483 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1489 = bf16[4096]{0} reduce(bf16[1,128,4096]{2,1,0} %multiply.11, bf16[] %constant.1483), dimensions={0,1}, to_apply=%AddComputation.1485, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.98 = bf16[4096]{0} custom-call(bf16[4096]{0} %reduce.1489), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.1499 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %add.482), metadata={op_type="aten__view" op_name="aten__view"}
  %transpose.1500 = bf16[16,128]{0,1} transpose(bf16[128,16]{1,0} %reshape.1499), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute"}
  %dot.11 = bf16[4096,16]{0,1} dot(bf16[128,4096]{1,0} %reshape.1170, bf16[16,128]{0,1} %transpose.1500), lhs_contracting_dims={0}, rhs_contracting_dims={1}, metadata={op_type="aten__mm" op_name="aten__mm"}
  %custom-call.99 = bf16[4096,16]{1,0} custom-call(bf16[4096,16]{0,1} %dot.11), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1510 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1516 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %add.1174, bf16[] %constant.1510), dimensions={0,1}, to_apply=%AddComputation.1512, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.100 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1516), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1532 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %add.1174, bf16[1,128,16]{2,1,0} %get-tuple-element.461), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1533 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1539 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.1532, bf16[] %constant.1533), dimensions={0,1}, to_apply=%AddComputation.1535, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.101 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1539), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.1549 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1555 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.1188, bf16[] %constant.1549), dimensions={0,1}, to_apply=%AddComputation.1551, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1562 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.1188), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1563 = bf16[16,128]{0,1} transpose(bf16[128,16]{1,0} %reshape.1562), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1558 = bf16[1,2,128,8]{3,2,1,0} reshape(bf16[2,128,8]{2,1,0} %dot.449), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1559 = bf16[1,128,2,8]{3,1,2,0} transpose(bf16[1,2,128,8]{3,2,1,0} %reshape.1558), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1561 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{3,1,2,0} %transpose.1559), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1564 = bf16[16,16]{1,0} dot(bf16[16,128]{0,1} %transpose.1563, bf16[128,16]{1,0} %reshape.1561), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1568 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.15 = bf16[2,8]{1,0} reduce(bf16[2,128,8]{2,1,0} %dot.1242, bf16[] %constant.1568), dimensions={1}, to_apply=%AddComputation.1570, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1576 = bf16[16]{0} reshape(bf16[2,8]{1,0} %reduce.15), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=969}
  %reshape.1578 = bf16[1,2,128,8]{3,2,1,0} reshape(bf16[2,128,8]{2,1,0} %dot.1242), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1579 = bf16[1,128,2,8]{3,1,2,0} transpose(bf16[1,2,128,8]{3,2,1,0} %reshape.1578), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1581 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{3,1,2,0} %transpose.1579), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1582 = bf16[16,128]{0,1} transpose(bf16[128,16]{1,0} %reshape.1581), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1577 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.254), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1583 = bf16[16,16]{1,0} dot(bf16[16,128]{0,1} %transpose.1582, bf16[128,16]{1,0} %reshape.1577), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1588 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.16 = bf16[2,8]{1,0} reduce(bf16[2,8,128]{2,1,0} %dot.1226, bf16[] %constant.1588), dimensions={2}, to_apply=%AddComputation.1590, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1596 = bf16[16]{0} reshape(bf16[2,8]{1,0} %reduce.16), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=969}
  %reshape.1598 = bf16[1,2,8,128]{3,2,1,0} reshape(bf16[2,8,128]{2,1,0} %dot.1226), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1600 = bf16[1,128,2,8]{1,3,2,0} transpose(bf16[1,2,8,128]{3,2,1,0} %reshape.1598), dimensions={0,3,1,2}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1602 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{1,3,2,0} %transpose.1600), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1603 = bf16[16,128]{0,1} transpose(bf16[128,16]{1,0} %reshape.1602), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1597 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.254), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1604 = bf16[16,16]{1,0} dot(bf16[16,128]{0,1} %transpose.1603, bf16[128,16]{1,0} %reshape.1597), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1608 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.17 = bf16[2,8]{1,0} reduce(bf16[2,128,8]{2,1,0} %dot.1211, bf16[] %constant.1608), dimensions={1}, to_apply=%AddComputation.1610, metadata={op_type="aten__sum" op_name="aten__sum"}
  %reshape.1616 = bf16[16]{0} reshape(bf16[2,8]{1,0} %reduce.17), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_model.py" source_line=969}
  %reshape.1618 = bf16[1,2,128,8]{3,2,1,0} reshape(bf16[2,128,8]{2,1,0} %dot.1211), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1619 = bf16[1,128,2,8]{3,1,2,0} transpose(bf16[1,2,128,8]{3,2,1,0} %reshape.1618), dimensions={0,2,1,3}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1621 = bf16[128,16]{1,0} reshape(bf16[1,128,2,8]{3,1,2,0} %transpose.1619), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %transpose.1622 = bf16[16,128]{0,1} transpose(bf16[128,16]{1,0} %reshape.1621), dimensions={1,0}, metadata={op_type="aten__permute" op_name="aten__permute" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %reshape.1617 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %multiply.254), metadata={op_type="aten__view" op_name="aten__view" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %dot.1623 = bf16[16,16]{1,0} dot(bf16[16,128]{0,1} %transpose.1622, bf16[128,16]{1,0} %reshape.1617), lhs_contracting_dims={1}, rhs_contracting_dims={0}, metadata={op_type="aten__mm" op_name="aten__mm" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/neuronx_distributed/parallel_layers/layers.py" source_line=409}
  %constant.1624 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1630 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.1253, bf16[] %constant.1624), dimensions={0,1}, to_apply=%AddComputation.1626, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.102 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1630), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %multiply.1646 = bf16[1,128,16]{2,1,0} multiply(bf16[1,128,16]{2,1,0} %multiply.1253, bf16[1,128,16]{2,1,0} %get-tuple-element.231), metadata={op_type="aten__mul" op_name="aten__mul"}
  %constant.1647 = bf16[] constant(0), metadata={op_type="aten__sum" op_name="aten__sum"}
  %reduce.1653 = bf16[16]{0} reduce(bf16[1,128,16]{2,1,0} %multiply.1646, bf16[] %constant.1647), dimensions={0,1}, to_apply=%AddComputation.1649, metadata={op_type="aten__sum" op_name="aten__sum"}
  %custom-call.103 = bf16[16]{0} custom-call(bf16[16]{0} %reduce.1653), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.17 = bf16[] constant(0)
  %broadcast.32 = bf16[512,16]{1,0} broadcast(bf16[] %constant.17), dimensions={}
  %slice.1664 = s64[1,128]{1,0} slice(s64[1,512]{1,0} %p10.180), slice={[0:1], [0:128]}, metadata={op_type="xla__select" op_name="xla__select" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %reshape.10 = s64[128]{0} reshape(s64[1,128]{1,0} %slice.1664)
  %constant.18 = s64[] constant(0)
  %broadcast.33 = s64[128]{0} broadcast(s64[] %constant.18), dimensions={}
  %compare.6 = pred[128]{0} compare(s64[128]{0} %reshape.10, s64[128]{0} %broadcast.33), direction=GE
  %constant.19 = s64[] constant(512)
  %broadcast.34 = s64[128]{0} broadcast(s64[] %constant.19), dimensions={}
  %add.2 = s64[128]{0} add(s64[128]{0} %reshape.10, s64[128]{0} %broadcast.34)
  %select.4 = s64[128]{0} select(pred[128]{0} %compare.6, s64[128]{0} %reshape.10, s64[128]{0} %add.2)
  %reshape.11 = s64[128,1]{1,0} reshape(s64[128]{0} %select.4)
  %reshape.12 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %get-tuple-element.1264)
  %scatter.0 = bf16[512,16]{1,0} scatter(bf16[512,16]{1,0} %broadcast.32, s64[128,1]{1,0} %reshape.11, bf16[128,16]{1,0} %reshape.12), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1665, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.104 = bf16[512,16]{1,0} custom-call(bf16[512,16]{1,0} %scatter.0), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %constant.20 = bf16[] constant(0)
  %broadcast.35 = bf16[2,16]{1,0} broadcast(bf16[] %constant.20), dimensions={}
  %reshape.13 = s64[128]{0} reshape(s64[1,128]{1,0} %p12.201)
  %constant.21 = s64[] constant(0)
  %broadcast.36 = s64[128]{0} broadcast(s64[] %constant.21), dimensions={}
  %compare.7 = pred[128]{0} compare(s64[128]{0} %reshape.13, s64[128]{0} %broadcast.36), direction=GE
  %constant.22 = s64[] constant(2)
  %broadcast.37 = s64[128]{0} broadcast(s64[] %constant.22), dimensions={}
  %add.3 = s64[128]{0} add(s64[128]{0} %reshape.13, s64[128]{0} %broadcast.37)
  %select.5 = s64[128]{0} select(pred[128]{0} %compare.7, s64[128]{0} %reshape.13, s64[128]{0} %add.3)
  %reshape.14 = s64[128,1]{1,0} reshape(s64[128]{0} %select.5)
  %reshape.15 = bf16[128,16]{1,0} reshape(bf16[1,128,16]{2,1,0} %get-tuple-element.1264)
  %scatter.1 = bf16[2,16]{1,0} scatter(bf16[2,16]{1,0} %broadcast.35, s64[128,1]{1,0} %reshape.14, bf16[128,16]{1,0} %reshape.15), update_window_dims={1}, inserted_window_dims={0}, scatter_dims_to_operand_dims={0}, index_vector_dim=1, to_apply=%Int32PermissiveEmbeddingScatterCombiner.1694, metadata={op_type="xla___op_Int32PermissiveEmbeddingGradWeight" op_name="xla___op_Int32PermissiveEmbeddingGradWeight" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  %custom-call.105 = bf16[2,16]{1,0} custom-call(bf16[2,16]{1,0} %scatter.1), custom_call_target="AwsNeuronTransferWithStaticRing", api_version=API_VERSION_UNSPECIFIED, metadata={op_type="xla___op_TransferWithStaticRingTransfer" op_name="xla___op_TransferWithStaticRingTransfer" source_file="/home/ubuntu/analyze_hlo/lib/python3.8/site-packages/torch_xla/core/xla_op_registry.py" source_line=44}
  ROOT %tuple.1723 = (f32[1]{0}, bf16[1,128,30522]{2,1,0}, bf16[1,2]{1,0}, bf16[], bf16[], /*index=5*/bf16[2]{0}, bf16[2,16]{1,0}, bf16[30522]{0}, bf16[30522,16]{1,0}, bf16[16]{0}, /*index=10*/bf16[16]{0}, bf16[16]{0}, bf16[16,16]{1,0}, bf16[16]{0}, bf16[16,16]{1,0}, /*index=15*/bf16[16]{0}, bf16[16]{0}, bf16[16]{0}, bf16[16,4096]{1,0}, bf16[4096]{0}, /*index=20*/bf16[4096,16]{1,0}, bf16[16]{0}, bf16[16]{0}, bf16[16]{0}, bf16[16,16]{1,0}, /*index=25*/bf16[16]{0}, bf16[16,16]{1,0}, bf16[16]{0}, bf16[16,16]{1,0}, bf16[16]{0}, /*index=30*/bf16[16,16]{1,0}, bf16[16]{0}, bf16[16]{0}, bf16[512,16]{1,0}, bf16[2,16]{1,0}) tuple(f32[1]{0} %add.877, bf16[1,128,30522]{2,1,0} %add.804, bf16[1,2]{1,0} %reshape.440, bf16[] %add.871, bf16[] %add.871, /*index=5*/bf16[2]{0} %custom-call.83, bf16[2,16]{1,0} %custom-call.84, bf16[30522]{0} %custom-call.85, bf16[30522,16]{1,0} %add.1321, bf16[16]{0} %custom-call.88, /*index=10*/bf16[16]{0} %custom-call.89, bf16[16]{0} %custom-call.90, bf16[16,16]{1,0} %custom-call.91, bf16[16]{0} %custom-call.92, bf16[16,16]{1,0} %custom-call.93, /*index=15*/bf16[16]{0} %custom-call.94, bf16[16]{0} %custom-call.95, bf16[16]{0} %custom-call.96, bf16[16,4096]{1,0} %custom-call.97, bf16[4096]{0} %custom-call.98, /*index=20*/bf16[4096,16]{1,0} %custom-call.99, bf16[16]{0} %custom-call.100, bf16[16]{0} %custom-call.101, bf16[16]{0} %reduce.1555, bf16[16,16]{1,0} %dot.1564, /*index=25*/bf16[16]{0} %reshape.1576, bf16[16,16]{1,0} %dot.1583, bf16[16]{0} %reshape.1596, bf16[16,16]{1,0} %dot.1604, bf16[16]{0} %reshape.1616, /*index=30*/bf16[16,16]{1,0} %dot.1623, bf16[16]{0} %custom-call.102, bf16[16]{0} %custom-call.103, bf16[512,16]{1,0} %custom-call.104, bf16[2,16]{1,0} %custom-call.105), frontend_attributes={neff_output_names="output0,output1,output2,output3,output4,output5,output6,output7,output8,output9,output10,output11,output12,output13,output14,output15,output16,output17,output18,output19,output20,output21,output22,output23,output24,output25,output26,output27,output28,output29,output30,output31,output32,output33,output34"}
}


`

export default text;
