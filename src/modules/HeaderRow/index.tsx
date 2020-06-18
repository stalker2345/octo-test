import { Header, HeaderColumnItem, Block } from "../../components";

import { header } from "../../styles/allstyles";
// @ts-ignore
import Logo from "../../components/Header/Icons/OctoberWeb.svg";

import React from "react";

export default function HeaderRow() {
  return (
    <Header>
      {header.map((block, index) => (
        <Block
          key={index}
          width={block.width}
          justify={block.justifyContent}
          align={block.alignItems}
        >
          {block.children.map((children, index) => (
            <HeaderColumnItem key={index}>
              {~children.indexOf("svg") ? (
                <img src={children} alt="11" />
              ) : (
                children
              )}
            </HeaderColumnItem>
          ))}
        </Block>
      ))}
    </Header>
  );
}

{
  /* <HeaderColumnItem key={index}>
{~children.indexOf("svg") ? Logo : children}
</HeaderColumnItem> */
}
