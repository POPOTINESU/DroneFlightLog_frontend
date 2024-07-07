"use client";

import { Box, Center, Divider, Flex, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import { LoginButton } from "../atoms/loginButton/LoginButton";
import { Formik, Form } from "formik";
import { login } from "../../api/login";
import { useRouter } from "next/navigation";
import { PasswordField } from "./PasswordField/PasswordField";
import { EmailField } from "@/app/shared/ui/forms/EmailForm/emailFormInput/EmailField/EmailField";
import { LoginHeader } from "./PasswordField/LoginHeader";

export const LoginForm = () => {
  const router = useRouter();

  return (
    <VStack>
      <Center height="100vh">
        <Box width="80%" padding="4">
          <LoginHeader />

          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              const isLogin = await login(values);
              if (isLogin === 200) {
                // ログインに成功したらクエリパラメータでメッセージを渡してトップページに遷移
                router.push("/?message=ログインに成功しました。");
              } else {
                alert("メールアドレス、またはパスワードが間違っています。");
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
            }) => (
              <Form onSubmit={handleSubmit}>
                <Box marginBottom="8">
                  <EmailField
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
                <Box>
                  <PasswordField
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    values={values}
                    errors={errors}
                    touched={touched}
                  />
                </Box>
                <Flex justifyContent="flex-end" marginTop="8">
                  <Link href="">
                    <Text as="b" color="blue.500">
                      パスワードを忘れた場合はこちら
                    </Text>
                  </Link>
                </Flex>
                <Box marginTop="8" marginBottom="8">
                  <LoginButton />
                </Box>
              </Form>
            )}
          </Formik>
          <Divider orientation="horizontal" />
          <Flex justifyContent="center" marginTop="8">
            <Link href="/signup">
              <Text as="b" color="blue.500">
                新規登録はこちら
              </Text>
            </Link>
          </Flex>
        </Box>
      </Center>
    </VStack>
  );
};