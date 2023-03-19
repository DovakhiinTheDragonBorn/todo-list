import "./App.css";
import { LoginForm } from "./components";
import { login } from "./api/User.js";
import { getMyTodos } from "./api/toDo.js";

const App = () => {
  getMyTodos();
  return (
    <div className="App">
      <LoginForm onLogin={login} />
    </div>
  );
};

export default App;
