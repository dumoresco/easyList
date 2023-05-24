import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage"; // Import Reducers
import { reducer as authReducer } from "./reducers/auth/auth.reducer";

// Persist Configuration
const authPersistConfig = {
  key: "auth",
  storage: AsyncStorage,
  whitelist: ["token", "expires_in"],
};
// Set Reducers

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);

const reducers = {
  auth: persistedAuthReducer,
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
