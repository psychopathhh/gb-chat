import { useSelector, useDispatch } from "react-redux"
import { css } from '@emotion/css'
import { useContext } from "react"
import { ThemeContext } from "../../theme-context"
import { Checkbox } from "@mui/material"
import { toggleVisibleProfile } from "../../store/profile"
import { ProfileForm } from "../profile-form"

export const ProfilePage = () => {
    const data = useSelector((state) => state.profile)
    const { theme } = useContext(ThemeContext)
    const dispatch = useDispatch()
    return (
        <>
            <Checkbox onChange={() => dispatch(toggleVisibleProfile())} defaultChecked color="success" />
            {data.isVisibleProfile ? <div className={css({
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
                {Object.keys(data.user).map(id =>
                (<h1 key={id}><span className={css({
                    textTransform: 'capitalize',
                    fontWeight: 700,
                    fontSize: 28,

                })}>{id}: </span>{data.user[id]}</h1>)
                )}
            </div> : <></>}

            <ProfileForm {...data.user} />
        </>
    )
}