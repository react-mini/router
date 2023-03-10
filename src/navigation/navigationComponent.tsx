import React from "react";
import { historyChanges } from "./historyChanges";

export interface NavigationLink {
  path: string;
  component: JSX.Element;
}

export const navigationComponent = (
  navLinks: NavigationLink[],
  nestLevel: number,
  notFoundpage?: JSX.Element
) => {
  let component: any = null;
  const currentLocationPathname = window.location.pathname;
  const currentLocationPathnameSplit = currentLocationPathname
    .split("/")
    .filter((item, index) => index !== 0)
    .filter((item, index) => index <= nestLevel)
    .join("/");

  navLinks.forEach((link) => {
    if (currentLocationPathnameSplit === link?.path) {
      component = link.component;
    }
  });

  if (component === null) {
    component = notFoundpage || <div>Route not found</div>; // 404 page
  }

  historyChanges();

  return component;
};
