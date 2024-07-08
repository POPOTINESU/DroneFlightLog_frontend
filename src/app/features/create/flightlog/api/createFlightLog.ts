import axios, { isAxiosError } from "axios";

type CreateFlightLogProps = {
  values: {
    flightDate: string;
    pilotName: string;
    JUNumber: string;
    flightSummary: string;
    takeoffLocation: string;
    LandingLocation: string;
    takeOffTime: string;
    landingTime: string;
    totalTime: string;
    presence_of_malfunction: string;
    malfunction_content: string;
    flightPurpose: string[];
    specificFlightTypes: string[];
  };
};

export const createFlightLog = async (props:CreateFlightLogProps) => {

  const { values } = props;
  const selectedGroup = sessionStorage.getItem("selectedGroup");
  if (!selectedGroup) {
    console.error("Selected group data is not found in sessionStorage");
    return;
  }

  const groupData = JSON.parse(selectedGroup);

  // selectedGroupの中のidを取得
  const group_id = groupData.selectedGroup.id;
  console.log("group_id: ", group_id);

  const data = {
    flight_log: {
      flight_date: values.flightDate,
      pilot_name: values.pilotName,
      JUNumber: values.JUNumber,
      group_id: group_id,
      flight_summary: values.flightSummary,
      takeoff_location: values.takeoffLocation,
      landing_location: values.LandingLocation,
      takeoff_time: values.takeOffTime,
      landing_time: values.landingTime,
      total_time: values.totalTime,
      malfunction_content: values.malfunction_content,
      flight_purpose: values.flightPurpose,
      specific_flight_types: values.specificFlightTypes,
    },
  };

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/flight_logs`,
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
}