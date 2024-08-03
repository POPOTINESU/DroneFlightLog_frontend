"use client";
import {
  Box,
  Button,
  Card,
  CardHeader,
  Heading,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { fetchNotification } from "../../header/api/fetchNotification/fetchNotification";
import { tryAccept } from "../../header/api/handleAccept/handleAccept";

export const InviteTemplate = () => {
  type Notification = {
    id: number;
    name: string;
    user_count: number;
  };

  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await fetchNotification();
        setNotifications(response);
      } catch (error) {
        console.error(error);
      }
    };
    fetchNotifications();
  }, []);

  const handleAccept = async (group_id: number, is_accept: boolean) => {
    try {
      const response:any = await tryAccept(group_id, is_accept);

      if (response?.status === 201) {
        alert("グループに参加しました");
      }
      else if (response?.status === 204) {
        alert("招待を拒否しました");
      }
      else{
        alert("グループ操作に失敗しました");
      }
    } catch (error) {
      console.error(error);
      alert("エラーが発生しました");
    }
  };

  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <Card width="100%" flex="1">
        <CardHeader>
          <Heading size="md">グループ招待リスト</Heading>
        </CardHeader>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>グループ名</Th>
                <Th>グループ所属数</Th>
                <Th>招待を受ける</Th>
              </Tr>
            </Thead>
            <Tbody>
              {notifications.map((notification) => (
                <Tr key={notification.id}>
                  <Th>{notification.name}</Th>
                  <Th>{notification.user_count}</Th>
                  <Th>
                    <Button
                      colorScheme="blue"
                      size="sm"
                      mr={2}
                      onClick={() => handleAccept(notification.id, true)}
                    >
                      招待を受ける
                    </Button>
                    <Button
                      colorScheme="red"
                      size="sm"
                      onClick={() => handleAccept(notification.id, false)}
                    >
                      拒否
                    </Button>
                  </Th>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </Box>
  );
};