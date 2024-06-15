import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { LoginButton } from "../LoginButton";

describe("ログインボタンがレンダリングされるか確認", () => {
  it("should render the login button", () => {
    const { getByText } = render(<LoginButton />);
    const buttonElement = getByText("ログイン");
    expect(buttonElement).toBeInTheDocument();
  });

  it("ボタンを押した時にhandleLoginが呼び出されているか確認", () => {
    const handleLogin = jest.fn();
    const { getByText } = render(<LoginButton />);
    const buttonElement = getByText("ログイン");
    buttonElement.onclick = handleLogin;
    fireEvent.click(buttonElement);
    expect(handleLogin).toBeCalled();
  });
});