import { getConversationsError, getConversationsSuccess, getConverationsStart, createConverationsStart, createConversationsSuccess, createConversationsError, removeConverationsStart, removeConversationsError, removeConversationsSuccess } from "./action";

export const getConversations = () => async (dispatch, _, api) => {
    const conversations = []
    try {
        dispatch(getConverationsStart())
        const snapshot = await api.getConversationsApi()

        snapshot.forEach(snap => {
            conversations.push(snap.val())
        });
        dispatch(getConversationsSuccess(conversations))
    } catch (e) {
        dispatch(getConversationsError(e))
    }

}


export const createConversationByName = (conversation) => async (dispatch, _, api) => {

    try {
        dispatch(createConverationsStart())
        await api.createConversationApi(conversation)

        dispatch(createConversationsSuccess(conversation))
    } catch (e) {
        console.error(e)
        dispatch(createConversationsError(e))
    }

}


export const removeConversationByName = (conversation) => async (dispatch, _, api) => {

    try {
        dispatch(removeConverationsStart())
        await api.removeConversationApi(conversation)

        dispatch(removeConversationsSuccess(conversation))
    } catch (e) {
        console.error(e)
        dispatch(removeConversationsError(e))
    }

}
