export type GroupDetail = {
  name: string;
  users: { name: string; email: string; role: string; status: string }[];
  drones: {
    id: string;
    drone_number: string;
    JUNumber: string;
    purchaseDate: string;
  }[];
};