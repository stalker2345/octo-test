import React from "react";
import { Block } from "../components";
//import { footer } from "../../styles/allstyles";

function GenerateStructure({ Component, obj }) {
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
            {children.children &&
              !(typeof children.children[0] === "string") &&
              generateStructure(children.children)}
          </Block>
        ))}
      </>
    );
  };

  return <Component>{obj && generateStructure(obj)}</Component>;
}

export default GenerateStructure;
