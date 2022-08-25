import React, { useEffect, useState, useRef } from 'react'
import { MessageList } from './message-list'
import { Input, SendIcon } from './styles';
import { InputAdornment } from '@mui/material';
import { chats } from '../../constants';
import { useParams } from 'react-router-dom';

export const CurrentChatArea = () => {
    const { chatId } = useParams()
    let curChat = chats[chatId].messages
    const [messageList, setMessageList] = useState(curChat);
    const [value, setValue] = useState('');
    const ref = useRef()
    const sendMessage = (value = '', author = 'User', time = new Date()) => {
        if (value) {
            const newMsg = {
                text: value,
                author: author,
                time: time
            }
            setMessageList([...messageList, newMsg])
            curChat.push(newMsg)
        }
        if (author === 'User') setValue('');
    };
    const handlePressInput = ({ code }) => {
        if (code === 'Enter') {
            sendMessage(value, 'User', new Date())
        }
    }
    useEffect(() => {
        curChat = chats[chatId].messages
        setMessageList(curChat)
    }, [chatId])
    useEffect(() => {
        if (ref.current) {
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                left: 0,
                behavior: 'smooth'
            })
        }
    }, [messageList])

    useEffect(() => {
        let timerId = null
        if (
            messageList.length &&
            messageList[messageList.length - 1].author === 'User'
        ) {
            timerId = setTimeout(
                () => {
                    sendMessage(`I am ${chats[chatId].name}`, 'Robot', new Date())
                },
                1500
            );
        }
        return () => {
            clearTimeout(timerId)
        }
    }, [messageList]);

    return (
        <>
            <div ref={ref}>
                <MessageList messageList={messageList} />
            </div>

            <Input
                disableUnderline={true}
                autoFocus={true}
                fullWidth
                placeholder="Message"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onKeyPress={handlePressInput}
                endAdornment={
                    <InputAdornment position='end'>
                        {value && <SendIcon onClick={() => sendMessage(value, 'User', new Date())} />}
                    </InputAdornment>
                }
            />

        </>
    );
}