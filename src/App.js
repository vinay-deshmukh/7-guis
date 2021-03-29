import logo from "./logo.svg";
import "./App.scss";
import Counter from "./pages/counter";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  const tasks = [
    {
      text: "Counter",
      path: "/counter",
      component: Counter,
    },
    {
      text: "Temperature Counter",
      path: "/temperature",
    },
    {
      text: "Flight booker",
    },
    {
      text: "Timer",
    },
    {
      text: "CRUD",
    },
    {
      text: "Circle Drawer",
    },
    {
      text: "Cells",
    },
  ];
  return (
    <div className="App">
      <section className="table-contents app-child">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <Link to={task.path}>{task.text}</Link>
            </li>
          ))}
        </ol>
      </section>
      <section className="task-container app-child">
        <Switch>
          {tasks.map(({ path, component: Component }, index) => (
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
