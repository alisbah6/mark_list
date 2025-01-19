const User = require("../models/user.js");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  try {
    const { email, username, password } = req.body;

    // Validate input
    if ((!email && !username) || !password) {
      return res.status(400).json({ error: "Email/Username and password are required" });
    }

    // Find user by email or username
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.status(400).json({ error: "Invalid email/username or password" });
    }

    // Validate password
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid email/username or password" });
    }

    // Generate JWT
    const token = jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};


// Register a new user
const register = async (req, res) => {
  try {
    const { name, username, email, password, confirmpassword, role } = req.body;

    // Validate input
    if (!name || !username || !email || !password || !confirmpassword || !role) {
      return res.status(400).json({ error: "All fields are required" });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    // Check if user already exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: "Email or Username already exists" });
    }

    // Create new user
    const newUser = new User({ name, username, email, password,confirmpassword, role });
    await newUser.save();

    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error" });
  }
};
const recovery_password = async (req, res) => {
  try {
    const { email, username } = req.body;

    // Validate input
    if (!email && !username) {
      return res.status(400).json({ error: "Email or Username is required." });
    }

    // Find the user by email or username
    const user = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // If user exists, respond with success
    res.status(200).json({ message: "User exists." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};

const resetPassword = async (req, res) => {
  try {
    const { email, username, password, confirmpassword } = req.body;

    // Validation
    if (!email && !username) {
      return res.status(400).json({ error: "Email or Username is required." });
    }

    if (!password || !confirmpassword) {
      return res.status(400).json({ error: "Both password fields are required." });
    }

    if (password !== confirmpassword) {
      return res.status(400).json({ error: "Passwords do not match." });
    }

    if (password.length < 8) {
      return res.status(400).json({ error: "Password must be at least 8 characters long." });
    }

    // Find the user by email or username
    const user = await User.findOne({ $or: [{ email }, { username }] });
    if (!user) {
      return res.status(404).json({ error: "User not found." });
    }

    // Check if the new password is different from the old one (optional)
    const isSamePassword = await user.validatePassword(password);
    if (isSamePassword) {
      return res.status(400).json({ error: "New password must be different from the old password." });
    }

    // Update password and mark it as modified
    user.password = password;
    user.markModified("password"); // Explicitly mark the password as modified
    await user.save();

    res.status(200).json({ message: "Password updated successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal server error." });
  }
};




module.exports = { register,login,recovery_password,resetPassword};
