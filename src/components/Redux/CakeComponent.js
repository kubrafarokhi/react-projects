import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/cakes/cakesActions";

function CakeComponent(props) {
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <button onClick={props.buyCake}>Buy Cakes</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numberofCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent);
