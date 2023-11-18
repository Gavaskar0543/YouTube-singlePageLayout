import React from 'react';
import { Avatar, Box, Text } from '@primer/react';
import styled from 'styled-components';
import SubNavList from './SubNavList';
export default function MainContent({ video }) {
  const { title, channelName, thumbnail, channelLogo,viewCount } = video;

  return (
    <>
    <SubNav/>
    <MainDiv>
    < Box className='ThumDiv'
      p={3}
      borderWidth={1}
      sx={{width:'30vw'}}
      borderColor="border.color"
    >
      {/* Video Thumbnail */}
      <ThumbNail mb={2} sx={{display:'flex',justifyContent:'center'}}>
        <img
          src={thumbnail}
          alt="Video Thumbnail"
         width={350}
         className='image'
        />
      </ThumbNail>

     
      <Box display="flex" alignItems="center" justifyContent="space-between">
       
        <Box mb={2}>
          <Avatar src={channelLogo} alt="Channel Logo" size={40} />
        </Box>

        {/* Video Title and Channel Name */}
        <Box flex="1" ml={3}>
          <Text fontSize={2} fontWeight="bold" lineHeight="condensed" mb={1} style={{ wordBreak: 'break-word' }}>
            {title}
          </Text>
          <br/>
          <Text fontSize={1} color="text.secondary" sx={{ wordBreak: 'break-word' }}>
            {channelName}
          </Text>
          <Text  sx={{marginLeft:'16px'}} fontSize={1} color="text.secondary">
           {viewCount}
          </Text>
        </Box>
      </Box>
    </Box>
    </MainDiv>
    </>
  );
}


const MainDiv = styled.div`
@media screen and (max-width:786px){
  .ThumDiv{
    
    width:auto;
  }
 
}
`


const ThumbNail = styled.div`

img{
  border-radius:10px;
}
@media screen and (max-width:786px){
 
  .image{
    width:90%;
  }
}

`