
import React from 'react';
import { Header, Text, TextInput, Button, Avatar, Flex, Box } from '@primer/react';
import { SearchIcon ,ThreeBarsIcon,BellIcon ,VideoIcon  } from '@primer/octicons-react';
import { FaMicrophone } from 'react-icons/fa';

const Navbar = () => {
  return (
      <Header sx={{diplay:'flex'}}>
        <Header.Item>
          <ThreeBarsIcon/>
        </Header.Item>
        <Header.Item>
          <Header.Link
           
          >
           
            <Box>Youtube</Box>
            <sup>In</sup>
          </Header.Link>
        </Header.Item>
        <Header.Item full>
        <Box mb={3}>
        <TextInput  sx={{width:'40vw'}} placeholder='Search' trailingVisual={SearchIcon} />
      </Box>
      <Header.Item>
        <FaMicrophone fontSize={20} />
      </Header.Item>

        </Header.Item>
        <Header.Item>
         
        </Header.Item>
       
        <Header.Item
         
        >

          <Box>
            <Box>
          <BellIcon/>
          </Box>
          <Box>
        <VideoIcon />
          </Box>

          <Box>
          <Avatar
            src="https://github.com/octocat.png"
            size={20}
            square
            alt="@octocat"
          />
          </Box>
          </Box>
          
         
        </Header.Item>
       
      </Header>
    

  );
};

export default Navbar;
