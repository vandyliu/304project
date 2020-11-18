import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const Tournaments = () => {
    const [data, setData] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Tournament" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(tournaments => {
                setData({
                    results: tournaments['results'],
                    columns: tournaments['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });
    }, [])

    return <ValTable tableName="Tournaments" results={data.results} columns={data.columns}></ValTable>;
}

export default Tournaments;
