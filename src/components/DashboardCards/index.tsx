import React from 'react'
import {
  Container,
  Header,
  Body,
  Title,
  Icon,
  Amount,
  LastTransaction
} from './styles'

interface IDashboardCardsProps {
  title: string
  type: 'up' | 'down' | 'total'
  amount: string
  lastTransaction: string
}

export const DashboardCards = ({ title, type, amount, lastTransaction }: IDashboardCardsProps) => {
  const iconName = type === 'up' ? 'arrow-up-circle' : type === 'down' ? 'arrow-down-circle' : 'dollar-sign'

  return (
    <Container type={type}>
      <Header>
        <Title type={type}>{title}</Title>
        <Icon name={iconName} type={type} />
      </Header>

      <Body>
        <Amount type={type}>{amount}</Amount>
        <LastTransaction type={type}>{lastTransaction}</LastTransaction>
      </Body>
    </Container>
  )
}
