import "./App.css";
import MyMeals from "./MyMeals";

function App() {
  return (
    <div>
      <h1>Meal Plan</h1>
      <input type="text" placeholder="Add a meal"></input>
      <button>Add</button>
      <MyMeals text="We got here"/>
    </div>
  );
}

export default App;
