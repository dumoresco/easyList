import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import Reducers
import { reducer as authReducer } from "./reducers/auth/auth.reducer";
import { reducer as listReducer } from "./reducers/list/list.reducer";

// Persist Configuration
const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["token", "expires_in", "expirationDate"],
};

const listPersistConfig = {
  key: "list",
  storage: AsyncStorage,
  whitelist: ["list"],
};

// Set Reducers

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedListReducer = persistReducer(listPersistConfig, listReducer);

const reducers = {
  auth: persistedAuthReducer,
  list: persistedListReducer,
};

// Create Store
const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export { store, persistor };
