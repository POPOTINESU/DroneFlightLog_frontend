import Link from "next/link";
import React from "react";

export const LoginPage = () => {
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-8 bg-black"></div>
      <div className="col-span-4 bg-white flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold mb-16">Welcome</h1>
        <label className="text-gray-500 w-4/6">メールアドレス</label>
        <input
          type="text"
          placeholder="example@email.com"
          className="border-2 border-gray-300 rounded p-2 w-4/6 h-12"
        />
        <label className="text-gray-500 mt-4 w-4/6">パスワード</label>
        <input
          type="password"
          placeholder="password"
          className="border-2 border-gray-300 rounded p-2 w-4/6 h-12"
        />
        <p className="text-right text-sky-500 text-sm font-bold w-4/6 m-2">
          パスワードをお忘れですか？
        </p>
        <button className="bg-blue-500 hover:bg-sky-600 text-white rounded p-2 w-4/6 h-12">
          ログイン
        </button>
        <div className="border-t-2 border-dashed w-4/6 mt-10"></div>
        <div className="mt-8 text-sm">
          <span className="bg-white px-2">アカウントをお持ちじゃない場合</span>
          <span className="text-center text-sky-500 font-bold">
            登録はこちら
          </span>
        </div>
      </div>
    </div>
  );
};
