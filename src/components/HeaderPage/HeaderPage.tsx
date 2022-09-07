import React from "react";
import "./HeaderPage.scss";
import { TitlePage } from "../TitlePage/TitlePage";
import { HeaderTabs } from "../Tabs/HeaderTabs";
import { Tab } from "../../interface/tab.interface";
import { Title } from "../../interface/title-page.interface";

interface Props {
  title: Title;
  tabs: Tab[];
}
export const HeaderPage: React.FC<Props> = ({ title, tabs }) => {
  return (
    <>
      <div id="header-page" className="relative bg-[#f8f9fb] z-10 pl-[140px]">
        <TitlePage {...title} />

        {tabs.length > 0 && <HeaderTabs tabs={tabs} />}
      </div>
    </>
  );
};
