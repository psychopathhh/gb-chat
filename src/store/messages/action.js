import {
    SEND_MESSAGE, DELETE_MESSAGE, GET_MESSAGES_ERROR, GET_MESSAGES_START, GET_MESSAGES_SUCCESS, CREATE_MESSAGE_ERROR, CREATE_MESSAGE_START, CREATE_MESSAGE_SUCCESS, REMOVE_MESSAGE_ERROR, REMOVE_MESSAGE_START, REMOVE_MESSAGE_SUCCESS
} from "./types";

export const sendMessage = (chatId, message) => {
    return { type: SEND_MESSAGE, payload: { chatId, message }, meta: { delay: 100 } }
}
export const deleteMessage = (chatId, messageId) => {
    return { type: DELETE_MESSAGE, payload: { chatId, messageId } }
}

export const getMessagesStart = () => ({ type: GET_MESSAGES_START })
export const getMessagesSuccess = (messages) => ({ type: GET_MESSAGES_SUCCESS, payload: messages })
export const getMessagesError = (error) => ({ type: GET_MESSAGES_ERROR, payload: error })

export const createMessageStart = () => ({ type: CREATE_MESSAGE_START })
export const createMessageSuccess = (message, chatId) => ({ type: CREATE_MESSAGE_SUCCESS, payload: { message, chatId } })
export const createMessageError = (error) => ({ type: CREATE_MESSAGE_ERROR, payload: error })

export const removeMessageStart = () => ({ type: REMOVE_MESSAGE_START })
export const removeMessageSuccess = (chatId, messageId) => ({ type: REMOVE_MESSAGE_SUCCESS, payload: { chatId, messageId } })
export const removeMessageError = (error) => ({ type: REMOVE_MESSAGE_ERROR, payload: error })