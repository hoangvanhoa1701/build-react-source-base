import React, { useEffect } from "react";
import { getAccountDetail, isAuthenticated } from "../data/api/auth.api";
import { useDispatch } from "react-redux";
import { saveAccount } from "../store/accountSlide";
import { Navigate } from "react-router-dom";
import { ACCOUNT_ROUTES } from "./main.routes";

type Props = {
  children: JSX.Element;
};

export const RequireAuthLayout: React.FC<Props> = ({ children }) => {
  const authed = isAuthenticated();
  const dispatch = useDispatch();

  useEffect(() => {
    const handleFetchAccountDetail = async () => {
      try {
        const accountInfo = await getAccountDetail();
        dispatch(saveAccount(accountInfo));
      } catch (error) {
        console.error("Error: ", error);
      }
    };

    if (authed) {
      void handleFetchAccountDetail();
    }
  }, [dispatch, authed]);

  return authed ? children : <Navigate to={ACCOUNT_ROUTES.LOGIN} replace />;
};
