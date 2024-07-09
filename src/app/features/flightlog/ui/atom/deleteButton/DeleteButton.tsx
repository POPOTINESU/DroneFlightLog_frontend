import { deleteFlightLog } from '@/app/features/edit/flightlog/api/deleteFrightLog';
import { Box, IconButton } from '@chakra-ui/react';
import React, { useState } from 'react'
import { MdDelete } from 'react-icons/md';

type Drone = {
  id: string;
  JUNumber: string;
};

type User = {
  id: string;
  full_name: string;
};

type FlightLogDetails = {
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

type DeleteButtonTypes = {
  data: FlightLogDetails;
  iconSize: string;
};

export const DeleteButton = (props: DeleteButtonTypes) => {
  const { data, iconSize } = props;
  const [flightLogs, setFlightLogs] = useState<FlightLogDetails[]>([]);
  const handleDelete = async (id: string) => {
    if (window.confirm("本当に削除しますか？")) {
      const response = await deleteFlightLog(id);
      if (response === 200) {
        const newFlightLogs: any = flightLogs.filter(
          (flightLog) => flightLog.flight_log.id !== id
        );
        setFlightLogs(newFlightLogs);
      }
    }
  };
  return (
    <IconButton
    aria-label="delete"
    icon={<Box as={MdDelete} w={iconSize} h={iconSize} />}
    background="none"
    colorScheme="none"
    color="#F56565"
    onClick={() => {
      handleDelete(data.flight_log.id);
    }}
  />
  )
}
