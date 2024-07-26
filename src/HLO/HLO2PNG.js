import fs from 'fs';
import { exec } from 'child_process';
import extractDataType from "./utils.js";
import text from "./pbtxt/gpt2_tp=1.js"

function parseHloToDot(text) {
    const entryIndex = text.indexOf("ENTRY");
    if (entryIndex === -1) {
        return "No ENTRY found in the provided text.";
    }
    const entryText = text.substring(entryIndex);

    const lines = entryText.split('\n');
    let labels = [];
    let mappings = [];

    lines.forEach(line => {
        // add node label
        const labelContent = extractDataType(line);
        if (labelContent !== '[]') {
            labels = labels.concat(`\t${labelContent}`);
        }

        // add graph edges
        const regex = /%([\w.-]+)/g;
        let match;
        const variables = [];

        while ((match = regex.exec(line)) !== null) {
            variables.push(match[1]);
        }
        let results = [];
        if (variables.length > 1) {
            const target = `"${variables[0]}"`;
            for (let i = 1; i < variables.length; i++) {
                const current = `"${variables[i]}"`;
                results.push(`\t${current} -> ${target};`);
            }
            mappings = mappings.concat(results.join('\n'));
        }
    });

    const result = `digraph HloModule {\n${labels.join('\n')} \n ${mappings.join('\n')}\n}`;
    return result;
}

const input = text;

const dotOutput = parseHloToDot(input);

const dotFile = 'gpt2_tp=1.dot';
fs.writeFile(dotFile, dotOutput, (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});

exec(`dot -Tpng ${dotFile} -o ${dotFile.replace('.dot', '.png')}`, (error, stdout, stderr) => {
    if (error) {
        console.error(`exec error: ${error}`);
        return;
    }
    if (stderr) {
        console.error(`stderr: ${stderr}`);
    }
});
