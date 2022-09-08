import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ThemeContext } from '../../theme-context'
import { Switch } from '@mui/material'
import './main-header.css'
const menuList = [
    {
        title: 'Profile',
        to: 'profile'
    },
    {
        title: 'Chat',
        to: 'chat'
    },
    {
        title: 'Gists',
        to: 'gists'
    }
]

export const MainHeader = () => {
    const { theme, themeSetter } = useContext(ThemeContext)
    return (
        <nav className='menu'>
            <NavLink className='logo' to='/'>Talky</NavLink>
            <ul className='menu-list'>
                {menuList.map((item) => <li key={item.title}><NavLink className='menu-list-item' to={item.to}>{item.title}</NavLink></li>)}
                <Switch defaultChecked color={theme.secondary} onClick={() => { themeSetter(`${theme.name === 'light' ? 'dark' : 'light'}`) }} />
            </ul>
        </nav>
    )
}
