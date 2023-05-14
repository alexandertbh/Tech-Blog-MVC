const router = require("express").Router();

const userRoutes = require("./user");
router.use("/users", userRoutes);

// const taskRoutes = require('./post')
// router.use("/tasks", taskRoutes)

// const projectRoutes = require('./comment')
// router.use("/projects", projectRoutes)

module.exports = router;
