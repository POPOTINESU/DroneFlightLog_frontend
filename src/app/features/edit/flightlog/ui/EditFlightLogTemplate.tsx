"use client";
import React, { useEffect, useState, useRef } from "react";
import { fetchFlightLogShow } from "../api/fetchFlightLogShow";
import { useParams, useRouter } from "next/navigation";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Select,
  Text,
  Flex,
  Button,
  Input,
  CheckboxGroup,
  Checkbox,
  Card,
} from "@chakra-ui/react";
import { Field, Formik } from "formik";
import { FlightDateInputField } from "@/app/features/create/flightlog/ui/molecules/FlightDateInputField";
import { FlightSummaryInputField } from "@/app/features/create/flightlog/ui/molecules/FlightSummaryInputField";
import { TakeOffTimeInputField } from "@/app/features/create/flightlog/ui/molecules/TakeOffTimeInputField";
import { LandingTimeInputField } from "@/app/features/create/flightlog/ui/molecules/LandingTimeInputField";
import { TotalTimeInputField } from "@/app/features/create/flightlog/ui/molecules/TotalTimeInputField";
import { handleCalcTime } from "@/app/features/create/flightlog/utility/handleCalcTime";
import { FlightPurpose } from "@/app/features/create/flightlog/ui/organisms/FlightPurpose";
import { SubmitButton } from "@/app/shared/components/atoms/SubmitButton/SubmitButton";
import { format } from "path";
import { fetchFlightLogUpdate } from "../api/fetchFlightLogUpdate";

type FlightLogDetails = {
  flight_log: {
    id: string;
    flight_date: string;
    takeoff_time: string;
    landing_time: string;
    takeoff_location: string;
    landing_location: string;
    flight_summary: string;
    total_time: string;
    flight_purpose: string[];
    specific_flight_types: string[];
  };
  drones: {
    id: string;
    JUNumber: string;
  }[];
  users: {
    id: string;
    full_name: string;
  }[];
  groups: {
    id: string;
    name: string;
  }[];
};

