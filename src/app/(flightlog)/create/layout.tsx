import { Box, Card, VStack } from "@chakra-ui/react";

export default function CreateDroneTemplate({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      padding={30}
      background="gray.100"
    >
      <Card width="50%" height="100%" py={30} px={10} overflowY="auto">
        <VStack spacing={4}>
          {children}
        </VStack>
      </Card>
    </Box>
  )
}