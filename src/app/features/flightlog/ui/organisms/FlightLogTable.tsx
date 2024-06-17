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
  Center,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { Input } from "@chakra-ui/react";
import { IoSearch } from "react-icons/io5";
import { Header } from "@/app/components/atoms/header/Header";

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
  return (
    <Grid templateColumns="repeat(26, 1fr)" gap={6} height="90vh" py="20px" px="15px">
      <GridItem colSpan={16} px={10} height="100%">
        <HStack>
          <Heading size="lg">飛行記録</Heading>
          <Spacer />
          <Button colorScheme="blue" boxShadow="base">
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
      <GridItem colSpan={10} pr={5} height="100%">
        <Card mb="auto" height="100%">
          <CardHeader>
            <Heading size="2xl">検索</Heading>
          </CardHeader>
          <CardBody>
            <Text>aaaaa</Text>
          </CardBody>
        </Card>
      </GridItem>
    </Grid>
  );
};
