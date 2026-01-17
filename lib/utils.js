import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/**
 * Convert UTC date to Indian Standard Time (IST)
 * IST is UTC+5:30
 */
export function convertToIST(date) {
  const utcDate = new Date(date);
  // IST is UTC+5:30
  const istDate = new Date(utcDate.getTime() + 5.5 * 60 * 60 * 1000);
  return istDate;
}

/**
 * Format date in IST timezone
 * @param {Date|string} date - The date to format
 * @param {string} formatStr - The format string (using date-fns format)
 * @returns {string} Formatted date string in IST
 */
export function formatIST(date, formatStr = "MMM dd, HH:mm") {
  const { format } = require("date-fns");
  const istDate = convertToIST(date);
  return format(istDate, formatStr);
}
