const BlogPost = require("../models/BlogPost");
const path = require("path");

module.exports = async (req, res) => {
  try {
    let image = req.files.image;
  console.log(req.session, 'session');
    image.mv(
      path.resolve(__dirname, "public/img", image.name),
      async (error) => {
        await BlogPost.create({ ...req.body, image: "/img/" + image.name, userid: req.session.userId });
        res.redirect("/");
      }
    );
  } catch (e) {
    console.log(e);
  }
};
