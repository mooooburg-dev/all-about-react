import React from "react";
import { Page } from "react-onsenui";
import ButtonExample from "./ButtonExample";
import ActionSheetExample from "./ActionSheetExample";
import CheckboxExample from "./CheckboxExample";
import FabExample from "./FabExample";

export default function OnsenUIExample() {
  return (
    <>
      <Page>
        <FabExample />
        <br />
        <br />
        <CheckboxExample />
        <br />
        <br />
        <ActionSheetExample />
        <br />
        <br />
        <ButtonExample />
      </Page>
    </>
  );
}
