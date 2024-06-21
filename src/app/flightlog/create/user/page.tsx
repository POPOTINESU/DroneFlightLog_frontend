"use client";
import { EmailFormInput } from "@/app/shared/components/forms/emailFormInput/EmailFormInput";
import { PasswordFormInput } from "@/app/shared/components/forms/passwordFormInput/PasswordFormInput";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  Input,
  Table,
  TableContainer,
  Tbody,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";

export default function page() {
  /**
   * 入力フォームのバリデーション
   */
  const firstNameValidate = (value: string) => {
    let error;
    if (!value) {
      error = "名前を入力してください";
    }
    return error;
  };

  const lastNameValidate = (value: string) => {
    let error;
    if (!value) {
      error = "名字を入力してください";
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

  const passwordValidate = (value: string) => {
    let error;
    if (!value) {
      error = "パスワードを入力してください";
    }
    return error;
  };

  return (
    <>
      <Center height="100%">
        <Box width="70%" height="100%">
          <Card width="100%" height="90%">
            <CardHeader>
              <Heading as="h1" size="md" p={2}>
                新規会員登録
              </Heading>
            </CardHeader>
            <CardBody>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
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
                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <EmailFormInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        validate={emailValidate}
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>

                    <FormControl>
                      <PasswordFormInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        validate={passwordValidate}
                      />
                    </FormControl>
                    <FormErrorMessage>{errors.password}</FormErrorMessage>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </Card>
        </Box>
      </Center>
    </>
  );
}
