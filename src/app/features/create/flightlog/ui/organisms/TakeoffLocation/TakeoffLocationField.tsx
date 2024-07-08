import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";
import { Field } from "formik";
import { handleCurrentLocation } from "./utility/handleCurrentLocation";
import { TakeoffLocationFieldYTypes } from "./types/takeoffLocationTypes";
import { validateTakeoffLocation } from "./validation/validateTakeoffLocation";

export const TakeoffLocationField = (props: TakeoffLocationFieldYTypes) => {
  const { values, setFieldValue, handleChange, handleBlur, error } = props;
  return (
    <FormControl>
      <Flex mb={2} alignItems="center">
        <FormLabel htmlFor="takeoffLocation" mb={0}>
          離陸地点
        </FormLabel>
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() => handleCurrentLocation(setFieldValue)}
        >
          現在地を取得
        </Button>
      </Flex>
      <Field
        as={Input}
        type="text"
        id="takeoffLocation"
        placeholder="離陸地点を入力"
        value={values.takeoffLocation}
        name="takeoffLocation"
        onChange={handleChange}
        onBlur={handleBlur}
        validate={validateTakeoffLocation}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
