const sequelize = require("../config");
const { Comment, User, Post } = require("../models");
// const commentSeeds = require("./comment");
const userSeeds = require("./user");
const postSeeds = require("./posts");

const startSeedin = async () => {
  try {
    await sequelize.sync({ force: true });
    const postData = await Post.bulkCreate(postSeeds);
    const userData = await User.bulkCreate(userSeeds, {
      individualHooks: true,
    });
    // const commentData = await Comment.bulkCreate(commentSeeds);

    for (let i = 0; i < userData.length; i++) {
      await userData[i].addposts(i);
    }

    process.exit(0);
  } catch (err) {
    console.log(err);
  }
};

startSeedin();
