import { SendingTime } from './SendingTime';
import { Msg } from '../../styles'
// import { css, cx } from '@emotion/css'

export function Message({ text, author, time = new Date() }) {
  const isUser = author === 'User'
  return (
    <div>
      <Msg isUser={isUser}>
        <p>{text}</p>
        <SendingTime isUser={isUser} time={time} />
      </Msg>
    </div >
  );
};
