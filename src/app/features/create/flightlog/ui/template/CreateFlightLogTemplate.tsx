"use client";
import {
  Box,
  Button,
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
} from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import React, { useEffect, useCallback, useRef, useState } from "react";
import { FlightDateInputField } from "../molecules/FlightDateInputField";
import { SubmitButton } from "../../../../../shared/components/atoms/SubmitButton/SubmitButton";
import { TakeOffTimeInputField } from "../molecules/TakeOffTimeInputField";
import { LandingTimeInputField } from "../molecules/LandingTimeInputField";
import { TotalTimeInputField } from "../molecules/TotalTimeInputField";
import { FlightSummaryInputField } from "../molecules/FlightSummaryInputField";

import { useRecoilState } from "recoil";
import { SelectedGroupState } from "@/app/features/header/state/SelectedGroupState";
import { handleCalcTime } from "../../utility/handleCalcTime";
import { fetchGroupDetail } from "../../../group/api/fetchGroupDetail";

import { FlightPurpose } from "../organisms/FlightPurpose";
import { currentLocation } from "../../api/currentLocation";
import { createFlightLog } from "../../api/createFligthLog";
import { useRouter } from "next/navigation";

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

type GeoLocation = {
  coords: {
    latitude: number;
    longitude: number;
  };
};

type Location = {
  latitude: number;
  longitude: number;
};

export const CreateFlightLogTemplate = () => {
  const router = useRouter();

  const [specificFlight, setSpecificFlight] = useState(false);
  const [selectedGroup, setSelectedGroup] = useRecoilState(SelectedGroupState);
  const [groupDetail, setGroupDetail] = useState<GroupDetail | null>(null);
  const [clientName, setClientName] = useState("");

  const [prefecture, setPrefecture] = useState<string | null>(null);
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleCurrentLocation = useCallback(async (setFieldValue: any) => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        async (position: GeoLocation) => {
          const loc = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(loc);
          try {
            const addressData = await currentLocation(loc);
            const address = addressData.address.split(" ");
            // 都道府県以降の住所を取得する
            const region = address[1];
            setPrefecture(region);
            setFieldValue("takeoffLocation", region);
            setFieldValue("LandingLocation", region);
          } catch (error) {
            setError("Failed to fetch address information.");
          }
        },
        (error) => {
          setError(error.message);
        }
      );
    } else {
      setError("Geolocation is not available");
    }
  }, []);

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
          JUNumber: "",
          flightSummary: "",
          takeoffLocation: "",
          LandingLocation: "",
          takeOffTime: "",
          landingTime: "",
          totalTime: "",
          presence_of_malfunction: "",
          malfunction_content: "",
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
                  <FormLabel mb={0}>操縦者名</FormLabel>
                  <Select
                    name="pilotName"
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue("pilotName", e.target.value);
                    }}
                    onBlur={handleBlur}
                    value={values.pilotName}
                  >
                    <option>操縦者を選択してください</option>
                    {groupDetail &&
                    groupDetail.users &&
                    groupDetail.users.length > 0 ? (
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
                  <Select
                    name="JUNumber"
                    onChange={(e) => {
                      handleChange(e);
                      setFieldValue("JUNumber", e.target.value);
                    }}
                    onBlur={handleBlur}
                    value={values.JUNumber}
                  >
                    <option>機体を選択してください</option>
                    {groupDetail &&
                    groupDetail.drones &&
                    groupDetail.drones.length > 0 ? (
                      groupDetail.drones.map((drone) => (
                        <option key={drone.id} value={drone.id}>
                          {drone.drone_number}
                        </option>
                      ))
                    ) : (
                      <option>機体が登録されていません</option>
                    )}
                  </Select>
                  <FormErrorMessage>{errors.JUNumber}</FormErrorMessage>
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
                  <FlightPurpose
                    values={values}
                    setFieldValue={setFieldValue}
                  />
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
                    <CheckboxGroup
                      value={values.specificFlightTypes}
                      onChange={(value) =>
                        setFieldValue("specificFlightTypes", value)
                      }
                    >
                      <Card p={2}>
                        <Field
                          as={Checkbox}
                          id="nightFlight"
                          value="nightFlight"
                        >
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
                        <Field
                          as={Checkbox}
                          id="overEventSites"
                          value="overEventSites"
                        >
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
              </Box>
              <Box>
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
                  />
                </FormControl>
              </Box>
              <Box>
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
                    <FormControl>
                      <FormLabel htmlFor="malfunction_content">
                        故障内容
                      </FormLabel>
                      <Input
                        type="textarea"
                        name="malfunction_content"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.malfunction_content}
                      />
                    </FormControl>
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
