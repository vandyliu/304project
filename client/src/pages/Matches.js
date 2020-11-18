import React, { useState, useEffect }  from 'react';

import ValTable from '../components/ValTable';

const Matches = () => {
    const [data, setData] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Matches" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(matches => {
                setData({
                    results: matches['results'],
                    columns: matches['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });
    }, [])

    return <ValTable tableName="Matches" results={data.results} columns={data.columns}></ValTable>;
}

export default Matches;
