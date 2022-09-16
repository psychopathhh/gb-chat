import { GET_GISTS_ERROR, GET_GISTS_START, GET_GISTS_SUCCESS, GET_PERSONALGISTS_ERROR, GET_PERSONALGISTS_START, GET_PERSONALGISTS_SUCCESS } from "./types"

export const getGistsStart = () => ({ type: GET_GISTS_START })
export const getGistsSuccess = (gists) => ({ type: GET_GISTS_SUCCESS, payload: gists })
export const getGistsError = (error) => ({ type: GET_GISTS_ERROR, payload: error })

export const getPersonalGistsStart = () => ({ type: GET_PERSONALGISTS_START })
export const getPersonalGistsSuccess = (gistsBySearch) => ({ type: GET_PERSONALGISTS_SUCCESS, payload: gistsBySearch })
export const getPersonalGistsError = (errorBySearch) => ({ type: GET_PERSONALGISTS_ERROR, payload: errorBySearch })