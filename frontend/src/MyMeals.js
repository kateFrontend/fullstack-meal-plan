import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

function MyMeals({text, updatingInInput, deleteMeal}) {
  return <div>
    <p>{text}</p>
    <AiFillEdit onClick={updatingInInput}></AiFillEdit>
    <AiFillDelete onClick={deleteMeal}></AiFillDelete>
  </div>;
}

export default MyMeals;
