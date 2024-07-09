export const validateTakeoffLocation = (value: string) => {
  let error;
  if (!value) {
    error = "離陸地点を入力してください";
  }
  return error;
};