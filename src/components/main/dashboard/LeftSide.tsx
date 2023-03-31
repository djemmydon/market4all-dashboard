import { Component } from 'react'
import styled from 'styled-components'
import Chart1 from './Chart'

export class LeftSide extends Component {
  render() {
    return (
        <Body>
            <Chart1 />
      </Body>
    )
  }
}

export default LeftSide

const Body = styled.div`
    width: 100%;
`