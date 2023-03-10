import React, { useEffect, useState } from "react";

const historyChanges = () => {
  const [forceRerender, setForceRerender] = useState<number>(0);

  useEffect(() => {
    console.log("dbg5 forceRerender: ", forceRerender);
  }, [forceRerender]);

  window.addEventListener("popstate", () => {
    setForceRerender((prevState) => prevState + 1);
  });
  //@ts-ignore
  window._history = {
    pushState: (...args: any) => {
      //@ts-ignore
      history.pushState(...args);
      setForceRerender((prevState) => prevState + 1);
    },
  };

  return forceRerender;
};

export default historyChanges;
