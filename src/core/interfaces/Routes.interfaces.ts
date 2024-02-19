import { LazyExoticComponent, ReactNode } from "react";

// type JSXComponent = () => JSX.Element;

    // to: string;
    // path: string;
    // name?: string;
    // Component: () => LazyExoticComponent<JSXComponent> | JSXComponent;

export interface Route_I {
    path: string;
    Component: () => LazyExoticComponent<() => JSX.Element> | ReactNode;
    children?: Route_I[];
    defaultRoute?: boolean;
}