import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchRandomImage } from '../../redux/actions/randomImageActions';

class RandomImageClass extends Component {

    componentDidMount() {
        this.props.fetchRandomImage()
    }
    
    render() {
        return (
            <div>
                <img src={this.props.image.dogImageData.message} />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        image: state.dogImage
    }
}

const mapDispatchToProps = {
    fetchRandomImage
}

export default connect(mapStateToProps, mapDispatchToProps)(RandomImageClass);

