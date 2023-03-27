import { configureStore, combineReducers, getDefaultMiddleware } from "@reduxjs/toolkit";
import { employeesStateReducer } from "./employeeSlice";
import {
      persistStore,
      persistReducer,
      FLUSH,
      REHYDRATE,
      PAUSE,
      PERSIST,
      PURGE,
      REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
      employees: employeesStateReducer
})

const persistConfig = {
      key: 'root',
      storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
      reducer: persistedReducer,
      middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                  serializableCheck: {
                        ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                  },
            }),

});

export const persistor = persistStore(store)