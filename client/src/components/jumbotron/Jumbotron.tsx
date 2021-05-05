import React, { ReactNode } from "react";
import {
  JumbotronWrapper,
  JumbtronRow,
  JumbotronBig,
  JumbotronSmall,
} from "./styles";

interface JumbotronProps {
  children: ReactNode;
  flexDirection?: string;
}

export const Jumbotron = ({ children, ...restProps }: JumbotronProps) => {
  return <JumbotronWrapper {...restProps}>{children}</JumbotronWrapper>;
};

Jumbotron.Row = function JumboRow({
  children,
  flexDirection = "row",
  ...restProps
}: JumbotronProps) {
  return (
    <JumbtronRow flexDirection={flexDirection} {...restProps}>
      {children}
    </JumbtronRow>
  );
};

Jumbotron.Big = function JumboBig({ children, ...restProps }: JumbotronProps) {
  return <JumbotronBig {...restProps}>{children}</JumbotronBig>;
};

Jumbotron.Small = function JumboSmall({
  children,
  ...restProps
}: JumbotronProps) {
  return <JumbotronSmall {...restProps}>{children}</JumbotronSmall>;
};

export default Jumbotron;
