import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getProductsData } from '../../redux/actions/productsActions'
import { ProductCard } from './ProductList';

class ProductClass extends Component {

    componentDidMount() {
        this.props.getProductsData()
    }
    render() {
        return (
            <div>
                {this.props.productsdata.map((item, i) => <ProductCard {...item} />)}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isLoading: state.products.isLoading,
        productsdata: state.products.productsData,
        error: state.products.error
    }
}

const mapDispatchToProps = {
    getProductsData
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductClass);