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

type UserDetail = {
  name: string;
  email: string;
  role: string;
  status: string;
};

type GroupDetail = {
  users: UserDetail[];
};

type UserDetailTableTypes = {
  groupDetail: GroupDetail | null;
};

export const UserDetailTable = (props: UserDetailTableTypes) => {
  const { groupDetail } = props;
  return (
    <div>
      {groupDetail?.users && groupDetail?.users.length > 0 ? (
        groupDetail?.users.map((user) => (
          <Card width="100%">
            <TableContainer>
              <Table size="sm">
                <Thead>
                  <Tr>
                    <Th>ユーザー名</Th>
                    <Th>メールアドレス</Th>
                    <Th>役割</Th>
                    <Th>ステータス</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>{user.name}</Td>
                    <Td>{user.email}</Td>
                    <Td>{user.role}</Td>
                    <Td>{user.status}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </Card>
        ))
      ) : (
        <Box p={2}>所属ユーザーは所属していません。</Box>
      )}
    </div>
  );
};
