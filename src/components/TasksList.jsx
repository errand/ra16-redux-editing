import Task from './Task';
import { useSelector } from "react-redux";

export default function TasksList() {
  const tasks = useSelector((state)=>{
    return state.tasks;
  });

  return (
    <ul className="list-group">
      {tasks.map((task) => (
        <Task key={task.id} title={task.name} completed={task.status} />
      ))}
    </ul>
  );
}
