import React, { ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps {
  func: any;
  children: ReactNode;
}

const CustomButton = ({ func, children, ...restProps }: ButtonProps) => {
  return <Button>{children}</Button>;
};

export default CustomButton;
