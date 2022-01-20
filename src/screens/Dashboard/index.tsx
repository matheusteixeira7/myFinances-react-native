import React from 'react'
import {
  Container,
  Header,
  User,
  UserImage,
  GreetingsWrapper,
  UserGreeting,
  UserName,
  Icon
} from './styles'

import { user } from '../../utils/user'

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <User>
            <UserImage source={{ uri: user.photo }} />
            <GreetingsWrapper>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>{user.name}</UserName>
            </GreetingsWrapper>
        </User>

        <Icon name='power'/>
      </Header>
    </Container>
  )
}
