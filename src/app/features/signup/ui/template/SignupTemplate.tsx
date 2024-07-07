"use client";
import {
  Box,
  Card,
  CardBody,
  Center,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import { signup } from "../../api/signup";
import { useRouter } from "next/navigation";
import { SubmitButton } from "@/app/shared/ui/atoms/SubmitButton/SubmitButton";
import { SignUpHeader } from "../atom/SignUpHeader";
import { LastNameField } from "../organisms/LastNameField/LastNameField";
import { FirstNameField } from "../organisms/FirstNameField/FirstNameField";
import { EmailField } from "../organisms/EmailField/EmailField";
import { PasswordField } from "../organisms/PasswordField/PasswordField";
import { SignupForm } from "../organisms/SignupForm";


export const SignupTemplate = () => {
  const router = useRouter();

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
            <SignUpHeader />
            <CardBody>
              <Formik
                initialValues={{
                  firstName: "",
                  lastName: "",
                  email: "",
                  password: "",
                }}
                onSubmit={async (values) => {
                  const isSignup = await signup(values);
                  if (isSignup === 200) {
                    // 新規登録に成功したらログインページに遷移
                    router.push("/");
                  } else {
                    alert("新規登録失敗");
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
                  <SignupForm
                    values={values}
                    errors={errors}
                    touched={touched}
                    handleChange={handleChange}
                    handleBlur={handleBlur}
                    handleSubmit={handleSubmit}
                  />
                )}
              </Formik>
            </CardBody>
          </VStack>
        </Center>
      </Card>
    </Box>
  );
};
