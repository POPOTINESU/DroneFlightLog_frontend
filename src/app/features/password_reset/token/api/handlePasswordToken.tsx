import axios from "axios";

type HandleRestPasswordType = {
  token: string;
  password: string;
  passwordConfirmation: string;
};

export const handlePasswordToken = async (props: HandleRestPasswordType) => {
  const { token, password, passwordConfirmation } = props;
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/password_resets/${token}`;
  const data = {
    user: {
      password: password,
      password_confirmation: passwordConfirmation
    },
  };

  try {
    const response = await axios.put(url, data); // PUTメソッドを使用
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
  }
};