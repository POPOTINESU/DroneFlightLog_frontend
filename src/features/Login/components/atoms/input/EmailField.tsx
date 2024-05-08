import { useRecoilState } from "recoil";
import { emailState } from "@/features/Login/store/LoginAtoms";
import { PrimaryInput } from "@/app/common/component/Input/PrimaryInput";

export const EmailField = () => {
  const [email, setEmail] = useRecoilState(emailState);

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    console.log(email);
  }
  return (
    <PrimaryInput
      type="mail"
      placeholder="example@mail.com"
      className="p-2 w-4/6 h-12"
      value={email}
      onChange={handleEmailChange}
    />
  );
};
