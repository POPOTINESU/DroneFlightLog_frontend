"use client";
import { CreateGroupTemplate } from "@/app/features/create/group/ui/template/CreateGroupTemplate";
import { RecoilRoot } from "recoil";

export default function CreateGroupPage() {
  return (
    <RecoilRoot>
      <CreateGroupTemplate />
    </RecoilRoot>
  );
}
