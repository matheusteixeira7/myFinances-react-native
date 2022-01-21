import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

interface IContainerProps {
  isActive: boolean
  type: string
}

interface IIconProps {
  type: string
}

export const Container = styled.TouchableOpacity<IContainerProps>`
  background-color: ${({ theme, type, isActive }) =>
    type === 'income' && isActive
    ? theme.colors.success_light
    : type === 'outcome' && isActive
    ? theme.colors.attention_light
    : theme.colors.transparent
  };

  flex-direction: row;
  justify-content: center;
  align-items: center;

  padding: 16px;
  margin: 8px 0 16px;
  width: 48%;

  border: 1.5px solid ${({ theme, isActive }) =>
    isActive ? theme.colors.transparent : theme.colors.gray
  };
  border-radius: 5px;
`

export const Icon = styled(Feather)<IIconProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === 'income'
      ? theme.colors.success
    : theme.colors.attention
  };

  margin-right: 12px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.title}
`
