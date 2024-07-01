"use client";
import { CreateFlightLogTemplate } from "@/app/features/create/flightlog/ui/template/CreateFlightLogTemplate";
import { RecoilRoot } from "recoil";

export default function FlightLogPage() {
  return (
    <RecoilRoot>
      <CreateFlightLogTemplate />
    </RecoilRoot>
  );
}
