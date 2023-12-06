import Container from 'react-bootstrap/Container';
import Badge from 'react-bootstrap/Badge';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

// import NavDropdown from 'react-bootstrap/NavDropdown';

function TopBar() {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="bg-body-tertiary" >

                <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
                    <img src="https://d2guulkeunn7d8.cloudfront.net/assets/beetstrap/brand/instacart-logo-color-4db9d81ca0b7638befdc4bd331f64a2633df790c0b55ef627c99b1ba77af72b7.svg" alt="instacart logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="justify-content-around">
                    <Nav >
                    </Nav>
                    <Form inline style={{ display: "flex", width: "75%", position: "relative" }}>
                        <Container >
                            <Row fluid >
                                <Col >
                                    <Card >
                                        <Form.Control
                                            size="lg"
                                            type="text"
                                            placeholder="Search products and stores"
                                            id="search-bar-input"
                                            aris-label="search"

                                        />
                                    </Card>
                                </Col>
                            </Row>
                        </Container>
                    </Form>
                    <Nav>
                        <Nav.Link href="#LogIn" >Log In</Nav.Link>
                        <Badge pill bg="success"> <Button variant="success" style={{ fontWeight: "600" }} >Sign Up</Button></Badge>
                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </div >
    )
}

export default TopBar
