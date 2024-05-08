"use client";
import { EmailField } from "../atoms/input/EmailField";
import { PasswordField } from "../atoms/input/PasswordField";
import { LoginButton } from "../atoms/LoginButton";
import { RecoilRoot } from "recoil";

export const LoginInputField = () => {
  return (
    <RecoilRoot>
      <label className="text-gray-500 w-4/6">メールアドレス</label>
      <EmailField />
      <label className="text-gray-500 mt-4 w-4/6">パスワード</label>
      <PasswordField />
      <p className="text-right text-sky-500 text-sm font-bold w-4/6 m-2">
        パスワードをお忘れですか？
      </p>
      <LoginButton />
    </RecoilRoot>
  );
};
