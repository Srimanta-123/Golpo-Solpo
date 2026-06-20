import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "../models/user.model.js";

dotenv.config();

const run = async () => {
  await mongoose.connect(process.env.MONGODB_URI);

  const users = await User.find({});

  for (const user of users) {
    user.avatar = `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.username}`;
    await user.save();
    console.log(`Updated avatar for ${user.username}`);
  }

  console.log("Done.");
  process.exit(0);
};

run();