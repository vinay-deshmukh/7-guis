import Counter from "./pages/counter";
import FlightBooker from "./pages/flightBooker";
import TemperatureConverter from "./pages/temperatureConverter";
import Timer from "./pages/timer";

const tasks = [
  {
    text: "Counter",
    path: "/tasks/counter",
    component: Counter,
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
    path: "/tasks/"
  },
  {
    text: "Circle Drawer",
    path: "/tasks/"
  },
  {
    text: "Cells",
    path: "/tasks/"
  },
];

export default tasks;
