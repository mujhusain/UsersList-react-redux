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
        // if already id is available then remove it from selectedUserIds array
        if(state.selectedUserIds.includes(payload)){
        let findIndex = state.selectedUserIds.indexOf(payload);
        state.selectedUserIds.splice(findIndex, 1);
        }
      return {
        ...state,
        selectedUserIds:[...state.selectedUserIds, payload],
      };

    case "DELETE_USER":
      let updatedList = state.list.filter((user) => user.id != payload);

      return {
        ...state,
        list: updatedList,
      };
    case "DELETE_ALL_SELECTED_USER":
       let newUpdatedList = state.list.filter((user) => !state.selectedUserIds.includes(user.id));

      return {
        ...state,
        list: newUpdatedList,
        selectedUserIds:[]
      };

    default:
      return state;
  }
};

