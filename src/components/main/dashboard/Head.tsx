

import styled from "styled-components"
import { PersonAdd, AllInbox } from '@mui/icons-material';


import Nav from "../Nav"
const Head = () => {
    return (
        <Body>
            <div className="body">
                <div className="header">
                    <h1>All User</h1>
                </div>

                <div className="list">

                    <ProductChild total="1,500" name="Total User" Icon={PersonAdd} />
                    <ProductChild total="1,500" name="Total User" Icon={PersonAdd} />
                    <ProductChild total="3,560" name="All Order" Icon={PersonAdd} />
                    <ProductChild total="1,500" name="Total User" Icon={PersonAdd} />


                </div>
            </div>
        </Body>
    )
}

export default Head

const ProductChild = ({ total, name }: any) => {
    return (
        <ProductBody>
            <div className="text">
                <h2>{total}</h2>
                <p>{name}</p>
            </div>

            <div className="icon">
                {name === "Total User" ? (<PersonAdd />) : name === "All Order" ? <AllInbox /> : ""}
            </div>
        </ProductBody>
    )
}


const Body = styled.div`


    .body{
        margin: 2rem;
        @media screen and (max-width: 700px) {
        margin: 1rem 0;
            
        }
    }

    .list{
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 1rem;
        justify-content: center;
        align-items: center;
        color: grey;
    }

`


const ProductBody = styled.div`
width: 100%;
background: #ffff;
display: flex;
justify-content: space-between;
align-items: center;
border-radius: 1rem;
border: 1px solid #f3f3f3;
padding: 1rem 0;
transition: .4s;
cursor: pointer;

:hover{
    background-color: #ffa4a4;
    color: #fff;
}



.text{
    padding: 0 0.5rem;
}

.icon{
    margin-right:1rem;
    width: 50px;
    height: 50px;
    border-radius: 1rem;
    background-color: #ffa4a4;
    color: white;
    font-size: 2rem;
    text-align: center;
    
}

h2{
    font-size: 2rem;

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
]