import React from "react";
import { Container, Error, Field, Input, Placeholder } from "./styles";

interface CustomInputProps {
  onChange: React.Dispatch<React.SetStateAction<string>>;
  value: string;
  type?: string;
  error?: string;
  placeholder?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({
  onChange,
  value,
  type = "text",
  error = "",
  placeholder = "",
  ...restProps
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <Container>
      <Field {...restProps}>
        <Input
          valid={value.length > 0}
          value={value}
          onChange={handleChange}
          type={type}
          required
        />
        <Placeholder>{placeholder}</Placeholder>
      </Field>
      <Error>{error}</Error>
    </Container>
  );
};

export default CustomInput;
