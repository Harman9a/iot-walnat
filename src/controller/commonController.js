const { pgClient } = require("../db/connection");

const { uploadImage } = require("../service/imageUploader");

const vertifyTokenStatus = async (req, res) => {
  try {
    res.status(200).json(true);
  } catch (err) {
    res.status(500).json(err);
  }
};

const updateProfile = async (req, res) => {
  uploadImage(req, res, async function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    try {
      const { name, email, phone, token } = req.body;

      let result = await pgClient.query(
        "UPDATE users SET name=$1, email=$2, phone=$3 where jwt=$4",
        [name, email, phone, token]
      );

      res.json({ name, email, phone, token });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });
};

module.exports = { vertifyTokenStatus, updateProfile };
