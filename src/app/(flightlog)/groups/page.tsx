"use client";
import { fetchGroupList } from "@/app/features/flightlog/api/group/FetchGroupList";
import { IoIosMore } from "react-icons/io";
import {
  Card,
  CardHeader,
  Center,
  Heading,
  Icon,
  IconButton,
  Skeleton,
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

export type Group = {
  id: string;
  name: string;
  user_count: number;
  drone_count: number;
};

export default function GroupPage() {
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
                Array.from({ length: 15 }).map((_, index) => (
                  <Tr key={index}>
                    <Td>
                      <Skeleton height="20px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" />
                    </Td>
                    <Td>
                      <Skeleton height="20px" />
                    </Td>
                  </Tr>
                ))
              ) : group.length > 0 ? (
                group.map((group: Group) => (
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
                ))
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
}
