import styled from "styled-components"
import Head from "./dashboard/Head"
import HomeMain from "./dashboard/HomeMain"
import Nav from "./Nav"

const Main = () => {
    return (
        <Body>
            <Nav />
            <Head />
            <HomeMain />
        </Body>
    )
}

export default Main


const Body = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;


`