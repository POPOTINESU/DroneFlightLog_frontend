import React from "react";
import axios, { isAxiosError } from "axios";

type CurrentLocationProps = {
  latitude: number;
  longitude: number;
};
export const currentLocation = async (props:CurrentLocationProps) => {
  const { latitude, longitude } = props;
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/current_location?latitude=${latitude}&longitude=${longitude}`,
      {
        withCredentials: true,
      }
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      return error.response?.status;
    }
  }
};
