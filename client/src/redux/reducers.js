import { DELETE, GET, ADD } from "./actionTypes";

const init = {
  users: [],
  loading: true,
};

export const userReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case DELETE:
      return {
        ...state,
        users: state.users.filter((el) => el._id!== payload),
        loading: false,
      };
    case ADD:
      return {
        ...state,
        users: [...state.users, payload],
        loading: false,
      };
    default:
      return state;
  }
};
