import {atom} from "recoil";
import {recoilPersist} from 'recoil-persist'

const {persistAtom} = recoilPersist({
  key: "selectedGroup",
  storage: typeof window === "undefined" ? undefined : sessionStorage,
});

export const SelectedGroupState = atom({
  key: "selectedGroup",
  // {id: string, name: string}
  default: {id: "", name: ""},
  effects_UNSTABLE: [persistAtom],
});