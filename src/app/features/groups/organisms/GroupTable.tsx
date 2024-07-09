import { Icon, IconButton, Td, Tr } from "@chakra-ui/react";
import React from "react";
import { IoIosMore } from "react-icons/io";
import { Group } from "./types/GroupTableTypes";

type GroupTableTypes = {
  group: Group[];
  handleRedirectDetailGroup: (id: string) => void;
};

export const GroupTable = (props: GroupTableTypes) => {
  const { group, handleRedirectDetailGroup } = props;
  return group.map((group: Group) => (
    <Tr key={group.id}>
      <Td>{group.name}</Td>
      <Td>{group.user_count}</Td>
      <Td>{group.drone_count}</Td>
      <Td>
        <IconButton
          aria-label="more"
          icon={<Icon as={IoIosMore} />}
          background="none"
          colorScheme="none"
          color="black"
          size="1.5rem"
          onClick={() => {
            handleRedirectDetailGroup(group.id);
          }}
        />
      </Td>
    </Tr>
  ));
};
