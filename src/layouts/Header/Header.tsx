import React from "react";
import "./Header.scss";

export const Header: React.FC = () => (
  <>
    <div id="header-account" className="relative bg-[#f8f9fb] z-10">
      <div
        id="account"
        className="nv-container h-[50px] flex justify-end items-center bg-[#f8f9fb] pt-[10px] text-xs"
      >
        Header
      </div>
    </div>
  </>
);
