import axios, { isAxiosError } from "axios";

/**
 * グループの詳細取得
 *
 * args:
 * id: グループID
 *
 * return:
 *  name = グループ名
 *  group_user = グループに所属しているユーザー
 *  group_drone = グループが所持しているドローン
 */
type GroupIdProps = {
  id: string;
};

export const fetchGroupDetail = async (props: GroupIdProps) => {
  const { id } = props;

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/groups/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
