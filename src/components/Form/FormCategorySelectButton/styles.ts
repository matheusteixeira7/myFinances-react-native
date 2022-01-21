import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;
  padding: 16px;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.text};
`
