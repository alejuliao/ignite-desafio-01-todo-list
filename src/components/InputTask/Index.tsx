import { PlusCircle } from "phosphor-react";
import { KeyboardEvent, useState } from "react";
import styles from "./Index.module.css";

type InputProps = {
  onCreateTask: (taskContent: string) => void;
};
export function InputTask({ onCreateTask }: InputProps) {
  const [inputText, setInputText] = useState("");

  function handleKeyUp(e: KeyboardEvent) {
    if (e.code == "Enter" && inputText !== "") {
      onCreateTask(inputText);
      setInputText("");
    }
  }
  function createTask() {
    if (inputText !== "") {
      onCreateTask(inputText);
      setInputText("");
    }
  }
  return (
    <>
      <div className={styles.inputarea}>
        <input
          type="text"
          className={styles.input}
          placeholder="Digite uma tarefa..."
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        <button type="button" className={styles.button} onClick={createTask}>
          Criar <PlusCircle size={20} />
        </button>
      </div>
    </>
  );
}
