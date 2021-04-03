import Counter from "./pages/counter";
import FlightBooker from "./pages/flightBooker";
import TemperatureConverter from "./pages/temperatureConverter";
import Timer from "./pages/timer";

// TODO: convert the JSX to markdown files

export const tasks = [
  {
    text: "Counter",
    path: "/tasks/counter",
    component: Counter,
    taskDescription: () => (
      <>
        <h2>{`Counter:`}</h2>
        <h3>{`Implemented Features:`}</h3>
        <p>{"1. A label L that starts at `0`"}</p>
        <p>{"2. A button that increments the label L by 1."}</p>
        <p>{"3. A button that decrements the label L by 1."}</p>
        <p>{"4. A button that resets the label back to 0."}</p>
      </>
    ),
  },
  {
    text: "Temperature Counter",
    path: "/tasks/temperature",
    component: TemperatureConverter,
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
