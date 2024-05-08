import { useRecoilState } from "recoil";
import { passwordState } from "@/features/Login/store/LoginAtoms";
import { PrimaryInput } from "@/app/common/component/Input/PrimaryInput";

export const PasswordField = () => {
  const [password, setPassword] = useRecoilState(passwordState);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    console.log(password);
  }
  return (
    <PrimaryInput
      type="password"
      placeholder="password"
      className="p-2 w-4/6 h-12"
      value={password}
      onChange={handlePasswordChange}
    />
  );
};
