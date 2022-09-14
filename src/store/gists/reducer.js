import { GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS, GET_PERSONALGISTS_ERROR, GET_PERSONALGISTS_START, GET_PERSONALGISTS_SUCCESS } from "./types"


const initialState = {
    gists: [],
    pending: false,
    error: null,

    gistsBySearch: [],
    pendingBySearch: false,
    errorBySearch: null,
}

export const gistsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_GISTS_START:
            return { ...state, pending: true, error: null }
        case GET_GISTS_SUCCESS:
            return { ...state, pending: false, gists: action.payload }
        case GET_GISTS_ERROR:
            return { ...state, pending: true, error: action.payload }


        case GET_PERSONALGISTS_START:
            return { ...state, pendingBySearch: true, errorBySearch: null }
        case GET_PERSONALGISTS_SUCCESS:
            return { ...state, pendingBySearch: false, gistsBySearch: action.payload }
        case GET_PERSONALGISTS_ERROR:
            return { ...state, pendingBySearch: true, errorBySearch: action.payload }
        default:
            return state
    }
}