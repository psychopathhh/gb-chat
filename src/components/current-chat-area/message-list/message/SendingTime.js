import { Time } from '../../styles'

export const SendingTime = ({ isUser, time }) => {
    time = new Date(time)
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    const h = time.getHours()
    const m = time.getMinutes()
    return <Time isUser={isUser}>{`${h < 10 ? '0' + h : h}:${m < 10 ? '0' + m : m}, ${days[time.getDay()]}`}</Time>
}