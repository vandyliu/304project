import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const Matches = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Matches" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(matches => setState({ results: matches['results'], columns: matches['columns'] }));
    }, [])

    return <ValTable tableName="Matches" results={state.results} columns={state.columns}></ValTable>;
}

export default Matches;
