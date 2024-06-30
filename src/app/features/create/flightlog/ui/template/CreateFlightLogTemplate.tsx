"use client";
import {
  Box,
  Card,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Switch,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useCallback, useRef, useState } from "react";
import { FlightDateInputField } from "../molecules/FlightDateInputField";
import { PilotNameInputField } from "../molecules/PilotNameInputField";
import { SubmitButton } from "../../../group/ui/atoms/SubmitButton/SubmitButton";
import { TakeOffTimeInputField } from "../molecules/TakeOffTimeInputField";
import { LandingTimeInputField } from "../molecules/LandingTimeInputField";
import { TotalTimeInputField } from "../molecules/TotalTimeInputField";
import { FlightSummaryInputField } from "../molecules/FlightSummaryInputField";

import { useRecoilState, useRecoilValue } from "recoil";
import { SelectedGroupState } from "@/app/features/header/state/SelectedGroupState";
import { handleCalcTime } from "../../utility/handleCalcTime";
import { fetchGroupDetail } from "../../../group/api/fetchGroupDetail";
import { GroupListState } from "@/app/features/header/state/GroupListState";

/**
 * 新規飛行記録作成
 *
 * flight_date: 飛行日
 * pilotName: 操縦者名
 * JU_number: 機体登録番号
 * flight_summary: 飛行概要
 * takeoff_location: 離陸地点
 * landing_location: 着陸地点
 * takeOffTime: 離陸時刻
 * LandingTime: 着陸時刻
 * TotalTime: 飛行時間
 * presence_of_malfunction: 故障の有無
 */

type GroupDetail = {
  name: string;
  users: { name: string; email: string; role: string; status: string }[];
  drones: {
    id: string;
    drone_number: string;
    JUNumber: string;
    purchaseDate: string;
  }[];
};

