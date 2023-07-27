import { useState } from "react";
import data from "./data";

const App = () => {
  const [people, setPeople] = useState(data);
  return <main>
    <section className="container">
      <h3>{people.length} birthday today</h3>
    </section>
  </main>
};
export default App;

// add progress:
// - import state & data
// - hook data : useState(data)
// - add value and function name on hook
// - checking people with log
// - remove log & base structure
// - update structure with add section container & pass in people.length

