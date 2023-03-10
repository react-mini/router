export var onClickNavigate = function (e, path) {
    if (!e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        // @ts-ignore
        window._history.pushState({}, "go", "/".concat(path));
    }
};
//# sourceMappingURL=onClickNavigate.js.map