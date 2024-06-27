export type FormInputType = {
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  onBlur: (event: React.FocusEvent<HTMLInputElement>) => void;
  validate: (value: string) => string | undefined;
  name?: string;
};