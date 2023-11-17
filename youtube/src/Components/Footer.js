import React from 'react'
import { ActionList,Box,Text } from '@primer/react';
import { HomeIcon } from '@primer/octicons-react';
import styled from 'styled-components';
export default function Footer() {
  return (
    <FooterDiv>
    <ActionList sx={{display:'flex',textAlign:'center'}}  className='HideElement'>
    <ActionList.Item sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
      
        <Box mb={1} sx={{}}>
        <HomeIcon/>
        </Box>
        <Box>
          <Text>Home</Text>
        
      </Box>

    </ActionList.Item>
    <ActionList.Item sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
      
        <Box mb={1}>
        <HomeIcon/>
        </Box>
        <Box>
          <Text>Home</Text>
        
      </Box>

    </ActionList.Item>
    <ActionList.Item sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
      
        <Box mb={1}>
        <HomeIcon/>
        </Box>
        <Box>
          <Text>Home</Text>
        
      </Box>

    </ActionList.Item>
    <ActionList.Item sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
      
        <Box mb={1}>
        <HomeIcon/>
        </Box>
        <Box>
          <Text>Home</Text>
        
      </Box>

    </ActionList.Item>
  </ActionList>
  </FooterDiv>
  )
}

const FooterDiv = styled.div`
position: fixed;
  bottom: 0;
  width: 100%;
@media screen and (min-width: 480px) {
  .HideElement {
    display: none;
  }
}
`
