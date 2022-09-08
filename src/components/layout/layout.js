import styles from "./layout.module.css";
import { ThemeContext } from '../../theme-context';
import { useContext } from "react";

export function Layout({ chats, currentChatArea }) {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={styles.content}>
            <div style={{ backgroundColor: `${theme.theme.bgChatList}` }} className={styles.chats}>{chats}</div>
            <div style={{ backgroundColor: `${theme.theme.bgChat}` }} className={styles.currentChatArea}>{currentChatArea}</div>
        </div>

    );
}