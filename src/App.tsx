import "./global.css";
import styles from "./App.module.css";
import { useState } from "react";
import { TaskType } from "./types/TaskType";
import { Task } from "./components/Task/Index";
import { InputTask } from "./components/InputTask/Index";
import { Empty } from "./components/Empty/Index";
import icon from "../src/assets/icon.svg";
function App() {
  const [tasks, setTasks] = useState<TaskType[]>([
    {
      id: 23123123,
      content: "Estudar",
      done: false,
    },
    {
      id: 2315312,
      content: "Trabalhar",
      done: true,
    },
  ]);

  function handleAddTask(taskContent: string) {
    if (taskContent === "") return;
    const id = Math.random() * 100;
    const newTask = {
      id: id,
      content: taskContent,
      done: false,
    };
    setTasks(
      [...tasks, newTask].sort((x, y) => Number(x.done) - Number(y.done))
    );
  }
  function handleTaskChange(id: number) {
    const newTasks = tasks.map((task: TaskType) => {
      if (task.id === id) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(newTasks.sort((x, y) => Number(x.done) - Number(y.done)));
  }
  function handleTaskDelete(id: number) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
  }

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src={icon} alt="Logo" />
        <h1>to</h1>
        <h1>do</h1>
      </header>

      <div className={styles.area}>
        <InputTask onCreateTask={handleAddTask} />
        <div className={styles.taskList}>
          <div className={styles.status}>
            <div>
              Tarefas criadas <span>{tasks.length}</span>
            </div>
            <div>
              Concluídas
              <span>
                {tasks.filter((task) => task.done).length} de {tasks.length}
              </span>
            </div>
          </div>
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <Task
                key={task.id}
                task={task}
                onChange={handleTaskChange}
                onDelete={handleTaskDelete}
              />
            ))
          ) : (
            <Empty />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
