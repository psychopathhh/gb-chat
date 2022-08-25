import React, { useState } from 'react';
import List from '@mui/material/List';
import { Chat } from './chat'
import { chats } from '../../constants';
import { NavLink, useParams } from 'react-router-dom';
export function ChatList() {
    const { chatId } = useParams()
    const [chatList] = useState(chats)
    return (
        <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
            {Object.keys(chatList).map((id, i) => (

                <NavLink key={i} style={{ textDecoration: 'none' }} to={`/chat/${id}`}><Chat selected={id === chatId} chat={chatList[id]} /></NavLink>

            ))}
        </List>
    )
}
