const userService = require("../services/userService");

exports.login = async (req, res) => {
  const code = req.query.code;

  if (!code) {
    return res.send("No code provided");
  }

  try {
    const userInfo = await userService.getKakaoUserInfo(code);
    const user = await userService.findOrCreateUser(userInfo);
    res.send(user);
  } catch (error) {
    if (error.code === 11000) {
      res.status(409).send("Duplicate key error: User already exists");
    } else {
      res.status(500).send("Internal Server Error");
    }
  }
};
