import { useDispatch } from "react-redux";
import { deleteAction } from "../redux/tasksSlice";

export default function TodoItem({ id, title }) {

  const dispatch = useDispatch();

  const deleteTask=()=>{
    dispatch(
      deleteAction({
        id: id
      })
    )
  }

  return (
    <li className="list-group-item d-flex justify-content-between align-items-start">
      <div className="ms-2 me-auto">
        <div className="fw-bold">{title}</div>
      </div>
      <div className="controls badge">
        <button className="btn btn-danger" onClick={()=>{ deleteTask() }}>Delete</button>
      </div>
    </li>
  );
};
