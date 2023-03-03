import axios from "axios";

const getAllMeals = (setMeal) => {
  axios.get("http://localhost:7000").then(({ data }) => {
    console.log(data);
    setMeal(data)
  });
};

export { getAllMeals }