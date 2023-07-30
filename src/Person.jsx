import React from 'react'

const Person = ({ image, name, age }) => {
  return (
    <article className="person">
      <img src={image} alt={name} className="img" />
      <div>
        <h4>{name}</h4>
        <p>{age} years</p>
      </div>
    </article>
  );
};

export default Person

// progress:
// - cr8 base Person
// - add 3 parameter for render person
// - Add base article with structure img, name & age
// - Add classname person & pass img paramter to img structure
// - Pass name parameter to name structure
// - Pass age parameter to age structure