const jwt = require("jsonwebtoken");

const authMiddelware = (req, res, next) => {
  const token = req.cookies.token;
  //   console.log(req.cookies.token);

  if (!req.cookies || !req.cookies.token) {
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("Decoded Token:", decoded);
    req.user = decoded; // Attach decoded userId to request object
    next();
  } catch (error) {
    res.status(403).json({ message: "Invalid or expired token" });
  }
};

module.exports = authMiddelware;
