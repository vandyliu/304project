import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';
import FindPlayerPanel from '../components/FindPlayerPanel';

const Players = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    const fetchData = (searchParams) => {
        let whereClause = "";
        if (searchParams) {
            const { rank, kills, assists, deaths, headshotPercentage } = searchParams;
            const whereClauses = [];
            if (rank === "Radiant") {
                whereClauses.push("p_rank = 'Radiant'")
            }
            if (rank !== "All" && rank !== "Radiant") {
                whereClauses.push(`(p_rank = "${rank} 1" OR p_rank = "${rank} 2" OR p_rank = "${rank} 3")`)
            }
            if (kills !== "") {
                whereClauses.push(`kills > ${kills}`)
            }
            if (assists !== "") {
                whereClauses.push(`assists > ${assists}`)
            }
            if (deaths !== "") {
                whereClauses.push(`deaths > ${deaths}`)
            }
            if (headshotPercentage !== "") {
                whereClauses.push(`headshot_percentage > ${headshotPercentage}`)
            }
            whereClause = whereClauses.length === 0 ? "" : ` WHERE ${whereClauses.join(" AND ")}`;
        }

        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `SELECT * FROM Player${whereClause}` }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(players => setState({ results: players['results'], columns: players['columns'] }));
    }

    const handleDelete = (player) => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: `DELETE FROM Player WHERE player_id = "${player.player_id}"`}),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => {
            fetchData();
        })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <>
        <FindPlayerPanel handleSubmit={fetchData} />
        <ValTable tableName="Players" results={state.results} columns={state.columns} onRowDelete={handleDelete}></ValTable>
        </>
    );
}

export default Players;
