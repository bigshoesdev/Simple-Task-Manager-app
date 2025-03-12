import {
  createContext,
  useReducer,
  ReactNode,
  useContext,
  Dispatch,
} from "react";
import { Task } from "src/definitions/type";
import { saveTasksToLocalStorage } from "../utils/storage";

interface TaskState {
  tasks: Task[];
}

type TaskAction =
  | { type: "SET_TASKS"; payload: Task[] }
  | { type: "ADD_TASK"; payload: Task }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number };

const taskReducer = (state: TaskState, action: TaskAction): TaskState => {
  let tasks: Task[] = [];

  switch (action.type) {
    case "SET_TASKS":
      tasks = action.payload;
      break;
    case "ADD_TASK":
      tasks = [...state.tasks, action.payload];
      break;
    case "TOGGLE_TASK":
      tasks = state.tasks.map((task) =>
        task.id === action.payload
          ? { ...task, completed: !task.completed }
          : task
      );
      break;
    case "DELETE_TASK":
      tasks = state.tasks.filter((task) => task.id !== action.payload);
      break;
    default:
      return state;
  }

  saveTasksToLocalStorage(tasks);

  return {
    ...state,
    tasks,
  };
};

interface TaskContextType {
  state: TaskState;
  dispatch: Dispatch<TaskAction>;
}

const TaskContext = createContext<TaskContextType | undefined>(null);

export const TaskProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(taskReducer, { tasks: [] });
  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTaskContext = () => useContext(TaskContext);
