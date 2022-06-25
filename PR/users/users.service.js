let userId = 1;
const userColection = [];

// View all users
const getUsers = (req, res) => {
  if (userColection.length === 0) {
    return res.send("Belum ada user yang terdaftar!");
  }
  return res.json(userColection);
};

// View 1 user
const getUser = (req, res) => {
  const { userId } = req.params;

  const filterUser = userColection.filter((user) => {
    return user.id == userId;
  });
  return res.json(filterUser);
};

// Create user
const createUser = (req, res) => {
  const newUser = req.body;
  userColection.push({
    id: userId,
    nama: newUser.nama,
    password: newUser.password,
  });
  userId++;
  return res.json(userColection);
};

// Update data user
const updateUser = (req, res) => {
  const { userId } = req.params;

  const filterUser = userColection.find((user) => {
    return user.id == userId;
  });

  filterUser.nama = req.body.nama;
  filterUser.password = req.body.password;

  return res.send(filterUser);
};

// Delet user
const deleteUser = (req, res) => {
  const { userId } = req.params;

  const findUser = userColection.find((user) => {
    return user.id == userId;
  });
  const findUserIndex = userColection.findIndex((user) => {
    return user.id == findUser.id;
  });

  userColection.splice(findUserIndex, 1);
  return res.send(`User ${findUser.id} Deleted`);
};

module.exports = { getUsers, getUser, createUser, updateUser, deleteUser };
