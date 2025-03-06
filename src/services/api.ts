import axios from "axios";
import { Task } from "src/definitions/type";

const BASE_API_URL = "https://jsonplaceholder.typicode.com";

export const fetchTasks = async (): Promise<Task[]> => {
  const response = await axios.get(`${BASE_API_URL}/todos?_limit=5`);
  return response.data;
};
