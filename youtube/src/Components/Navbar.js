
import React from 'react';
import { Header, Text, TextInput, Button, Avatar, Flex, Box } from '@primer/react';
import { SearchIcon ,ThreeBarsIcon,BellIcon ,VideoIcon  } from '@primer/octicons-react';
import {FaMicrophone } from 'react-icons/fa'
import Styled from 'styled-components'
const Navbar = () => {
  return (
    <MainDiv>
    <Header full sx={{display:'flex',justifyContent:'space-between'}}>
    <Header.Item sx={{width:'10vw',display:'flex',justifyContent:'space-around'}}>
      <Box className='HideElement'>
        <ThreeBarsIcon/>
      </Box>
      <Box sx={{padding:'2px'}}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3ZlVg6uPUceEu7ezojYV7TsmLJMmiQ23HWTsrxwq3CyWHdbnXjphv7c5phinQA5TfjPk&usqp=CAU" width={50} alt="youtube-logo"/>
      </Box>
    </Header.Item>
    <Header.Item>
    <Box >
        <TextInput  sx={{width:'40vw'}} placeholder='Search' trailingVisual={SearchIcon} />
      </Box>
      <Box sx={{marginLeft:'2%'}}  className='HideElement'>
      <FaMicrophone fontSize={16}/>
      </Box>
    </Header.Item>
     
    <Header.Item sx={{ width:'10vw',display:'flex',justifyContent:'space-between'}}>
    <Box  className='HideElement'>
    <VideoIcon />
      </Box>
      <Box  className='HideElement'>
      <BellIcon/>
      </Box>
      <Box>
      <Avatar
            src="https://github.com/octocat.png"
            size={20}
            square
            alt="@octocat"
          />
      </Box>


    </Header.Item>

    </Header>
    </MainDiv>





       
        
    

  );
};

const MainDiv = Styled.div`


@media screen and (max-width: 480px) {
  .HideElement {
    display: none;
  }
}

`

export default Navbar;
