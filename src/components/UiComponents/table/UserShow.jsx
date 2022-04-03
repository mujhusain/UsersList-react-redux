import { useDispatch } from "react-redux";
import { deleteUser, selectUser } from "../../Redux/action/actions";

const ItemRow = (props) => {
const dispatch = useDispatch();
const {id, name, email, role } = props.user;

const handleEdit = () => {
    console.log('edit',id);
}
const handleDelete = (id) => {
    dispatch(deleteUser(id));
}
const handleCheckbox = (id) => {
    console.log('checkbox',id);
    dispatch(selectUser(id))
}
  return (
    <tr>
      <td>
        <input type="checkbox" onChange={handleCheckbox.bind(null,id)} />
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>
      <td>
        <button title='Edit' onClick={handleEdit} ><i className='fas fa-edit'></i></button>

        <button title="Delete" onClick={handleDelete.bind(null,id)} ><i className='fas'>&#xf1f8;</i></button>
      </td>
    </tr>
  );
};

export default ItemRow;
