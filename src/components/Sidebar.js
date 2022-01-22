import { Link } from "react-router-dom";
import { DASHBOARD_ROUTE, TICKETS_ROUTE } from "../utils/constants";
import styled from 'styled-components';
import logo from '../assets/logo.svg';
import { useDispatch } from "react-redux";
import { setUser } from "../store/userSlice";

const SidebarContainer = styled.div`
position: fixed;
width: 255px;
height: 100vh;
background: #363740;
`

const SidebarHeader = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 37px 0 59px 0;
color: #FFF;
`

const Logo = styled.img`
margin-right: 12px;
`

const LogoText = styled.p`
color: #A4A6B3;
opacity: 0.7;
font-weight: bold;
font-size: 19px;
line-height: 24px;
`

const LinkList = styled.ul`
display: flex;
flex-direction: column;
&> * + * {
    margin-top: 10px;
}
`

const ListItem = styled.li`
display: flex;
justify-content: center;
background: #9FA2B4;
padding: 20px 0;
user-select: none;
&:hover {
    opacity: 0.8;
}
`

const Sidebar = ({ context }) => {
    const { auth } = context;
    const dispatch = useDispatch();

    const logOut = () => {
        auth.signOut();
        dispatch(setUser(null));
        window.localStorage.removeItem("currentUser");
    }

    return (
        <SidebarContainer>
            <SidebarHeader>
                <Logo src={logo} alt="logo" />
                <LogoText>Dashboard Kit</LogoText>
            </SidebarHeader>
            <LinkList>
                <ListItem>
                    <Link to={DASHBOARD_ROUTE} style={{textDecoration: "none", color: "#FFF"}}>
                        Dashboard
                    </Link>
                </ListItem>
                <ListItem>
                    <Link to={TICKETS_ROUTE} style={{textDecoration: "none", color: "#FFF"}}>
                        Tickets
                    </Link>
                </ListItem>
            </LinkList>
            <button onClick={logOut} type="button">Выход</button>
        </SidebarContainer>
    );
};

export default Sidebar;