export const CreateFlightLogTemplate = () => {
  const [specificFlight, setSpecificFlight] = useState(false);
  const [selectedGroup, setSelectedGroup] = useRecoilState(SelectedGroupState);
  const [groupDetail, setGroupDetail] = useState<GroupDetail | null>(null);
  const [clientName, setClientName] = useState("");

  useEffect(() => {
    const fetchGroup = async () => {
      setClientName(selectedGroup.name);
      try {
        const groupID = selectedGroup.id;
        console.log(groupID);
        const data = await fetchGroupDetail({ id: groupID });

        setGroupDetail(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchGroup();
  }, [selectedGroup]);

  const validateFlightDate = (value: string) => {
    let error;
    if (!value) {
      error = "飛行日を入力してください";
    }
    return error;
  };

  const validateFlightSummary = (value: string) => {
    let error;
    if (!value) {
      error = "飛行概要を入力してください";
    }
    return error;
  };

  const selectSpecificFlight = () => {
    setSpecificFlight(!specificFlight);
  };

  return (
    <Box>
      <Heading size="md">新規飛行記録作成</Heading>
      <Text py={2}>グループ名: {clientName}</Text>
      <Formik
        initialValues={{
          flightDate: "",
          pilotName: "",
          JU_number: "",
          flightSummary: "",
          takeoff_location: "",
          landing_location: "",
          takeOffTime: "",
          landingTime: "",
          totalTime: "",
          presence_of_malfunction: "",
          malfunction_content: "",
        }}
        onSubmit={(values) => {
          console.log(values);
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
                <FormControl
                  isInvalid={!!errors.flightDate && touched.flightDate}
                >
                  <FlightDateInputField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.flightDate}
                    validate={validateFlightDate}
                  />
                  <FormErrorMessage>{errors.flightDate}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl
                  isInvalid={!!errors.pilotName && touched.pilotName}
                >
                  <FormLabel>操縦者名</FormLabel>
                  <Select>
                    {groupDetail && groupDetail.users.length > 0 ? (
                      groupDetail.users.map((user) => (
                        <option key={user.email} value={user.email}>
                          {user.name}
                        </option>
                      ))
                    ) : (
                      <option>ユーザーが登録されていません</option>
                    )}
                  </Select>

                  <FormErrorMessage>{errors.pilotName}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel mb={0}>機体登録番号</FormLabel>
                  <Select>
                    {groupDetail && groupDetail.drones.length > 0 ? (
                      groupDetail.drones.map((drone) => (
                        <option key={drone.id} value={drone.id}>
                          {drone.drone_number}
                        </option>
                      ))
                    ) : (
                      <option>機体が登録されていません</option>
                    )}
                  </Select>
                  <FormErrorMessage>{errors.JU_number}</FormErrorMessage>
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FlightSummaryInputField
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.flightSummary}
                    validate={validateFlightSummary}
                  />
                  <FormErrorMessage>{errors.flightSummary}</FormErrorMessage>
                </FormControl>
                <FormControl>
                  <FormLabel mb={0}>飛行目的</FormLabel>
                  <CheckboxGroup>
                    <Card p={2}>
                      <Heading size="sm" mb={2}>
                        業務
                      </Heading>
                      <Checkbox value="1">空撮</Checkbox>
                      <Checkbox value="2">報道取材</Checkbox>
                      <Checkbox value="3">警備</Checkbox>
                      <Checkbox value="4">農林水産業</Checkbox>
                      <Checkbox value="5">測量</Checkbox>
                      <Checkbox value="6">環境調査</Checkbox>
                      <Checkbox value="7">設備メンテナンス</Checkbox>
                      <Checkbox value="8">インフラ点検・保守</Checkbox>
                      <Checkbox value="9">資源管理</Checkbox>
                      <Checkbox value="10">輸送・宅配</Checkbox>
                      <Checkbox value="11">自然観測</Checkbox>
                      <Checkbox value="12">事故・災害対応</Checkbox>
                      <Heading size="sm" my={2}>
                        業務以外
                      </Heading>
                      <Checkbox value="13">趣味</Checkbox>
                      <Checkbox value="14">研究開発</Checkbox>
                      <Checkbox value="15">
                        その他 (飛行概要に記載してください)
                      </Checkbox>
                    </Card>
                  </CheckboxGroup>
                </FormControl>

                <FormControl my={2}>
                  <Flex>
                    <FormLabel htmlFor="specificFlight">
                      特定飛行に該当しますか？
                    </FormLabel>
                    <Switch
                      id="specificFlight"
                      name="specificFlight"
                      onChange={selectSpecificFlight}
                    />
                    {specificFlight ? "該当" : "該当しない"}
                  </Flex>
                  {specificFlight ? (
                    <CheckboxGroup>
                      <Card p={2}>
                        <Checkbox value="1">夜間飛行</Checkbox>
                        <Checkbox value="2">目視外飛行</Checkbox>
                        <Checkbox value="3">人・家屋等から30m未満</Checkbox>
                        <Checkbox value="4">催し場所上空</Checkbox>
                        <Checkbox value="5">危険物・薬品輸送</Checkbox>
                        <Checkbox value="6">物件投下</Checkbox>
                      </Card>
                    </CheckboxGroup>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>離陸地点</FormLabel>
                  <Input
                    type="text"
                    name="takeoff_location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.takeoff_location}
                  />
                </FormControl>
              </Box>
              <Box>
                <FormControl>
                  <FormLabel>着陸地点</FormLabel>
                  <Input
                    type="text"
                    name="landing_location"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.landing_location}
                  />
                </FormControl>
              </Box>
              <Box>
                <Flex>
                  <FormControl
                    isInvalid={!!errors.takeOffTime && touched.takeOffTime}
                  >
                    <TakeOffTimeInputField
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue("takeOffTime", e.target.value);
                      }}
                      value={values.takeOffTime}
                      validate={validateFlightDate}
                    />
                    <FormErrorMessage>{errors.takeOffTime}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.landingTime && touched.landingTime}
                  >
                    <LandingTimeInputField
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue("landingTime", e.target.value);
                      }}
                      value={values.landingTime}
                      validate={validateFlightDate}
                    />
                    <FormErrorMessage>{errors.landingTime}</FormErrorMessage>
                  </FormControl>
                  <FormControl
                    isInvalid={!!errors.totalTime && touched.totalTime}
                  >
                    <TotalTimeInputField
                      onBlur={handleBlur}
                      onChange={(e) => {
                        handleChange(e);
                        setFieldValue("totalTime", e.target.value);
                        isManualInput.current = true;
                      }}
                      value={values.totalTime}
                      validate={validateFlightDate}
                    />
                    <FormErrorMessage>{errors.totalTime}</FormErrorMessage>
                  </FormControl>
                </Flex>
              </Box>
              <Box>
                <FormControl>
                  <Flex my={2}>
                    <FormLabel>故障の有無</FormLabel>
                    <Switch
                      id="presence_of_malfunction"
                      name="presence_of_malfunction"
                      onChange={handleChange}
                    />
                    {values.presence_of_malfunction == "on" ? "有り" : "無し"}
                  </Flex>
                  {values.presence_of_malfunction == "on" ? (
                    <FormControl>
                      <FormLabel>故障内容</FormLabel>
                      <Input
                        type="textarea"
                        name="malfunction_content"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.malfunction_content}
                      />
                    </FormControl>
                  ) : (
                    <></>
                  )}
                </FormControl>
              </Box>
              <SubmitButton />
            </Form>
          );
        }}
      </Formik>
    </Box>
  );
};
