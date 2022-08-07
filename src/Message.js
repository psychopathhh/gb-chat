import messageStyle from './Message.module.css';

export const Message = ({ text, author, time }) => {
  const classes = `${messageStyle.message} ${
    author === 'User' ? messageStyle.messageUser : messageStyle.messageOthers
  }`;
  return (
    <div className={messageStyle.messageWrapper}>
      <div className={classes}>
        {/* <span className={messageStyle.MessageAuthor}>{author}</span> */}
        <span className={messageStyle.MessageText}>{text}</span>
      </div>
    </div>
  );
};
