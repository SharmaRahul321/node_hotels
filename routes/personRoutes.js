const express = require("express");
const router = express.Router();
const Person = require("./../models/Person");

router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newPerson = new Person(data);
    const savedPerson = await newPerson.save();
    console.log("Data saved successfully:", savedPerson);
    res.status(200).json(savedPerson);
  } catch (error) {
    console.log("Error saving person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});
router.get("/", async (req, res) => {
  try {
    const data = await Person.find();
    console.log("data fetched");
    res.status(200).json(data);
  } catch (err) {}
});
router.get("/:workType", async (req, res) => {
  try {
    const workType = req.params.workType;
    if (workType == "chef" || workType == "manager" || workType == "waiter") {
      const response = await Person.find({ work: workType });
      console.log("response fetched;");
      res.status(200).json(response);
    } else {
      res.status(400).json({ error: "Invalid work type" });
    }
  } catch (error) {
    console.log("Error saving person:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.put("/:id", async (req, res) => {
    try {
      const personId = req.params.id;
      const updatedPersonData = req.body;
      const response = await Person.findByIdAndUpdate(personId, updatedPersonData, {
        new: true,
        runValidators: true
      });
  
      if (!response) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      res.status(200).json(response); // Send the updated person data as response
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  
  router.delete("/:id", async (req, res) => {
    try {
      const personId = req.params.id;
      const response = await Person.findByIdAndDelete(personId);
  
      if (!response) {
        return res.status(404).json({ error: 'Person not found' });
      }
  
      res.status(200).json({ message: 'Person deleted successfully' });
    } catch (error) {
      console.log(error);
      res.status(500).json({ error: "Internal server error" });
    }
  });
  

module.exports= router
;