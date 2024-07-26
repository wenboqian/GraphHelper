function extractDataType(line) {
    const regex = /%(\w+\.\d+)\s*=\s*([^{}]+)\s*\{/;
    const match = line.match(regex);

    if (match && match.length >= 3) {
        const variableName = match[1];
        const typePart = match[2].trim();

        return `"${variableName}" [label="${variableName} \\n ${typePart}"];`;
    } else {
        return "[]";
    }
}

// const textLine = "%broadcast.154 = f32[4096,4]{1,0} broadcast(f32[4096]{0} %custom-call.141), dimensions={0}";
//
// const result = extractDataType(textLine);
// console.log(result);

export default extractDataType;
