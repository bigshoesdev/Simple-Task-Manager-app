// src/components/TaskItem.tsx
type Task = {
    id: number;
    title: string;
    completed: boolean;
  };
  
  type TaskItemProps = {
    task: Task;
    toggleTask: (id: number) => void;
    deleteTask: (id: number) => void;
  };
  
  const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => {
    return (
      <li className="flex justify-between items-center p-2 border rounded-md bg-white">
        <span className={task.completed ? "line-through text-gray-500" : ""}>{task.title}</span>
        <div>
          <button
            onClick={() => toggleTask(task.id)}
            className="px-2 py-1 mr-2 bg-green-500 text-white rounded"
          >
            {task.completed ? "Undo" : "Complete"}
          </button>
          <button
            onClick={() => deleteTask(task.id)}
            className="px-2 py-1 bg-red-500 text-white rounded"
          >
            Delete
          </button>
        </div>
      </li>
    );
  };
  
  export default TaskItem;
  