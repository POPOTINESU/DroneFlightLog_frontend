export const passwordValidate = (value: string) => {
  let error;
  if (!value) {
    error = "パスワードを入力してください";
  }
  return error;
};
