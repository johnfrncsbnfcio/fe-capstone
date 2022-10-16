import React from 'react'
import styles from './nav.module.scss'
import CustomIcon from '../custom-icon.component/CustomIcon'
import { NavLink } from 'react-router-dom'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Controller from '../controller.component/Controller'

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.navUl}>
                <NavLink to="/" end className={styles.navLink}><CustomIcon icon={'FaHome'} text={'Home'}/></NavLink>
                <NavLink to="/heroes" end className={styles.navLink}><CustomIcon icon={'FaTh'} text={'Heroes'}/></NavLink>
            </ul>
        </nav>
    )
}

export default Nav