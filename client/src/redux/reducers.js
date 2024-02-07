  import { DELETE, GET, ADD, EDIT } from "./actionTypes";

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
      case EDIT:
        return{
          ...state,
          users:state.users.map(el=>el._id==payload._id?payload:el)
        }
    default:
      return state;
  }
};

