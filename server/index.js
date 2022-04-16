const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 9000;

const {
  createPost,
  readPosts,
  readPostsByUserID,
  readPost,
  // updatePost,
  // deletePost,
} = require('./controllers/posts.controller');

const {
  createUser,
  readUsers,
  readUser,
  // updateUser,
  // deleteUser,
} = require('./controllers/users.controller');

app.use(express.json());
app.use(cors());

app.post('/api/posts', createPost);
app.get('/api/posts', readPosts);
app.get('/api/posts/:id', readPost);
// app.put('/api/posts/:id', updatePost);
// app.delete('/api/posts/:id', deletePost);

app.post('/api/users', createUser);
app.get('/api/users', readUsers);
app.get('/api/users/:id', readUser);
app.get('/api/users/:id/posts', readPostsByUserID);
// app.put('/api/users/:id', updateUser);
// app.delete('/api/users/:id', deleteUser);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
