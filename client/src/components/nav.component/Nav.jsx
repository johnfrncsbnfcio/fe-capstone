import React from 'react'
import styles from './nav.module.scss'
import { } from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <NavLink to="/" end className="navlink">Welcome</NavLink>
                <NavLink to="/heroes" end className="navlink">Heroes</NavLink>
            </ul>
        </nav>
    )
}

export default Nav