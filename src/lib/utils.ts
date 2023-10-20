import clsx, {ClassValue} from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs:ClassValue[]) {
    return twMerge(clsx(inputs)) // px-2 py-2 => p-2
}