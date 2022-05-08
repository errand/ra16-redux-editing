import { useDispatch } from "react-redux";
import { deleteAction, editAction } from "../redux/tasksSlice";

export default function TodoItem({ id, title, price }) {

  const dispatch = useDispatch();

  const deleteTask= (id) => {
    dispatch(
      deleteAction({
        id: id
      })
    )
  }

  const editTask = (id) => {
    dispatch(
      editAction({
        id: id
      })
    )
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="me-auto">
        <div className="fw-bold">{title}</div>
      </div>
      <div className="me-auto">
        <div className="fw-bold">{price}</div>
      </div>
      <div className="controls">
        <button className="btn btn-primary badge" onClick={()=>{ editTask(id) }}>Edit</button>
        <button className="btn btn-danger badge" onClick={()=>{ deleteTask(id) }}>Delete</button>
      </div>
    </li>
  );
};
