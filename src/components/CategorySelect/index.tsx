import React from 'react'
import { FlatList } from 'react-native'
import { categories } from '../../utils/categories'
import { Button } from '../Button'
import {
  CategoryItem,
  Container,
  Footer,
  Header,
  HeaderTitle,
  Icon,
  Separator,
  Title
} from './styles'

interface ICategorySelectProps {
  closeModal: () => void
}

export const CategorySelect = ({ closeModal }: ICategorySelectProps) => {
  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro</HeaderTitle>
      </Header>

        <FlatList
          data={categories}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <>
              <CategoryItem>
                <Icon name={item.icon} />
                <Title>{item.name}</Title>
              </CategoryItem>
              <Separator />
            </>
          )}
          />

      <Footer>
        <Button
          title='Selecionar'
          onPress={closeModal}
        />
      </Footer>
    </Container>
  )
}
