import './App.css';

import AddTask from './components/AddTask';
import TasksList from './components/TasksList';

const App = () => {
  return (
    <div className="tasks container">
      <h1 className="title">My Tasks</h1>
      <AddTask />
      <TasksList />
    </div>
  );
};

export default App
