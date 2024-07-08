import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
} from "@chakra-ui/react";
import React from "react";
import { Field, FieldProps, FormikProps } from "formik";

type GroupDetail = {
  name: string;
  users: { name: string; email: string; role: string; status: string }[];
  drones: {
    id: string;
    drone_number: string;
    JUNumber: string;
    purchaseDate: string;
  }[];
};

export type JUNumberFieldTypes = {
  setFieldValue: FormikProps<any>['setFieldValue'];
  values: any;
  groupDetail: GroupDetail | null;
};

export const JUNumberField = (props: JUNumberFieldTypes) => {
  const { setFieldValue, values, groupDetail } = props;

  return (
    <Field name="JUNumber">
      {({ field, form }: FieldProps) => (
        <FormControl
          isInvalid={!!form.errors.JUNumber && !!form.touched.JUNumber}
        >
          <FormLabel mb={0}>機体登録番号</FormLabel>
          <Select
            {...field}
            onChange={(e) => {
              form.handleChange(e);
              setFieldValue("JUNumber", e.target.value);
            }}
            onBlur={form.handleBlur}
            value={values.JUNumber}
          >
            <option>機体を選択してください</option>
            {groupDetail && groupDetail.drones && groupDetail.drones.length > 0 ? (
              groupDetail.drones.map((drone) => (
                <option key={drone.id} value={drone.id}>
                  {drone.drone_number}
                </option>
              ))
            ) : (
              <option>機体が登録されていません</option>
            )}
          </Select>
          <FormErrorMessage>
            {typeof form.errors.JUNumber === "string" && form.errors.JUNumber}
          </FormErrorMessage>
        </FormControl>
      )}
    </Field>
  );
};