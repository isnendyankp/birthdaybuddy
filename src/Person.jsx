import React from 'react'

const Person = ({ image, name, age }) => {
  return (
    <article>
      <img />
      <div>
        <h4>name</h4>
        <p>age</p>
      </div>
    </article>
  );
};

export default Person

// progress:
// - cr8 base Person
// - add 3 parameter for render person
// - Add base article with structure img, name & age