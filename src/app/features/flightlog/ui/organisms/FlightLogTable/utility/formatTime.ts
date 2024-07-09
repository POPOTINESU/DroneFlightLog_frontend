export  const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  return `${String(date.getHours()).padStart(2, "0")}時${String(
    date.getMinutes()
  ).padStart(2, "0")}分`;
};