import React from "react";

export default function test({ props }) {
  const generateStructure = (obj) => {
    return (
      <div>
        {obj.map(
          (children) =>
            children.children && generateStructure(children.children)
        )}
      </div>
    );
  };
}
