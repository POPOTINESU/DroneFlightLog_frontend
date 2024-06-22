"use client";

import {
  Box,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import Link from "next/link";
import { EmailFormInput } from "../../../../shared/components/forms/emailFormInput/EmailFormInput";
import { PasswordFormInput } from "../../../../shared/components/forms/passwordFormInput/PasswordFormInput";
import { LoginButton } from "../atoms/loginButton/LoginButton";
import { Formik, Form } from "formik";
import { login } from "../../api/login";
import { useRouter } from "next/navigation";

export const LoginForm = () => {
  const router = useRouter();
  // emailのバリデーション
  const emailValidate = (value: string) => {
    let error;
    if (!value) {
      error = "メールアドレスを入力してください";
    } else if (!value.includes("@")) {
      error = "メールアドレスの形式が正しくありません";
    }
    return error;
  };
  // passwordのバリデーション
  const passwordValidate = (value: string) => {
    let error;
    if (!value) {
      error = "パスワードを入力してください";
    }
    return error;
  };

  return (
    <VStack>
      <Center height="100vh">
        <Box width="80%" padding="4">
          <Heading size="2xl" textAlign="center" marginBottom="20">
            ログイン
          </Heading>
          <Formik
            initialValues={{ email: "", password: "" }}
            onSubmit={async (values) => {
              const isLogin = await login(values);
              if (isLogin === 200) {
                // ログインに成功したらトップページに遷移
                router.push("/");
              } else {
                alert("ログイン失敗");
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
                  <FormControl isInvalid={!!errors.email && touched.email}>
                    <EmailFormInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email}
                      validate={emailValidate}
                    />
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>
                </Box>
                <Box>
                  <FormControl
                    isInvalid={!!errors.password && touched.password}
                  >
                    <PasswordFormInput
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.password}
                      validate={passwordValidate}
                    />
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </FormControl>
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
