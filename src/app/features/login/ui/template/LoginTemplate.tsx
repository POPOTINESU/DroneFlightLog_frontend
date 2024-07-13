import React from "react";

import { Box, Flex, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { LoginForm } from "../organisms/LoginForm";

export const LoginTemplate = () => {
  return (
    <>
      <Grid templateColumns="repeat(26, 1fr)" height="100vh">
        <GridItem colSpan={16} bg="blue.500">
          <Flex
            justify="center"
            align="center"
            height="100%"
            direction="column"
          >
            <Text
              color="white"
              fontSize="8rem"
              as="b"
              py={0}
              my={0}
              lineHeight="1"
            >
              DRONE
            </Text>
            <Text color="white" fontSize="5rem" py={0} my={0} as="b" lineHeight="1">
              FlightLog
            </Text>
          </Flex>
        </GridItem>
        <GridItem colSpan={10}>
          <LoginForm />
        </GridItem>
      </Grid>
    </>
  );
};
