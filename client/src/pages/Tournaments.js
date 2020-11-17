import React, { useState, useEffect }  from 'react';

const Tournaments = () => {
    const [state, setState] = useState({ tournaments: [] });

    useEffect(() => {
        fetch('/sql', { 
            method: "POST", 
            body: JSON.stringify({ sql: "SELECT * FROM Tournament" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(tournaments => setState({ tournaments }));
    }, [])

    return (
        <div>
            <h1>Tournaments</h1>
            <ul>
                {state.tournaments.map(t =>
                <li key={t.name}>{t.name}  - {t.organizer} - ${t.prize_pool}</li>)}
            </ul>
        </div>
    );
}

export default Tournaments;
