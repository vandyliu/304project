function parseSQLRequestQuery(table, query, aliases) {
    let SELECT_clause = "SELECT *";
    const select = query["SELECT"];
    if (select) {
        const queryFields = select.replace(/[\[\]]/g, "").split(",");
        const selectFields = queryFields.map((field) => {
            return aliases[field] || field;
        })
        SELECT_clause = `SELECT ${selectFields}`;
    }
    delete query["SELECT"];

    let WHERE_clause = "";
    const queryEntries = Object.entries(query);
    if (queryEntries.length !== 0) {
        WHERE_clause = " WHERE ";
        for (const [field, value] of queryEntries) {
            WHERE_clause += `AND ${aliases[field] || field} = ${value} `
        } 
        WHERE_clause = WHERE_clause.replace("AND ", "");
    }

    return `${SELECT_clause} FROM ${table}${WHERE_clause}`;
}


module.exports = {
    parseSQLRequestQuery
}