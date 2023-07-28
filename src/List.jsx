import React from 'react'
import Person from './Person';

const List = ({ people }) => {
  return <section>
    {people.map((person)=>{
      return <Person key={person.id} />;
    })}
  </section>;
};

export default List

// progress:
// - cr8 base render List
// - accessing people prop
// - iterate over people.map
// - add value person
// - add return & import Person
// - Setup key with pass value person.id