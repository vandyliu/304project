import React, { useState, useEffect }  from 'react';

const Players = () => {
    const [state, setState] = useState({ players: [] });

    useEffect(() => {
        fetch('/sql', { 
            method: "POST", 
            body: JSON.stringify({ sql: "SELECT * FROM Player" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(players => setState({ players }));
    }, [])

    return (
        <div>
            <h1>Players</h1>
            <ul>
                {state.players.map(p =>
                <li key={p.player_id}>{p.player_id}  - {p.p_rank}</li>)}
            </ul>
        </div>
    );
}

export default Players;
