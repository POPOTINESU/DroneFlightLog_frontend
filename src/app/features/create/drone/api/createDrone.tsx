import axios, { isAxiosError } from "axios";
/**
 * ドローンの作成
 *
 * args:
 *  droneNumber: 製造番号
 *  JUNumber: JU番号
 *  purchaseDate: 購入日
 *  id: グループID
 */

type DroneSet = {
  droneNumber: string;
  JUNumber: string;
  purchaseDate: string;
};

type CreateGroupProps = {
  values: {
    sets: DroneSet[];
    groupID: string;
  };
};

export const createDrone = async (props: CreateGroupProps) => {
  const { values } = props;

  const data = {
    droneSets: values.sets,
    id: values.groupID,
  };

  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/drones`,
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
