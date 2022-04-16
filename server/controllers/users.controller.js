const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Redd',
    email: 'john.redd@devmounta.in',
  },
];

let nextAvailableID = users.length + 1;

const createUser = (req, res) => {
  const { firstName, lastName, email } = req.body;

  const newUser = {
    id: nextAvailableID,
    firstName,
    lastName,
    email,
  };

  nextAvailableID++;

  users.push(newUser);

  return res.status(200).send(newUser);
};

const readUsers = (req, res) => {
  return res.status(200).send(users);
};

const readUser = (req, res) => {
  const id = +req.params.id;

  const user = users.find((u) => u.id === id);

  if (!user) {
    return res.status(400).send('Invalid User ID.');
  }

  return res.status(200).send(user);
};

const updateUser = () => {};

const deleteUser = () => {};

module.exports = {
  users,
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
};
