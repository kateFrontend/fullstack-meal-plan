import { useEffect, useState } from "react";
import "./App.css";
import MyMeals from "./MyMeals";
import { getAllMeals, addMeal } from "./FetchMeals";

function App() {
  const [myMeal, setMeal] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    getAllMeals(setMeal);
  }, []);

  return (
    <div>
      <h1>Meal Plan</h1>
      <input
      type="text"
      placeholder="Add a meal"
      value={title}
      onChange={(e) => setTitle(e.target.value)}
      />
    
      <button onClick={() => addMeal(title,setTitle,setMeal)}>Add</button>

      {/* <MyMeals text="We got here"/> */}

      {myMeal.map((meal) => (
        <MyMeals text={meal.title} key={meal.id} />
      ))}
    </div>
  );
}

export default App;
