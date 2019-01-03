import React from 'react';
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <div className="navbar-fixed">
            <nav className="nav-wrapper blue darken-3">
                <div className="container">
                    <a href="/" className="brand-logo">Logo-place</a>
                    <ul className="right">
                        <li><NavLink to="/">Baza główna</NavLink></li>
                        <li><NavLink to="/editor">Dodaj sprzęt</NavLink></li>
                        <li><NavLink to="/help">Pomoc</NavLink></li>
                    </ul>  
                </div>
            </nav>
        </div>
        
    )
}
export default Nav