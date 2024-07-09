export type takeoffTimeFieldTypes = {
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  values: any;
  errors: any;
  touched: any;
  setFieldValue: (field: string, value: any) => void;
};
