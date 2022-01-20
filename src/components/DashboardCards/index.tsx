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

export const DashboardCards = () => {
  return (
    <Container>
      <Header>
        <Title>Entradas</Title>
        <Icon name='arrow-up-circle' />
      </Header>

      <Body>
        <Amount>R$ 17.400,00</Amount>
        <LastTransaction>Última transação dia 13 de abril</LastTransaction>
      </Body>
    </Container>
  )
}
