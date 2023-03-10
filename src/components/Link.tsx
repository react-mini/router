import React from "react";
import { onClickNavigate } from "../navigation/navigateToPath";

export interface LinkPropsInterface {
  children: any;
  path: string;
}

export const Link: React.FC<LinkPropsInterface> = ({
  children,
  path,
  ...props
}) => {
  const clickNavigate = (e: React.MouseEvent<HTMLAnchorElement>) =>
    onClickNavigate(e, path);

  return (
    <a href={path} onClick={clickNavigate} {...props}>
      {children}
    </a>
  );
};
