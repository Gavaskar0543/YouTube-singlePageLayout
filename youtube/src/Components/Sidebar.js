import React from 'react'
import {ActionList,Box,Text} from '@primer/react';
import { HomeIcon } from '@primer/octicons-react';
export default function Sidebar() {
  return (
   
  <Box sx={{ display: 'flex', flexDirection: 'column',alignItems:'center' ,}}>
    <HomeIcon />
    <Text>Interface</Text>
  </Box>


  )
}
