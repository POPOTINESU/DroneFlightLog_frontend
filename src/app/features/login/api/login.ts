import axios from "axios";

type LoginProps = {
  email: string;
  password: string;
};

export const login = async (props: LoginProps) => {
  const { email, password } = props;
  const data = {
    email: email,
    password: password,
  };
  const res = await axios.post("/login", data, {
    withCredentials: true,
  });
  return res;
};
