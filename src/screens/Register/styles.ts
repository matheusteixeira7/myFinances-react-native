import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  `
export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  height: ${RFValue(113)}px;
  padding-bottom: 19px;
  margin-bottom: 24px;

  align-items: center;
  justify-content: flex-end;
`

export const HeaderTitle = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  color: ${({ theme }) => theme.colors.shape};
`

export const FormWrapper = styled.View`
  
`

export const Form = styled.View`
  padding: 0 24px;
`

export const FormInput = styled.TextInput.attrs((props) => ({
  placeholderTextColor: props.theme.colors.text
}))`
  background-color: ${({ theme }) => theme.colors.shape};

  width: 100%;
  height: ${RFValue(55)}px;

  padding: 18px;
  margin-bottom: 8px;
  border-radius: 5px;

  color: ${({ theme }) => theme.colors.text_dark};
  
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`

export const TransactionTypeWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
`

export const FormCategory = styled.View`
  
`
