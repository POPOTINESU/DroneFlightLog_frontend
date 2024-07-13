"use client";
import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Switch,
  Text,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useRef, useState } from "react";
import { SubmitButton } from "../../../../../shared/ui/atoms/SubmitButton/SubmitButton";

import { useRecoilState } from "recoil";
import { SelectedGroupState } from "@/app/features/header/state/SelectedGroupState";
import { handleCalcTime } from "../../utility/handleCalcTime";
import { fetchGroupDetail } from "../../../../show/api/fetchGroupDetail";

import { FlightPurpose } from "../organisms/FlightPurpose/FlightPurpose";
import { createFlightLog } from "../../api/createFlightLog";
import { useRouter } from "next/navigation";
import { FlightDateField } from "../organisms/FlightDate/FlightDateField";
import { PilotNameField } from "../organisms/PilotName/PilotNameField";
import { JUNumberField } from "../organisms/JUNumber/JUNumberFiled";
import { GroupDetail } from "../organisms/types/GroupDetail";
import { SpecificFlightField } from "../organisms/SpecificFlight/SpecificFlightField";
import { FlightSummaryField } from "../organisms/FlightSummary/FlightSummaryField";
import { TakeoffLocationField } from "../organisms/TakeoffLocation/TakeoffLocationField";
import { LandingLocationField } from '../organisms/LandingLocation/LandingLocation';
import { TakeoffTimeField } from "../organisms/TakeoffTime/TakeoffTimeField";
import { LandingTimeField } from "../organisms/LandingTimeField/LandingTimeField";
import { TotalTimeField } from "../organisms/TotalTimeField/TotalTimeField";

/**
 * 新規飛行記録作成
 *
 * flight_date: 飛行日
 * pilotName: 操縦者名
 * JUNumber: 機体登録番号
 * flight_summary: 飛行概要
 * takeoffLocation: 離陸地点
 * LandingLocation: 着陸地点
 * takeOffTime: 離陸時刻
 * LandingTime: 着陸時刻
 * TotalTime: 飛行時間
 * presence_of_malfunction: 故障の有無
 */

export const CreateFlightLogTemplate = () => {
  const router = useRouter();

  const [selectedGroup, setSelectedGroup] = useRecoilState(SelectedGroupState);
  const [groupDetail, setGroupDetail] = useState<GroupDetail | null>(null);
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    const fetchGroup = async () => {
      setClientName(selectedGroup.name);
      try {
        const groupID = selectedGroup.id;
        const data = await fetchGroupDetail({ id: groupID });

        setGroupDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, [selectedGroup]);

  return (
    <Box>
      <Heading size="md">新規飛行記録作成</Heading>
      <Text py={2}>グループ名: {clientName}</Text>
      <Formik
        initialValues={{
          flightDate: "",
          pilotName: "",
          JUNumber: "",
          flightSummary: "",
          takeoffLocation: "",
          LandingLocation: "",
          takeOffTime: "",
          landingTime: "",
          totalTime: "",
          presence_of_malfunction: "",
          problem_description: "",
          date_of_resolution_datetime: "",
          corrective_action: "",
          flightPurpose: [],
          specificFlightTypes: [],
        }}
        onSubmit={async (values) => {
          const response = await createFlightLog({ values });
          if (response === 201) {
            router.push("/");
          } else {
            alert("飛行記録の作成に失敗しました");
          }
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
        }) => {
          const isManualInput = useRef(false);

          useEffect(() => {
            handleCalcTime(setFieldValue, values, isManualInput);
            isManualInput.current = false;
          }, [
            values.takeOffTime,
            values.landingTime,
            values.totalTime,
            setFieldValue,
          ]);

          return (
            <Form>
              <Box>
                <FlightDateField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                  touched={touched}
                />
              </Box>
              <Box>
                <PilotNameField
                  setFieldValue={setFieldValue}
                  values={values}
                  fetchGroupDetail={true}
                  groupDetail={groupDetail}
                />
              </Box>
              <Box>
                <JUNumberField
                  setFieldValue={setFieldValue}
                  values={values}
                  groupDetail={groupDetail}
                />
              </Box>
              <Box>
                <FlightSummaryField
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  values={values}
                  errors={errors}
                />
                <FormControl>
                  <FlightPurpose
                    values={values}
                    setFieldValue={setFieldValue}
                  />
                </FormControl>
                <SpecificFlightField
                  setFieldValue={setFieldValue}
                  values={values}
                />
              </Box>
              <Box>
                <TakeoffLocationField
                  setFieldValue={setFieldValue}
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.takeoffLocation}
                />
              </Box>
              <Box>
                <LandingLocationField
                  setFieldValue={setFieldValue}
                  values={values}
                  handleChange={handleChange}
                  handleBlur={handleBlur}
                  error={errors.LandingLocation}
                />
              </Box>
              <Box>
                <Flex>
                  <TakeoffTimeField
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                  />
                  <LandingTimeField
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                  />
                  <TotalTimeField
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                    setFieldValue={setFieldValue}
                    isManualInput={isManualInput}
                  />
                </Flex>
              </Box>
              <Box>
                <FormControl>
                  <Flex my={2}>
                    <FormLabel htmlFor="presence_of_malfunction">
                      故障の有無
                    </FormLabel>
                    <Switch
                      id="presence_of_malfunction"
                      name="presence_of_malfunction"
                      onChange={handleChange}
                    />
                    {values.presence_of_malfunction == "on" ? "有り" : "無し"}
                  </Flex>
                  {values.presence_of_malfunction == "on" ? (
                    <>
                    <FormControl>
                      <FormLabel htmlFor="problem_description">
                        故障内容
                      </FormLabel>
                      <Input
                        type="textarea"
                        name="problem_description"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.problem_description}
                      />
                    </FormControl>
                    <FormControl>
                      <FormLabel htmlFor="date_of_resolution_datetime">
                        対処日時
                      </FormLabel>
                      <Input
                        type="date"
                        name="date_of_resolution_datetime"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.date_of_resolution_datetime}
                      />
                    </FormControl>
                    <FormControl mb={5}>
                      <FormLabel htmlFor="corrective_action">
                        対処内容
                      </FormLabel>
                      <Input
                        type="textarea"
                        name="corrective_action"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.corrective_action}
                      />
                    </FormControl>
                    </>

                  ) : null}
                </FormControl>
              </Box>
              <SubmitButton buttonName="飛行記録作成" />
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
