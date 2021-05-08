import React from "react";
import { Field, Input, Placeholder } from "./styles";

interface CustomInputProps {
  placeholder: string;
  onChange: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  placeholder,
  onChange,
  type = "text",
  ...restProps
}) => {
  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Field {...restProps}>
      <Input required={true} type={type} onChange={change} />
      <Placeholder>{placeholder}</Placeholder>
    </Field>
  );
};
