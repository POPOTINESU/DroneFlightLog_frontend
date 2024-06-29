"use client";
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
    <>
      <CardHeader>
        <Heading size="lg">新規機体登録</Heading>
      </CardHeader>
      <CardBody width="100%">
        <CreateDroneForm />
      </CardBody>
    </>
  );
};
