import React, { useEffect, useState, useRef, useContext, useCallback, useMemo } from 'react'
import { MessageList } from './message-list'
import { Input, SendIcon } from './styles';
import { InputAdornment } from '@mui/material';
import { useParams } from 'react-router-dom';
import { ThemeContext } from '../../theme-context';
import { useSelector, useDispatch } from 'react-redux/es/exports';
import { messagesSelector, sendMessageWithBot } from '../../store/messages'

export const CurrentChatArea = () => {
    const { chatId } = useParams()
    const selector = useMemo(() => messagesSelector(chatId), [chatId])
    const dispatch = useDispatch()
    const messages = useSelector(selector)
    const [value, setValue] = useState('');
    const ref = useRef()
    const send = useCallback((message = '', author = 'User') => {
        if (message) {
            dispatch(sendMessageWithBot(chatId, { message, author }))
        }
        if (author === 'User') setValue('');
    }, [chatId, dispatch]);
    const handlePressInput = ({ code }) => {
        if (code === 'Enter') {
            send(value)
        }
    }
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                left: 0,
                behavior: 'smooth'
            })
        }
    }, [messages])

    const { theme } = useContext(ThemeContext)

    return (
        <>
            <div ref={ref}>
                <MessageList messageList={messages} chatId={chatId} />
            </div>

            <Input style={{ backgroundColor: `${theme.theme.secondary}`, color: `${theme.theme.contrastText}` }}
                disableUnderline={true}
                autoFocus={true}
                fullWidth
                placeholder="Message"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handlePressInput}
                endAdornment={
                    <InputAdornment position='end'>
                        {value && <SendIcon onClick={() => send(value)} />}
                    </InputAdornment>
                }
            />

        </>
    );
}