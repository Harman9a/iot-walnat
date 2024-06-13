const vertifyTokenStatus = async (req, res) => {
  try {
    res.status(200).json(true);
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = { vertifyTokenStatus };
