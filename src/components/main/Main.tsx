import styled from "styled-components"
import Head from "./dashboard/Head"
import Nav from "./Nav"

const Main = () => {
    return (
        <Body>
            <Nav />
            <Head />
        </Body>
    )
}

export default Main


const Body = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;


`