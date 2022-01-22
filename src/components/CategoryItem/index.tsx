import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import { Container, Icon, Title } from './styles'

interface ICategoryItemProps extends TouchableOpacityProps{
  isActive: boolean
  icon: string
  title: string
}

export const CategoryItem = ({ icon, title, isActive, ...rest }: ICategoryItemProps) => {
  return (
    <Container
    isActive={isActive}
      {...rest}
    >
      <Icon name={icon} />
      <Title>{title}</Title>
    </Container>
  )
}
