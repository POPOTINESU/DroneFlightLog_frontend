"use client";
import { Box, Card, CardBody, Center, VStack } from "@chakra-ui/react";
import { Formik } from "formik";
import { signup } from "../../api/signup";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { SignUpHeader } from "../atom/SignUpHeader";
import { SignupForm } from "../organisms/SignupForm";
import { SuccessMessage } from "@/app/shared/ui/atoms/alert/SuccessMessage/SuccessMessage";

export const SignupTemplate = () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (successMessage) {
      const timer = setTimeout(() => {
        setSuccessMessage("");
        router.push("/create/group/");
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [successMessage, router]);

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
                  const response = await signup(values);
                  if (response === 200) {
                    setSuccessMessage("新規登録成功しました。");
                    router.push(`/create/group/?message=${successMessage}`);
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
