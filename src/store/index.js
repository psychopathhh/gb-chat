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
import { createConversationApi, getConversationsApi, removeConversationApi } from "../api/conversations";
import { createMessageApi, getMessagesApi, deleteMessageApi } from "../api/messages";

const api = { getPublicApi, searchGistsByNameApi, createConversationApi, getConversationsApi, removeConversationApi, getMessagesApi, createMessageApi, deleteMessageApi }

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['profile']
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
        applyMiddleware(logger, timeScheduler, botMessage, thunk.withExtraArgument(api))
    )

)

export const persistor = persistStore(store)