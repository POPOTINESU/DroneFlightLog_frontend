import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import { InputField } from "../InputField";

describe("InputField", () => {
  it("should render the input field", () => {
    const { getByPlaceholderText } = render(
      <InputField
        placeholder="メールアドレス"
        size="lg"
        type="email"
        width="100%"
      />
    );
    expect(getByPlaceholderText("メールアドレス")).toBeInTheDocument();
  });
});
