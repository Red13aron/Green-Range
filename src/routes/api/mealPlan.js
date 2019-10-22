const router = require("express").Router();
const mealPlanController = require("../../controllers/mealPlanController");

// Matches with "/api/users"
router.route("/")
  .get(mealPlanController.findAll)
  .post(mealPlanController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(mealPlanController.findById)
  .put(mealPlanController.update)
  .delete(mealPlanController.remove);



module.exports = router;