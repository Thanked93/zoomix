import React, { ReactNode } from "react";
import { Container, Wrapper, Element, ImageContainer, Img, ChangeButton, Label, Item } from "./styles";
import altImg from "../../assets/cat.jpg";
interface ChildProps {
  children: ReactNode;
}

/**
 * Changing the user defaults
 * Showing the profile
 *
 */
const ProfileStats = ({ children, ...restProps }: ChildProps) => {
  return <Wrapper {...restProps}>{children}</Wrapper>;
};

ProfileStats.Container = ({ children, ...restProps }: ChildProps) => {
  return <Container {...restProps}>{children}</Container>;
};

interface ElementProps extends ChildProps {
  labelName?: string;
}

ProfileStats.Element = ({ children, labelName = "random:", ...restProps }: ElementProps) => {
  return (
    <Element {...restProps}>
      <Label>{labelName}</Label>
      <Item>{children}</Item>
    </Element>
  );
};

interface ImageProps {
  img?: string;
}

ProfileStats.Image = ({ img = "", ...restProps }: ImageProps) => {
  return (
    <ImageContainer {...restProps}>
      <Img src={img ? img : altImg} alt='Profile Image' />
    </ImageContainer>
  );
};

ProfileStats.ChangeButton = ({ ...restProps }) => {
  return <ChangeButton {...restProps}>change</ChangeButton>;
};

export default ProfileStats;
