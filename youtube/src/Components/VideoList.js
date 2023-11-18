import React from 'react';
import { Box } from '@primer/react';
import MainContent from './MainContent'; // Import your MainContent component
import { youtubeData } from '../Data'; // Assuming you have the video data in a separate file
import styled from 'styled-components';

export default function VideoList() {
  return (
    <VideoDiv>
      {youtubeData.map((video, index) => (
        <MainContent key={index} video={video} />
      ))}
    </VideoDiv>
  );
}

const VideoDiv = styled.div`

`