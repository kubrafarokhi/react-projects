https://codesandbox.io/s/relaxed-sara-qv5eu9

import React, { Component } from "react";

const createStore = (rootReducer, initialState) => {
  let state;
  let listeners = [];

  const getState = () => state;

  const dispatch = (action) => {
    state = rootReducer(state, action);
    listeners.forEach((listener) => listener(state));
  };

  const subscribe = (listener) => {
    listeners.push(listener);
  };
  state = initialState;
  dispatch({});
  return { getState, dispatch, subscribe };
};

const ReduxContext = React.createContext("redux");

const Provider = ({ store, children }) => (
  <ReduxContext.Provider value={store}>{children}</ReduxContext.Provider>
);

const connect = (mapStateToProps, mapDispatchToProps) => (WrapperComponent) => {
  class Connect extends Component {
    constructor(props) {
      super(props);
      this.state = props.store.getState();
    }
    componentDidMount() {
      this.props.store.subscribe((state) => {
        this.setState(state);
        console.log(11, state);
      });
    }

    render() {
      const { store } = this.props;
      return (
        <WrapperComponent
          {...this.props}
          {...mapStateToProps(store.getState())}
          {...mapDispatchToProps(store.dispatch)}
        />
      );
    }
  }

  return (props) => {
    return (
      <ReduxContext.Consumer>
        {(store) => <Connect store={store} {...props} />}
      </ReduxContext.Consumer>
    );
  };
};

export { createStore, connect, Provider };
