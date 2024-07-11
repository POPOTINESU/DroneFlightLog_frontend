import { SubmitButton } from "@/app/shared/ui/atoms/SubmitButton/SubmitButton";
import { EmailField } from "@/app/shared/ui/forms/EmailForm/emailFormInput/EmailField/EmailField";
import { emailFieldType } from "@/app/shared/ui/forms/EmailForm/emailFormInput/EmailField/type/emailFieldType";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Form } from "formik";
import React from "react";

type resetPasswordFormType = {
  values: emailFieldType["values"];
  errors: emailFieldType["errors"];
  touched: emailFieldType["touched"];
  handleChange: emailFieldType["handleChange"];
  handleBlur: emailFieldType["handleBlur"];
};

export const ResetPasswordForm = (props: resetPasswordFormType) => {
  const { values, errors, touched, handleChange, handleBlur } = props;
  return (
    <Form>
      <Box>
        <Text mb={10}>パスワードリセット用メールを送信します。</Text>
        <EmailField
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={{ email: errors.email }}
          touched={{ email: touched?.email ?? false }}
        />
        <SubmitButton buttonName="メール送信" />
      </Box>
    </Form>
  );
};
