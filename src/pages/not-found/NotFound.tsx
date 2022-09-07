import { DASHBOARD_ROUTES } from "../../routes/main.routes";
import { Link } from "react-router-dom";
import React from "react";

export const NotFoundPage: React.FC = () => {
  return (
    <div className="not-found flex justify-center items-center w-full h-screen">
      <div className="text-center">
        <h3 className="mb-6 text-lg">Not found</h3>
        <button className="bg-white text-secondary py-[10px] px-4 rounded border">
          <Link to={DASHBOARD_ROUTES.HOME}>Home</Link>
        </button>
      </div>
    </div>
  );
};
