function parseSQLGetQuery(table, query) {
    let FROM_clause = `FROM ${table}`;
    const join = query["JOIN"];
    if (join) {
        const joinFields = join.replace(/[\[\]]/g, "").split(",");
        const fromFields = [table];
        for (let i = 0; i < joinFields.length; i++) {
            let curr = joinFields[i];
            let index = 2;
            while (fromFields.includes(curr)) {
                curr = `${joinFields[i]} ${joinFields[i]}${index}`
                index++;
            }
            fromFields.push(curr);
        }
        FROM_clause =`FROM ${fromFields.join(", ")}`;
    }
    delete query["JOIN"];

    let SELECT_clause = "SELECT *";
    const select = query["SELECT"];
    if (select) {
        const selectFields = select.replace(/[\[\]]/g, "");
        SELECT_clause = `SELECT ${selectFields}`;
    }
    delete query["SELECT"];

    let WHERE_clause = "";
    const queryEntries = Object.entries(query);
    if (queryEntries.length !== 0) {
        WHERE_clause = " WHERE ";
        for (const [field, value] of queryEntries) {
            WHERE_clause += `AND ${field} = ${value} `
        } 
        WHERE_clause = WHERE_clause.replace("AND ", "");
    }

    return `${SELECT_clause} ${FROM_clause}${WHERE_clause}`;
}

function parseSQLPostQuery(table, body, orderedFields) {
    const values = orderedFields.map((field) => {
        const value = body[field];
        return typeof value === "string" ? `"${value}"` : value;
    }).join(", ");
    return `INSERT INTO ${table} VALUES (${values})`;
}

function queryHasJoinParam(query) {
    return query["JOIN"] ? true : false;
}

module.exports = {
    parseSQLGetQuery,
    parseSQLPostQuery,
    queryHasJoinParam
}