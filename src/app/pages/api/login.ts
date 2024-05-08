import React from 'react'

import axios from "axios";

export async function login(email:string, password:string) {

  try {
    const res = await axios.post(`https://b8dc8be0-b434-4142-859a-695657990ecc.mock.pstmn.io`, {
      email: email,
      password: password,
    });
    return res.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    } else {
      return { message: "予期せぬエラーが発生しました" };
    }
  }
}
