import axios from "axios";
import { fetchUsersList } from "./Redux/action/actions";
import SearchUser from "./UiComponents/search_ui/SearchUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ItemRow from "./UiComponents/table/UserShow";
import { Table } from "./UiComponents/table/StyledTableComponents";
import Footer from "./UiComponents/footer/Footer";
import Navbar from "./UiComponents/navbar/Navbar";

const Admin_UI = () => {
  const dispatch = useDispatch();
  //accessing the state from the store
  let { currentPage, list, searchResultList } = useSelector(
    (state) => state.userReducer
  );

  //If searchResultList is not empty, then use searchResultList, else use list
  list =
    searchResultList.length > 0
      ? searchResultList
      : list.slice((currentPage - 1) * 10, currentPage * 10);

  const fetchUserList = () => {
    axios
      .get(
        "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json"
      )
      .then((response) => {
        dispatch(fetchUsersList(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    // Set new data in store after each reload only
    fetchUserList();
  }, []);

  return (
    <div>
      <Navbar />
      <SearchUser />
      <div className="user-table-list">
        <Table>
          <thead>
            <tr className="table-row">
              <th></th>
              <th>Name</th>
              <th>Eamil</th>
              <th>Role</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {list
              ? list.map((item, index) => {
                  return <ItemRow key={index} user={item} />;
                })
              : []}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};
export default Admin_UI;
