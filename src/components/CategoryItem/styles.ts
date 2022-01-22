import { Feather } from '@expo/vector-icons'
import { TouchableOpacityProps } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

interface ICategoryItemProps extends TouchableOpacityProps {
  isActive: boolean
}

export const Container = styled.TouchableOpacity<ICategoryItemProps>`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  padding: 24px;

  background-color: ${({ theme, isActive }) =>
    isActive ? theme.colors.secondary : theme.colors.transparent
  };
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text_dark};
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(16)}px;
  color: ${({ theme }) => theme.colors.text_dark};

  margin-left: 16px;
`
