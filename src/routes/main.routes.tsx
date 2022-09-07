import { Route, Routes, Navigate } from "react-router-dom";
import { isAuthenticated } from "../data/api/auth.api";
import { LoginPage } from "../pages/login/Login";
import { Main } from "../layouts/Main/Main";
import { NotFoundPage } from "../pages/not-found/NotFound";
import React from "react";
import { RequireAuthLayout } from "./require-auth.layout";
import { HomePage } from "../pages/home/Home";

export const ACCOUNT_ROUTES = {
  LOGIN: "/login"
};

export const DASHBOARD_ROUTES = {
  DASHBOARD: "/",

  HOME: "/home",
  USERS: "/users"
};

const RoutesMain = () => {
  return (
    <>
      <Routes>
        <Route
          path={ACCOUNT_ROUTES.LOGIN}
          element={
            isAuthenticated() ? <Navigate to={DASHBOARD_ROUTES.DASHBOARD} replace /> : <LoginPage />
          }
        />

        <Route
          path={DASHBOARD_ROUTES.DASHBOARD}
          element={
            <RequireAuthLayout>
              <Main />
            </RequireAuthLayout>
          }
        >
          <Route path={"/"} element={<Navigate to={DASHBOARD_ROUTES.HOME} replace />} />
          <Route path={DASHBOARD_ROUTES.HOME} element={<HomePage />} />
        </Route>

        <Route path="/" element={<Navigate replace to={ACCOUNT_ROUTES.LOGIN} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};
export default RoutesMain;
