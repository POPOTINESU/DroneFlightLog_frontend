import { useContext, createContext, useState, ReactNode } from "react";

// EmailContextの型を定義します。
interface EmailContextType {
  email: string;
  setEmail: (email: string) => void;
}


export const EmailContext = createContext<EmailContextType | undefined>(undefined);
