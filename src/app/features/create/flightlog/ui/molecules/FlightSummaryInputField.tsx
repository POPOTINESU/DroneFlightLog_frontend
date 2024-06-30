import { FormInputType } from '@/app/shared/components/forms/FormInputType'
import { FormControl, FormLabel, Input, Textarea } from '@chakra-ui/react'
import { Field } from 'formik'
import React from 'react'

export const FlightSummaryInputField = (props: FormInputType) => {
  const { onChange, onBlur, value, validate } = props
  return (
    <>
    <FormLabel htmlFor="flightSummary" marginBottom="0">
      飛行概要
      <Field
        as={Textarea}
        id="flightSummary"
        autoComplete="flightSummary"
        placeholder="飛行概要"
        size="sm"
        type="text"
        name="flightSummary"
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        validate={validate}
        rows={5}
        resize="none"
      />
    </FormLabel>
    </>
  )
}
