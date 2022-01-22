import React from 'react'
import { categories } from '../../utils/categories'
import { Button } from '../Button'
import { CategoryItem } from '../CategoryItem'
import {
  Container,
  Footer,
  Header,
  HeaderTitle,
  List,
  Separator
} from './styles'

interface Category {
  key: string
  name: string
}
interface Data {
  key: string
  name: string
  icon: string
  color: string
}

interface ICategorySelectProps {
  category: Category
  setCategory: (item: Category) => void
  closeModal: () => void
}

export const CategorySelect = ({ category, setCategory, closeModal }: ICategorySelectProps) => {
  const handleCategorySelect = (item: Data) => {
    setCategory(item)
  }

  return (
    <Container>
      <Header>
        <HeaderTitle>Cadastro</HeaderTitle>
      </Header>

        <List
          data={categories}
          keyExtractor={item => item.key}
          renderItem={({ item }) => (
            <>
              <CategoryItem
                onPress={() => handleCategorySelect(item)}
                isActive={category.key === item.key}
                icon={item.icon}
                title={item.name}
              />
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
