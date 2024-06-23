import { atom } from "recoil";
/**
 *  グループ作成の複数ページ機能のステップを管理するState
 */
export const FormStepState = atom({
  key: "formStep",
  default: 1,
})