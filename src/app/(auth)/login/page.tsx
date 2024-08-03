import { LoginTemplate } from "@/app/features/login/ui/template/LoginTemplate";
import { Box } from "@chakra-ui/react";
import Head from "next/head";


export default function page() {
  return (
    <Box>
      <Head>
        <title>ログイン</title>
        <meta property="og:title" content="ログイン" />
        <meta property="og:description" content="アプリへログインする" />
        <meta property="og:url" content="https://www.drone-flight-log.com" />
        <meta property="og:type" content="website" />
      </Head>
      <LoginTemplate />
    </Box>
  );
}
