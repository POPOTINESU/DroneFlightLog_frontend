"use client";
import { EditFlightLogTemplate } from "@/app/features/edit/flightlog/ui/EditFlightLogTemplate";
import { RecoilRoot } from "recoil";

export default function EditFlightLogPage() {
  return (
    <RecoilRoot>
      <EditFlightLogTemplate />
    </RecoilRoot>
  );
}
