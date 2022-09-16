import { getGistsError, getGistsSuccess, getGistsStart, getPersonalGistsError, getPersonalGistsSuccess, getPersonalGistsStart } from "./action"
export const getGists = (page) => async (dispatch, _, api) => {
    try {
        dispatch(getGistsStart())
        const { data } = await api.getPublicApi(page)
        dispatch(getGistsSuccess(data))
    } catch (e) {
        dispatch(getGistsError(e))
    }
}

export const getPersonalGists = (name) => async (dispatch, _, api) => {
    try {
        dispatch(getPersonalGistsStart())
        const { data } = await api.searchGistsByNameApi(name)
        dispatch(getPersonalGistsSuccess(data))
    }
    catch (e) {
        dispatch(getPersonalGistsError(e))
    }
}