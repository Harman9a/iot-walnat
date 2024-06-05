const { pgClient } = require("../db/connection");

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
    const { name } = req.body;

    await pgClient.query("INSERT INTO users (name) VALUES ($1)", [name]);
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
};
