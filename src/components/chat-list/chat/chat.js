import React, { memo, useContext } from 'react'
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import { Typography } from '@mui/material';
import { ThemeContext } from '../../../theme-context';
import { messagesSelector } from '../../../store/messages';
import { nanoid } from 'nanoid'
import { useSelector } from 'react-redux'
import { RemoveBtn } from '../../remove-btn/RemoveBtn';

function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
}

function stringAvatar(name) {
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: `${name.split(' ')[0][0]}`,
    };
}


export const Chat = memo(({ chat, selected, deleteConversationByName }) => {
    const messages = useSelector(messagesSelector(chat))
    const { theme } = useContext(ThemeContext)
    const lastMsg = messages.length !== 0 ? messages[messages.length - 1] : {
        author: '',
        message: 'No messages yet',
        time: new Date(),
        id: nanoid()
    }
    return (
        <ListItemButton selected={selected} sx={{ flexWrap: 'wrap', padding: '10px', display: 'flex' }}>
            <ListItemIcon>
                <Avatar {...stringAvatar(chat)} />
            </ListItemIcon>
            <ListItemText sx={{ color: `${theme.theme.contrastText}` }} primary={chat} />
            <RemoveBtn f={(e) => deleteConversationByName(chat, e)} />
            <ListItemText sx={{ width: '100%' }} primary={<Typography color='rgb(87, 87, 87)' noWrap>{lastMsg.message}</Typography>} />
        </ListItemButton>
    )
})