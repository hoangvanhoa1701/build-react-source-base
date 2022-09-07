import React from "react";
import { useNavigate } from "react-router-dom";
import "./TitlePage.scss";
import { useSelector } from "react-redux";
import { selectNavigateLinkHeader } from "../../store/navigateSlide";

interface Props {
  title: string;
  subtitle?: string;
  hasBack?: boolean;
  backLink?: string;
}
export const TitlePage: React.FC<Props> = ({ title, subtitle, hasBack, backLink }) => {
  const navigate = useNavigate();
  const navigateLinkHeader = useSelector(selectNavigateLinkHeader);

  const renderBackIcon = () => {
    if (hasBack) {
      return <div className="back-icon cursor-pointer" onClick={() => navigateTo()} />;
    }
    return null;
  };

  const navigateTo = () => {
    if (backLink) {
      navigate(backLink);
    } else {
      if (navigateLinkHeader.fromLink) {
        navigate(navigateLinkHeader.fromLink);
      } else {
        navigate("/", { replace: true }); // the current entry in the history stack will be replaced with the new one with { replace: true }
      }
    }
  };

  return (
    <>
      <div className="TitlePage">
        <div className="title flex">
          {renderBackIcon()}
          <div className="title back min-w-[300px] text-[28px] text-[#0f2328] font-medium relative mb-[40px]">
            <div>{title}</div>
            <div className="subtitle">{subtitle}</div>
          </div>
        </div>
      </div>
    </>
  );
};
