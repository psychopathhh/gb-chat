import { useEffect, useState } from 'react';
import appStyle from './App.module.css';
import { Message } from './Message';
const setMessage = (value = '', author = 'User') => {
  return {
    text: value,
    author: author,
  };
};

export function App() {
  const [messageList, setMessageList] = useState([]);
  // const [buttonClicks, setButtonClicks] = useState(0);
  const [value, setValue] = useState('');
  useEffect(() => {
    if (
      messageList.length > 0 &&
      messageList[messageList.length - 1].author != 'Robot'
    ) {
      setTimeout(
        () =>
          setMessageList([...messageList, setMessage('I am a robot', 'Robot')]),
        1500
      );
    }
  }, [messageList]);

  return (
    <div className={appStyle.App}>
      <div>
        {messageList.map((item) => (
          <Message text={item.text} author={item.author} />
        ))}
      </div>
      <div className={appStyle.areaForWriting}>
        <input
          className={appStyle.input}
          placeholder="Message"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button
          className={appStyle.sendBtn}
          onClick={() => {
            if (value !== '') {
              setMessageList([...messageList, setMessage(value)]);
              // setButtonClicks(buttonClicks + 1);
              setValue('');
            }
          }}
        ></button>
      </div>
    </div>
  );
}
