import { FormInputType } from '@/app/shared/components/forms/FormInputType'
import { FormLabel, Input } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

export const PilotNameInputField = (props: FormInputType) => {
  return (
    <FormLabel htmlFor="pilotName" marginBottom="0">
      操縦者名
      <Field
        as={Input}
        id="pilotName"
        autoComplete="pilotName"
        placeholder="操縦者名"
        size="sm"
        type="text"
        name="pilotName"
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        validate={props.validate}
      />
    </FormLabel>
  )
}
