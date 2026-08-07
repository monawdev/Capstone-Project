import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


// Login User
const loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;


    const user = await User.findOne({ email });


    if (!user) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }


    const passwordMatch = await bcrypt.compare(
      password,
      user.password
    );


    if (!passwordMatch) {
      return res.status(400).json({
        message: "Invalid email or password"
      });
    }


    const token = jwt.sign(
      {
        id: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );


    res.json({
      token,
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }
    });


  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};


export {
  loginUser
};