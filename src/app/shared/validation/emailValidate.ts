export const emailValidate = (value: string) => {
  let error;
  if (!value) {
    error = "メールアドレスを入力してください";
  } else if (!value.includes("@")) {
    error = "メールアドレスの形式が正しくありません";
  }
  return error;
};
