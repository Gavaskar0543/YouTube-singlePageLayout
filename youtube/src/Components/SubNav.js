import React from 'react'
import { TextInput } from '@primer/react';
import { SearchIcon } from '@primer/octicons-react';
export default function SubNav() {
  return (
    <SubNav aria-label="Main">
  <SubNav.Links>
    <SubNav.Link href="#home" selected>
      Home
    </SubNav.Link>
    <SubNav.Link href="#documentation">Documentation</SubNav.Link>
    <SubNav.Link href="#support">Support</SubNav.Link>
  </SubNav.Links>

  <TextInput type="search" leadingVisual={SearchIcon} sx={{width: 320}} />
</SubNav>
  )
}
