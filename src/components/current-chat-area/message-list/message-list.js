import { Message } from './message'
export const MessageList = ({ messageList }) => {
    return (
        <div>
            {messageList.map((item, index) => (
                <Message key={index} text={item.text} author={item.author} time={item.time} />
            ))}
        </div>
    )
}