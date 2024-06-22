import axios, { isAxiosError } from "axios";

type LoginProps = {
  email: string;
  password: string;
};

export const login = async (props: LoginProps) => {
  /**
   * ログイン処理
   *
   * Args:
   *  email
   *  password
   *  withCredentials
   *
   * Returns:
   * status
   */
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
    if (isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
