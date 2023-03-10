import React from "react";
import { onClickNavigate } from "../navigation/onClickNavigate";
export var Link = function (_a) {
    var path = _a.path, label = _a.label;
    var clickNavigate = function (e) {
        return onClickNavigate(e, path);
    };
    //commenet
    return (React.createElement("a", { href: path, onClick: clickNavigate }, label));
};
//# sourceMappingURL=Link.js.map