import { child, get, ref, push, remove } from "firebase/database"
import { database } from "./firebase"
import { nanoid } from 'nanoid'

export const getMessagesApi = () => {
    return get(child(ref(database), 'messages'))
}

export const createMessageApi = async (message, chatId) => {
    const newMessage = { ...message, id: nanoid(), time: String(new Date()) }
    await push(child(ref(database), `messages/${chatId}`), newMessage)
    return newMessage
}

export const deleteMessageApi = async (removingId, chatId) => {
    remove(child(ref(database), `messages/${chatId}/${removingId}`))
}