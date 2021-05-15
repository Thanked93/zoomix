import React, { ReactNode } from "react";
import CustomInput from "../customInput";
import { Button, Form, Message } from "./styles";

interface ChildProps {
  children: ReactNode;
}

interface FormProps extends ChildProps {
  onSubmit(e: any): Promise<void>;
}

const CustomForm = ({ children, onSubmit, ...restProps }: FormProps) => {
  return (
    <Form onSubmit={onSubmit} {...restProps}>
      {children}
    </Form>
  );
};

interface FormInputProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  type?: string;
  placeholder?: string;
}

CustomForm.Input = function CustomFormInput({
  onChange,
  value,
  type = "text",
  placeholder = "",
  ...restProps
}: FormInputProps) {
  return (
    <CustomInput
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      value={value}
      {...restProps}
    />
  );
};

interface ButtonProps extends ChildProps {
  disabled?: boolean;
}

CustomForm.SubmitButton = function CustomFormSubmit({
  children,
  disabled = false,
  ...restProps
}: ButtonProps) {
  return (
    <Button disabled={disabled} {...restProps}>
      {children}
    </Button>
  );
};

interface MessageProps extends ChildProps {
  isError?: boolean;
}

CustomForm.Message = function CustomFormMessage({
  children,
  isError = false,
  ...restProps
}: MessageProps) {
  return (
    <Message isError={isError} {...restProps}>
      {children}
    </Message>
  );
};

export default CustomForm;
