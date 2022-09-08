import React, { useCallback } from 'react';
import List from '@mui/material/List';
import { Chat } from './chat'
import { Link, useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { deleteConversation, createConversation, conversationSelector } from '../../store/conversations';
export function ChatList() {
    const { chatId } = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const conversations = useSelector(conversationSelector)
    const deleteConversationByName = useCallback((name, e) => {
        e.preventDefault()
        dispatch(deleteConversation(name))
        navigate('../')
    }, [dispatch, navigate])
    const createConversationByName = () => {
        const name = prompt('Chat name: ')
        const isValidName = !conversations.includes(name)
        if (name && isValidName) {
            dispatch(createConversation(name))
        }
    }
    return (
        <List sx={{ display: 'flex', flexDirection: 'column', padding: 0 }}>
            <button onClick={createConversationByName}>create new chat</button>
            {conversations.map((chat) => (

                <Link key={chat} style={{ textDecoration: 'none' }} to={`/chat/${chat}`}><Chat deleteConversationByName={deleteConversationByName} selected={chat === chatId} chat={chat} /></Link>

            ))}
        </List>
    )
}
