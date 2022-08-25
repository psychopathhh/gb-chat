import React from 'react'
import { NavLink } from 'react-router-dom'
import './main-header.css'
const menuList = [
    {
        title: 'Profile',
        to: 'profile'
    },
    {
        title: 'Chat',
        to: 'chat'
    }
]

export const MainHeader = () => {
    return (
        <nav className='menu'>
            <NavLink className='logo' to='/'>Talky</NavLink>
            <ul className='menu-list'>
                {menuList.map((item) => <li key={item.title}><NavLink className='menu-list-item' to={item.to}>{item.title}</NavLink></li>)}
            </ul>
        </nav>
    )
}
