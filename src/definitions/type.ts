export type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
  completed: boolean;
};

export type TaskItemProps = {
  task: Task;
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

export type AddTaskFormProps = {
  addTask: (title: string) => void;
};
