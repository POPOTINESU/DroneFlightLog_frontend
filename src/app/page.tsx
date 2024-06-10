import { Box, Heading, Text, Input } from '@chakra-ui/react';

export default function Home() {
  return (
    <Box>
      <Heading>Welcome to my app</Heading>
      <Text>This is a Chakra UI example.</Text>
      <Input placeholder="Type something here" size="lg" type="password" />
    </Box>
  );
}