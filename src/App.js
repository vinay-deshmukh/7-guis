import styles from "./App.module.scss";
import { tasks } from "./tasks";
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
            {tasks.map((task, index) => (
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
          {tasks.map(
            (
              { path, component: Component, taskDescription: TaskDescription },
              index
            ) => (
              <Route key={index} path={path}>
                {!Component ? (
                  <WorkInProgressSection />
                ) : (
                  <>
                    <section className={styles.taskDescription}>
                      {TaskDescription ? (
                        <TaskDescription />
                      ) : (
                        <WorkInProgressSection />
                      )}
                    </section>
                    <section className={styles.taskSubapp}>
                      <Component />
                    </section>
                  </>
                )}
              </Route>
            )
          )}
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

function WorkInProgressSection() {
  return (
    <section className={styles.wipPage}>
      <section className={styles.wipText}>{`Work in Progress`}</section>
    </section>
  );
}
