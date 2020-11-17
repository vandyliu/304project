import React, { useState, useEffect }  from 'react';

const Matches = () => {
    const [state, setState] = useState({ matches: [] });

    useEffect(() => {
        fetch('/sql', { 
            method: "POST", 
            body: JSON.stringify({ sql: "SELECT * FROM Matches" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(matches => setState({ matches }));
    }, [])

    return (
        <div>
            <h1>Matches</h1>
            <ul>
                {state.matches.map(m =>
                <li key={m.match_id}>{m.map}  - {m.gamemode}</li>)}
            </ul>
        </div>
    );
}

export default Matches;
