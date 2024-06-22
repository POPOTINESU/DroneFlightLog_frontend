import { Box, Heading, Text, Input } from "@chakra-ui/react";
import { LoginTemplate } from "../features/login/ui/template/LoginTemplate";
import { FlightLogTemplate } from "../features/flightlog/ui/template/FlightLogTemplate";

export default function Home() {
  return (
    <Box>
      <FlightLogTemplate />
    </Box>
  );
}
