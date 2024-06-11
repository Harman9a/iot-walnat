const { pgClient } = require("../db/connection");
const jwt = require("jsonwebtoken");

const getUsers = async (req, res) => {
  try {
    let data = await pgClient.query("SELECT * FROM users");
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const addUsers = async (req, res) => {
  try {
    const { email, password } = req.body;

    await pgClient.query("INSERT INTO users (email,password) VALUES ($1,$2)", [
      email,
      password,
    ]);
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

    let data = await pgClient.query(
      "SELECT * FROM users where email=$1 AND password=$2",
      [email, password]
    );

    const token = jwt.sign({ email: email }, "abc", {
      expiresIn: "1h",
    });

    res.status(200).json({ user: data.rows, token });
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
  getUsers,
  addUsers,
  updateUsers,
  deleteUsers,
  loginUser,
};
