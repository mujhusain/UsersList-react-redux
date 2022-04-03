import { useDispatch } from "react-redux";
import { deleteUser, selectUser } from "../../Redux/action/actions";
import './tableStyle.css'
import Editable from "./edit";

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
      <td className={id}>{name} </td>
      <td className={id}>{email}</td>
      <td className={id}>{role}</td>
      
      {/* <td className={`${id}`+"edit"}   ><Editable text={name} /></td> 
      <td className={id +"edit"} ><Editable text={email} /></td>
      <td className={id+"edit"} ><Editable text={role} /></td> */}
      <td>
        <button title='Edit' onClick={handleEdit} ><i className='fa fa-edit'></i></button>

        <button title="Delete" onClick={handleDelete.bind(null,id)} ><i className='fa fa-trash'></i></button>
      </td>
    </tr>
  );
};

export default ItemRow;