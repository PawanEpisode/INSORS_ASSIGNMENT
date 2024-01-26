import React from "react";

const ContainerHeader = ({text, fontsize}) => {
  return (
    <div className="container mx-auto">
      <div className="container-row py-0 px-8">
        <div className="container-heading w-full">
          <h1 className={`heading-text px-0 text-center 
          ${fontsize === 'small' ? "text-3xl": "text-[52px]"} font-extrabold uppercase 
          py-12 w-full mb-4 border-b border-[#b5a7a7]`}>
            {text}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default ContainerHeader;
