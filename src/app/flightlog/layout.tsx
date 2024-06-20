import React from "react";
import { Box, Center, Grid, GridItem } from "@chakra-ui/react";
import { Header } from "../components/header/Header";

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
        <GridItem bg="black" color="white" area={"header"} height="8vh">
          <Header />
        </GridItem>
        <GridItem bg="gray.100" area={"main"} height="92vh">
          {children}
        </GridItem>
      </Grid>
    </>
  );
}
