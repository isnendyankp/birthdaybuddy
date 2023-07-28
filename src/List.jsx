import React from 'react'

const List = ({ people }) => {
  return <section>
    {people.map((person)=>)}
  </section>;
};

export default List

// progress:
// - cr8 base render List
// - accessing people prop
// - iterate over people.map
// - add value person