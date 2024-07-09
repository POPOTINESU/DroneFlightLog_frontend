"use client";
import {
  Box,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { GroupNameInputField } from "../../molecules/GroupNameInputField";
import { FormStepState } from "../../../state/FormStepState";
import { useRecoilState } from "recoil";
import { NextStepButton } from "../../atoms/StepButton/NextStepButton";
import { MulchEmailField } from "../MulchEmailField/MulchEmailField";
import { validateEmails } from "./validation/MaltipulEmailValidate";
import { GroupNameValidate } from "./validation/GroupNameValidate";

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
            <GroupNameInputField
              value={values.groupName}
              errors={errors}
              touched={touched}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </Box>
          <Box my={2} maxHeight="160px">
            <MulchEmailField
              values={values}
              errors={errors}
              touched={touched}
              handleChange={handleChange}
              handleBlur={handleBlur}
            />
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
