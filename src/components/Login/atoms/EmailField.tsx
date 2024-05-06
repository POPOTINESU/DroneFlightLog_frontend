import { useRecoilState } from "recoil";
import { emailState } from "@/app/store/LoginAtoms";


export const EmailField = () => {
  const [email, setEmail] = useRecoilState(emailState) ;

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    console.log(email);
  }
  return (

    <input
    type="mail"
    placeholder="example@mail.com"
    className="border-2 border-gray-300 rounded p-2 w-4/6 h-12"
    value={email}
    onChange={handleEmailChange}
  />
  )
}