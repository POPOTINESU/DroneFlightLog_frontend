import {atom} from "recoil";

export const loginEmailState = atom({
  key: 'loginEmailState',
  default: ''
})
export const loginPasswordState = atom({
  key: 'loginPasswordState',
  default: ''
})