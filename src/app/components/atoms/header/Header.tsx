import { Flex, Grid, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <>
      <Flex>
        <Text ml={6} as="b">
          Drone Flight Log
        </Text>
        <Spacer />
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <Link href="">
            <Text textAlign={"center"}>飛行記録</Text>
          </Link>
          <Link href="">日常点検記録</Link>
          <Link href="">点検整備記録</Link>
        </Grid>
      </Flex>
    </>
  );
};
