import React, { useEffect } from "react";
import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getProductsData } from '../../redux/actions/productsActions';


export const ProductCard = ({ image, id, title, description, price }) => {

    return (
        <Link to={`productDetails/${id}`}>
            <Card className="border p-2" style={{ width: '300px', border: '2px' }}>
                <Card.Img variant="top" height='200' src={image} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        $ {price}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )

}

const ProductList = () => {

    const dispatch = useDispatch()

    const { isLoading, productsData, error } = useSelector(state => state.products)

    useEffect(() => {
        dispatch(getProductsData())
    }, [])


    return (
        <Container>
            {productsData.map((item, i) => <ProductCard key={i} {...item} />)}
        </Container>
    )

}

export default ProductList;