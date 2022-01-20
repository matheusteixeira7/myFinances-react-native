import styled from 'styled-components/native'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons'
import { Platform, ScrollView } from 'react-native'

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1%;
`

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(278)}px;
  padding: 0 24px;
  padding-top: ${getStatusBarHeight() + RFValue(28)}px;
`

export const HeaderContentWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: auto;
  width: 100%;
`

export const User = styled.View`
  flex-direction: row;
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
`

export const DashboardCardsList = styled(ScrollView).attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: {
    paddingHorizontal: 24
  }
})`
  flex: 1;
  position: absolute;
  margin-top: ${Platform.OS === 'ios' ? RFValue(140) : RFValue(150)}px;
`
