import { SEND_MESSAGE, DELETE_MESSAGE } from "./types";

export const sendMessage = (chatId, message) => {
    return { type: SEND_MESSAGE, payload: { chatId, message }, meta: { delay: 100 } }
}
export const deleteMessage = (chatId, messageId) => {
    return { type: DELETE_MESSAGE, payload: { chatId, messageId } }
}