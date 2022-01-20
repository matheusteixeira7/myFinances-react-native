import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  width: 100%;
  height: ${RFValue(278)}px;
  `

export const Header = styled.View`
  padding: 28px 24px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const User = styled.View`
  margin-top: ${getStatusBarHeight() + RFValue(24)}px;
  flex-direction: row;
  align-items: center;
`

export const UserImage = styled.Image`
  width: ${RFValue(50)}px;
  height: ${RFValue(50)}px;
  border-radius: 10px;
`

export const GreetingsWrapper = styled.View`
  margin-left: 16px;
`

export const UserGreeting = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
`

export const UserName = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary};
  margin-top: ${getStatusBarHeight() + RFValue(24)}px;
`
