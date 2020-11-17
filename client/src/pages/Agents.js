import React, { useState, useEffect }  from 'react';

const Agents = () => {
    const [state, setState] = useState({ agents: [] });

    useEffect(() => {
        fetch('/sql', { 
            method: "POST", 
            body: JSON.stringify({ sql: "SELECT * FROM Agent" }),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json())
        .then(agents => setState({ agents }));
    }, [])

    return (
        <div>
         <h1>Agents</h1>
            <ul>
                {state.agents.map(agent =>
                <li key={agent.name}>{agent.name}: {agent.type}</li>)}
            </ul>
        </div>
    );
}

export default Agents;
