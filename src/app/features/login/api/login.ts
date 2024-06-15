import axios, { Axios, isAxiosError } from "axios";

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
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/authentications/login`,
      data,
      {
        withCredentials: true,
      }
    );
    return response.status;
  } catch (error) {
    if(isAxiosError(error)){
      return error.response?.status;
    }
  }
};
