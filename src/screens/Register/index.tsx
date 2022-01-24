import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Alert, Keyboard, Modal, TouchableWithoutFeedback, View } from 'react-native'
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

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

const schema = Yup.object().shape({
  name: Yup.string().required('Campo obrigatório'),
  amount:
  Yup.number()
    .typeError('Valor inválido')
    .positive('Valor deve ser positivo')
    .required('Campo obrigatório')
})

export const Register = () => {
  const [type, setType] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [category, setCategory] = useState({
    key: 'category',
    name: 'Categoria'
  })

  const {
    control,
    handleSubmit,
    formState: {
      errors
    }
  } = useForm({
    resolver: yupResolver(schema)
  })

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
    if (type === '') {
      return Alert.alert('Erro', 'Selecione o tipo da transação')
    }

    if (category.key === 'category') {
      return Alert.alert('Erro', 'Selecione uma categoria')
    }

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
              autoCorrect={false}
              error={errors.name && errors.name.message}
            />
            <HookInput
              name='amount'
              placeholder='Valor'
              control={control}
              error={errors.amount && errors.amount.message}
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
