import { Box, Center, Spinner, AbsoluteCenter } from "@chakra-ui/react";
export const LoadingUI = () => {
  return (
    <Box position="relative" h="100vh">
      <AbsoluteCenter>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </AbsoluteCenter>
    </Box>
  );
};
