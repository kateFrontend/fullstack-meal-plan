import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

function MyMeals({text, updatingInInput, deleteMeal}) {
  return <div className="meal">
    <p>{text}</p>
    <div className="icons">
    <AiFillEdit className="icon" onClick={updatingInInput}></AiFillEdit>
    <AiFillDelete className="icon" onClick={deleteMeal}></AiFillDelete>
    </div>
  </div>;
}

export default MyMeals;
