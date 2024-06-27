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
import { useRecoilValue } from "recoil";
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
  // TODO: APIの作成

  // stepが1の時はStep1を表示、2の時はStep2を表示する
  const step = useRecoilValue(FormStepState);

  // create/groupがアンマウントされるとsessionStorageのデータを削除する
  useEffect(() => {
    return () => {
      sessionStorage.removeItem("groupName");
      sessionStorage.removeItem("emails");
      sessionStorage.removeItem("droneNumber");
      sessionStorage.removeItem("JUNumber");
      sessionStorage.removeItem("purchaseDate");
    };
  }, []);

  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100%" // 画面全体の高さを指定
      padding={30}
      background="gray.100"
    >
      <Card width="50%" height="100%" py={30} px={10} overflowY="auto"> {/* カードの高さを80vhに設定 */}
        <VStack spacing={4}>
          <CardHeader>
            <Heading size="lg">新規グループ作成</Heading>
          </CardHeader>
          <CardBody width="100%"> {/* カードボディに幅を設定 */}
            {step === 1 ? <Step1 /> : <Step2 />}
          </CardBody>
        </VStack>
      </Card>
    </Box>
  );
};