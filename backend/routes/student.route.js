let express = require("express");
let router = express.Router();
// Student Model
let studentSchema = require("../models/Students");

// CREATE Student
router.route("/create-student").post(async (req, res, next) => {
  try {
    const data = await studentSchema.create(req.body);
    console.log(data);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// READ Students
router.route("/").get(async (req, res, next) => {
  try {
    const data = await studentSchema.find();
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Get Single Student
router.route("/edit-student/:id").get(async (req, res, next) => {
  try {
    const data = await studentSchema.findById(req.params.id);
    res.json(data);
  } catch (error) {
    next(error);
  }
});

// Update Student
router.route("/update-student/:id").put(async (req, res, next) => {
  try {
    const data = await studentSchema.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.json(data);
    console.log("Student updated successfully !");
  } catch (error) {
    next(error);
  }
});

// Delete Student
router.route("/delete-student/:id").delete(async (req, res, next) => {
  try {
    const data = await studentSchema.findOneAndDelete({ _id: req.params.id });
    console.log("Deleted successfully");
    res.json(data);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
