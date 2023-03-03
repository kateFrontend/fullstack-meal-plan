const MealModel = require("./MealModel");

// GET

module.exports.getMeal = async (req, res) => {
  const myMeal = await MealModel.find();
  res.send(myMeal);
};

// POST

module.exports.saveMeals = async (req, res) => {
  const { title } = req.body;
  MealModel.create({ title })
  .then((data) => { console.log("Meal added")
    res.send(data)
  })
} 

// DELETE

module.exports.deleteMeal = async (req,res) => {
    const { _id } = req.body
    MealModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a meal'))
} 

// EDIT

module.exports.editMeal = async(req,res) => {
    const { _id, title } = req.body;
    MealModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Edited a meal'))

} 