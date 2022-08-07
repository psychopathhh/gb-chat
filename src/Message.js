import messageStyle from './Message.module.css';
import { SendingTime } from './SendingTime';

export const Message = ({ text, author, time }) => {
  const isUser = author === 'User'
  const classesForMsg = `${messageStyle.message} ${isUser ? messageStyle.messageUser : messageStyle.messageOthers
    }`;
  const classesForAuthor = `${messageStyle.messageAuthor} ${isUser ? messageStyle.messageAuthorUser : messageStyle.messageAuthorOthers}`
  return (
    <div className={messageStyle.messageWrapper}>
      <span className={classesForAuthor}>{`${isUser ? 'Me' : author}`}</span>
      <div className={classesForMsg}>
        <p>{text}</p>
        <SendingTime isUser={isUser} time={time} />
      </div>
    </div>
  );
};
