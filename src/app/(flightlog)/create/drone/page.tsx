import { CreateDroneTemplate } from "@/app/features/create/drone/ui/template/CreateDroneTemplate";
import { Box } from "@chakra-ui/react";
import Head from "next/head";
import React from "react";

export default function CreateDronePage() {
  return (
    <Box>
      <Head>
        <title>機体を作成</title>
        <meta property="og:title" content="機体作成" />
        <meta property="og:description" content="機体作成を行う" />
        <meta
          property="og:url"
          content="https://www.drone-flight-log.com/create/drone/"
        />
        <meta property="og:type" content="website" />
      </Head>
      <CreateDroneTemplate />
    </Box>
  );
}
