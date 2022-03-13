import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../../redux/cakes/cakesActions";

function NewCakeComponent(props) {
  const [number, setNumber] = useState();
  return (
    <div style={{ backgroundColor: "yellow" }}>
      <h2>Number of Cakes - {props.numOfCakes}</h2>
      <input type="text" value={number} onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={() =>props.buyCake(number)}>Buy Cakes</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeComponent);
