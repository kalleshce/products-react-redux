import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchUserData } from "../../redux/actions/randomUserActions";
import { Col, Container, Row, Image, Button, Badge, Nav, Stack, Spinner } from "react-bootstrap";

class UserProfile extends Component {
    
    fetchData = () => {
        this.props.fetchUserData()
    }

    componentDidMount() {
        this.props.fetchUserData()
    }

    componentDidUpdate(prevProps) {
        if (prevProps.client !== this.props.client) {
            this.fetchData()
        }

    }
    data =this.props.userProfile.userData.results
    render() {
        
        console.log(this.data)
        return (
            <div>
                <Container>
                <Row>
                    <Col xs={3}>
                        <Image style={{ marginTop: '100px', width: '250px', borderRadius: '3px' }}
                            src={this.data.picture.large} />
                    </Col>
                    <Col>
                        <Row >
                            <Col>
                                <div className="d-flex justify-content-start">
                                    <h3 className="mb-3 mt-4">{this.data.name.first + '  ' + this.data.name.last}</h3>
                                </div>
                            </Col>
                            <Col>
                                <Badge className="mb-4 mt-4" bg="light">BookMark</Badge>
                            </Col>
                        </Row>
                        <h6 className="mb-2">Product Designer</h6>
                        <h6 className="mt-2">Ratings</h6>
                        <Stack direction="horizontal" >
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </Stack>
                        <Button variant="light" className='mt-2'>Send Message</Button>
                        <Button variant="light" style={{
                            backgroundColor: '#d6f3fa', margin: '8px 10px 0 6px',
                            paddingInline: '40px', border: 'none', borderRadius: '0', fontSize: '16px'
                        }}>Contacts</Button>
                        <Badge bg="light" text="muted" style={{ alignSelf: 'center' }}>
                            Report User
                        </Badge>
                        <Row className="mt-4">
                            <Nav variant="tabs" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link href="/home">Timeline</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="link-1">About</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Row>
                        <h6 className="mt-3 mb-3" style={{ fontSize: '12px', color: 'GrayText' }}>CONTACT INFORMATION</h6>
                        <Row className="mt-2 mb-2">
                            <Col xs={2}>
                                <h6 className="mr-2">Phone:</h6>
                            </Col>
                            <Col>
                                <h6>{this.data.phone}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <h6 className="mr-1">Address:</h6>
                            </Col>
                            <Col>
                                <span>
                                    {this.data.location.street.number} ,
                                    {this.data.location.street.name}
                                </span>
                                <Row>
                                    <span>
                                        {this.data.location.city} {'  '}
                                        {this.data.location.state} {'  '}
                                        {this.data.location.country}{'  '}
                                        {this.data.location.postcode}
                                    </span>
                                </Row>

                            </Col>
                        </Row>
                        <Row className="mt-2 mb-2">
                            <Col xs={2}>
                                <h6 className="mr-2">E-mail:</h6>
                            </Col>
                            <Col>
                                <h6 >{this.data.email}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <h6 className="mr-2">Site:</h6>
                            </Col>
                            <Col>
                                <h6 >www.jerymyrose.com</h6>
                            </Col>
                        </Row>
                        <h6 className="mt-3 mb-3" style={{ fontSize: '12px', color: 'GrayText' }}>BASIC INFORMATION</h6>
                        <Row className="mt-2 mb-1">
                            <Col xs={2}>
                                <h6 className="mr-2">Birthday:</h6>
                            </Col>
                            <Col>
                                <h6 >{this.data.dob.date.slice(0, 10)}</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={2}>
                                <h6 className="mr-2">Gender:</h6>
                            </Col>
                            <Col>
                                <h6 >{this.data.gender}</h6>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
                {this.props.userProfile.userthis.data?.info?.seed }
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userProfile: state.randomUser
    }
}

const mapDispatchToProps = {
    fetchUserData
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)