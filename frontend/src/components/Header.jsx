import { useSelector, useDispatch } from "react-redux"
import { Navbar, Nav, Container, NavDropdown, Badge } from "react-bootstrap"
import { FaSignInAlt, FaSignOutAlt } from "react-icons/fa"
import { LinkContainer } from "react-router-bootstrap"
import { useLogoutMutation } from "../store/slices/usersApiSlice"
import { logout } from "../store/slices/authSlice"
import { useNavigate } from "react-router-dom"


const Header = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { userInfo } = useSelector((state) => state.auth)

    const [logoutApiCall] = useLogoutMutation()

    const logoutHandler = async () => {
        try {
            await logoutApiCall().unwrap();
            dispatch(logout())
            navigate("/")

        } catch (err) {
            console.log(err)
        }
    }
    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to={"/"}>
                        <Navbar.Brand>Mern App</Navbar.Brand>
                    </LinkContainer>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            {userInfo ? (<>
                                <NavDropdown title={userInfo.name} id="username">
                                    <LinkContainer to={"/profile"}>
                                        <NavDropdown.Item>Profile</NavDropdown.Item>
                                        <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                                    </LinkContainer>
                                </NavDropdown>
                            </>) : (<>
                                <LinkContainer to={"/login"}>
                                    <Nav.Link>
                                        <FaSignInAlt />Sign In
                                    </Nav.Link>
                                </LinkContainer>
                                <LinkContainer to={"/register"}>
                                    <Nav.Link>
                                        <FaSignOutAlt />Sign Up
                                    </Nav.Link>
                                </LinkContainer>
                            </>)}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header