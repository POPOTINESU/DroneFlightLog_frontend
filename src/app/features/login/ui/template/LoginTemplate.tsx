import React from "react";

import { Box, Grid, GridItem } from "@chakra-ui/react";
import { LoginForm } from "../organisms/LoginForm";

export const LoginTemplate = () => {
  return (
    <>
      <Grid templateColumns="repeat(26, 1fr)"  height="100vh">
        <GridItem colSpan={16} bg='blue.500' >
        </GridItem>
        <GridItem colSpan={10}>
          <LoginForm />
        </GridItem>
      </Grid>
    </>
  );
};
