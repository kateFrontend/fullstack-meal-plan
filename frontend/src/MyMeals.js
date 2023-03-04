import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

function MyMeals({text, updatingInInput, deleteMyMeal}) {
  return <div>
    <p>{text}</p>
    <AiFillEdit onClick={updatingInInput}></AiFillEdit>
    <AiFillDelete onClick={deleteMyMeal}></AiFillDelete>
  </div>;
}

export default MyMeals;
