import styled from 'styled-components/macro'

export const Header = styled.header`
  display: flex;
  background-color: olivedrab;
`
export const Nav = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Logo = styled.span`
  font-family: 'Josefin Sans', sans-serif;
  margin-left: 5px;
  font-size: 2rem;
`

export const InnerNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
`

export const Li = styled.li`
  list-style: none;
  margin-left: 15px;
`

export const Span = styled.span`
  display: flex;
  align-self: auto;
  border: 3px solid yellowgreen;
  border-radius: 35%;
  padding: 6px;
  color: lightgreen: ;;
  font-weight: bold;
  font-size: 25px;

  &:hover {
    border: 3px solid yellow;
    background-color: olive;
    color: yellow;
  }
`
