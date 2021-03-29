import logo from "./logo.svg";
import "./App.scss";

function App() {
  const tasks = [
    {
      text: "Counter",
    },
    {
      text: "Temperature Counter",
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
            <li key={index}>{task.text}</li>
          ))}
        </ol>
      </section>
      <section className="task-container app-child">
        {"This where the component will show up"}
      </section>
    </div>
  );
}

export default App;
