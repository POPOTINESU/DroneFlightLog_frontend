import axios from "axios";

export const deleteFlightLog = async (id: string) => {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/flight_logs/${id}`,
      {
        withCredentials: true,
      }
    );
    return response.status;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching flight log:", error.message);
      return error.response?.status;
    } else {
      console.error("Unexpected error:", error);
    }
  }
}