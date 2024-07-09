import {
  Box,
  Card,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";

type DroneDetail = {
  drone_number: string;
  JUNumber: string;
  purchaseDate: string;
};

type GroupDetail = {
  drones: DroneDetail[];
};

type DroneDetailTableTypes = {
  groupDetail: GroupDetail | null;
};

export const DroneDetailTable = (props: DroneDetailTableTypes) => {
  const { groupDetail } = props;
  return (
    <div>
      {groupDetail?.drones && groupDetail?.drones.length > 0 ? (
        groupDetail?.drones.map((drone) => (
          <Card width="100%">
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>製造番号</Th>
                    <Th>機体登録番号</Th>
                    <Th>購入日</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{drone.drone_number}</Td>
                    <Td>{drone.JUNumber}</Td>
                    <Td>{drone.purchaseDate}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        ))
      ) : (
        <Box p={2}>機体は登録されていません。</Box>
      )}
    </div>
  );
};
