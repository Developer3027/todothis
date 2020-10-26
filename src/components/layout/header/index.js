import React from 'react'
import { Form } from '../form'
import { HiUser, HiCog } from 'react-icons/hi'

import {
  Header,
  Nav,
  LogoBox,
  Logo,
  InnerNav,
  Ul,
  Li,
  Span
} from './styles/topNav'

export const TopNav = () => {
  return (
    <Header data-testid='header'>
      <Nav>
        <LogoBox>
          <img src='./images/logo.png' alt='Todo This logo' />
          <Logo>Much Ado</Logo>
        </LogoBox>
        <Form />
        <InnerNav>
          <Ul>
            <Li>
              <Span>
                <HiCog />
              </Span>
            </Li>
            <Li>
              <Span>
                <HiUser />
              </Span>
            </Li>
          </Ul>
        </InnerNav>
      </Nav>
    </Header>
  )
}
