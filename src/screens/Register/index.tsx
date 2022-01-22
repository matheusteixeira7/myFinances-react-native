import React, { useState } from 'react'
import { Keyboard, Modal, TouchableWithoutFeedback, View } from 'react-native'
import { Button } from '../../components/Button'
import { CategorySelect } from '../../components/CategorySelect'
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
  const [modalVisible, setModalVisible] = useState(false)

  const handleIncomeTransactionType = () => {
    setType('income')
  }

  const handleOutcomeTransactionType = () => {
    setType('outcome')
  }

  const handleDismissKeyboard = () => {
    Keyboard.dismiss()
  }

  const handleOpenModal = () => {
    setModalVisible(true)
  }

  const handleCloseModal = () => {
    setModalVisible(false)
  }

  const handleSubmit = () => {
    console.log('text', text)
    console.log('number', number)
    console.log('type', type)
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
          <View>
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

            <FormCategorySelectButton
              title='Categoria'
              onPress={handleOpenModal}
            />
          </View>

          <Button
            title='Enviar'
            onPress={handleSubmit}
          />
        </Form>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <CategorySelect
            closeModal={handleCloseModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}
