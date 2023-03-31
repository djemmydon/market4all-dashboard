
import { Backdrop, CircularProgress, Skeleton } from "@mui/material"
import { useState } from "react"
import styled from "styled-components"
import { apiSlice } from "../../../redux/apiSlice"
import { DataType, FetchType, ProductType } from "../../../typing"
import Nav from "../Nav"
import ProductView from "./ProductView"


const ProductsMain = () => {
    const { data, isLoading, error } = apiSlice.useGetAllProductsQuery<FetchType>()
    const [open, setOpen] = useState(false)
    console.log(open)

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <Body>

            <Backdrop
                sx={{ color: '#fff', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                open={open}
                onClick={handleClose}
            >
                <ProductView />
            </Backdrop>
            <Nav />
            <div className="body">
                <div className="header">
                    <h1>All Products</h1>
                </div>
                {isLoading ? (  <div className="list">
                    <Skeleton sx={{ height: 190,  }} animation="wave" variant="rectangular" />
                    <Skeleton sx={{ height: 190,  }} animation="wave" variant="rectangular" />
                    <Skeleton sx={{ height: 190,  }} animation="wave" variant="rectangular" />
                    <Skeleton sx={{ height: 190,  }} animation="wave" variant="rectangular" />
                    <Skeleton sx={{ height: 190,  }} animation="wave" variant="rectangular" />
                </div>) : error ? (<>
                    <p>Their is Error</p>
                </>) : (
                    <div className="list">
                        {data?.products.map((item) => (
                            <ProductChild key={item._id} item={item} setOpen={setOpen} />
                        ))}
                    </div>
                )}
            </div>

            <p onClick={() => setOpen(!open)}>dnldkfc</p>
        </Body>
    )
}

export default ProductsMain




const ProductChild = ({ item, setOpen }: any) => {
    return (
        <ProductBody onClick={() => setOpen(!open)}>
            <div className="image" >
                <img src={item.image} alt="" />
            </div>

            <div className="text">
                <h2>{item.title}</h2>
                <p>${item.price}</p>
            </div>

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
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
        gap: 1rem;
        border-radius: 1rem;
    }

`


const ProductBody = styled.div`
width: 100%;
background: #ffff;
display: flex;
flex-direction: column;
justify-items: space-between;
gap: 1rem;
border-radius: 1rem;
border: 1px solid #f3f3f3;
padding: 0.2rem 0;
transition: .4s;
cursor: pointer;

.image{
    background-color: #e8e8e8;
    height: 150px;
    width: 100%;
    padding:1rem 0;
    margin: 0 auto; 
    border-radius: 1rem;
    display: flex;


    img{
        height: 100%;
    margin: 0 auto;


    }
}

:hover{
    background-color: #ffa4a4;
    color: #fff;
}


.text{
    margin: 0 1rem;
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
        price: "$500",
        image: "/06.png"

    },
    {
        name: "John Smith",
        email: "example@gmail.com",
        price: "$500",
        image: "/06.png"

    },
    {
        name: "Jack Sparrow",
        email: "example@gmail.com",
        price: "$500",
        image: "/06.png"

    },
    {
        name: "Molla Doe",
        email: "example@gmail.com",
        price: "$500",
        image: "/06.png"

    },
    {
        name: "Born Noise",
        email: "example@gmail.com",
        price: "$500",
        image: "/06.png"

    },
    {
        name: "John Walvi",
        email: "example@gmail.com",
        price: "$500",
        image: "/06.png"

    },
]