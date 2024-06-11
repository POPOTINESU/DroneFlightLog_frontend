import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { PasswordFormInput } from '../../passwordFormInput/PasswordFormInput';


describe("EmailInputField", () => {
  it("パスワード入力欄がレンダリングできること", () => {
    const { getByText, getByPlaceholderText } = render(<PasswordFormInput />);
    const labelElement = getByText("パスワード");
    const inputElement = getByPlaceholderText("password");
    expect(inputElement).toHaveAttribute("type", "password");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("値を変更した時に反映されること", () => {
    const { getByPlaceholderText } = render(<PasswordFormInput />);
    const inputElement = getByPlaceholderText(
      "password"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "PassWord" } });
    expect(inputElement.value).toBe("PassWord");
  });
});
