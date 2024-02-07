 // actions.js
import axios from "axios";
import { DELETE, GET, ADD, EDIT } from "./actionTypes"; // Import EDIT action type

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/get");
    dispatch({
      type: GET,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const handleDelete = (_id) => async (dispatch) => {
  try {
    const res = await axios.delete(`user/delete/${_id}`);
    dispatch({
      type: DELETE,
      payload: res.data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

export const handleAdd = (newUser) => async (dispatch) => {
  try {
    const { data } = await axios.post("/add", newUser);
    dispatch({
      type: ADD,
      payload: data,
    });
  } catch (error) {
    console.log(error.response.data);
  }
};

