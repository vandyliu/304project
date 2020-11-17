import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const Players = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Player" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(players => setState({ results: players['results'], columns: players['columns'] }));
    }, [])

    return <ValTable tableName="Players" results={state.results} columns={state.columns}></ValTable>;
}

export default Players;
