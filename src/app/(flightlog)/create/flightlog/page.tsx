"use client";
import { CreateFlightLogTemplate } from "@/app/features/create/flightlog/ui/template/CreateFlightLogTemplate";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function FlightLogPage() {
  return (
    <Box>
      <Head>
        <title>飛行記録作成</title>
        <meta property="og:title" content="飛行記録作成" />
        <meta property="og:description" content="飛行記録作成ログインする" />
        <meta property="og:url" content="https://www.drone-flight-log.com/create/flightlog" />
        <meta property="og:type" content="website" />
      </Head>
      <RecoilRoot>
        <CreateFlightLogTemplate />
      </RecoilRoot>
    </Box>
  );
}
