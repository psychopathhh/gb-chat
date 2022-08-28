import { SendingTime } from './SendingTime';
import { Msg } from '../../styles'
import { useContext } from 'react';
import { ThemeContext } from '../../../../theme-context';

export function Message({ text, author, time = new Date() }) {
  const isUser = author === 'User'
  const { theme } = useContext(ThemeContext)
  return (
    <div>
      <Msg style={{ backgroundColor: `${isUser ? theme.theme.primary : theme.theme.secondary}` }} isUser={isUser} theme={theme}>
        <p style={{ color: `${theme.theme.contrastText}` }}>{text}</p>
        <SendingTime isUser={isUser} time={time} />
      </Msg>
    </div >
  );
};
