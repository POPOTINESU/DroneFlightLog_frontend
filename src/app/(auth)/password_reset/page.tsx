import { ResetPasswordTemplate } from "@/app/features/password_reset/ui/template/ResetPasswordTemplate";
import Head from "next/head";

export default function ResetPasswordPage() {
  return (
    <>
      <Head>
        <title>パスワードリセット</title>
        <meta property="og:title" content="パスワードリセット" />
        <meta property="og:description" content="パスワードリセットを行う" />
        <meta property="og:url" content="https://www.drone-flight-log.com/password_reset/" />
        <meta property="og:type" content="website" />
      </Head>
      <ResetPasswordTemplate />
    </>
  );
}
