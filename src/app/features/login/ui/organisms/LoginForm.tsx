import React from "react";
import {
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

export const LoginForm = () => {
  return (
    <Center height="100vh">
      <FormControl width="80%" padding="4">
        <Heading size="2xl" textAlign="center" marginBottom="20">
          ログイン
        </Heading>
        <Box marginBottom="8">
          <FormLabel marginBottom="0">
            <Text as="b">メールアドレス</Text>
          </FormLabel>
          <Input id="email" placeholder="メールアドレス" size="lg" />
        </Box>
        <Box>
          <FormLabel marginBottom="0">
            <Text as="b">パスワード</Text>
          </FormLabel>
          <Input
            id="password"
            type="password"
            placeholder="パスワード"
            size="lg"
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
          <Button
            size="lg"
            width="100%"
            colorScheme='blue'
          >
            ログイン
          </Button>
        </Box>
        <Divider orientation="horizontal" />
        <Flex justifyContent="center" marginTop="8">
          <Link href="">
            <Text as="b" color="blue.500">
              新規登録はこちら
            </Text>
          </Link>
        </Flex>
      </FormControl>
    </Center>
  );
};