export const EditFlightLogTemplate = () => {
  const router = useRouter();
  const params = useParams();
  const flightlog_id = params.flightlog_id as string;
  const [flightLog, setFlightLog] = useState<FlightLogDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [takeoffTimeChange, setTakeoffTimeChange] = useState<string>("");
  const [landingTimeChange, setLandingTimeChange] = useState<string>("");
  const [totalTimeChange, setTotalTimeChange] = useState<string>("");

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

  useEffect(() => {
    const fetchFlightLogDetail = async () => {
      try {
        const data = await fetchFlightLogShow(flightlog_id);
        setFlightLog(data);

        const takeoffTime = data.flight_log.takeoff_time;
        const landingTime = data.flight_log.landing_time;
        const totalTime = data.flight_log.total_time;

        const formattedTakeoffTime = formattedTime(takeoffTime);
        const formattedLandingTime = formattedTime(landingTime);
        const formattedTotalTime = formattedTime(totalTime);

        setTakeoffTimeChange(formattedTakeoffTime);
        setLandingTimeChange(formattedLandingTime);
        setTotalTimeChange(formattedTotalTime);
      } catch (err) {
        setError("Failed to fetch flight log details.");
      } finally {
        setLoading(false);
      }
    };
    fetchFlightLogDetail();
  }, [flightlog_id]);

  const formattedTime = (time: string) => {
    return time.split("T")[1].split("+")[0].substring(0, 5);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <Box>
      <Heading size="md">飛行記録編集</Heading>
      {flightLog && (
        <Box>
          <Box>
            {flightLog.groups.map((group) => (
              <Text size="md" key={group.id}>
                グループ名: {group.name}
              </Text>
            ))}
          </Box>
          <Formik
            initialValues={{
              flightDate: flightLog.flight_log.flight_date,
              pilotName: flightLog.users[0]?.id || "",
              JUNumber: flightLog.drones[0]?.id || "",
              flightSummary: flightLog.flight_log.flight_summary,
              takeoffLocation: flightLog.flight_log.takeoff_location,
              LandingLocation: flightLog.flight_log.landing_location,
              takeOffTime: takeoffTimeChange,
              landingTime: landingTimeChange,
              totalTime: totalTimeChange,
              presence_of_malfunction: "",
              malfunction_content: "",
              flightPurpose: flightLog.flight_log.flight_purpose || [],
              specificFlightTypes:
                flightLog.flight_log.specific_flight_types || [],
            }}
            onSubmit={async (values) => {
              try {
                const response = await fetchFlightLogUpdate({
                  id: flightlog_id,
                  values: {
                    flightDate: values.flightDate,
                    pilotName: values.pilotName,
                    JUNumber: flightLog.drones[0].id,
                    groupID: flightLog.groups[0].id,
                    flightSummary: values.flightSummary,
                    takeoffLocation: values.takeoffLocation,
                    LandingLocation: values.LandingLocation,
                    takeOffTime: values.takeOffTime,
                    landingTime: values.landingTime,
                    totalTime: values.totalTime,
                    presence_of_malfunction: values.presence_of_malfunction,
                    malfunction_content: values.malfunction_content,
                    flightPurpose: values.flightPurpose,
                    specificFlightTypes: values.specificFlightTypes,
                  },
                });
                if (response === 200) {
                  router.push(`/`);
                }
              } catch (error) {
                alert("エラーが発生しました。もう一度お試しください。");
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
                <form onSubmit={handleSubmit}>
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
                        {flightLog.users.length > 0 ? (
                          flightLog.users.map((user) => (
                            <option key={user.id} value={user.id}>
                              {user.full_name}
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
                        {flightLog.drones.length > 0 ? (
                          flightLog.drones.map((drone) => (
                            <option key={drone.id} value={drone.id}>
                              {drone.JUNumber}
                            </option>
                          ))
                        ) : (
                          <option>機体が登録されていません</option>
                        )}
                      </Select>
                      <FormErrorMessage>{errors.JUNumber}</FormErrorMessage>
                    </FormControl>

                    <FormControl>
                      <FlightPurpose
                        values={values}
                        setFieldValue={setFieldValue}
                      />
                    </FormControl>
                    <FormControl>
                      {flightLog.flight_log.specific_flight_types ? (
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
                            <Field
                              as={Checkbox}
                              id="objectDrop"
                              value="objectDrop"
                            >
                              物件投下
                            </Field>
                          </Card>
                        </CheckboxGroup>
                      ) : null}
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
                      <FormErrorMessage>
                        {errors.flightSummary}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl>
                      <Flex mb={2} alignItems="center">
                        <FormLabel htmlFor="takeoffLocation" mb={0}>
                          離陸地点
                        </FormLabel>
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
                      <FormErrorMessage>
                        {errors.takeoffLocation}
                      </FormErrorMessage>
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
                            setFieldValue(
                              "LandingLocation",
                              values.takeoffLocation
                            )
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
                      <FormErrorMessage>
                        {errors.LandingLocation}
                      </FormErrorMessage>
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
                        <FormErrorMessage>
                          {errors.takeOffTime}
                        </FormErrorMessage>
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
                        <FormErrorMessage>
                          {errors.landingTime}
                        </FormErrorMessage>
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
                    <FormControl
                      isInvalid={
                        !!errors.presence_of_malfunction &&
                        touched.presence_of_malfunction
                      }
                    >
                      <FormLabel mb={0}>故障の有無</FormLabel>
                      <Select
                        name="presence_of_malfunction"
                        onChange={(e) => {
                          handleChange(e);
                          setFieldValue(
                            "presence_of_malfunction",
                            e.target.value
                          );
                        }}
                        onBlur={handleBlur}
                        value={values.presence_of_malfunction}
                      >
                        <option value="">選択してください</option>
                        <option value="あり">あり</option>
                        <option value="なし">なし</option>
                      </Select>
                      <FormErrorMessage>
                        {errors.presence_of_malfunction}
                      </FormErrorMessage>
                    </FormControl>
                  </Box>
                  {values.presence_of_malfunction === "あり" && (
                    <Box>
                      <FormControl
                        isInvalid={
                          !!errors.malfunction_content &&
                          touched.malfunction_content
                        }
                      >
                        <FormLabel mb={0}>故障内容</FormLabel>
                        <Field
                          as={Input}
                          type="text"
                          placeholder="故障内容を入力"
                          value={values.malfunction_content}
                          name="malfunction_content"
                          onChange={handleChange}
                          onBlur={handleBlur}
                        />
                        <FormErrorMessage>
                          {errors.malfunction_content}
                        </FormErrorMessage>
                      </FormControl>
                    </Box>
                  )}
                  <Box mt={4}>
                    <SubmitButton buttonName="編集内容を保存" />
                  </Box>
                </form>
              );
            }}
          </Formik>
        </Box>
      )}
    </Box>
  );
};
