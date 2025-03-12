import { useEffect } from "react";
import TaskList from "./components/TaskList";
import AddTaskForm from "./components/AddTaskForm";
import { TaskProvider, useTaskContext } from "./contexts/TaskContext";
import { fetchTasks } from "./services/api";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { getTasksFromLocalStorage } from "./utils/storage";

const AppContent = () => {
  const { state, dispatch } = useTaskContext();

  useEffect(() => {
    const getTasks = async () => {
      let tasks = getTasksFromLocalStorage();

      if (!tasks) {
        tasks = await fetchTasks();
      }

      dispatch({ type: "SET_TASKS", payload: [...tasks] });
    };

    getTasks();
  }, [dispatch]);

  const addTask = (title: string) => {
    dispatch({
      type: "ADD_TASK",
      payload: { id: Date.now(), title, completed: false },
    });
  };

  const toggleTask = (id: number) => {
    dispatch({ type: "TOGGLE_TASK", payload: id });
  };

  const deleteTask = (id: number) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div className="w-full">
      <div className="container border-[ffffff] border-8 rounded-xl bg-white shadow-md mx-auto p-10">
        <h1 className="text-2xl font-bold mb-4 text-left">Task Manager</h1>
        <AddTaskForm addTask={addTask} />
        <div className="flex space-x-6">
          <div className="flex-1 p-4 bg-blue-100 rounded-md border-blue-400 border">
            <div className="mb-4 text-blue-500 font-bold text-xl">
              <CheckBoxOutlineBlankIcon /> To do
            </div>
            <TaskList
              tasks={state.tasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              completed={false}
            />
          </div>
          <div className="flex-1 p-4 bg-orange-100 rounded-md border-orange-400 border">
            <div className="mb-4 text-orange-500 font-bold text-xl">
              <CheckBoxIcon /> Done
            </div>
            <TaskList
              tasks={state.tasks}
              toggleTask={toggleTask}
              deleteTask={deleteTask}
              completed={true}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <TaskProvider>
      <AppContent />
    </TaskProvider>
  );
};

export default App;
