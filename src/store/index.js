import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { profileReducer } from "./profile";
import { conversationsReducer } from './conversations'
import { messageReducer } from "./messages/reducer";
import { logger, timeScheduler, botMessage } from "./middlewares";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        conversations: conversationsReducer,
        messages: messageReducer
    })
)

export const store = createStore(
    persistedReducer,
    composeWithDevTools(
        applyMiddleware(logger, timeScheduler, botMessage, thunk)
    )

)

export const persistor = persistStore(store)