import { getMessagesError, getMessagesStart, getMessagesSuccess, createMessageSuccess, createMessageError, createMessageStart, removeMessageError, removeMessageStart, removeMessageSuccess } from "./action"

export const sendMessageWithBot = (chatId) => async (dispatch, _, api) => {
    const botResponse = { author: 'Bot', message: 'hello from thunk' }
    try {
        dispatch(createMessageStart())
        const newMessage = await api.createMessageApi(botResponse, chatId)
        setTimeout(() => {
            dispatch(
                createMessageSuccess(newMessage, chatId)
            )
        }, 1000)
        // dispatch(createMessageSuccess(newMessage))
    } catch (e) {
        dispatch(createMessageError(e))
    }
}
export const getMessages = () => async (dispatch, _, api) => {
    const messages = {}
    try {
        dispatch(getMessagesStart());

        const snapshot = await api.getMessagesApi();

        snapshot.forEach((snap) => {
            messages[snap.key] = Object.values(snap.val());
        });

        dispatch(getMessagesSuccess(messages));
    } catch (e) {
        dispatch(getMessagesError(e));
    }
};


export const sendMessageFb = (message, chatId) => async (dispatch, _, api) => {
    try {
        dispatch(createMessageStart())
        const newMessage = await api.createMessageApi(message, chatId)

        dispatch(sendMessageWithBot(chatId))
        dispatch(createMessageSuccess(newMessage, chatId))
    } catch (e) {
        dispatch(createMessageError(e))
    }

}

export const removeMessageById = (chatId, messageId) => async (dispatch, _, api) => {
    const messages = {}
    const apiMessages = {}
    try {

        const snapshot = await api.getMessagesApi();

        snapshot.forEach((snap) => {
            messages[snap.key] = Object.values(snap.val());
        });
        snapshot.forEach((snap) => {
            apiMessages[snap.key] = snap.val()
        });
        const removingId = Object.keys(apiMessages[chatId]).filter((key) => apiMessages[chatId][key].id === messageId)
        dispatch(removeMessageStart())
        await api.deleteMessageApi(removingId, chatId)

        dispatch(removeMessageSuccess(chatId, messageId))
    } catch (e) {
        console.error(e)
        dispatch(removeMessageError(e))
    }

}