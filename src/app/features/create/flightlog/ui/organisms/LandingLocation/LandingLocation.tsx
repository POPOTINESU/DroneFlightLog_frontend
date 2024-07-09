import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
} from "@chakra-ui/react";

import { Field } from "formik";
import React from "react";
import { landingLocationTypes } from "./types/landingLocationTypes";
import { validateLandingLocation } from "./validation/validateLandingLocation";

export const LandingLocationField = (props: landingLocationTypes) => {
  const { values, setFieldValue, handleChange, handleBlur, error } = props;
  return (
    <FormControl>
      <Flex my={2} alignItems="center">
        <FormLabel mb={0}>着陸地点</FormLabel>
        <Button
          size="sm"
          colorScheme="blue"
          onClick={() =>
            setFieldValue("LandingLocation", values.takeoffLocation)
          }
        >
          離陸地点の値をコピー
        </Button>
      </Flex>
      <Field
        as={Input}
        type="text"
        placeholder="着陸地点を入力"
        value={values.LandingLocation}
        name="LandingLocation"
        onChange={handleChange}
        onBlur={handleBlur}
        validate={validateLandingLocation}
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );
};
