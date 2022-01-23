import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, Modal, TouchableWithoutFeedback, View } from 'react-native'
import { Button } from '../../components/Button'
import { CategorySelect } from '../../components/CategorySelect'
import { FormCategorySelectButton } from '../../components/Form/FormCategorySelectButton'
import { FormTransactionTypeButton } from '../../components/Form/FormTransactionTypeButton'
import { HookInput } from '../../components/HookInput'
import {
  Container,
  Form,
  Header,
  HeaderTitle,
  TransactionTypeWrapper
} from './styles'

interface IFormData {
  name: string
  amount: number
}

export const Register = () => {
  const [type, setType] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const {
    control,
    handleSubmit
  } = useForm()

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

  const handleRegister = (form: IFormData) => {
    const data = {
      name: form.name,
      amount: form.amount,
      type,
      category: category.key
    }

    console.log(data)
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
            <HookInput
              name="name"
              placeholder="Nome"
              control={control}
            />
            <HookInput
              name='amount'
              placeholder='Valor'
              control={control}
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
              title={category.name}
              onPress={handleOpenModal}
            />
          </View>

          <Button
            title='Enviar'
            onPress={handleSubmit(handleRegister)}
          />
        </Form>

        <Modal
          animationType="slide"
          transparent={false}
          visible={modalVisible}
        >
          <CategorySelect
            category={category}
            setCategory={setCategory}
            closeModal={handleCloseModal}
          />
        </Modal>
      </Container>
    </TouchableWithoutFeedback>
  )
}
