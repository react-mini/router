import React from "react";
import {
  navigationComponent,
  NavigationLink,
} from "../navigation/navigationComponent";

export const Menu: React.FC<{
  nestLevel: number;
  children: any;
  notFoundpage?: JSX.Element;
}> = ({ children, nestLevel, notFoundpage }) => {
  if (!notFoundpage) notFoundpage = <div>Resource not found</div>;

  let paths: NavigationLink[] = [];
  if (!children?.length) {
    if (typeof children === "object") {
      children = [children];
    }
  }

  if (children.length) {
    paths = children.map((child: any) => ({
      component: child,
      path: child.props.path,
    }));
  }
  const Component = navigationComponent(paths, nestLevel, notFoundpage);

  return Component;
};

export const Route: React.FC<any> = ({
  path,
  component: Component,
  ...props
}) => {
  return <Component {...props} />;
};
