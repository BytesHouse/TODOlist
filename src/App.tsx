import { ToDoDisplay } from "./components";
import { AppContext } from "./core/AppContext";
import "./styles/global.css";

export default function App() {
  return (
    <AppContext.Provider value={{}}>
      <main>
        <h2>TO DO LIST</h2>
        <ToDoDisplay />
      </main>
    </AppContext.Provider>
  );
}
