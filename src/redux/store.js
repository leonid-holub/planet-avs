import { configureStore } from "@reduxjs/toolkit";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';
  import {languageSlice} from './language/language-slice.js';



  const languagePersistedConfig = {
    key: 'language',
    storage,
  };

const languagePersistedReducer = persistReducer(languagePersistedConfig, languageSlice.reducer);

export const store = configureStore({
    reducer: {
      language: languagePersistedReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });

  export const persistor = persistStore(store);