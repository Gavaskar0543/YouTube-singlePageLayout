
import React ,{useState}from 'react';
import { Header, Text, TextInput, Button, Avatar, Flex, Box } from '@primer/react';
import { SearchIcon ,ThreeBarsIcon,BellIcon } from '@primer/octicons-react';
import {FaMicrophone} from 'react-icons/fa';
import VideoCallIcon from '@mui/icons-material/VideoCall';

import Styled from 'styled-components'
const Navbar = () => {
 
  
  return (
    <MainDiv>

    <Header full sx={{display:'flex',justifyContent:'space-between',backgroundColor:'black',color:'white'}}>
   
   
    
      
    <Header.Item sx={{width:'10vw',display:'flex',justifyContent:'space-around'}}>
      <Box className='HideElement'>
        <ThreeBarsIcon />
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
    <VideoCallIcon />
      </Box>
      <Box  className='HideElement'>
      <BellIcon/>
      </Box>
      <Box>
      <Avatar src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Channel Logo" size={40} />
      </Box>


    </Header.Item>

    </Header>
   
    </MainDiv>





       
        
    

  );
};

const MainDiv = Styled.div`


@media screen and (max-width: 786px) {
  .HideElement {
    display: none;
  }
}

`

const BurgerNav=Styled.div `
position:fixed;
top:0;
bottom:0;
left:0;
background-color:white;
width:300px;
z-index:16;
padding:20px;
list-style:none;
display:flex;
flex-direction:column;
text-align:start;
transform:${props=>props.show ? 'translateX(0)':'translateX(-100%)'};
transition:transform 0.2s;
li{
  padding:15px 0;
  border-bottom:1px solid rgba(0,0,0,.2);
}
a{
  font-weight:600;
}
`


const CustomClose=Styled.span`
color:black;
cursor:pointer;

`
const CloseWraper=Styled.div`
display:flex;
justify-content:flex-start;
`

export default Navbar;
