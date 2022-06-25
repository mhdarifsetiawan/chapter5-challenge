// const userColection = [
//   {
//     idUser: {
//       id: "Id User",
//       nama: "Nama User",
//       password: "Password User",
//     },
//   },
// ];

const userColection = [];

const getUsers = (req, res) => {
  return res.send("All Users!");
};

module.exports = { getUsers };
