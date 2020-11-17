import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const Teams = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Team" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(teams => setState({ results: teams['results'], columns: teams['columns'] }));
    }, [])

    return <ValTable tableName="Teams" results={state.results} columns={state.columns}></ValTable>;
}

export default Teams;
