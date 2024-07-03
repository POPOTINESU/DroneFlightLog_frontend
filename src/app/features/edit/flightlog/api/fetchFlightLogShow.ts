import axios from 'axios';

export const fetchFlightLogShow = async (id: string) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/flight_logs/${id}`,
      {
        withCredentials: true,
      }
    );
    console.log(response.data);
    return response.data; // Ensure we return the data from the response
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error('Error fetching flight log:', error.message);
      throw new Error(error.response?.status.toString());
    } else {
      console.error('Unexpected error:', error);
      throw new Error('Unexpected error');
    }
  }
};