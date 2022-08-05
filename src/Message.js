import messageStyle from './Message.module.css'

export const Message = ({ message }) => {
    return (
        <p className={messageStyle.Message}>{message}</p>
    )
}