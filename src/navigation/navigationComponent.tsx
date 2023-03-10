import historyChanges from "./historyChanges";

export interface NavigationLink {
  path: string;
  component: JSX.Element;
}

// let currentPath: any = [];

export const navigationComponent = (
  navLinks: NavigationLink[],
  nestLevel: number
) => {
  /**
   * This algorithm doesn't nest routes but only matches without obsticulizing
   * It's' appropiate for routes with unique IDs in any nesting level
   */
  let component: any = null;
  const currentLocationPathname = window.location.pathname;
  const currentLocationPathnameSplit = currentLocationPathname
    .split("/")
    .filter((item, index) => index !== 0)
    .filter((item, index) => index <= nestLevel)
    .join("/");
  // .filter((i) => i);

  console.log("dbg5 currentLocationPathname:", currentLocationPathname);
  console.log(
    "dbg5 currentLocationPathnameSplit:",
    currentLocationPathnameSplit,
    "\b NavLinks:  \b",
    navLinks
  );
  navLinks.forEach((link) => {
    console.log("dbg2 link: ", link);
    console.log(
      "dbg2 currentLocationPathnameSplit: ",
      currentLocationPathnameSplit
    );

    if (currentLocationPathnameSplit === link?.path) {
      // if (currentLocationPathname === link?.path) {
      component = link.component;

      console.log(
        "dbg3 currentLocationPathnameSplit: ",
        currentLocationPathnameSplit
      );
      // console.log("dbg3 currentPath: ", currentPath);

      // currentPath.push(...currentLocationPathnameSplit);
    }
  });

  /**
   * TODO:
   * Missing setup NotFoundPage, doesn't work either
   */
  // if (component === null) {
  //   component = NotFoundPage; // 404 page
  // }

  historyChanges();

  return component;
};

export const navigationNestedComponent = (
  navLinks: NavigationLink[],
  navLevel: number
) => {
  /**
   * This algorithm doesn't nest routes but only matches without obsticulizing
   * It's' appropiate for routes with unique IDs in any nesting level
   */
  let component: any = null;
  const currentLocationPathname = window.location.pathname;
  const currentLocationPathnameSplit = currentLocationPathname
    .split("/")
    .filter((i, index) => index !== 0)
    .filter((i, index) => index <= navLevel)
    .join("/");

  navLinks.forEach((link) => {
    console.log("dbg2 link: ", link);
    console.log(
      "dbg2 currentLocationPathnameSplit: ",
      currentLocationPathnameSplit
    );

    if (currentLocationPathnameSplit === link?.path) {
      // if (currentLocationPathname === link?.path) {
      component = link.component;

      console.log(
        "dbg3 currentLocationPathnameSplit: ",
        currentLocationPathnameSplit
      );
      // console.log("dbg3 currentPath: ", currentPath);

      // currentPath.push(...currentLocationPathnameSplit);
    }
  });

  if (component === null) {
    component = NotFoundPage; // 404 page
  }

  historyChanges();

  return component;
};
