import { ReactNode } from "react";

export interface Container {
    children: ReactNode | ReactNode[];
    className?: string;
}