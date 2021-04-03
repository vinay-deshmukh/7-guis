import Counter from "./pages/counter";
import FlightBooker from "./pages/flightBooker";
import TemperatureConverter from "./pages/temperatureConverter";
import Timer from "./pages/timer";

// TODO: convert the JSX to markdown files
// TODO: find better way to structure docs

export const tasks = [
  {
    text: "Counter",
    path: "/tasks/counter",
    component: Counter,
    taskDescription: () => (
      <>
        <h2>{`Counter`}</h2>
        <h3>{`Implemented Features:`}</h3>
        <p>{"A label L that starts at `0`"}</p>
        <p>{"A button that increments the label L by 1."}</p>
        <p>{"A button that decrements the label L by 1."}</p>
        <p>{"A button that resets the label back to 0."}</p>
      </>
    ),
  },
  {
    text: "Temperature Counter",
    path: "/tasks/temperature",
    component: TemperatureConverter,
    taskDescription: () => (
      <>
        <h2>{`Temperature Counter`}</h2>
        <h3>{`Implemented Features`}</h3>
        <p>{`Two text fields, one which contains Celsius and one which contains Fahrenheit`}</p>
        <p>{`When user types a number in one field, the other field updates automatically.`}</p>
        <p>{`If user enters a value that is not a number, then the other field is not updated`}</p>
      </>
    ),
  },
  {
    text: "Flight booker",
    path: "/tasks/flightBooker",
    component: FlightBooker,
  },
  {
    text: "Timer",
    path: "/tasks/timer",
    component: Timer,
  },
  {
    text: "CRUD",
    path: "/tasks/",
  },
  {
    text: "Circle Drawer",
    path: "/tasks/",
  },
  {
    text: "Cells",
    path: "/tasks/",
  },
];
