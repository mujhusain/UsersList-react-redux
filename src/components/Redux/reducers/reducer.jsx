//Initial state of the reducer
const initialState = {
  list: [],
  currentPage:1,
  searchResultList: [],
  selectedUserIds: [],
  searchText: "",
};

//Action types
export const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    //FOR FETCHING USERS LIST
    case "FETCH_USERS_LIST":
      return { ...state, list: payload };

    //FOR SEARCHING USERS LIST
    case "SET_FILTERED_LIST":
      return { ...state, searchResultList: payload };

    //FOR UPDATING USER
    case "UPDATE_USER":
      return {
        ...state,
        id: payload.id,
        name: payload.name,
        email: payload.email,
        roll: payload.roll,
      };

    //FOR SELECTING USER
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

      //For deleting user
    case "DELETE_USER":
      let updatedList = state.list.filter((user) => user.id != payload);

      let filteredList = state.searchResultList.filter((user) => user.id != payload);

      return {
        ...state,
        list: updatedList,
        searchResultList:filteredList,
      };
    
      //For deleting all selected user
    case "DELETE_ALL_SELECTED_USER":
       let newUpdatedList = state.list.filter((user) => !state.selectedUserIds.includes(user.id));

       let newFilterdUpdatedList = state.searchResultList.filter((user) => !state.selectedUserIds.includes(user.id));

      return {
        ...state,
        list: newUpdatedList,
        searchResultList:newFilterdUpdatedList,
        selectedUserIds:[]
      };
    
      //For changing pagination page
    case "PAGINATION_CURRENT_PAGE":
      return {
        ...state,
        currentPage:state.currentPage+payload, 
      };

    default:
      return state;
  }
};

