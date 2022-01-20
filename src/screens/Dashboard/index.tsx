import React from 'react'
import {
  Container,
  Header,
  HeaderContentWrapper,
  User,
  UserImage,
  GreetingsWrapper,
  UserGreeting,
  UserName,
  Icon,
  DashboardCardsList,
  TransactionsContainer,
  TransactionsTitle,
  TransactionsList
} from './styles'

import { user } from '../../utils/user'
import { DashboardCards } from '../../components/DashboardCards'
import { TransactionCard } from '../../components/TransactionsCard'
import { data } from '../../utils/transactions'

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <HeaderContentWrapper>
          <User>
              <UserImage source={{ uri: user.photo }} />
              <GreetingsWrapper>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>{user.name}</UserName>
              </GreetingsWrapper>
          </User>
          <Icon name='power'/>
        </HeaderContentWrapper>
      </Header>

      <DashboardCardsList>
        <DashboardCards
          title='Entradas'
          type='up'
          amount='R$ 17.400,00'
          lastTransaction='Última transação dia 13 de abril'
        />
        <DashboardCards
          title='Saídas'
          type='down'
          amount='R$ 5.000,00'
          lastTransaction='Última transação dia 13 de abril'
        />
        <DashboardCards
          title='Total'
          type='total'
          amount='R$ 12.400,00'
          lastTransaction='Última transação dia 13 de abril'
        />
      </DashboardCardsList>

      <TransactionsContainer>
        <TransactionsTitle>Listagem</TransactionsTitle>

        <TransactionsList
          data={data}
          renderItem={({ item }) =>
            <TransactionCard data={item}
          />}
          keyExtractor={item => item.id}
        />
      </TransactionsContainer>
    </Container>
  )
}
