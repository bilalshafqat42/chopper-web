import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { useSelector, useDispatch } from "react-redux"
import { LinkContainer } from "react-router-bootstrap"
import { useLogoutMutation } from "../store/slices/usersApiSlice"
import { logout } from "../store/slices/authSlice"
import { useNavigate } from "react-router-dom"
import logo from "../assets/white-logo.png"


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.auth)

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap()
            dispatch(logout())
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <header>
            <Navbar variant="dark" expand="lg" collapseOnSelect className="main-header">
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand href="/">
                            <img src={logo} width={251} height={40} alt="choppershoot logo" />
                        </Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo ? (
                                <>
                                    <NavDropdown title={userInfo.name} id="username">
                                        <LinkContainer to="/profile">
                                            <NavDropdown.Item>Profile</NavDropdown.Item>
                                        </LinkContainer>
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </NavDropdown></>
                            ) : (<>
                                <LinkContainer to="/login">
                                    <Nav.Link>
                                        <FaSignInAlt />&nbsp;
                                        Log In
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to="/register">
                                    <Nav.Link>
                                        <FaSignOutAlt />&nbsp;
                                        Register                                    </Nav.Link>
                                </LinkContainer>
                            </>)}

                        </Nav>
                    </Navbar.Collapse>
                </Container></Navbar></header>)
}

export default Header