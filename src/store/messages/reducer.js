import { SEND_MESSAGE, DELETE_MESSAGE, GET_MESSAGES_ERROR, GET_MESSAGES_START, GET_MESSAGES_SUCCESS, CREATE_MESSAGE_ERROR, CREATE_MESSAGE_START, CREATE_MESSAGE_SUCCESS, REMOVE_MESSAGE_ERROR, REMOVE_MESSAGE_START, REMOVE_MESSAGE_SUCCESS } from "./types"
import { nanoid } from 'nanoid'
const initialState = {
    messages: {},
    error: null,
    errorCreate: null,
    errorRemove: null,
    pending: false,
    pendingCreate: false,
    pendingRemove: false
}

export const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [...(state.messages[action.payload.chatId] ?? []),
                    { ...action.payload.message, id: nanoid(), time: new Date() }
                    ]
                }
            }

        case DELETE_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]:
                        state.messages[action.payload.chatId].filter(message => message.id !== action.payload.messageId)
                }
            }

        case GET_MESSAGES_START:
            return { ...state, pending: true, error: null }
        case GET_MESSAGES_SUCCESS:
            return { ...state, pending: false, messages: action.payload }
        case GET_MESSAGES_ERROR:
            return { ...state, pending: true, error: action.payload }

        case CREATE_MESSAGE_START:
            return { ...state, pendingCreate: true, errorCreate: null }
        case CREATE_MESSAGE_SUCCESS:
            return {
                ...state, pendingCreate: false,
                messages: {
                    ...state.messages,
                    [action.payload.chatId]: [...(state.messages[action.payload.chatId] ?? []),
                    { ...action.payload.message }
                    ]
                }
            }
        case CREATE_MESSAGE_ERROR:
            return { ...state, pendingCreate: true, errorCreate: action.payload }

        case REMOVE_MESSAGE_START:
            return { ...state, pendingRemove: true, errorRemove: null }
        case REMOVE_MESSAGE_SUCCESS:
            return {
                ...state, pendingRemove: false, messages: {
                    ...state.messages,
                    [action.payload.chatId]:
                        state.messages[action.payload.chatId].filter(message => message.id !== action.payload.messageId)
                }
            }
        case REMOVE_MESSAGE_ERROR:
            return { ...state, pendingRemove: true, errorRemove: action.payload }

        default:
            return state
    }
}