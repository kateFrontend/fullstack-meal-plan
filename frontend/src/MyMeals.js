import React from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai"

function MyMeals({text, editMyText, deleteMyMeal}) {
  return <div>
    <p>{text}</p>
    <AiFillEdit onClick={editMyText}></AiFillEdit>
    <AiFillDelete onClick={deleteMyMeal}></AiFillDelete>
  </div>;
}

export default MyMeals;
