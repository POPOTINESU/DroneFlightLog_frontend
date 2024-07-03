"use client";
import {
  Button,
  Card,
  Grid,
  GridItem,
  HStack,
  Heading,
  Spacer,
  InputGroup,
  InputLeftAddon,
  Text,
  Box,
  CardBody,
  CardHeader,
  IconButton,
  Icon,
  Flex,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Input } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";
import { fetchFlightLogList } from "../../api/fetchFlightLogList";
import { MdModeEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { recoilPersist } from "recoil-persist";
import { deleteFlightLog } from "@/app/features/edit/flightlog/api/deleteFrightLog";

type Drone = {
  id: string;
  JUNumber: string;
};

type User = {
  id: string;
  full_name: string;
};

type FlightLogDetails = {
  flight_log: {
    id: string;
    flight_date: string;
    takeoff_time: string;
    landing_time: string;
    takeoff_location: string;
    landing_location: string;
    flight_summary: string;
  };
  drones: Drone[];
  users: User[];
};

export const FlightLogTable = () => {
  const router = useRouter();
  const [flightLogs, setFlightLogs] = useState<FlightLogDetails[]>([]);

  const handleDelete = async (id: string) => {
    if (window.confirm("本当に削除しますか？")) {
      const response = await deleteFlightLog(id);
      if (response === 200) {
        const newFlightLogs = flightLogs.filter(
          (flightLog) => flightLog.flight_log.id !== id
        );
        setFlightLogs(newFlightLogs);
      }
    }
  };

  useEffect(() => {
    const fetchFlightLog = async () => {
      try {
        const response = await fetchFlightLogList();
        setFlightLogs(response);
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFlightLog();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(
      2,
      "0"
    )}月${String(date.getDate()).padStart(2, "0")}日`;
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return `${String(date.getHours()).padStart(2, "0")}時${String(
      date.getMinutes()
    ).padStart(2, "0")}分`;
  };

  const handleRedirectCreateFlightLog = () => {
    router.push(`/create/flightlog`);
  };

  const handleRedirectEditFlightLog = (id: string) => {
    router.push(`/edit/flightlog/${id}`);
  };

  const iconSize = "2rem";

  return (
    <Box mx={8}>
      <Grid templateColumns="repeat(26, 1fr)">
        <GridItem colSpan={16} padding={3} height="100%">
          <HStack>
            <Heading size="lg">飛行記録</Heading>
            <Spacer />
            <Button
              colorScheme="blue"
              boxShadow="base"
              onClick={handleRedirectCreateFlightLog}
            >
              新規登録
            </Button>
          </HStack>
          <Card mt={2} p={3}>
            {flightLogs && flightLogs.length > 0 ? (
              flightLogs.map((data: FlightLogDetails) => (
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
                    <IconButton
                      aria-label="edit"
                      icon={<Box as={MdModeEdit} w={iconSize} h={iconSize} />}
                      background="none"
                      colorScheme="none"
                      color="#4299E1"
                      onClick={() => {
                        handleRedirectEditFlightLog(data.flight_log.id);
                      }}
                    />
                    <IconButton
                      aria-label="delete"
                      icon={<Box as={MdDelete} w={iconSize} h={iconSize} />}
                      background="none"
                      colorScheme="none"
                      color="#F56565"
                      onClick={() => {
                        handleDelete(data.flight_log.id);
                      }}
                    />
                  </Flex>
                </Box>
              ))
            ) : (
              <Text>飛行記録がありません</Text>
            )}
          </Card>
        </GridItem>
        <GridItem colSpan={10} height="100%" padding={3}>
          <Card height="100%" border="1px" borderColor="gray.50" px={5}>
            <CardHeader>
              <Heading textAlign="center">検索</Heading>
            </CardHeader>
            <CardBody>
              <InputGroup size="sm">
                <InputLeftAddon children={<IoSearch />} />
                <Input borderLeftRadius="0" />
              </InputGroup>
              <Box mt={{ base: 4, "2xl": 8 }}>
                <Text>機体番号</Text>
                <Input boxShadow="base" size={{ base: "sm", "2xl": "md" }} />
              </Box>
              <Box mt={{ base: 4, "2xl": 8 }}>
                <Text>操縦者</Text>
                <Input boxShadow="base" size={{ base: "sm", "2xl": "md" }} />
              </Box>
              <Box mt={{ base: 4, "2xl": 8 }}>
                <Text>飛行日</Text>
                <HStack>
                  <Input
                    type="date"
                    boxShadow="base"
                    size={{ base: "sm", "2xl": "md" }}
                  />
                  <Text>~</Text>
                  <Input
                    type="date"
                    boxShadow="base"
                    size={{ base: "sm", "2xl": "md" }}
                  />
                </HStack>
              </Box>
              <Box mt={{ base: 4, "2xl": 8 }}>
                <Text>飛行時刻</Text>
                <HStack>
                  <Input
                    type="time"
                    boxShadow="base"
                    size={{ base: "sm", "2xl": "md" }}
                  />
                  <Text>~</Text>
                  <Input
                    type="time"
                    boxShadow="base"
                    size={{ base: "sm", "2xl": "md" }}
                  />
                </HStack>
              </Box>
              <Box mt={{ base: 4, "2xl": 8 }}>
                <Text>離陸地点</Text>
                <Input boxShadow="base" size={{ base: "sm", "2xl": "md" }} />
              </Box>
              <Box mt={{ base: 4, "2xl": 8 }}>
                <Text>着陸地点</Text>
                <Input boxShadow="base" size={{ base: "sm", "2xl": "md" }} />
              </Box>
              <Button
                colorScheme="blue"
                width="100%"
                boxShadow="lg"
                mt="6"
                size={{ base: "md", "2xl": "md" }}
              >
                検索
              </Button>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </Box>
  );
};
