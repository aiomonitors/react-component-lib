import React, { DetailedHTMLProps } from "react";
import styled from "styled-components";

export interface ButtonProps
  extends DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "danger";
}

export const Button = ({
  variant = "primary",
  ...props
}: ButtonProps): JSX.Element => {
  const { children, style } = props;

  const compStyle: React.CSSProperties = style || {};

  switch (variant) {
    case "primary":
      compStyle.backgroundColor = "#3498DB";
      compStyle["&:hover"] = {
        backgroundColor: "#2980B9",
      };
      break;
    case "secondary":
      compStyle.backgroundColor = "#AF7AC5";
      compStyle["&:hover"] = {
        backgroundColor: "#2980B9",
      };
      break;
    case "danger":
      compStyle.backgroundColor = "#E74C3C";
      compStyle["&:hover"] = {
        backgroundColor: "#2980B9",
      };
      break;
    default:
  }

  return (
    <BaseButtonStyling style={compStyle} {...props}>
      {children}
    </BaseButtonStyling>
  );
};

const BaseButtonStyling = styled.button`
  padding: 5px 10px;
  box-sizing: border-box;
  border-radius: 5px;
  border: none;
  font-size: 1rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
  }
`;
