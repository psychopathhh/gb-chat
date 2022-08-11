import styles from "./layout.module.css";

export function Layout({ chats, currentChatArea }) {
    return (
        <div className={styles.content}>
            <div className={styles.chats}>{chats}</div>
            <div className={styles.currentChatArea}>{currentChatArea}</div>
        </div>

    );
}