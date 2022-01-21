import React, { useState } from 'react'
import { TransactionType } from '../../components/Form/TransactionType'
import { Container, Form, FormInput, Header, HeaderTitle, TransactionTypeWrapper } from './styles'

export const Register = () => {
  const [text, onChangeText] = useState('')
  const [number, onChangeNumber] = useState(null)
  const [type, setType] = useState('')

  const handleIncomeTransactionType = () => {
    setType('income')
  }

  const handleOutcomeTransactionType = () => {
    setType('outcome')
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro</HeaderTitle>
      </Header>

      <Form>
        <FormInput
          placeholder="Nome"
          onChangeText={onChangeText}
          value={text}
        />
        <FormInput
          placeholder="Preço"
          onChangeText={onChangeNumber}
          value={number}
          keyboardType='numeric'
        />

        <TransactionTypeWrapper>
          <TransactionType
            type='income'
            title='Entrada'
            onPress={handleIncomeTransactionType}
            isActive={type === 'income'}
          />
          <TransactionType
            type='outcome'
            title='Saída'
            onPress={handleOutcomeTransactionType}
            isActive={type === 'outcome'}
          />
        </TransactionTypeWrapper>
      </Form>
    </Container>
  )
}
