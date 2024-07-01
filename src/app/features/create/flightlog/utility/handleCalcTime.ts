export const handleCalcTime = (
  setFieldValue: any,
  values: any,
  isManualInput: React.MutableRefObject<boolean>
) => {
  const { takeOffTime, landingTime, totalTime } = values;

  const parseTime = (time: string) => {
    const [hours, minutes, seconds] = time.split(":").map(Number);
    return (hours * 3600 + minutes * 60 + (seconds || 0)) * 1000;
  };

  const formatTime = (milliseconds: number) => {
    const totalSeconds = Math.floor(milliseconds / 1000);
    const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
    const seconds = String(totalSeconds % 60).padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  if (isManualInput.current) {
    if (totalTime) {
      const takeOffMillis = parseTime(takeOffTime);
      const totalMillis = parseTime(totalTime);
      
      if (!isNaN(takeOffMillis) && !isNaN(totalMillis)) {
        const landingMillis = takeOffMillis + totalMillis;
        let landingDate = new Date(landingMillis);

        // 日付を超える場合の処理
        if (landingDate.getTime() < takeOffMillis) {
          landingDate.setDate(landingDate.getDate() + 1);
        }

        const response = formatTime(landingMillis);
        setFieldValue("landingTime", response);
      }
    }
  } else {
    if (takeOffTime && landingTime) {
      const takeOffMillis = parseTime(takeOffTime);
      let landingMillis = parseTime(landingTime);

      if (landingMillis < takeOffMillis) {
        // 日付を超えた場合の処理
        landingMillis += 24 * 3600 * 1000; // 1日を足す
      }

      const diff = landingMillis - takeOffMillis;
      if (!isNaN(diff)) {
        const response = formatTime(diff);
        setFieldValue("totalTime", response);
      }
    } else if (takeOffTime && totalTime) {
      const takeOffMillis = parseTime(takeOffTime);
      const totalMillis = parseTime(totalTime);
      if (!isNaN(takeOffMillis) && !isNaN(totalMillis)) {
        const landingMillis = takeOffMillis + totalMillis;
        const response = formatTime(landingMillis);
        setFieldValue("landingTime", response);
      }
    } else if (landingTime && totalTime) {
      const landingMillis = parseTime(landingTime);
      const totalMillis = parseTime(totalTime);
      if (!isNaN(landingMillis) && !isNaN(totalMillis)) {
        const takeOffMillis = landingMillis - totalMillis;
        const response = formatTime(takeOffMillis);
        setFieldValue("takeOffTime", response);
      }
    }
  }
};