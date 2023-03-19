import Axios from "./Axios";

const getMyTodos = async () => {
  const response = await Axios.get("/ToDos");
  console.log(response);
};

export { getMyTodos };
