import { FormInputType } from "@/app/shared/components/forms/FormInputType";
import { FormLabel, Input } from "@chakra-ui/react";
import { Field, Form } from "formik";

export const TotalTimeInputField = (props: FormInputType) => {
  return (
    <>
      <FormLabel htmlFor="totalTime" marginBottom="0">
        飛行時間
        <Field
          as={Input}
          type="time"
          id="totalTime"
          autoComplete="totalTime"
          placeholder="飛行時間"
          size="sm"
          name="totalTime"
          onChange={props.onChange}
          onBlur={props.onBlur}
          value={props.value}
          validate={props.validate}
        />
      </FormLabel>
    </>
  );
};
