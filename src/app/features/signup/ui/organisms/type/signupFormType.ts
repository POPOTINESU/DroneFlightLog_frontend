import React from "react";

export type signupFormType = {
  values: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
  errors: {
    firstName?: string;
    lastName?: string;
    email?: string;
    password?: string;
  };
  touched: {
    firstName?: boolean;
    lastName?: boolean;
    email?: boolean;
    password?: boolean;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};
