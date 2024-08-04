import { Box, Flex } from "@chakra-ui/react";
import { FieldArray, Form, Formik } from "formik";
import React from "react";

import { createGroup } from "../../../api/createGroup";
import { useRecoilState } from "recoil";
import { FormStepState } from "../../../state/FormStepState";
import { useRouter } from "next/navigation";
import { PrevStepButton } from "../../atoms/StepButton/PrevStepButton";
import { SubmitButton } from "../../../../../../shared/ui/atoms/SubmitButton/SubmitButton";
import { DroneNumberField } from "../DroneNumberField/DroneNumberField";
import { JUNumberField } from "../JUNumberField/JUNumberField";
import { PurchaseDateField } from "../PurchaseDate/PurchaseDateField";
import { AddButton } from "../../atoms/StepButton/AddButton";
import { DeleteButton } from "../../atoms/StepButton/DeleteButton";
import { ValidationSchema } from "./validation/Step2Validation";
import { InspectionDateField } from "../InspectionDateField/InspectionDateField";

export const Step2 = () => {
  const router = useRouter();
  const [step, setStep] = useRecoilState(FormStepState);
  const handlePrevStep = () => {
    // 1つ前のステップに戻る
    setStep(step - 1);
  };

  return (
    <Box>
      <Formik
        initialValues={{
          sets: [
            {
              droneNumber: "",
              JUNumber: "",
              purchaseDate: "",
              inspectionDate: "",
            },
          ],
        }}
        validationSchema={ValidationSchema}
        validateOnBlur={true}
        validateOnChange={true}
        onSubmit={async (values) => {
          // sessionからデータを取得
          const response = await createGroup({ values });
          if (response === 201) {
            router.push("/?message=グループを作成しました。");
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
                {({ remove, push }) => (
                  <Box>
                    {values.sets.map((set, index) => (
                      <Box key={index}>
                        <DroneNumberField
                          index={index}
                          handleChange={handleChange}
                          handleBlur={handleBlur}
                          validateField={validateField}
                        />
                        <JUNumberField
                          index={index}
                          handleChange={handleChange}
                        />
                        <PurchaseDateField
                          index={index}
                          handleChange={handleChange}
                        />
                        <InspectionDateField
                          index={index}
                          handleChange={handleChange}
                        />
                      </Box>
                    ))}
                    <Flex justifyContent="flex-end" m={2} gap={2}>
                      <AddButton push={push} />
                      <DeleteButton remove={remove} values={values} />
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
