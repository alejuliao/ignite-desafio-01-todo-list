import { FaRegClipboard } from "react-icons/fa";
import styles from "./Index.module.css";
export function Empty() {
  return (
    <div className={styles.container}>
      <FaRegClipboard size={40} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
