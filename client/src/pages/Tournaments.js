import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const Tournaments = () => {
    const [state, setState] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Tournament" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(tournaments => setState({ results: tournaments['results'], columns: tournaments['columns'] }));
    }, [])

    return <ValTable tableName="Tournaments" results={state.results} columns={state.columns}></ValTable>;
}

export default Tournaments;
