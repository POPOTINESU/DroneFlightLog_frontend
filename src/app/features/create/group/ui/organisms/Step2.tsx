import { Box, Button, Flex, FormControl, FormErrorMessage } from "@chakra-ui/react";
import { Field, FieldArray, Form, Formik } from "formik";
import React from "react";
import { DroneNumberInputField } from "../molecules/DroneNumberInputField";
import * as Yup from "yup";
import { JUNumberInputField } from "../molecules/JUNumberInputField";
import { PurchaseDateInputField } from "../molecules/PurchaseDateInputField";
import { create } from "domain";
import { createGroup } from "../../api/createGroup";
import { GiConsoleController } from "react-icons/gi";

export const Step2 = () => {
  //TODO: 個別のバリデーションがうまく行かないので対応する
  // valueは、うまくきていそう

  // const droneNumberValidate = (value: string) => {
  //   let error;

  //   if (!value) {
  //     error = "ドローン番号を入力してください";
  //   }
  //   return error;
  // };

  const ValidationSchema = Yup.object().shape({
    sets: Yup.array().of(
      Yup.object().shape({
        droneNumber: Yup.string().required("ドローン番号を入力してください"),
        JUNumber: Yup.string().required("機体登録番号を入力してください")
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
        onSubmit={async(values) => {
          // sessionからデータを取得
          const response = await createGroup({values});

        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
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
                    <Flex justifyContent="flex-end" m={2}>
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
                    </Flex>
                  </Box>
                )}
              </FieldArray>
              <Button type="submit" width="100%" colorScheme="blue">
                グループ作成
              </Button>
            </Form>
          </Box>
        )}
      </Formik>
    </Box>
  );
};
