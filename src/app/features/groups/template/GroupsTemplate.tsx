"use client";

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
  Box,
  Button,
  HStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { GroupTemplateSkeleton } from "../skeleton/GroupTemplateSkeleton";
import { GroupTable } from "../organisms/groupTable/GroupTable";
import { Group } from "../organisms/groupTable/types/GroupTableTypes";
import { Pagination } from "../organisms/pagination/Pagination";
import { fetchGroupList } from "../../../shared/api/fetchGroupList";

export const GroupsTemplate = () => {
  const [groups, setGroups] = useState<Group[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const groupsPerPage = 10;
  const router = useRouter();

  const handleRedirectDetailGroup = (id: string) => {
    router.push(`/groups/${id}`);
  };

  useEffect(() => {
    fetchGroupList()
      .then((data) => {
        if (Array.isArray(data)) {
          setGroups(data);
        } else {
          console.error("Fetched data is not an array", data);
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching group list", error);
        setIsLoading(false);
      });
  }, []);

  const handlePageClick = (selectedPage: number) => {
    setCurrentPage(selectedPage);
  };

  const offset = currentPage * groupsPerPage;
  const currentGroups = groups.slice(offset, offset + groupsPerPage);
  const pageCount = Math.ceil(groups.length / groupsPerPage);

  return (
    <Box display="flex" flexDirection="column" minHeight="100%">
      <Card width="100%" flex="1">
        <CardHeader>
          <Heading size="md">グループ一覧</Heading>
        </CardHeader>
        <TableContainer>
          <Table size="sm">
            <Thead>
              <Tr>
                <Th>グループ名</Th>
                <Th>所属ユーザー数</Th>
                <Th>所持機体数</Th>
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              {isLoading ? (
                <GroupTemplateSkeleton />
              ) : currentGroups.length > 0 ? (
                <GroupTable
                  group={currentGroups}
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
        {!isLoading && currentGroups.length > 0 && (
          <Box position="absolute" bottom="3" left="50%">
            <Pagination
              pageCount={pageCount}
              currentPage={currentPage}
              handlePageClick={handlePageClick}
            />
          </Box>
        )}
      </Card>
    </Box>
  );
};
