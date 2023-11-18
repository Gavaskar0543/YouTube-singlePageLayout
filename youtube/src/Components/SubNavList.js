import React from 'react'
import {Label,LabelGroup} from '@primer/react'
import ExploreIcon from '@mui/icons-material/Explore';
import styled from 'styled-components';
export default function SubNavList() {
  return (
    <MainDiv>
    <LabelGroup  gap={4}>
  <Label className='all'>All</Label>
  <Label >Space Science</Label>
  <Label >Elon Musk</Label>
  <Label >Computer Science</Label>
  <Label >Coding Tutorials</Label>
  <Label >Console Games</Label>
  <Label >James Gosling Speech</Label>
  <Label >Google Interview Questios</Label>
  <Label >Binary Search</Label>
  <Label outline>Linear Search Algorithm</Label>
</LabelGroup>
</MainDiv>
  )
}

const MainDiv = styled.div`
font-size:20px;
margin-bottom:5px;
overflow:hidden;
.all{
  background-color:black;
  color:white;
}
`
