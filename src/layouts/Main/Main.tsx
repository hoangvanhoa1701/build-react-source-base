import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../Sidebar/Sidebar";
import { Header } from "../Header/Header";

export const Main: React.FC = () => (
  <>
    <div id="main">
      <Sidebar />
      <Header />

      <Outlet />
    </div>
  </>
);
