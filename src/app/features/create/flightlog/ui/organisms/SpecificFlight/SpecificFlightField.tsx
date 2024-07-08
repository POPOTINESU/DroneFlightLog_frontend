import {
  Card,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";
import { Field } from "formik";
import React, { useState } from "react";

type SpecificFlightFieldTypes = {
  setFieldValue: (field: string, value: any) => void;
  values: any;
};

export const SpecificFlightField = (props: SpecificFlightFieldTypes) => {
  const { setFieldValue, values } = props;
  const [specificFlight, setSpecificFlight] = useState(false);
  const selectSpecificFlight = () => {
    setSpecificFlight(!specificFlight);
  };
  return (
    <FormControl my={2}>
      <Flex>
        <FormLabel htmlFor="specificFlight">特定飛行に該当しますか？</FormLabel>
        <Switch
          id="specificFlight"
          name="specificFlight"
          onChange={selectSpecificFlight}
        />
        {specificFlight ? "該当" : "該当しない"}
      </Flex>
      {specificFlight ? (
        <CheckboxGroup
          value={values.specificFlightTypes}
          onChange={(value) => setFieldValue("specificFlightTypes", value)}
        >
          <Card p={2}>
            <Field as={Checkbox} id="nightFlight" value="nightFlight">
              夜間飛行
            </Field>
            <Field
              as={Checkbox}
              id="beyondVisualLineOfSight"
              value="beyondVisualLineOfSight"
            >
              目視外飛行
            </Field>
            <Field
              as={Checkbox}
              id="closeToPeopleBuildings"
              value="closeToPeopleBuildings"
            >
              人・家屋等から30m未満
            </Field>
            <Field as={Checkbox} id="overEventSites" value="overEventSites">
              催し場所上空
            </Field>
            <Field
              as={Checkbox}
              id="dangerousGoodsTransport"
              value="dangerousGoodsTransport"
            >
              危険物・薬品輸送
            </Field>
            <Field as={Checkbox} id="objectDrop" value="objectDrop">
              物件投下
            </Field>
          </Card>
        </CheckboxGroup>
      ) : null}
    </FormControl>
  );
};
