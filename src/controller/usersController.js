const { pgClient } = require("../db/connection");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");

const getAdmins = async (req, res) => {
  try {
    let data = await pgClient.query("SELECT * FROM users WHERE role=$1", [1]);
    res.status(200).json(data.rows);
  } catch (err) {
    res.status(500).json(err);
  }
};

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/profile/");
  },
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    const filename = `${file.fieldname}-${Date.now()}${ext}`;
    cb(null, filename);
  },
});

const upload = multer({ storage }).single("image");

const addAdmin = async (req, res) => {
  // const upload = multer({ dest: "./src/testingImages/" }).single("image"); // 'uploads/' is the folder where files will be stored

  upload(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const { name, email, phone, password, role } = req.body;
      const hashedPassword = await bcrypt.hash(password, 10);
      const photo = req.file ? req.file.filename : null; // Get the uploaded file's filename
      let result = await pgClient.query(
        "INSERT INTO users (name, email, phone, password, photo, role) VALUES ($1, $2, $3, $4, $5, $6)",
        [name, email, phone, hashedPassword, photo, 1]
      );
      res.json({
        message: "A new person was created",
        body: {
          user: { result },
        },
      });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    let data = await pgClient.query("SELECT * FROM users where email=$1", [
      email,
    ]);

    if (data.rows.length !== 0) {
      let userData = data.rows[0];

      const passwordMatch = await bcrypt.compare(password, userData.password);

      if (!passwordMatch) {
        return res.status(401).json({ error: "Authentication failed" });
      }

      const token = jwt.sign({ email: email }, "abc", {
        expiresIn: "12h",
      });

      res.status(200).json({
        data: {
          name: userData.name,
          email: userData.email,
          role: userData.role,
        },
        token,
      });
    } else {
      return res.status(401).json({ error: "Authentication failed" });
    }
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

const deleteAdmin = async (req, res) => {
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
  deleteAdmin,
  loginUser,
};
