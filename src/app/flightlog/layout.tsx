import React from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { Header } from "../components/atoms/header/Header";

export default function FlightLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Grid
        templateAreas={`"header"
                  "main"
                  `}
        gridTemplateRows={"20 1fr"}
        h="100vh"
        fontWeight="bold"
      >
        <GridItem p="3"  bg="black" color="white" area={"header"} height="8vh">
          <Header />
        </GridItem>
        <GridItem p="3" bg="gray.100" area={"main"} height="92vh">
          {children}
        </GridItem>
      </Grid>
    </>
  );
}
