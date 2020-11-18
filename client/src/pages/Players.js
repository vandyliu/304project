import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const Players = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    const fetchData = () => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Player" }),
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

    return <ValTable tableName="Players" results={state.results} columns={state.columns} onRowDelete={handleDelete}></ValTable>;
}

export default Players;
