"use client";
import { EditFlightLogTemplate } from "@/app/features/edit/flightlog/ui/EditFlightLogTemplate";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function EditFlightLogPage() {
  return (
    <Box>
      <Head>
        <title>飛行記録編集</title>
        <meta property="og:title" content="飛行記録編集" />
        <meta property="og:description" content="飛行記録を編集する" />
        <meta property="og:type" content="website" />
      </Head>
      <RecoilRoot>
        <EditFlightLogTemplate />
      </RecoilRoot>
    </Box>
  );
}
