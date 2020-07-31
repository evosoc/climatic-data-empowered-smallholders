import { createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from "./rootReducer";
import {AsyncStorage} from "react-native";
import {persistReducer, persistStore} from "redux-persist";

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    blacklist: ['loading','error']
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = createStore(persistedReducer, (applyMiddleware( ReduxThunk, )));
const persistor = persistStore(store);

export {
    store,
    persistor
};
