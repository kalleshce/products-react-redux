import React, { useEffect } from "react";
import { Card, Container, Image, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetail } from '../../redux/actions/productDetailActions'

const ProductDetail = () => {

    const dispatch = useDispatch();

    const { isLoading, productDetailData, error } = useSelector(state => state.productDetail)

    const { id } = useParams();
    
    useEffect(() => {
        dispatch(getProductDetail(id))
    }, [])

    const showProductDetail = (data) => {
        return (
            <Container>
                <Image height='200' src={data.image} />
                <p>{data.description}</p>
            </Container>
        )
    }
    return (
        <div>
            {showProductDetail(productDetailData)}
        </div>
    )
}

export default ProductDetail;