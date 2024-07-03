"use client";
import { Grid, GridItem } from "@chakra-ui/react";
import Providers from "../providers";
import { Header } from "../features/header/Header";
import { RecoilRoot } from "recoil";

export default function FlightLogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <Grid
        templateAreas={`"header"
                  "main"
                  `}
        gridTemplateRows={"20 1fr"}
        h="100vh"
        fontWeight="bold"
      >
        <GridItem bg="black" color="white" area={"header"} height="8vh">
          <RecoilRoot>
            <Header />
          </RecoilRoot>
        </GridItem>
        <GridItem bg="gray.100" area={"main"} height="92vh" >
          {children}
        </GridItem>
      </Grid>
    </Providers>
  );
}
