import React, { useEffect, useState, useRef } from 'react'
import { MessageList } from './message-list'
import { Input, SendIcon } from './styles';
import { InputAdornment } from '@mui/material';
import { Header } from './message-list'

export const CurrentChatArea = () => {
    const [messageList, setMessageList] = useState([]);
    const [value, setValue] = useState('');


    const ref = useRef()
    const sendMessage = (value = '', author = 'User', time = new Date()) => {

        if (value) {
            setMessageList([...messageList, {
                text: value,
                author: author,
                time: time
            }]);
        }
        if (author === 'User') setValue('');
    };
    const handlePressInput = ({ code }) => {
        if (code === 'Enter') {
            sendMessage(value, 'User', new Date())
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
    }, [messageList])

    useEffect(() => {
        let timerId = null
        if (
            messageList.length &&
            messageList[messageList.length - 1].author === 'User'
        ) {
            timerId = setTimeout(
                () => {
                    sendMessage('I am a robot', 'Robot', new Date())
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
                <Header />
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