import { useState } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people, setPeople] = useState(data);
  return (
    <main>
      <section className="container">
        <h3>{people.length} birthdays today</h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          clear all
        </button>
      </section>
    </main>
  );
}

export default App;

// add progress:
// - import state & data
// - hook data : useState(data)
// - add value and function name on hook
// - checking people with log
// - remove log & base structure
// - update structure with add section container & pass in people.length
// - import list
// - pass people prop with equal people state value
// - cr8 base structure clear list with button
// - pass setPeople to onclick event
// - fix code change const to function for able or fix css matching