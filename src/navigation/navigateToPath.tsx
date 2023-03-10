import React from "react";

export const onClickNavigate = (
  e: React.MouseEvent<HTMLAnchorElement>,
  path: string
) => {
  if (!e.metaKey && !e.ctrlKey) {
    e.preventDefault();
    // @ts-ignore
    window._history.pushState({}, "go", `/${path}`);
  }
};
