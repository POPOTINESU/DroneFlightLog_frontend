export const validateEmails = (value: string) => {
  let error;
  if (value) {
    const emailArray = value.split("\n").map((email) => email.trim());
    emailArray.forEach((email, index) => {
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        error = `メールアドレスの形式が正しくありません (${index + 1})`;
      }
    });
  }
  return error;
};
