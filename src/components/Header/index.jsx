import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'

import * as S from './styles';

const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <S.Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
    </S.Container>
  )
}

export default Header
