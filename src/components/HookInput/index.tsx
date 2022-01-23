import React from 'react'
import { Control, Controller } from 'react-hook-form'
import { TextInputProps } from 'react-native'
import { FormInput } from '../../screens/Register/styles'
import { Container } from './styles'

interface IProps extends TextInputProps {
  control: Control
  name: string
}

export const HookInput = ({ control, name, ...rest }: IProps) => {
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
    </Container>
  )
}
