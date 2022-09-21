import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchBreedData } from "../../redux/actions/breedListActions";

class DogBreedList extends Component {

    componentDidMount() {
        this.props.fetchBreedData()
    }

    showList(breedsObj) {

        console.log(breedsObj)

        const list = []

        for (let key in breedsObj) {
            if (breedsObj[key].length > 0)
                list.push(breedsObj[key])
        }
        return list
    }


    render() {
        return (
            <div>
                {this.props.breedsData?.breedListData?.status}
                {this.showList(this.props.breedsData?.breedListData?.message).map((item, i) => {
                    return <ul key={i}><li className="border" style={{ fontSize: '24px' }}>{item.join(", ")}</li></ul>
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        breedsData: state.breedList
    }
}

const dispatchStateToProps = {
    fetchBreedData
}

export default connect(mapStateToProps, dispatchStateToProps)(DogBreedList);