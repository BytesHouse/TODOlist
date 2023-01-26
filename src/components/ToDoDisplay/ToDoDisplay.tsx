import { GearIcon } from "../ui-kit";
import styles from "./ToDoDisplay.module.css";

export default function ToDoDisplay() {
  return (
    <section className={styles.display}>
      <div className={styles.header}>
        <h1 className={styles.header}>To Do List</h1>
        <GearIcon />
      </div>
    </section>
  );
}
