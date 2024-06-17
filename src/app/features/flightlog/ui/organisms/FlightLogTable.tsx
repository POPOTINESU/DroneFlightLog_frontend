import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Hide,
  IconButton,
  Input,
  Show,
  Spacer,
  Table,
  TableContainer,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import { type } from 'os';

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
    <>
      <Grid templateColumns="repeat(26, 1fr)" gap={6}>
        <GridItem colSpan={16} py={6} px={10}>
          <HStack>
          <Heading size="lg">飛行記録</Heading>
          <Spacer />
          <Button colorScheme='blue' boxShadow='base'>
            新規登録
          </Button>
          </HStack>
          <Card mt={3} p={3}>
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
        <GridItem colSpan={10} py={6} pr={20}>
          <Text>検索キーワード</Text>
          <Input boxShadow='base'/>
          <Text>機体番号</Text>
          <Input boxShadow='base'/>
          <Text>操縦者</Text>
          <Input boxShadow='base'/>
          <Text>飛行日</Text>
          <HStack>
            <Input type="date" boxShadow='base'/>
            <Text>~</Text>
            <Input type="date" boxShadow='base'/>
          </HStack>
          <Text>飛行時刻</Text>
          <HStack>
            <Input type="time" boxShadow='base'/>
            <Text>~</Text>
            <Input type="time" boxShadow='base'/>
          </HStack>
          <Text>離陸地点</Text>
          <Input boxShadow='base'/>
          <Text>着陸地点</Text>
          <Input boxShadow='base'/>
          <Button colorScheme='blue' width="100%" boxShadow='lg'>検索</Button>
        </GridItem>
      </Grid>
    </>
  );
};
