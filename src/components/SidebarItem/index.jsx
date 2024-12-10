import React from 'react'

import * as S from './styles';

const SidebarItem = ({ Icon, Text }) => {
  return (
    <S.Container>
      <Icon />
      {Text}
    </S.Container>
  )
}

export default SidebarItem