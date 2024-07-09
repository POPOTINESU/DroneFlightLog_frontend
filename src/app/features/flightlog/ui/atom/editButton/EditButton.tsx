import { Box, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { MdModeEdit } from "react-icons/md";
import { EditButtonTypes } from "./types/editButtonTypes";

export const EditButton = (props: EditButtonTypes) => {
  const router = useRouter();
  const { data, iconSize } = props;
  const handleRedirectEditFlightLog = (id: string) => {
    router.push(`/edit/flightlog/${id}`);
  };
  return (
    <IconButton
      aria-label="edit"
      icon={<Box as={MdModeEdit} w={iconSize} h={iconSize} />}
      background="none"
      colorScheme="none"
      color="#4299E1"
      onClick={() => {
        handleRedirectEditFlightLog(data.flight_log.id);
      }}
    />
  );
};
