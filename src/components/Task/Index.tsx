import { CheckCircle, Trash } from "phosphor-react";
import { useState } from "react";
import { TaskType } from "../../types/TaskType";
import { FaCheckCircle, FaRegCircle } from "react-icons/fa";
import styles from "./Index.module.css";

type TaskProps = {
  task: TaskType;
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
};
export function Task({ task, onChange, onDelete }: TaskProps) {
  const [isDone, setIsDone] = useState(task.done);

  return (
    <div className={task.done ? styles.containerline : styles.container}>
      <button onClick={() => onChange(task.id)}>
        {task.done ? (
          <FaCheckCircle size={20} className={styles.buttonChecked} />
        ) : (
          <FaRegCircle size={20} className={styles.buttonCheck} />
        )}
      </button>
      <p>{task.content}</p>
      <button
        type="button"
        className={styles.trash}
        onClick={(e) => onDelete(task.id)}
      >
        <Trash size={20} />
      </button>
    </div>
  );
}
