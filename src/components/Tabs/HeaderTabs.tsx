import React from "react";
import { Link } from "react-router-dom";
import { Tab } from "../../interface/tab.interface";

interface Props {
  tabs: Tab[];
}
export const HeaderTabs: React.FC<Props> = ({ tabs }) => {
  const renderTabList = () => {
    return tabs.map((tab) => {
      if (tab.link) {
        return (
          <React.Fragment key={tab.title}>
            <Link
              to={tab.link}
              className={
                "tab float-left cursor-pointer text-[#333] no-underline mr-[40px] " +
                renderClassSelected(tab.selected)
              }
            >
              {tab.title}
            </Link>
          </React.Fragment>
        );
      }
      return <React.Fragment key={tab.title} />;
    });
  };

  const renderClassSelected = (selected: boolean | undefined) => {
    if (selected) {
      return "selected";
    }
  };

  return <div className="tabs overflow-auto">{renderTabList()}</div>;
};
