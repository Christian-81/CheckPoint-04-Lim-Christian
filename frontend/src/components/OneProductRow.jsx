import React from "react";

const OneProductRow = ({ title, price }) => {
  return (
    <div className="mb-1 font-body text-xs">
      <div className="flex flex-row justify-between w-full text-white">
        <h1 className="ml-2 font-normal">{title}</h1>
        <p className="mr-3">{price} €</p>
      </div>
      {/* <p className="text-[.6rem]">{description}</p> */}
    </div>
  );
};

export default OneProductRow;
