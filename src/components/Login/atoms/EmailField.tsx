import { useEmailField } from "@/app/hooks/useEmailField";


export const EmailField = () => {
  const {email, setEmail} = useEmailField();

  function handleEmailChange(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
    console.log(email);
  }
  return (

    <input
    type="password"
    placeholder="password"
    className="border-2 border-gray-300 rounded p-2 w-4/6 h-12"
    value={email}
    onChange={handleEmailChange}
  />
  )
}