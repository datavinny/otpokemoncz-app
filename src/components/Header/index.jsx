import React, { useState, useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import Sidebar from '../Sidebar'
import MyContext from '../../context/MyContext';
import { 
  CgDarkMode
} from 'react-icons/cg'

import * as S from './styles';

const Header = () => {
  const [sidebar, setSidebar] = useState(false)
  const { themeToggler } = useContext(MyContext);

  const showSiderbar = () => setSidebar(!sidebar)

  return (
    <S.Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <CgDarkMode className="theme" onClick={() => themeToggler()} />
    </S.Container>
  )
}

export default Header
