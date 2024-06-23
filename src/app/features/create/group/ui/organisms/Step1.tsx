import { Flex, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import { GroupNameInputField } from "../molecules/GroupNameInputField";

/**
 * グループ名と、招待相手のメールアドレスを入力するフォーム
 * メールアドレスは複数入力可能
 * ページ移動する前にバリデーションを行い、sessionに保存する
 */
export const Step1 = () => {
  const GroupNameValidate = (value: string) => {
    let error;
    if (!value) {
      error = "グループ名を入力してください";
    }
    return error;
  };
  const emailValidate = (value: string) => {
    let error;
    if (!value) {
      error = "メールアドレスを入力してください";
    } else if (!value.includes("@")) {
      error = "メールアドレスの形式が正しくありません";
    }
    return error;
  };

  return (
    <Formik
      initialValues={{ groupName: "", email: "" }}
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
        <Form>
          <Flex>
            <FormControl isInvalid={!!errors.groupName && touched.groupName}>
              <GroupNameInputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.groupName}
                validate={GroupNameValidate}
              />
              <FormErrorMessage>{errors.groupName}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={!!errors.groupName && touched.groupName}>
              <GroupNameInputField
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.groupName}
                validate={GroupNameValidate}
              />
              <FormErrorMessage>{errors.groupName}</FormErrorMessage>
            </FormControl>
          </Flex>
        </Form>
      )}
    </Formik>
  );
};
