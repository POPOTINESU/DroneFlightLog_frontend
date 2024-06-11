import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { EmailFormInput } from "../EmailFormInput";

describe("EmailInputField", () => {
  it("メールアドレス入力欄がレンダリングできること", () => {
    const { getByText, getByPlaceholderText } = render(<EmailFormInput />);
    const labelElement = getByText("メールアドレス");
    const inputElement = getByPlaceholderText("メールアドレス");
    expect(inputElement).toHaveAttribute("type", "email");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("値を変更した時に反映されること", () => {
    const { getByPlaceholderText } = render(<EmailFormInput />);
    const inputElement = getByPlaceholderText(
      "メールアドレス"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(inputElement.value).toBe("test@example.com");
  });
});
