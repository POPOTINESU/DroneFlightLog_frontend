import { Box, Center, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Box position="relative" h="100vh">
      <Center position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Center>
    </Box>
  );
};

export default Loading;