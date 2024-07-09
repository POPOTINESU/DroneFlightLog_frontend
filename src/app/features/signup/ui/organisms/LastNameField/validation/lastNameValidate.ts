export const lastNameValidate = (value: string) => {
  let error;
  if (!value) {
    error = "名字を入力してください";
  }
  return error;
};
