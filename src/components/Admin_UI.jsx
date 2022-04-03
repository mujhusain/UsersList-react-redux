import axios from "axios";
import { fetchUsersList } from "./Redux/action/actions";
import SearchUser from "./UiComponents/search_ui/SearchUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ItemRow from "./UiComponents/UserShow";
import { Table } from "./UiComponents/StyledTableComponents";
import Footer from "./UiComponents/footer/Footer";
import Navbar from "./UiComponents/navbar/Navbar";
const Admin_UI = () => {
  const dispatch = useDispatch();

const userList = useSelector((state) =>state.userReducer.list);
console.log("userList",userList);

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
            {userList? userList.map((item, index) => {
              return <ItemRow key={index} user={item} />;
            }): []}
          </tbody>
        </Table>
      </div>
      <Footer />
    </div>
  );
};
export default Admin_UI;
