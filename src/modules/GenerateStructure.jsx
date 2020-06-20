import React from "react";
import { Block, HeaderColumnItem } from "../components";
//import { footer } from "../../styles/allstyles";

function GenerateStructure({ Component, obj }) {
  const generatorSwitch = (obj) => {
    // if (obj.type === "block") {
    //   generateStructure(obj.children);
    // } else if (obj.type === "text") {
    //   return <HeaderColumnItem>{obj.message}</HeaderColumnItem>;
    // }
    const x = (obj) => {
      return (
        <Block
          height={obj.height}
          width={obj.width}
          justify={obj.justifyContent}
          align={obj.alignItems}
          flexDirection={obj.flexDirection}
          onClick={() => {}}
        ></Block>
      );
    };
    switch (obj.type) {
      case "block":
        generateStructure(obj.children);
        break;
      case "text":
        x(obj);
        break;
    }
  };

  const generateStructure = (obj) => {
    return (
      <>
        {obj.map((children, index) => (
          <Block
            height={children.height}
            key={index}
            width={children.width}
            justify={children.justifyContent}
            align={children.alignItems}
            flexDirection={children.flexDirection}
            onClick={() => {}}
          >
            {generatorSwitch(children)}
          </Block>
        ))}
      </>
    );
  };

  return <Component>{obj && generateStructure(obj)}</Component>;
}

export default GenerateStructure;
