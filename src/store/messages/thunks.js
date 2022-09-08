import { sendMessage } from "./action"

export const sendMessageWithBot = (chatId, message) => (dispatch) => {
    dispatch(sendMessage(chatId, message))
    if (message.author === 'User') {
        setTimeout(() => {
            dispatch(
                sendMessage(chatId, { author: 'Bot', message: 'hello from thunk' })
            )
        }, 1000)
    }
}