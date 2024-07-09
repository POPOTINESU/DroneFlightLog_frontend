type Drone = {
  id: string;
  JUNumber: string;
};

type User = {
  id: string;
  full_name: string;
};

export type FlightLogDetails = {
  flight_log: {
    id: string;
    flight_date: string;
    takeoff_time: string;
    landing_time: string;
    takeoff_location: string;
    landing_location: string;
    flight_summary: string;
  };
  drones: Drone[];
  users: User[];
};