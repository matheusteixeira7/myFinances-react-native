import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

interface ITransactionTypeProps extends TouchableOpacityProps {
  type: string
  title: string
  isActive: boolean
}

export const TransactionType = ({ title, type, isActive, ...rest }: ITransactionTypeProps) => {
  return (
    <Container type={type} isActive={isActive} {...rest}>
      <Icon
        type={type}
        name='arrow-up-circle'
      />
      <Title>{title}</Title>
    </Container>
  )
}
