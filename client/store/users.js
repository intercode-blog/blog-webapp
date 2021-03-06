import axios from 'axios';
import history from '../history';

const TOKEN = 'token';

const SET_USERS = 'SET_USERS';

export const setUsers = (users) => {
    return {
      type: SET_USERS,
      users
    }
  };

  export const fetchUsers = () => {
    return async (dispatch) => {
      console.log("**** are we making it into the store? *****")
      try {
        const token = window.localStorage.getItem(TOKEN);
        const { data } = await axios.get('/api/users', {
          headers: {
            "Authorization": token
          }
        });
        console.log("DATA FROM USERS.JS", data)
        dispatch(setUsers(data));
      } catch (error) {
        console.log(error);
      }
    }
  };

  const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return action.users;
    default:
      return state;
  }
};