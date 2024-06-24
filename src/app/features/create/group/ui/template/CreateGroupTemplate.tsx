"use client";
import {
  Box,
  Card,
  CardBody,
  CardHeader,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { RecoilRoot, useRecoilState } from "recoil";
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
  // TODO: フォームのバリデーションを実装する
  // TODO: APIの作成

  // stepが1の時はStep1を表示、2の時はStep2を表示する
  const [step, setStep] = useRecoilState(FormStepState);
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%"
      background="gray.100"
    >
      <Card width="50%" height="auto" py={10}>
        <VStack>
          <CardHeader>新規グループ作成</CardHeader>
          <CardBody>{step === 1 ? <Step1 /> : <Step2 />}</CardBody>
        </VStack>
      </Card>
    </Box>
  );
};
