import React from 'react'
import {ActionList,Box,Text} from '@primer/react';
import { HomeIcon } from '@primer/octicons-react';
export default function Sidebar() {
  return (
   
    <ActionList sx={{textAlign:'center',}}>
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

  )
}
