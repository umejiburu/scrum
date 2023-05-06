import React, { useState } from "react";
import Ingredient from "./Ingredient";
import Preparation from "./Preparation";
import ContReviews from "./ContReviews";
import ReactPlayer from "react-player";

const tabs = [
  { id: 1, name: "Ingredient", content: <Ingredient /> },
  { id: 2, name: "Preparation", content: <Preparation /> },
  {
    id: 3,
    name: "Videos",
    content: <ReactPlayer url="https://youtu.be/0exWBGoe-3A" controls={true} />,
  },
  { id: 4, name: "Reviews", content: <ContReviews /> },
];

const Tab = ({ activeTab, tab, onClick }) => {
  const isActive = activeTab === tab?.id;

  return (
    <div
      className={`p-4
        border-b-2
        border-transparent
        cursor-pointer
       ${isActive ? "bg-red-200 border-indigo-500" : "border-transparent"}`}
      onClick={() => onClick(tab?.id)}
    >
      {tab?.name}
    </div>
  );
};

const TabContent = ({ activeTab }) => {
  const tab = tabs?.find((tab) => tab?.id === activeTab);

  return <div className="p-4">{tab?.content}</div>;
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div>
      <div className="flex">
        {tabs.map((tab) => (
          <Tab
            key={tab?.id}
            tab={tab}
            activeTab={activeTab}
            onClick={setActiveTab}
          />
        ))}
      </div>
      <TabContent activeTab={activeTab} />
    </div>
  );
};

export default Tabs;
