const UserService = require("../services/user.services");

module.exports = class Users {
  static async apiGetAllUsers(req, res, next) {
    try {
      const users = await UserService.getAllUsers();
      if (!users) {
        res.status(404).json("There are no users yet!");
      }
      res.json(users);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCreateUser(req, res, next) {
    try {
      console.log(req);
      if (!req.body.name) {
        res.status(400).send({
          message: "Content can not be empty!",
        });
        return;
      }
      const createdUser = await UserService.addUser(req.body);
      res.json(createdUser);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }

  static async apiCheckIDToken(req, res, next) {
    try {
      console.log(req);
      const decodedToken = await UserService.checkIDToken(req.body);
      console.log(decodedToken);
      res.json(decodedToken);
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
};
