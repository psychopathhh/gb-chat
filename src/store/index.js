import { createStore, combineReducers } from "redux";
import { profileReducer } from "./profile";
import { conversationsReducer } from './conversations'
import { messageReducer } from "./messages/reducer";

export const store = createStore(combineReducers({ profile: profileReducer, conversations: conversationsReducer, messages: messageReducer }))