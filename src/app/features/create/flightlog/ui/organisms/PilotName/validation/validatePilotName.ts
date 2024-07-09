export const validatePilotName = (value: string) => {
  if (value === "操縦者を選択してください") {
    return "操縦者を選択してください";
  }
  return "";
}