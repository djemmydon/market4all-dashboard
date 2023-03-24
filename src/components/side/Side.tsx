
import styled from "styled-components"
import { useState } from "react"
import { NavLink } from "react-router-dom";


const Side = () => {
    const [open, setOpen] = useState(true);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <Body>
            <div className="logo">
                <h2>MARKET4ALL</h2>
            </div>

            <div className="sidebar_item">
                <ul>
                    <li>
                        <NavLink to="/user">Users</NavLink>
                    </li>
                    <li>
                        <NavLink to="/products">Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="/order">Order</NavLink>
                    </li>
                    <li>
                        <NavLink to="/reviews">Reviews</NavLink>
                    </li>
                    <li>
                        <NavLink to="/category">Category</NavLink>
                    </li>
                </ul>
            </div>
        </Body>
    )
}

export default Side

const Body = styled.div`
                width: 250px;
                border-right: 1px solid #f3f3f3;
                color: #000;

                .logo{
                    padding: 1.1rem ;
                border-bottom: 1px solid #f3f3f3;

                }


                .sidebar_item{
                    margin: 2rem 0;
                    ul{
                        display: flex;
                        flex-direction: column;
                        gap:1rem;
                        
                        li{
                                display: flex;


                         a{
                            width: 100%;
                            text-decoration: none;
                            color: gray;
                            transition: .3s ;
                            height: 30px;
                            margin: 0 0.3rem;
                            padding: 0.5rem 0.5rem;
                            border-radius: 0.5rem;
                            background-color: #f3f3f3;
                       
                         
                         }
                         .active{
                                color: red;

                                position: relative;
                         ::before{
                            content: "";
                            position: absolute;
                            width: 2px;
                            height: 100%;
                            background-color: red;
                            left: 0;
                            top: 0;

                         }
                            }
                        }

                    }
                }
                `