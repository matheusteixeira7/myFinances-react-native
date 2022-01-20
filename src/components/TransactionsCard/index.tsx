import React from 'react'

import {
  Amount,
  Category,
  Container,
  Title,
  Date,
  Icon,
  CategoryName,
  Header,
  Body
} from './styles'

interface IDataProps {
  data: ITransactionCardProps
}

interface ITransactionCardProps {
  id: string
  type: string
  amount: string
  category: string
  date: string
  icon: string
  title: string
}

export const TransactionCard = ({ data }: IDataProps) => {
  return (
    <Container id={data.id}>
      <Header>
        <Title>{data.title}</Title>
        <Amount type={data.type}>
          {data.type === 'outcome' ? '- ' : ''}
          {data.amount}
        </Amount>
      </Header>

      <Body>
        <Category>
          <Icon name={data.icon} />
          <CategoryName>{data.category}</CategoryName>
        </Category>
        <Date>{data.date}</Date>
      </Body>
    </Container>
  )
}
