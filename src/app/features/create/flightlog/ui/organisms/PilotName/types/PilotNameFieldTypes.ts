import { GroupDetail } from "../../types/GroupDetail";

export type PilotNameFieldTypes = {
  setFieldValue: (field: string, value: any) => void;
  values: any;
  fetchGroupDetail: boolean;
  groupDetail: GroupDetail | null;
};