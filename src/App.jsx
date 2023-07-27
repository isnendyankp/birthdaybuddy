import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  console.log(people);
  return <h2>Birthday Reminder - Starter</h2>;
};
export default App;

// add progress:
// - import state & data
// - hook data : useState(data)
// - add value and function name on hook
// - checking people with log

