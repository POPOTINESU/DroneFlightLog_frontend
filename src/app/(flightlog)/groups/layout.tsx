import { Box, Center } from "@chakra-ui/react";
export default function GroupsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Center height="100%">
      <Box width="70%" height="100%" py={30}>
        {children}
      </Box>
    </Center>
  );
}
