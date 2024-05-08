import { login } from "@/features/Login/api/login";
import { PrimaryButton } from "@/app/common/component/button/PrimaryButton";
import { useRecoilValue } from 'recoil';
import { emailState, passwordState } from "../../store/LoginAtoms";

export const LoginButton = () => {

const email = useRecoilValue(emailState);
const password = useRecoilValue(passwordState);

  return (
    <>
      <PrimaryButton className=" p-2 w-4/6 h-12" onClick={() => login(email,password)}>
        ログイン
      </PrimaryButton>
    </>
  );
};
