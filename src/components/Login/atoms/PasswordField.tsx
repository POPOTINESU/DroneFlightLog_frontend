import { useRecoilState } from "recoil";
import { passwordState } from "@/app/store/LoginAtoms";

export const PasswordField = () => {
  const [password, setPassword] = useRecoilState(passwordState);

  function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
    setPassword(e.target.value);
    console.log(password);
  }
  return (
    <input
    type="password"
    placeholder="password"
    className="border-2 border-gray-300 rounded p-2 w-4/6 h-12"
    value={password}
    onChange={handlePasswordChange}
  />
  )
}
