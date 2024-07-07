export type emailFieldType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  values: { email: string | undefined };
  errors: { email?: string };
  touched: { email?: boolean };
}