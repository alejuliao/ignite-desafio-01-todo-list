import { TaskType } from "../../types/TaskType";
import { FaCheck, FaRegCircle, FaTrashAlt } from "react-icons/fa";
import styles from "./Index.module.css";

type TaskProps = {
  task: TaskType;
  onChange: (id: number) => void;
  onDelete: (id: number) => void;
};
export function Task({ task, onChange, onDelete }: TaskProps) {
  return (
    <div className={task.done ? styles.containerline : styles.container}>
      <button onClick={() => onChange(task.id)}>
        {task.done ? (
          <FaCheck size={20} className={styles.buttonChecked} />
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
        <FaTrashAlt size={20} />
      </button>
    </div>
  );
}
