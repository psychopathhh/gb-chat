import { SEND_MESSAGE, DELETE_MESSAGE } from "./types"
import { nanoid } from 'nanoid'
const initialState = {
    messages: {}
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

        default:
            return state
    }
}