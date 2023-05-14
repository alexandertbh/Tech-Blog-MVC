const router = require("express").Router();

const userRoutes = require("./user");
router.use("/users", userRoutes);

const postRoutes = require("./post");
router.use("/posts", postRoutes);

// const projectRoutes = require('./comment')
// router.use("/projects", projectRoutes)

module.exports = router;
