"use client";
import {
  Box,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { DroneNumberInputField } from "../molecules/DroneNumberInputField";
import { GroupNameInputField } from "../molecules/GroupNameInputField";
import { JUNumberInputField } from "../molecules/JUNumberInputField";
import { PurchaseDateInputField } from "../molecules/PurchaseDateInputField";

export const CreateGroupTemplate = () => {
  // TODO: グループ名, 製造番号, JU番号, 購入日を入力するフォームを作成する
  // TODO: 複数機体を追加する際の検討
  // TODO: フォームのバリデーションを実装する
  // TODO: APIの作成

  const GroupNameValidate = (value: string) => {
    let error;
    if (!value) {
      error = "グループ名を入力してください";
    }
    return error;
  };
  const DroneNumberValidate = (value: string) => {
    let error;
    if (!value) {
      error = "製造番号を入力してください";
    }
    return error;
  }
  const JUNumberValidate = (value: string) => {
    let error;
    if (!value) {
      error = "JU番号を入力してください";
    }
    return error;
  }
  const PurchaseDateValidate = (value: Date) => {
    let error;
    if (!value) {
      error = "購入日を入力してください";
    }
    return error;
  }



  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      background="gray.100"
    >
      <Card width="50%" height="auto" py={10}>
        <VStack>
          <CardHeader>新規グループ作成</CardHeader>
          <CardBody>
            <Formik
              initialValues={{
                groupName: "",
                droneNumber: "",
                JUNumber: "",
                purchaseDate: "",
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
                isSubmitting,
              }) => (
                <Form onSubmit={handleSubmit}>
                  <Flex>
                    <FormControl
                      isInvalid={!!errors.groupName && touched.groupName}
                    >
                      <GroupNameInputField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.groupName}
                        validate={GroupNameValidate}
                      />
                      <FormErrorMessage>{errors.groupName}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.droneNumber && touched.droneNumber}
                    >
                      <DroneNumberInputField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.droneNumber}
                        validate={GroupNameValidate}
                      />
                      <FormErrorMessage>{errors.droneNumber}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.JUNumber && touched.JUNumber}
                    >
                      <JUNumberInputField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.JUNumber}
                        validate={GroupNameValidate}
                      />
                      <FormErrorMessage>{errors.JUNumber}</FormErrorMessage>
                    </FormControl>
                    <FormControl
                      isInvalid={!!errors.purchaseDate && touched.purchaseDate}
                    >
                      <PurchaseDateInputField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.purchaseDate}
                        validate={GroupNameValidate}
                      />
                      <FormErrorMessage>{errors.purchaseDate}</FormErrorMessage>
                    </FormControl>
                  </Flex>
                </Form>
              )}
            </Formik>
          </CardBody>
        </VStack>
      </Card>
    </Box>
  );
};
