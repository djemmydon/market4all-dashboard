
import styled from "styled-components"
import Nav from "./Nav"




const UserMain = () => {
    return (
        <Body>

            <Nav />




            <div className="body">
                <div className="header">
                    <h1>All User</h1>
                </div>

                <div className="list">
                    {data.map((item) => (
                        <ProductChild key={item.name} item={item} />
                    ))}
                </div>
            </div>
        </Body>
    )
}

export default UserMain




const ProductChild = ({ item }: any) => {
    return (
        <ProductBody>
            <h2>{item.name}</h2>
            <p>{item.email}</p>
            <p>{item.phone}</p>
        </ProductBody>
    )
}


const Body = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    color: gray;

    .body{
        margin: 2rem;
        @media screen and (max-width: 700px) {
        margin: 1rem 0;
            
        }
    }

    .list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
        gap: 1rem;
        justify-content: center;
        align-items: center;
    }

`


const ProductBody = styled.div`
width: 100%;
background: #ffff;
display: flex;
flex-direction: column;
justify-items: center;
align-items: center;
border-radius: 1rem;
border: 1px solid #f3f3f3;
padding: 2rem 0;
transition: .4s;
cursor: pointer;

:hover{
    background-color: #ffa4a4;
    color: #fff;
}


h2{
    font-size: 1rem;

}
p{
    font-size: .7rem;

}
`

const data = [
    {
        name: "John Doe",
        email: "example@gmail.com",
        phone: "090553029i31"
    },
    {
        name: "John Smith",
        email: "example@gmail.com",
        phone: "090553029i31"
    },
    {
        name: "Jack Sparrow",
        email: "example@gmail.com",
        phone: "090553029i31"
    },
    {
        name: "Molla Doe",
        email: "example@gmail.com",
        phone: "090553029i31"
    },
    {
        name: "Born Noise",
        email: "example@gmail.com",
        phone: "090553029i31"
    },
    {
        name: "John Walvi",
        email: "example@gmail.com",
        phone: "090553029i31"
    },
]