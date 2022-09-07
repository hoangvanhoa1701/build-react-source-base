import "./LoadingIcon.scss";
import React from "react";

interface Props {
  color?: string;
}

export const LoadingIcon: React.FC<Props> = ({ color }) => {
  return (
    <div className="stage">
      <div className={`dot-pulse ${color ? "white" : ""}`} />
    </div>
  );
};
