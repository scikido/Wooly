import User from "@/models/userModel";
import { db } from "@/utils/db";
import bcryptjs from "bcryptjs";

const handeler = async (req, res) => {
  if (req.method !== "POST") {
    return;
  }
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    res.status(422).json({ message: "Please fill all the fields!" });
    return;
  }

  await db.connect();

  const existingUser = await User.findOne({ email: email });
  if (existingUser) {
    res.status(422).json({ message: "User already exists!" });
    await db.disconnect();
    return;
  }
  const newUser = new User({
    name,
    email,
    password: bcryptjs.hashSync(password),
  });

  const user = await newUser.save();
  await db.disconnect();
  res.status(201).json({
    message: "User created successfully!",
    _id: user._id,
    name: user.name,
    email: user.email,
  });
};

export default handeler;
