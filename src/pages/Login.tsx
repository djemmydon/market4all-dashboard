import { ShoppingCart, Visibility, VisibilityOff } from '@mui/icons-material'
import axios from 'axios'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { DotLoader } from 'react-spinners'
import styled from 'styled-components'
import { apiSlice } from '../redux/apiSlice'
import { userAction } from '../redux/user'

function Login() {
    const [seen, setSeen] = useState(true)
    const [loading, setLoading] = useState(false)

    const [logData, setLogData] = useState({
        email: "",
        password: "",

    })
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleChange = (e: any) => {
        setLogData({ ...logData, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true)
        await axios.post("https://commerce-backend-rho.vercel.app/api/v1/auth/login", logData, {
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                dispatch(userAction.getUser(res.data));
                console.log(res.data);
                setLoading(false)
                navigate("/")

            })
            .catch((err) => {
                console.log(err);
            });

    }
    return (
        <Body>

            <div className="form_body">
                <div className='top'>
                    <ShoppingCart />

                    <h2>MARKET4ALL</h2>
                </div>
                <form action="" onSubmit={handleSubmit}>
                    <div className="form_item">
                        <label htmlFor="Email">Email</label>
                        <input type="email" placeholder='Please Enter Your Email'
                            name='email'
                            value={logData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="form_item">
                        <label htmlFor="Password">Password</label>
                        <input type={seen ? "password" : "text"} placeholder='Please Enter Your Password'
                            name='password'
                            value={logData.password}
                            onChange={handleChange}
                        />
                        <div className="icon" onClick={() => setSeen(!seen)}>
                            {seen ? <Visibility /> : <VisibilityOff />}
                        </div>

                        <div className="button">
                            <button type='submit'>{loading ? <DotLoader color='#fff' size={30} /> : "Submit"}</button>
                        </div>


                    </div>

                </form>
            </div>
        </Body>
    )
}

export default Login


const Body = styled.div`
width: 100%;

    color: #010101;
    display: flex;
    justify-content: center;
    align-items: center;
    
    .form_body{
        width: 350px;
        height: 400px;
        border-radius:1rem;
        border: 3px solid #f3f3f3;

        .top{
            display: flex;
            text-align: center;
            align-items: center;
            justify-content: center;
            height: 80px;
            background-color: #ff3131;
            color: white;
        }

        form{
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 1rem;


            .form_item{
                display: flex;
            flex-direction: column;
            color: #010101;
            position: relative;


            input{
                border:3px solid #f3f3f3;
                outline: none;
                width:300px;
                height: 40px;
                border-radius:10px;
                background: none;
                padding: 0 1rem;
                color: #010101;

            }

            .icon{
                position: absolute;
                right:10px;
                top: 2.2rem;
            }
            }

            .button{
                width: 100%;
                margin-top: 1rem;
                button{
                    width: 100%;
                    height: 40px;
                    border-radius: 0.5rem;
                }
            }
        }

    }


`