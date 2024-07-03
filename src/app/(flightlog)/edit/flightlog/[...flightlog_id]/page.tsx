"use client"
import { EditFlightLogTemplate } from "@/app/features/edit/flightlog/ui/EditFlightLogTemplate";
import { Text } from "@chakra-ui/react";
import { RecoilRoot } from "recoil";

// TODO: useEffectでfetchFlightLogEditを呼び出す
// TODO: CreateFlightLogと同じ内容で初期値を設定する
// TODO: 削除ボタンを追加する
export default function EditFlightLogPage() {
  return (
    <RecoilRoot>
      <EditFlightLogTemplate />
    </RecoilRoot>
  );
}
