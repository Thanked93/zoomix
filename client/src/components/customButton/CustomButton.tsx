import React, { ReactNode } from "react";
import { Button } from "./styles";

interface ButtonProps {
  children: ReactNode;
  func?: any;
}

const CustomButton = ({ func = null, children, ...restProps }: ButtonProps) => {
  return (
    <Button onClick={func} {...restProps}>
      {children}
    </Button>
  );
};

export default CustomButton;
