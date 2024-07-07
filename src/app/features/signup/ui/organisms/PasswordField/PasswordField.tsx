import { PasswordFormInput } from '@/app/shared/ui/forms/passwordFormInput/PasswordFormInput'
import { Box, FormControl, FormErrorMessage } from '@chakra-ui/react'
import React from 'react'
import { passwordFieldType } from './type/passwordFieldType'
import { passwordValidate } from '@/app/shared/validation/passwordValidate'

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
    {errors.password ? (
      <FormErrorMessage>{errors.password}</FormErrorMessage>
    ) : (
      <Box height={7}></Box>
    )}
  </FormControl>
  )
}
