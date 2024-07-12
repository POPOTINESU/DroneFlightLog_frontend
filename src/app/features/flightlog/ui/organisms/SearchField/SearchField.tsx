import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { IoSearch } from "react-icons/io5";

export const SearchField = () => {
  return (
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
          mt="10"
          size={{ base: "md", "2xl": "md" }}
        >
          検索
        </Button>
      </CardBody>
    </Card>
  );
};
