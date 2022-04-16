const posts = [
  {
    id: 1,
    title: 'Hello World!',
    content: 'My name is John Redd!',
    publishDate: new Date(),
    userID: 1,
  },
];

let nextAvailableID = posts.length + 1;

const { users } = require('./users.controller');

const createPost = (req, res) => {
  const { title, content, userID } = req.body;

  const user = users.find((u) => u.id === userID);

  if (!user) {
    return res.status(400).send('Invalid User ID.');
  }

  const newPost = {
    id: nextAvailableID,
    title,
    content,
    publishDate: new Date(),
    userID,
  };

  nextAvailableID++;

  posts.push(newPost);

  return res.status(201).send(newPost);
};

const readPosts = (req, res) => {
  const postsWithUsers = posts.map((p) => {
    const user = users.find((u) => u.id === p.userID);

    p.user = user;

    return p;
  });

  return res.status(200).send(postsWithUsers);
};

const readPostsByUserID = (req, res) => {
  const userID = +req.params.id;

  const userPosts = posts.filter((p) => p.userID === userID);

  return res.status(200).send(userPosts);
};

const readPost = (req, res) => {
  const id = +req.params.id;

  const post = posts.find((p) => p.id === id);

  if (!post) {
    return res.status(400).send('Invalid Post ID.');
  }

  return res.status(200).send(post);
};

const updatePost = () => {};

const deletePost = () => {};

module.exports = {
  createPost,
  readPosts,
  readPostsByUserID,
  readPost,
  updatePost,
  deletePost,
};
