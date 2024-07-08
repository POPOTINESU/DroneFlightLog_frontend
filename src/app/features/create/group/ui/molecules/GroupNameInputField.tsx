import React from "react";
import { FormControl, Input, FormLabel } from "@chakra-ui/react";
import { Field } from "formik";
import { FormInputType } from "@/app/shared/ui/forms/FormInputType";

type GroupNameInputFieldTypes = {
  errors?: {
    groupName?: string;
  };
  touched?: {
    groupName?: boolean;
  };
  onChange: (e: React.ChangeEvent<FormInputType>) => void;
  onBlur: (e: React.FocusEvent<FormInputType>) => void;
  value: string;
};

export const GroupNameInputField = (props: GroupNameInputFieldTypes) => {
  const { errors, touched, onChange, onBlur, value } = props;

  return (
    <FormControl isInvalid={!!errors?.groupName && touched?.groupName}>
      <FormLabel htmlFor="groupName" marginBottom="0">
        グループ名
      </FormLabel>
      <Field
        as={Input}
        id="groupName"
        autoComplete="groupName"
        placeholder="グループ名"
        size="md"
        type="text"
        name="groupName"
        onChange={onChange}
        onBlur={onBlur}
        value={value ?? ""}
      />
      {errors?.groupName && touched?.groupName && <div>{errors.groupName}</div>}
    </FormControl>
  );
};
