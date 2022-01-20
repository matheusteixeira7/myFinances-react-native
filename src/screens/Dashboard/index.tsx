import React from 'react'
import {
  Container,
  Wrapper,
  UserWrapper,
  UserImage,
  User,
  UserGreeting,
  UserName,
  Icon
} from './styles'

import { user } from '../../utils/user'

export const Dashboard = () => {
  return (
    <Container>
      <Wrapper>
        <UserWrapper>
            <UserImage source={{ uri: user.photo }} />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user.name}</UserName>
            </User>
        </UserWrapper>

        <Icon name='power'/>
      </Wrapper>
    </Container>
  )
}
