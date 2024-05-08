import { useState } from "react";
import "./App.css";
import { MdDelete } from "react-icons/md";

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    const task = {
      id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed : false,
    };
    setTodoList([...todoList, task]);
  };

  const deleteTask = (id) => {
    setTodoList(todoList.filter((task) => task.id !== id));
  };

  const completedTask = (id) => {
    setTodoList(todoList.map((task) => {
      if(task.id === id) return {...task , completed : true};
      else return task;
    }))
  }
  return (
    <div className="App">
      <div className="addTask">
        <input onChange={handleChange} />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="list">
        {todoList.map((task) => {
          return (
            <div key={task.id} style={{backgroundColor : task.completed ? "rgb(102,205,102)" : "white"}}>
              <h1>{task.taskName}</h1>
              <div className="btn">
                <button id="btn1" onClick={() => completedTask(task.id)}>Complete</button>
                <button onClick={() => deleteTask(task.id)}>
                  <MdDelete className="delete" />
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
