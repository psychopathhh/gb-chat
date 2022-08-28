import { VISIBILITY } from "./types"
const initialState = {
    user: {
        name: 'John',
        surname: 'Smith'
    },
    profileVisibility: true
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case VISIBILITY:
            return { ...state, profileVisibility: !state.profileVisibility }
        default:
            return state
    }
}