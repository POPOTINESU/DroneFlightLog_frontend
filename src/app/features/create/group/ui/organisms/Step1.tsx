"use client";
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { GroupNameInputField } from "../molecules/GroupNameInputField";
import { FormStepState } from "../../state/FormStepState";
import { useRecoilState } from "recoil";
import { NextStepButton } from "../atoms/StepButton/NextStepButton";

/**
 * グループ名と、招待相手のメールアドレスを入力するフォーム
 * メールアドレスは複数入力可能
 * ページ移動する前にバリデーションを行い、sessionに保存する
 */
export const Step1 = () => {
  const [step, setStep] = useRecoilState(FormStepState);
  const [initialValues, setInitialValues] = useState({
    groupName: "",
    emails: "",
  });

  useEffect(() => {
    const groupNameSessionData = sessionStorage.getItem("groupName");
    const emails = sessionStorage.getItem("emails");

    setInitialValues({
      groupName: groupNameSessionData ? groupNameSessionData : "",
      emails: emails ? JSON.parse(emails).join("\n") : "",
    });
  }, []);

  const GroupNameValidate = (value: string) => {
    let error;
    if (!value) {
      error = "グループ名を入力してください";
    }
    return error;
  };

  const validateEmails = (value: string) => {
    let error;
    if (!value) {
      error = "メールアドレスを入力してください";
    } else {
      const emailArray = value.split("\n").map((email) => email.trim());
      emailArray.forEach((email, index) => {
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
          error = `メールアドレスの形式が正しくありません (${index + 1})`;
        }
      });
    }
    return error;
  };

  return (
    <Formik
      enableReinitialize={true}
      initialValues={initialValues}
      validate={(values) => {
        const errors: { groupName?: string; emails?: string } = {};
        const groupNameError = GroupNameValidate(values.groupName);
        if (groupNameError) {
          errors.groupName = groupNameError;
        }
        const emailError = validateEmails(values.emails);
        if (emailError) {
          errors.emails = emailError;
        }
        return errors;
      }}
      onSubmit={(values) => {
        const emailArray = values.emails
          .split("\n")
          .map((email) => email.trim());

        //データをセッションに保存する
        sessionStorage.setItem("groupName", values.groupName);
        sessionStorage.setItem("emails", JSON.stringify(emailArray));

        //次のステップに移動
        setStep(2);
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
        <Form>
          <Box mb={5}>
            <FormControl isInvalid={!!errors.groupName && touched.groupName}>
              <GroupNameInputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.groupName}
                validate={GroupNameValidate}
              />
              <FormErrorMessage>{errors.groupName}</FormErrorMessage>
            </FormControl>
          </Box>
          <Box my={2} maxHeight="160px">
            <FormControl isInvalid={!!errors.emails && touched.emails}>
              <FormLabel htmlFor="emails" marginBottom="0">
                招待するユーザーのメールアドレス
              </FormLabel>
              <Textarea
                name="emails"
                value={values.emails}
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="複数入力の場合は、改行で入力してください"
                rows={5}
                resize="none"
              />
              <FormErrorMessage>{errors.emails}</FormErrorMessage>
            </FormControl>
          </Box>
          <NextStepButton
            isSubmitting={isSubmitting}
            handleSubmit={handleSubmit}
          />
        </Form>
      )}
    </Formik>
  );
};
