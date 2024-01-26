import React from "react";
import ContainerHeader from "./ContainerHeader";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="flex flex-col gap-6">
      <ContainerHeader text={'My Account'} fontsize={'big'}/>
      <MainContainer />
    </div>
  );
};

export default Body;
