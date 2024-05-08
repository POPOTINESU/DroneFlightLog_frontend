
import React from "react";
import { useRecoilValue } from "recoil";
import { emailState } from "@/app/store/LoginAtoms";

export const LoginButton = () => {
  return (
    <>
    <button className="bg-blue-500 hover:bg-sky-600 text-white rounded p-2 w-4/6 h-12">
      ログイン
    </button>
    </>
  );
};
