import styled from "styled-components"
import Nav from "./Nav"


const Main = () => {
    return (
        <Body>
            <Nav />
        </Body>
    )
}

export default Main


const Body = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;

    p{
        height: 400vh;
    }
`