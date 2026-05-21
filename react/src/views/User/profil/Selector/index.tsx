import { useCallback, useEffect, useState } from "react";
import {
  SelectedValue,
  SelectorCommand,
  SelectorHeader,
  SelectorStatus,
  SelectPlaceholder,
} from "./styles";

const Index = ({ spinner, data }: SelectorProps) => {
  return (
    <SelectPlaceholder>
      <SelectorHeader>
        <SelectedValue>Select an option</SelectedValue>
        {spinner && <SelectorStatus>O</SelectorStatus>}
        <SelectorCommand>+</SelectorCommand>
      </SelectorHeader>
    </SelectPlaceholder>
  );
};

interface SelectorProps {
  spinner: boolean;
  data: any;
}

export default Index;
