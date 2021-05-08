import React, { ReactNode } from "react";
import CustomButton from "../customButton/CustomButton";
import { CustomInput } from "../customInput/CustomInput";

import {
  AuthForm,
  AuthTitle,
  AuthError,
  AuthformWrapper,
  InnerWrapper,
} from "./styles";

interface AuthProps {
  children: ReactNode;
}

interface Authformprops extends AuthProps {
  onSubmit(e: React.SyntheticEvent): void;
}

const Authform = ({ children, ...restProps }: AuthProps) => {
  return (
    <AuthformWrapper {...restProps}>
      <InnerWrapper>{children}</InnerWrapper>
    </AuthformWrapper>
  );
};

Authform.Form = function AuthformForm({
  children,
  onSubmit,
  ...restProps
}: Authformprops) {
  return (
    <AuthForm onSubmit={onSubmit} {...restProps}>
      {children}
    </AuthForm>
  );
};

Authform.Title = function AuthformTitle({ children, ...restProps }: AuthProps) {
  return <AuthTitle>{children}</AuthTitle>;
};

Authform.Error = function AuthformError({ children, ...restProps }: AuthProps) {
  return <AuthError>{children}</AuthError>;
};

interface AuthInputProps {
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

Authform.Input = function AuthformInput({
  placeholder,
  onChange,
  type = "text",
  ...restProps
}: AuthInputProps) {
  return (
    <CustomInput
      onChange={onChange}
      type={type}
      placeholder={placeholder}
      {...restProps}
    />
  );
};

interface SubmitProps extends AuthProps {
  func?: any;
}

Authform.Submit = function SubmitButton({
  children,
  func = null,
  ...restProps
}: SubmitProps) {
  return (
    <CustomButton {...restProps} func={func}>
      {children}
    </CustomButton>
  );
};

export default Authform;
