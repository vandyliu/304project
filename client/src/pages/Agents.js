import React, { useState, useEffect } from 'react';

import ValTable from '../components/ValTable';

const Agents = () => {
    const [data, setData] = useState({ results: [], columns: [] });

    useEffect(() => {
        fetch('/sql', {
            method: "POST",
            body: JSON.stringify({ sql: "SELECT * FROM Agent" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
            .then(agents => {
                setData({
                    results: agents['results'],
                    columns: agents['columns'].map((c) => ({ key: c, displayName: c }))
                })
            });
    }, [])

    return <ValTable tableName="Agents" results={data.results} columns={data.columns}></ValTable>;
}

export default Agents;
