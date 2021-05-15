import React, { ReactNode } from "react";
import CustomInput from "../customInput";
import { Button, Form } from "./styles";

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
  error?: string;
  placeholder?: string;
}

CustomForm.Input = function CustomFormInput({
  onChange,
  value,
  type = "text",
  error = "",
  placeholder = "",
  ...restProps
}: FormInputProps) {
  return (
    <CustomInput
      type={type}
      onChange={onChange}
      placeholder={placeholder}
      error={error}
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

export default CustomForm;
