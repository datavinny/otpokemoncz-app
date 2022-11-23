import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaTimes, 
  // FaHome, 
  // FaRegSun, 
  FaUserAlt,
  // FaRegFileAlt,
  // FaRegCalendarAlt,
  FaDownload,
  // FaMedal,
  FaShoppingBag,
  FaSun,
} from 'react-icons/fa';

import SidebarItem from '../SidebarItem';

import * as S from './styles';

const Sidebar = ({ active }) => {

  const closeSidebar = () => {
    active(false)
  }

  return (
    <S.Container sidebar={active}>
      <FaTimes onClick={closeSidebar} />  
      <S.Content>
        {/* <Link to="/news"><SidebarItem Icon={FaHome} Text="Home" /></Link> */}
        {/* <Link to="/news"><SidebarItem Icon={FaRegFileAlt} Text="Atualizações" /></Link> */}
        {/* <Link to="/events"><SidebarItem Icon={FaRegCalendarAlt} Text="Eventos" /></Link> */}
        {/* <Link to="/ranking"><SidebarItem Icon={FaMedal} Text="Ranking" /></Link> */}
        <Link to="/vip-shop">
          <SidebarItem Icon={FaShoppingBag} Text="VIP Shop" />
        </Link>
        <Link to="/shinys">
          <SidebarItem Icon={FaSun} Text="Lista Shinys" />
        </Link>
        <Link to="/download">
          <SidebarItem Icon={FaDownload} Text="Download" />
        </Link>
        <Link to="/account">
          <SidebarItem Icon={FaUserAlt} Text="Conta" />
        </Link>
        {/* <Link to="/settings"><SidebarItem Icon={FaRegSun} Text="Configurações" /></Link> */}
      </S.Content>
    </S.Container>
  )
}

export default Sidebar