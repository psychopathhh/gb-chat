import { sendMessage, SEND_MESSAGE } from "../messages";

export const botMessage = store => next => action => {
    if (action.type === SEND_MESSAGE && action.payload.message.author === 'User') {
        setTimeout(() => {
            store.dispatch(sendMessage(action.payload.chatId,
                {
                    author: action.payload.chatId,
                    message: `I am ${action.payload.chatId}`
                }))
        }, 2000)
    }
    return next(action)
}