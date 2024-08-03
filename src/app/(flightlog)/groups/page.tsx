import { GroupsTemplate } from "@/app/features/groups/template/GroupsTemplate";
import Head from "next/head";

export default function GroupPage() {
  return (
    <>
      <Head>
        <title>グループ一覧</title>
        <meta property="og:title" content="グループ一覧" />
        <meta property="og:description" content="グループ一覧を表示する" />
        <meta property="og:url" content="https://www.drone-flight-log.com/groups/" />
        <meta property="og:type" content="website" />
      </Head>
      <GroupsTemplate />
    </>
  );
}
