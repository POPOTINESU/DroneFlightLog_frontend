import React from "react";

import { Grid, GridItem } from "@chakra-ui/react";
import { LoginForm } from "../organisms/LoginForm";

export const template = () => {
  return (
    <>
      <Grid templateColumns="repeat(26, 1fr)">
        <GridItem colSpan={16}></GridItem>
        <GridItem colSpan={10}>
          <LoginForm />
        </GridItem>
      </Grid>
    </>
  );
};
