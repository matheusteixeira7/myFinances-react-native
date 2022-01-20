import styled from 'styled-components/native'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { Platform } from 'react-native'

interface ITypeProps {
  type: 'up' | 'down' | 'total'
}

export const Container = styled.View<ITypeProps>`
  background-color: ${({ theme, type }) =>
    type === 'total'
    ? theme.colors.secondary
    : theme.colors.shape
  };

  padding: 18px 22px 42px;
  border-radius: 5px;

  width: ${Platform.OS === 'ios' ? RFValue(280) : RFValue(300)}px;
  margin-right: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${Platform.OS === 'ios' ? '28px' : '18px'};
`

export const Body = styled.View``

export const Title = styled.Text<ITypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme, type }) =>
    type === 'total'
    ? theme.colors.shape
  : theme.colors.title}
`

export const Icon = styled(Feather)<ITypeProps>`
  font-size: ${RFValue(40)}px;
  color: ${({ theme, type }) =>
    type === 'up'
    ? theme.colors.success
    : type === 'down'
    ? theme.colors.attention
    : theme.colors.shape
  };
`

export const Amount = styled.Text<ITypeProps>`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({ theme, type }) =>
    type === 'total'
    ? theme.colors.shape
  : theme.colors.title}
`

export const LastTransaction = styled.Text<ITypeProps>`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;
  color: ${({ theme, type }) =>
    type === 'total'
    ? theme.colors.shape
  : theme.colors.title}
`
