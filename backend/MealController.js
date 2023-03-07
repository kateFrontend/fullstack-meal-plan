const MealModel = require("./MealModel");
const mongoose = require("mongoose");

// GET

module.exports.getMeal = async (_, res) => {
  const myMeal = await MealModel.find();
  res.send(myMeal);
};

// POST

module.exports.saveMeals = async (req, res) => {
  const { title } = req.body;
  MealModel.create({ title })
  .then((data) => res.send(data))
} 

// DELETE

module.exports.deleteMeal = async (req,res) => {
    const { _id } = req.body
    if (!mongoose.isValidObjectId(_id)) {
      return res.status(400).json({ message: 'Invalid Meal ID' });
    }
  
    MealModel.findByIdAndDelete(_id)
    .then(() => res.send('Deleted a meal'))
} 

// EDIT

module.exports.editMeal = async(req,res) => {
    const { _id, title } = req.body;
    if (!mongoose.isValidObjectId(_id)) {
			return res.status(400).json({ message: 'Invalid Meal ID' });
    }
  
    MealModel.findByIdAndUpdate(_id, {title})
    .then(() => res.send('Edited a meal'))

} 