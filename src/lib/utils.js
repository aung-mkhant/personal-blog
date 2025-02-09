import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"
import dayjs from "dayjs";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

export function formatDate(date) {
  const formattedDate = dayjs(date).format('MMMM D, YYYY');
  return formattedDate
}