import React, { useState } from "react";
import floatAndClear from "../../database/FloatAndClear.json";
import CSSPlayground from "../shared/CSSPlayground";
import DescriptionBox from "../shared/DescriptionBox";
import { useSelector } from "react-redux";

function Floatprop() {
  const data = floatAndClear.Float.keyword.map(
    (keyword) => `float: ${keyword}`
  );
  const value = useSelector((state) => state.cssProperties.activeValue.get("float") || state.cssProperties.activeValue.get("default"));
  console.log("active index in floatData is = ", value);
  const [key, keyvalue] = data[value].split(":");
  let trimmedkeyvalue = keyvalue.trim();
  const keywordDesc = floatAndClear.Float.keywordDescription[trimmedkeyvalue];
  const descrText = (
    <>
      <p className=" text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4">
        The <span className="text-red-500">Float</span> property specifies
        whether an element should float to the left, right, or not at all.
      </p>
      <p className=" text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4">
        Absolutely positioned elements ignore the{" "}
        <span className="text-red-500">Float</span> property.
      </p>
      <p className=" text-xl font-serif tracking-wider text-black  pl-4  ml-12 mt-4">
        {" "}
        Elements next to a floating element will flow around it. To avoid this,
        use the <span className="text-red-500 underline">
          clear
        </span> property{" "}
      </p>
    </>
  );

  return (
    <>
      <h1 className="font-serif tracking-wider text-black  pl-4 font-bold  ml-12 mt-12">
        Float
      </h1>
      <DescriptionBox title={"Description"} descText={descrText} />
      <CSSPlayground
        data={data}
        title={"float"}
        component={FloatComponent}
        screenDesc="What's happening on the screen, This is showing the clear properties live interation effect"
        bgColor="beige"
      />

      <DescriptionBox title={"KeywordDescription"} descText={keywordDesc} />
    </>
  );
}

export default Floatprop;

const FloatComponent = () => {
  const value = useSelector((state) => state.cssProperties.activeValue.get("float") || state.cssProperties.activeValue.get("default"));
  const data = useSelector((state) => state.cssProperties.data);
  const floatData = useSelector((state) => state.cssProperties.data.get("float"));
  // console.log("Saved mapData", mapData);
  // console.log("clear map data: ", Array.isArray(floatData));

  const [key, keyVal] = floatData[value].split(":");

  return (
    <>
      <div className="w-16 h-16 bg-cyan-500" style={{ float: keyVal }}></div>
      <p>Change the float style to float this box.</p>
    </>
  );
};
