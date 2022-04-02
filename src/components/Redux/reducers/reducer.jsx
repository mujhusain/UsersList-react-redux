const initialState = {
  list: [],
  searchResultList: [],
  selectedUserIds: [],
  searchText: "",
};

export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    
    case "FETCH_USERS_LIST":
      return { ...state, list: payload };
      
    case "SET_USERS_LIST":
      return { ...state, list: payload };

    case "UPDATE_USER":
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        email: payload.email,
        roll: payload.roll,
      };

    case "SELECT_USER":
      return {
        ...state,
        selectedUserIds:[...state.selectedUserIds, payload],
      };

    case "DELETE_USER":
      let updatedList = state.list.filter((user) => user.id != payload);
      console.log("deleteReducers",payload)
      console.log("deleteReducersList",updatedList)

      return {
        ...state,
        list: updatedList,
      };

    default:
      return state;
  }
};

