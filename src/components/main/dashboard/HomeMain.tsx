import React from 'react'
import styled from 'styled-components'
import LeftSide from './LeftSide'
import RightSide from './RightSide'

function HomeMain() {
  return (
    <Body>
      <LeftSide />
      <RightSide />

    </Body>
  )
}

export default HomeMain

const Body = styled.div`
  display: flex;
  gap: 3rem;
  margin: 1rem;


`