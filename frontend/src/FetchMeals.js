import axios from "axios";

const getAllMeals = (setMeal) => {
  axios.get("http://localhost:7000").then(({ data }) => {
    setMeal(data)
  });
};

const addMeal = (title, setTitle, setMeal) => {
  axios.post(`http://localhost:7000/saveMeals`, { title }).then(() => {
    setTitle("")
    getAllMeals(setMeal)
  });
};

const editMeal = (mealId, title, setTitle,setMeal, setEditing) => {
  axios.put(`http://localhost:7000/editMeal`, { _id: mealId, title }).then(() => {
    setTitle("")
    setEditing(false)
    getAllMeals(setMeal)
  });
}

const deleteMeal = (mealId, setMeal) => {
  axios.delete(`http://localhost:7000/deleteMeal`, {data : { _id: mealId }}).then(() => {
    getAllMeals(setMeal)
  });
}

export { getAllMeals, addMeal, editMeal, deleteMeal };
