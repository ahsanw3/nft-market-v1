import React from "react";
import Description from "./Description";
import DetailsCard from "./DetailsCard";
import pic from "/home/dev/Desktop/nftkey/src/images/nftpic.png";
export default function Details() {
  let Data = [
    {
      Name: "Markus",
      id: "1",
      attribute: "100%",
      energy: "41.23%",
      Grade: "41.23%",
      Health: "41.23%",
      luck: "41.23%",
      type: "cat",
      owner: "DF1942",
      status: "Not for Sale",
      description:"Young alchemist and a great explorer. Fortune smiles at him, he always finds rich loot."
    },
  ];
  return (
    <>
      <div className="flex flex-col ">
        <div className="flex gap-10 justify-center py-20 flex-col lg:flex-row ">
          <img src={pic} alt="" className="lg:w-1/4 rounded " />
          <DetailsCard data={Data} />
        </div>
        <div className=" flex justify-center">
        <Description data={Data} />
        </div>

      </div>
    </>
  );
}
