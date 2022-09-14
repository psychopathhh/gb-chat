import { SendingTime } from './SendingTime';
import { Msg } from '../../styles'
import { useContext } from 'react';
import { ThemeContext } from '../../../../theme-context';
import { deleteMessage } from '../../../../store/messages/action';
import { useDispatch } from 'react-redux';
import { RemoveBtn } from '../../../remove-btn/RemoveBtn';
import { removeMessageById } from '../../../../store/messages';

export function Message({ message, chatId }) {
  const isUser = (message.author === 'User')
  const dispatch = useDispatch()
  const { theme } = useContext(ThemeContext)
  return (
    <Msg style={{ backgroundColor: `${isUser ? theme.theme.primary : theme.theme.secondary}` }} isUser={isUser} theme={theme}>
      <RemoveBtn f={() => dispatch(removeMessageById(chatId, message.id))} />
      <p style={{ color: `${theme.theme.contrastText}` }}>{message.message}</p>
      <SendingTime isUser={isUser} time={message.time} />
    </Msg>
  );
};
