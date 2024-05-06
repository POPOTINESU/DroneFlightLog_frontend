import Link from "next/link";
import React from "react";
import { LoginForm } from "../organisms/LoginForm";

export const LoginPage = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-8 bg-black"></div>
      <div className="col-span-4 bg-white flex flex-col justify-center items-center">
        <LoginForm />
      </div>
    </div>
  );
};
