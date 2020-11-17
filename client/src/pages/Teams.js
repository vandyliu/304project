import React, { useState, useEffect }  from 'react';

const Teams = () => {
    const [state, setState] = useState({ teams: [] });

    useEffect(() => {
        fetch('/sql', { 
            method: "POST", 
            body: JSON.stringify({ sql: "SELECT * FROM Team" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(teams => setState({ teams }));
    }, [])

    return (
        <div>
            <h1>Teams</h1>
            <ul>
                {state.teams.map(t =>
                <li key={t.name}>{t.name ?? "<No name>"}</li>)}
            </ul>
        </div>
    );
}

export default Teams;
