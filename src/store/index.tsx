import React from "react";

type State = {
  mode: string;
};

type Action = { type: "MODE_CHANGE" };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "MODE_CHANGE":
      localStorage.setItem("mode", state.mode == "light" ? "dark" : "light");
      return { ...state, mode: state.mode == "light" ? "dark" : "light" };
  }
}

const initialState: State = {
  mode: localStorage.getItem("mode") ? localStorage.getItem("mode")! : "light",
};

const defaultDispatch: React.Dispatch<Action> = () => initialState;

const Store = React.createContext({
  state: initialState,
  dispatch: defaultDispatch,
});

function StoreProvider(props: React.PropsWithChildren<object>) {
  const [state, dispatch] = React.useReducer<React.Reducer<State, Action>>(
    reducer,
    initialState
  );
  return <Store.Provider value={{ state, dispatch }} {...props} />;
}

export { StoreProvider, Store };
