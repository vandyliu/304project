import React, { useState, useEffect } from 'react';

import ValTable from '../components/ValTable';

const Agents = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Agent" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(agents => setState({ results: agents['results'], columns: agents['columns'] }));
    }, [])

    return <ValTable tableName="Agents" results={state.results} columns={state.columns}></ValTable>;
}

export default Agents;
