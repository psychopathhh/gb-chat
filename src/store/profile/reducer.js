import { TOGGLE_VISIBLE_PROFILE, UPDATE_PROFILE } from "./types"
const initialState = {
    user: {
        name: 'John',
        surname: 'Smith',
        phone: '+35 545 78 41'
    },
    isVisibleProfile: true
}

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_VISIBLE_PROFILE:
            return { ...state, isVisibleProfile: !state.isVisibleProfile }

        case UPDATE_PROFILE:
            return { ...state, user: { ...action.payload } }

        default:
            return state
    }
}