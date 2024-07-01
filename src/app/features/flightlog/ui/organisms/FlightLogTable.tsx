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
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { useRouter } from "next/navigation";

const data = {
  flightDate: "2021/09/01",
  pilotName: "重國  光貴",
  flightOverview: "飛行概要",
  takeoffLocation: "石川県鳳珠郡能登町宇出津レ1-11",
  landingLocation: "愛知県名古屋市天白区中平3丁目10601",
  takeoffTime: "10:00",
  landingTime: "12:00",
  flightTime: "2時間",
  totalFlightTime: "100時間",
  safetyIssues: "特になし",
};

export const FlightLogTable = () => {

  const router = useRouter();

  const handleRedirectCreateFlightLog= () => {
    router.push(`/create/flightlog`);
  };
  return (
    <Grid templateColumns="repeat(26, 1fr)">
      <GridItem colSpan={16} padding={3} height="100%">
        <HStack>
          <Heading size="lg">飛行記録</Heading>
          <Spacer />
          <Button colorScheme="blue" boxShadow="base" onClick={handleRedirectCreateFlightLog}>
            新規登録
          </Button>
        </HStack>
        <Card mt={2} p={3}>
          <HStack>
            <Text>{data.flightDate}</Text>
            <Text>{data.takeoffTime}</Text>
            <Text>~</Text>
            <Text>{data.landingTime}</Text>
            <Text>{data.pilotName}</Text>
          </HStack>
          <HStack>
            <Text>{data.takeoffLocation}</Text>
            <Text>~</Text>
            <Text>{data.landingLocation}</Text>
          </HStack>
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
  );
};
