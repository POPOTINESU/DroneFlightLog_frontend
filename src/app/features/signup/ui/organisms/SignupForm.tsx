"use client";
import { EmailFormInput } from "@/app/shared/components/forms/emailFormInput/EmailFormInput";
import { PasswordFormInput } from "@/app/shared/components/forms/passwordFormInput/PasswordFormInput";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Flex,
  FormControl,
  FormErrorMessage,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { FirstNameInput } from "../molecules/Input/FistName/FirstNameInput";
import { LastNameInput } from "../molecules/Input/LastName/LastNameInput";

export const SignupForm = () => {
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
    } else if (value.length < 8) {
      error = "8文字以上で入力してください";
    }
    return error;
  };

  const handleSubmit = async (values: any) => {
    console.log(values);
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      background="gray.100"
    >
      <Card width="50%" height="auto" py={10}>
        <Center>
          <VStack>
            <CardHeader>
              <Heading as="h1" size="lg" p={2}>
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
                    <Flex>
                      <FormControl
                        isInvalid={!!errors.lastName && touched.lastName}
                      >
                        <LastNameInput
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.lastName}
                          validate={lastNameValidate}
                        />
                        {errors.lastName ? (
                          <FormErrorMessage>{errors.lastName}</FormErrorMessage>
                        ) : (
                          <Box height={7}></Box>
                        )}
                      </FormControl>

                      <FormControl
                        isInvalid={!!errors.firstName && touched.firstName}
                      >
                        <FirstNameInput
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.firstName}
                          validate={firstNameValidate}
                        />
                        {errors.firstName ? (
                          <FormErrorMessage>
                            {errors.firstName}
                          </FormErrorMessage>
                        ) : (
                          <Box height={7}></Box>
                        )}
                      </FormControl>
                    </Flex>

                    <FormControl isInvalid={!!errors.email && touched.email}>
                      <EmailFormInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        validate={emailValidate}
                      />
                      {errors.email ? (
                        <FormErrorMessage>{errors.email}</FormErrorMessage>
                      ) : (
                        <Box height={7}></Box>
                      )}
                    </FormControl>

                    <FormControl
                      isInvalid={!!errors.password && touched.password}
                    >
                      <PasswordFormInput
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        validate={passwordValidate}
                      />
                      {errors.password ? (
                        <FormErrorMessage>{errors.password}</FormErrorMessage>
                      ) : (
                        <Box height={7}></Box>
                      )}
                    </FormControl>
                    <Button
                      size="lg"
                      width="100%"
                      colorScheme="blue"
                      type="submit"
                      isLoading={isSubmitting}
                      onClick={() => {
                        handleSubmit;
                      }}
                      marginTop={4}
                    >
                      新規登録
                    </Button>
                  </Form>
                )}
              </Formik>
            </CardBody>
          </VStack>
        </Center>
      </Card>
    </Box>
  );
};
