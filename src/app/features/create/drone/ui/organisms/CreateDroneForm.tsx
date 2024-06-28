"use client";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  Select,
  Stack,
} from "@chakra-ui/react";
import { Form, Formik, Field, FieldArray } from "formik";
import React, { useEffect, useState } from "react";
import { PurchaseDateInputField } from "../../../group/ui/molecules/PurchaseDateInputField";
import { SubmitButton } from "../../../group/ui/atoms/SubmitButton/SubmitButton";
import { DroneNumberInputField } from "../../../group/ui/molecules/DroneNumberInputField";
import { JUNumberInputField } from "../../../group/ui/molecules/JUNumberInputField";
import * as Yup from "yup";
import { fetchGroupList } from "@/app/features/flightlog/api/group/FetchGroupList";
import { GroupNameInputField } from "../../../group/ui/molecules/GroupNameInputField";

export const CreateDroneForm = () => {
  const ValidationSchema = Yup.object().shape({
    sets: Yup.array().of(
      Yup.object().shape({
        droneNumber: Yup.string().required("ドローン番号を入力してください"),
        JUNumber: Yup.string()
          .required("機体登録番号を入力してください")
          .matches(/JU/, "機体登録番号はJUから始まる番号を入力してください"),
        purchaseDate: Yup.string().required("購入日を入力してください"),
      })
    ),
    groupName: Yup.string().required("グループ名を選択してください"),
  });

  type Group = {
    id: number;
    name: string;
    user_count: number;
    drone_count: number;
  };

  const [groupList, setGroupList] = useState<Group[]>([]);

  useEffect(() => {
    fetchGroupList().then((data) => {
      setGroupList(data);
    });
  }, []);

  return (
    <Box>
      <Formik
        initialValues={{
          sets: [{ droneNumber: "", JUNumber: "", purchaseDate: "" }],
          groupName: "",
        }}
        validationSchema={ValidationSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={async (values) => {
          console.log(values);
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
          validateField,
        }) => (
          <Box>
            <Form onSubmit={handleSubmit}>
              <Stack spacing={5}>
                <FormControl
                  isInvalid={!!errors.groupName && touched.groupName}
                >
                  <Select
                    name="groupName"
                    value={values.groupName}
                    onChange={handleChange}
                    placeholder="グループ名を選択してください"
                  >
                    {groupList && groupList.length > 0 ? (
                      groupList.map((group: Group) => (
                        <option key={group.id} value={group.name}>
                          {group.name}
                        </option>
                      ))
                    ) : (
                      <option>グループが見つかりませんでした</option>
                    )}
                  </Select>
                  <FormErrorMessage>{errors.groupName}</FormErrorMessage>
                </FormControl>
              </Stack>
              <FieldArray name="sets">
                {({ insert, remove, push }) => (
                  <Box>
                    {values.sets.map((set, index) => (
                      <Box key={index}>
                        <Box>
                          <Field name={`sets[${index}].droneNumber`}>
                            {({ field, form, meta }: any) => (
                              <FormControl
                                isInvalid={meta.touched && !!meta.error}
                              >
                                <DroneNumberInputField
                                  {...field}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    handleChange(e);
                                    form.setFieldValue(
                                      field.name,
                                      e.target.value
                                    );
                                  }}
                                  onBlur={async (
                                    e: React.FocusEvent<HTMLInputElement>
                                  ) => {
                                    handleBlur(e);
                                    await validateField(field.name);
                                  }}
                                />
                                <FormErrorMessage>
                                  {meta.error}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box>
                          <Field name={`sets[${index}].JUNumber`}>
                            {({ field, form, meta }: any) => (
                              <FormControl
                                isInvalid={meta.touched && !!meta.error}
                              >
                                <JUNumberInputField
                                  {...field}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    handleChange(e);
                                    form.setFieldValue(
                                      field.name,
                                      e.target.value
                                    );
                                  }}
                                />
                                <FormErrorMessage>
                                  {meta.error}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box>
                          <Field name={`sets[${index}].purchaseDate`}>
                            {({ field, form, meta }: any) => (
                              <FormControl
                                isInvalid={meta.touched && !!meta.error}
                              >
                                <PurchaseDateInputField
                                  {...field}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    handleChange(e);
                                    form.setFieldValue(
                                      field.name,
                                      e.target.value
                                    );
                                  }}
                                />
                                <FormErrorMessage>
                                  {meta.error}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                      </Box>
                    ))}
                    <Flex justifyContent="flex-end" m={2} gap={2}>
                      <Button
                        onClick={() =>
                          push({
                            droneNumber: "",
                            JUNumber: "",
                            purchaseDate: "",
                          })
                        }
                        colorScheme="blue"
                      >
                        追加
                      </Button>
                      <Button
                        onClick={() => remove(values.sets.length - 1)}
                        colorScheme="red"
                      >
                        削除
                      </Button>
                    </Flex>
                  </Box>
                )}
              </FieldArray>
              <Flex gap={2}>
                <SubmitButton />
              </Flex>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};