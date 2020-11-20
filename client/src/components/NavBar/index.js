import React from 'react';
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu
} from './NavBarElements';
import valImage from './valorant.png';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src={valImage} alt="valorant logo" width="75" height="75" />
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to="/Agents" activeStyle>
                        Agents
                    </NavLink>
                    <NavLink to="/Tournaments" activeStyle>
                        Tournaments
                    </NavLink>
                    <NavLink to="/Teams" activeStyle>
                        Teams
                    </NavLink>
                    <NavLink to="/Players" activeStyle>
                        Players
                    </NavLink>
                    <NavLink to="/Matches" activeStyle>
                        Matches
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    )
}

export default NavBar;