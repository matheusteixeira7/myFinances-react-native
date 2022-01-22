import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

interface IFormCategorySelectButtonProps extends TouchableOpacityProps{
  title: string
}

export const FormCategorySelectButton = ({ title, ...rest }: IFormCategorySelectButtonProps) => {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
      <Icon name='chevron-down'/>
    </Container>
  )
}
