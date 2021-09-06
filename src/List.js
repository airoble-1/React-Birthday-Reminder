import React from "react"

const List = (props) => {
  return (
    <>
      <ul>
        {props.people.map((person) => {
          return (
            <li className="person" key={Math.random().toString()}>
              <img src={person.image} alt="head shot" />
              <div>
                <h4>{person.name}</h4>
                <p>{person.age}</p>
              </div>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List
