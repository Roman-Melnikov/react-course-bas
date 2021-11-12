import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'
import { chatsReducer } from "./Chats";
import { messagesReducer } from "./Messages";
import { profileReducer } from "./Profile";
import { catRandomReducer } from "./CatRandom/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  profile: profileReducer,
  chats: chatsReducer,
  messages: messagesReducer,
  catRandom: catRandomReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(
  persistedReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
