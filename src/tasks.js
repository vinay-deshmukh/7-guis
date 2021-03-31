import Counter from "./pages/counter";
import FlightBooker from "./pages/flightBooker";
import TemperatureConverter from "./pages/temperatureConverter";
import Timer from "./pages/timer";

const tasks = [
  {
    text: "Counter",
    path: "/counter",
    component: Counter,
  },
  {
    text: "Temperature Counter",
    path: "/temperature",
    component: TemperatureConverter,
  },
  {
    text: "Flight booker",
    path: "/flightBooker",
    component: FlightBooker,
  },
  {
    text: "Timer",
    path: "/timer",
    component: Timer,
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

export default tasks;
