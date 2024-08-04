"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { FormStepState } from "../../state/FormStepState";
import { Step1 } from "../organisms/Step1/Step1";
import { Step2 } from "../organisms/Step2/Step2";
import { useRouter, useSearchParams } from "next/navigation";

/**
 * 新規でグループ作成する際のフォーム
 * 招待する操縦者のメールアドレスや、機体の情報が複数入力される可能性があるので、
 * 複数ページに分けて入力させる
 *
 * Step1: グループ名、招待相手のメールアドレス
 * Step2: 機体の情報
 */
export const CreateGroupTemplate = () => {
  // stepが1の時はStep1を表示、2の時はStep2を表示する
  const [step, setStep] = useRecoilState(FormStepState);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [successMessage, setSuccessMessage] = useState("");

  // クライアントサイドのレンダリングを確認する
  useEffect(() => {
    setIsClient(true);
  }, []);

  // コンポーネントがアンマウントされる際にsessionStorageのデータを削除する
  useEffect(() => {
    return () => {
      setStep(1);
      sessionStorage.removeItem("groupName");
      sessionStorage.removeItem("emails");
      sessionStorage.removeItem("droneNumber");
      sessionStorage.removeItem("JUNumber");
      sessionStorage.removeItem("purchaseDate");
    };
  }, [setStep]);

  // メッセージをクエリパラメータから取得する
  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setSuccessMessage(message);
      const timer = setTimeout(() => {
        setSuccessMessage("");
        // クエリパラメータを削除するためにURLを手動で置換
        const cleanUrl = window.location.pathname;
        router.replace(cleanUrl);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [searchParams, router]);

  if (!isClient) {
    return null;
  }


  return (
    <>
      <CardHeader>
        <Heading size="lg">新規グループ作成</Heading>
      </CardHeader>
      <CardBody width="100%">{step === 1 ? <Step1 /> : <Step2 />}</CardBody>
    </>
  );
};
