var mongoose = require("mongoose");

// Save a reference to the Schema constructor
var Schema = mongoose.Schema;

// Using the Schema constructor, create a new UserSchema object
// This is similar to a Sequelize model
var MealPlanSchema = new Schema({
  // `name` must be unique and of type String
  title: {
    type: String
  },
  description: {
    type: String
  },
  ingredients: {
    type: Array
  },
  method: {
    type: String
  },
  imgUrl:{
    type: String
  },
  imgAlt: {
    type: String
  },
  date: {
    type: Date
  },
  dietOptionIds:{
    type: Schema.Types.ObjectId
  }
});

// This creates our model from the above schema, using mongoose's model method
var MealPlan = mongoose.model("MealPlan", MealPlanSchema);

// Export the MealPlan model
module.exports = MealPlan;