import React from "react";
import { Header, HeaderColumnItem, Block } from "../../components";
import { header } from "../../styles/allstyles";

export default function testing() {
  const generateStructure = (header) => {
    return (
      <Header>
        {header.map((children, index) => (
          <Block
            key={index}
            width={children.width}
            justify={children.justifyContent}
            align={children.alignItems}
          >
            {children.children && generateStructure(children.children)}
          </Block>
        ))}
      </Header>
    );
  };
  return generateStructure(header);
}
