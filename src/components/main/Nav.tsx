
import { useState } from "react"
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';

import { Avatar, Badge, Popover, Typography } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import styled from "styled-components"
import MessageIcon from '@mui/icons-material/Message';
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { Person } from "@mui/icons-material";


const Nav = () => {
    const [open, setOpen] = useState(false)
    return (
        <Body>

            <div className="flex">
                <div className="search">
                    <input type="text" placeholder="search" />
                </div>

                <div className="side_nav">
                    <div className="avatar">




                        <PopupState variant="popover" popupId="demo-popup-popover">
                            {(popupState) => (
                                <div>
                                    <Person
                                        sx={{ color: "black", fontSize: 30 }}
                                        {...bindTrigger(popupState)}
                                    />
                                    <Popover
                                        {...bindPopover(popupState)}
                                        anchorOrigin={{
                                            vertical: 'bottom',
                                            horizontal: 'center',
                                        }}
                                        transformOrigin={{
                                            vertical: 'top',
                                            horizontal: 'center',
                                        }}
                                    >
                                        <DropDown >
                                            <ul>
                                                <li>
                                                    <Link to="/">Login</Link>
                                                </li>
                                            </ul>
                                        </DropDown>
                                    </Popover>
                                </div>
                            )}
                        </PopupState>
                    </div>

                    <div className="notification">
                        <Badge badgeContent={3} color="primary">
                            <MessageIcon
                                sx={{ color: "black", fontSize: 30 }}
                            />
                        </Badge>

                    </div>

                    <div className="setting">

                    </div>
                </div>
            </div>
        </Body>
    )
}

export default Nav


const Body = styled.div`
    background-color: #fff;
    border-bottom: 1px solid #f3f3f3;
    height: 70px;


.flex{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 2rem;
    height: 100%;

    .search{
        input{
            border: none;
            outline: none;
            display: flex;
            align-items: center;
            border-radius: 1rem;
            padding: 1px 1rem;

            background-color: #eae7e7;
            color: #000;
            height: 40px;
            width: 500px;
        }
    }

    .side_nav{
        display: flex;
        height: 100%;
        align-items: center;
        gap: 1rem;
    }

    li{
        width: 400px;
    }
}
`

const DropDown = styled.div`
padding: 3rem;

a{
    color: #000;
    text-decoration: none;
}
`
