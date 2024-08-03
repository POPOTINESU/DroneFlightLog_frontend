"use client";

import { SignupTemplate } from "@/app/features/signup/ui/template/SignupTemplate";
import Head from "next/head";

export default function page() {
  return (
    <>
      <Head>
        <title>新規登録</title>
        <meta property="og:title" content="新規登録" />
        <meta property="og:description" content="新規登録を行う" />
        <meta property="og:url" content="https://www.drone-flight-log.com/signup/" />
        <meta property="og:type" content="website" />
      </Head>
      <SignupTemplate />
    </>
  );
}
