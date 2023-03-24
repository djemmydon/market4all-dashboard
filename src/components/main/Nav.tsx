import { Avatar, Badge } from "@mui/material"
import { deepOrange } from "@mui/material/colors"
import styled from "styled-components"
import MessageIcon from '@mui/icons-material/Message';


const Nav = () => {
    return (
        <Body>

            <div className="flex">
                <div className="search">
                    <input type="text" placeholder="search" />
                </div>

                <div className="side_nav">
                    <div className="avatar">
                        <Avatar
                            sx={{ bgcolor: deepOrange[500], width: 24, height: 24  }}
                            alt="Remy Sharp"
                            src="/broken-image.jpg"
                        >   B </Avatar>
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
}
`