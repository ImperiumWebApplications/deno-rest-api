const express = require("express");
const router = express.Router();

const posts = [];
// GET posts
router.get("/", (req, res) => {
  res.send(posts);
});

// POST posts
router.post("/", (req, res) => {
  const id = posts.length + 1;
  const postText = req.body.text;
  posts.push({
    id,
    text: postText,
  });
  res.status(201).send({ id, postText });
});

// PUT posts
router.put("/:id", (req, res) => {
  const id = +req.params.id;
  const postText = req.body.text;
  const currentPostIndex = posts.findIndex((post) => post.id === id);
  posts[currentPostIndex] = {
    id,
    text: postText,
  };

  res.status(200).send({ id, postText });
});

// DELETE posts
router.delete("/:id", (req, res) => {
  try {
    const id = +req.params.id;
    const currentPostIndex = posts.findIndex((post) => post.id === id);
    posts.splice(currentPostIndex, 1);
    res.status(200).send({ id });
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
