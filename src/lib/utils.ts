import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// ClassValue - готовый тип из clsx
// class name
export const cn = (...inputs: ClassValue[]): string => {
    return twMerge(clsx(inputs));
};
