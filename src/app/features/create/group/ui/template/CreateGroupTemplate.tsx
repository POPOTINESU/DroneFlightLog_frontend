"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  Heading,
  VStack,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import { FormStepState } from "../../state/FormStepState";
import { Step1 } from "../organisms/Step1";
import { Step2 } from "../organisms/Step2";

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

  // create/groupがアンマウントされるとsessionStorageのデータを削除する
  useEffect(() => {
    return () => {
      setStep(1);
      sessionStorage.removeItem("groupName");
      sessionStorage.removeItem("emails");
      sessionStorage.removeItem("droneNumber");
      sessionStorage.removeItem("JUNumber");
      sessionStorage.removeItem("purchaseDate");
    };
  }, []);

  return (
    <>
      <CardHeader>
        <Heading size="lg">新規グループ作成</Heading>
      </CardHeader>
      <CardBody width="100%">
        {step === 1 ? <Step1 /> : <Step2 />}
      </CardBody>
    </>
  );
};
