import React, { useState } from 'react'
import { Keyboard, TouchableWithoutFeedback } from 'react-native'
import { FormCategorySelectButton } from '../../components/Form/FormCategorySelectButton'
import { FormTransactionTypeButton } from '../../components/Form/FormTransactionTypeButton'
import {
  Container,
  Form,
  FormInput,
  Header,
  HeaderTitle,
  TransactionTypeWrapper
} from './styles'

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

  const handleDismissKeyboard = () => {
    Keyboard.dismiss()
  }

  return (
    <TouchableWithoutFeedback
      onPress={handleDismissKeyboard}
    >
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
            <FormTransactionTypeButton
              type='income'
              title='Entrada'
              onPress={handleIncomeTransactionType}
              isActive={type === 'income'}
            />
            <FormTransactionTypeButton
              type='outcome'
              title='Saída'
              onPress={handleOutcomeTransactionType}
              isActive={type === 'outcome'}
            />
          </TransactionTypeWrapper>

          <FormCategorySelectButton />
        </Form>
      </Container>
    </TouchableWithoutFeedback>
  )
}
