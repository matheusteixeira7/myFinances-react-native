import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { FormInput } from '../../screens/Register/styles'
import { Container, Error } from './styles'

interface IProps extends TextInputProps {
  control: Control
  name: string
  error: string
}

export const HookInput = ({ control, name, error, ...rest }: IProps) => {
  return (
    <Container>
      <Controller
        control={control}
        render={({ field: { onChange, value } }) => (
          <FormInput
            onChangeText={onChange}
            value={value}
            {...rest}
          />
        )}
        name={name}
      />
      {error && <Error>{error}</Error>}
    </Container>
  )
}
