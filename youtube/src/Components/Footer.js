import React from 'react'
import { ActionList,Box,Text } from '@primer/react';
import { HomeIcon } from '@primer/octicons-react';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import TheatersIcon from '@mui/icons-material/Theaters';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
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
        <TheatersIcon/>
        </Box>
        <Box>
          <Text>Shorts</Text>
        
      </Box>

    </ActionList.Item>
    <ActionList.Item sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
      
        <Box mb={1}>
        <SubscriptionsIcon/>
        </Box>
        <Box>
          <Text>Subscripiton</Text>
        
      </Box>

    </ActionList.Item>
    <ActionList.Item sx={{display:'flex',flexDirection:'column',justifyContent:'center',}}>
      
        <Box mb={1}>
        <VideoLibraryIcon/>
        </Box>
        <Box>
          <Text>Library</Text>
        
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
  background-color:white;
@media screen and (min-width: 480px) {
  .HideElement {
    display: none;
  }
}
`
