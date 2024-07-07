import { DeleteJWTToken } from "../../../api/logout/DeleteJWTToken";

type LogoutType = {
  router?: any;
};
export   const handleLogout = async (props:LogoutType) => {
  const { router } = props;
  try {
    const response: number | undefined = await DeleteJWTToken();

    if (response === 200) {
      router.push("/login");
    } else {
      alert("ログアウトに失敗しました");
    }
  } catch (error) {
    console.error("ログアウトエラー:", error);
    alert("ログアウトに失敗しました");
  }
};