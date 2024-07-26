function parseXLA() {
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
