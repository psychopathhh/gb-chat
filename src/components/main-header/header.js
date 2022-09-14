import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { signOut } from 'firebase/auth'
import { auth } from '../../api/firebase'
import { ThemeContext } from '../../theme-context'
import { Switch } from '@mui/material'
import './main-header.css'
import { RemoveBtn } from '../remove-btn/RemoveBtn'

const menuListWithoutSession = [
    {
        title: 'Login',
        to: 'login'
    },
    {
        title: 'SignUp',
        to: 'signup'
    }
]

const menuListWithSession = [
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
    },

]

export const MainHeader = ({ email }) => {
    const { theme, themeSetter } = useContext(ThemeContext)
    return (
        <nav className='menu'>
            <NavLink className='logo' to='/'>Talky</NavLink>
            {email && <div>
                <h1>{email}</h1>
                <RemoveBtn f={() => signOut(auth)} >Exit</RemoveBtn>
            </div>}
            <ul className='menu-list'>
                {email && menuListWithSession.map((item) => <li key={item.title}><NavLink className='menu-list-item' to={item.to}>{item.title}</NavLink></li>)}
                {!email && menuListWithoutSession.map((item) => <li key={item.title}><NavLink className='menu-list-item' to={item.to}>{item.title}</NavLink></li>)}
                <Switch defaultChecked color={theme.secondary} onClick={() => { themeSetter(`${theme.name === 'light' ? 'dark' : 'light'}`) }} />
            </ul>
        </nav>
    )
}
