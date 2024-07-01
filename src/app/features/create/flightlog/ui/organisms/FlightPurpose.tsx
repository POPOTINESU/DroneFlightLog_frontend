import {
  Card,
  Checkbox,
  CheckboxGroup,
  FormLabel,
  Heading,
} from "@chakra-ui/react";
import { Field } from "formik";
import React from "react";

type FlightPurposeProps = {
  values: {
    flightPurpose: string[];
  };
  setFieldValue: (field: string, value: any) => void;
};

export const FlightPurpose = (props: FlightPurposeProps) => {
  const { values, setFieldValue } = props;
  return (
    <>
      <FormLabel mb={0}>飛行目的</FormLabel>
      <CheckboxGroup
        value={values.flightPurpose}
        onChange={(value) => setFieldValue("flightPurpose", value)}
      >
        <Card p={2}>
          <Heading size="sm" mb={2}>
            業務
          </Heading>
          <Field as={Checkbox} id="aerialPhotography" value="aerialPhotography">
            空撮
          </Field>
          <Field as={Checkbox} id="newsReporting" value="newsReporting">
            報道取材
          </Field>
          <Field as={Checkbox} id="security" value="security">
            警備
          </Field>
          <Field as={Checkbox} id="agriculture" value="agriculture">
            農林水産業
          </Field>
          <Field as={Checkbox} id="surveying" value="surveying">
            測量
          </Field>
          <Field
            as={Checkbox}
            id="environmentalSurvey"
            value="environmentalSurvey"
          >
            環境調査
          </Field>
          <Field as={Checkbox} id="maintenance" value="maintenance">
            設備メンテナンス
          </Field>
          <Field
            as={Checkbox}
            id="infrastructureInspection"
            value="infrastructureInspection"
          >
            インフラ点検・保守
          </Field>
          <Field
            as={Checkbox}
            id="resourceManagement"
            value="resourceManagement"
          >
            資源管理
          </Field>
          <Field as={Checkbox} id="transportDelivery" value="transportDelivery">
            輸送・宅配
          </Field>
          <Field as={Checkbox} id="natureObservation" value="natureObservation">
            自然観測
          </Field>
          <Field
            as={Checkbox}
            id="accidentDisasterResponse"
            value="accidentDisasterResponse"
          >
            事故・災害対応
          </Field>
          <Heading size="sm" my={2}>
            業務以外
          </Heading>
          <Field as={Checkbox} id="hobby" value="hobby">
            趣味
          </Field>
          <Field
            as={Checkbox}
            id="researchDevelopment"
            value="researchDevelopment"
          >
            研究開発
          </Field>
          <Field as={Checkbox} value="other">
            その他 (飛行概要に記載してください)
          </Field>
        </Card>
      </CheckboxGroup>
    </>
  );
};
