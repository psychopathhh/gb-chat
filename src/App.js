import appStyle from './App.module.css';
import { Message } from './Message';



export function App() {
  const message = 'Hello World!'
  return (
    <div className={appStyle.App}>
      <header className={appStyle.AppHeader}>
        <Message message={message} />
      </header>
    </div>
  );
}

