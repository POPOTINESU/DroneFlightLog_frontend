export const passwordValidate = (value: string) => {
  let error;
  if (!value) {
    error = "パスワードを入力してください";
  } else if (value.length < 8) {
    error = "8文字以上で入力してください";
  }
  return error;
};