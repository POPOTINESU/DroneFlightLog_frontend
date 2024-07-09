export type firstNameFieldType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  values: { firstName: string | undefined };
  errors: { firstName?: string };
  touched: { firstName?: boolean };
};