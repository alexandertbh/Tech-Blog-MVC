const router = require("express").Router();
const { Post, User } = require("../../models");

var logged;
// send homepage as initial action
router.get("/login", (req, res) => {
  // prevent user from accessing login page if they are already logged in
  if (req.session.logged_in) {
    return res.redirect("/");
  }
  // direct to login page and send session logged in status
  res.render("login", {
    logged_in: req.session.logged_in,
  });
});

// router.get("/", async (req, res) => {
//     try {
//       // check if user has an id in session
//       if (req.session.user_id) {
//         const dbResponse = await Post.findAll({
//           include: [
//             { model: User, where: { id: req.session.user_id } },
//           ],
//         });
//         const filterData = await dbResponse.map((post) =>
//           post.get({ plain: true })
//         );

//         for (let i = 0; i < filterData.length; i++) {
//           const post = filterData[i];
//           const createdDate = filterData[i].createdAt;
//           }
//         }

//         res.render("homepage", {
//           yourPosts: filterData,
//           logged_in: req.session.logged_in,
//         });
//       } else {
//         // someObj = {};
//         res.redirect("login");
//       }
//     } catch (err) {
//       console.log(err);
//       return res.status(500).json({ msg: "some error", err: err });
//     });

router.get("/", (req, res) => {
  if (req.session.logged_in) {
    Post.findAll({
      include: [User],
    }).then((postData) => {
      const hbsData = postData.map((post) => post.get({ plain: true }));
      console.log(hbsData);
      res.render("homepage", {
        allPosts: hbsData,
        logged_in: req.session.logged_in,
      });
      // return res.redirect("/");
    });
  } else {
    someObj = {};
    res.render("login");
  }
});

router.get("/posts", async (req, res) => {
  if (req.session.logged_in) {
    try {
      res.render("posts_overview", { logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "an error occured", err: err });
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/CreatePost", async (req, res) => {
  if (req.session.logged_in) {
    try {
      res.render("create_posts", { logged_in: req.session.logged_in });
    } catch (err) {
      console.log(err);
      return res.status(500).json({ msg: "an error occured", err: err });
    }
  } else {
    res.redirect("/login");
  }
});

router.get("/post/:id", (req, res) => {
  Post.findByPk(req.params.id, {}).then((dbResponse) => {
    const taskData = dbResponse.get({ plain: true });
    res.render("edit_post", taskData);
  });
});

module.exports = router;
