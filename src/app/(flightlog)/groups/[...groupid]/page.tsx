"use client";
import { fetchGroupDetail } from "@/app/features/create/group/api/fetchGroupDetail";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Table,
  TableContainer,
  Tabs,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

type GroupDetail = {
  name: string;
  users: { name: string; email: string; role: string; status: string }[];
  drones: {
    id: string;
    drone_number: string;
    JUNumber: string;
    purchaseDate: string;
  }[];
};

export default function DetailGroupPage() {
  const { groupid } = useParams();
  const [groupDetail, setGroupDetail] = useState<GroupDetail | null>(null);

  useEffect(() => {
    const fetchGroup = async () => {
      try {
        const groupID = groupid[0];
        const data = await fetchGroupDetail({ id: groupID });
        setGroupDetail(data);

        console.log(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, [groupid]);

  return (
    <>
      <Card width="100%" height="100%">
        <CardHeader pb="0">
          <Heading size="md" >グループ名: {groupDetail?.name}</Heading>
        </CardHeader>
        <CardBody>
          <Tabs>
            <TabList>
              <Tab>操縦者一覧</Tab>
              <Tab>機体一覧</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
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
              </TabPanel>

              <TabPanel>
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
              </TabPanel>
            </TabPanels>
          </Tabs>
        </CardBody>
      </Card>
    </>
  );
}
