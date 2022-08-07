import messageStyle from './Message.module.css';
export const SendingTime = ({ isUser, time }) => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const h = time.getHours()
    const m = time.getMinutes()
    const classesForAuthor = `${messageStyle.messageTime} ${isUser ? messageStyle.messageTimeUser : messageStyle.messageTimeOthers}`
    return <span className={classesForAuthor}>{`${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}, ${days[time.getDay()]}`}</span>
}