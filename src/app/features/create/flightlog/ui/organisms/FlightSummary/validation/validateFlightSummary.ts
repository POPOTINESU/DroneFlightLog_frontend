export const validateFlightSummary = (value: string) => {
  let error;
  if (!value) {
    error = "飛行概要を入力してください";
  }
  return error;
};
