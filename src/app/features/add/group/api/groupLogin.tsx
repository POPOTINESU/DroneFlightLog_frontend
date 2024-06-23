import axios, { isAxiosError } from "axios";
/**
 * 既存グループにログインしてユーザーを紐づける
 *
 * POST /api/v1/group/login
 *
 * Require:
 *  group_id: string
 *  password: string
 *
 * Response:
 * 200:
 */

type GroupLoginProps = {
  groupID: string;
  password: string;
};

export const groupLogin = async (props: GroupLoginProps ) => {
  const { groupID, password } = props;
  const data = {
    group_id: groupID,
    password: password,
  };

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/group/login`,
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
