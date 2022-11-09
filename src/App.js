// import logo from "./logo.svg";
import "./App.css";
import TaskList from "./components/container/TaskList";
import LoginFormik from "./components/pure/forms/LoginFormik";
import RegisterFormik from "./components/pure/forms/RegisterFormik";
import TaskFormik from "./components/pure/forms/TaskFormik";
// import Ejemplo2 from './hooks/Ejemplo2';
// import MiComponenteConContexto from './hooks/Ejemplo3';
import Ejemplo4 from "./hooks/Ejemplo4";

function App() {
  return (
    <div className="App">
      {/* <Ejemplo4 nombre="Martín">
          <h3>Contenido del props.children</h3>
        </Ejemplo4> */}
      {/* <TaskList /> */}
      {/* <LoginFormik /> */}
      {/* <RegisterFormik /> */}
      <TaskFormik />
    </div>
  );
}

export default App;
