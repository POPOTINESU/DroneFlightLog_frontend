import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Formik, Field } from "formik";
import { PasswordFormInput } from "../PasswordFormInput";

describe("PasswordFormInput", () => {
  const renderWithFormik = (props) => {
    return render(
      <Formik initialValues={{ password: "" }} onSubmit={jest.fn()}>
        {() => (
          <form>
            <Field name="password" component={PasswordFormInput} {...props} />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    );
  };

  const setupPasswordInput = () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const validate = (value) => {
      let error;
      if (!value) {
        error = "パスワードを入力してください";
      }
      return error;
    };

    const { getByLabelText, getByPlaceholderText } = renderWithFormik({
      onChange,
      onBlur,
      validate,
    });

    const passwordInput = getByLabelText("パスワード");
    const input = getByPlaceholderText(/password/);

    return { passwordInput, input, onChange, onBlur };
  };

  describe("正常な動作", () => {
    it("レンダリングされる", () => {
      const { input } = setupPasswordInput();
      expect(input).toBeInTheDocument();
    });

    it("入力値が反映される", () => {
      const { passwordInput } = setupPasswordInput();
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      expect(passwordInput).toHaveValue("password123");
    });

    it("onChangeが呼ばれる", () => {
      const { passwordInput, onChange } = setupPasswordInput();
      fireEvent.change(passwordInput, { target: { value: "password123" } });
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("onBlurが呼ばれる", () => {
      const { passwordInput, onBlur } = setupPasswordInput();
      fireEvent.blur(passwordInput);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
});
