import { Message } from './message'
export const MessageList = ({ messageList, chatId }) => {
    return (
        <>
            {messageList.map((message, index) => (
                <Message chatId={chatId} key={index} message={message} />
            ))}
        </>
    )
}