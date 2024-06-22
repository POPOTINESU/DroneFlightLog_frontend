"use client";
import { fetchGroupList } from "@/app/features/flightlog/user/api/FetchGroupList";
import {
  Box,
  Card,
  Center,
  Flex,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export type Group = {
  id: number;
  name: string;
  user_count: number;
  drone_count: number;
};

export default function GroupPage() {
  const [group, setGroup] = useState([]);

  useEffect(() => {
    /**
     * return response.data;
     * groups:
     * サンプルデータ
     * 0: {id: 1, name: "テストグループ", user_count: 1, drone_count: 1}
     */
    fetchGroupList().then((data) => {
      setGroup(data);
      console.log(data);
    });
  }, []);
  // TODO: drone_count導入
  return (
    <Center height="100%">
      <Box width="70%" height="100%">
        <Heading as="h1" size="md" p={2}>
          グループ一覧
        </Heading>
        <Card width="100%" height="90%">
          <TableContainer>
            <Table size="sm">
              <Thead>
                <Tr>
                  <Th>グループ名</Th>
                  <Th>所属ユーザー数</Th>
                  <Th> 所持機体数</Th>
                  <Th></Th>
                </Tr>
              </Thead>
              <Tbody>
                {group.map((group: Group) => (
                  <Tr key={group.id}>
                    <Td>{group.name}</Td>
                    <Td>{group.user_count}</Td>
                    <Td>{group.drone_count}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </Card>
      </Box>
    </Center>
  );
}