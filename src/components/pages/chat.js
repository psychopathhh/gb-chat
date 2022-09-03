import { Routes, Route } from 'react-router-dom'
import { CurrentChatArea, Layout, ChatList } from '../../components';
export const ChatPage = () => {
    return (
        <Routes>
            <Route path='/' element={<Layout currentChatArea={<h1 style={{ color: '#3e3e3e', margin: 'auto', fontFamily: 'sans-serif', fontSize: 'calc(2vw + 2vh + 2vmin)' }}>Choose or create a chat</h1>} chats={<ChatList />} />} />
            <Route exact path=':chatId' element={<Layout currentChatArea={<CurrentChatArea />} chats={<ChatList />} />} />
        </Routes>

    )
}