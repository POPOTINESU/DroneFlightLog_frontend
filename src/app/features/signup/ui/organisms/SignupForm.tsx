"use client";
import { Flex } from "@chakra-ui/react";
import { Form } from "formik";
import { SubmitButton } from "@/app/shared/ui/atoms/SubmitButton/SubmitButton";
import { LastNameField } from "../organisms/LastNameField/LastNameField";
import { FirstNameField } from "../organisms/FirstNameField/FirstNameField";
import { EmailField } from "../organisms/EmailField/EmailField";
import { PasswordField } from "../organisms/PasswordField/PasswordField";
import { signupFormType } from "./type/signupFormType";

export const SignupForm = (props: signupFormType) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <Form onSubmit={handleSubmit}>
      <Flex>
        <LastNameField
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={{ lastName: errors.lastName }}
          touched={{ lastName: touched?.lastName ?? false }}
        />
        <FirstNameField
          handleChange={handleChange}
          handleBlur={handleBlur}
          values={values}
          errors={{ firstName: errors.firstName }}
          touched={{ firstName: touched?.firstName ?? false }}
        />
      </Flex>

      <EmailField
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        errors={{ email: errors.email }}
        touched={{ email: touched?.email ?? false }}
      />

      <PasswordField
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        errors={{ password: errors.password }}
        touched={{ password: touched?.password ?? false }}
      />

      <SubmitButton buttonName="新規登録" />
    </Form>
  );
};
