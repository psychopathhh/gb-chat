import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { CurrentChatArea, Layout, ChatList } from '../../components';
import { getConversations } from '../../store/conversations';
import { getMessages } from '../../store/messages';
export const ChatPage = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        const listener = ({ code }) => {
            if (code === 'Escape') {
                navigate('/chat')
            }
        }
        document.addEventListener('keydown', listener)
        return () => {
            document.removeEventListener('keydown', listener)
        }
    }, [navigate])

    useEffect(() => {
        dispatch(getMessages())
        dispatch(getConversations())
    }, [dispatch])
    return (
        <Routes>
            <Route path='/' element={<Layout currentChatArea={<h1 style={{ color: '#3e3e3e', margin: 'auto', fontFamily: 'sans-serif', fontSize: 'calc(2vw + 2vh + 2vmin)' }}>Choose or create a chat</h1>} chats={<ChatList />} />} />
            <Route exact path=':chatId' element={<Layout currentChatArea={<CurrentChatArea />} chats={<ChatList />} />} />
        </Routes>

    )
}