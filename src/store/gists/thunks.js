import { getGistsError, getGistsSuccess, getGistsStart, getPersonalGistsError, getPersonalGistsSuccess, getPersonalGistsStart } from "./action"
export const getGists = (page) => async (dispatch, _, { publicApi }) => {
    try {
        dispatch(getGistsStart())
        const { data } = await publicApi.getPublicApi(page)
        dispatch(getGistsSuccess(data))
    } catch (e) {
        dispatch(getGistsError(e))
    }
}

export const getPersonalGists = (name) => async (dispatch, _, { personalGistsApi }) => {
    try {
        dispatch(getPersonalGistsStart())
        const { data } = await personalGistsApi.searchGistsByNameApi(name)
        dispatch(getPersonalGistsSuccess(data))
    }
    catch (e) {
        dispatch(getPersonalGistsError(e))
    }
}