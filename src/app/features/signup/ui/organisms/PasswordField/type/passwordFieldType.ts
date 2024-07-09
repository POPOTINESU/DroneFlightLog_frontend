export type passwordFieldType = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  values: { password: string | undefined };
  errors: { password?: string };
  touched: { password?: boolean };
}