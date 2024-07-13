"use client";
import {
  Button,
  Card,
  Grid,
  GridItem,
  HStack,
  Heading,
  Spacer,
  Text,
  Box,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { fetchFlightLogList } from "../../../api/fetchFlightLogList";
import { SuccessMessage } from "@/app/shared/ui/atoms/alert/SuccessMessage/SuccessMessage";
import Pagination from "../pagination/Pagination";
import { EditButton } from "../../atom/editButton/EditButton";
import { DeleteButton } from "../../atom/deleteButton/DeleteButton";
import { FlightLogDetails } from "@/app/shared/types/flightLogDetail";
import { formatDate } from "./utility/formatDate";
import { formatTime } from "./utility/formatTime";

export const FlightLogTable = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [flightLogs, setFlightLogs] = useState<FlightLogDetails[]>([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 7; // 1ページに表示するアイテム数

  // flightLogsが空またはundefinedの場合はページ数を１にする
  const totalPages = flightLogs ? Math.ceil(flightLogs.length / itemsPerPage) : 1;

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setSuccessMessage(message);
      const timer = setTimeout(() => {
        setSuccessMessage("");
        // クエリパラメータを削除するためにURLを手動で置換
        const cleanUrl = window.location.pathname;
        router.replace(cleanUrl);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  useEffect(() => {
    const fetchFlightLog = async () => {
      try {
        const response = await fetchFlightLogList();
        setFlightLogs(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFlightLog();
  }, []);

  const handleRedirectCreateFlightLog = () => {
    router.push(`/create/flightlog`);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const iconSize = "2rem";

  // 現在のページに表示する飛行記録を取得
  const currentFlightLogs = flightLogs ? flightLogs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  ) : [];

  return (
    <Box mx={8} height="100%" display="flex" flexDirection="column">
      <SuccessMessage successMessage={successMessage} />
      <Grid templateColumns="repeat(26, 1fr)" height="100%">
        <GridItem colSpan={26} padding={3} height="100%">
          <HStack>
            <Heading size="lg">飛行記録</Heading>
            <Spacer />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            <Button
              colorScheme="blue"
              boxShadow="base"
              onClick={handleRedirectCreateFlightLog}
            >
              新規登録
            </Button>
          </HStack>
          <Card mt={2} p={3} flex="1" overflowY="auto">
            {currentFlightLogs && currentFlightLogs.length > 0 ? (
              currentFlightLogs.map((data: FlightLogDetails) => (
                <Box key={data.flight_log.id} mt={2}>
                  <Flex>
                    <Box>
                      <HStack>
                        <Text>{formatDate(data.flight_log.flight_date)}</Text>
                        <Text>{formatTime(data.flight_log.takeoff_time)}</Text>
                        <Text>~</Text>
                        <Text>{formatTime(data.flight_log.landing_time)}</Text>
                        <HStack>
                          <Text>操縦者:</Text>
                          {data.users.map((user) => (
                            <Text key={user.id}>{user.full_name}</Text>
                          ))}
                        </HStack>
                      </HStack>
                      <HStack>
                        <Text>{data.flight_log.takeoff_location}</Text>
                        <Text>~</Text>
                        <Text>{data.flight_log.landing_location}</Text>
                      </HStack>
                    </Box>
                    <Spacer />
                    <EditButton data={data} iconSize={iconSize} />
                    <DeleteButton data={data} iconSize={iconSize} />
                  </Flex>
                </Box>
              ))
            ) : (
              <Text>飛行記録がありません</Text>
            )}
          </Card>
        </GridItem>
        {/* <GridItem colSpan={10} height="100%" padding={3}>
          <SearchField />
        </GridItem> */}
      </Grid>
    </Box>
  );
};