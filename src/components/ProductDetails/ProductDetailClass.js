import React, { Component } from "react";
import { Container, Image } from "react-bootstrap";
import { connect } from "react-redux";
import { getProductDetail } from '../../redux/actions/productDetailActions';

class ProductDetailClass extends Component {
    componentDidMount() {
        this.props.getProductDetail(this.props.match.params.id)
    }
    render() {
        const {productDetail} = this.props
        return (
            <Container>
                <Image src={productDetail.productDetailData.image} />
            </Container>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        productDetail: state.productDetail,

    }
}

const mapDispatchToProps = {
    getProductDetail
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductDetailClass)