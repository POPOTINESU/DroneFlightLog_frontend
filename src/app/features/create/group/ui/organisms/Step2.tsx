import { Button, FormControl, FormErrorMessage } from "@chakra-ui/react";
import React from "react";
import { FormStepState } from "../../state/FormStepState";
import { useRecoilState } from "recoil";
import { Form, Formik } from "formik";
import { PurchaseDateInputField } from "../molecules/PurchaseDateInputField";
import { DroneNumberInputField } from "../molecules/DroneNumberInputField";

export const Step2 = () => {
  const [step, setStep] = useRecoilState(FormStepState);
  const handlePrevStep = () => {
    //stepを１に戻してsessionに保存する
    setStep(1);
  }
  const droneNumberValidate = (value: string) => {
    let error;
    if (!value) {
      error = "ドローン番号を入力してください";
    }
    return error;
  };
  const purchaseDateValidate = (value: string) => {
    let error;
    if (!value) {
      error = "購入日を入力してください";
    }
    return error;
  };

  return (
    <Formik
      initialValues={{ droneNumber: "", JUNumber: "", purchaseDate: "" }}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
      }) => (
        <Form onSubmit={handleSubmit}>
          <FormControl isInvalid={!!errors.droneNumber && touched.droneNumber}>
            <DroneNumberInputField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.droneNumber}
              validate={purchaseDateValidate}
            />
            <FormErrorMessage>{errors.droneNumber}</FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.JUNumber && touched.JUNumber}>
            <DroneNumberInputField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.JUNumber}
              validate={purchaseDateValidate}
            />
            <FormErrorMessage>{errors.JUNumber}</FormErrorMessage>
          </FormControl>

          <FormControl
            isInvalid={!!errors.purchaseDate && touched.purchaseDate}
          >
            <PurchaseDateInputField
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.purchaseDate}
              validate={purchaseDateValidate}
            />
            <FormErrorMessage>{errors.purchaseDate}</FormErrorMessage>
          </FormControl>

          <Button onClick={handlePrevStep}>前へ</Button>
          <Button type="submit">作成</Button>
        </Form>
      )}
    </Formik>
  );
};
