const db = require("../config/connection");
const { User } = require("../models"); // Import Task model
const { Task } = require("../models");
const userSeeds = require("./userSeeds.json");
const taskSeeds = require("./taskSeeds.json"); // Import task seeds

db.once("open", async () => {
  try {
    // Delete existing users and tasks
    await User.deleteMany({});
    await Task.deleteMany({});

    // Seed users
    const users = await User.create(userSeeds);

    // Seed tasks
    await Task.create(taskSeeds);

    console.log("Database seeded successfully.");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
});
