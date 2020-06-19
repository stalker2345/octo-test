import React from "react";

import { Footer, HeaderColumnItem, Block } from "../../components";
//@ts-ignore
import { footer } from "../../styles/allstyles";

export default function FooterRow() {
  return (
    <Footer>
      {footer.map((block, index) => (
        <Block
          flexDirection={block.flexDirection}
          key={index}
          width={block.width}
          justify={block.justifyContent}
          align={block.alignItems}
        >
          {(!(typeof block.children[0] === "string") &&
            //@ts-ignore
            block.children.map((children, index) => (
              <Block
                width={"100%"}
                key={index}
                height={children.height}
                justify={children.justifyContent}
                align={children.alignItems}
              >
                {
                  //@ts-ignore
                  children.children.map((children, index) => (
                    <Block
                      width={children.width}
                      key={index}
                      height={children.height}
                      justify={children.justifyContent}
                      align={children.alignItems}
                    >
                      {<HeaderColumnItem>{children.message}</HeaderColumnItem>}
                    </Block>
                  ))
                }
              </Block>
            ))) ||
            block.children[0]}
        </Block>
      ))}
    </Footer>
  );
}
