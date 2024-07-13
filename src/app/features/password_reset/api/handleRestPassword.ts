import axios from "axios";

export const handleRestPassword = async (email: string) => {
  const url = `${process.env.NEXT_PUBLIC_API_URL}/api/v1/password_resets`;
  const data = {
    email: email,
  };
  try {
    const response = await axios.post(url, data);
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
