import { lazy } from "react";

export const delayImport = (component) => lazy(() => {
    return Promise.all([
        component,
        new Promise(resolve => setTimeout(resolve, 250))
    ]).then(([moduleExports]) => moduleExports);
})