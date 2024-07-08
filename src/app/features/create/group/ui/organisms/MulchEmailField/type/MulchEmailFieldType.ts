export type MulchEmailFieldTypes = {
  values: {
    emails: string;
  };
  errors: {
    emails?: string;
  };
  touched: {
    emails?: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
};
