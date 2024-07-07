import { PasswordFormInput } from '@/app/shared/ui/forms/passwordFormInput/PasswordFormInput'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { passwordValidate } from './validation/passwordValidate'
import { passwordFieldType } from '@/app/features/signup/ui/organisms/PasswordField/type/passwordFieldType'


export const PasswordField = (props: passwordFieldType) => {
  const { handleChange, handleBlur, values, errors, touched } = props
  return (
    <FormControl
    isInvalid={!!errors.password && touched.password}
  >
    <PasswordFormInput
      onChange={handleChange}
      onBlur={handleBlur}
      value={values.password ?? ''}
      validate={passwordValidate}
    />
    <FormErrorMessage>{errors.password}</FormErrorMessage>
  </FormControl>
  )
}
