import fs from 'fs';

const text = `
[('custom-call.90', 'custom-call.90'), ('add.877', 'add.877'), ('custom-call.98', 'custom-call.98'), ('custom-call.89', 'custom-call.89'), ('add.871', 'add.872'), ('custom-call.84', 'custom-call.84'), ('custom-call.85', 'custom-call.85'), ('custom-call.99', 'custom-call.99'), ('custom-call.94', 'custom-call.94'), ('reshape.440', 'reshape.522'), ('custom-call.83', 'custom-call.83'), ('custom-call.103', 'custom-call.103'), ('custom-call.93', 'custom-call.93'), ('add.804', 'add.805'), ('custom-call.88', 'custom-call.88'), ('custom-call.91', 'custom-call.91'), ('custom-call.101', 'custom-call.101'), ('custom-call.92', 'custom-call.92'), ('custom-call.104', 'custom-call.104'), ('custom-call.100', 'custom-call.100'), ('add.1321', 'add.1357'), ('custom-call.97', 'custom-call.97'), ('custom-call.105', 'custom-call.105'), ('reduce.1555', 'reduce.1591'), ('custom-call.95', 'custom-call.95'), ('custom-call.102', 'custom-call.102'), ('custom-call.96', 'custom-call.96'), ('dot.1623', 'dot.1600'), ('dot.1564', 'dot.1659'), ('dot.1604', 'dot.1640'), ('dot.1583', 'dot.1619'), ('reshape.1596', 'reduce.1630'), ('reshape.1596', 'reduce.1610'), ('reshape.1596', 'reduce.1650'), ('reshape.1616', 'reduce.1630'), ('reshape.1616', 'reduce.1610'), ('reshape.1616', 'reduce.1650'), ('reshape.1576', 'reduce.1630'), ('reshape.1576', 'reduce.1610'), ('reshape.1576', 'reduce.1650')]
`

const lines = text.replace(/\), /g, '),\n');

// 将结果写入文件
fs.writeFile('output.txt', lines, (err) => {
    if (err) {
        console.error('写入文件时出错:', err);
    } else {
        console.log('文件写入成功！');
    }
});
