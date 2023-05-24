import { useDispatch, useSelector } from "react-redux";
import { ThunkDispatch, ThunkAction } from "redux-thunk";
import {
  actions,
  selectExpirationDate,
  selectExpiresIn,
  selectLoading,
  selectToken,
} from "../redux/reducers/auth/auth.reducer";
import { RootState } from "../redux/store";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { UserInfo } from "../types";

export const useAuth = () => {
  const [userInfo, setUserInfo] = useState<UserInfo>();
  const token = useSelector(selectToken);
  const isFetching = useSelector(selectLoading);
  const expirationDate = useSelector(selectExpirationDate);

  // desloga o usuário quando o token expira
  useEffect(() => {
    if (expirationDate) {
      const expirationDateParsed = new Date(expirationDate);
      const currentDate = new Date();

      if (expirationDateParsed <= currentDate) {
        dispatch(actions.logout());
      }
    }
  }, [expirationDate]);

  const navigation = useNavigation<any>();

  const dispatch: ThunkDispatch<RootState, unknown, any> = useDispatch();
  const handleLogin = () => {
    dispatch(actions.login(navigation));
  };

  const isAuth = !!token;

  const loadUserInformation = async () => {
    const response = await fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userInfo = await response.json();

    return setUserInfo(userInfo);
  };

  const handleLogout = () => {
    dispatch(actions.logout());
  };

  return {
    handleLogin,
    handleLogout,
    isAuth,
    token,
    userInfo,
    loadUserInformation,
    isFetching,
  };
};
