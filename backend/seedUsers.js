import dotenv from "dotenv";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import User from "./models/User.js";

dotenv.config();


const users = [
  {
    name: "Ahmed",
    email: "ahmed@test.com",
    password: "123456"
  },
  {
    name: "John",
    email: "john@test.com",
    password: "123456"
  }
];


const seedUsers = async () => {

  try {

    await mongoose.connect(process.env.MONGO_URI);


    await User.deleteMany();


    const usersWithPasswords = await Promise.all(
      users.map(async (user) => {

        const hashedPassword = await bcrypt.hash(
          user.password,
          10
        );


        return {
          ...user,
          password: hashedPassword
        };

      })
    );


    await User.insertMany(usersWithPasswords);


    console.log("Demo users created");

    process.exit();


  } catch (error) {

    console.log(error);

    process.exit(1);

  }

};


seedUsers();