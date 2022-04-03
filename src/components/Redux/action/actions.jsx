import ActionTypes from "./actionTypes";

export const fetchUsersList = (payload) => {
  return {
    type: ActionTypes.FETCH_USERS_LIST,
    payload:payload,
  };
};

export const setFilteredList = (payload) => {
    return {
      type: ActionTypes.SET_FILTERED_LIST,
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
export const deleteAllSelectedUser = () => {
  return {
    type: ActionTypes.DELETE_ALL_SELECTED_USER,
  };
};
export const changePaginationPage = (payload) => {
  return {
    type: ActionTypes.PAGINATION_CURRENT_PAGE,
    payload:payload,
  };
};
