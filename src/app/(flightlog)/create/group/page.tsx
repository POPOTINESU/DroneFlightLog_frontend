"use client";
import { CreateGroupTemplate } from "@/app/features/create/group/ui/template/CreateGroupTemplate";
import Head from "next/head";
import { RecoilRoot } from "recoil";

export default function CreateGroupPage() {
  return (
    <RecoilRoot>
      <Head>
        <title>グループ作成</title>
        <meta property="og:title" content="グループ作成" />
        <meta property="og:description" content="グループを作成する" />
        <meta property="og:url" content="https://www.drone-flight-log.com/create/group/" />
        <meta property="og:type" content="website" />
      </Head>
      <CreateGroupTemplate />
    </RecoilRoot>
  );
}
