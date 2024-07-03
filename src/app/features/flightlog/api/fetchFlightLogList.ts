import axios from "axios";

export const fetchFlightLogList = async () => {
  const selectedGroup = sessionStorage.getItem("selectedGroup");
  if (!selectedGroup) {
    console.error("Selected group data is not found in sessionStorage");
    return;
  }

  const groupData = JSON.parse(selectedGroup);

  // selectedGroupの中のidを取得
  const group_id = groupData.selectedGroup.id;
  console.log("group_id: ", group_id);

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/flight_logs`,
      {
        withCredentials: true,
        params: { group_id: group_id } 
      }
    );
    console.log(response.data.flight_logs); 
    return response.data.flight_logs; // flight_logsだけを返す
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error("Error fetching flight logs:", error.message);
      return error.response?.status;
    } else {
      console.error("Unexpected error:", error);
    }
  }
}