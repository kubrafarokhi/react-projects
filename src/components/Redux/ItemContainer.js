import React from 'react';
import {connect} from 'react-redux';

function ItemContainer(props) {
  return (
    <div>Item container: {props.item}</div>
  )
}

const mapStateToProps = (state, ownProps) =>{
    const item = ownProps.cake ? state.numberOfCakes : state.numOfIcecreams;
    return {
        item
    }
}
const mapDispatchToProps = (dispatch, ownProps) => {
    //dispatch action based on ownProps
}
export default connect()(ItemContainer)