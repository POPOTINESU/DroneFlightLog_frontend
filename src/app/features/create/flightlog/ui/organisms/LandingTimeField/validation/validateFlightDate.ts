export const validateFlightDate = (value: string) => {
  let error;
  if (!value) {
    error = "Landing Time is required";
  }
  return error;
};
