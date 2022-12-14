import React from "react";

type Content = {
  id: number;
  content: string;
  done: boolean;
};

type ActionType =
  | { type: "ADD"; payload: Content }
  | { type: "REMOVE"; payload: number };

type StateType = {
  contents: Content[];
};

const INITIAL_STATE: StateType = {
  contents: [],
};

const reducer = (
  state: StateType = INITIAL_STATE,
  action: ActionType
): StateType => {
  switch (action.type) {
    case "ADD":
      return {
        ...state,
        contents: [...state.contents, action.payload],
      };
    case "REMOVE":
      return {
        ...state,
        contents: state.contents.filter(
          (content) => content.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export const ContentComp = () => {
  const [{ contents }, dispatch] = React.useReducer(reducer, INITIAL_STATE);

  const addContent = () => {
    dispatch({
      type: "ADD",
      payload: {
        content: "lskj lkjlsk jlsk",
        done: false,
        id: contents.length + 1,
      },
    });
  };

  const removeContent = (id: number) => {
    dispatch({
      type: "REMOVE",
      payload: id,
    });
  };
};
