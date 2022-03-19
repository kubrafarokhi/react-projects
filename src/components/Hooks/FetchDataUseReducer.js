import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  loading: false,
  posts: {},
  error: "",
};
const reducer = (state, action) => {
  switch (action.type) {
    case "Loading":
      return { ...state, loading: true };
    case "Success":
      return { ...state, posts: action.payload };
    case "Error":
      return { ...state, error: action.error };
    default:
      return state;
  }
};
function FetchDataUseReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(()=>{
    axios
    .get(`https://jsonplaceholder.typicode.com/posts/1`)
    .then((res) => {
        dispatch({type:'Loading'});
        dispatch({type:'Success', payload: res?.data})
    })
    .catch((error) => {
        dispatch({type:'Error', error})
    });
  })

  return <div>
      {state.loading ? 'Loading': state.posts.title}
      {state.error ? 'Error': 'null'}
  </div>;
}

export default FetchDataUseReducer;
