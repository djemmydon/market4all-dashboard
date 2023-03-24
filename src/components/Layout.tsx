import styled from "styled-components"
import Main from "./main/Main"
import Side from "./side/Side"


const Layout = () => {
    return (
        <Body>
            <Side />
            <Main />
        </Body>
    )
}

export default Layout


const Body = styled.div`
  display: flex;
  height: 100vh;

`