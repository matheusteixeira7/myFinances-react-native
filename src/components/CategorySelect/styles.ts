import styled from 'styled-components/native'
import { RFValue } from 'react-native-responsive-fontsize'
import { FlatList, FlatListProps } from 'react-native'

interface IFlatListProps extends FlatListProps<any> {}

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  `
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(113)}px;
  padding-bottom: 19px;

  align-items: center;
  justify-content: flex-end;
`

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const List = styled(FlatList)<IFlatListProps>``

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`

export const Footer = styled.View`
  padding: 0 24px;
`
