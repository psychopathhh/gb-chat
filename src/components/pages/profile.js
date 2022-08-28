import { useSelector, useDispatch } from "react-redux"
import { css } from '@emotion/css'
import { useContext } from "react"
import { ThemeContext } from "../../theme-context"
import { Checkbox } from "@mui/material"
import { setVisible } from "../../store/profile"

export const ProfilePage = () => {
    const data = useSelector((state) => state.profile)
    const { theme } = useContext(ThemeContext)
    const dispatch = useDispatch()
    return (
        <>
            <Checkbox onChange={() => {
                dispatch(setVisible())
                console.log(data.profileVisibility)
            }} defaultChecked color="success" />
            {data.profileVisibility ? <div className={css({
                margin: '0 auto',
                width: '70%',
                textAlign: 'center',
                backgroundColor: `${theme.theme.primary}`,
                color: `${theme.theme.contrastText}`,
                fontSize: 22,
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                padding: '15px',
                boxSizing: 'border-box',
                borderRadius: '15px'
            })}>
                <h1><span className={css({
                    fontWeight: 700,
                    fontSize: 28,

                })}>Name:</span> {data.user.name}</h1>
                <h1><span className={css({
                    fontWeight: 700,
                    fontSize: 28,

                })}>Surname:</span>  {data.user.surname}</h1>
            </div> : <></>}</>
    )
}