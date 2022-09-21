import React, { Component } from "react";
import { Card, Col, Container } from "react-bootstrap";
import { connect } from "react-redux";
import { fetchBreedImage } from "../../redux/actions/dogBreedDataActions";

class DogsByBreed extends Component {

    componentDidMount() {
        this.props.fetchBreedImage()
    }

    firstTwelveImages() {
        const data = this.props.dogsImage.breedImageData.message
        return data?.slice(0, 12).map((image, index) => {
            return  <Card key={index}>
                <Card.Img  src={image} height='200' sx={{ width: '150px' }} />
            </Card>
        })
    }

    render() {
        return (
            <div>
                <Container>
                    <Col style={{ width: '20%' }}>
                        {this.firstTwelveImages()}
                    </Col>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dogsImage: state.breedImages
    }
}

const mapDispatchToProps = {
    fetchBreedImage
}

export default connect(mapStateToProps, mapDispatchToProps)(DogsByBreed);