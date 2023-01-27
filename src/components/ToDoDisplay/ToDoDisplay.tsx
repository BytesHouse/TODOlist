import {CheckBox, TodayTasks} from "../../components";
import { GearIcon } from "../ui-kit";
import styles from "./ToDoDisplay.module.css";

export default function ToDoDisplay() {
  return (
    <section className={styles.display}>
      <div className={styles.header}>
        <h1 className={styles.header}>To Do</h1>
        <GearIcon />
      </div>
        <CheckBox/>
        <TodayTasks/>
    </section>
  );
}
