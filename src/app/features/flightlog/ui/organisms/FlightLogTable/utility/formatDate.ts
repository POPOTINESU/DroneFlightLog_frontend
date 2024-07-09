export const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return `${date.getFullYear()}年${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}月${String(date.getDate()).padStart(2, "0")}日`;
};
