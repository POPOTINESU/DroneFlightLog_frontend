export const firstNameValidate = (value: string) => {
  let error;
  if (!value) {
    error = "名前を入力してください";
  }
  return error;
};
