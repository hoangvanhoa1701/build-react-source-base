import React from "react";
import "./Sidebar.scss";
import IconBuilding from "../../assets/icon-components/building";
import { DASHBOARD_ROUTES } from "../../routes/main.routes";
import { Link, NavLink } from "react-router-dom";
import { AdminIcon } from "../../icons";

export const Sidebar: React.FC = () => {
  const activateClassLink = ({ isActive }: { isActive: boolean }) => {
    if (isActive) {
      return "text-[#f6b26b]";
    } else {
      return "text-white";
    }
  };

  return (
    <div
      id="menu"
      className="fixed left-0 top-0 z-20 bg-[#444333] w-[64px] h-full bg-[#2c3f54] text-center pt-[10px] box-border"
    >
      <Link to={DASHBOARD_ROUTES.HOME}>
        <AdminIcon />
        {/*<img width="24px" src="" alt="logoCompact" />*/}
      </Link>

      <div className="pt-[60px]">
        <div className="mb-[40px]">
          <NavLink to={DASHBOARD_ROUTES.HOME} className={activateClassLink}>
            <IconBuilding className="cursor-pointer w-[24px]" />
          </NavLink>
        </div>
      </div>
    </div>
  );
};
