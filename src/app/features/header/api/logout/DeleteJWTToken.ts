import axios from "axios";

export const DeleteJWTToken = async () => {
  /**
   * ログアウト処理
   * サーバー側でJWTトークンの削除を行う
   * 
   * Returns:
   * 200: ログアウト成功
   * 401: ログアウト失敗
   */
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/authentications/logout`,
      { withCredentials: true }
    );
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
