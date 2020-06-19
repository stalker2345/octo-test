import React from "react";
import { Footer, HeaderColumnItem, Block } from "../../components";
import { footer } from "../../styles/allstyles";
import GenerateStructure from "../GenerateStructure";

export default function FooterTesting() {
  return (
    <GenerateStructure Component={Footer} obj={footer}></GenerateStructure>
  );
}
