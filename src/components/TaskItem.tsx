import { TaskItemProps } from "src/definitions/type";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import UndoIcon from "@mui/icons-material/Undo";
import DeleteIcon from "@mui/icons-material/Delete";

const TaskItem = ({ task, toggleTask, deleteTask }: TaskItemProps) => {
  return (
    <li className="flex justify-between p-2 border rounded-md bg-white flex-col">
      <div className="flex flex-row justify-end w-full">
        <div
          onClick={() => toggleTask(task.id)}
          className={`py-1 text-gray-400 bg-white ${task.completed?"hover:text-orange-500":"hover:text-blue-500"} transition cursor-pointer`}
        >
          {task.completed ? <UndoIcon /> : <TaskAltIcon />}
        </div>
        <div
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 text-gray-500 bg-white hover:text-red-500 transition cursor-pointer"
        >
          <DeleteIcon />
        </div>
      </div>
      <div
        className={task.completed ? "line-through text-left text-gray-500" : ""}
      >
        {task.title}
      </div>
    </li>
  );
};

export default TaskItem;
