import { LazyExoticComponent, ReactNode } from "react";

export interface Route_I {
    path: string;
    Component: () => LazyExoticComponent<() => JSX.Element> | ReactNode;
    children?: Route_I[];
    defaultRoute?: boolean;
}