import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent, act, waitFor } from "@testing-library/react";
import { Formik, Form, Field } from "formik";
import { LoginForm } from "../LoginForm";

describe("LoginForm", () => {
  // Formikの初期値を設定してLoginFormをレンダリングする
  const renderLoginForm = () => {
    return render(
      <Formik initialValues={{ email: "", password: "" }} onSubmit={jest.fn()}>
        {() => <LoginForm />}
      </Formik>
    );
  };

  // ログインフォームがレンダリングされること
  it("ログインフォームがレンダリングされること", async () => {
    const { getByLabelText } = renderLoginForm();
    const emailInput = getByLabelText("メールアドレス");
    const passwordInput = getByLabelText("パスワード");

    await waitFor(() => {
      expect(emailInput).toBeInTheDocument();
      expect(passwordInput).toBeInTheDocument();
    });
  });

  // 入力値が正しく反映されること
  it("入力値が正しく反映されること", async () => {
    const { getByLabelText } = renderLoginForm();
    const emailInput = getByLabelText("メールアドレス");
    const passwordInput = getByLabelText("パスワード");

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
    });

    await waitFor(() => {
      expect(emailInput).toHaveValue("test@example.com");
      expect(passwordInput).toHaveValue("password123");
    });
  });

  // フォームの送信が正しく行われること
  it("フォームの送信が正しく行われること", async () => {
    const onSubmit = jest.fn();
    const { getByLabelText, getByRole } = render(
      <Formik initialValues={{ email: "", password: "" }} onSubmit={onSubmit}>
        {() => <LoginForm />}
      </Formik>
    );

    const emailInput = getByLabelText("メールアドレス");
    const passwordInput = getByLabelText("パスワード");
    const submitButton = getByRole("button", { name: "ログイン" });

    await act(async () => {
      fireEvent.change(emailInput, { target: { value: "test@example.com" } });
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      fireEvent.click(submitButton);
    });

    expect(onSubmit).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledTimes(1);
      expect(onSubmit).toHaveBeenCalledWith({
        email: "test@example.com",
        password: "password123",
      });
    });
  });
});
