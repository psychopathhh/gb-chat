import { SendingTime } from './SendingTime';
import { useTheme } from '@mui/material/styles';
import { Msg } from '../../styles'
// import { css, cx } from '@emotion/css'

export function Message({ text, author, time }) {
  const theme = useTheme()
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
