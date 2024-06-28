"use client"
import React from "react";
import { CreateDroneForm } from "../organisms/CreateDroneForm";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  VStack,
} from "@chakra-ui/react";

export const CreateDroneTemplate = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      padding={30}
      background="gray.100"
    >
      <Card width="50%" height="100%" py={30} px={10} overflowY="auto">
        <VStack spacing={4}>
          <CardHeader>
            <Heading size="lg">新規機体登録</Heading>
          </CardHeader>
          <CardBody width="100%">
            <CreateDroneForm />
          </CardBody>
        </VStack>
      </Card>
    </Box>
  );
};
