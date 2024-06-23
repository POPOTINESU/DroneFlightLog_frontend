"use client";
import { GroupIDInputField } from "@/app/features/add/group/ui/molecures/Input/GroupIDInputField";
import { GroupPasswordInputField } from "@/app/features/add/group/ui/molecures/Input/GroupPasswordInputField";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";
import React from "react";
import Link from "next/link";
import { groupLogin } from "../../api/groupLogin";
import { useRouter } from "next/navigation";

export const AddGroupTemplate =()=> {
  const router = useRouter();
  const GroupIDValidate = (value: string) => {
    let error;
    if (!value) {
      error = "グループIDを入力してください";
    }
    return error;
  };

  const GroupPasswordValidate = (value: string) => {
    let error;
    if (!value) {
      error = "パスワードを入力してください";
    }
    return error;
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      background="gray.100"
    >
      <Card width="50%" height="auto" py={10}>
        <Center>
          <VStack>
            
            <CardHeader>
            <Center>
              <Heading as="h1" size="md" p={2}>
                グループ追加
              </Heading>
              </Center>
              <Text m={4}>グループに参加して、飛行記録を管理しましょう。</Text>
            </CardHeader>
            
            <CardBody>

              <Formik
                initialValues={{
                  groupID: "",
                  groupPassword: "",
                }}
                onSubmit={async(values) => {
                  const response = await groupLogin({
                    groupID: values.groupID,
                    password: values.groupPassword,
                  });

                  if (response === 200) {
                    router.push("/groups");
                  } else {
                    alert("ログインに失敗しました");
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
                  isSubmitting,
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Text as="b">既存グループにログイン</Text>
                    <FormControl
                      isInvalid={!!errors.groupID && touched.groupID}
                    >
                      <GroupIDInputField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.groupID}
                        validate={GroupIDValidate}
                      />
                      {errors.groupID ? (
                        <FormErrorMessage>{errors.groupID}</FormErrorMessage>
                      ) : (
                        <Box height={7}></Box>
                      )}
                    </FormControl>

                    <FormControl
                      isInvalid={
                        !!errors.groupPassword && touched.groupPassword
                      }
                    >
                      <GroupPasswordInputField
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.groupPassword}
                        validate={GroupPasswordValidate}
                      />
                      {errors.groupPassword ? (
                        <FormErrorMessage>
                          {errors.groupPassword}
                        </FormErrorMessage>
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
                      marginTop={4}
                    >
                      ログイン
                    </Button>
                  </Form>
                )}
              </Formik>
              <Divider orientation="horizontal" mt={8} />
              <Flex justifyContent="center" marginTop="8">
                <Link href="/create/group">
                  <Text as="b" color="blue.500">
                    新規グループ作成
                  </Text>
                </Link>
              </Flex>
            </CardBody>
          </VStack>
        </Center>
      </Card>
    </Box>
  );
}

