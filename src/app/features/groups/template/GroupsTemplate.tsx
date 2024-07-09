"use client";
import { fetchGroupList } from "@/app/features/flightlog/api/group/FetchGroupList";
import {
  Card,
  CardHeader,
  Center,
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
import { useRouter } from "next/navigation";
import { GroupTemplateSkeleton } from "../skeleton/GroupTemplateSkeleton";
import { GroupTable } from "../organisms/GroupTable";
import { Group } from "../organisms/types/GroupTableTypes";

export const GroupsTemplate = () => {
  const [group, setGroup] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  const handleRedirectDetailGroup = (id: string) => {
    router.push(`/groups/${id}`);
  };

  useEffect(() => {
    fetchGroupList().then((data) => {
      setGroup(data);
      setIsLoading(false);
    });
  }, []);
  return (
    <>
      <Card width="100%" height="100%">
        <CardHeader>
          <Heading size="md">グループ一覧</Heading>
        </CardHeader>
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
              {isLoading ? (
                // スケルトンの表示
                <GroupTemplateSkeleton />
              ) : group.length > 0 ? (
                <GroupTable
                  group={group}
                  handleRedirectDetailGroup={handleRedirectDetailGroup}
                />
              ) : (
                <Tr>
                  <Td colSpan={4}>
                    <Center>
                      <Text>グループがありません</Text>
                    </Center>
                  </Td>
                </Tr>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </Card>
    </>
  );
};
