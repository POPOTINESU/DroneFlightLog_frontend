import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { DroneNumberInputField } from "../molecules/DroneNumberInputField";
import * as Yup from "yup";
import { JUNumberInputField } from "../molecules/JUNumberInputField";
import { PurchaseDateInputField } from "../molecules/PurchaseDateInputField";

import { createGroup } from "../../api/createGroup";
import { useRecoilState } from "recoil";
import { FormStepState } from "../../state/FormStepState";
import { useRouter } from "next/navigation";
import { PrevStepButton } from "../atoms/StepButton/PrevStepButton";
import { SubmitButton } from "../../../../../shared/ui/atoms/SubmitButton/SubmitButton";

export const Step2 = () => {
  const router = useRouter();
  const [step, setStep] = useRecoilState(FormStepState);
  const handlePrevStep = () => {
    // 1つ前のステップに戻る
    setStep(step - 1);
  };

  const ValidationSchema = Yup.object().shape({
    sets: Yup.array().of(
      Yup.object().shape({
        droneNumber: Yup.string().required("ドローン番号を入力してください"),
        JUNumber: Yup.string()
          .required("機体登録番号を入力してください")
          // JUから始まる
          .matches(/JU/, "機体登録番号はJUから始まる番号を入力してください"),
        purchaseDate: Yup.string().required("購入日を入力してください"),
      })
    ),
  });

  return (
    <Box>
      <Formik
        initialValues={{
          sets: [{ droneNumber: "", JUNumber: "", purchaseDate: "" }],
        }}
        validationSchema={ValidationSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={async (values) => {
          // sessionからデータを取得
          const response = await createGroup({ values });
          if (response === 201) {
            router.push("/");
          } else {
            // グループの作成に失敗したら、アラートを表示する
            alert("グループの作成に失敗しました");
          }
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          validateField,
        }) => (
          <Box>
            <Form onSubmit={handleSubmit}>
              <FieldArray name="sets">
                {({ insert, remove, push }) => (
                  <Box>
                    {values.sets.map((set, index) => (
                      <Box key={index}>
                        <Box>
                          <Field name={`sets[${index}].droneNumber`}>
                            {({ field, form, meta }: any) => (
                              <FormControl
                                isInvalid={meta.touched && !!meta.error}
                              >
                                <DroneNumberInputField
                                  {...field}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    handleChange(e);
                                    form.setFieldValue(
                                      field.name,
                                      e.target.value
                                    );
                                  }}
                                  onBlur={async (
                                    e: React.FocusEvent<HTMLInputElement>
                                  ) => {
                                    handleBlur(e);
                                    await validateField(field.name);
                                  }}
                                />
                                <FormErrorMessage>
                                  {meta.error}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box>
                          <Field name={`sets[${index}].JUNumber`}>
                            {({ field, form, meta }: any) => (
                              <FormControl
                                isInvalid={meta.touched && !!meta.error}
                              >
                                <JUNumberInputField
                                  {...field}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    handleChange(e);
                                    form.setFieldValue(
                                      field.name,
                                      e.target.value
                                    );
                                  }}
                                />
                                <FormErrorMessage>
                                  {meta.error}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                        <Box>
                          <Field name={`sets[${index}].purchaseDate`}>
                            {({ field, form, meta }: any) => (
                              <FormControl
                                isInvalid={meta.touched && !!meta.error}
                              >
                                <PurchaseDateInputField
                                  {...field}
                                  onChange={(
                                    e: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    handleChange(e);
                                    form.setFieldValue(
                                      field.name,
                                      e.target.value
                                    );
                                  }}
                                />
                                <FormErrorMessage>
                                  {meta.error}
                                </FormErrorMessage>
                              </FormControl>
                            )}
                          </Field>
                        </Box>
                      </Box>
                    ))}
                    <Flex justifyContent="flex-end" m={2} gap={2}>
                      <Button
                        onClick={() =>
                          push({
                            droneNumber: "",
                            JUNumber: "",
                            purchaseDate: "",
                          })
                        }
                        colorScheme="blue"
                      >
                        追加
                      </Button>
                      <Button
                        onClick={() => remove(values.sets.length - 1)}
                        colorScheme="red"
                      >
                        削除
                      </Button>
                    </Flex>
                  </Box>
                )}
              </FieldArray>
              <Flex gap={2}>
                <PrevStepButton handlePrevStep={handlePrevStep} />
                <SubmitButton buttonName="グループ作成" />
              </Flex>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
