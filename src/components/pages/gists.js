import React, { useEffect, useState, useContext } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { gistsSelector } from '../../store/gists/selector'
import { getGists, getPersonalGists } from '../../store/gists'
import { Input } from '../current-chat-area/styles'
import SearchIcon from '@mui/icons-material/Search';
import { InputAdornment } from '@mui/material';
import { ThemeContext } from '../../theme-context';

const buttons = Array.from({ length: 10 }).map((_, index) => index + 1)

export const GistsPage = () => {
    const { gists, pending, error, errorBySearch, pendingBySearch, gistsBySearch } = useSelector(gistsSelector)
    const dispatch = useDispatch()
    const [value, setValue] = useState('');
    const { theme } = useContext(ThemeContext)
    useEffect(() => {
        dispatch(getPersonalGists())
        dispatch(getGists())
    }, [dispatch])

    if (error || errorBySearch) {
        return <h1>error...</h1>
    }

    return (
        <><h1>GistsPage</h1>
            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 20px' }}>
                <div>
                    {buttons.map((btn, index) => {
                        return (
                            <button onClick={() => dispatch(getGists(btn))} key={index}>{btn}</button>
                        )
                    })}
                    <hr />

                    {pending ? <h1>pending...</h1> : gists.map((gist, index) => {
                        return (
                            <h2 key={index}>
                                {gist.owner.login}
                            </h2>
                        )
                    })}
                </div>
                <div>
                    <Input style={{ backgroundColor: `${theme.theme.secondary}`, color: `${theme.theme.contrastText}`, border: `1px dashed ${theme.theme.contrastText}` }}
                        disableUnderline={true}
                        fullWidth
                        onKeyPress={(e) => e.key === 'Enter' ? dispatch(getPersonalGists(e.target.value)) : (args) => args}
                        placeholder="Type an user..."
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        endAdornment={
                            <InputAdornment position='end'>
                                {value && <SearchIcon style={{ color: `${theme.theme.contrastText}` }} onClick={() => dispatch(getPersonalGists(value))} />}
                            </InputAdornment>
                        }
                    />
                    {pendingBySearch ? <h1>pending...</h1> : gistsBySearch.map((gist, index) => {
                        return (
                            <h2 key={index}>
                                {gist.url}
                            </h2>
                        )
                    })}


                </div>
            </div>
        </>
    )
}