import React from "react";
import "@testing-library/jest-dom";
import { render, fireEvent } from "@testing-library/react";
import { Formik, Field } from "formik";
import { EmailFormInput } from "../EmailFormInput";

describe("EmailFormInput", () => {
  const renderWithFormik = (props) => {
    return render(
      <Formik initialValues={{ email: "" }} onSubmit={jest.fn()}>
        {() => (
          <form>
            <Field name="email" component={EmailFormInput} {...props} />
            <button type="submit">Submit</button>
          </form>
        )}
      </Formik>
    );
  };

  const setupEmailInput = () => {
    const onChange = jest.fn();
    const onBlur = jest.fn();
    const validate = (value) => {
      let error;
      if (!value) {
        error = "メールアドレスを入力してください";
      }
      return error;
    };

    const { getByLabelText, getByPlaceholderText } = renderWithFormik({
      onChange,
      onBlur,
      validate,
    });

    const emailInput = getByLabelText("メールアドレス");
    const input = getByPlaceholderText(/メールアドレス/);

    return { emailInput, input, onChange, onBlur };
  };

  describe("正常な動作", () => {
    it("レンダリングされる", () => {
      const { input } = setupEmailInput();
      expect(input).toBeInTheDocument();
    });

    it("入力値が反映される", () => {
      const { emailInput } = setupEmailInput();
      fireEvent.change(emailInput, { target: { value: "example@email.com" } });
      expect(emailInput).toHaveValue("example@email.com");
    });

    it("onChangeが呼ばれる", () => {
      const { emailInput, onChange } = setupEmailInput();
      fireEvent.change(emailInput, { target: { value: "example@email.com" } });
      expect(onChange).toHaveBeenCalledTimes(1);
    });

    it("onBlurが呼ばれる", () => {
      const { emailInput, onBlur } = setupEmailInput();
      fireEvent.blur(emailInput);
      expect(onBlur).toHaveBeenCalledTimes(1);
    });
  });
});
