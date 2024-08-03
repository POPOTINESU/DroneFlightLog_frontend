import axios from "axios";
export const fetchNotification = async () => {
  try {
    const response = await axios.get(
      //招待されたグループなどの通知を取得するAPI
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/groups/invited_users`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
  }
};