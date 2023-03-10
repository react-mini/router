import React from "react";
import {
  navigationComponent,
  NavigationLink,
} from "../navigation/navigationComponent";

export const Menu: React.FC<{ nestLevel: number; children: any }> = ({
  children,
  nestLevel,
}) => {
  console.log("dbg6 children: ", JSON.stringify(children));

  let paths: NavigationLink[] = [];
  if (!children?.length) {
    if (typeof children === "object") {
      children = [children];
    }
  }

  console.log("dbg6 after children: ");
  if (children.length) {
    paths = children.map((child: any) => ({
      component: child,
      path: child.props.path,
    }));
  }
  console.log("dbg6 paths: ", paths);
  const Component = navigationComponent(paths, nestLevel);

  console.log("dbg6 paths component: ", Component);

  return Component;
};
export const Route: React.FC<any> = ({
  path,
  component: Component,
  ...props
}) => {
  return <Component {...props} />;
};
