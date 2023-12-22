import { useState } from "react";

// Task One

export const useToggle = (
  initialState: boolean = false
): [boolean, () => void] => {
  const [state, setState] = useState<boolean>(initialState);
  const toggle = () => {
    setState((prevState) => !prevState);
  };
  return [state, toggle];
};

// Task Two

export const formatDate = (date: Date, format: string): string => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    switch (format) {
      case 'MM/DD/YYYY':
        return date.toLocaleDateString('en-US', { month: '2-digit', day: '2-digit', year: 'numeric' });
      case 'YYYY/MM/DD':
        return date.toLocaleDateString('en-GB', { month: 'short', day: '2-digit', year: 'numeric' });
      case 'YYYY/MMM/DD':
        return date.toLocaleDateString('en-GB', { month: 'short', day: '2-digit', year: 'numeric' });
      default:
        return date.toLocaleDateString();
    }
  };

// Task Three

export function Capitalize(str: string): string {
    return str.toUpperCase();
  }
  
 export function Truncate(str: string, length: number): string {
    return str.length > length ? `${str.substring(0, length)}...` : str;
  }
  

// Task Four

export const formatNumberWithCommas = (
    number: number,
    separator: 'thousands' | 'lakhs'
  ): string => {
    const formatter = new Intl.NumberFormat('en-US');
    if (separator === 'thousands') {
      return formatter.format(number);
    } else if (separator === 'lakhs') {
      const formatterIN = new Intl.NumberFormat('en-IN');
      const formattedNumber = formatterIN.format(number);
      const parts = formattedNumber.split(',');
      if (parts.length > 1) {
        return parts.slice(0, parts.length - 1).join(',') + ',' + parts[parts.length - 1];
      }
      return formattedNumber;
    } else {
      return formatter.format(number);
    }
  };
  

  // Task Six

