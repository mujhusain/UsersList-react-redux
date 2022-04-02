import ActionTypes from "./actionTypes";

export const fetchUsersList = (payload) => {
  return {
    type: ActionTypes.FETCH_USERS_LIST,
    payload:payload,
  };
};

export const setUsersList = (payload) => {
    return {
      type: ActionTypes.SET_USERS_LIST,
      payload:payload,
    };
  };

export const updateUser = (payload) => {
  return {
    type: ActionTypes.UPDATE_USER,
    payload,
  };
};

export const selectUser = (payload) => {
    return {
      type: ActionTypes.SELECT_USER,
      payload:payload,
    };
  };

export const deleteUser = (payload) => {
  return {
    type: ActionTypes.DELETE_USER,
    payload,
  };
};
