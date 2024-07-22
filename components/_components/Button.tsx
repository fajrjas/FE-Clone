import React from "react";
import {
  Button as UIButton,
  ButtonProps as UIButtonProps,
} from "@/components/ui/button";

interface CustomButtonProps extends UIButtonProps {
  // You can add additional props here if needed
}

export default function Button({ children, ...props }: CustomButtonProps) {
  return <UIButton {...props}>{children}</UIButton>;
}
