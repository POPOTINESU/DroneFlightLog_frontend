import axios from "axios";

export const fetchGroupList = async () => {
  /**
   * ユーザーに紐づくグループ一覧を取得する
   * トークンをデーコードしてユーザーIDを取得し、
   * ユーザーIDを元にグループ一覧を取得した情報がかえってくる
   */
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/groups`,
      { withCredentials: true }
    );
    console.log(response.data);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
