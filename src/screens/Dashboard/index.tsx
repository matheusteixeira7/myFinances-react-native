import React from 'react'
import {
  Container,
  Header,
  HeaderContentWrapper,
  User,
  UserImage,
  GreetingsWrapper,
  UserGreeting,
  UserName,
  Icon
} from './styles'

import { user } from '../../utils/user'
import { DashboardCards } from '../../components/DashboardCards'

export const Dashboard = () => {
  return (
    <Container>
      <Header>
        <HeaderContentWrapper>
          <User>
              <UserImage source={{ uri: user.photo }} />
              <GreetingsWrapper>
                <UserGreeting>Olá,</UserGreeting>
                <UserName>{user.name}</UserName>
              </GreetingsWrapper>
          </User>
          <Icon name='power'/>
        </HeaderContentWrapper>
      </Header>

      <DashboardCards />
    </Container>
  )
}
