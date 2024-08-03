import { Box } from "@chakra-ui/react";
import { FlightLogTemplate } from "../features/flightlog/ui/template/FlightLogTemplate";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>トップページ</title>
        <meta property="og:title" content="トップページ" />
        <meta property="og:description" content="飛行記録一覧を表示する" />
        <meta property="og:url" content="https://www.drone-flight-log.com" />
        <meta property="og:type" content="website" />
      </Head>
      <FlightLogTemplate />
    </>
  );
}
