module.exports = (req, res, next) => {
  if (!req.user)
    return res.status(401).send({ error: "User is not logged in" });

  // user is logged in
  next();
}
