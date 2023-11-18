import React from 'react'
import {ActionList,Box,Text} from '@primer/react';
import { HomeIcon} from '@primer/octicons-react';
import TheatersIcon from '@mui/icons-material/Theaters';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import NotStartedIcon from '@mui/icons-material/NotStarted';
export default function Sidebar() {
  return (
   
    <ActionList sx={{textAlign:'center',position:'sticky',top:8,left:0,zIndex:'-1000'}}>
    <ActionList.Item sx={{display:'flex',flexDirection:'column',justifyContent:'center'}}>
      
        <Box mb={1}>
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
        <NotStartedIcon/>
        </Box>
        <Box>
          <Text>You</Text>
        
      </Box>

    </ActionList.Item>
  </ActionList>

  )
}
