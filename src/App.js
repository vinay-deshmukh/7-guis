import styles from "./App.module.scss";
import Tasks from "./tasks";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <section className={styles.rootDescription}>
        <h1>{"Description:"}</h1>
        <div>
          <p>{`

      This Single Page Application (SPA) demonstrates my implementation of the
      7 GUI tasks outlined here
https://eugenkiss.github.io/7guis/tasks/
    `}</p>
          <p>
            {`
    Click on the links below to open the task implementation on the 
    right:
`}
          </p>

          <ol>
            {Tasks.map((task, index) => (
              <li key={index}>
                <Link to={task.path}>{task.text}</Link>
              </li>
            ))}
          </ol>
          <p>
            {`
Note: I have made some changes in the requirements due to reasons like challenging myself,
and at the same time, not venturing too deep for an edge case for a simple side-project.
    `}
          </p>
        </div>
      </section>
      <section className={styles.taskContainer}>
        <Switch>
          {Tasks.map(({ path, component: Component }, index) => (
            <Route key={index} path={path}>
              <section className={styles.taskDescription}>
                <h2>{`Counter:`}</h2>
                <h3>
                  {`
      Implemented Features:
`}
                </h3>
                <p>
                  {`

      1. This

`}
                </p>
                {`


      Refer here for the original requirements: eugenkiss#counter
    
    `}
              </section>
              <section className={styles.taskSubapp}>
                {Component ? <Component /> : "Work in progress"}
              </section>
            </Route>
          ))}
          <Route>
            <section className={styles.defaultScreen}>
              <p className={styles.textInstruction}>
                {`Click on one of the links on the left to see the task implementations!`}
              </p>
            </section>
          </Route>
        </Switch>
      </section>
    </div>
  );
}

export default App;
