import TaskItem from "./TaskItem";
import { motion, AnimatePresence } from "framer-motion";
import { TaskListProps } from "src/definitions/type";

const TaskList = ({
  tasks,
  toggleTask,
  deleteTask,
  completed,
}: TaskListProps) => {
  return (
    <ul className="space-y-2">
      <AnimatePresence>
        {tasks
          .filter((task) => task.completed === completed)
          .map((task) => (
            <motion.li
              key={task.id}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <TaskItem
                task={task}
                toggleTask={toggleTask}
                deleteTask={deleteTask}
              />
            </motion.li>
          ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
