const userColection = [
  {
    username: "arif01",
    name: "Muhammad Arif Setiawan",
    class: "FSW - Wave 23",
    facil: "Lilik Setiyawan",
  },
];

const getChapter3 = (req, res) => {
  return res.render("chapter3/index.ejs");
};

const getChapter4 = (req, res) => {
  return res.render("chapter4/index.ejs");
};

// login
const getUser = (req, res) => {
  const { userName } = req.params;

  const filterUser = userColection.filter((user) => {
    return user.username == userName;
  });

  if (filterUser.length !== 0) {
    return res.json(filterUser);
  } else {
    return res.send("Anda belum terdaftar");
  }
};

module.exports = { getChapter3, getChapter4, getUser };
