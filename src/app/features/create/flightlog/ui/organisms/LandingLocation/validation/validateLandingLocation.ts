export const validateLandingLocation = (value: string) => {
  let error;
  if (!value) {
    error = "着陸地点を入力してください";
  }
  return error;
};
