function parseRequestQuery(query) {
    const select = query["SELECT"];
    const SELECT_clause = select ? `SELECT ${select.replace(/[\[\]]/g, "")}` : "SELECT *";
    delete query["SELECT"];

    let WHERE_clause = "";
    const queryEntries = Object.entries(query);
    if (queryEntries.length !== 0) {
        WHERE_clause = "WHERE ";
        for (const [field, value] of queryEntries) {
            WHERE_clause += `AND ${field} = ${value} `
        } 
        WHERE_clause = WHERE_clause.replace("AND ", "");
    }

    return {
        select: SELECT_clause,
        where: WHERE_clause
    }
}


module.exports = {
    parseRequestQuery
}