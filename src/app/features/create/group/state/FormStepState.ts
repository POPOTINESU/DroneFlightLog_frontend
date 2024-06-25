import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'
/**
 *  グループ作成の複数ページ機能のステップを管理するState
 *  リロードしてもステップが保持されるようにsessionに保存する
 */

const {persistAtom} = recoilPersist({
  key: "formStep",
  storage: sessionStorage,
});

export const FormStepState = atom({
  key: "formStep",
  default: 1,
  effects_UNSTABLE: [persistAtom],
});