import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as AuthSession from "expo-auth-session";
import { RootState } from "../../store";
import AsyncStorage from "@react-native-community/async-storage";

// Types
type AuthState = {
  token: string | null;
  user: any | null;
  loading: boolean;
  error: any | null;
  expires_in: string | null;
  expirationDate: Date | null;
};

type AuthResponse = {
  type: string;
  params: {
    access_token: string;
    expires_in: string;
  };
};

// Initial State
const initialState: AuthState = {
  token: null,
  user: null,
  loading: false,
  error: null,
  expires_in: null,
  expirationDate: null,
};

// Reducers
const reducers = {
  setToken: (state: AuthState, action: PayloadAction<string>) => {
    state.token = action.payload;
  },
  setUser: (state: AuthState, action: PayloadAction<any>) => {
    state.user = action.payload;
  },
  setIsFetching: (state: AuthState, action: PayloadAction<boolean>) => {
    state.loading = action.payload;
  },
  setExpiresIn: (state: AuthState, action: PayloadAction<string>) => {
    state.expires_in = action.payload;
    if (action.payload) {
      const expiresInMs = parseInt(action.payload) * 1000;
      const expirationDate = new Date(Date.now() + expiresInMs);
      state.expirationDate = expirationDate;
      console.log("expirationDate", expirationDate);
    } else {
      state.expirationDate = null;
    }
  },
};

// Async Thunk
export const login = createAsyncThunk(
  "auth/login",
  async (navigation: any, { getState, dispatch }) => {
    const client_id =
      "1024418370603-g973a49ud46q35nm1a53lrivb19frqec.apps.googleusercontent.com";

    const redirect_uri = "https://auth.expo.io/@dumoresco/easyList";

    const response_type = "token";

    // pega o nome e o email do usuario
    const scope = encodeURI("profile email");

    const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=${response_type}&scope=${scope}`;

    const { type, params } = (await AuthSession.startAsync({
      authUrl: url,
    })) as AuthResponse;
    console.log(type, params);
    if (type === "success") {
      dispatch(actions.setToken(params.access_token));
      dispatch(actions.setUser(params.access_token));
      dispatch(actions.setExpiresIn(params.expires_in));
      navigation.navigate("Home", {
        token: params.access_token,
      });

      return params.access_token;
    }
    return null;
  }
);
// Slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.token = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// cria o logout
export const logout = () => (dispatch: any) => {
  dispatch(actions.setToken(""));
  dispatch(actions.setUser(null));
  dispatch(actions.setExpiresIn(""));
};

// Export Actions/Reducer
export const actions = { ...authSlice.actions, login, logout };
export const reducer = authSlice.reducer;

// Selectors
export const selectToken = (state: RootState) => state.auth.token;
export const selectUser = (state: RootState) => state.auth.user;
export const selectLoading = (state: RootState) => state.auth.loading;
export const selectError = (state: RootState) => state.auth.error;
