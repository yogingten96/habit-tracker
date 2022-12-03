import { createStore } from "@reduxjs/toolkit";
import reducers from "./reducer";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'


// const persistConfig = {
//     key: 'root',
//     storage,
//   }


  // const persistedReducer = persistReducer(persistConfig, reducers)

export const store = createStore(
    reducers,
    {},window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)



// export const store = configureStore({
//     reducer: persistedReducer,
//     devTools: process.env.NODE_ENV !== 'production',
   
//   })
//   export const persistor = persistStore(store)