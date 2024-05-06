import React, { useState } from "react";
import { EmailContext } from "./EmailContext";
import { ReactNode } from "react";

interface EmailProviderProps {
  children: ReactNode;
}

export const EmailProvider = ({ children }: EmailProviderProps) => {
  const [email, setEmail] = useState<string>("");

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      {children}
    </EmailContext.Provider>
  );
}