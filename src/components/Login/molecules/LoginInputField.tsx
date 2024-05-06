"use client";

import { EmailProvider } from "@/app/context/EmailProvider";
import { EmailField } from "../atoms/EmailField";
import { PasswordField } from "../atoms/PasswordField";

export const LoginInputField = () => {
  return (
    <EmailProvider>
      <label className="text-gray-500 w-4/6">メールアドレス</label>
      <EmailField />
      <label className="text-gray-500 mt-4 w-4/6">パスワード</label>
      <PasswordField />
    </EmailProvider>
  );
};
