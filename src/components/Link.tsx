import React from "react";
import { onClickNavigate } from "../navigation/navigateToPath";

export interface LinkInterface {
  path: string;
  label: string;
}

export const Link: React.FC<LinkInterface> = ({ path, label }) => {
  const clickNavigate = (e: React.MouseEvent<HTMLAnchorElement>) =>
    onClickNavigate(e, path);
  //commenet
  return (
    <a href={path} onClick={clickNavigate}>
      {label}
    </a>
  );
};
