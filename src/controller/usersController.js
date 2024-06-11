const { pgClient } = require("../db/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const getAdmins = async (req, res) => {
  try {
    let data = await pgClient.query("SELECT * FROM users WHERE role=$1", [1]);
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addAdmin = async (req, res) => {
  try {
    const { name, email, phone, password, photo, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    await pgClient.query(
      "INSERT INTO users (name,email,phone,password,photo,role) VALUES ($1,$2,$3,$4,$5,$6)",
      [name, email, phone, hashedPassword, photo, 1]
    );
    res.json({
      message: "A new person was created",
      body: {
        user: { name },
      },
    });
  } catch (err) {
    res.json(err);
  }
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    let data = await pgClient.query("SELECT * FROM users where email=$1", [
      email,
    ]);

    const passwordMatch = await bcrypt.compare(password, data.rows.password);

    // if (!passwordMatch) {
    //   return res.status(401).json({ error: "Authentication failed" });
    // }

    const token = jwt.sign({ email: email }, "abc", {
      expiresIn: "12h",
    });

    res.status(200).json({ data: data.rows, token, hashedPassword });
  } catch (err) {
    res.json(err);
  }
};

const updateUsers = async (req, res) => {
  try {
    await pgClient.query("UPDATE users SET name = $1 WHERE id = $2", [
      req.body.name,
      req.body.id,
    ]);
    res.json("User updated");
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUsers = async (req, res) => {
  try {
    await pgClient.query("DELETE FROM users where id = $1", [req.body.id]);
    res.json(`User ${req.body.id} was deleted `);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  getAdmins,
  addAdmin,
  updateUsers,
  deleteUsers,
  loginUser,
};
