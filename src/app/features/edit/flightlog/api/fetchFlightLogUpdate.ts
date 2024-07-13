import axios from "axios";

export type fetchFlightLogUpdateProps = {
  id: string;
  values: {
    flightDate: string;
    pilotName: string;
    groupID: string;
    JUNumber: string;
    flightSummary: string;
    takeoffLocation: string;
    LandingLocation: string;
    takeOffTime: string;
    landingTime: string;
    totalTime: string;
    problem_description: string;
    date_of_resolution_datetime: string;
    corrective_action: string;
    flightPurpose: string[];
    specificFlightTypes: string[];
  };
};

export const fetchFlightLogUpdate = async (
  props: fetchFlightLogUpdateProps
) => {
  const { id, values } = props;

  const data = {
    flight_log: {
      flight_date: values.flightDate,
      pilot_name: values.pilotName,
      group_id: values.groupID,
      JUNumber: values.JUNumber,
      flight_summary: values.flightSummary,
      takeoff_location: values.takeoffLocation,
      landing_location: values.LandingLocation,
      takeoff_time: values.takeOffTime,
      landing_time: values.landingTime,
      total_time: values.totalTime,
      problem_description: values.problem_description,
      date_of_resolution_datetime: values.date_of_resolution_datetime,
      corrective_action: values.corrective_action,
      flight_purpose: values.flightPurpose,
      specific_flight_types: values.specificFlightTypes,
    },
  };
  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/flight_logs/${id}`,
      data,
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
};
