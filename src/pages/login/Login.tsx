import React, { useEffect } from "react";
import { DASHBOARD_ROUTES } from "../../routes/main.routes";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.scss";
import { fetchRefreshToken, setSessionStorageToken } from "../../data/api/auth.api";
import queryString from "query-string";
import { TokenInfo } from "../../data/models/auth.model";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = queryString.parse(location.search);
  const { token } = queryParams;

  useEffect(() => {
    const handleCheckAccount = async () => {
      const data: TokenInfo | undefined = await fetchRefreshToken();
      if (data?.access_token) {
        navigate(DASHBOARD_ROUTES.HOME);
      }
    };

    if (token) {
      setSessionStorageToken({
        refresh_token: token as string,
        access_token: ""
      });

      void handleCheckAccount();
    }
  }, [location, navigate]);

  return (
    <div id="login" className="bg-[#2c3f54] w-full h-screen p-[50px] text-white text-center">
      <div className="title bg-no-repeat text-[28px] leading-[38px] font-normal ml-[50px] mb-[40px]">
        Login
      </div>
    </div>
  );
};
