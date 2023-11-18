import React from 'react';
import { Box } from '@primer/react';
import MainContent from './MainContent'; // Import your MainContent component
import { youtubeData } from '../Data'; // Assuming you have the video data in a separate file
import styled from 'styled-components';
import SubNavList from './SubNavList';

export default function VideoList() {
  return (
    <>
    <SubNavList/>
    <VideoDiv>
      {youtubeData.map((video, index) => (
        <MainContent key={index} video={video} />
      ))}
    </VideoDiv>
    </>
  );
}

const VideoDiv = styled.div`
display:grid;
grid-template-columns: repeat(3, auto);
margin-left:-3%;

@media screen and (max-width:786px){
    grid-template-columns: 1fr ;
    margin-left:3%;
    justify-items: center;
}
`