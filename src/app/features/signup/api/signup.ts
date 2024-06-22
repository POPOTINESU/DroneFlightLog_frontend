import React from "react";
import axios, { isAxiosError } from "axios";

type SignupProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const signup = async (props: SignupProps) => {
  /**
   * 新規館員登録
   *
   * Args:
   *  firstName
   *  lastName
   *  email
   *  password
   *
   * Returns:
   * status
   */

  const { firstName, lastName, email, password } = props;
  const data = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    password: password,
  };

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/authentications/signup`,
      data,
      {
        withCredentials: true,
      }
    );
    return response.status;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
