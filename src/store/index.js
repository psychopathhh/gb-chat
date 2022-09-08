import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from "./profile";
import { conversationsReducer } from './conversations'
import { messageReducer } from "./messages";
import { logger, timeScheduler, botMessage } from "./middlewares";
import { gistsReducer } from './gists'
import { getPublicApi, searchGistsByNameApi } from "../api/gists";

const publicApi = { getPublicApi }
const personalGistsApi = { searchGistsByNameApi }

const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['gists']
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        conversations: conversationsReducer,
        messages: messageReducer,
        gists: gistsReducer
    })
)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(logger, timeScheduler, botMessage, thunk.withExtraArgument({ publicApi, personalGistsApi }))
    )

)

export const persistor = persistStore(store)