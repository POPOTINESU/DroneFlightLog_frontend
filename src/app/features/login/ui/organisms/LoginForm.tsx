import { InputField } from "@/app/components/atoms/Input/InputField";
import React from "react";

export const LoginForm = () => {
  return (
    <div>
      <InputField placeholder="メールアドレス" size="lg" />
      <InputField type="password" placeholder="パスワード" size="lg" />
    </div>
  );
};
