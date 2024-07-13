import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Slide,
} from "@chakra-ui/react";
import { errorMessageType } from "./types/errorMessageType";

export const ErrorMessage = (props: errorMessageType) => {
  const { errorMessage } = props;

  return (
    <>
      {errorMessage && (
        <Slide direction="top" in={true} style={{ zIndex: 10 }}>
          <Alert
            status="error"
            variant="subtle"
            borderRadius="md"
            boxShadow="lg"
          >
            <AlertIcon />
            <AlertTitle>Error!</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </Slide>
      )}
    </>
  );
};
