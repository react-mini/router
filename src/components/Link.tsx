import React from "react";
import { onClickNavigate } from "../navigation/onClickNavigate";

export interface LinkInterface {
  path: string;
  label: string;
}

const Link: React.FC<LinkInterface> = ({ path, label }) => {
  const clickNavigate = (e: React.MouseEvent<HTMLAnchorElement>) =>
    onClickNavigate(e, path);
  //commenet
  return (
    <a href={path} onClick={clickNavigate}>
      {label}
    </a>
  );
};

export default Link;
