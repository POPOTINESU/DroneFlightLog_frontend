export type LastNameInputType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  values: { lastName: string | undefined };
  errors: { lastName?: string };
  touched: { lastName?: boolean };
};
