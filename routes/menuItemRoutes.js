

const express = require("express");
const router = express.Router();
const MenuItem = require("../models/MenuItem");
//yfdusafd
router.post("/", async (req, res) => {
  try {
    const data = req.body;
    const newMenuItem = new MenuItem(data);
    const savedMenuItem = await newMenuItem.save();
    console.log("Data saved successfully:", savedMenuItem);
    res.status(200).json(savedMenuItem);
  } catch (error) {
    console.log("Error saving menu item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

router.get("/", async (req, res) => {
  try {
    const menuItems = await MenuItem.find();
    console.log("Data retrieved successfully:", menuItems);
    res.status(200).json(menuItems);
  } catch (error) {
    console.log("Error retrieving menu items:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
