import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Slide,
} from "@chakra-ui/react";
import { successMessageType } from "./successMessageType";


export const SuccessMessage = (props: successMessageType) => {
  const { successMessage } = props;

  return (
    <>
      {successMessage && (
        <Slide direction="top" in={true} style={{ zIndex: 10 }}>
          <Alert
            status="success"
            variant="subtle"
            borderRadius="md"
            boxShadow="lg"
          >
            <AlertIcon />
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>{successMessage}</AlertDescription>
          </Alert>
        </Slide>
      )}
    </>
  );
};
