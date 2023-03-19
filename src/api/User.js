import Axios from "./Axios";
import Cookies from "universal-cookie";

const login = async (userName, password) => {
  const response = await Axios.post("/user/login", {
    userName,
    password,
  });
  const cookies = new Cookies();
  cookies.set("todo-token", response.data.token);
};

export { login };
