import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { EmailFormInput } from "../EmailFormInput";

describe("EmailInputField", () => {
  it("メールアドレス入力欄がレンダリングできること", () => {
    const { getByText, getByPlaceholderText } = render(
      <EmailFormInput
        onChange={function (e: React.ChangeEvent<HTMLInputElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    );
    const labelElement = getByText("メールアドレス");
    const inputElement = getByPlaceholderText("メールアドレス");
    expect(labelElement).toBeInTheDocument();
    expect(inputElement).toBeInTheDocument();
  });

  it("値を変更した時に反映されること", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <EmailFormInput onChange={onChangeMock} />
    );
    const inputElement = getByPlaceholderText(
      "メールアドレス"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(inputElement.value).toBe("test@example.com");
  });

  it("値が変化した時にonChangeイベントを呼んでいること", () => {
    const onChangeMock = jest.fn();
    const { getByPlaceholderText } = render(
      <EmailFormInput onChange={onChangeMock} />
    );
    const inputElement = getByPlaceholderText(
      "メールアドレス"
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: "test@example.com" } });
    expect(onChangeMock).toHaveBeenCalledWith(
      expect.objectContaining({
        target: expect.objectContaining({
          value: "test@example.com",
        }),
      })
    );
  });
});
