import { InviteTemplate } from "@/app/features/invite/template/InviteTemplate";
import Head from "next/head";

export default function InvitePage() {
  return (
    <>
      <Head>
        <title>グループ招待</title>
        <meta property="og:title" content="グループ招待" />
        <meta property="og:description" content="招待されたグループに参加する" />
        <meta property="og:url" content="https://www.drone-flight-log.com/invite/" />
        <meta property="og:type" content="website" />
      </Head>
      <InviteTemplate />
    </>
  );
}
