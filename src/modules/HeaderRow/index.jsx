import React from "react";
import { Header, HeaderColumnItem, Block } from "../../components";
import { header } from "../../styles/allstyles";

import GenerateStructure from "../GenerateStructure";

export default function HeaderRow() {
  return (
    <GenerateStructure Component={Header} obj={header}></GenerateStructure>
  );
}
