import React from 'react'
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

export const RemoveBtn = ({ f }) => {
    return (
        <button style={{ background: 'transparent', borderRadius: '50%', width: '30px', height: '30px', display: 'flex', justifyContent: 'center', border: 0, outline: 'none', margin: '0 0 0 auto' }} onClick={f}><HighlightOffOutlinedIcon sx={{ fontSize: 'bold' }} /></button>
    )
}