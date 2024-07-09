export const validateFlightDate = (value: string) => {
  let error;
  if (!value) {
    error = "飛行日を入力してください";
  }
  return error;
};
