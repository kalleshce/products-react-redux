import React, { Component } from "react";
import { Button, Container, Form, Image, InputGroup } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchDogByBreed } from "../../redux/actions/dogByBreedActions";

class DogImageByBreed extends Component {
    constructor() {
        super()
        this.state = {
            value: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            value: e.target.value
        })
    }

    handleClick = () => {
        this.props.fetchDogByBreed(this.state.value)
    }

    render() {
        return (
            <Container>
                <InputGroup className="m-3" >
                    <Form.Control placeholder="browse dog image by breed" onChange={this.handleChange}/>
                    <Button variant="success" id="button-addon2" className="px-5" onClick={this.handleClick}>
                        GET DOG IMAGE
                    </Button>
                </InputGroup>
                <Image src={this.props.dogBreedImage.dogBreedData.message} alt='dog-image' className="border" />
            </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogBreedImage: state.breedData
    }
}

const mapDispatchToProps = {
    fetchDogByBreed
}

export default connect(mapStateToProps, mapDispatchToProps)(DogImageByBreed)