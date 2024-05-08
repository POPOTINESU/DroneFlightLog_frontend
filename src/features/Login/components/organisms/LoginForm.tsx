import { LoginButton } from "../atoms/LoginButton";
import { LoginInputField } from "../molecules/LoginInputField";


export const LoginForm = () => {
  return (
    <>
      <h1 className="text-4xl font-bold mb-16">Welcome</h1>
      <LoginInputField />
      <div className="border-t-2 border-dashed w-4/6 mt-10" />
      <div className="mt-8 text-sm">
        <span className="bg-white px-2">アカウントをお持ちじゃない場合</span>
        <span className="text-center text-sky-500 font-bold">登録はこちら</span>
      </div>
    </>
  );
};
