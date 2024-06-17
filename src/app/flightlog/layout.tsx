import React from "react";
import { Box } from "@chakra-ui/react";
import { Header } from "../components/atoms/header/Header";

export default function FlightLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Box backgroundColor="black" color="white" p={4}>
        <Header />
      </Box>
      {children}
    </>
  );
}
