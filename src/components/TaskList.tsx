// src/components/TaskList.tsx
import TaskItem from "./TaskItem";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

type TaskListProps = {
  tasks: Task[];
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
};

const TaskList = ({ tasks, toggleTask, deleteTask }: TaskListProps) => {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} toggleTask={toggleTask} deleteTask={deleteTask} />
      ))}
    </ul>
  );
};

export default TaskList;
