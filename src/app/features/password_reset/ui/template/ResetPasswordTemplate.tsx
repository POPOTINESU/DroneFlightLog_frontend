"use client";

import { useState } from "react";
import axios from "axios";
import { Box, Card, CardBody,Heading, VStack, Flex } from "@chakra-ui/react";
import { SuccessMessage } from "@/app/shared/ui/atoms/alert/SuccessMessage/SuccessMessage";
import { Formik } from "formik";
import { ResetPasswordForm } from "../organisms/ResetPasswordForm";
import { ErrorMessage } from "@/app/shared/ui/atoms/alert/ErrorMessage/ErrorMessage";
import { handleRestPassword } from "../../api/handleRestPassword";

export const ResetPasswordTemplate = () => {
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const sendResetPassword = async(email: string) => {
    try {
      const response = await handleRestPassword(email);
      if (response === 200) {
        setMessage("パスワードリセットメールを送信しました。");
      }
    } catch (error) {
      setErrorMessage("パスワードリセットメールの送信に失敗しました。");
    }
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      background="gray.100"
    >
      <Card width="50%" py={10} >
        <Flex direction="column" justify="center" align="center" height="100%">
          <VStack spacing={4}>
            <Heading>パスワードリセット</Heading>
            <SuccessMessage successMessage={message} />
            <ErrorMessage errorMessage={errorMessage} />
            <CardBody>
              <Formik
                initialValues={{
                  email: "",
                }}
                onSubmit={async (values) => {
                  sendResetPassword(values.email);
                }}
              >
                {({ values, errors, touched, handleChange, handleBlur }) => (
                  <ResetPasswordForm
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={{ email: errors.email }}
                    touched={{ email: touched?.email ?? false }}
                  />
                )}
              </Formik>
            </CardBody>
          </VStack>
        </Flex>
      </Card>
    </Box>
  );
};