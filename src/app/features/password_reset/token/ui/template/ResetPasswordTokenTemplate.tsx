"use client";
import { SubmitButton } from "@/app/shared/ui/atoms/SubmitButton/SubmitButton";
import { Box, Heading, VStack, Center, Card, Flex } from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { handlePasswordToken } from "../../api/handlePasswordToken";
import { ResetPasswordField } from "../organisms/ResetPasswordField/ResetPasswordField";
import { ResetConfirmPasswordField } from "../organisms/ResetConfirmPasswordField/ResetConfirmPasswordField";

export const ResetPasswordTokenTemplate = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      background="gray.100"
      p={4}
    >
      <Card
        width={["100%", "80%", "60%", "50%"]}
        height="90%"
        py={10}
        px={[4, 8, 12, 100, 200]}
      >
        <Flex
          direction="column"
          justify="center"
          align="center"
          height="100%"
        >
          <VStack spacing={8} width="100%">
            <Heading size="md, lg">パスワードリセット</Heading>
            <Formik
              initialValues={{ password: "", passwordConfirmation: "" }}
              onSubmit={async (values) => {
                if (values.password === values.passwordConfirmation) {
                  try {
                    const response = await handlePasswordToken({
                      token: token!,
                      password: values.password,
                      passwordConfirmation: values.passwordConfirmation,
                    });
                    if (response === 200) {
                      router.push("/login");
                    } else {
                      console.log("パスワードリセットに失敗しました");
                    }
                  } catch (error) {
                    console.log("パスワードリセットに失敗しました");
                  }
                } else {
                  console.log("パスワードが一致しません");
                }
              }}
            >
              {() => (
                <Form style={{ width: '100%' }}>
                  <Box py={10}>
                    <ResetPasswordField
                      name="password"
                      label="新しいパスワード"
                    />
                  </Box>
                  <Box pb={10}>
                    <ResetConfirmPasswordField
                      name="passwordConfirmation"
                      label="パスワード確認"
                    />
                  </Box>
                  <Box textAlign="center">
                    <SubmitButton buttonName="パスワードリセット" />
                  </Box>
                </Form>
              )}
            </Formik>
          </VStack>
        </Flex>
      </Card>
    </Box>
  );
};