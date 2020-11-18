import React from 'react';
import {
    Nav, 
    NavLink, 
    Bars, 
    NavMenu, 
    NavBtn, 
    NavBtnLink 
} from './NavBarElements';

const NavBar = () => {
    return (
        <>
            <Nav>
                <NavLink to="/">
                    <img src="https://img.icons8.com/plasticine/2x/valorant.png" width="75" height="75" />
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