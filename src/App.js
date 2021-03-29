import logo from "./logo.svg";
import "./App.scss";
import Tasks from "./tasks";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section className="table-contents app-child">
        <ol>
          {Tasks.map((task, index) => (
            <li key={index}>
              <Link to={task.path}>{task.text}</Link>
            </li>
          ))}
        </ol>
      </section>
      <section className="task-container app-child">
        <Switch>
          {Tasks.map(({ path, component: Component }, index) => (
            <Route key={index} path={path}>
              {Component ? <Component /> : "Work in progress"}
            </Route>
          ))}
        </Switch>
      </section>
    </div>
  );
}

export default App;
