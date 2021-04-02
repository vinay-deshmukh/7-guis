import "./App.scss";
import Tasks from "./tasks";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <div>
        {`
      Description:

      This Single Page Application (SPA) demonstrates my implementation of the
      7 GUI tasks outlined here
https://eugenkiss.github.io/7guis/tasks/

    Click on the links below to open the task implementation on the 
    right:

    1. Counter
    2. Temperature


Note: I have made some changes in the requiremnts due to reasons like challenging myself,
and at the same time, not venturing too deep for an edge case for a simple side-project.
    
    `}
      </div>
      <div>
        {`
      Counter:

      Implemented Features:
      1. This


      Refer here for the original requirements: eugenkiss#counter
    
    `}
      </div>
      {/* <section className="table-contents app-child">
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
      </section> */}
    </div>
  );
}

export default App;
