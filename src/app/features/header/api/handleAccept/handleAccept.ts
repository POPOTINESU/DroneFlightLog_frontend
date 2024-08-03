import axios from "axios";
export const tryAccept = async (groupId: number, isAccept: boolean) => {
  try {
    const response = await axios.post(
      //グループ招待を承諾するAPI
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/groups/participate_or_reject`,
      {
        id: groupId,
        is_accept: isAccept,
      },
      {
        withCredentials: true,
      }
    );
    console.log(response);
    return response;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.status;
    }
  }
};