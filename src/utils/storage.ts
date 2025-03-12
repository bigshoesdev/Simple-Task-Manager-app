import { Task } from "src/definitions/type";

const TASKS_STORAGE_KEY = "tasks";

export const getTasksFromLocalStorage = (): Task[] | undefined => {
  const storedTasks = localStorage.getItem(TASKS_STORAGE_KEY);
  return storedTasks ? JSON.parse(storedTasks) : undefined;
};

export const saveTasksToLocalStorage = (tasks: Task[]): void => {
  localStorage.setItem(TASKS_STORAGE_KEY, JSON.stringify(tasks));
};
