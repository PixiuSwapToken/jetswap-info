import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { useDarkModeManager } from '../../contexts/LocalStorage'
import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/jetlogo.png'
import Logo2 from '../../assets/jetlogo2.png'

const TitleWrapper = styled.div`
  text-decoration: none;

  &:hover {
    cursor: pointer;
  }

  z-index: 10;
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

export default function Title() {
  const history = useHistory()
  const [darkMode] = useDarkModeManager()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center">
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            {darkMode && <img width={'150px'} src={Logo} alt="logo" />}
            {!darkMode && <img width={'150px'} src={Logo2} alt="logo" />}
            
          </UniIcon>
        </RowFixed>
      </Flex>
    </TitleWrapper>
  )
}
