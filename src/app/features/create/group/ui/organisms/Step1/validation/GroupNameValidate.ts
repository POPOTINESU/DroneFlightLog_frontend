export const GroupNameValidate = (value: string) => {
  let error;
  if (!value) {
    error = "グループ名を入力してください";
  }
  return error;
};
