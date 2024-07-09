import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Field, FieldProps } from "formik";
import { validatePilotName } from "./validation/validatePilotName";
import { PilotNameFieldTypes } from "./types/PilotNameFieldTypes";

export const PilotNameField = (props: PilotNameFieldTypes) => {
  const { setFieldValue, values, fetchGroupDetail, groupDetail } = props;

  return (
    <Field name="pilotName" validate={validatePilotName}>
      {({ field, form }: FieldProps) => (
        <FormControl
          isInvalid={!!form.errors.pilotName && !!form.touched.pilotName}
        >
          <FormLabel mb={0}>操縦者名</FormLabel>
          <Select
            {...field}
            onChange={(e) => {
              form.handleChange(e);
              setFieldValue("pilotName", e.target.value);
            }}
            onBlur={form.handleBlur}
            value={values.pilotName}
          >
            <option>操縦者を選択してください</option>
            {fetchGroupDetail &&
            groupDetail?.users &&
            groupDetail.users.length > 0 ? (
              groupDetail.users.map((user) => (
                <option key={user.email} value={user.email}>
                  {user.name}
                </option>
              ))
            ) : (
              <option>ユーザーが登録されていません</option>
            )}
          </Select>
          <FormErrorMessage>
            {typeof form.errors.pilotName === "string" && form.errors.pilotName}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};
